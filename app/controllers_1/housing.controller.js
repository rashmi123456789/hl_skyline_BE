const db = require("../models");
const Op = db.Sequelize.Op;

exports.createZone = function (request, res, next) {
  db.sequelize.query(`INSERT INTO housing_zones (housing_project_id,zone_name,total_units,price_range,other,card_img_source, alt_text,title_text) 
  VALUES (:housing_project_id,:zone_name,:total_units,:price_range,:other,:card_img_source, :alt_text,:title_text)`,
  { replacements: {housing_project_id: request.body.housing_project_id,zone_name: request.body.zone_name,total_units: request.body.total_units,price_range: request.body.price_range,other: request.body.other,card_img_source: request.body.card_img_source, alt_text: request.body.alt_text,title_text: request.body.title_text},type: db.sequelize.QueryTypes.INSERT}
).then(function(housingZoneData) {
  res.send(housingZoneData)
})
};

exports.createUnits = function (request, res, next) {
  db.sequelize.query(`INSERT INTO housing_units (housing_zone_id,name,bed,bath,space,price,status) 
  VALUES (:housing_zone_id,:name,:bed,:bath,:space,:price,:status)`,
  { replacements: {housing_zone_id: request.body.housing_zone_id,name: request.body.name,bed: request.body.bed,bath:request.body.bath,space: request.body.space,price:request.body.price,status: request.body.status},type: db.sequelize.QueryTypes.INSERT}
).then(function(housingUnitData) {
  res.send(housingUnitData)
})
};

exports.createUnitsWithAllFields = function (request, res, next) {
  db.sequelize.query(`INSERT INTO housing_units (housing_zone_id,name,bed,bath,space,price,status,customer_id,customer_name,customer_phone,email,payment,agent,note) 
  VALUES (:housing_zone_id,:name,:bed,:bath,:space,:price,:status, :customer_id,:customer_name,:customer_phone,:email,:payment,:agent,:note)`,
  { replacements: {housing_zone_id: request.body.housing_zone_id,name: request.body.name,bed: request.body.bed,bath:request.body.bath,space: request.body.space,
    price:request.body.price,status: request.body.status, customer_id: request.body.customer_id, customer_name:request.body.customer_name, 
  customer_phone:request.body.customer_phone, email: request.body.email, payment:request.body.payment, agent: request.body.agent, 
note:request.body.note},type: db.sequelize.QueryTypes.INSERT}
).then(function(housingUnitData) {
  res.send(housingUnitData)
})
};



exports.updateUnits = function (request, res, next) {
  db.sequelize.query(`UPDATE housing_units SET customer_name= :customer_name, customer_id=:customer_id, customer_phone=:customer_phone,email=:email,payment=:payment, agent=:agent,note=:note, status=:status WHERE housing_unit_id = :unit_id; `,
  { replacements: {customer_name: request.body.customer_name,customer_id: request.body.customer_id,customer_phone: request.body.customer_phone,email:request.body.email,payment: request.body.payment,agent:request.body.agent,note: request.body.note, status:request.body.status, unit_id:request.body.unit_id},type: db.sequelize.QueryTypes.UPDATE}
).then(function(housingUnitData) {
  res.send(housingUnitData)
})
};

exports.createFAQ = function (request, res, next) {
  db.sequelize.query(`INSERT INTO housing_faq (question, answer, housing_project_id) 
  VALUES (:question, :answer, :housing_project_id)`,
  { replacements: {question: request.body.question, answer:request.body.answer, housing_project_id:request.body.housing_project_id},type: db.sequelize.QueryTypes.INSERT}
).then(function(housingFAQData) {
  res.send(housingFAQData)
})
};

exports.createHousingImageSlider = function (request, res, next) {
  db.sequelize.query(`INSERT INTO housing_image_slider (label, title, source_01, alt_text_01,title_text_01,source_02, alt_text_02,title_text_02,source_03, alt_text_03,title_text_03 ) 
  VALUES (:label, :title, :source_01, :alt_text_01, :title_text_01, :source_02, :alt_text_02, :title_text_02, :source_03, :alt_text_03, :title_text_03)`,
  { replacements: {label:request.body.label, title:request.body.title, 
    source_01:request.body.source_01, alt_text_01:request.body.alt_text_01,title_text_01:request.body.title_text_01,
    source_02:request.body.source_02, alt_text_02:request.body.alt_text_02,title_text_02:request.body.title_text_02,
    source_03:request.body.source_03, alt_text_03:request.body.alt_text_03,title_text_03:request.body.title_text_03 },type: db.sequelize.QueryTypes.INSERT}
).then(function(housingHosuingImageSliderData) {
  res.send(housingHosuingImageSliderData)
})
};

