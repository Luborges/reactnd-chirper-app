import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets';

export default function users (state = {}, action) {
    const actions = {
        [RECEIVE_TWEETS]: () => {
            return {
                ...state,
                ...action.tweets
            }
        },
        [TOGGLE_TWEET]: () => {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked ? state[action.id].likes.filter((uid) => uid !== action.authedUser) 
                    : state[action.id].likes.concat([action.authedUser])
                }
            }
        },
        [ADD_TWEET]: () => {
            const { tweet } = action;

            let replyingTo = {};
            if (tweet.replyingTo) {
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[[tweet.replyingTo]],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }

            return {
                ...state,
                [action.tweet.id]: action.tweet,
                ...replyingTo

            }
        }
    }
    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}