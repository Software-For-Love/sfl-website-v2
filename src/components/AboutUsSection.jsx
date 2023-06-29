import React from "react";
import { withPrefix } from "gatsby"
import "../sass/components/_image_group.scss";

export default class AboutUsSection extends React.Component {
	
  render() {
	let title = "About Us"
	let subtitle = "Our team is dedicated to providing a variety of services."
	let content = "We're constantly looking for new non-profits and charities who could benefit from the services that we provide."
	let align = "center" //CURRENTLY THIS JUST DOES NOTHING
	let image_group = [
	    {image: "images/webdevelopment_icon.svg", caption: "Web Development"},
		{image: "images/database_icon.svg", caption: "Database Management"},
		{image: "images/UI&UX_icon.svg", caption: "UI/UX Design"},
		{image: "images/data_icon.svg", caption: "Data Analytics"}
	]
	
	const IconGroup = ({ image, caption }) => {
		
		return 	(
			<div className="image-group-media">
				<img src={withPrefix(image)}/>
				<div style={{color:"#263455"}}>
					{caption}
				</div>
			</div>
		)

	}

    return (
		<section className="section section--features" style={{backgroundColor: '#F0F3F8', maxWidth: '1140px', marginRight: 'auto', marginLeft: 'auto', marginBottom: '0'}}>
		
			<div className="container container--md align-center" style={{paddingTop: "2em", marginBottom: "-2em"}}>
				<h2 className="section__title" style={{color:'#263455'}}>{title}</h2>
			</div>
			
			<div className={"flex flex--middle flex--center flex--col-2 align-center"}>

				<div className="flex-2 section__body cell" >
					<div>
						<div className="section__title" style={{fontSize: "1.4em", fontWeight: "bold", color:"#000"}}>
							{subtitle}
						</div>
						<div className="section__copy" style={{fontSize: "1.4em", color:"#000"}}>
							{content}
						</div>
					</div>
					<div className="image-group-container">
						{image_group.map((i) => (
						
							<IconGroup key={i} image={i.image} caption ={i.caption}/>
						
						))}
					</div>
					
					{/*<div className="image-group-container">
						map(_.get(feature, "image_group", null), (image_info, image_idx) => (
							<div className="image-group-media" key={image_idx}>
								<img src={withPrefix(_.get(image_info, "image", null))} alt={_.get(image_info, "image_alt", null)}/>
								<div style={{color:"#263455"}}>
									{_.get(image_info, "image_caption", null)}
								</div>
							</div>
						)
					</div>*/}
					
				</div>
			</div>
		</section>
    );
  }
}
