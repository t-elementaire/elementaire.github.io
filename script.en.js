//Définition des fonctions pour les boutons afficher-masquer
let b1 = document.getElementById("masquer1");
let b2 = document.getElementById("masquer2");
let b3 = document.getElementById("afficher1");
let b4 = document.getElementById("afficher2");

let bs = document.getElementById("bs");
let bp = document.getElementById("bp");
let bd = document.getElementById("bd");
let bf = document.getElementById("bf");
let bm = document.getElementById("bm");
let bnm = document.getElementById("bnm");
let bmt = document.getElementById("bmt");
let bm1 = document.getElementById("bm1");
let btr = document.getElementById("btr");
let brad = document.getElementById("brad");

let b5 = document.getElementById("bcancel");

let tabcap = document.getElementById("tabcap");

b1.addEventListener("click", () => {
    var sub = document.getElementsByTagName("sub");
    var i;
    for (i = 0; i < sub.length; i++) {
        if (getComputedStyle(sub[i]).visibility != "hidden"){
            sub[i].style.visibility = "hidden";
        } else {
            sub[i].style.visibility = "visible";
        }
        
    }
})

b2.addEventListener("click", () => {
    var sup = document.getElementsByClassName("disap");
    var j;
    for (j = 0; j < sup.length; j++) {
        if (getComputedStyle(sup[j]).visibility != "hidden"){
            sup[j].style.visibility = "hidden";
        } else {
            sup[j].style.visibility = "visible";
        }
    }
})

bs.addEventListener("click", () => {
    var s = document.getElementsByClassName("s");
    var td = document.getElementsByTagName("td");
    var vide = document.getElementsByClassName("vide");
    var number = document.getElementsByClassName("number");
    var infotr = document.getElementsByClassName("infotr");
    var e;
    var ee;
    var eee;
    var eeee;
    for (e = 0; e < td.length; e++) {
        td[e].style.visibility = "hidden";
    }
    for (ee = 0; ee < s.length; ee++) {
        s[ee].style.visibility = "visible";
    }
    for (eee = 0; eee < vide.length; eee++) {
        vide[eee].style.visibility = "visible";
    }
    for (eeee = 0; eeee < number.length; eeee++) {
        number[eeee].style.visibility = "visible";
    }
    for (u = 0; u < infotr.length; u++) {
        infotr[u].style.visibility = "visible";
    }
    tabcap.innerText = "Élémentaire - s-bock";
})

bp.addEventListener("click", () => {
    var p = document.getElementsByClassName("p");
    var td = document.getElementsByTagName("td");
    var vide = document.getElementsByClassName("vide");
    var number = document.getElementsByClassName("number");
    var infotr = document.getElementsByClassName("infotr");
    var e;
    var ee;
    var eee;
    var eeee;
    for (e = 0; e < td.length; e++) {
        td[e].style.visibility = "hidden";
    }
    for (ee = 0; ee < p.length; ee++) {
        p[ee].style.visibility = "visible";
    }
    for (eee = 0; eee < vide.length; eee++) {
        vide[eee].style.visibility = "visible";
    }
    for (eeee = 0; eeee < number.length; eeee++) {
        number[eeee].style.visibility = "visible";
    }
    for (u = 0; u < infotr.length; u++) {
        infotr[u].style.visibility = "visible";
    }
    tabcap.innerText = "Élémentaire - p-block";
})

bd.addEventListener("click", () => {
    var d = document.getElementsByClassName("d");
    var td = document.getElementsByTagName("td");
    var vide = document.getElementsByClassName("vide");
    var number = document.getElementsByClassName("number");
    var infotr = document.getElementsByClassName("infotr");
    var e;
    var ee;
    var eee;
    var eeee;
    for (e = 0; e < td.length; e++) {
        td[e].style.visibility = "hidden";
    }
    for (ee = 0; ee < d.length; ee++) {
        d[ee].style.visibility = "visible";
    }
    for (eee = 0; eee < vide.length; eee++) {
        vide[eee].style.visibility = "visible";
    }
    for (eeee = 0; eeee < number.length; eeee++) {
        number[eeee].style.visibility = "visible";
    }
    for (u = 0; u < infotr.length; u++) {
        infotr[u].style.visibility = "visible";
    }
    tabcap.innerText = "Élémentaire - d-block";
})

