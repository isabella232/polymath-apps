import { Polymath } from '~/Polymath';
import v4 from 'uuid/v4';
import { serialize } from '~/utils';

export abstract class Entity {
  public abstract entityType: string;
  public abstract uid: string;
  protected polyClient: Polymath;

  constructor(polyClient?: Polymath) {
    if (!polyClient) {
      throw new Error(
        'Entity class should always be initialized through the Polymath client'
      );
    }

    this.polyClient = polyClient;
  }

  public abstract toPojo(): any;

  protected generateId() {
    const { entityType } = this;

    return serialize(entityType, {
      random: v4(),
    });
  }
}