// domain-name.com/new-meetup
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';

function NewMeetupPage(){
    console.log(enteredData);
    async function addMeetupHandler(enteredData){
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredData),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }
    return <Fragment>
        <Head>
            <title>Add New Meetup</title>
        </Head>
        <NewMeetupForm onAddMeetup ={addMeetupHandler}/>
    </Fragment> 
}

export default NewMeetupPage;