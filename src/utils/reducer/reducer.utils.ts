//AnyAction: Action<T>{type:T} + extraProps
import { AnyAction } from "redux";

/**
 * AC: ActionCreator
 * extends a function that gives back AnyAction: Action with possible extraProps
 * intersection (merges two types) of AC and the type of the action itself (got by ReturnType)
 * we are getting the 'type' from the type property by ['type'] (since it may have payload too)
 * match method receives an action. We will be comparing our type against this action (Type Predicate Function)
 * match will narrow the type down if tit passes the check
 * since match receives an action which is casted to the AC action type in this Matchable type
 */
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

//checking matching the action received from the reducer to the action type of the actionCreator, and narrowing
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  //creation of the actual mappable object
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      //if this is true the action is narrowed from AnyAction to the ReturnedType<AC>
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

//Overloading the below Base, with payload:
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

//Overloading the below Base, without payload:
export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

//Overload Base:
//T - action-type enum
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
