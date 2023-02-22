export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected force: number,
    protected life: number,
  ) {}

  attack(personagem: Personagem): void {
    this.bordao();
    personagem.loseLife(this.force);
  }

  loseLife(attackForce: number): void {
    this.life -= attackForce;
    console.log(
      `${this.emoji} - ${this.name} agora tem ${this.life} de vida...`,
    );
  }

  abstract bordao(): void;
}

export class Warrior extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + ' GUERREIRO AO ATAQUEEE!!!!!');
  }
}
export class Monster extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + ' UAAARGH! MORRAAAA!! ');
  }
}

const warrior = new Warrior('Warrior', 100, 1000);
const monster = new Monster('Monstro', 87, 1000);

warrior.attack(monster);
warrior.attack(monster);
warrior.attack(monster);
console.log('-------');
monster.attack(warrior);
monster.attack(warrior);
monster.attack(warrior);