bf.addEventListener("click", () => {
    var f = document.getElementsByClassName("f");
    var td = document.getElementsByTagName("td");
    var vide = document.getElementsByClassName("vide");
    var number = document.getElementsByClassName("number");
    var laac = document.getElementsByClassName("laac");
    var infotr = document.getElementsByClassName("infotr");
    var e;
    var ee;
    var eee;
    var eeee;
    var eeeee;
    var u;
    for (e = 0; e < td.length; e++) {
        td[e].style.visibility = "hidden";
    }
    for (ee = 0; ee < f.length; ee++) {
        f[ee].style.visibility = "visible";
    }
    for (eee = 0; eee < vide.length; eee++) {
        vide[eee].style.visibility = "visible";
    }
    for (eeee = 0; eeee < number.length; eeee++) {
        number[eeee].style.visibility = "visible";
    }
    for (u = 0; u < infotr.length; u++) {
        infotr[u].style.visibility = "visible";
    }
    for (eeeee = 0; eeeee < laac.length; eeeee++) {
        laac[eeeee].style.visibility = "visible";
    }
    tabcap.innerText = "Élémentaire - f-block";
})

bm.addEventListener("click", () => {
    var m = document.getElementsByClassName("m");
    var td = document.getElementsByTagName("td");
    var vide = document.getElementsByClassName("vide");
    var number = document.getElementsByClassName("number");
    var infotr = document.getElementsByClassName("infotr");
    var mt = document.getElementsByClassName("mt");
    var laac = document.getElementsByClassName("laac");
    var e;
    var ee;
    var eee;
    var eeee;
    var e2;
    var ee2;
    for (e = 0; e < td.length; e++) {
        td[e].style.visibility = "hidden";
    }
    for (ee = 0; ee < m.length; ee++) {
        m[ee].style.visibility = "visible";
    }
    for (eee = 0; eee < vide.length; eee++) {
        vide[eee].style.visibility = "visible";
    }
    for (eeee = 0; eeee < number.length; eeee++) {
        number[eeee].style.visibility = "visible";
    }
    for (u = 0; u < infotr.length; u++) {
        infotr[u].style.visibility = "visible";
    }
    for (e2 = 0; e2 < mt.length; e2++) {
        mt[e2].style.visibility = "visible";
    }
    for (ee2 = 0; ee2 < laac.length; ee2++) {
        laac[ee2].style.visibility = "visible";
    }
    tabcap.innerText = "Élémentaire - Metals";
})

bnm.addEventListener("click", () => {
    var nm = document.getElementsByClassName("nm");
    var td = document.getElementsByTagName("td");
    var vide = document.getElementsByClassName("vide");
    var number = document.getElementsByClassName("number");
    var infotr = document.getElementsByClassName("infotr");
    var e;
    var ee;
    var eee;
    var eeee;
    for (e = 0; e < td.length; e++) {
        td[e].style.visibility = "hidden";
    }
    for (ee = 0; ee < nm.length; ee++) {
        nm[ee].style.visibility = "visible";
    }
    for (eee = 0; eee < vide.length; eee++) {
        vide[eee].style.visibility = "visible";
    }
    for (eeee = 0; eeee < number.length; eeee++) {
        number[eeee].style.visibility = "visible";
    }
    for (u = 0; u < infotr.length; u++) {
        infotr[u].style.visibility = "visible";
    }
    tabcap.innerText = "Élémentaire - Nonmetals";
})

