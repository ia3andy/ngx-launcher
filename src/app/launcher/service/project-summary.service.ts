import { Observable } from 'rxjs';
import { Context } from 'ngx-fabric8-wit';

import { Summary } from '../model/summary.model';

/**
 * Abstract project summary service provided to ensure consumer implements this pattern
 */
export abstract class ProjectSummaryService {
  /**
   * Set up the project for the given summary
   *
   * @param {Summary} summary The project summary
   * @returns {Observable<boolean>}
   */
  abstract setup(summary: Summary, spaceId: string, spaceName: string, isImport: boolean): Observable<boolean>;

  /**
   * Get the current context details
   *
   * @returns {Observable<Context>}
   */
  abstract getCurrentContext(): Observable<Context>;
}