exports.createHousingProject = function (request, res, next) {
  db.sequelize.query(`INSERT INTO housing_project (project_name, project_description, district, town,
    price_range , total_units , available_units,hero_slider_img_01,hero_slider_img_02,hero_slider_img_03,
    hero_slider_img_04,project_location,project_feature_01,project_feature_01_icon,project_feature_02,project_feature_02_icon,project_feature_03,project_feature_03_icon,h2_title,
    h3_title,h3_description,blog_url,section_01_h3_title ,section_01_h3_description, section_02_h3_title,
     section_02_h3_description,image_slider_id_01,image_slider_id_02,image_slider_id_03,image_slider_id_04,
     video_label,video_title, video_poster_image,video_alt_text,video_fiter_text,video_url, video_description ,
      video_blog_post_url, amentities_id, map_section_title, location_lat, location_long, plan_intro, plan_url,
       plan_alt_text, plan_title_text, seo_meta_title, seo_meta_description, url, status) 
  VALUES (:project_name, :project_description, :district, :town, :price_range, :total_units,:available_units ,
    :hero_slider_img_01,:hero_slider_img_02,:hero_slider_img_03,:hero_slider_img_04, :project_location,:project_feature_01,:project_feature_01_icon,
    :project_feature_02,:project_feature_02_icon,:project_feature_03,:project_feature_03_icon,:h2_title, :h3_title,:h3_description,:blog_url,:section_01_h3_title,
    :section_01_h3_description, :section_02_h3_title, :section_02_h3_description, :image_slider_id_01, :image_slider_id_02,
    :image_slider_id_03,:image_slider_id_04, :video_label, :video_title ,:video_poster_image, :video_alt_text, 
    :video_fiter_text, :video_url, :video_description, :video_blog_post_url,:amentities_id, :map_section_title, 
    :location_lat, :location_long, :plan_intro, :plan_url, :plan_alt_text ,:plan_title_text, :seo_meta_title,
     :seo_meta_description, :url, :status)`,
  { replacements: {project_name:request.body.project_name , project_description:request.body.project_description , district:request.body.district , town:request.body.town ,
    price_range :request.body.price_range , total_units :request.body.total_units , available_units:request.body.available_units ,hero_slider_img_01:request.body.hero_slider_img_01 ,hero_slider_img_02:request.body.hero_slider_img_02 ,hero_slider_img_03:request.body.hero_slider_img_03 ,
    hero_slider_img_04:request.body.hero_slider_img_04 ,project_location:request.body.project_location ,project_feature_01:request.body.project_feature_01,project_feature_01_icon:request.body.project_feature_01_icon ,project_feature_02:request.body.project_feature_02 ,
    project_feature_02_icon:request.body.project_feature_02_icon,project_feature_03:request.body.project_feature_03 ,project_feature_03_icon:request.body.project_feature_03_icon,h2_title:request.body.h2_title ,
    h3_title:request.body.h3_title ,h3_description:request.body.h3_description ,blog_url:request.body.blog_url ,section_01_h3_title :request.body.section_01_h3_title ,section_01_h3_description:request.body.section_01_h3_description , section_02_h3_title:request.body.section_02_h3_title ,
     section_02_h3_description:request.body.section_02_h3_description ,image_slider_id_01:request.body.image_slider_id_01 ,image_slider_id_02:request.body.image_slider_id_02 ,image_slider_id_03:request.body.image_slider_id_03 ,image_slider_id_04:request.body.image_slider_id_04 ,
     video_label:request.body.video_label ,video_title:request.body.video_title , video_poster_image:request.body.video_label ,video_alt_text:request.body.video_alt_text ,video_fiter_text:request.body.video_fiter_text ,video_url:request.body.video_url , video_description :request.body.video_description ,
      video_blog_post_url:request.body.video_blog_post_url , amentities_id:request.body.amentities_id , map_section_title:request.body.map_section_title , location_lat:request.body.location_lat , location_long:request.body.location_long , plan_intro:request.body.plan_intro , plan_url:request.body.plan_url ,
       plan_alt_text:request.body.plan_alt_text , plan_title_text:request.body.plan_title_text , seo_meta_title:request.body.seo_meta_title , seo_meta_description:request.body.seo_meta_description , url:request.body.url , status:request.body.status},type: db.sequelize.QueryTypes.INSERT}
).then(function(housingProjectData) {
  res.send(housingProjectData)
})
};

exports.findAllWithProjectURL = function (request, res, next) {
  db.sequelize.query(`select * from housing_project where housing_project.url = :project_url`,
  { replacements: {project_url: request.body.project_url},type: db.sequelize.QueryTypes.SELECT }
).then(function(housingData) {
  res.send(housingData)
})
};

exports.findCitiesWithDistrictName = function (request, res, next) {
  db.sequelize.query(`select town from housing_project where housing_project.district = :district`,
  { replacements: {district: request.body.district},type: db.sequelize.QueryTypes.SELECT }
).then(function(housingData) {
  res.send(housingData)
})
};



exports.findAllProjects = function (request, res, next) {
  db.sequelize.query(`select * from housing_project`,
  {type: db.sequelize.QueryTypes.SELECT }
).then(function(housingData) {
  res.send(housingData)
})
};

exports.findAllProjectsWithDistrictAndTown = function (request, res, next) {
  db.sequelize.query(`select * from housing_project where housing_project.district = :district and housing_project.town = :town`,
  { replacements: {district: request.body.district, town: request.body.town},type: db.sequelize.QueryTypes.SELECT }
).then(function(housingData) {
  console.log(housingData);
  res.send(housingData)
})
};