bmt.addEventListener("click", () => {
    var mt = document.getElementsByClassName("mt");
    var td = document.getElementsByTagName("td");
    var vide = document.getElementsByClassName("vide");
    var number = document.getElementsByClassName("number");
    var infotr = document.getElementsByClassName("infotr");
    var laac = document.getElementsByClassName("laac");
    var e;
    var ee;
    var eee;
    var eeee;
    var eeeee;
    for (e = 0; e < td.length; e++) {
        td[e].style.visibility = "hidden";
    }
    for (ee = 0; ee < mt.length; ee++) {
        mt[ee].style.visibility = "visible";
    }
    for (eee = 0; eee < vide.length; eee++) {
        vide[eee].style.visibility = "visible";
    }
    for (eeee = 0; eeee < number.length; eeee++) {
        number[eeee].style.visibility = "visible";
    }
    for (u = 0; u < infotr.length; u++) {
        infotr[u].style.visibility = "visible";
    }
    for (eeeee = 0; eeeee < laac.length; eeeee++) {
        laac[eeeee].style.visibility = "visible";
    }
    tabcap.innerText = "Élémentaire - Transition Metals";
})

bm1.addEventListener("click", () => {
    var m1 = document.getElementsByClassName("m1");
    var td = document.getElementsByTagName("td");
    var vide = document.getElementsByClassName("vide");
    var number = document.getElementsByClassName("number");
    var infotr = document.getElementsByClassName("infotr");
    var e;
    var ee;
    var eee;
    var eeee;
    for (e = 0; e < td.length; e++) {
        td[e].style.visibility = "hidden";
    }
    for (ee = 0; ee < m1.length; ee++) {
        m1[ee].style.visibility = "visible";
    }
    for (eee = 0; eee < vide.length; eee++) {
        vide[eee].style.visibility = "visible";
    }
    for (eeee = 0; eeee < number.length; eeee++) {
        number[eeee].style.visibility = "visible";
    }
    for (u = 0; u < infotr.length; u++) {
        infotr[u].style.visibility = "visible";
    }
    tabcap.innerText = "Élémentaire - Main Metalloids";
})

btr.addEventListener("click", () => {
    var tr = document.getElementsByClassName("tr");
    var td = document.getElementsByTagName("td");
    var vide = document.getElementsByClassName("vide");
    var number = document.getElementsByClassName("number");
    var infotr = document.getElementsByClassName("infotr");
    var lanthanides = document.getElementById("lanthanides");
    var lanthanides2 = document.getElementById("lanthanides2");
    var e;
    var ee;
    var eee;
    var eeee;
    for (e = 0; e < td.length; e++) {
        td[e].style.visibility = "hidden";
    }
    for (ee = 0; ee < tr.length; ee++) {
        tr[ee].style.visibility = "visible";
    }
    for (eee = 0; eee < vide.length; eee++) {
        vide[eee].style.visibility = "visible";
    }
    for (eeee = 0; eeee < number.length; eeee++) {
        number[eeee].style.visibility = "visible";
    }
    for (u = 0; u < infotr.length; u++) {
        infotr[u].style.visibility = "visible";
    }
    lanthanides.style.visibility = "visible";
    lanthanides2.style.visibility = "visible";
    tabcap.innerText = "Élémentaire - Rare Earth";
})

brad.addEventListener("click", () => {
    var lradid = document.getElementById("lradid");
    
    var rad1 = document.getElementsByClassName("rad1");
    var rad2 = document.getElementsByClassName("rad2");
    var rad3 = document.getElementsByClassName("rad3");
    var dma = document.getElementsByClassName("ma");
    var dmat = document.getElementsByClassName("mat");
    var dh = document.getElementsByClassName("h");
    var dgn = document.getElementsByClassName("gn");
    var dm1 = document.getElementsByClassName("m1");
    var d;
    var dd;
    var ddd;
    var dddd;
    var ddddd;
    var u;
    var uu;
    var uuu;
    for (d = 0; d < dma.length; d++) {
        dma[d].style.backgroundColor = "transparent";
    }
    for (dd = 0; dd < dmat.length; dd++) {
        dmat[dd].style.backgroundColor = "transparent";
    }
    for (ddd = 0; ddd < dh.length; ddd++) {
        dh[ddd].style.backgroundColor = "transparent";
    }
    for (dddd = 0; dddd < dgn.length; dddd++) {
        dgn[dddd].style.backgroundColor = "transparent";
    }
    for (ddddd = 0; ddddd < dm1.length; ddddd++) {
        dm1[ddddd].style.backgroundColor = "transparent";
    }
    for (u = 0; u < rad1.length; u++) {
        rad1[u].style.backgroundColor = "#FF8000";
    }
    for (uu = 0; uu < rad2.length; uu++) {
        rad2[uu].style.backgroundColor = "#FFFF00";
    }
    for (uuu = 0; uuu < rad3.length; uuu++) {
        rad3[uuu].style.backgroundColor = "#FF0000";
    }
    tabcap.innerText = "Élémentaire - Sorted according to the stability of nuclei";
    lradid.style.display = "inline-block"
})

