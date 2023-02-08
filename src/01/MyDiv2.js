const MyDiv2 = () => {
  const myName = '김경민' ;
  const myGit = 'https://github.com/pnumin/K-digital-2023-2';
  return (
    
    <div>
        <p>{myName}</p>
        <p>GiHub : <a href={myGit}>{myGit}</a></p> 

    </div>
  );
}

export default MyDiv2;