exports.findAllWithProjectID = function (request, res, next) {
  db.sequelize.query(`select * from housing_project where housing_project.housing_project_id = :project_id`,
  { replacements: {project_id: request.body.project_id},type: db.sequelize.QueryTypes.SELECT }
).then(function(housingData) {
  res.send(housingData)
})
};

exports.findZonesWithProjectId = function (request, res, next) {
    db.sequelize.query(`select * from housing_zones where housing_project_id = :project_id`,
    { replacements: {project_id: request.body.project_id},type: db.sequelize.QueryTypes.SELECT }
  ).then(function(housingData) {
    res.send(housingData)
  })

};

exports.findImageSlidersWithProjectId = function (request, res, next) {
    db.sequelize.query(`select housing_image_slider.* from housing_image_slider inner join housing_project
    on housing_image_slider.housing_image_slider_id in (housing_project.image_slider_id_01,housing_project.image_slider_id_02, housing_project.image_slider_id_03,housing_project.image_slider_id_04)
      where housing_project.housing_project_id = :project_id`,
    { replacements: {project_id: request.body.project_id},type: db.sequelize.QueryTypes.SELECT }
  ).then(function(housingData) {
    res.send(housingData)
  })

};

exports.findAmentitiesWithProjectId = function (request, res, next) {
    db.sequelize.query(`select amenties.* from amenties, housing_project where amenties.amenties_id = housing_project.amentities_id and housing_project.housing_project_id= :project_id`,
    { replacements: {project_id: request.body.project_id},type: db.sequelize.QueryTypes.SELECT }
  ).then(function(housingData) {
    res.send(housingData)
  })

};

exports.findFAQsWithProjectId = function (request, res, next) {
    db.sequelize.query(`select * from housing_faq where housing_project_id = :project_id`,
    { replacements: {project_id: request.body.project_id},type: db.sequelize.QueryTypes.SELECT }
  ).then(function(housingData) {
    res.send(housingData)
  })

};

exports.findUnitsWithZoneId = function (request, res, next) {
  db.sequelize.query(`select * from housing_units where housing_zone_id = :zone_id`,
  { replacements: {zone_id: request.body.zone_id},type: db.sequelize.QueryTypes.SELECT }
).then(function(housingData) {
  console.log(housingData);
  res.send(housingData)
})

};

exports.findAvailableUnitsWithZoneId = function (request, res, next) {
  db.sequelize.query(`SELECT count(status) as avail from housing_units where housing_zone_id= :zone_id and status = 'AVAILABLE'`,
  { replacements: {zone_id: request.body.zone_id},type: db.sequelize.QueryTypes.SELECT }
).then(function(housingData) {
  console.log(housingData);
  res.send(housingData)
})

};

exports.getAllHousingProjects = function (request, res, next) {
  db.sequelize.query(`select * from housing_project`,
  {type: db.sequelize.QueryTypes.SELECT }
).then(function(housingData) {
  res.send(housingData)
})
};

exports.EditHousingProjectByProjectId = function (request, res, next) {
  const id = request.params.project_id;
  db.sequelize.query(`update housing_project set status = :status , available_units = :available_units where housing_project_id= :housing_project_id`,
  {replacements: {status: request.body.status, available_units: request.body.availableBlocks, housing_project_id:id},type: db.sequelize.QueryTypes.UPDATE }
).then(function(housingData) {
  res.send(housingData)
})
};

exports.DeleteHousingProjectByProjectId = function (request, res, next) {
  const id = request.params.project_id;
  db.sequelize.query(`Delete from housing_project where housing_project_id= :housing_project_id`,
  {replacements: {housing_project_id:id},type: db.sequelize.QueryTypes.DELETE }
).then(function(housingData) {
  res.send(housingData)
})
};

exports.DeleteHousingZoneByProjectId = function (request, res, next) {
  db.sequelize.query(`Delete from housing_zones where housing_project_id= :project_id`,
  {replacements: {project_id:request.params.project_id},type: db.sequelize.QueryTypes.DELETE }
).then(function(zoneData) {
  res.send(zoneData)
})
};

exports.DeleteHousingUnitByZoneId = function (request, res, next) {
  db.sequelize.query(`Delete from housing_units where housing_zone_id= :zone_id`,
  {replacements: {zone_id:request.params.zone_id},type: db.sequelize.QueryTypes.DELETE }
).then(function(zoneData) {
  res.send(zoneData)
})
};

exports.DeleteHousingFAQByProjectId = function (request, res, next) {
  db.sequelize.query(`Delete from housing_faq where housing_project_id= :project_id`,
  {replacements: {project_id:request.params.project_id},type: db.sequelize.QueryTypes.DELETE }
).then(function(zoneData) {
  res.send(zoneData)
})
};

exports.DeleteHousingImageSliderByImageId = function (request, res, next) {
  db.sequelize.query(`Delete from housing_image_slider where housing_image_slider_id= :slider_id`,
  {replacements: {slider_id:request.params.slider_id},type: db.sequelize.QueryTypes.DELETE }
).then(function(zoneData) {
  res.send(zoneData)
})
};







