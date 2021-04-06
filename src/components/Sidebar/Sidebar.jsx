import React from "react"

import Category from "../CategoryList/category";
import Bio from "../Bio/bio"
import TagCloud from "../TagCloud/tagcloud";
import Subscribe from "../SubscribeForm/subscribeform";

export default function Header() {
	

  return (
    <aside className="sidebar">
	    <Subscribe title="FOLLOW BY EMAIL"/>
		<Category title="LIBELLÉS"/>	
		<TagCloud title="Tag Cloud"/>
		<Bio/>
	</aside>
  	)
}
