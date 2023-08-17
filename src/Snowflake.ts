export default class Snowflake {
  private static readonly MAX_SEQUENCE = 4095; // 12 bits for sequence
  private static readonly MAX_MACHINE_ID = 31; // 5 bits for machine ID
  private static readonly MAX_DATACENTER_ID = 31; // 5 bits for data center ID

  private sequence: number = 0;
  private lastTimestamp: number = -1;
  private readonly machineId: number;
  private readonly datacenterId: number;
  private readonly epoch: number; // Epoch as a timestamp

  constructor(
    datacenterId: number,
    machineId: number,
    epoch: string = "2023-01-01",
  ) {
    if (
      datacenterId > Snowflake.MAX_DATACENTER_ID ||
      machineId > Snowflake.MAX_MACHINE_ID
    ) {
      throw new Error("Datacenter ID or Machine ID out of range");
    }
    this.datacenterId = datacenterId;
    this.machineId = machineId;
    this.epoch = new Date(epoch).getTime();
  }

  private getTimestamp(): number {
    return Date.now() - this.epoch;
  }

  private tilNextMillis(lastTimestamp: number): number {
    let timestamp: number = this.getTimestamp();
    while (timestamp <= lastTimestamp) {
      timestamp = this.getTimestamp();
    }
    return timestamp;
  }

  public generateId(): string {
    let timestamp: number = this.getTimestamp();

    if (timestamp < this.lastTimestamp) {
      throw new Error("Clock moved backwards, unable to generate ID");
    }

    if (timestamp === this.lastTimestamp) {
      this.sequence = (this.sequence + 1) & Snowflake.MAX_SEQUENCE;
      if (this.sequence === 0) {
        timestamp = this.tilNextMillis(this.lastTimestamp);
      }
    } else {
      this.sequence = 0;
    }

    this.lastTimestamp = timestamp;

    const binaryTimestamp: string = timestamp.toString(2).padStart(41, "0");
    const binaryDatacenter: string = this.datacenterId
      .toString(2)
      .padStart(5, "0");
    const binaryMachine: string = this.machineId.toString(2).padStart(5, "0");
    const binarySequence: string = this.sequence.toString(2).padStart(12, "0");

    const binarySnowflake: string =
      "0" + // Unused bit
      binaryTimestamp +
      binaryDatacenter +
      binaryMachine +
      binarySequence;

    return BigInt("0b" + binarySnowflake).toString();
  }
}