b5.addEventListener("click", () => {
    var td = document.getElementsByTagName("td");
    var vide = document.getElementsByClassName("vide");
    var number = document.getElementsByClassName("number");
    var infotr = document.getElementsByClassName("infotr");
    var laac = document.getElementsByClassName("laac");
    var e;
    var eee;
    var eeee;
    var eeeee;
    for (e = 0; e < td.length; e++) {
        td[e].style.visibility = "visible";
    }
    for (eee = 0; eee < vide.length; eee++) {
        vide[eee].style.visibility = "visible";
    }
    for (eeee = 0; eeee < number.length; eeee++) {
        number[eeee].style.visibility = "visible";
    }
    for (u = 0; u < infotr.length; u++) {
        infotr[u].style.visibility = "visible";
    }
    for (eeeee = 0; eeeee < laac.length; eeeee++) {
        laac[eeeee].style.visibility = "visible";
    }
    var rad1 = document.getElementsByClassName("rad1");
    var rad2 = document.getElementsByClassName("rad2");
    var rad3 = document.getElementsByClassName("rad3");
    var u1;
    var uu;
    var uuu;
    for (u1 = 0; u1 < rad1.length; u1++) {
        rad1[u1].style.backgroundColor = "transparent";
    }
    for (uu = 0; uu < rad2.length; uu++) {
        rad2[uu].style.backgroundColor = "transparent";
    }
    for (uuu = 0; uuu < rad3.length; uuu++) {
        rad3[uuu].style.backgroundColor = "transparent";
    }
    
    var dma = document.getElementsByClassName("ma");
    var dmat = document.getElementsByClassName("mat");
    var dh = document.getElementsByClassName("h");
    var dgn = document.getElementsByClassName("gn");
    var dm1 = document.getElementsByClassName("m1");
    var d;
    var dd;
    var ddd;
    var dddd;
    var ddddd;
    for (d = 0; d < dma.length; d++) {
        dma[d].style.backgroundColor = "#729FCF";
    }
    for (dd = 0; dd < dmat.length; dd++) {
        dmat[dd].style.backgroundColor = "#FFBF00";
    }
    for (ddd = 0; ddd < dh.length; ddd++) {
        dh[ddd].style.backgroundColor = "#81D41A";
    }
    for (dddd = 0; dddd < dgn.length; dddd++) {
        dgn[dddd].style.backgroundColor = "#FFFF38";
    }
    for (ddddd = 0; ddddd < dm1.length; ddddd++) {
        dm1[ddddd].style.backgroundColor = "#999999";
    }
    tabcap.innerText = "Élémentaire - The interactive periodic table of elements";

    var lradid = document.getElementById("lradid");
    lradid.style.display = "none"
})





