import { IGetRoversCuriocityResponse } from './rover_curiocity/rover_curiocity-types';
export class DummyData {
  static get getRoversCuriosityPhotos(): Promise<IGetRoversCuriocityResponse> {
    const roverCuriocityPhotos = {
      photos: [
        {
          id: 32403,
          sol: 12,
          camera: {
            id: 26,
            name: 'NAVCAM',
            rover_id: 5,
            full_name: 'Navigation Camera',
          },
          img_src:
            'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00012/opgs/edr/ncam/NLA_398561794EDR_F0030004NCAM00400M_.JPG',
          earth_date: '2012-08-18',
          rover: {
            id: 5,
            name: 'Curiosity',
            landing_date: '2012-08-06',
            launch_date: '2011-11-26',
            status: 'active',
          },
        },
      ],
    } as IGetRoversCuriocityResponse;

    return Promise.resolve(roverCuriocityPhotos);
  }
}
