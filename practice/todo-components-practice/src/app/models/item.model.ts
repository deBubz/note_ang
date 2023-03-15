
// simple item array for now
// sort out unique list later

// test out if the id counter works as expected
// this gonna increase for all component
// let GLOBAL_COUNTER = 0;
export type PrioTypes = "low" | "medium" | "high";

export class Item {
  id: number;
  description: string;
  priority: PrioTypes;
  completed: boolean;

  constructor(
    desc: string,
    prio: PrioTypes
  ) {
    // this.id = GLOBAL_COUNTER++;
    this.id = 0;
    this.description = desc;
    this.priority = prio;
    this.completed = false;
  }

  updatePriority(prio: PrioTypes): void {
    this.priority = prio;
  }

  completeTask(): void {
    this.completed = true;
  }
}
