export default {
    newMessageButton: '#side > header > div._1eNef > div > span > div:nth-child(2) > div > span',
    searchContactTextArea: '#app > div > div > div._3Bog7 > div.i5ly3._2NwAr > span > div > span > div > div:nth-child(2) > div > label > div > div._1awRl.copyable-text.selectable-text',
    
    messageBoxArea: '#main > footer > div._3SvgF._1mHgA.copyable-area > div.DuUXI > div > div._1awRl.copyable-text.selectable-text',
    sendMessageButton: '#main > footer > div._3SvgF._1mHgA.copyable-area > div:nth-child(3) > button',
    
    
    selectSearchedContact: {
        
        allContactsBox: 'html > body > div > div > div > div:nth-child(2) > div > span > div > span > div > div:nth-child(3) > div > div > div > div',
        contactMatchedText: 'div > div > div:nth-child(2) > div > div > span',
        getSearchedContact: (contactIndex) => {
            return 'html > body > div > div > div > div:nth-child(2) > div > span > div > span > div > div:nth-child(3) > div > div > div > div:nth-child(' 
            + contactIndex.toString() + ')'
        }
    },

    waMeInvalidPhoneNumberDialogButton: 'html > body > div:nth-child(1) > div > span:nth-child(2) > div > span > div > div > div > div > div > div:nth-child(2) > div'
    
}