//天气预报


$(function(){
	
	var nowWeather = `https://free-api.heweather.net/s6/weather/now?location=CN101280101&key=c8b18212397748599a7fb0bfa1022b56`
	var nowforecast = `https://free-api.heweather.net/s6/weather/forecast?location=CN101280101&key=c8b18212397748599a7fb0bfa1022b56`
	var nowlifestyle = `https://free-api.heweather.net/s6/weather/lifestyle?location=CN101280101&key=c8b18212397748599a7fb0bfa1022b56`
	render();
	
	function render(){
		
	$.get(nowWeather).then(function(result){

		var now = result.HeWeather6[0].now

		$('.weather').html($('.weather').html()+`
			<div class="hl">	
			<h1>${result.HeWeather6[0].basic.location}&nbsp&nbsp&nbsp</h1>
			<img class="nowjpg" src="https://cdn.heweather.com/cond_icon/${now.cond_code}.png"/>
			<h2>${now.tmp}℃</h2>
			<span class="condition">${now.cond_txt}</span>
			</div>
		`)
	})
	
	
	$.get(nowforecast).then(function(e){
		
		var nowf = e.HeWeather6[0].daily_forecast
		console.log(nowf)
		$('.weather').html($('.weather').html()+`
			<div class="hla">
			<h3>The next three days</h3>
				<div class="notice">
					<span class="s1">
					<h4>${nowf[0].date}</h4>
					<img class="s1img" src="https://cdn.heweather.com/cond_icon/${nowf[0].cond_code_n}.png"/>
					<h4>${nowf[0].tmp_min}℃~${nowf[0].tmp_max}℃</h4>
					</span>
				
					<span class="s2">
					<h4>${nowf[1].date}</h4>
					<img class="s1img" src="https://cdn.heweather.com/cond_icon/${nowf[1].cond_code_n}.png"/>
					<h4>${nowf[1].tmp_min}℃~${nowf[2].tmp_max}℃</h4>
					</span>
					
					<span class="s3">
					<h4>${nowf[2].date}</h4>
					<img class="s1img" src="https://cdn.heweather.com/cond_icon/${nowf[2].cond_code_n}.png"/>
					<h4>${nowf[2].tmp_min}℃~${nowf[2].tmp_max}℃</h4>
					</span>
				</div>
			</div>
		`)
	})
	
	
	$.get(nowlifestyle).then(function(e){
		
		var ls = e.HeWeather6[0].lifestyle	
		$('.txnotice').html($('.txnotice').html()+`
		<div class="hlaa">
			<div class="tx">				
				<h5>Comfort</h5>
				<h5>${ls[0].brf}${ls[0].txt}</h5>
				<span>&nbsp</span>
				<h5>Dress Index</h5>
				<h5>${ls[1].brf}${ls[1].txt}</h5>
				<span>&nbsp</span>
				<h5>Cold index</h5>
				<h5>${ls[2].brf}${ls[2].txt}</h5>
				<span>&nbsp</span>
				<h5>Sport</h5>
				<h5>${ls[3].brf}${ls[3].txt}</h5>
				<span>&nbsp</span>
				<h5>Air index</h5>
				<h5>${ls[7].brf}${ls[7].txt}</h5>
				<span>&nbsp</span>
				<h5>Ultraviolet index</h5>
				<h5>${ls[5].brf}${ls[5].txt}</h5>
			</div>
		</div>
		`)		
	})
	
	
	
	
	
	var catnum = 1
	$('.weather').click(function(e){
		if(catnum == 1){
			$('.bacimg').css('backgroundImage','url(img/cat1.jpg)');
			catnum = 2;
		}else{
			$('.bacimg').css('backgroundImage','url(img/cat2.jpg)');
			catnum = 1;
		}		
	})
	}
		
	
	$('#city').keypress(function(e){
			
		if(e.key=="Enter"&&$('#city').val()!=""){
			$('.hl').html(``)
			$('.hla').html(``)
			$('.hlaa').html(``)
			nowWeather = `https://free-api.heweather.net/s6/weather/now?location=${$('#city').val()}&key=c8b18212397748599a7fb0bfa1022b56`
			nowforecast = `https://free-api.heweather.net/s6/weather/forecast?location=${$('#city').val()}&key=c8b18212397748599a7fb0bfa1022b56`
			nowlifestyle = `https://free-api.heweather.net/s6/weather/lifestyle?location=${$('#city').val()}&&key=c8b18212397748599a7fb0bfa1022b56`
			render();
		}			
		
	})
	
	
})