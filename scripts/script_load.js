// load analytics
$.get( "scripts/analytics.html", function( data ) {
  $( "head" ).append( data );
  console.log('analytics carregado');
});

// load params script
$.get( "scripts/params.html", function( data ) {
  $( "head" ).prepend( data );
  console.log('params carregado');
});
