function toggleAddressBookBox() {
	var splitter = document.getElementById('addressbook-splitter');
	var ab = document.getElementById('addressbook-box');
	var menuitem = document.getElementById('addressbook-menu');
	if(splitter.getAttribute('hidden') == 'true') {
		splitter.removeAttribute('hidden');
		ab.removeAttribute('collapsed');
		menuitem.setAttribute('checked', 'true');
	} else {
		splitter.setAttribute('hidden', 'true');
		ab.setAttribute('collapsed', 'true');
		menuitem.setAttribute('checked', 'false');
	}
	document.persist('addressbook-splitter', 'hidden');
	document.persist('addressbook-box', 'collapsed');
}

function toggleAddressBook() {
	var ab = document.getElementById('addressbook-box');
	if(ab.getAttribute('collapsed') == 'true')
		ab.removeAttribute('collapsed');
	else
		ab.setAttribute('collapsed', 'true');
	document.persist('addressbook-box', 'collapsed');
}

function persistHeight() {
	setTimeout(() => document.persist('addressbook-box', 'height'), 100);
}

addEventListener('load', function() {
	var splitter = document.getElementById('addressbook-splitter');
	var menuitem = document.getElementById('addressbook-menu');
	if(splitter.getAttribute('hidden') == 'true')
		menuitem.setAttribute('checked', 'false');
	else
		menuitem.setAttribute('checked', 'true');
}, false);
