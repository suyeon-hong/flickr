/*
일정기간 가장 인기있는 사진들 출력
https://www.flickr.com/services/rest/?method=flickr.interestingness.getList

원하는 이미지 출력
https://www.flickr.com/services/rest/?method=flickr.photos.search

21be590b77fb11bd12a7266f99a2f2d8

*/

$.ajax({
    url: "https://www.flickr.com/services/rest/?method=flickr.photos.search",
    // url: "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList",
    datatype: "json",
    data: {
        api_key: "21be590b77fb11bd12a7266f99a2f2d8",
        per_page: 20,
        format: "json",
        nojsoncallback: 1,
        privacy_filter: 5,
        tags: "landscape"
    }
}).success(function(data){
    let items = data.photos.photo;

    $("#gallery").append("<ul>");
    $(items).each(function(index, data){
        let text = data.title;

        if(!data.title){
            text = "No description in this photo!";
        }
        $("#gallery ul").append(
            $("<li>").append(
                $("<a>").attr({
                    href: "https://live.staticflickr.com/"+ data.server +"/"+ data.id +"_"+ data.secret +"_b.jpg"
                }).append(
                    $("<img>").attr({
                        src: "https://live.staticflickr.com/"+ data.server +"/"+ data.id +"_"+ data.secret +"_m.jpg"
                    })
                ),
                $("<p>").text(text),
                $("<div class='profile'>").append(
                    $("<img>").attr({
                        src: "https://www.flickr.com/buddyicons/"+ data.owner +".jpg"
                    }),
                    $("<span>").text(data.owner)
                )
                )
            )
    });
}).error(function(err){
    console.error("데이터를 불러오지 못했습니다");
});

$.ajax({
    url: "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList",
    datatype: "json",
    data: {
        api_key: "21be590b77fb11bd12a7266f99a2f2d8",
        per_page: 3,
        format: "json",
        nojsoncallback: 1,
    }
}).success(function(data){
    let items = data.photos.photo;
    console.log(items);

    $("#gallery2").append("<ul>");
    $(items).each(function(index, data){
        let text = data.title;

        if(!data.title){
            text = "No description in this photo!!"
        }
        $("#gallery2 ul").append(
            $("<li>").append(
                $("<a>").attr({
                    href: "https://live.staticflickr.com/"+ data.server +"/"+ data.id +"_"+ data.secret +"_b.jpg"
                }).append(
                    $("<img>").attr({
                        src: "https://live.staticflickr.com/"+ data.server +"/"+ data.id +"_"+ data.secret +"_m.jpg"
                    })
                )
            ).append(
                $("<p>").text(text)
            )
        )
    });
}).error(function(err){
    console.error("데이터를 불러오지 못했습니다");
});