//Affichage des infos selon la cellule séléctionnée
//Définition des IDs des cellules du tableau
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let t4 = document.getElementById("t4");
let t5 = document.getElementById("t5");
let t6 = document.getElementById("t6");
let t7 = document.getElementById("t7");
let t8 = document.getElementById("t8");
let t9 = document.getElementById("t9");
let t10 = document.getElementById("t10");
let t11 = document.getElementById("t11");
let t12 = document.getElementById("t12");
let t13 = document.getElementById("t13");
let t14 = document.getElementById("t14");
let t15 = document.getElementById("t15");
let t16 = document.getElementById("t16");
let t17 = document.getElementById("t17");
let t18 = document.getElementById("t18");
let t19 = document.getElementById("t19");
let t20 = document.getElementById("t20");
let t21 = document.getElementById("t21");
let t22 = document.getElementById("t22");
let t23 = document.getElementById("t23");
let t24 = document.getElementById("t24");
let t25 = document.getElementById("t25");
let t26 = document.getElementById("t26");
let t27 = document.getElementById("t27");
let t28 = document.getElementById("t28");
let t29 = document.getElementById("t29");
let t30 = document.getElementById("t30");
let t31 = document.getElementById("t31");
let t32 = document.getElementById("t32");
let t33 = document.getElementById("t33");
let t34 = document.getElementById("t34");
let t35 = document.getElementById("t35");
let t36 = document.getElementById("t36");
let t37 = document.getElementById("t37");
let t38 = document.getElementById("t38");
let t39 = document.getElementById("t39");
let t40 = document.getElementById("t40");
let t41 = document.getElementById("t41");
let t42 = document.getElementById("t42");
let t43 = document.getElementById("t43");
let t44 = document.getElementById("t44");
let t45 = document.getElementById("t45");
let t46 = document.getElementById("t46");
let t47 = document.getElementById("t47");
let t48 = document.getElementById("t48");
let t49 = document.getElementById("t49");
let t50 = document.getElementById("t50");
let t51 = document.getElementById("t51");
let t52 = document.getElementById("t52");
let t53 = document.getElementById("t53");
let t54 = document.getElementById("t54");
let t55 = document.getElementById("t55");
let t56 = document.getElementById("t56");
let t57 = document.getElementById("t57");
let t58 = document.getElementById("t58");
let t59 = document.getElementById("t59");
let t60 = document.getElementById("t60");
let t61 = document.getElementById("t61");
let t62 = document.getElementById("t62");
let t63 = document.getElementById("t63");
let t64 = document.getElementById("t64");
let t65 = document.getElementById("t65");
let t66 = document.getElementById("t66");
let t67 = document.getElementById("t67");
let t68 = document.getElementById("t68");
let t69 = document.getElementById("t69");
let t70 = document.getElementById("t70");
let t71 = document.getElementById("t71");
let t72 = document.getElementById("t72");
let t73 = document.getElementById("t73");
let t74 = document.getElementById("t74");
let t75 = document.getElementById("t75");
let t76 = document.getElementById("t76");
let t77 = document.getElementById("t77");
let t78 = document.getElementById("t78");
let t79 = document.getElementById("t79");
let t80 = document.getElementById("t80");
let t81 = document.getElementById("t81");
let t82 = document.getElementById("t82");
let t83 = document.getElementById("t83");
let t84 = document.getElementById("t84");
let t85 = document.getElementById("t85");
let t86 = document.getElementById("t86");
let t87 = document.getElementById("t87");
let t88 = document.getElementById("t88");
let t89 = document.getElementById("t89");
let t90 = document.getElementById("t90");
let t91 = document.getElementById("t91");
let t92 = document.getElementById("t92");
let t93 = document.getElementById("t93");
let t94 = document.getElementById("t94");
let t95 = document.getElementById("t95");
let t96 = document.getElementById("t96");
let t97 = document.getElementById("t97");
let t98 = document.getElementById("t98");
let t99 = document.getElementById("t99");
let t100 = document.getElementById("t100");
let t101 = document.getElementById("t101");
let t102 = document.getElementById("t102");
let t103 = document.getElementById("t103");
let t104 = document.getElementById("t104");
let t105 = document.getElementById("t105");
let t106 = document.getElementById("t106");
let t107 = document.getElementById("t107");
let t108 = document.getElementById("t108");
let t109 = document.getElementById("t109");
let t110 = document.getElementById("t110");
let t111 = document.getElementById("t111");
let t112 = document.getElementById("t112");
let t113 = document.getElementById("t113");
let t114 = document.getElementById("t114");
let t115 = document.getElementById("t115");
let t116 = document.getElementById("t116");
let t117 = document.getElementById("t117");
let t118 = document.getElementById("t118");

