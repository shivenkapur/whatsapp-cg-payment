import openWhatsapp from './whatsappFunctions/openWhatsapp/openWhatsapp.js'
import searchForContact from './whatsappFunctions/searchForContact/searchForContact.js'
import selectSearchedContact from './whatsappFunctions/selectSearchedContact/selectSearchedContact.js'
import sendMessage from './whatsappFunctions/sendMessage/sendMessage.js'
import clickNewMessageButton from './whatsappFunctions/clickNewMessageButton/clickNewMessageButton.js'
import getContactViaWaMe from './whatsappFunctions/getContactViaWaMe/getContactViaWaMe.js';

const messageText = `/payment`;
export default async function start (){

    const phoneNumbers = ['96444161',
'67344190',
'97548887',
'91697259',
'69338862',
'96519103',
'96178725',
'97507742',
'97842827',
'68239506',
'65931569',
'95771998',
'97449865',
'62522688',
'53678028',
'53678028',
'97319717',
'68550525',
'68903048',
'61214455',
'61326178',
'93167239',
'54021883',
'62152694',
'64182975',
'60931800',
'96435442',
'98606079',
'66807290',
'92712156',
'68169386',
'60313213',
'65463004',
'60283291',
'69923059',
'51192276',
'91928920',
'93489766',
'51349216',
'66446305',
'60995267',
'90636580',
'68426067',
'92641659',
'67712606',
'67712606',
'91939918',
'68995312',
'54074059',
'92597648',
'51270101',
'66833615',
'56213045',
'62749104',
'91055665',
'62558733',
'61115565',
'60557325',
'67712606',
'55423811',
'61914965',
'91476574',
'60557325',
'92237044',
'93701765',
'62210860',
'51820895',
'92062046',
'56256228',
'66807582',
'64060003',
'95149473',
'61907962',
'94148616',
'64881158',
'55461780',
'98722654',
'61214455',
'93454023',
'66234882',
'96018387',
'56256228',
'95558527',
'53196936',
'92010702',
'66209099',
'92128677',
'60824319',
'61782633',
'93088559',
'60248920',
'90835379',
'96667959',
'92029964',
'54000182',
'51616975',
'60890818',
'69770873',
'60215729',
'56448356',
'64161648',
'61899739',
'64083386',
'54021883',
'63373031',
'68395297',
'51886520',
'51189798',
'64160299',
'64806263',
'60160700',
'92528205',
'60175050',
'65466846',
'63083822',
'91556108',
'53000285',
'61115565',
'63573311',
'54980023',
'63330118',
'51616975',
'97210044',
'95771998',
'60824319',
'91862250',
'91862250',
'60824319',
'96787675',
'96787675',
'98870699',
'51777377',
'67487790',
'65006502',
'63844807',
'93432686'];

    const sent = [];
    let values = await openWhatsapp();
    let page = values[0];
    try{
        for(let phoneNumberIndex = 0; phoneNumberIndex < phoneNumbers.length; phoneNumberIndex++){
            let phoneNumber = phoneNumbers[phoneNumberIndex];
    
            await clickNewMessageButton(page)
    
            let contactSearched = await searchForContact(page, phoneNumber) // true or false
            let contactClicked = await selectSearchedContact(page)
    
            let messageSent = false;
            
            if(contactClicked)
                messageSent = await sendMessage(page, messageText, contactClicked)
            
            sent.push(messageSent)
        }
        
    } catch(error){
        console.log("error:", error);
        sent.push(false)
        console.log(sent)
    }
    console.log(sent)
    await new Promise(resolve => setTimeout(resolve, 30000));
    process.exit()
}
start()

