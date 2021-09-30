const IMAGES = [
  { id: 'CHN', image: 'images/chn.svg' },
  { id: 'IND', image: 'images/ind.svg' },
  { id: 'USA', image: 'images/usa.svg' },
  { id: 'IDN', image: 'images/idn.svg' },
  { id: 'PAK', image: 'images/pak.svg' },
  { id: 'BRA', image: 'images/bra.svg' },
  { id: 'NGA', image: 'images/nga.svg' },
  { id: 'BGD', image: 'images/bgd.svg' },
  { id: 'RUS', image: 'images/rus.svg' },
  { id: 'MEX', image: 'images/mex.svg' },
  { id: 'JPN', image: 'images/jpn.svg' },
  { id: 'ETH', image: 'images/eth.svg' },
  { id: 'PHL', image: 'images/phl.svg' },
  { id: 'EGY', image: 'images/egy.svg' },
  { id: 'VNM', image: 'images/vnm.svg' },
  { id: 'COD', image: 'images/cod.svg' },
  { id: 'TUR', image: 'images/tur.svg' },
  { id: 'IRN', image: 'images/irn.svg' },
  { id: 'DEU', image: 'images/deu.svg' },
  { id: 'THA', image: 'images/tha.svg' },
  { id: 'GBR', image: 'images/gbr.svg' },
  { id: 'FRA', image: 'images/fra.svg' },
  { id: 'ITA', image: 'images/ita.svg' },
  { id: 'TZA', image: 'images/tza.svg' },
  { id: 'ZAF', image: 'images/zaf.svg' },
  { id: 'MMR', image: 'images/mmr.svg' },
  { id: 'KEN', image: 'images/ken.svg' },
  { id: 'KOR', image: 'images/kor.svg' },
  { id: 'COL', image: 'images/col.svg' },
  { id: 'ESP', image: 'images/esp.svg' },
  { id: 'UGA', image: 'images/uga.svg' },
  { id: 'ARG', image: 'images/arg.svg' },
  { id: 'DZA', image: 'images/dza.svg' },
  { id: 'SDN', image: 'images/sdn.svg' },
  { id: 'UKR', image: 'images/ukr.svg' },
  { id: 'IRQ', image: 'images/irq.svg' },
  { id: 'AFG', image: 'images/afg.svg' },
  { id: 'POL', image: 'images/pol.svg' },
  { id: 'CAN', image: 'images/can.svg' },
  { id: 'MAR', image: 'images/mar.svg' },
  { id: 'SAU', image: 'images/sau.svg' },
  { id: 'UZB', image: 'images/uzb.svg' },
  { id: 'PER', image: 'images/per.svg' },
  { id: 'AGO', image: 'images/ago.svg' },
  { id: 'MYS', image: 'images/mys.svg' },
  { id: 'VEN', image: 'images/ven.svg' },
  { id: 'NPL', image: 'images/npl.svg' },
  { id: 'GHA', image: 'images/gha.svg' },
  { id: 'YEM', image: 'images/yem.svg' },
  { id: 'CMR', image: 'images/cmr.svg' },
  { id: 'MOZ', image: 'images/moz.svg' },
  { id: 'AUS', image: 'images/aus.svg' },
  { id: 'PRK', image: 'images/prk.svg' },
  { id: 'TWN', image: 'images/twn.svg' },
  { id: 'CIV', image: 'images/civ.svg' },
  { id: 'MDG', image: 'images/mdg.svg' },
  { id: 'LKA', image: 'images/lka.svg' },
  { id: 'BFA', image: 'images/bfa.svg' },
  { id: 'NER', image: 'images/ner.svg' },
  { id: 'ROU', image: 'images/rou.svg' },
  { id: 'SYR', image: 'images/syr.svg' },
  { id: 'CHL', image: 'images/chl.svg' },
  { id: 'MLI', image: 'images/mli.svg' },
  { id: 'KAZ', image: 'images/kaz.svg' },
  { id: 'NLD', image: 'images/nld.svg' },
  { id: 'MWI', image: 'images/mwi.svg' },
  { id: 'KHM', image: 'images/khm.svg' },
  { id: 'ECU', image: 'images/ecu.svg' },
  { id: 'TCD', image: 'images/tcd.svg' },
  { id: 'GTM', image: 'images/gtm.svg' },
  { id: 'ZMB', image: 'images/zmb.svg' },
  { id: 'SEN', image: 'images/sen.svg' },
  { id: 'ZWE', image: 'images/zwe.svg' },
  { id: 'GIN', image: 'images/gin.svg' },
  { id: 'SSD', image: 'images/ssd.svg' },
  { id: 'BEN', image: 'images/ben.svg' },
  { id: 'BDI', image: 'images/bdi.svg' },
  { id: 'BOL', image: 'images/bol.svg' },
  { id: 'BEL', image: 'images/bel.svg' },
  { id: 'RWA', image: 'images/rwa.svg' },
  { id: 'CUB', image: 'images/cub.svg' },
  { id: 'TUN', image: 'images/tun.svg' },
  { id: 'SOM', image: 'images/som.svg' },
  { id: 'HTI', image: 'images/hti.svg' },
  { id: 'GRC', image: 'images/grc.svg' },
  { id: 'CZE', image: 'images/cze.svg' },
  { id: 'PRT', image: 'images/prt.svg' },
  { id: 'AZE', image: 'images/aze.svg' },
  { id: 'DOM', image: 'images/dom.svg' },
  { id: 'SWE', image: 'images/swe.svg' },
  { id: 'ARE', image: 'images/are.svg' },
  { id: 'HUN', image: 'images/hun.svg' },
  { id: 'JOR', image: 'images/jor.svg' },
  { id: 'BLR', image: 'images/blr.svg' },
  { id: 'AUT', image: 'images/aut.svg' },
  { id: 'TJK', image: 'images/tjk.svg' },
  { id: 'HND', image: 'images/hnd.svg' },
  { id: 'ISR', image: 'images/isr.svg' },
  { id: 'CHE', image: 'images/che.svg' },
  { id: 'PNG', image: 'images/png.svg' },
  { id: 'HKG', image: 'images/hkg.svg' },
  { id: 'TGO', image: 'images/tgo.svg' },
  { id: 'SRB', image: 'images/srb.svg' },
  { id: 'SLE', image: 'images/sle.svg' },
  { id: 'BGR', image: 'images/bgr.svg' },
  { id: 'PRY', image: 'images/pry.svg' },
  { id: 'SLV', image: 'images/slv.svg' },
  { id: 'LAO', image: 'images/lao.svg' },
  { id: 'LBY', image: 'images/lby.svg' },
  { id: 'IRL', image: 'images/irl.svg' },
  { id: 'NIC', image: 'images/nic.svg' },
  { id: 'KGZ', image: 'images/kgz.svg' },
  { id: 'LBN', image: 'images/lbn.svg' },
  { id: 'DNK', image: 'images/dnk.svg' },
  { id: 'SGP', image: 'images/sgp.svg' },
  { id: 'FIN', image: 'images/fin.svg' },
  { id: 'SVK', image: 'images/svk.svg' },
  { id: 'ERI', image: 'images/eri.svg' },
  { id: 'NOR', image: 'images/nor.svg' },
  { id: 'CRI', image: 'images/cri.svg' },
  { id: 'CAF', image: 'images/caf.svg' },
  { id: 'TKM', image: 'images/tkm.svg' },
  { id: 'COG', image: 'images/cog.svg' },
  { id: 'NZL', image: 'images/nzl.svg' },
  { id: 'PSE', image: 'images/pse.svg' },
  { id: 'LBR', image: 'images/lbr.svg' },
  { id: 'OMN', image: 'images/omn.svg' },
  { id: 'HRV', image: 'images/hrv.svg' },
  { id: 'KWT', image: 'images/kwt.svg' },
  { id: 'PAN', image: 'images/pan.svg' },
  { id: 'GEO', image: 'images/geo.svg' },
  { id: 'MRT', image: 'images/mrt.svg' },
  { id: 'MDA', image: 'images/mda.svg' },
  { id: 'URY', image: 'images/ury.svg' },
  { id: 'PRI', image: 'images/pri.svg' },
  { id: 'BIH', image: 'images/bih.svg' },
  { id: 'MNG', image: 'images/mng.svg' },
  { id: 'ARM', image: 'images/arm.svg' },
  { id: 'ALB', image: 'images/alb.svg' },
  { id: 'LTU', image: 'images/ltu.svg' },
  { id: 'JAM', image: 'images/jam.svg' },
  { id: 'QAT', image: 'images/qat.svg' },
  { id: 'BWA', image: 'images/bwa.svg' },
  { id: 'NAM', image: 'images/nam.svg' },
  { id: 'SVN', image: 'images/svn.svg' },
  { id: 'MKD', image: 'images/mkd.svg' },
  { id: 'LVA', image: 'images/lva.svg' },
  { id: 'LSO', image: 'images/lso.svg' },
  { id: 'GMB', image: 'images/gmb.svg' },
  { id: 'GAB', image: 'images/gab.svg' },
  { id: 'KOS', image: 'images/kos.svg' },
  { id: 'BHR', image: 'images/bhr.svg' },
  { id: 'GNB', image: 'images/gnb.svg' },
  { id: 'TTO', image: 'images/tto.svg' },
  { id: 'EST', image: 'images/est.svg' },
  { id: 'MUS', image: 'images/mus.svg' },
  { id: 'GNQ', image: 'images/gnq.svg' },
  { id: 'TLS', image: 'images/tls.svg' },
  { id: 'SWZ', image: 'images/swz.svg' },
  { id: 'DJI', image: 'images/dji.svg' },
  { id: 'FJI', image: 'images/fji.svg' },
  { id: 'CYP', image: 'images/cyp.svg' },
  { id: 'REU', image: 'images/reu.svg' },
  { id: 'COM', image: 'images/com.svg' },
  { id: 'BTN', image: 'images/btn.svg' },
  { id: 'GUY', image: 'images/guy.svg' },
  { id: 'MAC', image: 'images/mac.svg' },
  { id: 'SLB', image: 'images/slb.svg' },
  { id: 'MNE', image: 'images/mne.svg' },
  { id: 'LUX', image: 'images/lux.svg' },
  { id: 'CPV', image: 'images/cpv.svg' },
  { id: 'SUR', image: 'images/sur.svg' },
  { id: 'ESH', image: 'images/esh.svg' },
  { id: 'BRN', image: 'images/brn.svg' },
  { id: 'MLT', image: 'images/mlt.svg' },
  { id: 'GLP', image: 'images/glp.svg' },
  { id: 'BLZ', image: 'images/blz.svg' },
  { id: 'BHS', image: 'images/bhs.svg' },
  { id: 'MTQ', image: 'images/mtq.svg' },
  { id: 'MDV', image: 'images/mdv.svg' },
  { id: 'ISL', image: 'images/isl.svg' },
  { id: 'BRB', image: 'images/brb.svg' },
  { id: 'VUT', image: 'images/vut.svg' },
  { id: 'PYF', image: 'images/pyf.svg' },
  { id: 'NCL', image: 'images/ncl.svg' },
  { id: 'GUF', image: 'images/guf.svg' },
  { id: 'MYT', image: 'images/myt.svg' },
  { id: 'WSM', image: 'images/wsm.svg' },
  { id: 'STP', image: 'images/stp.svg' },
  { id: 'LCA', image: 'images/lca.svg' },
  { id: 'GUM', image: 'images/gum.svg' },
  { id: 'CUW', image: 'images/cuw.svg' },
  { id: 'VIR', image: 'images/vir.svg' },
  { id: 'KIR', image: 'images/kir.svg' },
  { id: 'VCT', image: 'images/vct.svg' },
  { id: 'ABW', image: 'images/abw.svg' },
  { id: 'GRD', image: 'images/grd.svg' },
  { id: 'TON', image: 'images/ton.svg' },
  { id: 'FSM', image: 'images/fsm.svg' },
  { id: 'JEY', image: 'images/jey.svg' },
  { id: 'ATG', image: 'images/atg.svg' },
  { id: 'SYC', image: 'images/syc.svg' },
  { id: 'IMN', image: 'images/imn.svg' },
  { id: 'AND', image: 'images/and.svg' },
  { id: 'DMA', image: 'images/dma.svg' },
  { id: 'CYM', image: 'images/cym.svg' },
  { id: 'GGY', image: 'images/ggy.svg' },
  { id: 'BMU', image: 'images/bmu.svg' },
  { id: 'MNP', image: 'images/mnp.svg' },
  { id: 'GRL', image: 'images/grl.svg' },
  { id: 'ASM', image: 'images/asm.svg' },
  { id: 'MHL', image: 'images/mhl.svg' },
  { id: 'FRO', image: 'images/fro.svg' },
  { id: 'KNA', image: 'images/kna.svg' },
  { id: 'MCO', image: 'images/mco.svg' },
  { id: 'SXM', image: 'images/sxm.svg' },
  { id: 'LIE', image: 'images/lie.svg' },
  { id: 'MAF', image: 'images/maf.svg' },
  { id: 'GIB', image: 'images/gib.svg' },
  { id: 'SMR', image: 'images/smr.svg' },
  { id: 'TCA', image: 'images/tca.svg' },
  { id: 'VGB', image: 'images/vgb.svg' },
  { id: 'ALA', image: 'images/ala.svg' },
  { id: 'COK', image: 'images/cok.svg' },
  { id: 'PLW', image: 'images/plw.svg' },
  { id: 'BES', image: 'images/bes.svg' },
  { id: 'AIA', image: 'images/aia.svg' },
  { id: 'WLF', image: 'images/wlf.svg' },
  { id: 'TUV', image: 'images/tuv.svg' },
  { id: 'NRU', image: 'images/nru.svg' },
  { id: 'BLM', image: 'images/blm.svg' },
  { id: 'SPM', image: 'images/spm.svg' },
  { id: 'MSR', image: 'images/msr.svg' },
  { id: 'SHN', image: 'images/shn.svg' },
  { id: 'IOT', image: 'images/iot.svg' },
  { id: 'FLK', image: 'images/flk.svg' },
  { id: 'SJM', image: 'images/sjm.svg' },
  { id: 'NFK', image: 'images/nfk.svg' },
  { id: 'CXR', image: 'images/cxr.svg' },
  { id: 'NIU', image: 'images/niu.svg' },
  { id: 'TKL', image: 'images/tkl.svg' },
  { id: 'VAT', image: 'images/vat.svg' },
  { id: 'CCK', image: 'images/cck.svg' },
  { id: 'UMI', image: 'images/umi.svg' },
  { id: 'ATF', image: 'images/atf.svg' },
  { id: 'PCN', image: 'images/pcn.svg' },
  { id: 'SGS', image: 'images/sgs.svg' },
];

export default IMAGES;
