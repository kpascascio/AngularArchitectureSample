export class Badges {
  value: number;
  view: string;
  className: string;

  generalBadges(): Array<any> {
    return [
      { value: 0, view: 'White', className: 'white' },
      { value: 1, view: 'Gold', className: 'gold' },
      { value: 2, view: 'Blue', className: 'blue' },
      { value: 3, view: 'Red', className: 'red' },
      { value: 4, view: 'Purple', className: 'purple' }
    ];
  }
}