//Définition des IDs des divs infos
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let result4 = document.getElementById("result4");
let result5 = document.getElementById("result5");
let result6 = document.getElementById("result6");
let result7 = document.getElementById("result7");
let result8 = document.getElementById("result8");
let result9 = document.getElementById("result9");
let result10 = document.getElementById("result10");
let result11 = document.getElementById("result11");
let result12 = document.getElementById("result12");
let result13 = document.getElementById("result13");
let result14 = document.getElementById("result14");
let result15 = document.getElementById("result15");
let result16 = document.getElementById("result16");
let result17 = document.getElementById("result17");
let result18 = document.getElementById("result18");
let result19 = document.getElementById("result19");
let result20 = document.getElementById("result20");
let result21 = document.getElementById("result21");
let result22 = document.getElementById("result22");
let result23 = document.getElementById("result23");
let result24 = document.getElementById("result24");
let result25 = document.getElementById("result25");
let result26 = document.getElementById("result26");
let result27 = document.getElementById("result27");
let result28 = document.getElementById("result28");
let result29 = document.getElementById("result29");
let result30 = document.getElementById("result30");
let result31 = document.getElementById("result31");
let result32 = document.getElementById("result32");
let result33 = document.getElementById("result33");
let result34 = document.getElementById("result34");
let result35 = document.getElementById("result35");
let result36 = document.getElementById("result36");
let result37 = document.getElementById("result37");
let result38 = document.getElementById("result38");
let result39 = document.getElementById("result39");
let result40 = document.getElementById("result40");
let result41 = document.getElementById("result41");
let result42 = document.getElementById("result42");
let result43 = document.getElementById("result43");
let result44 = document.getElementById("result44");
let result45 = document.getElementById("result45");
let result46 = document.getElementById("result46");
let result47 = document.getElementById("result47");
let result48 = document.getElementById("result48");
let result49 = document.getElementById("result49");
let result50 = document.getElementById("result50");
let result51 = document.getElementById("result51");
let result52 = document.getElementById("result52");
let result53 = document.getElementById("result53");
let result54 = document.getElementById("result54");
let result55 = document.getElementById("result55");
let result56 = document.getElementById("result56");
let result57 = document.getElementById("result57");
let result58 = document.getElementById("result58");
let result59 = document.getElementById("result59");
let result60 = document.getElementById("result60");
let result61 = document.getElementById("result61");
let result62 = document.getElementById("result62");
let result63 = document.getElementById("result63");
let result64 = document.getElementById("result64");
let result65 = document.getElementById("result65");
let result66 = document.getElementById("result66");
let result67 = document.getElementById("result67");
let result68 = document.getElementById("result68");
let result69 = document.getElementById("result69");
let result70 = document.getElementById("result70");
let result71 = document.getElementById("result71");
let result72 = document.getElementById("result72");
let result73 = document.getElementById("result73");
let result74 = document.getElementById("result74");
let result75 = document.getElementById("result75");
let result76 = document.getElementById("result76");
let result77 = document.getElementById("result77");
let result78 = document.getElementById("result78");
let result79 = document.getElementById("result79");
let result80 = document.getElementById("result80");
let result81 = document.getElementById("result81");
let result82 = document.getElementById("result82");
let result83 = document.getElementById("result83");
let result84 = document.getElementById("result84");
let result85 = document.getElementById("result85");
let result86 = document.getElementById("result86");
let result87 = document.getElementById("result87");
let result88 = document.getElementById("result88");
let result89 = document.getElementById("result89");
let result90 = document.getElementById("result90");
let result91 = document.getElementById("result91");
let result92 = document.getElementById("result92");
let result93 = document.getElementById("result93");
let result94 = document.getElementById("result94");
let result95 = document.getElementById("result95");
let result96 = document.getElementById("result96");
let result97 = document.getElementById("result97");
let result98 = document.getElementById("result98");
let result99 = document.getElementById("result99");
let result100 = document.getElementById("result100");
let result101 = document.getElementById("result101");
let result102 = document.getElementById("result102");
let result103 = document.getElementById("result103");
let result104 = document.getElementById("result104");
let result105 = document.getElementById("result105");
let result106 = document.getElementById("result106");
let result107 = document.getElementById("result107");
let result108 = document.getElementById("result108");
let result109 = document.getElementById("result109");
let result110 = document.getElementById("result110");
let result111 = document.getElementById("result111");
let result112 = document.getElementById("result112");
let result113 = document.getElementById("result113");
let result114 = document.getElementById("result114");
let result115 = document.getElementById("result115");
let result116 = document.getElementById("result116");
let result117 = document.getElementById("result117");
let result118 = document.getElementById("result118");

