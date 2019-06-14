export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Ahmad' },
      { id: 12, name: 'Bahi' },
      { id: 13, name: 'Choiri' },
      { id: 14, name: 'Din' },
      { id: 15, name: 'Effendi' },
      { id: 16, name: 'Fahim' },
      { id: 17, name: 'Ghazali' },
      { id: 18, name: 'Hasan' },
      { id: 19, name: 'Ihdi' },
      { id: 20, name: 'Jamal' }
    ];
    return { heroes };
  }
}
