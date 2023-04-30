export class UserCreatedDomainEvent {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly age: number,
  ) {}
}
