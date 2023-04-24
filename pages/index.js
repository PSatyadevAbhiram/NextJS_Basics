import MeetupList from '../components/meetups/MeetupList';

const DUMMY_LIST = [
    {
        id: 'm1',
        image: 'https://media.istockphoto.com/id/183276247/photo/parliament-hill-ottawa-canada.jpg?s=1024x1024&w=is&k=20&c=dv-APnwXuPsVVv-Tt7hEMXqTel2AhVl82KN5KAx5bHs=',
        title: 'First meetup',
        address: 'Ottawa',
        description: 'PH'
    },
    {
        id: 'm2',
        image: 'https://media.istockphoto.com/id/183276247/photo/parliament-hill-ottawa-canada.jpg?s=1024x1024&w=is&k=20&c=dv-APnwXuPsVVv-Tt7hEMXqTel2AhVl82KN5KAx5bHs=',
        title: 'Second meetup',
        address: 'Ottawa',
        description: 'PH'
    }
]

function HomePage(){
    return <HomePage meetups={DUMMY_LIST} />
}
export default HomePage;