let divinfo = document.getElementsByClassName("divinfo");

//Écoute des clicks sur cellules -> supprime l’affichage des autres éléments divinfo et affiche celle selectionnée
t1.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result1.style.display = "block";
})
t2.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result2.style.display = "block";
})
t3.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result3.style.display = "block";
})
t4.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result4.style.display = "block";
})
t5.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result5.style.display = "block";
})
t6.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result6.style.display = "block";
})
t7.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result7.style.display = "block";
})
t8.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result8.style.display = "block";
})
t9.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result9.style.display = "block";
})
t10.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result10.style.display = "block";
})
t11.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result11.style.display = "block";
})
t12.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result12.style.display = "block";
})
t13.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result13.style.display = "block";
})
t14.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result14.style.display = "block";
})
t15.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result15.style.display = "block";
})
t16.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result16.style.display = "block";
})
t17.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result17.style.display = "block";
})
t18.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result18.style.display = "block";
})
t19.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result19.style.display = "block";
})
t20.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result20.style.display = "block";
})
t21.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result21.style.display = "block";
})
t22.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result22.style.display = "block";
})
t23.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result23.style.display = "block";
})
t24.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result24.style.display = "block";
})
t25.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result25.style.display = "block";
})
t26.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result26.style.display = "block";
})
t27.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result27.style.display = "block";
})
t28.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result28.style.display = "block";
})
t29.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result29.style.display = "block";
})
t30.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result30.style.display = "block";
})
t31.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result31.style.display = "block";
})
t32.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result32.style.display = "block";
})
t33.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result33.style.display = "block";
})
t34.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result34.style.display = "block";
})
t35.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result35.style.display = "block";
})
t36.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result36.style.display = "block";
})
t37.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result37.style.display = "block";
})
t38.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result38.style.display = "block";
})
t39.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result39.style.display = "block";
})
t40.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result40.style.display = "block";
})
t41.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result41.style.display = "block";
})
t42.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result42.style.display = "block";
})
t43.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result43.style.display = "block";
})
t44.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result44.style.display = "block";
})
t45.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result45.style.display = "block";
})
t46.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result46.style.display = "block";
})
t47.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result47.style.display = "block";
})
t48.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result48.style.display = "block";
})
t49.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result49.style.display = "block";
})
t50.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result50.style.display = "block";
})
t51.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result51.style.display = "block";
})
t52.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result52.style.display = "block";
})
t53.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result53.style.display = "block";
})
t54.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result54.style.display = "block";
})
t55.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result55.style.display = "block";
})
t56.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result56.style.display = "block";
})
t57.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result57.style.display = "block";
})
t58.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result58.style.display = "block";
})
t59.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result59.style.display = "block";
})
t60.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result60.style.display = "block";
})
t61.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result61.style.display = "block";
})
t62.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result62.style.display = "block";
})
t63.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result63.style.display = "block";
})
t64.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result64.style.display = "block";
})
t65.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result65.style.display = "block";
})
t66.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result66.style.display = "block";
})
t67.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result67.style.display = "block";
})
t68.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result68.style.display = "block";
})
t69.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result69.style.display = "block";
})
t70.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result70.style.display = "block";
})
t71.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result71.style.display = "block";
})
t72.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result72.style.display = "block";
})
t73.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result73.style.display = "block";
})
t74.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result74.style.display = "block";
})
t75.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result75.style.display = "block";
})
t76.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result76.style.display = "block";
})
t77.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result77.style.display = "block";
})
t78.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result78.style.display = "block";
})
t79.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result79.style.display = "block";
})
t80.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result80.style.display = "block";
})
t81.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result81.style.display = "block";
})
t82.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result82.style.display = "block";
})
t83.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result83.style.display = "block";
})
t84.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result84.style.display = "block";
})
t85.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result85.style.display = "block";
})
t86.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result86.style.display = "block";
})
t87.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result87.style.display = "block";
})
t88.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result88.style.display = "block";
})
t89.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result89.style.display = "block";
})
t90.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result90.style.display = "block";
})
t91.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result91.style.display = "block";
})
t92.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result92.style.display = "block";
})
t93.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result93.style.display = "block";
})
t94.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result94.style.display = "block";
})
t95.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result95.style.display = "block";
})
t96.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result96.style.display = "block";
})
t97.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result97.style.display = "block";
})
t98.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result98.style.display = "block";
})
t99.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result99.style.display = "block";
})
t100.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result100.style.display = "block";
})
t101.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result101.style.display = "block";
})
t102.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result102.style.display = "block";
})
t103.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result103.style.display = "block";
})
t104.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result104.style.display = "block";
})
t105.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result105.style.display = "block";
})
t106.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result106.style.display = "block";
})
t107.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result107.style.display = "block";
})
t108.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result108.style.display = "block";
})
t109.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result109.style.display = "block";
})
t110.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result110.style.display = "block";
})
t111.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result111.style.display = "block";
})
t112.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result112.style.display = "block";
})
t113.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result113.style.display = "block";
})
t114.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result114.style.display = "block";
})
t115.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result115.style.display = "block";
})
t116.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result116.style.display = "block";
})
t117.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result117.style.display = "block";
})
t118.addEventListener("click", () => {
    var k1;
    for (k1 = 0; k1 < divinfo.length; k1++) {
        divinfo[k1].style.display = "none";
    }
    result118.style.display = "block";
})

