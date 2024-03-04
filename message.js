const moment = require("moment-timezone");

function formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().tz('Jaipur').format('h:mm a')
    }
}

export default formatMessage;