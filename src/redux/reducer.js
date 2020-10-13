import { EXERCISES } from '../shared/exercises';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    dishes: EXERCISES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};