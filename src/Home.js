import React from 'react';

function Home(props){
	const images = props.images.map((img,i)=>{
		return(
			<img src={img} key={i} style={{width:400}}/>
		)
	});
	console.log(images);

	return (
		<div>
			<h1>A page about Atlanta!</h1>
			{images}
		</div>
	)
}

export default Home;