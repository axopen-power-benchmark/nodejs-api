function PersonnalError(message, error) {
    this.message = message;
    this.name = 'PersonnalError';
    this.error = error;
}

function getCustomResMessage(defaultMessage, e){
    return e instanceof PersonnalError ? e.message : defaultMessage;
}

module.exports = {PersonnalError, getCustomResMessage};
