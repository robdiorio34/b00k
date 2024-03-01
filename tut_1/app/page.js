import LikeButton from './like-button';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
//export default tells next.js this is the main component 
export default function HomePage() {
  const names = ['Sam Mandelamdbuanm', 'Name Number two2', 'zachCAEOg'];
 

  return (
    <div>
      <Header title="List of sick people I know" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <LikeButton/>
 
    </div>
  );
}