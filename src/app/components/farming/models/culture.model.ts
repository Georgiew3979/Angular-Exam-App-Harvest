export class CultureModel {
  constructor(
    public name: string,
    public type: string,
    public imageLink: string,
    public crop?: number,
    public dateOfSeed?: string,
    public harvests?: [any]
  ) { }
}

