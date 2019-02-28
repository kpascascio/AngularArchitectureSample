export class Tracks {
  value: number;
  view: string;

  generalTrack(): Array<any> {
    return [
      {
        value: 0,
        view: '.NET'
      },
      {
        value: 1,
        view: 'JavaScript'
      },
      {
        value: 2,
        view: 'Python'
      }
    ];
  }
}
