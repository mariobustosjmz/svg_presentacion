$(function() {



    /*********************************** VARS ************************************/
    var cy = 100;
    var ty = 250;

    /********** STEPS  ***********/
    var config = [

        {
            "name": "uno",
            "cual": "uno",
            "t_c": "uno",
            "anim": "fade",
            "color": "#fff",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "dos",
            "cual": "dos",
            "t_c": "dos",
            "anim": "fade",
            "color": "#fff",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "tres",
            "cual": "tres",
            "t_c": "tres",
            "anim": "fade",
            "color": "#fff",
            "color_text": "#fff",
            "time": 10000
        }, {

            "name": "cuatro",
            "cual": "cuatro",
            "t_c": "cuatro",
            "anim": "fade",
            "color": "#fff",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "f_2",
            "cual": "c_1",
            "t_c": "t_1",
            "cy": 100,
            "ty": 250,
            "anim": "fade",
            "color": "#e94136",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "f_3",
            "cual": "c_2",
            "t_c": "t_2",
            "cy": -20,
            "ty": 130,
            "anim": "fade",
            "color": "#f18e1e",
            "color_text": "#fff",
            "time": 10000
        }, /********************* CUATRO *************/ {
            "name": "f_4",
            "cual": "c_3",
            "t_c": "t_3",
            "cy": -140,
            "ty": 10,
            "anim": "fade",
            "color": "#f5aa40",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "f_juntos",
            "cual": "c_juntos",
            "t_c": "t_juntps",
            "anim": "fade",
            "color": "#333",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "f_5",
            "cual": "cc_1",
            "t_c": "tt_1",
            "cy": 100,
            "ty": 250,
            "anim": "fade",
            "color": "#27a4db",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "a_1",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "a_2",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "#27a4db",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "a_3",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "#27a4db",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "a_4",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "#27a4db",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "a_5",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "#27a4db",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "a_6",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "#27a4db",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "b_1",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "b_2",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "b_3",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "b_4",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "b_5",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "b_6",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "c_1",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "c_2",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "c_3",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "c_4",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "c_5",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "c_6",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "c_7",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "c_8",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "c_9",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "f_6",
            "cual": "cc_2",
            "t_c": "tt_2",
            "cy": 0,
            "ty": 150,
            "anim": "fade",
            "color": "#1c75b6",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "d1_1",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "d1_2",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "d1_3",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "d2_1",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "d2_2",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "d2_3",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "d3_1",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "d3_2",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "d3_3",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "d3_4",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "f_7",
            "cual": "cc_3",
            "t_c": "tt_3",
            "cy": -100,
            "ty": 50,
            "anim": "fade",
            "color": "#2b398a",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "v1_1",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "v1_2",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "v1_3",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "v1_4",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "f_8",
            "cual": "cc_4",
            "t_c": "tt_4",
            "cy": -200,
            "ty": -50,
            "anim": "fade",
            "color": "#262262",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "i1_1",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "i1_2",
            "cual": "",
            "t_c": "",
            "anim": "fade",
            "color": "",
            "color_text": "",
            "time": 10000
        }, {
            "name": "ff_juntos",
            "cual": "cc_juntos",
            "t_c": "tt_juntps",
            "anim": "fade",
            "color": "#333",
            "color_text": "#fff",
            "time": 10000
        },
        /********************* CUATRO *************/

        {
            "name": "cinco",
            "cual": "cinco",
            "t_c": "cinco",
            "anim": "fade",
            "color": "#333",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "seis",
            "cual": "seis",
            "t_c": "seis",
            "anim": "fade",
            "color": "#333",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "siete",
            "cual": "siete",
            "t_c": "siete",
            "anim": "fade",
            "color": "#333",
            "color_text": "#fff",
            "time": 10000
        }
        /**************** PORTAFOLIO ***********************/
        , {
            "name": "portafolio01",
            "cual": "porta_1",
            "anim": "fade",
            "color": "#e94136",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "portafolio02",
            "cual": "porta_2",
            "anim": "fade",
            "color": "#f18e1e",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "portafolio03",
            "cual": "porta_3",
            "color": "#f5aa40",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "portafolio04",
            "cual": "porta_4",
            "color": "#f5aa40",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "portafolio05",
            "cual": "porta_5",
            "color": "#f5aa40",
            "color_text": "#fff",
            "time": 10000
        }, {
            "name": "portafolio06",
            "cual": "porta_6",
            "color": "#f5aa40",
            "color_text": "#fff",
            "time": 10000

        }, {
            "name": "portafolio07",
            "cual": "porta_7",
            "color": "#f5aa40",
            "color_text": "#fff",
            "time": 10000

        }



        /**************** PORTAFOLIO ***********************/

        , {
            "name": "FIN",
            "cual": "FIN",
            "color": "#f5aa40",
            "color_text": "#fff",
            "time": 10000
        }
    ];

    var autoplay = false,
        showtime,
        step = 0,
        total_steps = config.length;
    //$('#activatetour').on('click', startTour);

    /*********************************** INIT ************************************/
    setTimeout(function() { /**init(); **/ nextStep(); }, 0);

    function startTour() {
        if (!autoplay && total_steps > 1) {
            $('#nextstep').show();
        }
        nextStep();
    }

    function nextStep() {
        if (!autoplay) {
            if (step > 0)
                $('#prevstep').show();
            else
                $('#prevstep').hide();
            if (step == total_steps - 1)
                $('#nextstep').hide();
            else
                $('#nextstep').show();
        }
        if (step >= total_steps) {
            //if last step then end tour
            endTour();
            return false;
        }
        ++step;
        // showTooltip();
        showForm();
    }

    function prevStep() {
        if (!autoplay) {
            if (step > 2)
                $('#prevstep').show();
            else
                $('#prevstep').hide();
            if (step == total_steps)
                $('#nextstep').show();
        }
        if (step <= 1) {
            return false;
        }
        hideForm();
        --step;
        //showTooltip();
        showForm();
    }

    function endTour() {
        //step = 0;
        if (autoplay) clearTimeout(showtime);
        // removeTooltip();
        //  hideControls();
        alert("fin");
        // hideOverlay();
    }

    function restartTour() {
        step = 0;
        if (autoplay) clearTimeout(showtime);
        nextStep();
    }

    function showForm() {

        // $("#f_1").css("animation", "stop");
        var s = Snap("#svg");
        var step_config = config[step - 1];
        var forma = s.selectAll("#" + step_config.name + " path ");
        var $elem = $('#' + step_config.name);

        if (autoplay) {
            showtime = setTimeout(nextStep, step_config.time);
        }

        console.warn(config[step - 1].name);

        forma.animate({
            fill: step_config.color
        }, 2000);

        var letra = s.selectAll("#" + step_config.name + " g path ");

        letra.animate({
            fill: step_config.color_text
        }, 2000);


        switch (step_config.name) {



            case 'uno':
                uno();
                break;

            case 'dos':
                dos();
                break;

            case 'tres':
                tres();
                break;

            case 'cuatro':
                cuatro();
                break;




                /************ CUATRO **********/
            case 'f_2':
                $("#film_4").show();
                $("#film_5").hide();
                fadeAnimation();
                f_com();
                break;

            case 'f_3':
                $("#film_4").show();
                $("#film_5").hide();
                fadeAnimation();
                f_com();
                break;

            case 'f_4':
                $("#film_4").show();
                $("#film_5").hide();
                fadeAnimation();
                f_com();
                break;

            case 'f_juntos':
                $("#film_4").show();
                $("#film_5").hide();
                fadeAnimation();
                f_com_clean();
                break;

            case 'f_5':
                $("#film_4").hide();
                $("#film_5").show();

                cy = 100;
                ty = 250;

                f_4com();
                OutAnimation();
                break;

            case 'a_1':

                /** function */
                a_distribucion();

                break;

            case 'a_2':

                /** seleccion propuesta constructora */


                var areas = Snap("#areas");
                var plano1 = areas.selectAll("#plano1");
                var plano2 = areas.selectAll("#plano2");
                var plano3 = areas.selectAll("#plano3");

                var texto = areas.selectAll("#texto1 , #texto2 , #texto3");

                plano1.animate({ transform: 't375,-30,r270,s2' }, 1000, mina.bounce);
                plano2.attr({ opacity: '0' });
                plano3.attr({ opacity: '0' });
                texto.attr({ opacity: '0' });


                all = areas.selectAll("#ptext_1 ,#pcircle_1 ,#ptext_2 ,#pcircle_2 ,#ptext_3 ,#pcircle_3, #ptext_4 ,#pcircle_4 ");
                all.attr({ opacity: '0' });

                break;
                /****************************** PUNTOS PLANO 1 *******************************/

            case 'a_3':
                //upp
                var areas = Snap("#areas");
                areas.selectAll("#camaras ,#coccion,.lavado").attr({ stroke: 'black' });
                areas.selectAll("#espacios").attr({ opacity: 0 });

                var plano1 = areas.selectAll("#plano1");
                plano1.animate({ transform: 't205,-0,r270,s1.8' }, 1000, mina.bounce);

                all = areas.selectAll("#ptext_1 ,#pcircle_1 ,#ptext_2 ,#pcircle_2 ,#ptext_3 ,#pcircle_3, #ptext_4 ,#pcircle_4 ");
                all.attr({ opacity: '0' });

                var square = areas.rect(1240, 155, 330, 505);
                square.attr({ fill: 'none', stroke: 'none', strokeWidth: 0, id: 'texto_plano1' });


                var text1 = areas.text(960, 205, "Falta de Almacén de Secos.").attr({ 'font-size': '18px', fill: '#fff', id: "ptext_1" });
                var circle1 = areas.circle(940, 200, 10).attr({ fill: "#ee8b22", id: "pcircle_1" }); //+60y

                var camaras = areas.selectAll("#camaras");
                camaras.animate({ opacity: 1, stroke: "#ee8b22", strokeWidth: 1 }, 5000, mina.bounce);





                break;

            case 'a_4':

                var areas = Snap("#areas");
                areas.selectAll("#camaras ,#coccion,.lavado").attr({ stroke: 'black' });
                areas.selectAll("#espacios").attr({ opacity: 0 });

                all = areas.selectAll("#ptext_3 ,#pcircle_3, #ptext_4 ,#pcircle_4 ");
                all.attr({ opacity: '0' });

                var text2 = areas.text(960, 265, "Insuficiente equipo de cocción.").attr({ 'font-size': '18px', fill: '#fff', id: "ptext_2" });
                var circle2 = areas.circle(940, 260, 10).attr({ fill: "#ee8b22", id: "pcircle_2" });

                var coccion = areas.selectAll("#coccion");
                coccion.animate({ opacity: 1, stroke: "#ee8b22", strokeWidth: 1 }, 2000, mina.bounce);

                break;

            case 'a_5':
                var areas = Snap("#areas");
                areas.selectAll("#camaras ,#coccion,.lavado").attr({ stroke: 'black' });
                areas.selectAll("#espacios").attr({ opacity: 0 });


                all = areas.selectAll("#ptext_4 ,#pcircle_4 ");
                all.attr({ opacity: '0' });

                var text3 = areas.text(960, 325, "Áreas de lavado separadas").attr({ 'font-size': '18px', fill: '#fff', id: "ptext_3" });
                var circle3 = areas.circle(940, 320, 10).attr({ fill: "#ee8b22", id: "pcircle_3" });

                var lavado = areas.selectAll(".lavado");

                lavado.animate({ opacity: 1, stroke: "#ee8b22", strokeWidth: 1 }, 2000, mina.bounce);

                break;

            case 'a_6':
                var areas = Snap("#areas");
                areas.selectAll("#camaras ,#coccion,.lavado").attr({ stroke: 'black' });
                areas.selectAll("#espacios").attr({ opacity: 0 });


                var espacios = areas.selectAll("#espacios");
                espacios.animate({ opacity: 1, fill: "#ee8b22", stroke: '#ee8b22', opacity: '.7' }, 5000, mina.bounce);

                //all = areas.selectAll("rect , text , circle");
                //all.attr({ opacity: '0' });

                var text4 = areas.text(960, 385, "Espacios inutilizados").attr({ 'font-size': '18px', fill: '#fff', id: "ptext_4" });
                var circle4 = areas.circle(940, 380, 10).attr({ fill: "#ee8b22", id: "pcircle_4" });



                break;
                /*************************************  **************************************/

            case 'b_1':
                a_distribucion();
                break;

            case 'b_2':
                /** seleccion propuesta constructora */

                var areas = Snap("#areas");
                var plano1 = areas.selectAll("#plano1");
                var plano2 = areas.selectAll("#plano2");
                var plano3 = areas.selectAll("#plano3");

                var texto = areas.selectAll("#texto1 , #texto2 , #texto3");

                plano2.animate({ opacity: 1, transform: 't0,-30,r270,s2' }, 1000, mina.bounce);
                plano1.attr({ opacity: '0' });
                plano3.attr({ opacity: '0' });
                texto.attr({ opacity: '0' });

                all = areas.selectAll("#pbtext_1 , #pbcircle_1 , #pbtext_2 , #pbcircle_2 , #pbtext_3 , #pbcircle_3 , #pbtext_4 , #pbcircle_4  ");
                all.attr({ opacity: '0' });
                break;
                /****************************** PUNTOS PLANO 2 *******************************/

            case 'b_3':

                var areas = Snap("#areas");
                areas.selectAll(".pasillos").attr({ stroke: 'none', fill: 'none' }); //y+60

                var plano2 = areas.selectAll("#plano2");
                plano2.animate({ transform: 't-195,-0,r270,s1.7' }, 1000, mina.bounce);


                var square = areas.rect(1240, 155, 330, 505);
                square.attr({ fill: 'none', stroke: 'none', strokeWidth: 0, id: 'texto_plano1' });


                all = areas.selectAll("#pbtext_1 , #pbcircle_1 , #pbtext_2 , #pbcircle_2 , #pbtext_3 , #pbcircle_3 , #pbtext_4 , #pbcircle_4  ");
                all.attr({ opacity: '0' });

                var text1 = areas.text(960, 205, "Pasillos angostos.").attr({ 'font-size': '18px', fill: '#fff', id: "pbtext_1" });
                var circle1 = areas.circle(940, 200, 10).attr({ fill: "#ee8b22", id: "pbcircle_1" }); //+60y

                var pasillos = areas.selectAll(".pasillos");
                pasillos.animate({ opacity: 1, fill: "#ee8b22", strokeWidth: 1 }, 5000, mina.bounce);


                break;

            case 'b_4':

                var areas = Snap("#areas");
                areas.selectAll(".pasillos").attr({ stroke: 'none', fill: 'none' }); //y+60


                all = areas.selectAll("  #pbtext_2 , #pbcircle_2 , #pbtext_3 , #pbcircle_3 , #pbtext_4 , #pbcircle_4  ");
                all.attr({ opacity: '0' });


                var text2 = areas.text(960, 265, "No hay control de inventario por ").attr({ 'font-size': '18px', fill: '#fff', id: "pbtext_2" });
                var text21 = areas.text(960, 285, "cámaras y almacén separados.").attr({ 'font-size': '18px', fill: '#fff', id: "pbtext_2" });
                var circle2 = areas.circle(940, 260, 10).attr({ fill: "#ee8b22", id: "pbcircle_2" });

                //2.       ID flecha1 hasta flecha6
                var areas = Snap("#areas");
                var all_flechas = areas.selectAll("path[id*='flecha']");

                all_flechas.attr({ opacity: "0", fill: 'fff' });

                var delay = 500;
                //index=index+1;


                for (var i = 1; i < 7; i++) {
                    $('#flecha' + i);
                    areas.selectAll('#flecha' + i).animate({ fill: "ee8b22", stroke: "ee8b22", opacity: "1" }, delay, mina.bounce);
                    delay += 500;

                }

                break;

            case 'b_5':

                var areas = Snap("#areas");
                areas.selectAll(".pasillos").attr({ stroke: 'none', fill: 'none' }); //y+60


                all = areas.selectAll("  #pbtext_3 , #pbcircle_3 , #pbtext_4 , #pbcircle_4  ");
                all.attr({ opacity: '0' });

                var text2 = areas.text(960, 345, "Flujo de trabajo deficiente entre").attr({ 'font-size': '18px', fill: '#fff', id: "pbtext_3" });
                var text21 = areas.text(960, 365, "área de lavado y de servicio.").attr({ 'font-size': '18px', fill: '#fff', id: "pbtext_3" });
                var circle2 = areas.circle(940, 340, 10).attr({ fill: "#ee8b22", id: "pbcircle_3" });

                //2.       ID flecha1 hasta flecha6
                var all_flechas = areas.selectAll("path[id*='flecha']");
                all_flechas.attr({ opacity: "0", fill: 'fff' });

                var delay = 500;
                //index=index+1;


                for (var i = 8; i < 31; i++) {
                    $('#flecha' + i);

                    areas.selectAll('#flecha' + i).animate({ fill: "ee8b22", stroke: "ee8b22", opacity: "1" }, delay, mina.bounce);
                    delay += 500;

                }
                break;

            case 'b_6':

                var areas = Snap("#areas");

                var all_flechas = areas.selectAll("path[id*='flecha']");
                all_flechas.attr({ opacity: "0", fill: 'fff' });

                areas.selectAll(".pasillos").attr({ stroke: 'none', fill: 'none' }); //y+60

                all = areas.selectAll("    #pbtext_4 , #pbcircle_4  ");
                all.attr({ opacity: '0' });

                var text3 = areas.text(960, 425, "Espacio inutilizado ").attr({ 'font-size': '18px', fill: '#fff', id: "pbtext_4" });
                var circle3 = areas.circle(940, 420, 10).attr({ fill: "#ee8b22", id: "pbcircle_4" });

                var servicio = areas.selectAll("#servicio");
                servicio.animate({ opacity: 1, fill: "#ee8b22", strokeWidth: 1 }, 5000, mina.bounce);

                break;


                /*************************************  **************************************/

            case 'c_1':
                a_distribucion();
                break;

            case 'c_2':
                /** seleccion propuesta constructora */

                /** seleccion propuesta constructora */

                var areas = Snap("#areas");
                var plano1 = areas.selectAll("#plano1");
                var plano2 = areas.selectAll("#plano2");
                var plano3 = areas.selectAll("#plano3");

                var texto = areas.selectAll("#texto1 , #texto2 , #texto3");

                plano3.animate({ opacity: 1, transform: 't-380,-30,r270,s2' }, 1000, mina.bounce);
                plano1.attr({ opacity: '0' });
                plano2.attr({ opacity: '0' });
                texto.attr({ opacity: '0' });


                all = areas.selectAll("#pctext_1 , #pccircle_1 , #pctext_2 , #pccircle_2 , #pctext_3 , #pccircle_3 , #pctext_4 , #pccircle_4 , #pctext_5 , #pccircle_5  ");
                all.attr({ opacity: '0' });

                break;


                /********************************** PLANO 3 **********************************/

            case 'c_3':
                var areas = Snap("#areas");
                areas.selectAll(".pasillo , .pasillos").attr({ stroke: 'none', fill: 'none' }); //y+60

                var plano2 = areas.selectAll("#plano3");
                plano2.animate({ transform: 't-555,-0,r270,s1.7' }, 1000, mina.bounce);

                var square = areas.rect(1240, 155, 330, 505);
                square.attr({ fill: 'none', stroke: 'none', strokeWidth: 0, id: 'texto_plano3' });

                all = areas.selectAll("#pctext_1 , #pccircle_1 , #pctext_2 , #pccircle_2 , #pctext_3 , #pccircle_3 , #pctext_4 , #pccircle_4 , #pctext_5 , #pccircle_5  ");
                all.attr({ opacity: '0' });

                var text1 = areas.text(960, 205, "Pasillo de tamaño adecuado.").attr({ 'font-size': '18px', fill: '#fff', id: "pctext_1" });
                var circle1 = areas.circle(940, 200, 10).attr({ fill: "#ee8b22", id: "pccircle_1" }); //+60y

                var pasillos = areas.selectAll(".pasillo");
                pasillos.animate({ opacity: 1, fill: "#ee8b22", strokeWidth: 1 }, 5000, mina.bounce);
                break;

            case 'c_4':

                var areas = Snap("#areas");
                areas.selectAll(".pasillo , .pasillos").attr({ stroke: 'none', fill: 'none' }); //y+60


                all = areas.selectAll("#pctext_2 , #pccircle_2 , #pctext_3 , #pccircle_3 , #pctext_4 , #pccircle_4 , #pctext_5 , #pccircle_5  ");
                all.attr({ opacity: '0' });

                var text2 = areas.text(960, 265, "Correcto control de inventarios").attr({ 'font-size': '18px', fill: '#fff', id: "pctext_2" });
                var circle2 = areas.circle(940, 260, 10).attr({ fill: "#ee8b22", id: "pccircle_2" });

                //2.       ID flecha1 hasta flecha6
                var areas = Snap("#areas");
                var all_flechas = areas.selectAll("path[id*='flecha']");
                all_flechas.attr({ opacity: "0", fill: 'fff' });

                var delay = 500;
                //index=index+1;

                for (var i = 31; i < 38; i++) {
                    $('#flecha' + i);
                    areas.selectAll('#flecha' + i).animate({ fill: "ee8b22", stroke: "ee8b22", opacity: "1" }, delay, mina.bounce);
                    delay += 500;

                }
                break;

            case 'c_5':

                var areas = Snap("#areas");
                areas.selectAll(".pasillo , .pasillos").attr({ stroke: 'none', fill: 'none' }); //y+60

                var plano2 = areas.selectAll("#plano3");
                plano2.animate({ transform: 't-555,-0,r270,s1.7' }, 1000, mina.bounce);

                //all = areas.selectAll("rect , text , circle");
                //all.attr({ opacity: '0' });

                var square = areas.rect(1240, 155, 330, 505);
                square.attr({ fill: 'none', stroke: 'none', strokeWidth: 0, id: 'texto_plano3' });

                all = areas.selectAll("  #pctext_3 , #pccircle_3 , #pctext_4 , #pccircle_4 , #pctext_5 , #pccircle_5  ");
                all.attr({ opacity: '0' });

                var text3 = areas.text(960, 325, "Pasillo de tamaño adecuado.").attr({ 'font-size': '18px', fill: '#fff', id: "pctext_3" });
                var circle3 = areas.circle(940, 320, 10).attr({ fill: "#ee8b22", id: "pccircle_3" }); //+60y

                var pasillos = areas.selectAll(".pasillos");
                pasillos.animate({ opacity: 1, fill: "#ee8b22", strokeWidth: 1 }, 5000, mina.bounce);

                break;

            case 'c_6':


                var areas = Snap("#areas");
                areas.selectAll(".pasillo , .pasillos").attr({ stroke: 'none', fill: 'none' }); //y+60


                all = areas.selectAll("    #pctext_4 , #pccircle_4 , #pctext_5 , #pccircle_5  ");
                all.attr({ opacity: '0' });

                var text4 = areas.text(960, 385, "Flujo adecuado entre área de lavado").attr({ 'font-size': '18px', fill: '#fff', id: "pctext_4" });
                var text41 = areas.text(960, 405, "y de servicio.").attr({ 'font-size': '18px', fill: '#fff', id: "pctext_4" });
                var circle4 = areas.circle(940, 385, 10).attr({ fill: "#ee8b22", id: "pccircle_4" });



                //2.       ID flecha1 hasta flecha6


                var areas = Snap("#areas");
                var all_flechas = areas.selectAll("path[id*='flecha']");
                all_flechas.attr({ opacity: "0", fill: 'fff' });

                var delay = 500;
                //index=index+1;




                for (var i = 38; i < 46; i++) {
                    $('#flecha' + i);

                    areas.selectAll('#flecha' + i).animate({ fill: "ee8b22", stroke: "ee8b22", opacity: "1" }, delay, mina.bounce);
                    delay += 500;

                }



                break;

            case 'c_7':
                var areas = Snap("#areas");


                var all_flechas = areas.selectAll("path[id*='flecha']");
                all_flechas.attr({ opacity: "0", fill: 'fff' });
                // areas.selectAll('text , circle').attr({ opacity: 0 });

                areas.selectAll(".pasillo , .pasillos").attr({ stroke: 'none', fill: 'none' }); //y+60



                all = areas.selectAll("   #pctext_5 , #pccircle_5 ");
                all.attr({ opacity: '0' });

                var text3 = areas.text(960, 465, "Espacios mejor distribuidos.").attr({ 'font-size': '18px', fill: '#fff', id: "pctext_5" });
                var circle3 = areas.circle(940, 460, 10).attr({ fill: "#ee8b22", id: "pccircle_5" });

                var servicio = areas.selectAll("#plano3 #servicio path");
                servicio.animate({ opacity: 1, stroke: "#ee8b22" }, 5000, mina.bounce);


                break;

                /**********************************  **********************************/

            case 'c_8':


                a_distribucion();



                break;

            case 'c_9':


                show_circle();


                break;

            case 'f_6':
                $("#film_4").hide();
                $("#film_5").show();
                f_4com();
                OutAnimation();
                break;

            case 'd1_1':

                /** function */
                b_disposicion_1();

                break;

            case 'd1_2':

                /** function */
                var disp = Snap("#disposicion_b");

                var c1_i2 = disp.selectAll("#c1_i2");
                var c1_i1 = disp.selectAll("#c1_i1");


                c1_i2.animate({ opacity: '.3' }, 1000, mina.backin);
                c1_i1.animate({ opacity: '1' }, 1500, mina.backin);
                $("#c1_i2 .contorno").removeClass("select");
                $("#c1_i1 .contorno").addClass("select");

                break

            case 'd1_3':

                /** function */

                var disp = Snap("#disposicion_b");

                var c1_i2 = disp.selectAll("#c1_i2");
                var c1_i1 = disp.selectAll("#c1_i1");


                c1_i2.animate({ opacity: '1' }, 1500, mina.backin);
                c1_i1.animate({ opacity: '1' }, 1000, mina.backin);
                $("#c1_i2 .contorno").removeClass("select");
                $("#c1_i1 .contorno").removeClass("select");



                break;

            case 'd2_1':

                /** function */
                b_disposicion_2();

                break;

            case 'd2_2':

                /** function */
                var disp = Snap("#disposicion_b");

                var c2_i2 = disp.selectAll("#c2_i2");
                var c2_i1 = disp.selectAll("#c2_i1");


                c2_i2.animate({ opacity: '.3' }, 1000, mina.backin);
                c2_i1.animate({ opacity: '1' }, 1500, mina.backin);
                $("#c2_i2 .contorno").removeClass("select");
                $("#c2_i1 .contorno").addClass("select");

                break

            case 'd2_3':
                /** function */

                var disp = Snap("#disposicion_b");

                var c2_i2 = disp.selectAll("#c2_i2");
                var c2_i1 = disp.selectAll("#c2_i1");


                c2_i2.animate({ opacity: '1' }, 1500, mina.backin);
                c2_i1.animate({ opacity: '1' }, 1000, mina.backin);
                $("#c2_i2 .contorno").removeClass("select");
                $("#c2_i1 .contorno").removeClass("select");



                break;

            case 'd3_1':

                /** function */
                b_disposicion_3();

                break;

            case 'd3_2':

                /** function */
                var disp = Snap("#disposicion_b");

                var c3_i2 = disp.selectAll("#c3_i2");
                var c3_i1 = disp.selectAll("#c3_i1");


                c3_i2.animate({ opacity: '.3' }, 1000, mina.backin);
                c3_i1.animate({ opacity: '1' }, 1500, mina.backin);
                $("#c3_i2 .contorno").removeClass("select");
                $("#c3_i1 .contorno").addClass("select");

                break

            case 'd3_3':

                /** function */

                var disp = Snap("#disposicion_b");

                var c3_i2 = disp.selectAll("#c3_i2");
                var c3_i1 = disp.selectAll("#c3_i1");


                c3_i2.animate({ opacity: '1' }, 1500, mina.backin);
                c3_i1.animate({ opacity: '1' }, 1000, mina.backin);
                $("#c3_i2 .contorno").removeClass("select");
                $("#c3_i1 .contorno").removeClass("select");



                break

            case 'd3_4':

                show_circle();


                break;

            case 'f_7':
                $("#film_4").hide();
                $("#film_5").show();
                f_4com();
                OutAnimation();
                break;

            case 'v1_1':

                c_ventilacion_1();

                break;

            case 'v1_2':

                var disp = Snap("#ventilacion_c");
                disp.selectAll('g[id*=humo] g').animate({ opacity: 1 }, 0, mina.easeout);
                var delay = 0;

                setTimeout(function() {
                    for (var i = 1; i < 17; i++) {
                        $('#humo' + i);

                        disp.selectAll('#humo' + i + ' g').animate({ opacity: 0 }, delay, mina.bounce);
                        delay += 1000;
                    }
                    disp.selectAll('g[id*=humo] g').animate({ opacity: 0 }, 6000, mina.easeout);
                    disp.selectAll('#fondo').animate({ opacity: 1 }, 3000, mina.ease);
                    disp.selectAll('path ,polyline,line').animate({ opacity: 0 }, 3000, mina.ease);

                    setTimeout(function() {

                        disp.selectAll('#texto *').animate({ opacity: .9 }, 1000, mina.ease);

                    }, 5000);
                }, 500);



                break;

            case 'v1_3':

                $("#ventilacion_c").html("");
                $(".wufoo-ad").css("width", "0%");
                $(".wufoo-ad-text").css("width", "100%");

                $("#ventilacion_c").html("");
                var disp = Snap("#ventilacion_c");

                Snap.load("svg/ventilar.svg", function(f) {
                    g = f.selectAll("#ventilar");
                    disp.append(g);
                    g.attr({ transform: 't120,80,r0,0,0,s1' });
                    g.attr({ viewBox: '100 100 1538 5141.8' });
                    g.attr({ opacity: 1 });
                    g.animate({ opacity: 1 }, 2000, mina.backin);

                    disp.selectAll('#ventilacion').attr({ opacity: 0 });

                    disp.selectAll('#ventilar *').attr({ opacity: 0 });

                    disp.selectAll('#fondo_gris').attr({ transform: 't-600,0,r0,0,0,s1' });


                    setTimeout(function() { disp.selectAll('#fondo_gris').animate({ transform: 't0,0,r0,0,0,s1', opacity: 1 }, 1000, mina.bounce); }, 1000);

                    setTimeout(function() { disp.selectAll('#titulo_1 , #titulo_1 *').animate({ opacity: 1 }, 1000, mina.bounce); }, 1500);

                    setTimeout(function() { disp.selectAll('#ac_1 , #ac_1 * , #ac_1 image').animate({ opacity: 1 }, 1000, mina.ease); }, 2000);

                    setTimeout(function() { disp.selectAll('#ac_2 , #ac_2 * , #ac_2 image').animate({ opacity: 1 }, 1000, mina.ease); }, 3000);

                    setTimeout(function() { disp.selectAll('#ac_3 , #ac_3 * , #ac_3 image').animate({ opacity: 1 }, 1000, mina.ease); }, 3500);

                    setTimeout(function() { disp.selectAll('#titulo_2 , #titulo_2 *').animate({ opacity: 1 }, 1000, mina.bounce); }, 4500);

                    setTimeout(function() { disp.selectAll('#al_1 , #al_1 * ').animate({ opacity: 1 }, 1000, mina.ease); }, 6000);
                    setTimeout(function() { disp.selectAll('#check1').animate({ transform: 't0,0,s1.5', opacity: 1 }, 1500, mina.bounce); }, 5500);
                    setTimeout(function() { disp.selectAll('#check1').animate({ transform: 't0,0,s1' }, 1500, mina.bounce); }, 6000);

                    setTimeout(function() { disp.selectAll('#al_2 , #al_2 * ').animate({ opacity: 1 }, 1000, mina.ease); }, 7000);
                    setTimeout(function() { disp.selectAll('#check2').animate({ transform: 't0,0,s1.5', opacity: 1 }, 1500, mina.bounce); }, 6500);
                    setTimeout(function() { disp.selectAll('#check2').animate({ transform: 't0,0,s1' }, 1500, mina.bounce); }, 7000);

                    setTimeout(function() { disp.selectAll('#al_3 , #al_3 * ').animate({ opacity: 1 }, 1000, mina.ease); }, 8000);
                    setTimeout(function() { disp.selectAll('#check3').animate({ transform: 't0,0,s1.5', opacity: 1 }, 1500, mina.bounce); }, 7500);
                    setTimeout(function() { disp.selectAll('#check3').animate({ transform: 't0,0,s1' }, 1500, mina.bounce); }, 8000);

                    setTimeout(function() { disp.selectAll('#al_4 , #al_4 * ').animate({ opacity: 1 }, 1000, mina.ease); }, 9000);
                    setTimeout(function() { disp.selectAll('#check4').animate({ transform: 't0,0,s1.5', opacity: 1 }, 1500, mina.bounce); }, 8500);
                    setTimeout(function() { disp.selectAll('#check4').animate({ transform: 't0,0,s1' }, 1500, mina.bounce); }, 9000);

                });

                $("#film_5").hide();
                $("#film_4").hide();
                $("#areas").hide();
                $("#disposicion_b").hide();


                break;

            case 'v1_4':

                show_circle();

                break;

            case 'f_8':
                $("#film_4").hide();
                $("#film_5").show();
                f_4com();
                OutAnimation();
                break;

            case 'i1_1':

                d_instalaciones_1();

                break;

            case 'i1_2':

                show_circle();

                break;

            case 'ff_juntos':
                f_4com_clean();
                break;

                /************ CUATRO **********/






            case 'cinco':
                show_normal();
                cinco();

                break;

            case 'seis':
                seis();
                break;

            case 'siete':
                siete();
                break;


            case 'portafolio01':
                porta();
                break;

            case 'portafolio02':
                porta();
                break;

            case 'portafolio03':
                porta();
                break;

            case 'portafolio04':
                porta();
                break;

            case 'portafolio05':
                porta();
                break;

            case 'portafolio06':
                porta();
                break;

            case 'portafolio07':
                porta();
                break;









            default:
                fadeAnimation();
                break;
        }

        $elem.show();
    }

    function show_normal() {

        $(".wufoo-ad").css("width", "100%");
        $(".wufoo-ad-text").css("width", "0%");
    }

    function show_circle() {

        $(".wufoo-ad").css("width", "50%");
        $(".wufoo-ad-text").css("width", "50%");


        $("#areas").hide();
        $("#film_5").show();
        $("#film_4").hide();
    }

    function a_distribucion() {


        $(".wufoo-ad").css("width", "0%");
        $(".wufoo-ad-text").css("width", "100%");

        $("#areas").html("");
        $("#areas").show();
        var areas = Snap("#areas");

        Snap.load("svg/planos1-5.svg", function(f) {
            //test = f.select("svg").attr({ viewBox: '0 0 100 100' });
            g = f.selectAll("#all");
            areas.append(g);
            g.attr({ transform: 't120,80,r0,0,0,s1' });
            g.attr({ viewBox: '100 100 1538 5141.8' });
            g.attr({ opacity: 1 });
            g.animate({ opacity: 1 }, 2000, mina.backin);

        });

        $("#film_5").hide();
        $("#film_4").hide();


        /**
            var areas = Snap("#areas");
            var plano1 = areas.selectAll("#plano1");
            var plano2 = areas.selectAll("#plano2");
            var plano3 = areas.selectAll("#plano3");

            var texto = areas.selectAll("#texto1 , #texto2 , #texto3");
            var coccion = areas.selectAll("#coccion");
            var lavado = areas.selectAll(".lavado");
            var camaras = areas.selectAll("#camaras");


            var clickFunc = function() {

                   plano1.animate({ transform: 't380,-30,r270,s2' }, 1000, mina.bounce);
                   plano2.attr({ opacity: '0' });
                   plano3.attr({ opacity: '0' });
                   texto.attr({ opacity: '0' });
                   coccion.animate({ stroke: "#ee8b22", strokeWidth: 1 }, 2000, mina.bounce);
                   lavado.animate({ stroke: "#ee8b22", strokeWidth: 1 }, 2000, mina.bounce);
                   camaras.animate({ stroke: "#ee8b22", strokeWidth: 1, transform: 't0' }, 5000, mina.bounce);


            }

            $("#plano1").click(clickFunc);
            **/
    }

    function b_disposicion_1() {


        $("#disposicion_b").show();
        $("#disposicion_b").html("");

        $(".wufoo-ad").css("width", "0%");
        $(".wufoo-ad-text").css("width", "100%");

        var disp = Snap("#disposicion_b");

        $("#comparacion_1").html("");


        Snap.load("svg/Comparacion1.svg", function(f) {
            g = f.selectAll("#comparacion_1");
            disp.append(g);
            g.attr({ transform: 't120,80,r0,0,0,s1' });
            g.attr({ viewBox: '100 100 1538 5141.8' });
            g.attr({ opacity: 1 });

            var c1_i2 = disp.selectAll("#c1_i2").attr({ opacity: 0 });
            var c1_i1 = disp.selectAll("#c1_i1").attr({ opacity: 0 });
            var titulo = disp.selectAll("#titulo").attr({ opacity: 0 });

            $("#c1_i2 .contorno").addClass("select");

            g.animate({ opacity: 1 }, 2000, mina.backin);

            titulo.animate({ opacity: 1 }, 1000, mina.backin);
            c1_i2.animate({ opacity: 1 }, 1500, mina.backin);
            c1_i1.animate({ opacity: '.3' }, 2000, mina.backin);

        });

        $("#film_5").hide();
        $("#film_4").hide();
        $("#areas").hide();
    }

    function b_disposicion_2() {


        $("#disposicion_b").html("");

        $(".wufoo-ad").css("width", "0%");
        $(".wufoo-ad-text").css("width", "100%");

        var disp = Snap("#disposicion_b");

        Snap.load("svg/Comparacion2.svg", function(f) {
            g = f.selectAll("#comparacion_2");
            disp.append(g);
            g.attr({ transform: 't120,80,r0,0,0,s1' });
            g.attr({ viewBox: '100 100 1538 5141.8' });
            g.attr({ opacity: 1 });

            var c1_i2 = disp.selectAll("#c2_i2").attr({ opacity: 0 });
            var c1_i1 = disp.selectAll("#c2_i1").attr({ opacity: 0 });
            var titulo = disp.selectAll("#titulo").attr({ opacity: 0 });

            $("#c2_i2 .contorno").addClass("select");

            g.animate({ opacity: 1 }, 2000, mina.backin);

            titulo.animate({ opacity: 1 }, 1000, mina.backin);
            c1_i2.animate({ opacity: 1 }, 1500, mina.backin);
            c1_i1.animate({ opacity: '.3' }, 2000, mina.backin);

        });

        $("#film_5").hide();
        $("#film_4").hide();
        $("#areas").hide();
    }

    function b_disposicion_3() {


        $("#disposicion_b").html("");

        $(".wufoo-ad").css("width", "0%");
        $(".wufoo-ad-text").css("width", "100%");

        var disp = Snap("#disposicion_b");

        Snap.load("svg/Comparacion3.svg", function(f) {
            g = f.selectAll("#comparacion_3");
            disp.append(g);
            g.attr({ transform: 't120,80,r0,0,0,s1' });
            g.attr({ viewBox: '100 100 1538 5141.8' });
            g.attr({ opacity: 1 });

            var c1_i2 = disp.selectAll("#c3_i2").attr({ opacity: 0 });
            var c1_i1 = disp.selectAll("#c3_i1").attr({ opacity: 0 });
            var titulo = disp.selectAll("#titulo").attr({ opacity: 0 });

            $("#c3_i2 .contorno").addClass("select");

            g.animate({ opacity: 1 }, 2000, mina.backin);

            titulo.animate({ opacity: 1 }, 1000, mina.backin);
            c1_i2.animate({ opacity: 1 }, 1500, mina.backin);
            c1_i1.animate({ opacity: '.3' }, 2000, mina.backin);

        });

        $("#film_5").hide();
        $("#film_4").hide();
        $("#areas").hide();
    }

    function c_ventilacion_1() {


        $("#film_5").hide();
        $("#film_4").hide();
        $("#areas").hide();
        $("#disposicion_b").hide();

        $("#ventilacion_c").show();
        var disp = Snap("#ventilacion_c");

        $("#ventilacion_c").html("");
        disp.selectAll('#fondo').attr({ opacity: 0 });

        $(".wufoo-ad").css("width", "0%");
        $(".wufoo-ad-text").css("width", "100%");

        var disp = Snap("#ventilacion_c");

        Snap.load("svg/stroke2.svg", function(f) {

            g = f.selectAll("#ventilacion");
            disp.append(g);
            g.attr({ transform: 't120,80,r0,0,0,s1' });
            g.attr({ viewBox: '100 100 1538 5141.8' });
            g.attr({ opacity: 1 });

            g.animate({ opacity: 1 }, 2000, mina.backin);

            disp.selectAll('path ,polyline,line').attr({ opacity: 1 });
            disp.selectAll('#fondo').attr({ opacity: 0 });
            disp.selectAll('#texto *').attr({ opacity: 0 });
            disp.selectAll('g[id*=humo] g').animate({ opacity: 0 }, 0, mina.easeout);



            var svg = new Walkway({
                selector: '#ventilacion_c',
                duration: '5000',
                easeInOutQuart: function(t) {
                    return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
                },
            });

            svg.draw();

            setTimeout(function() {
                disp.selectAll('#fondo').animate({ opacity: .8 }, 2000, mina.ease);
                disp.selectAll('path ,polyline,line').animate({ opacity: 0 }, 3000, mina.ease);


            }, 4000);


        });



        setTimeout(function() {


            var disp = Snap("#ventilacion_c");
            var svg = new Walkway({
                selector: '#ventilacion_c',
                duration: '6000',
                easeInOutQuart: function(t) {
                    return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
                },
            });

            svg.draw();

            disp.selectAll('#fondo').animate({ opacity: .8 }, 3000, mina.easeout);


            setTimeout(function() {
                var delay = 0;
                for (var i = 17; i > 0; i--) {

                    $('#humo' + i);

                    disp.selectAll('#humo' + i + ' g').animate({ opacity: 1 }, delay, mina.bounce);
                    delay += 400;

                }
                disp.selectAll('#fondo').animate({ opacity: .8 }, delay, mina.bounce);

            }, 0);




        }, 6000);
    }

    function d_instalaciones_1() {

        $("#instalacion_d").show();


        $("#film_5").hide();
        $("#film_4").hide();
        $("#areas").hide();
        $("#disposicion_b").hide();
        $("#ventilacion_c").hide();

        $(".wufoo-ad").css("width", "0%");
        $(".wufoo-ad-text").css("width", "100%");
        $("#instalacion_d").html("");

        var disp = Snap("#instalacion_d");


        Snap.load("svg/instalaciones.svg", function(f) {

            g = f.selectAll("#instalaciones");
            disp.append(g);
            g.attr({ transform: 't120,80,r0,0,0,s1' });
            g.attr({ viewBox: '100 100 1538 5141.8' });
            g.attr({ opacity: 1 });
            g.animate({ opacity: 1 }, 2000, mina.backin);

            var s = Snap("#instalaciones");
            s.selectAll("*").attr({ opacity: 0 });

            setTimeout(function() {

                s.selectAll("#inst_circ_1 ").animate({ opacity: 0, transform: 't0 ,-50' }, 0, mina.bounce);
                s.selectAll("#inst_circ_2 ").animate({ opacity: 0, transform: 't0 ,-50' }, 0, mina.bounce);
                s.selectAll("#inst_circ_3 ").animate({ opacity: 0, transform: 't0 ,-50' }, 0, mina.bounce);
                s.selectAll("#inst_circ_4 ").animate({ opacity: 0, transform: 't0 ,-50' }, 0, mina.bounce);

                s.selectAll("#inst_texto_1").attr({ transform: 't-600,0' });
                s.selectAll("#inst_texto_1").animate({ transform: 't0,0', opacity: 1 }, 1000, mina.bounce);

                setTimeout(function() {
                    s.selectAll("#inst_img_1").attr({ transform: 't-600,0' });
                    s.selectAll("#inst_img_1").animate({ transform: 't0,0', opacity: 1 }, 1000, mina.bounce);
                    s.selectAll("#inst_img_1 image , #inst_img_1 path").animate({ opacity: 1 }, 1000, mina.bounce);

                }, 0);

                setTimeout(function() {
                    s.selectAll("#inst_texto_2").animate({ opacity: 1 }, 1000, mina.bounce);
                    s.selectAll("#inst_sombra").animate({ opacity: 1 }, 1000, mina.bounce);

                }, 1000);


                setTimeout(function() {
                    s.selectAll("#inst_circ_1 , #inst_circ_1 image").animate({ opacity: 1 }, 1000, mina.bounce);
                    s.selectAll("#inst_circ_1 ").animate({ transform: 't0,0', opacity: 1 }, 1000, mina.bounce);
                }, 2000);

                setTimeout(function() {
                    s.selectAll("#inst_circ_2 , #inst_circ_2 image").animate({ opacity: 1 }, 1000, mina.bounce);
                    s.selectAll("#inst_circ_2 ").animate({ transform: 't0,0', opacity: 1 }, 1000, mina.bounce);
                }, 2500);


                setTimeout(function() {
                    s.selectAll("#inst_circ_3 , #inst_circ_3 image").animate({ opacity: 1 }, 1000, mina.bounce);
                    s.selectAll("#inst_circ_3 ").animate({ transform: 't0,0', opacity: 1 }, 1000, mina.bounce);
                }, 3000);


                setTimeout(function() {
                    s.selectAll("#inst_circ_4 , #inst_circ_4 image").animate({ opacity: 1 }, 1000, mina.bounce);
                    s.selectAll("#inst_circ_4 ").animate({ transform: 't0,0', opacity: 1 }, 1000, mina.bounce);
                }, 3500);

            }, 1000);
        });
    }

    function f_4com_clean() {

        var s = Snap("#film_5");
        all = s.selectAll("#cc_1 ,#cc_2 ,#cc_3 ,#cc_4 ,#tt_1,#tt_2 ,#tt_3,#tt_4");
        all.attr({ opacity: 0 });

        all.attr({ opacity: 1, transform: 't-65,80,r0,0,0,s1' });
    }

    function f_com_clean() {

        var s = Snap("#film_4");
        all = s.selectAll("#c_1 ,#c_2 ,#c_3 ,#t_1,#t_2 ,#t_3");
        all.attr({ opacity: 0 });
        all.attr({ opacity: 1, transform: 't-65,80,r0,0,0,s1' });
    }

    function f_com() {

        $(".wufoo-ad-text").show();

        var sec = Snap("#film_4");
        all = sec.selectAll("#c_1 ,#c_2 ,#c_3 ,#t_1,#t_2 ,#t_3");
        all.attr({ opacity: 0 });

        setTimeout(function() {

            var step_config = config[step - 1];
            var sec = Snap("#film_4");
            //dinamicamente mostrar by id_
            var cual = '#' + step_config.cual;
            var t_c = '#' + step_config.t_c;

            var cy = step_config.cy;
            var ty = step_config.ty;

            all = sec.selectAll("#c_1 ,#c_2 ,#c_3 ,#t_1,#t_2 ,#t_3");
            all.attr({ opacity: 0 });
            c1 = sec.selectAll(cual); //cualidad
            c1.attr({ transform: 't65,' + cy + ',r0,0,0,s2' });
            c1.animate({ opacity: 1 }, 500, mina.ease);
            t1 = sec.selectAll(t_c); //texto_cualidad
            t1.attr({ transform: 't-215,' + ty + ',r0,0,0,s2' });
            t1.animate({ opacity: 1 }, 500, mina.ease);

            //cy -= 120;
            //ty -= 120;
        }, 1000);
    }

    function f_4com() {

        var sec = Snap("#film_5");
        all = sec.selectAll("#cc_1 ,#cc_2 ,#cc_3,#cc_4 ,#tt_1,#tt_2 ,#tt_3,#tt_4");
        all.attr({ opacity: 0 });

        setTimeout(function() {
            var step_config = config[step - 1];
            var sec = Snap("#film_5");
            var cual = '#' + step_config.cual;
            var t_c = '#' + step_config.t_c;

            var cy = step_config.cy;
            var ty = step_config.ty;

            all = sec.selectAll("#cc_1 ,#cc_2 ,#cc_3,#cc_4 ,#tt_1,#tt_2 ,#tt_3,#tt_4");
            all.attr({ opacity: 0 });
            c1 = sec.selectAll(cual); //cualidad
            c1.attr({ transform: 't65,' + cy + ',r0,0,0,s2' });
            c1.animate({ opacity: 1 }, 500, mina.ease);
            t1 = sec.selectAll(t_c); //texto_cualidad
            t1.attr({ transform: 't-215,' + ty + ',r0,0,0,s2' });
            t1.animate({ opacity: 1 }, 500, mina.ease);
            //cy -= 100;
            //ty -= 100;


        }, 1000);
    }

    function hideForm() {
        //removeTooltip();
        var step_config = config[step - 1];
        var $elem = $('#' + step_config.name);
        if (autoplay) {
            showtime = setTimeout(nextStep, step_config.time);
        }
        $elem.hide();
        //var properties = {};
        //$tooltip.css(properties).show();
    }

    function fadeAnimation() {

        var step_config = config[step - 1];
        var s = Snap("#svg");
        var form = s.select("#" + step_config.name);

        if (form) {
            form.attr({ transform: 'r0,250,250', opacity: 1 });
            form.animate({ transform: 'r360,250,250', opacity: 1 }, 1000, mina.bounce);
        }

        setTimeout(function() {
            //mySvg.attr({viewBox:'0 0 502.5 541.8'});
            $(".wufoo-ad").css("width", "50%");
            $(".wufoo-ad-2").css("width", "100%");
            $(".wufoo-ad-2").css("height", "100%");
            $(".wufoo-ad-text").css("width", "50%");

        }, 1000);
    }

    function OutAnimation() {


        var step_config = config[step - 1];
        var s = Snap("#svg");
        var form = s.select("#" + step_config.name);
        var form_clone = s.select("#form_clone_" + step_config.name);
        form_clone.animate({ opacity: 0 }, 2000, mina.bounce);
        form.attr({ opacity: 1 });
        form.animate({ transform: 't0,-0r0r0,0,0,s1' }, 2000, mina.bounce);

        setTimeout(function() {
            //mySvg.attr({viewBox:'0 0 502.5 541.8'});
            $(".wufoo-ad").css("width", "50%");
            $(".wufoo-ad-2").css("width", "100%");
            $(".wufoo-ad-2").css("height", "100%");
            $(".wufoo-ad-text").css("width", "50%");

        }, 1000);

    }

    /*************************************SVG*************************************/
    function uno() {

        $("#svg_cocina").show();
        $("#svg").hide();
        $("#svg_cocina_dos").hide();
        $("#svg_cocina_tres , #body_tres ").hide();
        $(".wufoo-ad-text ").hide();
        $("#svg_cocina_cinco").hide();
        $("#svg_cocina_seis").hide();
        $("#svg_cocina_siete , #body_siete ").hide();

        var s = Snap("#svg_cocina");
        var svg = new Walkway({
            selector: '#svg_cocina',
            duration: '6000',
            easeInOutQuart: function(t) {
                return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
            },
        });

        svg.draw();
        s.selectAll('image').attr({ opacity: 0 });
        s.selectAll('#logo').attr({ opacity: 0 });

        setTimeout(function() {
            var s = Snap("image");
            s.animate({ opacity: 1 }, 5000, mina.backin);

            var lineas = s.selectAll("*");
            lineas.attr({
                stroke: "#FFF",
                fill: "red",
                strokeWidth: 2
            });
        }, 0);

        setTimeout(function() {
            Snap.load("svg/logo-color-glow.svg", function(f) {

                test = f.select("svg").attr({ viewBox: '0 0 100 100' });


                g = f.selectAll("#logo");
                s.append(g);
                g.attr({ transform: 't400,400' });

                g.attr({ transform: 't200,0,r0,50,50,s1' });


                g.attr({ opacity: 0 });
                g.animate({ opacity: 1 }, 2000, mina.backin);

                //  g.animate({ transform: 't100,100,r0,50,50,s1.5' }, 500, mina.easeout);

            });
            $("body").css("background", "#716d6e");

        }, 3000);
    } //fin uno()

    function dos() {

        $("body").css("background", "#242c37");



        $("#svg_cocina").hide();
        $("#svg").hide();
        $("#svg_cocina_dos").show();
        $("#svg_cocina_tres , #body_tres ").hide();
        $(".wufoo-ad-text ").hide();
        $("#svg_cocina_cinco").hide();
        $("#svg_cocina_seis").hide();
        $("#svg_cocina_siete , #body_siete ").hide();



        $("#svg_cocina_dos").html("");

        var s = Snap("#svg_cocina_dos");
        Snap.load("svg/empresa5-1.svg", function(f) {
            g = f.selectAll("#empresa");
            s.append(g);

            s.selectAll("#empresa").attr({ opacity: 0 });


            s.selectAll("#g14").attr({ transform: "t-1400 ,0 ", opacity: 1 });
            s.selectAll("#texto").attr({ opacity: 0 });
            s.selectAll("#cinta").attr({ opacity: 0 });
            s.selectAll("#manos").attr({ opacity: 0 });
            s.selectAll("#engranes").attr({ opacity: 0 });
            s.selectAll("#circl").attr({ opacity: 0 });
            s.selectAll("#circ_1").attr({ opacity: 0 });
            s.selectAll("#circ_3").attr({ opacity: 0 });
            s.selectAll("#circ_4").attr({ opacity: 0 });

            s.selectAll("#circ_5").attr({ opacity: 0 });
            s.selectAll("#circ_6").attr({ opacity: 0 });
        });


        setTimeout(function() {

            var s = Snap("#svg_cocina_dos");
            //s.selectAll("*").attr({opacity:0});



        }, 5);
        setTimeout(function() {
            s.selectAll("#empresa ").attr({ opacity: 1 });
            s.selectAll("#g14 ").animate({ transform: "t0 ,0 " }, 1000, mina.easeout);
        }, 500);
        setTimeout(function() {
            s.selectAll("#texto ").animate({ opacity: 1 }, 1500, mina.ease);

        }, 1500);

        setTimeout(function() {
            s.selectAll("#circl ").animate({ opacity: 1 }, 1000, mina.ease);

        }, 2500);

        setTimeout(function() {
            s.selectAll("#circ_1 ").animate({ opacity: 1 }, 1000, mina.ease);
        }, 2750);

        setTimeout(function() {
            s.selectAll("#circ_3 ").animate({ opacity: 1 }, 1000, mina.ease);
        }, 3000);

        setTimeout(function() {
            s.selectAll("#circ_4 ").animate({ opacity: 1 }, 1000, mina.ease);
        }, 3250);


        setTimeout(function() {
            s.selectAll("#manos").animate({ opacity: 1 }, 1000, mina.ease);
        }, 3500);

        setTimeout(function() {
            s.selectAll("#cinta").animate({ opacity: 1 }, 1000, mina.ease);
        }, 3750);

        setTimeout(function() {
            s.selectAll("#circ_5 ").animate({ opacity: 1 }, 1000, mina.ease);
        }, 4000);

        setTimeout(function() {
            s.selectAll("#circ_6 ").animate({ opacity: 1 }, 1000, mina.ease);
        }, 4250);

        setTimeout(function() {
            s.selectAll("#engranes ").animate({
                opacity: 1
            }, 1000, mina.ease);
        }, 4500);
    } //fin dos()

    function tres() {
        $("#svg_cocina").hide();
        $("#svg").hide();
        $("#svg_cocina_dos").hide();
        $("#svg_cocina_tres , #body_tres ").show();

        $("body").css("background", "#fff");

        $('.intro').addClass('go');

        $('.reload').click(function() {
            $('.intro').removeClass('go').delay(50).queue(function(next) {
                $('.intro').addClass('go');
                next();
            });

        });
    } //fin dos()

    function cuatro() {

        $("#svg_cocina").hide();
        $("#svg").show();
        $("#svg_cocina_dos").hide();
        $("#svg_cocina_tres , #body_tres ").hide();
        $(".wufoo-ad-text ").hide();
        $("#svg_cocina_cinco").hide();
        $("#svg_cocina_seis").hide();
        $("#svg_cocina_siete , #body_siete ").hide();


        var s = Snap("#svg");
        var formas = s.selectAll("* path ");
        formas.attr({
            fill: "#e6e7e8"
        });

        var letras = s.selectAll("* g g path ");
        letras.attr({
            fill: "#fff"
        });

        g = s.selectAll("#f_2 ,#f_3 ,#f_4 ,#f_7 , #f_8 , #f_5 , #f_6");
        g.attr({ opacity: 0 });

        /* * mini-centro **/
        var form = s.select("#f_6");
        form_clone_f_6 = form.clone();
        form_clone_f_6.attr({ id: 'form_clone_f_6' });
        form.animate({ transform: 't-95,100r0r00,000,000,s.3' }, 0, mina.bounce);

        var form = s.select("#f_8");
        form_clone_f_8 = form.clone();
        form_clone_f_8.attr({ id: 'form_clone_f_8' });
        form.animate({ transform: 't95,-100r0r00,000,000,s.3' }, 0, mina.bounce);

        var form = s.select("#f_5");
        form_clone_f_85 = form.clone();
        form_clone_f_85.attr({ id: 'form_clone_f_5' });
        form.animate({ transform: 't95,100r0r00,000,000,s.3' }, 0, mina.bounce);

        var form = s.select("#f_7");
        form_clone_f_7 = form.clone();
        form_clone_f_7.attr({ id: 'form_clone_f_7' });
        form.animate({ transform: 't-100,-100r0r00,000,000,s.3' }, 0, mina.bounce);
        /**    **/



        var form = s.selectAll("#f_1 * ");
        form.animate({ transform: 't-600,0' }, 0, mina.ease);

        setTimeout(function() {
            show_normal();
            var form = s.selectAll("#f_1 * ");
            form.animate({ transform: 't0,0' }, 1000, mina.ease);




        }, 1000);




        $("#film_4").html("");
        var sec = Snap("#film_4");
        Snap.load("svg/3cualidades.svg", function(f) {
            //test = f.select("svg").attr({ viewBox: '0 0 100 100' });
            g = f.selectAll("g");
            sec.append(g);

            g.attr({ transform: 't-65,80,r0,0,0,s1' });
            g.attr({ viewBox: '100 100 1538 5141.8' });

            g.attr({ opacity: 0 });
            g.animate({ opacity: 1 }, 2000, mina.backin);

        });


        $("#film_5").html("");
        var secc = Snap("#film_5");

        Snap.load("svg/4cualidades.svg", function(f) {
            //test = f.select("svg").attr({ viewBox: '0 0 100 100' });
            g = f.selectAll("g");
            secc.append(g);

            g.attr({ transform: 't-65,80,r0,0,0,s1' });
            g.attr({ viewBox: '100 100 1538 5141.8' });

            g.attr({ opacity: 1 });
            g.animate({ opacity: 1 }, 2000, mina.backin);

        });

        $("#film_5").hide();
        $("#film_4").show();
        $(".wufoo-ad-text").hide();
        // $("#film_4").hide();

        cy = 100;
        ty = 250;
    } //fin dos()

    function cinco() {


        $("#svg_cocina").hide();
        $("#svg").hide();
        $("#svg_cocina_dos").hide();
        $("#svg_cocina_tres , #body_tres ").hide();
        $(".wufoo-ad-text ").hide();
        $("#svg_cocina_cinco").show();
        $("#svg_cocina_seis").hide();
        $("#svg_cocina_siete , #body_siete ").hide();


        $("#svg_cocina_cinco").html("");
        var s = Snap("#svg_cocina_cinco");
        Snap.load("svg/tecnologia.svg", function(f) {
            g = f.selectAll("#tecnologia");
            s.append(g);
        });

        setTimeout(function() {
            var s = Snap("#svg_cocina_cinco");
            s.selectAll("#tecnologia").attr({ opacity: 1 });
            s.selectAll("#texto_1").attr({ transform: 't-600,0' });
            s.selectAll("#texto_1 ").animate({ transform: 't0,0', opacity: 1 }, 1000, mina.bounce);
            s.selectAll("#img_1").attr({ transform: 't-675,-300,s.35' });
            s.selectAll("#img_1").animate({ transform: 't-75,-300,s.35', opacity: 1 }, 1000, mina.bounce);

        }, 10);

        setTimeout(function() {
            s.selectAll("#texto_2").animate({ opacity: 1 }, 1000, mina.bounce);
        }, 1000);

        setTimeout(function() {
            s.selectAll("#img_2").attr({ transform: 't485,260,s.53' });
            s.selectAll("#img_2").animate({ transform: 't-285,260,s.53', opacity: 1 }, 1000, mina.bounce);
        }, 2000);
    } // fin cinco()

    function seis() {


        $("#svg_cocina").hide();
        $("#svg").hide();
        $("#svg_cocina_dos").hide();
        $("#svg_cocina_tres , #body_tres ").hide();
        $(".wufoo-ad-text ").hide();
        $("#svg_cocina_cinco").hide();
        $("#svg_cocina_seis").show();
        $("#svg_cocina_siete , #body_siete ").hide();




        $("#svg_cocina_seis").html("");
        var s = Snap("#svg_cocina_seis");
        Snap.load("svg/proyecto.svg", function(f) {
            g = f.selectAll("#proyecto");
            s.append(g);
        });


        setTimeout(function() {

            var s = Snap("#svg_cocina_seis");
            s.selectAll("*").attr({ opacity: 0 });
            s.selectAll("#border").attr({ stroke: 'none' });
            s.selectAll(".lineas").animate({ opacity: 1 }, 0, mina.easein);
            s.selectAll(".plano").animate({ transform: 't-400 ,0' }, 0, mina.bounce);
        }, 10);



        setTimeout(function() {
            s.selectAll("#proyecto").attr({ opacity: 1 });

            s.selectAll(".plano ").animate({ transform: 't0,0 ', opacity: 1 }, 1000, mina.bounce);
            s.selectAll(".plano image").animate({ opacity: 1 }, 1000, mina.bounce);
        }, 1000);

        setTimeout(function() {
            s.selectAll(".circle_1 ,.circle_1 image , .circle_1_shadow ").animate({ opacity: 1 }, 1000, mina.easein);
            s.selectAll(".circle_1_shadow image ").animate({ opacity: .4 }, 1000, mina.easein);
        }, 2000);

        setTimeout(function() {
            s.selectAll(".circle_2 ,.circle_2 image , .circle_2_shadow ").animate({ opacity: 1 }, 1000, mina.easein);
            s.selectAll(".circle_2_shadow image ").animate({ opacity: .4 }, 1000, mina.easein);
        }, 2500);

        setTimeout(function() {
            s.selectAll(".texto , .texto path ").animate({ opacity: 1 }, 0, mina.bounce);
            s.selectAll(".texto , .texto path ").animate({ transform: 't-400 ,0' }, 0, mina.bounce);
        }, 1000);

        setTimeout(function() {
            s.selectAll(".texto , .texto path ").animate({ transform: 't0 ,0' }, 1000, mina.bounce);
        }, 3500);
    } //fin seis)()

    function siete() {
        $("#svg_cocina").hide();
        $("#svg").hide();
        $("#svg_cocina_dos").hide();
        $("#svg_cocina_tres , #body_tres ").hide();
        $(".wufoo-ad-text ").hide();
        $("#svg_cocina_cinco").hide();
        $("#svg_cocina_seis").hide();
        $("#svg_cocina_siete , #body_siete ").show();


        $('.intro').addClass('go');

        $('.reload').click(function() {
            $('.intro').removeClass('go').delay(50).queue(function(next) {
                $('.intro').addClass('go');
                next();
            });

        });
    } //fin siete()

    function porta() {


        $("#svg_cocina").hide();
        $("#svg").hide();
        $("#svg_cocina_dos").hide();
        $("#svg_cocina_tres , #body_tres ").hide();
        $(".wufoo-ad-text ").hide();
        $("#svg_cocina_cinco").hide();
        $("#svg_cocina_seis").hide();
        $("#svg_cocina_siete , #body_siete ").hide();

        $('#svg_cocina_porta').html("");

        $("#svg_cocina_porta").show();



        var s = Snap("#svg_cocina_porta");
        var step_config = config[step - 1];

        var name = step_config.name;
        var alias = '#' + step_config.cual;

        // var name = "portafolio01";
        //var alias = '#porta_1';

        Snap.load('svg/' + name + '.svg', function(f) {

            g = f.selectAll(alias);
            s.append(g);

            var select = Snap(alias);
            select.selectAll("*").attr({ opacity: 0 });
            select.selectAll("#fondo").animate({ opacity: 1 }, 2000, mina.easein);

            setTimeout(function() { select.selectAll("#logo").animate({ opacity: 1 }, 1000, mina.bounce); }, 1000);
            setTimeout(function() { select.selectAll("g#img_1 , g#img_1 *").animate({ opacity: 1 }, 1200, mina.easeout); }, 1500); //700
            setTimeout(function() { select.selectAll("g#img_2 , g#img_2 *").animate({ opacity: 1 }, 1200, mina.easeout); }, 2100);
            setTimeout(function() { select.selectAll("g#img_3 , g#img_3 *").animate({ opacity: 1 }, 1200, mina.easeout); }, 2800);
            setTimeout(function() { select.selectAll("g#img_4 , g#img_4 *").animate({ opacity: 1 }, 1200, mina.easeout); }, 3500);
            setTimeout(function() { select.selectAll("#fecha , #fecha *").animate({ opacity: 1 }, 1000, mina.bounce); }, 4100);
        });
    } //fin porta()

    /****************************** CONTROL EVENTS *******************************/

    $(document).on('keydown', function(event) {
        /****   NextStep   ****/
        if (event.which == 38 || event.keyCode == 38 || event.which == 39 || event.keyCode == 39 || event.which == 13 || event.keyCode == 13) {
            nextStep();
        }


        /****   PrevStep   ****/
        if (event.which == 40 || event.keyCode == 40 || event.which == 37 || event.keyCode == 37 || event.which == 8 || event.keyCode == 8) {
            prevStep();

        }
        /**
        up      => 38       nextStep();
        down    => 40       prevStep();
        right   => 39       nextStep();
        left    => 37       prevStep();

        enter   => 13      nextStep();
        back    => 8        prevStep();
        **/
    });

});
