export class FieldModel {
  constructor(
    public name : string,
    public location : string,
    public width: number,
    public length: number,
    public productionYear: number,
    public agroCulture?: [any],
    public actions?: [any],
    public harvests?: [any]
  ) { }
}

