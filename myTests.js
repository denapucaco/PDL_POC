QUnit.test('formatDate()', function() {
    equal(formatDate(new Date(1425374470*1000), 'dd/MM/yyyy'), '03/03/2015', '03/03/2015 Date formatted properly.');
	equal(formatDate(new Date(1425374470*1000), 'd/M/yyyy'), '3/3/2015', '3/3/2015 Date formatted properly.');
	equal(formatDate(new Date(1425374470*1000), 'yyyy/dd/MM'), '2015/03/03', '2015/03/03 Date formatted properly.');
	equal(formatDate(new Date(1425374470*1000), 'dd/MMM/yyyy'), '03/Mar/2015', '03/Mar/2015 Date formatted properly.');
	notEqual(formatDate(new Date(1425374470*1000), 'd/M/yyyy'), '03/03/2015', 'Date formatted as expected.');
});
QUnit.test('padToLeft()', function() {
	equal(padToLeft('0',1,'6'), '06', 'Padding applied properly.');
	equal(padToLeft('0',2,'4'), '004', 'Padding applied properly.');
	equal(padToLeft('0',4,'9'), '00009', 'Padding applied properly.');
	equal(padToLeft('0',-3,'4'), '4', 'Padding applied properly.');
});
QUnit.test('replacePattern()', function() {
	equal(replacePattern('dd/MM/yyyy','dd',new Date(1425374470*1000)), '03/MM/yyyy', 'Day Pattern replaced successfully.');
	equal(replacePattern('dd/MM/yyyy','MM',new Date(1425374470*1000)), 'dd/03/yyyy', 'Month replaced successfully.');
	equal(replacePattern('dd/MM/yyyy','yyyy',new Date(1425374470*1000)), 'dd/MM/2015', 'Year Pattern replaced successfully.');
	equal(replacePattern('dd/MM/yyyy','/',new Date(1425374470*1000)), 'dd/MM/yyyy', '/ Pattern replaced successfully.');
	notEqual(replacePattern('dd/MM/yyyy','d',new Date(1425374470*1000)), '03/MM/yyyy', 'Day Pattern replaced as expected.');
});