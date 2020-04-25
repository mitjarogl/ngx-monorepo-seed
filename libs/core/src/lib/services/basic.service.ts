import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from '../environment';
import { OperationNotSupportedException } from '../exceptions/OperationNotSupported.exception';

export class BasicService<T> {
  constructor(
    private readonly http: HttpClient,
    private readonly environment: Environment,
    private readonly urlPathKey: string,
    private readonly supportList = true,
    private readonly supportGet = true,
    private readonly supportStore = true,
    private readonly supportUpdate = true,
    private readonly supportRemove = true
  ) {}

  list(): Observable<T[]> {
    if (!this.supportList) {
      throw new OperationNotSupportedException(
        `list entities '${this.urlPathKey}'`
      );
    }
    return this.http.get<T[]>(`${this.environment.apiUrl}/${this.urlPathKey}`);
  }

  get(id: string): Observable<T> {
    if (!this.supportGet) {
      throw new OperationNotSupportedException(
        `get entity '${this.urlPathKey}'`
      );
    }

    return this.http.get<T>(
      `${this.environment.apiUrl}/${this.urlPathKey}/${id}`
    );
  }

  store(entity: T): Observable<T> {
    if (!this.supportStore) {
      throw new OperationNotSupportedException(
        `store entity '${this.urlPathKey}'`
      );
    }

    return this.http.post<T>(
      `${this.environment.apiUrl}/${this.urlPathKey}`,
      entity
    );
  }

  update(id: string, entity: T): Observable<T> {
    if (!this.supportUpdate) {
      throw new OperationNotSupportedException(
        `update entity '${this.urlPathKey}'`
      );
    }
    return this.http.patch<T>(
      `${this.environment.apiUrl}/${this.urlPathKey}/${id}`,
      entity
    );
  }

  remove(id: string): Observable<T> {
    if (!this.supportRemove) {
      throw new OperationNotSupportedException(
        `remove entity '${this.urlPathKey}'`
      );
    }

    return this.http.delete<T>(
      `${this.environment.apiUrl}/${this.urlPathKey}/${id}`
    );
  }
}
