import { ObjectID } from '../../models/object-id';
import { Observable } from 'rxjs';

export interface CrudRead<T extends ObjectID> {
  getAll(): Observable<T[]>;

  get(id: string): Observable<T>;
}
