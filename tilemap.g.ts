// 자동 생성된 코드입니다. 편집하지 마십시오.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "수준1":
            case "수준1":return tiles.createTilemap(hex`1000100003030303030303030303030303030303030303030302020303030101010303030303030102010301010101030101030303030101030101030103030101030303030202030303010103010101010303030302010101030101030301010101030303030103030303010101010301030203030301010103030103010302020202030303030103010301010302010203030303030301030303030102030203030303030303020203030302010201030302020303030301030202020201010102020303010303030102030302030302020303010303010102010302010202020303030303030302020102010203030203030303030302030303030203030303030303`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 자동 생성된 코드입니다. 편집하지 마십시오.