//Quand souris sur div comme électronégativité : afficher info-bulle
let elec = document.getElementsByClassName("elec");
let divelec = document.getElementById("divelec");
let tempfus = document.getElementsByClassName("tempfus");
let divtempfus = document.getElementById("divtempfus");
let tempvap = document.getElementsByClassName("tempvap");
let divtempvap = document.getElementById("divtempvap");
let rayon = document.getElementsByClassName("rayon");
let divrayon = document.getElementById("divrayon");
let energion = document.getElementsByClassName("energion");
let divenergion = document.getElementById("divenergion");
let affelec = document.getElementsByClassName("affelec");
let divaffelec = document.getElementById("divaffelec");
let db = document.getElementsByClassName("db");
let divdb = document.getElementById("divdb");

var ko;
for (ko = 0; ko < rayon.length; ko++) {
    rayon[ko].addEventListener("click", () => {
        divrayon.style.display = "block";
    })
}

var koo;
for (koo = 0; koo < elec.length; koo++) {
    elec[koo].addEventListener("click", () => {
        divelec.style.display = "block";
    })
}

var kooo;
for (kooo = 0; kooo < tempvap.length; kooo++) {
    tempvap[kooo].addEventListener("click", () => {
        divtempvap.style.display = "block";
    })
}

var koooo;
for (koooo = 0; koooo < tempfus.length; koooo++) {
    tempfus[koooo].addEventListener("click", () => {
        divtempfus.style.display = "block";
    })
}

var kkk;
for (kkk = 0; kkk < energion.length; kkk++) {
    energion[kkk].addEventListener("click", () => {
        divenergion.style.display = "block";
    })
}

var kik;
for (kik = 0; kik < affelec.length; kik++) {
    affelec[kik].addEventListener("click", () => {
        divaffelec.style.display = "block";
    })
}

var kuk;
for (kuk = 0; kuk < db.length; kuk++) {
    db[kuk].addEventListener("click", () => {
        divdb.style.display = "block";
    })
}