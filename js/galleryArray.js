/*
 * gallery location allay
 *
 * cernter: lat, lng
 * cSize: circle size(*30)
 * name: gallery name
 */
var galleries = {};
/*
galleries['haramuseum'] = {
	center: new google.maps.LatLng(35.621822,139.735863),
	cSize: 2,
	gName: 'Hara Museum',
	address: '4-7-２５ Kitashinagawa, Shinagawa, Tokyo',
	url: 'http://www.haramuseum.or.jp/generalTop.html'
};
*/
galleries['331 Arts Chiyoda'] = {
	center: new google.maps.LatLng(35.704213,139.770833),
	cSize: 2,
	gName: '331 Arts Chiyoda',
	address:'6-11-14 Sotokanda Chiyoda-Ku Tokyo',
	url: 'http://www.3331.jp/en/'
};
galleries['Aoyama Meguro'] = {
	center: new google.maps.LatLng(35.638824,139.697707),
	cSize: 4,
	gName: 'Aoyama Meguro',
	address:'2-30-6 Kamimeguro Meguroku Tokyo',
	url: 'http://aoyamameguro.com/en'
};
galleries['Chanel Gallery'] = {
	center: new google.maps.LatLng(35.673053,139.766489),
	cSize: 2,
	gName: 'Chanel Gallery',
	address:'3-5-3 Ginza, Chuo-ku, Tokyo',
	url: 'http://www.chanel-ginza.com/en/nexushall/'
};
galleries['Hermes Gallery'] = {
	center: new google.maps.LatLng(35.672006,139.763429),
	cSize: 2,
	gName: 'Maison Hermes',
	address:'5-4-1 Ginza, Chuo-ku, Tokyo',
	url: 'http://goo.gl/iLFxCb'
};
galleries['Hiromi Yoshii'] = {
	center: new google.maps.LatLng(35.6823,139.7939),
	cSize: 2,
	gName: 'Hiromi Yoshii',
	address:'1-3-2 6F Kiyosumi Koto-ku Tokyo',
	url: 'http://hiromiyoshii.com/?lang=en'
};
galleries['Gallery Koyanagi'] = {
	center: new google.maps.LatLng(35.672089,139.770592),
	cSize: 2,
	gName: 'Gallery Koyanagi',
	address:'Koyanagi Bldg. 8F, 1-7-5 Ginza Chuo-ku, Tokyo',
	url: 'http://www.gallerykoyanagi.com/index.html'
};
galleries['Misako & Rosen'] = {
	center: new google.maps.LatLng(35.689487,139.691706),
	cSize: 2,
	gName: 'Misako & Rosen',
	address:'Kita-otsuka, 3-27-6, Tosahima-ku, Tokyo',
	url: 'http://www.misakoandrosen.com/en/'
};
galleries['Mizuma'] = {
	center: new google.maps.LatLng(35.696719,139.739265),
	cSize: 2,
	gName: 'Miszuma Art Gallery',
	address:'2F Kagura Bldg., 3-13 Ichigayatamachi Shinjuku-ku, Tokyo',
	url: 'http://mizuma-art.co.jp/top_e.php'
};
galleries['Mori Art Museum'] = {
	center: new google.maps.LatLng(35.660556,139.729167),
	cSize: 2,
	gName: 'Mori Art Museum',
	address:'Roppongi Hills Mori Tower, 6-10-1 Roppongi, Minato-ku, Tokyo',
	url: 'http://www.mori.art.museum/eng/'
};
galleries['Museum of Contemporary Art Tokyo'] = {
	center: new google.maps.LatLng(35.679714,139.808002),
	cSize: 2,
	gName: 'Museum of Contemporary Art Tokyo',
	address:'4-1-1 Miyoshi, Koto-ku, Tokyo',
	url: 'http://www.mot-art-museum.jp/eng/index.html'
};
galleries['New York Gallery'] = {
	center: new google.maps.LatLng(35.664569,139.711339),
	cSize: 2,
	gName: 'New York Gallery',
	address:'3-6-26, Kita Aoyama, Minato-ku, Tokyo',
	url: 'https://www.n-y-g.jp/'
};
galleries['Nezu Museum'] = {
	center: new google.maps.LatLng(35.662161,139.717566),
	cSize: 2,
	gName: 'Nezu Museum',
	address:'6-5-1 Minami Aoyama, Minato-ku, Tokyo',
	url: 'http://www.nezu-muse.or.jp/en/about/index.html'
};
galleries['Nichido Contemporary Art'] = {
	center: new google.maps.LatLng(35.674558,139.774028),
	cSize: 2,
	gName: 'Nichido Contemporary Art',
	address:'B1, 4-3-3 Hachobori, Chuo-ku, Tokyo',
	url: 'http://www.nca-g.com/en/index.html'
};
galleries['Rat Hole Gallery'] = {
	center: new google.maps.LatLng(35.663736,139.713414),
	cSize: 2,
	gName: 'Rat Hole Gallery',
	address:'5-5-3-B1 Minami Aoyama Minato-ku Tokyo',
	url: 'http://www.ratholegallery.com/'
};
galleries['SCAI THE BATHHOUSE'] = {
	center: new google.maps.LatLng(35.721775,139.770496),
	cSize: 2,
	gName: 'SCAI THE BATHHOUSE',
	address:'6-1-23 Yanaka, Taito-Ku, Tokyo',
	url:'http://www.scaithebathhouse.com/'
};
galleries['Taka Ishii Gallery'] = {
	center: new google.maps.LatLng(35.681464,139.793212),
	cSize: 2,
	gName: 'Taka Ishii Gallery',
	address:'1-3-2 5F Kiyosumi Koto-ku Tokyo',
	url: 'http://www.takaishiigallery.com/en/'
};
galleries['Taka Ishii Gallery Photo'] = {
	center: new google.maps.LatLng(35.661359,139.736676),
	cSize: 3,
	gName: 'Taka Ishii Gallery Photography',
	address:'5-17-1 AXIS 2F Roppongi Minato-ku Tokyo',
	url: 'http://www.takaishiigallery.com/en/'
};
galleries['Take Ninagawa Gallery'] = {
	center: new google.maps.LatLng(35.657654,139.740228),
	cSize: 3,
	gName: 'Take Ninagawa Gallery',
	address:'2-12-4-1F, HigashiAzabu, Minatoku, Tokyo',
	url: 'http://www.takeninagawa.com/current_en.html'
};
galleries['Taro Okamoto Memorial Museum'] = {
	center: new google.maps.LatLng(35.661308,139.715544),
	cSize: 2,
	gName: 'Taro Okamoto Memorial Museum',
	address:'6-1-19, Minamiaoyama, Minato-ku, Tokyo',
	url: 'http://www.taro-okamoto.or.jp/en/'
};
galleries['Tomio Koyama Gallery'] = {
	center: new google.maps.LatLng(35.682464,139.793212),
	cSize: 2,
	gName: 'Tomio Koyama Gallery',
	address:'1-3-2 7F Kiyosumi Koto-ku Tokyo',
	url: 'http://www.tomiokoyamagallery.com/en/'
};
galleries['WAKO WORKS OF ART'] = {
 	center: new google.maps.LatLng(35.661867,139.731351),
	cSize: 3,
	gName: 'WAKO WORKS OF ART',
	address:'Piramide Bldg. 3F, 6-6-9 Roppongi, Minato-ku, Tokyo',
	url: 'http://www.wako-art.jp/top.php'
};
galleries['Watarium Museum'] = {
 	center: new google.maps.LatLng(35.670668,139.713372),
	cSize: 3,
	gName: 'Watarium Museum',
	address:'3-7-6 Jingumae, Shibuya-ku, Tokyo',
	url: 'http://www.watarium.co.jp/'
};
galleries['Yamamoto Gendai'] = {
 	center: new google.maps.LatLng(35.646830,139.729652),
	cSize: 2,
	gName: 'Yamamoto Gendai',
	address:'3-1-15 3F Shirogame, Minato-ku, Tokyo',
	url: 'http://yamamotogendai.org/english/index.html'
};




