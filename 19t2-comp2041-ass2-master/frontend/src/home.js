/**
 * Written by z5190529 Chen Ziyan
 *
 * COMP9044 ass2
 */
function initWeb(api) {
	const apiUrl = api;
	//let tok=null;
	function removeAllChild(ele) {

		while (ele.hasChildNodes())
		{
			ele.removeChild(ele.firstChild);
		}
	}
	const root = document.getElementById('root');
	let nav = document.createElement('header');
	nav.classList.add('banner');
	nav.id = 'nav';
	root.appendChild(nav);
	let logo = document.createElement('H1');
	logo.id = 'logo';
	logo.classList.add('flex-center');
	nav.appendChild(logo);
	logo.textContent = 'Seddit';
	let nav1 = document.createElement('ul');
	nav1.classList.add('nav');
	nav.appendChild(nav1);
	let navItem = document.createElement('li');
	navItem.classList.add('nav-item');
	nav1.appendChild(navItem);
	let search = document.createElement('INPUT');
	search.id = 'search';
	search.setAttribute('data-id-search',null);
//search.dataset.id-search = ;
	search.placeholder = 'Search Seddit';
	search.type = 'search';
	navItem.appendChild(search);

	//search event


	//login & signup button
	//navItem1   &&   navItem2


	let navItem1 = document.createElement('LI');
	navItem1.classList.add('nav-item');
	nav1.appendChild(navItem1);
	let button = document.createElement('BUTTON');
	button.setAttribute('data-id-login',null);
//button.dataset.id-login = ;
	button.classList.add('button');
	button.classList.add('button-primary');
	navItem1.appendChild(button);
	button.textContent = 'Log In';
	let navItem2 = document.createElement('LI');
	navItem2.classList.add('nav-item');
	nav1.appendChild(navItem2);
	let buttonSecondary = document.createElement('BUTTON');
//buttonSecondary.dataset.id-signup = ;
	buttonSecondary.classList.add('button');
	buttonSecondary.classList.add('button-secondary');
	navItem2.appendChild(buttonSecondary);
	buttonSecondary.textContent = 'Sign Up';
	buttonSecondary.setAttribute('data-id-signup',null);
	//login & signup button


	let nodeName1 = document.createElement('MAIN');
	nodeName1.role = 'main';
	root.appendChild(nodeName1);

	let feed = document.createElement('UL');
	feed.id = 'feed';
	feed.setAttribute('data-id-feed',null);
//feed.dataset.id-feed = ;
	nodeName1.appendChild(feed);
	let feedHeader = document.createElement('DIV');
	feedHeader.classList.add('feed-header');
	feed.appendChild(feedHeader);
	let feedTitle = document.createElement('H3');
	feedTitle.classList.add('feed-title');
	feedTitle.classList.add('alt-text');
	feedHeader.appendChild(feedTitle);
	feedTitle.textContent = 'Popular posts';
	let button1 = document.createElement('BUTTON');
	button1.classList.add('button');
	button1.classList.add('button-secondary');
	feedHeader.appendChild(button1);
	button1.textContent = 'Post';
	button1.onclick = function () {
		if (divpublic.style.display != "none") {
			alert("You should login first💙");
		}
	}


	//login

	let loginFormWrap = document.createElement('SECTION');
	loginFormWrap.classList.add('login-form-wrap');
	nodeName1.appendChild(loginFormWrap);
	let close = document.createElement('H2');
	close.classList.add('close');
	loginFormWrap.appendChild(close);
	close.textContent = '✘';
	let logo2 = document.createElement('H1');
	logo2.classList.add('logo');
	loginFormWrap.appendChild(logo2);
	logo2.textContent = 'Seddit';
	let nodeName_1 = document.createElement('H3');
	loginFormWrap.appendChild(nodeName_1);
	nodeName_1.textContent = 'Sign in';
	let form1 = document.createElement('FORM');
	form1.id = 'form1';
	form1.classList.add('login-form');
	form1.action = 'POST';
	loginFormWrap.appendChild(form1);
	let nodeName_2 = document.createElement('LABEL');
	form1.appendChild(nodeName_2);
	let username = document.createElement('INPUT');
	username.type = 'username';
	username.name = 'username';
	username.id = 'username';
	username.placeholder = 'Username';
	nodeName_2.appendChild(username);
	let nodeName_3 = document.createElement('LABEL');
	form1.appendChild(nodeName_3);
	let password = document.createElement('INPUT');
	password.type = 'password';
	password.name = 'password';
	password.id = 'password';
	password.placeholder = 'Password';
	nodeName_3.appendChild(password);
	let login = document.createElement('BUTTON');
	login.id = 'login';
	login.type = 'button';
	login.classList.add('submit');
	form1.appendChild(login);
	login.textContent = 'LOGIN';
	let nodeName_4 = document.createElement('H5');
	loginFormWrap.appendChild(nodeName_4);
	let nodeName_5 = document.createElement('A');
	nodeName_5.href = '#';
	nodeName_4.appendChild(nodeName_5);
	nodeName_5.textContent = 'Forgot password';
	//login


	//signup
	let loginFormWrap2 = document.createElement('SECTION');
	loginFormWrap2.classList.add('login-form-wrap');
	nodeName1.appendChild(loginFormWrap2);
	let close2 = document.createElement('H2');
	close2.classList.add('close');
	loginFormWrap2.appendChild(close2);
	close2.textContent = '✘';
	let logo3 = document.createElement('H1');
	logo3.classList.add('logo');
	loginFormWrap2.appendChild(logo3);
	logo3.textContent = 'Seddit';
	let node_Name1 = document.createElement('H3');
	loginFormWrap2.appendChild(node_Name1);
	node_Name1.textContent = 'SIGN UP';
	let form2 = document.createElement('FORM');
	form2.id = 'form2';
	form2.classList.add('login-form');
	form2.action = 'POST';
	loginFormWrap2.appendChild(form2);
	let node_Name2 = document.createElement('LABEL');
	form2.appendChild(node_Name2);
	let user_name = document.createElement('INPUT');
	user_name.type = 'username';
	user_name.name = 'username';
	user_name.id = 'username2';
	user_name.placeholder = 'Username';
	node_Name2.appendChild(user_name);
	let node_Name3 = document.createElement('LABEL');
	form2.appendChild(node_Name3);
	let password1 = document.createElement('INPUT');
	password1.type = 'password';
	password1.name = 'password';
	password1.id = 'password1';
	password1.placeholder = 'Password';
	node_Name3.appendChild(password1);
	let node_Name4 = document.createElement('LABEL');
	form2.appendChild(node_Name4);
	let email = document.createElement('INPUT');
	email.type = 'username';
	email.name = 'email';
	email.id = 'email';
	email.placeholder = 'Email';
	node_Name4.appendChild(email);
	let node_Name5 = document.createElement('LABEL');
	form2.appendChild(node_Name5);
	let name = document.createElement('INPUT');
	name.type = 'username';
	name.name = 'name';
	name.id = 'name';
	name.placeholder = 'Name';
	node_Name5.appendChild(name);
	let signup = document.createElement('BUTTON');
	signup.id = 'signup';
	signup.type = 'button';
	signup.classList.add('submit');
	form2.appendChild(signup);
	signup.textContent = 'Sign up';
	//signup


	//posts  ignore the user
	const getpro3 = fetch(apiUrl + "/post/public", {
		method: 'get'
	})
	let repo = getpro3.then(response => response.json());
	let divpublic = document.createElement('DIV');
	feed.appendChild(divpublic);
	repo.then(data => {
		console.log(data);
		for (const item of data.posts) {

			let author = item.meta.author;
			let timep = new Date(parseInt(item.meta.published) * 1000);
			let posttime = timep.getDate() + ' ' + timep.getMonth() + " " + timep.getFullYear() + " " + timep.getHours() + ":" + timep.getMinutes();
			let image = item.image;
			let upvotes = item.meta.upvotes.length;
			let title = item.title;
			let description = item.text;
			let commentsnum = item.comments.length;
			let suseddit = item.meta.subseddit;

			let post = document.createElement('LI');
			post.classList.add('post');
			post.type="post.dataset.id-post";
			post.setAttribute('data-id-post',null);
//post.dataset.id-post = ;
			divpublic.appendChild(post);
			let vote = document.createElement('DIV');
			vote.classList.add('vote');
			vote.type="post.dataset.id-post"
			vote.setAttribute('data-id-upvotes',null);
//vote.dataset.id-upvotes = ;

			post.appendChild(vote);
			let vote2 = document.createElement('p');
			vote.appendChild(vote2);
			vote2.textContent = " ↑ ";
			vote2.classList.add('arr');
			let vote3 = document.createElement('p');
			vote.appendChild(vote3);
			vote3.textContent = upvotes;
			let vote1 = document.createElement('p');
			vote.appendChild(vote1);
			vote1.textContent = " ↓ ";
			vote1.classList.add('arr');

			let content = document.createElement('DIV');
			content.classList.add('content');
			post.appendChild(content);
			//content.textContent=description;

			let suseddit1 = document.createElement('P');
			suseddit1.classList.add('sus');
			content.appendChild(suseddit1);
			suseddit1.textContent = suseddit; //6

			let postAuthor = document.createElement('P');
			postAuthor.classList.add('post-author');
			postAuthor.setAttribute('data-id-author',null);
//postAuthor.dataset.id-author = ;
			content.appendChild(postAuthor);
			postAuthor.textContent = ' • Posted by ' + author + "\n  ✍Ⓣ:" + posttime + "\n\n";  //5

			let postTitle = document.createElement('H4');
			postTitle.setAttribute('data-id-title',null);
//postTitle.dataset.id-title = ;
			postTitle.classList.add('post-title');
			postTitle.classList.add('alt-text');
			content.appendChild(postTitle);
			postTitle.textContent = "\n" + title;        //2

			let postdescription = document.createElement('H5');
			postdescription.classList.add('alt-text');
			content.appendChild(postdescription);
			postdescription.textContent = description;   //3
			if (image != null) {
				let image1 = document.createElement('IMG');
				image1.src = "Data:images/jpg;base64," + image;
				//nodeName1.alt = 'Pulpit rock';
				image1.width = '300';
				image1.height = '250';
				content.appendChild(image1);       //4
			}


			let commentsnum1 = document.createElement('P');
			commentsnum1.classList.add('comment');
			content.appendChild(commentsnum1);
			commentsnum1.textContent = '💭' + commentsnum + ' Comments'; //6//


		}
	})


	let nodeName2 = document.createElement('FOOTER');
	root.appendChild(nodeName2);
	let nodeName3 = document.createElement('P');
	nodeName2.appendChild(nodeName3);
	nodeName3.textContent = 'Seddit example';


	//login section
	button.onclick = function () {
		feed.style.display = "none";
		loginFormWrap2.style.display = "none";
		loginFormWrap.style.display = "block";

		function checklogin() {
			//if(tok !== null) return;
			const username_ = document.getElementById('username').value;
			const password = document.getElementById('password').value;
			const details = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({'username': username_, 'password': password})
			}


			let getPro = fetch(apiUrl + "/auth/login", details);
			let token = getPro.then(response => response.json());

			token.then(data => {
					console.log(data);

					if (data.hasOwnProperty("token")) {
						alert("Success!");
						//if(tok !== null) return;
						//tok=data.token;
						console.log("success");
						loginFormWrap.style.display = "none";

						navItem1.style.display = "none";
						navItem2.style.display = "none";
						function searchp(event){
							//search.value
							if(event.code==='Enter'){
								console.log('!!!');
								let details_user = {
									method: 'GET',
									headers: {
										'Content-Type': 'application/json',
										'Authorization': 'Token ' + data.token
									}
									//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
								}
								let posts_user = fetch(apiUrl + "/user/feed", details_user).then(response => response.json());
								let div_searchfeed = document.createElement("DIV");
								div_searchfeed.style.display="none";

								root.appendChild(div_searchfeed);
								posts_user.then(dp=>{
									for(let item of dp.posts){
										if(item.title.indexOf(search.value)!=-1){

											div_searchfeed.style.display="block";
											div_userfeed.style.display="none";

											let author = item.meta.author;
											let timep = new Date(parseInt(item.meta.published) * 1000);
											let posttime = timep.getDate() + ' ' + timep.getMonth() + " " + timep.getFullYear() + " " + timep.getHours() + ":" + timep.getMinutes();
											let image = item.image;
											let upvotes = item.meta.upvotes.length;

											let title = item.title;
											let description = item.text;
											let commentsnum = item.comments.length;
											let suseddit = item.meta.subseddit;

											let post = document.createElement('LI');
											post.classList.add('post');
//post.dataset.id-post = ;
											div_searchfeed.appendChild(post);
											let vote = document.createElement('DIV');
											vote.classList.add('vote');
//vote.dataset.id-upvotes = ;

											post.appendChild(vote);
											let vote2 = document.createElement('p');
											vote.appendChild(vote2);
											vote2.textContent = " ↑ ";
											vote2.classList.add('arr');

											//arrup click
											function arrup_click() {
												let details_arrup = {
													method: 'PUT',
													headers: {
														'Content-Type': 'application/json',
														'Authorization': 'Token ' + data.token,
														// 'id':item.id
													}
													//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
												}
												let details_arrup2 = {
													method: 'DELETE',
													headers: {
														'Content-Type': 'application/json',
														'Authorization': 'Token ' + data.token,
														// 'id':item.id
													}
													//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
												}
												if (vote2.style.color != "orange") {
													let message_arrup = fetch(apiUrl + "/post/vote?id=" + item.id, details_arrup2).then(response => response.json());
													message_arrup.then(data3 => {
														console.log(data3);
														if (data3.hasOwnProperty("message")) {
															vote2.style.color = "orange";

															vote3.textContent = parseInt(vote3.textContent) + 1;
															alert("Vote Success!");
															//console.log("success");

														} else {
															alert("Vote failed!");
														}
													})
												} else {
													let message_arrup = fetch(apiUrl + "/post/vote?id=" + item.id, details_arrup).then(response => response.json());
													message_arrup.then(data3 => {
														console.log(data3);
														if (data3.hasOwnProperty("message")) {
															vote2.style.color = "#9EA0A2";

															vote3.textContent = parseInt(vote3.textContent) - 1;
															alert("Delete Success!");
														} else {
															alert("Delete failed!");
														}
													})
												}

											}

											vote2.addEventListener('click', arrup_click);
											//arrup click

											let vote3 = document.createElement('p');
											vote.appendChild(vote3);
											vote3.textContent = upvotes;
											vote3.classList.add("vote3");




											//show upvotes
											function vote3mo() {

												let upvotesbox = document.createElement('div');
												upvotesbox.classList.add('modal-content');
												removeAllChild(modal);
												modal.appendChild(upvotesbox);
												vote3.style.color = "orange";

												modal.style.display = "block";
												upvotesbox.style.display = "block";

												let details_upvotes = {
													method: 'GET',
													headers: {
														'Content-Type': 'application/json',
														'Authorization': 'Token ' + data.token,
														// 'id':item.id
													}
												}
												console.log(item.meta.upvotes);
												if (item.meta.upvotes.length != 0) {
													for (let voteitem of item.meta.upvotes) {
														let getproupvotes = fetch(apiUrl + "/user?id=" + voteitem, details_upvotes).then(response => response.json());
														getproupvotes.then(data => {
															let votename = document.createElement('p');
															votename.textContent = data.username;
															upvotesbox.appendChild(votename);
														})
													}
												}
												window.onclick = function (event) {
													console.log("hello");
													if (event.target == modal) {
														vote3.style.color = "black";
														modal.style.display = "none";
														upvotesbox.style.display = "none";
														removeAllChild(modal);
													}
												}
												// }else{
												// 	vote3.style.color="black";
												// 	modal.style.display="none";
												// }
											}

											vote3.addEventListener('click', vote3mo);
											//show upvotes


											let vote1 = document.createElement('p');
											vote.appendChild(vote1);
											vote1.textContent = " ↓ ";
											vote1.classList.add('arr');

											let content = document.createElement('DIV');
											content.classList.add('content');
											post.appendChild(content);
											//content.textContent=description;

											let suseddit1 = document.createElement('P');
											suseddit1.classList.add('sus');
											content.appendChild(suseddit1);
											suseddit1.textContent = suseddit; //6

											let postAuthor = document.createElement('P');
											postAuthor.classList.add('post-author');
//postAuthor.dataset.id-author = ;
											content.appendChild(postAuthor);
											//console.log(new Date().getTime());
											postAuthor.textContent = ' • Posted by ' + author + "\n  ✍Ⓣ:" + posttime + "\n\n";  //5

											function author_user_page() {



												let user_details = {
													method: 'GET',
													headers: {
														'Content-Type': 'application/json',
														'Authorization': 'Token ' + data.token
													}
												}


												let getPro_user = fetch(apiUrl + "/user", user_details);
												let user_detail = getPro_user.then(response => response.json());
												user_detail.then(data_user => {
													for (let follow of data_user.following) {
														let details_getp_1 = {
															method: 'GET',
															headers: {
																'Content-Type': 'application/json',
																'Authorization': 'Token ' + data.token
															}
															//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
														}
														let getPro_userp_1 = fetch(apiUrl + "/user?id=" + follow, details_getp_1).then(response => response.json());
														getPro_userp_1.then(data_user1 => {
															if(data_user1.posts.length!=0){

																for (let p of data_user1.posts) {

																	if (p === item.id) {
																		//console.log(data_user1)
																		//console.log(item.id+"--hello--"+p)
																		removeAllChild(panel);
																		panel.style.display = "block";
																		div_userfeed.style.display = "none";
																		feedHeader.style.display = "none";
																		let avatar = document.createElement('P');
																		avatar.classList.add('avatar');
																		panel.appendChild(avatar);
																		let nodeName1_ = document.createElement('IMG');
																		nodeName1_.src = 'https://www.redditstatic.com/avatars/avatar_default_07_25B79F.png';
																		avatar.appendChild(nodeName1_);
																		let nodeName2_ = document.createElement('H3');
																		panel.appendChild(nodeName2_);
																		// let tagf=document.createElement('tag');
																		// tagf.textContent="🛎◼ Follow me";
																		// //tagf.style.color="orange";
																		// panel.appendChild(tagf);
																		// function followme(){
																		//
																		// }
																		// tagf.addEventListener('click',followme);


																		let lead = document.createElement('P');
																		lead.classList.add('lead');
																		panel.appendChild(lead);

																		let nodeName3_ = document.createElement('P');
																		panel.appendChild(nodeName3_);

																		let nodeName4_ = document.createElement('P');
																		panel.appendChild(nodeName4_);

																		let tags = document.createElement('P');
																		panel.appendChild(tags);
																		let tag = document.createElement('SPAN');
																		tag.classList.add('tag');
																		tags.appendChild(tag);

																		let tag1 = document.createElement('SPAN');
																		tag1.classList.add('tag');
																		tags.appendChild(tag1);
																		// let getPro_user2 = fetch(apiUrl + "/user?id="+p, user_details);
																		// let user_detail2 = getPro_user2.then(response => response.json());
																		// user_detail2.then(data_user2 => {
																		nodeName2_.textContent = 'User: ' + data_user1.username+"";

																		lead.textContent = '📧 ' + data_user1.email;
																		nodeName3_.textContent = '📜 number of posts:' + data_user1.posts.length;
																		let upv = 0;
																		for (let eleid of data_user1.posts) {
																			let details_getp2 = {
																				method: 'GET',
																				headers: {
																					'Content-Type': 'application/json',
																					'Authorization': 'Token ' + data.token
																				}
																				//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
																			}
																			let getPro_userp2 = fetch(apiUrl + "/post?id=" + eleid, details_getp2).then(response => response.json());
																			let divpostbox=document.createElement('div');
																			divpostbox.classList.add('divpostbox');
																			panel.appendChild(divpostbox);
																			getPro_userp2.then(data_uv2 => {
																				upv += data_uv2.meta.upvotes.length;

																				let titlepost = document.createElement('h4');
																				titlepost.textContent="    🖌Title- ▏"+data_uv2.title+"▕";

																				divpostbox.appendChild(titlepost);
																				let subpost = document.createElement('p');
																				subpost.textContent="⁑Subseddit-⁑ "+data_uv2.meta.subseddit+"    ";

																				divpostbox.appendChild(subpost);

																			})

																		}
																		nodeName4_.textContent = '💖upvotes:' + upv;

																		tag.textContent = '🌟followed_num:' + data_user1.followed_num + " ";
																		tag1.textContent = '🌙following_num:' + data_user1.following.length;


																		window.onclick = function (event) {
																			//console.log("hello");
																			if (event.target === avatar) {
																				panel.style.display = "none";
																				div_searchfeed.style.display = "block";
																				//feedHeader.style.display = "flex";
																				removeAllChild(panel);
																			}
																		}



																		return;
																	}
																}
															}

														})
													}
												})
											}

											postAuthor.addEventListener('click', author_user_page);

											let postTitle = document.createElement('H4');
//postTitle.dataset.id-title = ;
											postTitle.classList.add('post-title');
											postTitle.classList.add('alt-text');
											content.appendChild(postTitle);
											postTitle.textContent = "\n" + title;        //2
											//get post
											function details_getpost() {
												let details_getp = {
													method: 'GET',
													headers: {
														'Content-Type': 'application/json',
														'Authorization': 'Token ' + data.token
													}
													//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
												}
												let post_detail = fetch(apiUrl + "/post?id=" + item.id, details_getp).then(response => response.json());
												post_detail.then(datapd => {
													console.log(datapd);
													removeAllChild(modal);
													modal.style.display = "block";
													let postbox2 = document.createElement('div');
													postbox2.classList.add('modal-content');
													modal.appendChild(postbox2);

													let p_title = document.createElement('h4');
													p_title.classList.add('post-title');
													p_title.classList.add('alt-text');
													p_title.textContent = datapd.title;
													postbox2.appendChild(p_title);

													let timep = new Date(parseInt(datapd.meta.published) * 1000);
													let p_posttime = timep.getDate() + ' ' + timep.getMonth() + " " + timep.getFullYear() + " " + timep.getHours() + ":" + timep.getMinutes();
													let p_author = document.createElement('p');
													p_author.classList.add('post-author');
													p_author.textContent = ' • Posted by ' + datapd.meta.author + "\n  ✍Ⓣ:" + p_posttime + "\n\n";
													postbox2.appendChild(p_author);


													let p_text = document.createElement('H5');
													p_text.classList.add('alt-text');
													p_text.textContent = datapd.text;
													postbox2.appendChild(p_text);

													let p_textco = document.createElement('p');
													p_textco.textContent = "comments";
													postbox2.appendChild(p_text);
													for (let co of datapd.comments) {
														let commentdivco = document.createElement('div');
														commentdivco.classList.add("commentsbox");
														postbox2.appendChild(commentdivco);


														let commentaco = document.createElement('p');
														commentaco.textContent = "🎎 " + co.author;
														commentaco.style.color = "orange";
														commentaco.classList.add("commentt");
														//commentdivco.appendChild(commentaco);

														let timecom = new Date(parseInt(co.published) * 1000);
														let posttimecomco = timecom.getDate() + ' ' + timecom.getMonth() + " " + timecom.getFullYear() + " " + timecom.getHours() + ":" + timecom.getMinutes();
														let commenttco = document.createElement('p');
														commenttco.classList.add("commentt");
														commenttco.textContent = "  🕛 " + posttimecomco;
														//commentdivco.appendChild(commenttco);
														//commentt.textContent = comment_this.author;

														commentdivco.appendChild(commentaco);
														commentdivco.appendChild(commenttco);
														let commentpco = document.createElement('p');
														commentpco.textContent = " 🎤 " + co.comment;
														commentpco.classList.add("commentp");
														commentdivco.appendChild(commentpco);

													}
													window.onclick = function (event) {
														//console.log("hello");
														if (event.target == modal) {
															modal.style.display = "none";
															postbox2.style.display = "none";
															removeAllChild(modal);
														}
													}


												})
											}

											postTitle.addEventListener('click', details_getpost);

											//get post

											let postdescription = document.createElement('H5');
											postdescription.classList.add('alt-text');
											content.appendChild(postdescription);
											postdescription.textContent = description;   //3

											if (image != null) {
												let image1 = document.createElement('IMG');
												image1.src = "Data:images/jpg;base64, " + image;
												//nodeName1.alt = 'Pulpit rock';
												image1.width = '300';
												image1.height = '250';
												content.appendChild(image1);       //4
											}


											let commentsnum1 = document.createElement('P');
											commentsnum1.classList.add('comment');
											content.appendChild(commentsnum1);
											commentsnum1.textContent = '💭' + commentsnum + ' Comments'; //6//





											//modify
											function comments_click() {
												//item.comments
												removeAllChild(modal);
												let commentsbox = document.createElement('div');
												commentsbox.classList.add('modal-content');
												modal.appendChild(commentsbox);

												let commentEditor = document.createElement('TEXTAREA');
												commentEditor.id = 'comment-editor';
												commentEditor.classList.add('comment-editor');
												commentsbox.appendChild(commentEditor);
												let commenttools = document.createElement('div');
												commenttools.style.width = '100%';
												let commenttool = document.createElement('BUTTON');
												commenttool.classList.add('posttool-1');
												commenttools.appendChild(commenttool);
												commentsbox.appendChild(commenttools);
												commenttool.appendChild(document.createTextNode('comment'));
												commentEditor.textContent = 'What are your thoughts';
												commenttool.onclick=function(){
													if(commentEditor.value===""){
														alert("You have not comment anything!");
														return;
													}
													let details_cp = {
														method: 'PUT',
														headers: {
															'Content-Type': 'application/json',
															'Authorization': 'Token ' + data.token
														},
														body: JSON.stringify({'comment': commentEditor.value})
													}


													let getProcp = fetch(apiUrl + "/post/comment?id="+item.id, details_cp).then(response => response.json());
													console.log(getProcp);
													let commentdiv = document.createElement('div');
													commentdiv.classList.add("commentsbox");
													commentsbox.appendChild(commentdiv);


													let commenta = document.createElement('p');
													commenta.textContent = "🎎 " + username_;
													commenta.style.color = "orange";
													commenta.classList.add("commentt");

													let timecom = new Date();
													let posttimecom = timecom.getDate() + ' ' + timecom.getMonth() + " " + timecom.getFullYear() + " " + timecom.getHours() + ":" + timecom.getMinutes();
													let commentt = document.createElement('p');
													commentt.classList.add("commentt");
													commentt.textContent = "  🕛 " + posttimecom;
													//commentt.textContent = comment_this.author;

													commentdiv.appendChild(commenta);
													commentdiv.appendChild(commentt);
													let commentp = document.createElement('p');
													commentp.textContent = " 🎤 " + commentEditor.value;
													commentp.classList.add("commentp");
													commentdiv.appendChild(commentp);


												}

												modal.style.display = "block";
												commentsbox.style.display = "block";
												for (let comment_this of item.comments) {
													let commentdiv = document.createElement('div');
													commentdiv.classList.add("commentsbox");
													commentsbox.appendChild(commentdiv);


													let commenta = document.createElement('p');
													commenta.textContent = "🎎 " + comment_this.author;
													commenta.style.color = "orange";
													commenta.classList.add("commentt");

													let timecom = new Date(parseInt(comment_this.published) * 1000);
													let posttimecom = timecom.getDate() + ' ' + timecom.getMonth() + " " + timecom.getFullYear() + " " + timecom.getHours() + ":" + timecom.getMinutes();
													let commentt = document.createElement('p');
													commentt.classList.add("commentt");
													commentt.textContent = "  🕛 " + posttimecom;
													//commentt.textContent = comment_this.author;

													commentdiv.appendChild(commenta);
													commentdiv.appendChild(commentt);
													let commentp = document.createElement('p');
													commentp.textContent = " 🎤 " + comment_this.comment;
													commentp.classList.add("commentp");
													commentdiv.appendChild(commentp);
												}
												window.onclick = function (event) {
													//console.log("hello");
													if (event.target == modal) {
														modal.style.display = "none";
														commentsbox.style.display = "none";
														removeAllChild(modal);
													}
												}


											}

											commentsnum1.addEventListener('click', comments_click);
											//lll
											window.onclick = function (event) {
												//console.log("hello");
												if (event.target === post) {

													div_searchfeed.style.display = "none";
													div_userfeed.style.display = "block";
												}
											}
										}

									}
								})


							}
						}
						search.addEventListener('keydown',searchp);


						let buttonuser = document.createElement('button');
						nav1.appendChild(buttonuser);
						buttonuser.classList.add('button3');


						let spanuser = document.createElement('span');
						spanuser.textContent = " " + username_ + "		▼ \n";
						spanuser.classList.add('spanuser');
						let userpho = document.createElement('img');
						userpho.src = "https://www.redditstatic.com/avatars/avatar_default_07_25B79F.png";
						userpho.classList.add('userpho');
						let svg1 = document.createElement('img');
						svg1.src = "https://img.icons8.com/color/48/000000/blockly-orange.png";
						svg1.classList.add('svg1');
						let lists = document.createElement('span');
						lists.textContent = "over view";
						lists.classList.add('lists');
						buttonuser.appendChild(userpho);
						buttonuser.appendChild(spanuser);
						buttonuser.appendChild(svg1);
						buttonuser.appendChild(lists);


						//menu
						let menu = document.createElement('box');
						menu.classList.add('dropdown-content');
						buttonuser.appendChild(menu);
						//profile
						let menuli1 = document.createElement('li');
						let p1 = document.createElement('p');
						p1.classList.add('menuli');
						let svg2 = document.createElement('img');
						svg2.src = "https://img.icons8.com/clouds/100/000000/popular-topic.png";
						menuli1.appendChild(svg2);
						menuli1.appendChild(p1);
						svg2.classList.add('menusvg');
						p1.textContent = '  PROFILE';
						menu.appendChild(menuli1);
						//upvotes eventlistener
						let panel = document.createElement('SECTION');
						panel.classList.add('panel');
						root.appendChild(panel);


						function menuli1click() {
							console.log('menuli1');
							removeAllChild(panel);
							panel.style.display = "block";
							div_userfeed.style.display = "none";
							feedHeader.style.display = "none";
							nodeName2.style.display="none";
							let avatar = document.createElement('P');
							avatar.classList.add('avatar');
							panel.appendChild(avatar);
							let nodeName1_ = document.createElement('IMG');
							nodeName1_.src = 'https://www.redditstatic.com/avatars/avatar_default_07_25B79F.png';
							avatar.appendChild(nodeName1_);
							let nodeName2_ = document.createElement('H3');
							panel.appendChild(nodeName2_);

							let lead = document.createElement('P');
							lead.classList.add('lead');
							panel.appendChild(lead);

							let nodeName3_ = document.createElement('P');
							panel.appendChild(nodeName3_);

							let nodeName4_ = document.createElement('P');
							panel.appendChild(nodeName4_);

							let tags = document.createElement('P');
							panel.appendChild(tags);
							let tag = document.createElement('SPAN');
							tag.classList.add('tag');
							tags.appendChild(tag);

							let tag1 = document.createElement('SPAN');
							tag1.classList.add('tag');
							tags.appendChild(tag1);


							let user_details = {
								method: 'GET',
								headers: {
									'Content-Type': 'application/json',
									'Authorization': 'Token ' + data.token
								}
							}


							let getPro_user = fetch(apiUrl + "/user", user_details);
							let user_detail = getPro_user.then(response => response.json());
							user_detail.then(data_user => {
								nodeName2_.textContent = 'User: ' + data_user.username;
								lead.textContent = '📧 ' + data_user.email;
								nodeName3_.textContent = '📜 number of posts:' + data_user.posts.length;
								let upv = 0;
								let mposts=document.createElement('p');
								mposts.textContent="\n🔸🔹💜My posts 💜🔹🔸";
								mposts.style.color="purple";
								panel.appendChild(mposts);
								for (let eleid of data_user.posts) {
									let details_getp = {
										method: 'GET',
										headers: {
											'Content-Type': 'application/json',
											'Authorization': 'Token ' + data.token
										}
										//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
									}
									let getPro_userp = fetch(apiUrl + "/post?id=" + eleid, details_getp).then(response => response.json());
									let divpostbox=document.createElement('div');
									divpostbox.classList.add('divpostbox');

									panel.appendChild(divpostbox);
									getPro_userp.then(data_uv => {
										upv += data_uv.meta.upvotes.length;

										let divupdate = document.createElement('div');
										let svgup= document.createElement('img');
										svgup.src="https://img.icons8.com/bubbles/50/000000/available-updates.png";
										svgup.classList.add('svgup');
										let pup= document.createElement('p');
										pup.textContent="Update";
										pup.classList.add('pup');
										divupdate.appendChild(svgup);
										divupdate.appendChild(pup);


										let divdelete = document.createElement('div');
										let svgde=	 document.createElement('img');
										svgde.src="https://img.icons8.com/bubbles/50/000000/delete-sign.png";
										svgde.classList.add('svgup');
										let pdelete= document.createElement('p');
										pdelete.textContent="Delete";
										pdelete.classList.add('pup');
										divdelete.appendChild(svgde);
										divdelete.appendChild(pdelete);

										divpostbox.appendChild(divupdate);
										divpostbox.appendChild(divdelete);


										function updatepost(){


											// feed.style.display="none";
											panel.style.display = "none";

											let tagpost = document.createElement('h3');
											tagpost.textContent = "Update the po";
											feed.appendChild(tagpost);
											let postbox = document.createElement('DIV');
											postbox.classList.add('postbox');
											feed.appendChild(postbox);
											let postTitle = document.createElement('INPUT');
											postTitle.type = 'text';
											postTitle.classList.add('post_title');
											postTitle.value = data_uv.title;
											postbox.appendChild(postTitle);
											let postSubseddit = document.createElement('INPUT');
											postSubseddit.type = 'text';
											postSubseddit.classList.add('post_subseddit');
											postSubseddit.value = data_uv.meta.subseddit;
											postbox.appendChild(postSubseddit);
											let posttools = document.createElement('DIV');
											posttools.classList.add('posttools');
											postbox.appendChild(posttools);


											let posttool1 = document.createElement('BUTTON');
											posttool1.classList.add('posttool-2');
											posttools.appendChild(posttool1);
											posttool1.appendChild(document.createTextNode('cancel'));

											function cancelpost() {
												panel.style.display = "block";
												tagpost.style.display = "none";
												postbox.style.display = "none";
												removeAllChild(tagpost);
												//feedHeader.style.display = "flex";
												//div_userfeed.style.display = "block";

											}

											posttool1.addEventListener('click', cancelpost);

											let posttool = document.createElement('BUTTON');
											posttool.classList.add('posttool-1');
											posttools.appendChild(posttool);
											posttool.appendChild(document.createTextNode('update'));


											let imgEditor = document.createElement('TEXTAREA');
											imgEditor.id = 'img-editor';
											imgEditor.classList.add('img-editor');
											postbox.appendChild(imgEditor);
											imgEditor.textContent = data_uv.image;
											let arthurEditor = document.createElement('TEXTAREA');
											arthurEditor.id = 'arthur-editor';
											arthurEditor.classList.add('arthur-editor');
											postbox.appendChild(arthurEditor);
											arthurEditor.textContent = data_uv.text;

											posttool.onclick=function(){
												let p_title = postTitle.value;
												if (p_title === "") {
													alert("Title cannot be null!");
													return;
												}
												let p_subseddit = postSubseddit.value;
												if (p_subseddit === "") {
													alert("Subseddit cannot be null!");
													return;
												}
												let p_img = imgEditor.value;
												if (p_img === "") {
													p_img = null;
												}
												let p_t = arthurEditor.value;
												if (p_t === "") {
													alert("Text cannot be null!");
													return;
												}

												let p_details = {
													method: 'PUT',
													headers: {
														'Content-Type': 'application/json',
														'Authorization': 'Token ' + data.token
													},
													body: JSON.stringify({
														"title": p_title,
														"text": p_t,
														"subseddit": p_subseddit,
														"image": p_img
													})
												}


												let getPro_p = fetch(apiUrl + "/post/?id="+ eleid, p_details);

												let aa = getPro_p.then(response => response.json());
												aa.then(datap => {
													//console.log(datap.post_id);

													alert("Update success!");
													tagpost.style.display = "none";
													postbox.style.display = "none";
													removeAllChild(tagpost);
													panel.style.display="block";


												})
											}







										}
										divupdate.addEventListener('click',updatepost);
										function deletepost(){
											//eleid
											let details_getpde = {
												method: 'DELETE',
												headers: {
													'Content-Type': 'application/json',
													'Authorization': 'Token ' + data.token
												}
												//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
											}
											let getPro_userpde = fetch(apiUrl + "/post?id=" + eleid, details_getpde).then(response => response.json());
											getPro_userpde.then(d=>{
												alert("Delete success!");
												divpostbox.style.display="none";
											})



										}
										divdelete.addEventListener('click',deletepost);
										let titlepost = document.createElement('h4');
										titlepost.textContent="    🖌Title- ▏"+data_uv.title+"▕";
										titlepost.style.margin="10px auto 20px -200px";
										divpostbox.appendChild(titlepost);
										let subpost = document.createElement('p');
										subpost.textContent="⁑Subseddit-⁑ "+data_uv.meta.subseddit+"    ";
										subpost.style.margin="10px auto 15px -200px";
										divpostbox.appendChild(subpost);

									})

								}
								nodeName4_.textContent = '💖upvotes:' + upv;

								tag.textContent = '🌟followed_num:' + data_user.followed_num + " ";
								tag1.textContent = '🌙following_num:' + data_user.following.length;



								window.onclick = function (event) {
									//console.log("hello");
									if (event.target == avatar) {
										panel.style.display = "none";
										div_userfeed.style.display = "block";
										feedHeader.style.display = "flex";
										nodeName2.style.display="block";
										removeAllChild(panel);
									}
								}


							})


						}

						menuli1.addEventListener('click', menuli1click);
						//profile

						//update profile
						let menuli3 = document.createElement('li');
						let p3 = document.createElement('p');
						p3.classList.add('menuli');
						let svg4 = document.createElement('img');
						svg4.src = "https://img.icons8.com/clouds/100/000000/refresh.png";
						menuli3.appendChild(svg4);
						menuli3.appendChild(p3);
						svg4.classList.add('menusvg');
						p3.textContent = '  UPD PROF';
						menu.appendChild(menuli3);

						function menuli3click(){
							removeAllChild(panel);
							div_userfeed.style.display = "none";
							feedHeader.style.display = "none";
							panel.style.display = "block";
							nodeName2.style.display = "none";

							let avatar2 = document.createElement('P');
							avatar2.classList.add('avatar');
							panel.appendChild(avatar2);
							let nodeName1_2 = document.createElement('IMG');
							nodeName1_2.src = 'https://www.redditstatic.com/avatars/avatar_default_07_25B79F.png';
							avatar2.appendChild(nodeName1_2);
							let nodeName2_2 = document.createElement('H3');
							nodeName2_2.textContent = ' 💁'+username_;
							panel.appendChild(nodeName2_2);

							let nodeName2_2_ = document.createElement('p');
							nodeName2_2_.textContent = "Update your 📬email & 🗝password below. ";
							panel.appendChild(nodeName2_2_);


							let nodeName3_2i = document.createElement('input');
							nodeName3_2i.classList.add('inputn');
							nodeName3_2i.placeholder = 'New Email';
							panel.appendChild(nodeName3_2i);


							let nodeName4_2i = document.createElement('input');
							nodeName4_2i.classList.add('inputn');
							nodeName4_2i.placeholder = 'New Password';
							panel.appendChild(nodeName4_2i);

							let nodeName6_2i = document.createElement('input');
							nodeName6_2i.classList.add('inputn');
							nodeName6_2i.placeholder = 'New Name';
							panel.appendChild(nodeName6_2i);

							let nodeName5_2 = document.createElement('button');
							nodeName5_2.appendChild(document.createTextNode('update'));
							nodeName5_2.classList.add('button');
							nodeName5_2.style.display="flex";
							nodeName5_2.style.margin="auto auto 30px auto";
							nodeName5_2.classList.add('button-secondary');
							panel.appendChild(nodeName5_2);

							nodeName5_2.onclick=function(){
								let new_email = nodeName3_2i.value;
								let new_password = nodeName4_2i.value;
								let new_name = nodeName6_2i.value;

								if(new_email===""){
									alert("New email be null!");
									return;
								}
								if(new_password===""){
									alert("New password be null!");
									return;
								}
								if(new_name===""){
									alert("New name cannot be null!");
									return;
								}
								let details_uppro = {
									method: 'PUT',
									headers: {
										'Content-Type': 'application/json',
										'Authorization': 'Token ' + data.token
									},
									body: JSON.stringify({
										"email": new_email,
										"name": new_name,
										"password": new_password
									})
								}
								let getPro_uppro = fetch(apiUrl+"/user",details_uppro).then(response=>response.json());
								getPro_uppro.then(datauppro=>{
									console.log(datauppro);
									if (datauppro.hasOwnProperty("msg")) {
										alert("Update your profile success!");
										//tok=null;
									}

								})





							}

							window.onclick = function (event) {
								//console.log("hello");
								if (event.target == avatar2) {
									removeAllChild(panel);
									div_userfeed.style.display = "block";
									feedHeader.style.display = "flex";
									panel.style.display="none";
									nodeName2.style.display = "block";
								}
							}
						}
						menuli3.addEventListener('click', menuli3click);
						//update profile

						//follow-unfollow
						let menuli4 = document.createElement('li');
						let p4 = document.createElement('p');
						p4.classList.add('menuli');
						let svg5 = document.createElement('img');
						svg5.src = "https://img.icons8.com/clouds/100/000000/filled-star.png";
						menuli4.appendChild(svg5);
						menuli4.appendChild(p4);
						svg5.classList.add('menusvg');
						p4.textContent = '  FOLLOW';
						menu.appendChild(menuli4);

						function followme(){
							removeAllChild(panel);
							div_userfeed.style.display = "none";
							feedHeader.style.display = "none";
							panel.style.display = "block";
							nodeName2.style.display = "none";


							let avatar2 = document.createElement('P');
							avatar2.classList.add('avatar');
							panel.appendChild(avatar2);
							let nodeName1_2 = document.createElement('IMG');
							nodeName1_2.src = 'https://img.icons8.com/clouds/100/000000/filled-star.png';
							avatar2.appendChild(nodeName1_2);
							let f_input=document.createElement('input');
							f_input.placeholder="input the username that you want to follow";
							f_input.classList.add('inputn');
							f_input.style.width="50%";

							let f_b=document.createElement('button');
							f_b.classList.add('button');
							f_b.classList.add('button-secondary');
							f_b.appendChild(document.createTextNode('Follow'));
							function fome(){
								let uf_details={
									method: 'PUT',
									headers: {
										'Content-Type': 'application/json',
										'Authorization': 'Token ' + data.token
									}
								}
								let p_unf = fetch(apiUrl + "/user/follow?username="+f_input.value, uf_details).then(response => response.json());
								p_unf.then(d_f=>{
									console.log(d_f);
									if(d_f.hasOwnProperty('message')){
										alert("follow success!");
										let nodeName2_2_ = document.createElement('p');
										nodeName2_2_.textContent = f_input.value+"🛎◼";
										nodeName2_2_.style.color="orange";
										panel.appendChild(nodeName2_2_);
									}else{
										alert('The username is wrong!');
									}
								})
							}
							f_b.addEventListener('click',fome);
							panel.appendChild(f_input);
							panel.appendChild(f_b);
							let nodeName2_2 = document.createElement('H3');
							nodeName2_2.textContent = ' 💞 My following';
							panel.appendChild(nodeName2_2);
							panel.appendChild(document.createTextNode(" (click to unfollow)"))

							let user_details = {
								method: 'GET',
								headers: {
									'Content-Type': 'application/json',
									'Authorization': 'Token ' + data.token
								}
							}


							let getPro_user = fetch(apiUrl + "/user", user_details);
							let user_detail = getPro_user.then(response => response.json());
							user_detail.then(data_user => {
								for(let followp of data_user.following){
									let getPro_user_ = fetch(apiUrl + "/user?id="+followp, user_details);
									let user_detail_ = getPro_user_.then(response => response.json());
									user_detail_.then(da=>{
										let nodeName2_2_ = document.createElement('p');
										nodeName2_2_.textContent = da.username+"🛎◼";
										nodeName2_2_.style.color="orange";
										panel.appendChild(nodeName2_2_);
										function unfollow(){
											let uf_details={
												method: 'PUT',
												headers: {
													'Content-Type': 'application/json',
													'Authorization': 'Token ' + data.token
												}
											}
											let p_unf = fetch(apiUrl + "/user/unfollow?username="+da.username, uf_details).then(response => response.json());
											p_unf.then(function(){
												nodeName2_2_.style.color="black";
											})

										}
										nodeName2_2_.addEventListener('click',unfollow);
									})

								}
							})



							window.onclick = function (event) {
								//console.log("hello");
								if (event.target == panel) {
									removeAllChild(panel);
									div_userfeed.style.display = "block";
									feedHeader.style.display = "flex";
									panel.style.display="none";
									nodeName2.style.display = "block";
								}
							}
						}
						menuli4.addEventListener('click',followme);
						//follow-unfollow

						//log out
						let menuli2 = document.createElement('li');
						let p2 = document.createElement('p');
						p2.classList.add('menuli');
						let svg3 = document.createElement('img');
						svg3.src = "https://img.icons8.com/clouds/100/000000/export.png";
						menuli2.appendChild(svg3);
						menuli2.appendChild(p2);
						svg3.classList.add('menusvg');
						p2.textContent = '  LOGIN OUT';
						menu.appendChild(menuli2);

						//comments eventlistener
						function menuli2click() {
							console.log('menuli2');
							//tok=null;

							buttonuser.style.display = "none";
							navItem.style.float = "left";
							navItem1.style.display = "block";

							navItem2.style.display = "block";
							navItem2.style.float = "left";
							navItem1.style.float = "left";
							div_userfeed.style.display = "none";
							divpublic.style.display = "block";


						}

						menuli2.addEventListener('click', menuli2click);
						//log out

						buttonuser.onclick = function () {

							if (menu.style.display === 'block') {
								menu.style.display = 'none';
							} else {
								menu.style.display = 'block';
							}
						}
						//menu


						//user-page-posts
						let div_userfeed = document.createElement("DIV");
						feed.style.display = "block";
						div_userfeed.style.display="block";
						divpublic.style.display = "none";
						feed.appendChild(div_userfeed);

						let modal = document.createElement('div');
						modal.classList.add('modal');
						root.appendChild(modal);

						let details_user = {
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
								'Authorization': 'Token ' + data.token
							}
							//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
						}
						let posts_user = fetch(apiUrl + "/user/feed", details_user).then(response => response.json());
						posts_user.then(data2 => {
							console.log(data2);
							//if(data2!=='success') return;
							//div_userfeed.style.display="block";
							for (const item of data2.posts) {
								let author = item.meta.author;
								let timep = new Date(parseInt(item.meta.published) * 1000);
								let posttime = timep.getDate() + ' ' + timep.getMonth() + " " + timep.getFullYear() + " " + timep.getHours() + ":" + timep.getMinutes();
								let image = item.image;
								let upvotes = item.meta.upvotes.length;


								let title = item.title;
								let description = item.text;
								let commentsnum = item.comments.length;
								let suseddit = item.meta.subseddit;

								let post = document.createElement('LI');
								post.classList.add('post');
								post.setAttribute('data-id-post',null);
//post.dataset.id-post = ;
								div_userfeed.appendChild(post);
								let vote = document.createElement('DIV');
								vote.classList.add('vote');
								vote.setAttribute('data-id-upvotes',null);
//vote.dataset.id-upvotes = ;

								post.appendChild(vote);
								let vote2 = document.createElement('p');
								vote.appendChild(vote2);
								vote2.textContent = " ↑ ";
								vote2.classList.add('arr');

								//arrup click
								function arrup_click() {
									let details_arrup = {
										method: 'PUT',
										headers: {
											'Content-Type': 'application/json',
											'Authorization': 'Token ' + data.token,
											// 'id':item.id
										}
										//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
									}
									let details_arrup2 = {
										method: 'DELETE',
										headers: {
											'Content-Type': 'application/json',
											'Authorization': 'Token ' + data.token,
											// 'id':item.id
										}
										//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
									}
									if (vote2.style.color != "orange") {
										let message_arrup = fetch(apiUrl + "/post/vote?id=" + item.id, details_arrup2).then(response => response.json());
										message_arrup.then(data3 => {
											console.log(data3);
											if (data3.hasOwnProperty("message")) {
												vote2.style.color = "orange";

												vote3.textContent = parseInt(vote3.textContent) + 1;
												alert("Vote Success!");
												//console.log("success");

											} else {
												alert("Vote failed!");
											}
										})
									} else {
										let message_arrup = fetch(apiUrl + "/post/vote?id=" + item.id, details_arrup).then(response => response.json());
										message_arrup.then(data3 => {
											console.log(data3);
											if (data3.hasOwnProperty("message")) {
												vote2.style.color = "#9EA0A2";

												vote3.textContent = parseInt(vote3.textContent) - 1;
												alert("Delete Success!");
											} else {
												alert("Delete failed!");
											}
										})
									}

								}

								vote2.addEventListener('click', arrup_click);
								//arrup click

								let vote3 = document.createElement('p');
								vote.appendChild(vote3);
								vote3.textContent = upvotes;
								vote3.classList.add("vote3");




								//show upvotes
								function vote3mo() {

									let upvotesbox = document.createElement('div');
									upvotesbox.classList.add('modal-content');
									modal.appendChild(upvotesbox);
									vote3.style.color = "orange";
									modal.style.display = "block";
									upvotesbox.style.display = "block";

									let details_upvotes = {
										method: 'GET',
										headers: {
											'Content-Type': 'application/json',
											'Authorization': 'Token ' + data.token,
											// 'id':item.id
										}
									}
									console.log(item.meta.upvotes);
									if (item.meta.upvotes.length != 0) {
										for (let voteitem of item.meta.upvotes) {
											let getproupvotes = fetch(apiUrl + "/user?id=" + voteitem, details_upvotes).then(response => response.json());
											getproupvotes.then(data => {
												let votename = document.createElement('p');
												votename.textContent = data.username;
												upvotesbox.appendChild(votename);
											})
										}
									}
									window.onclick = function (event) {
										console.log("hello");
										if (event.target == modal) {
											vote3.style.color = "black";
											modal.style.display = "none";
											upvotesbox.style.display = "none";
											removeAllChild(modal);
										}
									}
									// }else{
									// 	vote3.style.color="black";
									// 	modal.style.display="none";
									// }
								}

								vote3.addEventListener('click', vote3mo);
								//show upvotes


								let vote1 = document.createElement('p');
								vote.appendChild(vote1);
								vote1.textContent = " ↓ ";
								vote1.classList.add('arr');

								let content = document.createElement('DIV');
								content.classList.add('content');
								post.appendChild(content);
								//content.textContent=description;

								let suseddit1 = document.createElement('P');
								suseddit1.classList.add('sus');
								content.appendChild(suseddit1);
								suseddit1.textContent = suseddit; //6

								let postAuthor = document.createElement('P');
								postAuthor.classList.add('post-author');
								postAuthor.setAttribute('data-id-author',null);
//postAuthor.dataset.id-author = ;
								content.appendChild(postAuthor);
								//console.log(new Date().getTime());
								postAuthor.textContent = ' • Posted by ' + author + "\n  ✍Ⓣ:" + posttime + "\n\n";  //5

								//author-user page
								//item.id=>post id
								function author_user_page() {



									let user_details = {
										method: 'GET',
										headers: {
											'Content-Type': 'application/json',
											'Authorization': 'Token ' + data.token
										}
									}


									let getPro_user = fetch(apiUrl + "/user", user_details);
									let user_detail = getPro_user.then(response => response.json());
									user_detail.then(data_user => {
										for (let follow of data_user.following) {
											let details_getp_1 = {
												method: 'GET',
												headers: {
													'Content-Type': 'application/json',
													'Authorization': 'Token ' + data.token
												}
												//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
											}
											let getPro_userp_1 = fetch(apiUrl + "/user?id=" + follow, details_getp_1).then(response => response.json());
											getPro_userp_1.then(data_user1 => {
												if(data_user1.posts.length!=0){

													for (let p of data_user1.posts) {

														if (p === item.id) {
															console.log(data_user1)
															//console.log(item.id+"--hello--"+p)
															removeAllChild(panel);
															panel.style.display = "block";
															div_userfeed.style.display = "none";
															feedHeader.style.display = "none";
															let avatar = document.createElement('P');
															avatar.classList.add('avatar');
															panel.appendChild(avatar);
															let nodeName1_ = document.createElement('IMG');
															nodeName1_.src = 'https://www.redditstatic.com/avatars/avatar_default_07_25B79F.png';
															avatar.appendChild(nodeName1_);
															let nodeName2_ = document.createElement('H3');
															panel.appendChild(nodeName2_);
															// let tagf=document.createElement('tag');
															// tagf.textContent="🛎◼ Follow me";
															// //tagf.style.color="orange";
															// panel.appendChild(tagf);
															// function followme(){
															//
															// }
															// tagf.addEventListener('click',followme);


															let lead = document.createElement('P');
															lead.classList.add('lead');
															panel.appendChild(lead);

															let nodeName3_ = document.createElement('P');
															panel.appendChild(nodeName3_);

															let nodeName4_ = document.createElement('P');
															panel.appendChild(nodeName4_);

															let tags = document.createElement('P');
															panel.appendChild(tags);
															let tag = document.createElement('SPAN');
															tag.classList.add('tag');
															tags.appendChild(tag);

															let tag1 = document.createElement('SPAN');
															tag1.classList.add('tag');
															tags.appendChild(tag1);
															// let getPro_user2 = fetch(apiUrl + "/user?id="+p, user_details);
															// let user_detail2 = getPro_user2.then(response => response.json());
															// user_detail2.then(data_user2 => {
															nodeName2_.textContent = 'User: ' + data_user1.username+"";

															lead.textContent = '📧 ' + data_user1.email;
															nodeName3_.textContent = '📜 number of posts:' + data_user1.posts.length;
															let upv = 0;
															for (let eleid of data_user1.posts) {
																let details_getp2 = {
																	method: 'GET',
																	headers: {
																		'Content-Type': 'application/json',
																		'Authorization': 'Token ' + data.token
																	}
																	//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
																}
																let getPro_userp2 = fetch(apiUrl + "/post?id=" + eleid, details_getp2).then(response => response.json());
																let divpostbox=document.createElement('div');
																divpostbox.classList.add('divpostbox');
																panel.appendChild(divpostbox);
																getPro_userp2.then(data_uv2 => {
																	upv += data_uv2.meta.upvotes.length;

																	let titlepost = document.createElement('h4');
																	titlepost.textContent="    🖌Title- ▏"+data_uv2.title+"▕";

																	divpostbox.appendChild(titlepost);
																	let subpost = document.createElement('p');
																	subpost.textContent="⁑Subseddit-⁑ "+data_uv2.meta.subseddit+"    ";

																	divpostbox.appendChild(subpost);

																})

															}
															nodeName4_.textContent = '💖upvotes:' + upv;

															tag.textContent = '🌟followed_num:' + data_user1.followed_num + " ";
															tag1.textContent = '🌙following_num:' + data_user1.following.length;


															window.onclick = function (event) {
																//console.log("hello");
																if (event.target === avatar) {
																	panel.style.display = "none";
																	div_userfeed.style.display = "block";
																	feedHeader.style.display = "flex";
																	removeAllChild(panel);
																}
															}



															return;
														}
													}
												}

											})
										}
									})
								}

								console.log(item.id);
								postAuthor.addEventListener('click', author_user_page);
								//author-user page

								let postTitle = document.createElement('H4');
//postTitle.dataset.id-title = ;
								postTitle.classList.add('post-title');
								postTitle.classList.add('alt-text');
								postTitle.setAttribute('data-id-title',null);
								content.appendChild(postTitle);
								postTitle.textContent = "\n" + title;        //2
								//get post
								function details_getpost() {
									let details_getp = {
										method: 'GET',
										headers: {
											'Content-Type': 'application/json',
											'Authorization': 'Token ' + data.token
										}
										//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
									}
									let post_detail = fetch(apiUrl + "/post?id=" + item.id, details_getp).then(response => response.json());
									post_detail.then(datapd => {
										console.log(datapd);
										modal.style.display = "block";
										let postbox2 = document.createElement('div');
										postbox2.classList.add('modal-content');
										modal.appendChild(postbox2);

										let p_title = document.createElement('h4');
										p_title.classList.add('post-title');
										p_title.classList.add('alt-text');
										p_title.textContent = datapd.title;
										postbox2.appendChild(p_title);

										let timep = new Date(parseInt(datapd.meta.published) * 1000);
										let p_posttime = timep.getDate() + ' ' + timep.getMonth() + " " + timep.getFullYear() + " " + timep.getHours() + ":" + timep.getMinutes();
										let p_author = document.createElement('p');
										p_author.classList.add('post-author');
										p_author.textContent = ' • Posted by ' + datapd.meta.author + "\n  ✍Ⓣ:" + p_posttime + "\n\n";
										postbox2.appendChild(p_author);


										let p_text = document.createElement('H5');
										p_text.classList.add('alt-text');
										p_text.textContent = datapd.text;
										postbox2.appendChild(p_text);

										let p_textco = document.createElement('p');
										p_textco.textContent = "comments";
										postbox2.appendChild(p_text);
										for (let co of datapd.comments) {
											let commentdivco = document.createElement('div');
											commentdivco.classList.add("commentsbox");
											postbox2.appendChild(commentdivco);


											let commentaco = document.createElement('p');
											commentaco.textContent = "🎎 " + co.author;
											commentaco.style.color = "orange";
											commentaco.classList.add("commentt");
											//commentdivco.appendChild(commentaco);

											let timecom = new Date(parseInt(co.published) * 1000);
											let posttimecomco = timecom.getDate() + ' ' + timecom.getMonth() + " " + timecom.getFullYear() + " " + timecom.getHours() + ":" + timecom.getMinutes();
											let commenttco = document.createElement('p');
											commenttco.classList.add("commentt");
											commenttco.textContent = "  🕛 " + posttimecomco;
											//commentdivco.appendChild(commenttco);
											//commentt.textContent = comment_this.author;

											commentdivco.appendChild(commentaco);
											commentdivco.appendChild(commenttco);
											let commentpco = document.createElement('p');
											commentpco.textContent = " 🎤 " + co.comment;
											commentpco.classList.add("commentp");
											commentdivco.appendChild(commentpco);

										}
										window.onclick = function (event) {
											//console.log("hello");
											if (event.target == modal) {
												modal.style.display = "none";
												postbox2.style.display = "none";
												removeAllChild(modal);
											}
										}


									})
								}

								postTitle.addEventListener('click', details_getpost);

								//get post

								let postdescription = document.createElement('H5');
								postdescription.classList.add('alt-text');
								content.appendChild(postdescription);
								postdescription.textContent = description;   //3

								if (image != null) {
									let image1 = document.createElement('IMG');
									image1.src = "Data:images/jpg;base64, " + image;
									//nodeName1.alt = 'Pulpit rock';
									image1.width = '300';
									image1.height = '250';
									content.appendChild(image1);       //4
								}


								let commentsnum1 = document.createElement('P');
								commentsnum1.classList.add('comment');
								content.appendChild(commentsnum1);
								commentsnum1.textContent = '💭' + commentsnum + ' Comments'; //6//






								function comments_click() {
									//item.comments
									let commentsbox = document.createElement('div');
									commentsbox.classList.add('modal-content');
									modal.appendChild(commentsbox);

									let commentEditor = document.createElement('TEXTAREA');
									commentEditor.id = 'comment-editor';
									commentEditor.classList.add('comment-editor');
									commentsbox.appendChild(commentEditor);
									let commenttools = document.createElement('div');
									commenttools.style.width = '100%';
									let commenttool = document.createElement('BUTTON');
									commenttool.classList.add('posttool-1');
									commenttools.appendChild(commenttool);
									commentsbox.appendChild(commenttools);
									commenttool.appendChild(document.createTextNode('comment'));
									commentEditor.textContent = 'What are your thoughts';
									commenttool.onclick=function(){
										if(commentEditor.value===""){
											alert("You have not comment anything!");
											return;
										}
										let details_cp = {
											method: 'PUT',
											headers: {
												'Content-Type': 'application/json',
												'Authorization': 'Token ' + data.token
											},
											body: JSON.stringify({'comment': commentEditor.value})
										}


										let getProcp = fetch(apiUrl + "/post/comment?id="+item.id, details_cp).then(response => response.json());
										getProcp.then(function(){
											alert("comment success!");
											let commentdiv = document.createElement('div');
											commentdiv.classList.add("commentsbox");
											commentsbox.appendChild(commentdiv);


											let commenta = document.createElement('p');
											commenta.textContent = "🎎 " + username_;
											commenta.style.color = "orange";
											commenta.classList.add("commentt");

											let timecom = new Date();
											let posttimecom = timecom.getDate() + ' ' + timecom.getMonth() + " " + timecom.getFullYear() + " " + timecom.getHours() + ":" + timecom.getMinutes();
											let commentt = document.createElement('p');
											commentt.classList.add("commentt");
											commentt.textContent = "  🕛 " + posttimecom;
											//commentt.textContent = comment_this.author;

											commentdiv.appendChild(commenta);
											commentdiv.appendChild(commentt);
											let commentp = document.createElement('p');
											commentp.textContent = " 🎤 " + commentEditor.value;
											commentp.classList.add("commentp");
											commentdiv.appendChild(commentp);
										})


									}


									console.log(item.comments);
									modal.style.display = "block";
									commentsbox.style.display = "block";
									for (let comment_this of item.comments) {
										let commentdiv = document.createElement('div');
										commentdiv.classList.add("commentsbox");
										commentsbox.appendChild(commentdiv);


										let commenta = document.createElement('p');
										commenta.textContent = "🎎 " + comment_this.author;
										commenta.style.color = "orange";
										commenta.classList.add("commentt");

										let timecom = new Date(parseInt(comment_this.published) * 1000);
										let posttimecom = timecom.getDate() + ' ' + timecom.getMonth() + " " + timecom.getFullYear() + " " + timecom.getHours() + ":" + timecom.getMinutes();
										let commentt = document.createElement('p');
										commentt.classList.add("commentt");
										commentt.textContent = "  🕛 " + posttimecom;
										//commentt.textContent = comment_this.author;

										commentdiv.appendChild(commenta);
										commentdiv.appendChild(commentt);
										let commentp = document.createElement('p');
										commentp.textContent = " 🎤 " + comment_this.comment;
										commentp.classList.add("commentp");
										commentdiv.appendChild(commentp);
									}
									window.onclick = function (event) {
										//console.log("hello");
										if (event.target == modal) {
											modal.style.display = "none";
											commentsbox.style.display = "none";
											removeAllChild(modal);
										}
									}


								}

								commentsnum1.addEventListener('click', comments_click);
							}
						})


						let isLoading = false;
						let isEnd = false;
						let triggerDistance = 100;
						let p = 11;

						function fetchData() {

							let distance = div_userfeed.getBoundingClientRect().bottom - window.innerHeight;
							if ( !isLoading && !isEnd && distance < triggerDistance ) {

								isLoading = true;

								//fetch(path).then(res => {

								let details_user = {
									method: 'GET',
									headers: {
										'Content-Type': 'application/json',
										'Authorization': 'Token ' + data.token
									}
									//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
								}
								let posts_user = fetch(apiUrl + "/user/feed?p="+p+"&n=1", details_user).then(response => response.json());

								posts_user.then(data2 => {
									//console.log(data2);
									isLoading = false;
									if(data2.length === 0 && isEnd === true) return;
									for (const item of data2.posts) {
										let author = item.meta.author;
										let timep = new Date(parseInt(item.meta.published) * 1000);
										let posttime = timep.getDate() + ' ' + timep.getMonth() + " " + timep.getFullYear() + " " + timep.getHours() + ":" + timep.getMinutes();
										let image = item.image;
										let upvotes = item.meta.upvotes.length;


										let title = item.title;
										let description = item.text;
										let commentsnum = item.comments.length;
										let suseddit = item.meta.subseddit;

										let post = document.createElement('LI');
										post.classList.add('post');
//post.dataset.id-post = ;
										div_userfeed.appendChild(post);
										let vote = document.createElement('DIV');
										vote.classList.add('vote');
//vote.dataset.id-upvotes = ;

										post.appendChild(vote);
										let vote2 = document.createElement('p');
										vote.appendChild(vote2);
										vote2.textContent = " ↑ ";
										vote2.classList.add('arr');

										//arrup click
										function arrup_click() {
											let details_arrup = {
												method: 'PUT',
												headers: {
													'Content-Type': 'application/json',
													'Authorization': 'Token ' + data.token,
													// 'id':item.id
												}
												//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
											}
											let details_arrup2 = {
												method: 'DELETE',
												headers: {
													'Content-Type': 'application/json',
													'Authorization': 'Token ' + data.token,
													// 'id':item.id
												}
												//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
											}
											if (vote2.style.color != "orange") {
												let message_arrup = fetch(apiUrl + "/post/vote?id=" + item.id, details_arrup2).then(response => response.json());
												message_arrup.then(data3 => {
													console.log(data3);
													if (data3.hasOwnProperty("message")) {
														vote2.style.color = "orange";

														vote3.textContent = parseInt(vote3.textContent) + 1;
														alert("Vote Success!");
														//console.log("success");

													} else {
														alert("Vote failed!");
													}
												})
											} else {
												let message_arrup = fetch(apiUrl + "/post/vote?id=" + item.id, details_arrup).then(response => response.json());
												message_arrup.then(data3 => {
													console.log(data3);
													if (data3.hasOwnProperty("message")) {
														vote2.style.color = "#9EA0A2";

														vote3.textContent = parseInt(vote3.textContent) - 1;
														alert("Delete Success!");
													} else {
														alert("Delete failed!");
													}
												})
											}

										}

										vote2.addEventListener('click', arrup_click);
										//arrup click

										let vote3 = document.createElement('p');
										vote.appendChild(vote3);
										vote3.textContent = upvotes;
										vote3.classList.add("vote3");




										//show upvotes
										function vote3mo() {

											let upvotesbox = document.createElement('div');
											upvotesbox.classList.add('modal-content');
											modal.appendChild(upvotesbox);
											vote3.style.color = "orange";
											modal.style.display = "block";
											upvotesbox.style.display = "block";

											let details_upvotes = {
												method: 'GET',
												headers: {
													'Content-Type': 'application/json',
													'Authorization': 'Token ' + data.token,
													// 'id':item.id
												}
											}
											console.log(item.meta.upvotes);
											if (item.meta.upvotes.length != 0) {
												for (let voteitem of item.meta.upvotes) {
													let getproupvotes = fetch(apiUrl + "/user?id=" + voteitem, details_upvotes).then(response => response.json());
													getproupvotes.then(data => {
														let votename = document.createElement('p');
														votename.textContent = data.username;
														upvotesbox.appendChild(votename);
													})
												}
											}
											window.onclick = function (event) {
												console.log("hello");
												if (event.target == modal) {
													vote3.style.color = "black";
													modal.style.display = "none";
													upvotesbox.style.display = "none";
													removeAllChild(modal);
												}
											}
											// }else{
											// 	vote3.style.color="black";
											// 	modal.style.display="none";
											// }
										}

										vote3.addEventListener('click', vote3mo);
										//show upvotes


										let vote1 = document.createElement('p');
										vote.appendChild(vote1);
										vote1.textContent = " ↓ ";
										vote1.classList.add('arr');

										let content = document.createElement('DIV');
										content.classList.add('content');
										post.appendChild(content);
										//content.textContent=description;

										let suseddit1 = document.createElement('P');
										suseddit1.classList.add('sus');
										content.appendChild(suseddit1);
										suseddit1.textContent = suseddit; //6

										let postAuthor = document.createElement('P');
										postAuthor.classList.add('post-author');
//postAuthor.dataset.id-author = ;
										content.appendChild(postAuthor);
										//console.log(new Date().getTime());
										postAuthor.textContent = ' • Posted by ' + author + "\n  ✍Ⓣ:" + posttime + "\n\n";  //5

										//author-user page
										//item.id=>post id
										function author_user_page() {



											let user_details = {
												method: 'GET',
												headers: {
													'Content-Type': 'application/json',
													'Authorization': 'Token ' + data.token
												}
											}


											let getPro_user = fetch(apiUrl + "/user", user_details);
											let user_detail = getPro_user.then(response => response.json());
											user_detail.then(data_user => {
												for (let follow of data_user.following) {
													let details_getp_1 = {
														method: 'GET',
														headers: {
															'Content-Type': 'application/json',
															'Authorization': 'Token ' + data.token
														}
														//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
													}
													let getPro_userp_1 = fetch(apiUrl + "/user?id=" + follow, details_getp_1).then(response => response.json());
													getPro_userp_1.then(data_user1 => {
														if(data_user1.posts.length!=0){

															for (let p of data_user1.posts) {

																if (p === item.id) {
																	console.log(data_user1)
																	//console.log(item.id+"--hello--"+p)
																	removeAllChild(panel);
																	panel.style.display = "block";
																	div_userfeed.style.display = "none";
																	feedHeader.style.display = "none";
																	let avatar = document.createElement('P');
																	avatar.classList.add('avatar');
																	panel.appendChild(avatar);
																	let nodeName1_ = document.createElement('IMG');
																	nodeName1_.src = 'https://www.redditstatic.com/avatars/avatar_default_07_25B79F.png';
																	avatar.appendChild(nodeName1_);
																	let nodeName2_ = document.createElement('H3');
																	panel.appendChild(nodeName2_);
																	// let tagf=document.createElement('tag');
																	// tagf.textContent="🛎◼ Follow me";
																	// //tagf.style.color="orange";
																	// panel.appendChild(tagf);
																	// function followme(){
																	//
																	// }
																	// tagf.addEventListener('click',followme);


																	let lead = document.createElement('P');
																	lead.classList.add('lead');
																	panel.appendChild(lead);

																	let nodeName3_ = document.createElement('P');
																	panel.appendChild(nodeName3_);

																	let nodeName4_ = document.createElement('P');
																	panel.appendChild(nodeName4_);

																	let tags = document.createElement('P');
																	panel.appendChild(tags);
																	let tag = document.createElement('SPAN');
																	tag.classList.add('tag');
																	tags.appendChild(tag);

																	let tag1 = document.createElement('SPAN');
																	tag1.classList.add('tag');
																	tags.appendChild(tag1);
																	// let getPro_user2 = fetch(apiUrl + "/user?id="+p, user_details);
																	// let user_detail2 = getPro_user2.then(response => response.json());
																	// user_detail2.then(data_user2 => {
																	nodeName2_.textContent = 'User: ' + data_user1.username+"";

																	lead.textContent = '📧 ' + data_user1.email;
																	nodeName3_.textContent = '📜 number of posts:' + data_user1.posts.length;
																	let upv = 0;
																	for (let eleid of data_user1.posts) {
																		let details_getp2 = {
																			method: 'GET',
																			headers: {
																				'Content-Type': 'application/json',
																				'Authorization': 'Token ' + data.token
																			}
																			//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
																		}
																		let getPro_userp2 = fetch(apiUrl + "/post?id=" + eleid, details_getp2).then(response => response.json());
																		let divpostbox=document.createElement('div');
																		divpostbox.classList.add('divpostbox');
																		panel.appendChild(divpostbox);
																		getPro_userp2.then(data_uv2 => {
																			upv += data_uv2.meta.upvotes.length;

																			let titlepost = document.createElement('h4');
																			titlepost.textContent="    🖌Title- ▏"+data_uv2.title+"▕";

																			divpostbox.appendChild(titlepost);
																			let subpost = document.createElement('p');
																			subpost.textContent="⁑Subseddit-⁑ "+data_uv2.meta.subseddit+"    ";

																			divpostbox.appendChild(subpost);

																		})

																	}
																	nodeName4_.textContent = '💖upvotes:' + upv;

																	tag.textContent = '🌟followed_num:' + data_user1.followed_num + " ";
																	tag1.textContent = '🌙following_num:' + data_user1.following.length;


																	window.onclick = function (event) {
																		//console.log("hello");
																		if (event.target === avatar) {
																			panel.style.display = "none";
																			div_userfeed.style.display = "block";
																			feedHeader.style.display = "flex";
																			removeAllChild(panel);
																		}
																	}



																	return;
																}
															}
														}

													})
												}
											})
										}

										console.log(item.id);
										postAuthor.addEventListener('click', author_user_page);
										//author-user page

										let postTitle = document.createElement('H4');
//postTitle.dataset.id-title = ;
										postTitle.classList.add('post-title');
										postTitle.classList.add('alt-text');
										content.appendChild(postTitle);
										postTitle.textContent = "\n" + title;        //2
										//get post
										function details_getpost() {
											let details_getp = {
												method: 'GET',
												headers: {
													'Content-Type': 'application/json',
													'Authorization': 'Token ' + data.token
												}
												//body: JSON.stringify({"username":username2,"password":password2,"email":email2,"name":name2})
											}
											let post_detail = fetch(apiUrl + "/post?id=" + item.id, details_getp).then(response => response.json());
											post_detail.then(datapd => {
												console.log(datapd);
												modal.style.display = "block";
												let postbox2 = document.createElement('div');
												postbox2.classList.add('modal-content');
												modal.appendChild(postbox2);

												let p_title = document.createElement('h4');
												p_title.classList.add('post-title');
												p_title.classList.add('alt-text');
												p_title.textContent = datapd.title;
												postbox2.appendChild(p_title);

												let timep = new Date(parseInt(datapd.meta.published) * 1000);
												let p_posttime = timep.getDate() + ' ' + timep.getMonth() + " " + timep.getFullYear() + " " + timep.getHours() + ":" + timep.getMinutes();
												let p_author = document.createElement('p');
												p_author.classList.add('post-author');
												p_author.textContent = ' • Posted by ' + datapd.meta.author + "\n  ✍Ⓣ:" + p_posttime + "\n\n";
												postbox2.appendChild(p_author);


												let p_text = document.createElement('H5');
												p_text.classList.add('alt-text');
												p_text.textContent = datapd.text;
												postbox2.appendChild(p_text);

												let p_textco = document.createElement('p');
												p_textco.textContent = "comments";
												postbox2.appendChild(p_text);
												for (let co of datapd.comments) {
													let commentdivco = document.createElement('div');
													commentdivco.classList.add("commentsbox");
													postbox2.appendChild(commentdivco);


													let commentaco = document.createElement('p');
													commentaco.textContent = "🎎 " + co.author;
													commentaco.style.color = "orange";
													commentaco.classList.add("commentt");
													//commentdivco.appendChild(commentaco);

													let timecom = new Date(parseInt(co.published) * 1000);
													let posttimecomco = timecom.getDate() + ' ' + timecom.getMonth() + " " + timecom.getFullYear() + " " + timecom.getHours() + ":" + timecom.getMinutes();
													let commenttco = document.createElement('p');
													commenttco.classList.add("commentt");
													commenttco.textContent = "  🕛 " + posttimecomco;
													//commentdivco.appendChild(commenttco);
													//commentt.textContent = comment_this.author;

													commentdivco.appendChild(commentaco);
													commentdivco.appendChild(commenttco);
													let commentpco = document.createElement('p');
													commentpco.textContent = " 🎤 " + co.comment;
													commentpco.classList.add("commentp");
													commentdivco.appendChild(commentpco);

												}
												window.onclick = function (event) {
													//console.log("hello");
													if (event.target == modal) {
														modal.style.display = "none";
														postbox2.style.display = "none";
														removeAllChild(modal);
													}
												}


											})
										}

										postTitle.addEventListener('click', details_getpost);

										//get post

										let postdescription = document.createElement('H5');
										postdescription.classList.add('alt-text');
										content.appendChild(postdescription);
										postdescription.textContent = description;   //3

										if (image != null) {
											let image1 = document.createElement('IMG');
											image1.src = "Data:images/jpg;base64, " + image;
											//nodeName1.alt = 'Pulpit rock';
											image1.width = '300';
											image1.height = '250';
											content.appendChild(image1);       //4
										}


										let commentsnum1 = document.createElement('P');
										commentsnum1.classList.add('comment');
										content.appendChild(commentsnum1);
										commentsnum1.textContent = '💭' + commentsnum + ' Comments'; //6//






										function comments_click() {
											//item.comments
											let commentsbox = document.createElement('div');
											commentsbox.classList.add('modal-content');
											modal.appendChild(commentsbox);

											let commentEditor = document.createElement('TEXTAREA');
											commentEditor.id = 'comment-editor';
											commentEditor.classList.add('comment-editor');
											commentsbox.appendChild(commentEditor);
											let commenttools = document.createElement('div');
											commenttools.style.width = '100%';
											let commenttool = document.createElement('BUTTON');
											commenttool.classList.add('posttool-1');
											commenttools.appendChild(commenttool);
											commentsbox.appendChild(commenttools);
											commenttool.appendChild(document.createTextNode('comment'));
											commentEditor.textContent = 'What are your thoughts';
											commenttool.onclick=function(){
												if(commentEditor.value===""){
													alert("You have not comment anything!");
													return;
												}
												let details_cp = {
													method: 'PUT',
													headers: {
														'Content-Type': 'application/json',
														'Authorization': 'Token ' + data.token
													},
													body: JSON.stringify({'comment': commentEditor.value})
												}


												let getProcp = fetch(apiUrl + "/post/comment?id="+item.id, details_cp).then(response => response.json());
												getProcp.then(function(){
													alert("comment success!");
													let commentdiv = document.createElement('div');
													commentdiv.classList.add("commentsbox");
													commentsbox.appendChild(commentdiv);


													let commenta = document.createElement('p');
													commenta.textContent = "🎎 " + username_;
													commenta.style.color = "orange";
													commenta.classList.add("commentt");

													let timecom = new Date();
													let posttimecom = timecom.getDate() + ' ' + timecom.getMonth() + " " + timecom.getFullYear() + " " + timecom.getHours() + ":" + timecom.getMinutes();
													let commentt = document.createElement('p');
													commentt.classList.add("commentt");
													commentt.textContent = "  🕛 " + posttimecom;
													//commentt.textContent = comment_this.author;

													commentdiv.appendChild(commenta);
													commentdiv.appendChild(commentt);
													let commentp = document.createElement('p');
													commentp.textContent = " 🎤 " + commentEditor.value;
													commentp.classList.add("commentp");
													commentdiv.appendChild(commentp);
												})


											}


											console.log(item.comments);
											modal.style.display = "block";
											commentsbox.style.display = "block";
											for (let comment_this of item.comments) {
												let commentdiv = document.createElement('div');
												commentdiv.classList.add("commentsbox");
												commentsbox.appendChild(commentdiv);


												let commenta = document.createElement('p');
												commenta.textContent = "🎎 " + comment_this.author;
												commenta.style.color = "orange";
												commenta.classList.add("commentt");

												let timecom = new Date(parseInt(comment_this.published) * 1000);
												let posttimecom = timecom.getDate() + ' ' + timecom.getMonth() + " " + timecom.getFullYear() + " " + timecom.getHours() + ":" + timecom.getMinutes();
												let commentt = document.createElement('p');
												commentt.classList.add("commentt");
												commentt.textContent = "  🕛 " + posttimecom;
												//commentt.textContent = comment_this.author;

												commentdiv.appendChild(commenta);
												commentdiv.appendChild(commentt);
												let commentp = document.createElement('p');
												commentp.textContent = " 🎤 " + comment_this.comment;
												commentp.classList.add("commentp");
												commentdiv.appendChild(commentp);
											}
											window.onclick = function (event) {
												//console.log("hello");
												if (event.target == modal) {
													modal.style.display = "none";
													commentsbox.style.display = "none";
													removeAllChild(modal);
												}
											}


										}

										commentsnum1.addEventListener('click', comments_click);
									}
								})
								p++;

								//});

							}

						}
						window.addEventListener('scroll', fetchData);

						//post relative content is here!!!
						button1.onclick = function () {

							// feed.style.display="none";
							div_userfeed.style.display = "none";
							feedHeader.style.display = "none";
							let tagpost = document.createElement('h3');
							tagpost.textContent = "Create a post";
							feed.appendChild(tagpost);
							let postbox = document.createElement('DIV');
							postbox.classList.add('postbox');
							feed.appendChild(postbox);
							let postTitle = document.createElement('INPUT');
							postTitle.type = 'text';
							postTitle.classList.add('post_title');
							postTitle.placeholder = 'Your Title Here';
							postbox.appendChild(postTitle);
							let postSubseddit = document.createElement('INPUT');
							postSubseddit.type = 'text';
							postSubseddit.classList.add('post_subseddit');
							postSubseddit.placeholder = 'subseddit';
							postbox.appendChild(postSubseddit);
							let posttools = document.createElement('DIV');
							posttools.classList.add('posttools');
							postbox.appendChild(posttools);


							let posttool1 = document.createElement('BUTTON');
							posttool1.classList.add('posttool-2');
							posttools.appendChild(posttool1);
							posttool1.appendChild(document.createTextNode('cancel'));

							function cancelpost() {
								tagpost.style.display = "none";
								postbox.style.display = "none";
								feedHeader.style.display = "flex";
								div_userfeed.style.display = "block";
								removeAllChild(tagpost);

							}

							posttool1.addEventListener('click', cancelpost);

							let posttool = document.createElement('BUTTON');
							posttool.classList.add('posttool-1');
							posttools.appendChild(posttool);
							posttool.appendChild(document.createTextNode('post'));


							let imgEditor = document.createElement('TEXTAREA');
							imgEditor.id = 'img-editor';
							imgEditor.classList.add('img-editor');
							postbox.appendChild(imgEditor);
							imgEditor.placeholder = '	Your image';
							let arthurEditor = document.createElement('TEXTAREA');
							arthurEditor.id = 'arthur-editor';
							arthurEditor.classList.add('arthur-editor');
							postbox.appendChild(arthurEditor);
							arthurEditor.placeholder = 'Your text';

							function post_t() {
								let p_title = postTitle.value;

								let p_subseddit = postSubseddit.value;
								let p_img = imgEditor.value;
								let pimg=null;
								if (p_img === "") {
									let p_details = {
										method: 'POST',
										headers: {
											'Content-Type': 'application/json',
											'Authorization': 'Token ' + data.token
										},
										body: JSON.stringify({
											"title": p_title,
											"text": p_t,
											"subseddit": p_subseddit
										})
									}


									let getPro_p = fetch(apiUrl + "/post", p_details);

									let aa = getPro_p.then(response => response.json());
									aa.then(datap => {
										console.log(datap);
										if (datap.hasOwnProperty("post_id")) {
											alert("Post success!");
											tagpost.style.display = "none";
											postbox.style.display = "none";
											feedHeader.style.display = "flex";
											div_userfeed.style.display = "block";
										}

									})
									return;
								}else{
									//const IMG_URL = "https://images.chesscomfiles.com/uploads/v1/user/4992389.1bd6388e.161x161o.5cd2c089e361@2x.jpeg";

									function toDataURL(url) {
										return fetch(url).then(response => response.blob()).then(blob => new Promise((resolve, reject) => {
												const reader = new FileReader()
												reader.onloadend = () => resolve(reader.result)
												reader.onerror = reject
												reader.readAsDataURL(blob)
											}))
									}

									toDataURL(p_img)
										.then(dataUrl => {
											//console.log(dataUrl)
											//console.log(dataUrl.replace("data:image/png;base64,",""))
											//console.log(dataUrl.split(',')[1].substr(1))

											pimg=dataUrl.split(',')[1].substr(1);
										})
								}

								if (p_title === "") {
									alert("Title cannot be null!");
									let p_details = {
										method: 'POST',
										headers: {
											'Content-Type': 'application/json',
											'Authorization': 'Token ' + data.token
										},
										body: JSON.stringify({
											"text": p_t,
											"subseddit": p_subseddit,
											"image": pimg
										})
									}


									let getPro_p = fetch(apiUrl + "/post", p_details);

									let aa = getPro_p.then(response => response.json());
									aa.then(datap => {
										console.log(datap);
										if (datap.hasOwnProperty("post_id")) {
											alert("Post success!");
											tagpost.style.display = "none";
											postbox.style.display = "none";
											feedHeader.style.display = "flex";
											div_userfeed.style.display = "block";
										}

									})
									return;
								}
								let p_t = arthurEditor.value;
								if (p_t === "") {
									alert("Text cannot be null!");
									let p_details = {
										method: 'POST',
										headers: {
											'Content-Type': 'application/json',
											'Authorization': 'Token ' + data.token
										},
										body: JSON.stringify({
											"title": p_title,
											"subseddit": p_subseddit,
											"image": pimg
										})
									}


									let getPro_p = fetch(apiUrl + "/post", p_details);

									let aa = getPro_p.then(response => response.json());
									aa.then(datap => {
										console.log(datap);
										if (datap.hasOwnProperty("post_id")) {
											alert("Post success!");
											tagpost.style.display = "none";
											postbox.style.display = "none";
											feedHeader.style.display = "flex";
											div_userfeed.style.display = "block";
										}

									})
									return;
								}
								let p_details = {
									method: 'POST',
									headers: {
										'Content-Type': 'application/json',
										'Authorization': 'Token ' + data.token
									},
									body: JSON.stringify({
										"title": p_title,
										"text": p_t,
										"subseddit": p_subseddit,
										"image": pimg
									})
								}


								let getPro_p = fetch(apiUrl + "/post", p_details);

								let aa = getPro_p.then(response => response.json());
								aa.then(datap => {
									console.log(datap);
									if (datap.hasOwnProperty("post_id")) {
										alert("Post success!");
										tagpost.style.display = "none";
										postbox.style.display = "none";
										feedHeader.style.display = "flex";
										div_userfeed.style.display = "block";
									}

								})


							}

							posttool.addEventListener('click', post_t);


						}
						//post relative content is here!!!
					}

				}
			);
		}

		document.getElementById('login').addEventListener('click', checklogin);
		close.addEventListener('click', function () {
			loginFormWrap.style.display = "none";
			feed.style.display = "block";
		});
	}


	buttonSecondary.onclick = function () {
		feed.style.display = "none";
		loginFormWrap.style.display = "none";
		loginFormWrap2.style.display = "block";

		function checksignup() {
			const username2 = document.getElementById('username2').value;
			const password2 = document.getElementById('password1').value;
			const email2 = document.getElementById('email').value;
			const name2 = document.getElementById('name').value;
			const details = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({"username": username2, "password": password2, "email": email2, "name": name2})
			}
			const getPro2 = fetch(apiUrl + "/auth/signup", details);
			let token = getPro2.then(response => response.json());

			token.then(data => {
					console.log(data);
					if (data.hasOwnProperty("token")) {
						alert("Success!");
						console.log("success");
						loginFormWrap2.style.display = "none";
						feed.style.display = "block";
					} else {
						alert("Input message is wrong!");
						console.log("filed");
					}
				}
			)
			console.log(getPro);
		}

		document.getElementById('signup').addEventListener('click', checksignup);
		close2.addEventListener('click', function () {
			loginFormWrap.style.display = "none";
			feed.style.display = "block";
		});
	}


}

// initWeb();
export default initWeb;

