const numUniqueEmails = (emails) => {
    let set = new Set();

    emails.forEach(email => {
        let [local, domain] = email.split('@');
        let newEmail = '';
        let [str] = local.split('+');
        newEmail += str.split('.').join('') + '@' + domain;
        set.add(newEmail);
    });

    return set.size;
};