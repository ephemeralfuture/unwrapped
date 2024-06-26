function calculateTotal()
		{
		  let unit_price={
			choc_rais: 1.5,
			honeycomb: 1.5,
			ses_stick: 1.1,
			roas_chic: 1.1,
			popcorn_k: 0.7,
			
			basmati_r: 0.7,
			buckwheat: 0.85,
			bulghur_w: 0.55,
			couscou_w: 0.55,
			quinoa_or: 1,
			
			almonds_o: 1.7,
			hazelnuts: 2.15,
			peanuts__: 0.8,
			walnuts__: 1.7,
			
			sesame_se: 0.95,
			sunflower: 0.7,
			pumpkin_s: 1.4,
			
			blk_turtl: 0.75,
			butter_be: 0.9,
			cannelini: 0.75,
			chickpeas: 0.5,
			lentils_g: 0.75,
			lentils_r: 0.75,
			rd_kidney: 0.95,
			
			dates_org: 1.1,
			raisins_o: 1.1,
			
			salt_mald: 1.65
		  };
		  let item_price={}
		  
		  //SNACKS
		  item_price.choc_rais = ($("#qty_choc_rais").val() * unit_price.choc_rais/100 )
		  $("#price_choc_rais").val(item_price.choc_rais);
		  
		  item_price.honeycomb = ($("#qty_honeycomb").val() * unit_price.honeycomb/100 )
		  $("#price_honeycomb").val(item_price.honeycomb);
		  
		  item_price.ses_stick = ($("#qty_ses_stick").val() * unit_price.ses_stick/100 )
		  $("#price_ses_stick").val(item_price.ses_stick);  
		  
		  item_price.roas_chic = ($("#qty_roas_chic").val() * unit_price.roas_chic/100 )
		  $("#price_roas_chic").val(item_price.roas_chic);
		  
		  item_price.popcorn_k = ($("#qty_popcorn_k").val() * unit_price.popcorn_k/100 )
			$("#price_popcorn_k").val(item_price.popcorn_k);
		
		//GRAINS
			item_price.basmati_r = ($("#qty_basmati_r").val() * unit_price.basmati_r/100 )
			$("#price_basmati_r").val(item_price.basmati_r);

			item_price.buckwheat = ($("#qty_buckwheat").val() * unit_price.buckwheat/100 )
			$("#price_buckwheat").val(item_price.buckwheat);  

			item_price.bulghur_w = ($("#qty_bulghur_w").val() * unit_price.bulghur_w/100 )
			$("#price_bulghur_w").val(item_price.bulghur_w);
			
			item_price.couscou_w = ($("#qty_couscou_w").val() * unit_price.couscou_w/100 )
			$("#price_couscou_w").val(item_price.couscou_w);

			item_price.quinoa_or = ($("#qty_quinoa_or").val() * unit_price.quinoa_or/100 )
			$("#price_quinoa_or").val(item_price.quinoa_or);
		
		//NUTS
			item_price.almonds_o = ($("#qty_almonds_o").val() * unit_price.almonds_o/100 )
			$("#price_almonds_o").val(item_price.almonds_o);  

			item_price.hazelnuts = ($("#qty_hazelnuts").val() * unit_price.hazelnuts/100 )
			$("#price_hazelnuts").val(item_price.hazelnuts);
			
			item_price.peanuts__ = ($("#qty_peanuts__").val() * unit_price.peanuts__/100 )
			$("#price_peanuts__").val(item_price.peanuts__);

			item_price.walnuts__ = ($("#qty_walnuts__").val() * unit_price.walnuts__/100 )
			$("#price_walnuts__").val(item_price.walnuts__);
			
		//SEEDS
			item_price.sesame_se = ($("#qty_sesame_se").val() * unit_price.sesame_se/100 )
			$("#price_sesame_se").val(item_price.sesame_se);  

			item_price.sunflower = ($("#qty_sunflower").val() * unit_price.sunflower/100 )
			$("#price_sunflower").val(item_price.sunflower);
			
			item_price.pumpkin_s = ($("#qty_pumpkin_s").val() * unit_price.pumpkin_s/100 )
			$("#price_pumpkin_s").val(item_price.pumpkin_s);
			
		//PULSES

			item_price.blk_turtl = ($("#qty_blk_turtl").val() * unit_price.blk_turtl/100 )
			$("#price_blk_turtl").val(item_price.blk_turtl);

			item_price.butter_be = ($("#qty_butter_be").val() * unit_price.butter_be/100 )
			$("#price_butter_be").val(item_price.butter_be);  

			item_price.cannelini = ($("#qty_cannelini").val() * unit_price.cannelini/100 )
			$("#price_cannelini").val(item_price.cannelini);
			
			item_price.chickpeas = ($("#qty_chickpeas").val() * unit_price.chickpeas/100 )
			$("#price_chickpeas").val(item_price.chickpeas);
			
			item_price.lentils_g = ($("#qty_lentils_g").val() * unit_price.lentils_g/100 )
			$("#price_lentils_g").val(item_price.lentils_g);

			item_price.lentils_r = ($("#qty_lentils_r").val() * unit_price.lentils_r/100 )
			$("#price_lentils_r").val(item_price.lentils_r);

			item_price.rd_kidney = ($("#qty_rd_kidney").val() * unit_price.rd_kidney/100 )
			$("#price_rd_kidney").val(item_price.rd_kidney);
			
			//DRIED FRUIT

			item_price.dates_org = ($("#qty_dates_org").val() * unit_price.dates_org/100 )
			$("#price_dates_org").val(item_price.dates_org);
			
			item_price.raisins_o = ($("#qty_raisins_o").val() * unit_price.raisins_o/100 )
			$("#price_raisins_o").val(item_price.raisins_o);
			
			//SPICES
			item_price.salt_mald = ($("#qty_salt_mald").val() * unit_price.salt_mald/100 )
			$("#price_salt_mald").val(item_price.salt_mald);

		  
		  let total = item_price.choc_rais + item_price.honeycomb + item_price.ses_stick + item_price.roas_chic + item_price.popcorn_k + item_price.basmati_r + item_price.buckwheat + item_price.bulghur_w + item_price.couscou_w + item_price.quinoa_or + item_price.almonds_o + item_price.hazelnuts + item_price.peanuts__ + item_price.walnuts__ + item_price.sesame_se + item_price.sunflower + item_price.pumpkin_s + item_price.blk_turtl + item_price.butter_be + item_price.cannelini + item_price.chickpeas + item_price.lentils_g + item_price.lentils_r + item_price.rd_kidney + item_price.dates_org + item_price.raisins_o + item_price.salt_mald;
		
			$("#total_value").text(total.toFixed(2));
			 
		}
		
		


		$(function()
		 {
			$(".qty").on("change keyup",calculateTotal)
		})
		
		function clear_totals(){
			$(".qty").val(parseInt(0));
			$(".prc").val(parseInt(0));
			$("#total_value").text(parseInt(0));
		}
		
