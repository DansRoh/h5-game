function getRandomInt(e) {
    return Math[_0xd9e6[1]](Math[_0xd9e6[0]]() * Math[_0xd9e6[1]](e))
}
function requestFullScreen(e) {
    if (0 == egyszerFullScreen) {
        egyszerFullScreen = 1;
        var d = e[_0xd9e6[2]] || e[_0xd9e6[3]] || e[_0xd9e6[4]] || e[_0xd9e6[5]];
        if (d) d[_0xd9e6[6]](e);
        else if (typeof window[_0xd9e6[7]] !== _0xd9e6[8]) {
            var x = new ActiveXObject(_0xd9e6[9]);
            null !== x && x.SendKeys(_0xd9e6[10])
        }
    }
}
function getTime() {
    var e = new Date,
    d = e[_0xd9e6[12]](),
    x = e[_0xd9e6[13]](),
    _ = e[_0xd9e6[14]]();
    return x = checkTime(x),
    _ = checkTime(_),
    d + _0xd9e6[15] + x + _0xd9e6[15] + _
}
function checkTime(e) {
    return e < 10 && (e = _0xd9e6[16] + e),
    e
}
function oraKetyeg() {
    var e = new Date;
    $(_0xd9e6[25])[_0xd9e6[24]](_0xd9e6[17] + e[_0xd9e6[18]]() + _0xd9e6[19] + e[_0xd9e6[20]]() + 1 + _0xd9e6[19] + e[_0xd9e6[21]]() + _0xd9e6[22] + getTime() + _0xd9e6[23]),
    0 == sdcounter && (sdcounter = 25),
    $(_0xd9e6[27])[_0xd9e6[26]](sdcounter--),
    setTimeout(function() {
        oraKetyeg()
    },
    1e3)
}
function virInstall() {
    vir > -1 && ((vir += getRandomInt(10)) > 100 && (vir = 0), $(_0xd9e6[30])[_0xd9e6[29]](vir + _0xd9e6[28]), $(_0xd9e6[30])[_0xd9e6[24]](vir + _0xd9e6[31]), setTimeout(function() {
        virInstall()
    },
    getRandomInt(1e3) + 100))
}
function randomStringPattern(e) {
    for (var d, x = _0xd9e6[32], _ = 0; _ < e[_0xd9e6[33]]; _++) x += (d = e[_] == _0xd9e6[34] ? _0xd9e6[35] : e[_] == _0xd9e6[36] ? _0xd9e6[36] : e[_] == e[_][_0xd9e6[37]]() && e[_] != e[_][_0xd9e6[38]]() ? _0xd9e6[39] : e[_] == e[_][_0xd9e6[38]]() && e[_] != e[_][_0xd9e6[37]]() ? _0xd9e6[40] : -1 !== _0xd9e6[42][_0xd9e6[41]](e[_]) ? _0xd9e6[42] : _0xd9e6[43])[_0xd9e6[44]](Math[_0xd9e6[1]](Math[_0xd9e6[0]]() * d[_0xd9e6[33]]));
    return x
}
function randomChar(e) {
    return e[_0xd9e6[44]](Math[_0xd9e6[1]](Math[_0xd9e6[0]]() * e[_0xd9e6[33]]))
}
function bitcointTur() {
    var e = 0,
    d = _0xd9e6[32];
    mp++;
    var x = $(_0xd9e6[45])[_0xd9e6[24]]();
    mp > 1996 && (x = x[_0xd9e6[47]](x[_0xd9e6[41]](_0xd9e6[46]) + 6, x[_0xd9e6[33]])),
    d = mp + _0xd9e6[48] + randomStringPattern(_0xd9e6[49]) + _0xd9e6[50] + getTime() + _0xd9e6[51] + _0xd9e6[52] + randomStringPattern(_0xd9e6[53]) + _0xd9e6[54] + lang[3] + _0xd9e6[34] + randomStringPattern(_0xd9e6[55]) + _0xd9e6[56] + randomStringPattern(_0xd9e6[57]) + _0xd9e6[36] + randomStringPattern(_0xd9e6[58]),
    mp == 1989 + mined * mined * 10 && (d = _0xd9e6[59] + lang[4] + _0xd9e6[60] + mp + _0xd9e6[61] + randomStringPattern(_0xd9e6[62]) + _0xd9e6[63] + getTime() + _0xd9e6[64], $(_0xd9e6[65])[_0xd9e6[26]](Number($(_0xd9e6[65])[_0xd9e6[26]]()) + 1), $(_0xd9e6[66])[_0xd9e6[26]](Number($(_0xd9e6[66])[_0xd9e6[26]]()) + 4958), mined++),
    x += _0xd9e6[67] + d + _0xd9e6[46],
    $(_0xd9e6[45])[_0xd9e6[24]](x),
    $(_0xd9e6[69])[_0xd9e6[68]](300),
    setTimeout(function() {
        $(_0xd9e6[69])[_0xd9e6[70]]()
    },
    1e3),
    $(_0xd9e6[74])[_0xd9e6[73]](function() {
        e = getRandomInt($(this)[_0xd9e6[72]](_0xd9e6[71])) - getRandomInt($(this)[_0xd9e6[72]](_0xd9e6[71])),
        Number($(this)[_0xd9e6[26]]()) < 0 && $(this)[_0xd9e6[26]](100),
        $(this)[_0xd9e6[26]](Number($(this)[_0xd9e6[26]]()) + Number(e))
    }),
    setTimeout(function() {
        bitcointTur()
    },
    300 + 100 * getRandomInt(14))
}
function adjustFullScreenSize() {
    $(_0xd9e6[77])[_0xd9e6[76]](_0xd9e6[29], window[_0xd9e6[75]] - 32),
    $(_0xd9e6[77])[_0xd9e6[76]](_0xd9e6[78], window[_0xd9e6[79]] - 98)
}
function makeAblakocskaActive(e) {
    $(_0xd9e6[81])[_0xd9e6[73]](function() {
        $(this)[_0xd9e6[76]](_0xd9e6[80], $(this)[_0xd9e6[76]](_0xd9e6[80]) - 1)
    }),
    $(_0xd9e6[82])[_0xd9e6[73]](function() {
        $(this)[_0xd9e6[76]](_0xd9e6[80], $(this)[_0xd9e6[76]](_0xd9e6[80]) - 1)
    }),
    $(_0xd9e6[82] + e)[_0xd9e6[76]](_0xd9e6[80], 1e3)
}
function makeWindowActive(e) {
    $(_0xd9e6[81])[_0xd9e6[73]](function() {
        $(this)[_0xd9e6[76]](_0xd9e6[80], $(this)[_0xd9e6[76]](_0xd9e6[80]) - 1)
    }),
    $(_0xd9e6[82])[_0xd9e6[73]](function() {
        $(this)[_0xd9e6[76]](_0xd9e6[80], $(this)[_0xd9e6[76]](_0xd9e6[80]) - 1)
    }),
    $(_0xd9e6[83] + e)[_0xd9e6[76]](_0xd9e6[80], 1e3),
    $(_0xd9e6[81])[_0xd9e6[70]](_0xd9e6[84]),
    $(_0xd9e6[83] + e)[_0xd9e6[85]](_0xd9e6[84]),
    $(_0xd9e6[87])[_0xd9e6[70]](_0xd9e6[86]),
    $(_0xd9e6[88] + e)[_0xd9e6[85]](_0xd9e6[86])
}
function minimizeWindow(e) {
    windowTopPos[e] = $(_0xd9e6[83] + e)[_0xd9e6[76]](_0xd9e6[89]),
    windowLeftPos[e] = $(_0xd9e6[83] + e)[_0xd9e6[76]](_0xd9e6[90]),
    $(_0xd9e6[83] + e)[_0xd9e6[92]]({
        top: 800,
        left: 0
    },
    200,
    function() {
        $(_0xd9e6[83] + e)[_0xd9e6[85]](_0xd9e6[91]),
        $(_0xd9e6[88] + e)[_0xd9e6[85]](_0xd9e6[91]),
        $(_0xd9e6[88] + e)[_0xd9e6[70]](_0xd9e6[86])
    })
}
function openWindow(e) {
    console[_0xd9e6[94]](_0xd9e6[93], e),
    $(_0xd9e6[83] + e)[_0xd9e6[95]](_0xd9e6[91]) ? openMinimized(e) : (makeWindowActive(e), setTimeout(function() {
        console[_0xd9e6[94]](_0xd9e6[96], e),
        $(_0xd9e6[83] + e)[_0xd9e6[70]](_0xd9e6[97]),
        $(_0xd9e6[88] + e)[_0xd9e6[70]](_0xd9e6[97]),
        $(_0xd9e6[98] + e)[_0xd9e6[70]](_0xd9e6[97])
    },
    333)),
    $(_0xd9e6[83] + e)[_0xd9e6[102]](_0xd9e6[101])[_0xd9e6[24]](_0xd9e6[99] + $(_0xd9e6[83] + e)[_0xd9e6[102]](_0xd9e6[101])[_0xd9e6[72]](_0xd9e6[100]) + _0xd9e6[103] + $(_0xd9e6[83] + e)[_0xd9e6[102]](_0xd9e6[101])[_0xd9e6[72]](_0xd9e6[100]) + _0xd9e6[104]),
    setTimeout(function() {
        $(_0xd9e6[83] + e + _0xd9e6[106])[_0xd9e6[105]](200)
    },
    3e3),
    refreshVideoSize()
}
function closeWindwow(e) {
    $(_0xd9e6[83] + e)[_0xd9e6[85]](_0xd9e6[97]),
    $(_0xd9e6[88] + e)[_0xd9e6[85]](_0xd9e6[97]),
    $(_0xd9e6[98] + e)[_0xd9e6[85]](_0xd9e6[97]),
    $(_0xd9e6[87])[_0xd9e6[70]](_0xd9e6[86]),
    $(_0xd9e6[81])[_0xd9e6[70]](_0xd9e6[84]),
    $(_0xd9e6[83] + e + _0xd9e6[106])[_0xd9e6[68]](20),
    $(_0xd9e6[83] + e)[_0xd9e6[102]](_0xd9e6[101])[_0xd9e6[24]](_0xd9e6[34]),
    refreshVideoSize()
}
function openMinimized(e) {
    $(_0xd9e6[83] + e)[_0xd9e6[70]](_0xd9e6[91]),
    $(_0xd9e6[88] + e)[_0xd9e6[70]](_0xd9e6[91]),
    makeWindowActive(e),
    $(_0xd9e6[83] + e)[_0xd9e6[92]]({
        top: windowTopPos[e],
        left: windowLeftPos[e]
    },
    200,
    function() {}),
    refreshVideoSize()
}
function startPwCrack(e) {
    pwCrackStarted = 1,
    $(_0xd9e6[111])[_0xd9e6[24]](_0xd9e6[107] + lang[5] + _0xd9e6[108] + $(_0xd9e6[109])[_0xd9e6[26]]() + _0xd9e6[110] + lang[6] + _0xd9e6[34]),
    runPwCrack(e)
}
function runPwCrack(e) {
    var d, x = 0,
    _ = _0xd9e6[32];
    d = randomChar(pwGuessing < 8 || pwGuessing > 13 ? _0xd9e6[112] : _0xd9e6[113]),
    $(_0xd9e6[114] + pwGuessing)[_0xd9e6[26]](d),
    1 == getRandomInt(10) && ($(_0xd9e6[115] + pwGuessing)[_0xd9e6[26]](d), $(_0xd9e6[115] + pwGuessing)[_0xd9e6[70]](_0xd9e6[116]), $(_0xd9e6[115] + (pwGuessing + 1))[_0xd9e6[85]](_0xd9e6[116]), $(_0xd9e6[118] + pwGuessing)[_0xd9e6[26]](_0xd9e6[117]), pwGuessing++),
    (pwGuessing > 16 || cycleLengths[pwCycle] == pwGuessing || 0 == pwCrackStarted) && (pwCycle++<e - 1 ? (pwGuessing = 1, $(_0xd9e6[119])[_0xd9e6[70]](_0xd9e6[116]), $(_0xd9e6[120])[_0xd9e6[85]](_0xd9e6[116]), $(_0xd9e6[122])[_0xd9e6[26]](_0xd9e6[121])) : pwGuessing > 16 && (x = 1)),
    0 == pwCrackStarted && (x = 1, resetPwCrack()),
    setTimeout(function() {
        0 == x ? runPwCrack(e) : 1 == pwCrackStarted && ($(_0xd9e6[124])[_0xd9e6[85]](_0xd9e6[123]), $(_0xd9e6[119])[_0xd9e6[85]](_0xd9e6[116]), $(_0xd9e6[119])[_0xd9e6[73]](function() {
            _ += $(this)[_0xd9e6[26]]()
        }), $(_0xd9e6[111])[_0xd9e6[24]](lang[7] + _0xd9e6[60] + $(_0xd9e6[109])[_0xd9e6[26]]() + _0xd9e6[110] + lang[8] + _0xd9e6[125] + _ + _0xd9e6[126]))
    },
    20)
}
function resetPwCrack() {
    pwGuessing = 1,
    pwCrackStarted = 0,
    pwCycle = 0,
    $(_0xd9e6[119])[_0xd9e6[24]](_0xd9e6[35]),
    $(_0xd9e6[119])[_0xd9e6[70]](_0xd9e6[116]),
    $(_0xd9e6[127])[_0xd9e6[24]](_0xd9e6[35]),
    $(_0xd9e6[128])[_0xd9e6[24]](_0xd9e6[121]),
    $(_0xd9e6[124])[_0xd9e6[70]](_0xd9e6[123]),
    $(_0xd9e6[111])[_0xd9e6[24]](_0xd9e6[129] + lang[9] + _0xd9e6[130] + lang[10] + _0xd9e6[131])
}
function refreshVideoSize() {
    $(_0xd9e6[137])[_0xd9e6[73]](function() {
        var e = Math[_0xd9e6[132]]($(this)[_0xd9e6[29]]()),
        d = Math[_0xd9e6[132]]($(this)[_0xd9e6[78]]());
        d > 315 * e / 560 ? d = Math[_0xd9e6[132]](315 * e / 560) : e = Math[_0xd9e6[132]](560 * d / 315),
        (e < 356 || d < 200) && (e = 356, d = 200),
        $(this)[_0xd9e6[102]](_0xd9e6[101])[_0xd9e6[78]](Math[_0xd9e6[132]](d)),
        $(this)[_0xd9e6[102]](_0xd9e6[101])[_0xd9e6[29]](Math[_0xd9e6[132]](e)),
        $(this)[_0xd9e6[102]](_0xd9e6[133])[_0xd9e6[78]](Math[_0xd9e6[132]](1.5 * d)),
        $(this)[_0xd9e6[102]](_0xd9e6[133])[_0xd9e6[29]](Math[_0xd9e6[132]](1.5 * e)),
        $(this)[_0xd9e6[102]](_0xd9e6[133])[_0xd9e6[76]](_0xd9e6[134], _0xd9e6[19] + Math[_0xd9e6[132]](.25 * d) + _0xd9e6[135] + Math[_0xd9e6[132]](.25 * e) + _0xd9e6[136])
    })
}
function satelliteAnimation() {
    tx = 190,
    ty = 140,
    $(_0xd9e6[139])[_0xd9e6[138]](),
    setTimeout(function() {
        $(_0xd9e6[140])[_0xd9e6[68]](400),
        setTimeout(function() {
            $(_0xd9e6[141])[_0xd9e6[68]](400),
            $(_0xd9e6[142])[_0xd9e6[24]](lang[11] + _0xd9e6[110] + lang[12]),
            setTimeout(function() {
                $(_0xd9e6[143])[_0xd9e6[105]](300),
                setTimeout(function() {
                    $(_0xd9e6[142])[_0xd9e6[24]](lang[13] + _0xd9e6[110] + lang[14] + _0xd9e6[144]),
                    $(_0xd9e6[145])[_0xd9e6[138]](),
                    $(_0xd9e6[146])[_0xd9e6[68]](300),
                    setTimeout(function() {
                        $(_0xd9e6[152])[_0xd9e6[92]]({
                            top: _0xd9e6[147],
                            left: _0xd9e6[148],
                            width: _0xd9e6[149]
                        },
                        1e3,
                        function() {
                            setTimeout(function() {
                                $(_0xd9e6[152])[_0xd9e6[72]](_0xd9e6[150], _0xd9e6[151]),
                                $(_0xd9e6[152])[_0xd9e6[76]](_0xd9e6[89], _0xd9e6[16]),
                                $(_0xd9e6[152])[_0xd9e6[76]](_0xd9e6[90], _0xd9e6[16]),
                                $(_0xd9e6[152])[_0xd9e6[76]](_0xd9e6[29], _0xd9e6[153]),
                                setTimeout(function() {
                                    $(_0xd9e6[152])[_0xd9e6[92]]({
                                        top: _0xd9e6[147],
                                        left: _0xd9e6[148],
                                        width: _0xd9e6[149]
                                    },
                                    1e3,
                                    function() {
                                        setTimeout(function() {
                                            $(_0xd9e6[152])[_0xd9e6[72]](_0xd9e6[150], _0xd9e6[154]),
                                            $(_0xd9e6[152])[_0xd9e6[76]](_0xd9e6[89], _0xd9e6[16]),
                                            $(_0xd9e6[152])[_0xd9e6[76]](_0xd9e6[90], _0xd9e6[16]),
                                            $(_0xd9e6[152])[_0xd9e6[76]](_0xd9e6[29], _0xd9e6[153]),
                                            trackOnMap()
                                        },
                                        1e3)
                                    })
                                },
                                2e3)
                            },
                            1e3)
                        })
                    },
                    2e3)
                },
                5e3)
            },
            2e3)
        },
        3e3)
    },
    2e3)
}
function trackOnMap() { (--td < 1 || tx < 20 || tx > 380 || ty < 20 || ty > 280) && (tdx = (getRandomInt(40) - 20) / 10, tdy = (getRandomInt(40) - 20) / 10, tx < 20 && (tdx = Math[_0xd9e6[155]](tdx)), tx > 380 && (tdx = -1 * Math[_0xd9e6[155]](tdx)), ty < 20 && (tdy = Math[_0xd9e6[155]](tdy)), ty > 280 && (tdy = -1 * Math[_0xd9e6[155]](tdy)), td = getRandomInt(60)),
    tx += tdx,
    ty += tdy,
    $(_0xd9e6[156])[_0xd9e6[76]](_0xd9e6[90], Math[_0xd9e6[132]](tx) + _0xd9e6[136]),
    $(_0xd9e6[156])[_0xd9e6[76]](_0xd9e6[89], Math[_0xd9e6[132]](ty) + _0xd9e6[136]),
    setTimeout(function() {
        trackOnMap()
    },
    getRandomInt(500) + 500)
}
function nuclearPlant() {
    var e = 0,
    d = 0;
    $(_0xd9e6[258])[_0xd9e6[73]](function() {
        2 == getRandomInt(7) && (e = Number($(this)[_0xd9e6[26]]()), d = $(this)[_0xd9e6[72]](_0xd9e6[257]), (e += d < 1 ? getRandomInt(10 * d) - .5 : getRandomInt(d)) < 0 && (e = 0), $(this)[_0xd9e6[26]](e))
    }),
    $(_0xd9e6[260])[_0xd9e6[73]](function() {
        1 == getRandomInt(3) && (e = Number($(this)[_0xd9e6[72]](_0xd9e6[259])), d = Number($(this)[_0xd9e6[72]](_0xd9e6[257])), (e += getRandomInt(d) - d / 2) < 10 && (e = 15), e > 90 && (e = 85), $(this)[_0xd9e6[72]](_0xd9e6[259], e), $(this)[_0xd9e6[78]](e + _0xd9e6[28]))
    }),
    setTimeout(function() {
        nuclearPlant()
    },
    getRandomInt(500) + 100)
}
function ablakocskatMutat(e) {
    $(e)[_0xd9e6[68]](300),
    makeAblakocskaActive($(e)[_0xd9e6[72]](_0xd9e6[190]))
}
function cursorBlink() {++cursor % 3 == 0 ? $(_0xd9e6[262])[_0xd9e6[85]](_0xd9e6[261]) : $(_0xd9e6[262])[_0xd9e6[70]](_0xd9e6[261]),
    setTimeout(function() {
        cursorBlink()
    },
    350)
}
function autoTyping() {
    addKey(),
    setTimeout(function() {
        1 == auto && autoTyping()
    },
    100)
}
function addKey() {
    betu = betu < 1 ? 4 : 0,
    addChar()
}
function addChar() {++k >= text[_0xd9e6[33]] && (k = 0),
    text[k] == _0xd9e6[264] ? $(_0xd9e6[265])[_0xd9e6[24]]($(_0xd9e6[265])[_0xd9e6[24]]() + _0xd9e6[110]) : text[k] == _0xd9e6[266] ? $(_0xd9e6[265])[_0xd9e6[24]]($(_0xd9e6[265])[_0xd9e6[24]]() + _0xd9e6[267]) : $(_0xd9e6[265])[_0xd9e6[24]]($(_0xd9e6[265])[_0xd9e6[24]]() + text[k]),
    betu-->0 && setTimeout(function() {
        addChar()
    },
    getRandomInt(100) + 100),
    $(_0xd9e6[268])[_0xd9e6[92]]({
        scrollTop: $(document)[_0xd9e6[78]]()
    },
    0)
}
function addKey3() {
    $(_0xd9e6[269])[_0xd9e6[78]]() < $(_0xd9e6[270])[_0xd9e6[78]]() && $(_0xd9e6[270])[_0xd9e6[85]](_0xd9e6[271]),
    betu3 = betu3 < 1 ? 3 : 0,
    addChar3()
}
function addChar3() {++k3 >= text[_0xd9e6[33]] && (k3 = 0),
    text[k3] == _0xd9e6[264] ? $(_0xd9e6[272])[_0xd9e6[24]]($(_0xd9e6[272])[_0xd9e6[24]]() + _0xd9e6[110]) : text[k3] == _0xd9e6[266] ? $(_0xd9e6[272])[_0xd9e6[24]]($(_0xd9e6[272])[_0xd9e6[24]]() + _0xd9e6[267]) : $(_0xd9e6[272])[_0xd9e6[24]]($(_0xd9e6[272])[_0xd9e6[24]]() + text[k3]),
    betu3-->0 && setTimeout(function() {
        addChar3()
    },
    getRandomInt(100) + 100)
}
function addKey2() {
    0 == pauseTyping && (betu2 = betu2 < 1 ? 4 : 0, addChar2())
}
function addChar2() {++ht >= hackText[_0xd9e6[33]] && (ht = 0),
    hackText[ht] == _0xd9e6[264] ? ($(_0xd9e6[277])[_0xd9e6[24]]($(_0xd9e6[277])[_0xd9e6[24]]() + _0xd9e6[110]), betu2 = 0) : hackText[ht] == _0xd9e6[266] ? ($(_0xd9e6[277])[_0xd9e6[24]]($(_0xd9e6[277])[_0xd9e6[24]]() + _0xd9e6[267]), betu2 = 0) : hackText[ht] == _0xd9e6[278] || hackText[ht] == _0xd9e6[279] || (hackText[ht] == _0xd9e6[280] ? ($(_0xd9e6[281])[_0xd9e6[76]](_0xd9e6[80], 1e3), hackText[ht + 1] == _0xd9e6[278] && (openWindow(4), resetPwCrack(), startPwCrack(10)), hackText[ht + 1] == _0xd9e6[279] && (ablakocskatMutat(_0xd9e6[233]), setTimeout(function() {
        $(_0xd9e6[233])[_0xd9e6[105]](500)
    },
    3e3)), $(_0xd9e6[282])[_0xd9e6[70]](_0xd9e6[97]), $(_0xd9e6[277])[_0xd9e6[24]]($(_0xd9e6[277])[_0xd9e6[24]]() + _0xd9e6[283]), pauseTyping = 1, betu2 = 0, $(_0xd9e6[164])[_0xd9e6[85]](_0xd9e6[284]), setTimeout(function() {
        $(_0xd9e6[285])[_0xd9e6[24]]($(_0xd9e6[285])[_0xd9e6[24]]() + _0xd9e6[286] + serverResponsesLines[serverLine++] + _0xd9e6[46]),
        $(_0xd9e6[287])[_0xd9e6[92]]({
            height: 18
        },
        1e3,
        function() {
            $(_0xd9e6[287])[_0xd9e6[76]](_0xd9e6[78], _0xd9e6[163]),
            $(_0xd9e6[287])[_0xd9e6[70]]()
        })
    },
    500), setTimeout(function() {
        pauseTyping = 0,
        $(_0xd9e6[164])[_0xd9e6[70]](_0xd9e6[284]),
        $(_0xd9e6[288])[_0xd9e6[92]]({
            scrollTop: $(document)[_0xd9e6[78]]()
        },
        0)
    },
    1500)) : $(_0xd9e6[277])[_0xd9e6[24]]($(_0xd9e6[277])[_0xd9e6[24]]() + hackText[ht])),
    betu2-->0 && setTimeout(function() {
        addChar2()
    },
    getRandomInt(100) + 100),
    $(_0xd9e6[289])[_0xd9e6[92]]({
        scrollTop: $(document)[_0xd9e6[78]]()
    },
    0),
    $(_0xd9e6[288])[_0xd9e6[92]]({
        scrollTop: $(document)[_0xd9e6[78]]()
    },
    0)
}
function clickIE() {
   if (document[_0xd9e6[495]]) return ! 1
}
function clickNS(e) {
    if ((document[_0xd9e6[496]] || document[_0xd9e6[246]] && !document[_0xd9e6[495]]) && (2 == e[_0xd9e6[379]] || 3 == e[_0xd9e6[379]])) return ! 1
}
function draw() {
    ctx[_0xd9e6[506]] = _0xd9e6[507],
    ctx[_0xd9e6[508]](0, 0, c[_0xd9e6[29]], c[_0xd9e6[78]]),
    ctx[_0xd9e6[506]] = _0xd9e6[509],
    ctx[_0xd9e6[510]] = font_size + _0xd9e6[511];
    for (var e = 0; e < drops[_0xd9e6[33]]; e++) {
        var d = chinese[Math[_0xd9e6[1]](Math[_0xd9e6[0]]() * chinese[_0xd9e6[33]])];
        ctx[_0xd9e6[512]](d, e * font_size, drops[e] * font_size),
        drops[e] * font_size > c[_0xd9e6[78]] && Math[_0xd9e6[0]]() > .975 && (drops[e] = 0),
        drops[e]++
    }
}
function createTimeline() {
    var e = new SmoothieChart({
        millisPerPixel: 43,
        maxValueScale: 1.09,
        minValueScale: 1.1,
        scaleSmoothing: .417,
        grid: {
            strokeStyle: _0xd9e6[647],
            millisPerLine: 2e3,
            verticalSections: 11
        },
        labels: {
            fillStyle: _0xd9e6[648],
            fontSize: 13,
            precision: 0
        },
        timestampFormatter: SmoothieChart[_0xd9e6[534]]
    }),
    d = document[_0xd9e6[246]](_0xd9e6[649]),
    x = new TimeSeries;
    e[_0xd9e6[559]](x, {
        lineWidth: 2.8,
        strokeStyle: _0xd9e6[486]
    }),
    e[_0xd9e6[566]](d, 0),
    e[_0xd9e6[559]](random, {
        strokeStyle: _0xd9e6[650],
        fillStyle: _0xd9e6[651],
        lineWidth: 4
    }),
    e[_0xd9e6[566]](document[_0xd9e6[246]](_0xd9e6[649]), 500)
}
var _0xd9e6 = ["random", "floor", "requestFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullScreen", "call", "ActiveXObject", "undefined", "WScript.Shell", "{F11}", "body", "getHours", "getMinutes", "getSeconds", ":", "0", '<span class="datum">', "getFullYear", "-", "getMonth", "getDate", '</span><br /><span class="ora">', "</span>", "html", ".watch", "text", "#selfDestructCount", "%", "width", ".processBar > div", "%&nbsp;", "", "length", " ", "&nbsp;", "/", "toUpperCase", "toLowerCase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "indexOf", "0123456789", "#!@~$%^&*)-_", "charAt", "#rollingBitcoinScreen", "</div>", "substr", ".&nbsp;&nbsp;&nbsp;", "AAAA", " - [", "] ", " Resp ", "Aaaaa#12", " | ", "Aa#12", " | Diff: ", "11", "111", '<span class="btcSuccessLine">#### ', " @ ", ". | Resp: ", "Aaa#111111", " | Vallet +1 BTC - [", "] ####</span>", "#btcVallet", "#btcDollar", '<div style="display: none;" class="lastAddedRow">', "fadeIn", ".lastAddedRow", "removeClass", "data-rand", "attr", "each", ".addRemoveRandom", "innerWidth", "css", ".fullSizeWindow .wincontent", "height", "innerHeight", "z-index", ".window", ".ablakocska", "#window", "activeWindow", "addClass", "activeTab", ".taskbarPanel", "#minimPanel", "top", "left", "minimized", "animate", "Open:", "log", "hasClass", "RemoveClose", "closed", "#openWindow", '<iframe src="https://www.youtube.com/embed/', "data-iframe", ".video", "find", "?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0&loop=1&disablekb=1&showinfo=0&playlist=", '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><div class="videoLayover"></div>', "fadeOut", " .loading", '<div class="aligncenter"><span class="blinking">', "</span> @ ", "#targetIp", "<br />", "#pwdResult", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", "0123456789!@#$%^&*_+?><", "#pw", "#pwok", "nowGuessing", "✔", "#pwcheck", "#pwOkRow div", "#pwok1", "✘", "#pwCheckedRow td", "unlocked", "#lockAnimation", ': <span class="highlighted"> ', " </span>", "#pwGuesserRow div", "#pwCheckedRow div", '<div class="aligncenter">', '<br /><span class="button" onclick="startPwCrack(10)">', "</span></div>", "round", ".video iframe", "margin", "px 0px 0px -", "px", ".wrapVideo", "hide", ".satellite, #triangle", ".satellite", "#triangle", "#satellite h3", "#globe", '<img class="onePixel" src="/hacker/map2.jpg" alt="map 2" /><img class="onePixel" src="/hacker/map3.jpg" alt="map 3" />', "#satelliteAnim", "#mapWrap", "-=150", "-=200", "800", "src", "/hacker/map2.jpg", "#zoomMap", "400px", "/hacker/map3.jpg", "abs", "#mapPosition", "href", "location", "http://", "https://", "replace", "#languageBits > span", "auto", "#desktop", "opacity", ".showWhileMining", "#partikulacskak", "#partikulacskakIde", "appendTo", "#particles-js", "#matrixRain", "#grafikon", "1033px", "516px", "968px", "click", ".auto", "#automateHacker", "#howToUseToggle", "#toggleFullScreen", "start", "toggleClass", "#startMenuButton", "#pwButt2", "#pwButt1", "#startBitcoinMine", ".clock", "anx", "domain", "data-id", '<div class="taskbarPanel" id="minimPanel', '" data-id="', '"><span>', "data-ico", "data-title", "append", "#taskbar", "id", "window", '<div class="wincontent"></div>', "wrapInner", '<div class="windowHeader"><strong>', '</strong><span title="', '" class="winminimize"><span></span></span><span title="', '" class="winmaximize"><span></span><span></span></span><span title="', '" class="winclose">&times;</span></div>', "prepend", "initiate window ", '<a class="openWindow closed" id="openWindow', "</a>", "#icons", "ablakocska", '<div class="ablakcontent"></div>', '<a class="closeAblakocska" title="', '">&times;</a>', ".ablakcontent", "parent", ".closeAblakocska", "mousedown", "resizable", ".wincontent", "draggable", ".winclose", ".winminimize", ".openWindow", "fullSizeWindow", "children", ".winmaximize", "scrollbar", ".scrollbar-rail", "keyCode", "#tracingIP", "#accessDenied", "#permissionGranted", "#pcvirus", "#selfDestruct", "#downloadingData", "#topSecret", ".consoleWindow", ".remoteConnection", ".activeTab", "keydown", "keyup", "offsetHeight", "prank_dab", "getElementById", "display", "style", "none", "innerHTML", "wrapBestDeals", '<div class="dab"><h3>', '</h3><img src="/hacker/dab.png" alt="dab" /><br /><a target="_blank" href="https://disableadblock.com/how/">', " <strong>", "</strong><br /><span>DisableAdBlock.com</span></a></div>", "ready", "data-step", ".randomnr", "data-percent", ".flood > div", "cursorBlink", ".cursor", '"penetrate" == typeof $.accessRequest && ☺♥($.accessRqst = !0),☺♥function(a, b, c) {☺♥♥function d(c) {☺♥♥♥var d = b.console;☺♥♥♥f[c] || (f[c] = !0, ☺♥♥♥a.migrateWarnings.push(c), ☺♥♥♥d && d.warn && !a.accessRqst &&☺♥♥♥(d.warn("BankTransfer: " + c),☺♥♥♥a.migrateTrace && d.trace && d.trace()))☺♥♥}☺♥♥function e(b, c, e, f) {☺♥♥♥if (Object.defineProperty) try {☺♥♥♥♥return void ☺♥♥♥♥Object.defineProperty(b, c, {☺♥♥♥♥♥configurable: !0,☺♥♥♥♥♥enumerable: !0,☺♥♥♥♥♥get: function() {☺♥♥♥♥♥♥return d(f), e☺♥♥♥♥♥},☺♥♥♥♥♥set: function(a) {☺♥♥♥♥♥♥d(f), e = a☺♥♥♥♥♥}☺♥♥♥♥})☺♥♥♥} catch (g) {}☺♥♥♥a._definePropertyBroken = !0, ☺♥♥♥b[c] = e☺♥♥}☺♥♥a.migrateVersion = "1.4.1";☺♥♥var f = {};☺♥♥a.migrateWarnings = [], b.console && ☺♥♥b.console.log && ☺♥♥b.console.log("BankTransfer: Migrate installed"☺♥♥♥+ (a.accessRqst ? "x" : " logging active") ☺♥♥♥+ ", version " + a.migrateVersion), ☺♥♥♥a.migrateTrace === c && ☺♥♥♥(a.migrateTrace = !0), ☺♥♥♥a.migrateReset = function() {☺♥♥♥f = {}, a.migrateWarnings.length = 0☺♥♥}, "BackCompat" === document.compatMode ☺♥♥&& d("$ is not compatible with Quirks Mode");☺♥♥var g = a("<input/>", {☺♥♥♥♥size: 1☺♥♥♥}).attr("size") && a.attrFn,☺♥♥♥h = a.attr,☺♥♥♥i = a.attrHooks.value && ☺♥♥♥♥a.attrHooks.value.get || function() {☺♥♥♥♥♥return null☺♥♥♥},☺♥♥♥j = a.attrHooks.value ☺♥♥♥♥&& a.attrHooks.value.set || function() {☺♥♥♥♥♥return c☺♥♥♥},☺♥♥♥k = /^(?:input|button)$/i,☺♥♥♥l = /^[238]$/,☺♥♥♥m = /^(?:autofocus|autoplay|async|check)$/i,☺♥♥♥n = /^(?:checked|selected)$/i;☺♥♥e(a, "attrFn", g || {}, "$.attrFn deprecated"),☺♥♥♥a.attr = function(b, e, f, i) {☺♥♥♥var j = e.toLowerCase(),☺♥♥♥♥o = b && b.nodeType;☺♥♥♥return i && (h.length < 4 && ☺♥♥♥♥d("$.fn.attr( props, pass ) deprecated"), ☺♥♥♥♥b && !l.test(o) && (g ? e in g : ☺♥♥♥♥♥a.isFunction(a.fn[e]))) ? a(b)[e](f)☺♥♥♥♥♥: ("type" === e && f !== c ☺♥♥♥♥♥&& k.test(b.nodeName) ☺♥♥♥♥♥&& b.parentNode ☺♥♥♥♥♥&& d("Error"), !a.attrHooks[j] ☺♥♥♥♥♥&& m.test(j) && (a.attrHooks[j] = {☺♥♥♥♥get: function(b, d) {☺♥♥♥♥♥var e, f = a.prop(b, d);☺♥♥♥♥♥return f === !0 || "bool" != typeof f☺♥♥♥♥♥&& (e = b.getAttributeNode(d)) ☺♥♥♥♥♥&& e.nodeValue !== !1 ? d.toLowerCase()☺♥♥♥♥},☺♥♥♥♥set: function(b, c, d) {☺♥♥♥♥♥var e;☺♥♥♥♥♥return c === !1 ? a.removeAttr(b, d) : ☺♥♥♥♥♥(e = a.propFix[d] || d, e in b &&☺♥♥♥♥♥(b[e] = !0), b.setAttribute(d, d())), d☺♥♥♥♥}☺♥♥♥}, n.test(j) && d("$.fn.attr(#" + j + "#) ☺♥♥♥♥prop attribute")), h.call(a, b, e, f))☺♥♥}, a.attrHooks.value = {☺♥♥♥get: function(a, b) {☺♥♥♥♥var c = (a.nodeName || "x").toLowerCase();☺♥♥♥♥return "button" === c ? i.apply(this, arg): ☺♥♥♥♥("input" !== c && "option" !== c && ☺♥♥♥♥d("$.fn.attr(#value#) properties"), ☺♥♥♥♥♥b in a ? a.value : null)☺♥♥♥},☺♥♥♥set: function(a, b) {☺♥♥♥♥var c = (a.nodeName || "1").toLowerCase();☺♥♥♥♥return "button" === c ? j.apply(this, ☺♥♥♥♥♥arguments) : ☺♥♥♥♥♥("input" !== c && "option" !== c && ☺♥♥♥♥♥d("$.fn.attr(#value#, val) no props"),☺♥♥♥♥void(a.value = b))☺♥♥♥}☺♥♥};☺var o, p, q = a.fn.init,☺♥r = a.find,☺♥s = a.parseJSON,☺♥t = /^s*</,☺♥u = /[(s*[-w]+s*)([~|^$*]?=),☺♥v = s*([-w#]*?#[-w#]*)s*]/g,☺♥w = /^([^<]*)(<[wW]+>)([^>]*)$/;☺a.fn.init = function(b, e, f) {☺♥var g, h;☺♥return b && "string" == typeof b && ☺♥!a.isPlainObject(e) && (g = w.exec(a.trim(b))) ☺♥&& g[0] && (t.test(b) || d("$(html) #<# char"),☺♥g[3] && d("$(html) HT ignored"), ☺♥"#" === g[0].charAt(0) && (d("string ###"), ☺♥a.error("BankTransfer: selector (XSS)")), ☺♥e && e.context && e.context.nodeType && ☺♥♥(e = e.context), a.parseHTML) ? ☺♥q.call(this, a.parseHTML(g[2], ☺♥e && e.ownerDocument || e || document, !0), e, f) ☺♥♥: (h = q.apply(this, arguments), ☺♥♥b && b.selector !== c ? ☺♥(h.selector = b.selector, h.context = b.context) : ☺♥(h.selector = "string" == typeof b ? b : "0", b &&☺♥(h.context = b.nodeType ? b : e || document)), h)☺}, a.fn.init.prototype = a.fn, a.find = function(a) {☺♥var b = Array.prototype.slice.call(arguments);☺♥if ("string" == typeof a && u.test(a)) try {☺♥♥document.querySelector(a)☺♥} catch (c) {☺♥♥a = a.replace(v, function(a, b, c, d) {☺♥♥♥return "[" + b + c + #"# + d + #"]#☺♥♥});☺♥♥try {☺♥♥♥document.querySelector(a), ☺♥♥♥d("Attr ### quoted: " + b[0]), b[0] = a☺♥♥} catch (e) {☺♥♥♥d("Attr ### fixed: " + b[0])☺♥♥}☺♥}☺♥return r.apply(this, b)☺};☺var x;☺♥for (x in r) Object.prototype.hasOwnProperty☺♥♥.call(r, x) && (a.find[x] = r[x]);☺a.parseJSON = function(a) {☺♥return a ? s.apply(this, arguments) : ☺♥(d("$.parseJSON"), null)☺}, a.uaMatch = function(a) {☺♥a = a.toLowerCase();☺♥♥var b = /(chrome)[ /]([w.]+)/.exec(a) ☺♥♥|| /(webkit)[ /]([w.]+)/.exec(a) ☺♥♥|| /(opera)(?:.*version|)[ /]([w.]+)/.exec(a) ☺♥♥|| /(msie) ([w.]+)/.exec(a) ☺♥♥|| a.indexOf("compatible") < 0 && /(mozilla)☺♥♥(?:.*? rv:([w.]+)|)/.exec(a) || [];☺♥♥return {☺♥♥♥browser: b[1] || "0",☺♥♥♥version: b[2] || "0"☺♥♥}☺♥}☺}($, window);', "☺", "#consoleText", "♥", "&nbsp;&nbsp;&nbsp;", ".scroll-content", "#typingArea", "#wrapDesktopTyper", "stickConsoleToBottom", "#desktopTyper", 'init connection @Server 23.86.111.0♣access folder [Top Secret]♣♂override security settings♣list admin users >>♣launch auth_crack.exe☺activate crack mode☺access user [nasaadmin] at [23.86.111.0]☺run password crack ♣○init login♣user nasaadmin☺***************♣SELECT customers FROM BankAccounts WHERE balance > $1M♣transfer all [balance] to MyAccount♣positive♣CODE[try {☺♥Satement authRequest = conn.crStat();☺♥ResultSet rs = authRequest.exec(loginQuery);☺♥user_id = rs.getInt("GodMode");☺♥if ( hashOf(request.getParam("password") != -1) ) {☺♥♥throw BadLoginException();☺♥} else {☺♥♥authTransaction(10,minutes);☺♥}☺}]♣transfer all [balance] to MyAccount♣positive♣access [balance] @ MyAccount♣init offshore transfer♣transfer all to ID[43589374ROM] @ Cayman Treasury Bank♣', "Connected to main server @ 23.86.111.0♦Authorization required!♦Unable to access  security settings. Login required!♦Response: [nasaadmin], [trumpgov]♦Server busy - please wait... #openPasswordCrack♦Enter username and password♦Permission granted♦8243 entries found♦Are you sure you want to transfer $439B to your account?♦Amount too big. Bank authorization required.♦All authorizations disabled♦Are you sure you want to transfer $439B to your account?♦Success: $439B has been transferred to [MyAccount]♦Available $439.165.230.113 [USD]♦Permission granted♦Transaction accepted♦♦♦", "♦", "split", "#remoteText", "○", "♂", "♣", "#window20", ".mainServer", "<span class='execute'></span><br />", "waitCursor", "#serverScreen", '<div style="" class="serverScreenLine">', ".serverScreenLine", ".mainServer .scroll-content", ".remoteConnection .scroll-content", "use strict", "platform", "test", "userAgent", "add", "scrolls", "push", "remove", "inArray", "splice", "scroll", "overlay", "resize", "container", "namespace", ".scrollbar_", "index", "data", "options", "jQueryScrollbarOptions", "extend", "scrollTo", "scrollx", "scrolly", "name", "prototype", "wrapper", "removeData", "scrollLeft", "scrollTop", "off", "scroll-content scroll-scrollx_visible scroll-scrolly_visible", "insertBefore", "andSelf", "div", "scroll-scrollx_visible", "scroll-scrolly_visible", "onDestroy", "isFunction", "apply", "containerWrapper", "mobile", "ignoreMobile", "ignoreOverlay", "macosx", "webkit", "position", "absolute", "relative", "class", "scroll-wrapper", "<div>", "textarea", "is", "scroll-textarea", "scroll-content", "onScroll", "maxScrollOffset", "y", "size", "visible", "x", "isVisible", "kx", "bar", "on", "disableBodyScroll", "mousewheel", "MozMousePixelScroll", "touchstart", "touches", "originalEvent", "pageX", "pageY", "touchmove", "targetTouches", "preventDefault", "touchend", "onInit", "scrollStep", "scroll-", "showArrows", "scroll-element_arrows_visible", "wheelDelta", "detail", "offset", "linear", "stop", "mouseenter", "which", "outerWidth", "outerHeight", "scroll-arrow", "scroll-arrow_more", "maxScrollValue", "eventOffset", "scrollbarOffset", "scrollbarSize", "stepScrolling", "duration", ".scroll-arrow, .scroll-element_track", "scroll-draggable", "mousemove", "scroll-scroll", "_visible", "scrollWidth", "prop", "scrollHeight", "onUpdate", "autoScrollSize", "trigger", "join", '<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "simple", "string", ".scroll-bar", ".scroll-element_size", ".scroll-element_track", "blur", "dragstart", "mouseup", "selectstart", "fn", "init", "isArray", "body, .scroll-wrapper", "not", "autoUpdate", ":visible", "debug", "console", "Scroll updates exceed 10", "outer", "content-box", "200px", "inner", "-1000px", "ceil", "axis", "HORIZONTAL_AXIS", "wheelDeltaX", "angular", "jqueryScrollbar", "jQueryScrollbar", "$parse", "AC", "$destroy", "destroy", "directive", "copy", "provider", "module", "function", "amd", "jquery", "jQuery", "object", "CP", "PenTimer", "_loopExits", "programKilledSoStopMonitoring", "programNoLongerBeingMonitored", "timeOfFirstCallToShouldStopLoop", "START_MONITORING_AFTER", "STOP_ALL_MONITORING_TIMEOUT", "infinite-loop", "stringify", "*", "postMessage", "match", "We found an infinite loop in your Pen. We've stopped the Pen from running. Please correct it or contact support@codepen.io.", "stack", "_loopTimers", "MAX_TIME_IN_LOOP_WO_EXIT", "Infinite Loop found on loop: ", "shouldStopExecution", "shouldStopLoop", "[CodePen]: An infinite loop (or a loop taking too long) was detected, so we stopped its execution. Sorry!", "warn", "exitedLoop", "particles-js", "#00ff00", "circle", "#000000", "img/github.svg", "out", "canvas", "grab", "repulse", "Right-click disabled", "all", "layers", "captureEvents", "onmousedown", "onmouseup", "oncontextmenu", "return false", "c", "2d", "getContext", "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑", "fillStyle", "rgba(0, 0, 0, 0.05)", "fillRect", "#0F0", "font", "px arial", "fillText", "now", "getTime", "hasOwnProperty", "defaultOptions", "clear", "maxValue", "NaN", "minValue", "resetBounds", "max", "min", "dropOldData", "defaultChartOptions", "seriesSet", "currentValueRange", "currentVisMinValue", "lastRenderTimeMillis", "bind", "mouseout", "tooltipFormatter", "timestampFormatter", "timeFormatter", '<span style="color:', "strokeStyle", "series", '">', "value", "precision", "labels", "yMaxFormatter", "<br>", "toFixed", "bezier", "#777777", "#ffffff", "monospace", "#BBBBBB", "AnimateCompatibility", "requestAnimationFrame", "webkitRequestAnimationFrame", "mozRequestAnimationFrame", "oRequestAnimationFrame", "msRequestAnimationFrame", "setTimeout", "cancelAnimationFrame", "defaultSeriesPresentationOptions", "addTimeSeries", "resetBoundsInterval", "resetBoundsTimerId", "removeTimeSeries", "timeSeries", "getTimeSeriesOptions", "bringToFront", "streamTo", "delay", "getTooltipEl", "tooltipEl", "createElement", "className", "smoothie-chart-tooltip", "appendChild", "updateTooltip", "mouseover", "tooltip", "millisPerPixel", "scrollBackwards", "mouseX", "offsetWidth", "binarySearch", "block", "offsetX", "mouseY", "offsetY", "mousePageX", "mousePageY", "enableDpiScaling", "devicePixelRatio", "responsive", "lastWidth", "setAttribute", "lastHeight", "getAttribute", "originalWidth", "scale", "originalHeight", "frame", "addEventListener", "render", "removeEventListener", "updateValueRange", "maxValueScale", "minValueScale", "yRangeFunction", "isAnimatingScale", "scaleSmoothing", "valueRange", "limitFPS", "clientWidth", "clientHeight", "fontSize", "px ", "fontFamily", "save", "translate", "beginPath", "rect", "clip", "grid", "clearRect", "restore", "lineWidth", "millisPerLine", "sharpLines", "moveTo", "lineTo", "stroke", "closePath", "verticalSections", "borderVisible", "strokeRect", "horizontalLines", "color", "maxDataSetLength", "line", "bezierCurveTo", "step", "interpolation", "fill", "tooltipLine", "disabled", "yMinFormatter", "measureText", "TimeSeries", "SmoothieChart", "rgba(48,238,0,0.50)", "#34ce00", "chart", "rgba(0, 255, 0, 1)", "rgba(0, 255, 0, 0.2)"],
i = 0,
minimizedWidth = new Array,
minimizedHeight = new Array,
windowTopPos = new Array,
windowLeftPos = new Array,
lang = new Array,
panel,
sdcounter = 600,
id,
cursor = 0,
k = 0,
td = 65,
tdx = 1.3,
tdy = -1.7,
tx = -1,
ty = -1,
egyszerFullScreen = 1,
elem = document[_0xd9e6[11]],
vir = 0,
mp = 1985,
mined = 1,
pwGuessing = 1,
pwCycle = 0,
pwCrackStarted = 0,
cycleLengths = [2, 5, 7, 9, 4, 7, 9, 12, 13, 3, 5, 7, 9, 12, 14, 2, 3, 5, 6, 7, 8, 9, 2],
down = !1,
welcome = 1,
auto = 0,
firstAutoRun = 1,
hanyAblakVan = 0;
$(document)[_0xd9e6[256]](function() {
    var e = window[_0xd9e6[158]][_0xd9e6[157]] + _0xd9e6[32];
    0 == e[_0xd9e6[41]](_0xd9e6[159]) && (window[_0xd9e6[158]][_0xd9e6[157]] = e[_0xd9e6[161]](_0xd9e6[159], _0xd9e6[160])),
    i = 0,
    $(_0xd9e6[162])[_0xd9e6[73]](function() {
        lang[i] = $(this)[_0xd9e6[26]](),
        i++
    }),
    refreshVideoSize(),
    $(_0xd9e6[178])[_0xd9e6[176]](function() {
        egyszerFullScreen = 0,
        requestFullScreen(elem),
        auto = 1,
        $(_0xd9e6[164])[_0xd9e6[85]](_0xd9e6[163]);
        for (var e = 0; e < hanyAblakVan; e++) closeWindwow(e);
        openWindow(2),
        $(_0xd9e6[45])[_0xd9e6[24]](_0xd9e6[32]),
        $(_0xd9e6[166])[_0xd9e6[76]](_0xd9e6[165], 1),
        1 == firstAutoRun && bitcointTur(),
        openWindow(7),
        window[_0xd9e6[75]] > 1900 && openWindow(3),
        openWindow(4),
        resetPwCrack(),
        startPwCrack(10),
        ablakocskatMutat(_0xd9e6[167]),
        $(_0xd9e6[170])[_0xd9e6[169]](_0xd9e6[168]),
        ablakocskatMutat(_0xd9e6[171]),
        ablakocskatMutat(_0xd9e6[172]),
        createTimeline(),
        $(_0xd9e6[171])[_0xd9e6[76]](_0xd9e6[90], _0xd9e6[173]),
        $(_0xd9e6[167])[_0xd9e6[76]](_0xd9e6[90], _0xd9e6[174]),
        $(_0xd9e6[172])[_0xd9e6[76]](_0xd9e6[90], _0xd9e6[175]),
        openWindow(9),
        autoTyping(),
        setTimeout(function() {
            $(_0xd9e6[177])[_0xd9e6[176]](function() {
                auto = 0,
                console[_0xd9e6[94]](_0xd9e6[163], auto)
            })
        },
        500),
        firstAutoRun = 0
    }),
    $(_0xd9e6[179])[_0xd9e6[176]](function() {
        openWindow(0)
    }),
    $(_0xd9e6[180])[_0xd9e6[176]](function() {
        egyszerFullScreen = 0,
        requestFullScreen(elem)
    }),
    $(_0xd9e6[164])[_0xd9e6[176]](function() {
        console[_0xd9e6[94]](welcome),
        1 == welcome && ($(_0xd9e6[164])[_0xd9e6[182]](_0xd9e6[181]), welcome = 0, requestFullScreen(elem))
    }),
    $(_0xd9e6[183])[_0xd9e6[176]](function() {
        $(_0xd9e6[164])[_0xd9e6[182]](_0xd9e6[181])
    }),
    $(_0xd9e6[184])[_0xd9e6[176]](function() {
        startPwCrack(10)
    }),
    $(_0xd9e6[185])[_0xd9e6[176]](function() {
        resetPwCrack()
    }),
    $(_0xd9e6[186])[_0xd9e6[176]](function() {
        $(_0xd9e6[45])[_0xd9e6[24]](_0xd9e6[32]),
        $(_0xd9e6[166])[_0xd9e6[76]](_0xd9e6[165], 1),
        bitcointTur()
    }),
    $(_0xd9e6[187])[_0xd9e6[26]](getTime()),
    oraKetyeg(),
    i = 0,
    $(_0xd9e6[81])[_0xd9e6[73]](function() { - 1 != String(document[_0xd9e6[189]])[_0xd9e6[41]](_0xd9e6[188]) && ($(this)[_0xd9e6[76]](_0xd9e6[80], 1e3), $(this)[_0xd9e6[72]](_0xd9e6[190], i), minimizedWidth[i] = $(this)[_0xd9e6[29]](), minimizedHeight[i] = $(this)[_0xd9e6[78]](), windowTopPos[i] = $(this)[_0xd9e6[76]](_0xd9e6[89]), windowLeftPos[i] = $(this)[_0xd9e6[76]](_0xd9e6[90]), $(_0xd9e6[197])[_0xd9e6[196]](_0xd9e6[191] + i + _0xd9e6[192] + i + _0xd9e6[193] + $(this)[_0xd9e6[72]](_0xd9e6[194]) + _0xd9e6[23] + $(this)[_0xd9e6[72]](_0xd9e6[195]) + _0xd9e6[46]), $(this)[_0xd9e6[95]](_0xd9e6[97]) && $(_0xd9e6[88] + i)[_0xd9e6[85]](_0xd9e6[97]), $(this)[_0xd9e6[95]](_0xd9e6[91]) && $(_0xd9e6[88] + i)[_0xd9e6[85]](_0xd9e6[91]), $(this)[_0xd9e6[72]](_0xd9e6[198], _0xd9e6[199] + i), $(this)[_0xd9e6[201]](_0xd9e6[200]), $(this)[_0xd9e6[207]](_0xd9e6[202] + $(this)[_0xd9e6[72]](_0xd9e6[195]) + _0xd9e6[203] + lang[15] + _0xd9e6[204] + lang[16] + _0xd9e6[205] + lang[17] + _0xd9e6[206]), console[_0xd9e6[94]](_0xd9e6[208], i), $(_0xd9e6[211])[_0xd9e6[196]](_0xd9e6[209] + i + _0xd9e6[192] + i + _0xd9e6[193] + $(this)[_0xd9e6[72]](_0xd9e6[194]) + _0xd9e6[23] + $(this)[_0xd9e6[72]](_0xd9e6[195]) + _0xd9e6[210]), i++, hanyAblakVan++)
    }),
    i = 0,
    $(_0xd9e6[82])[_0xd9e6[73]](function() {
        $(this)[_0xd9e6[85]](_0xd9e6[212] + i),
        $(this)[_0xd9e6[72]](_0xd9e6[190], i),
        $(this)[_0xd9e6[201]](_0xd9e6[213]),
        $(this)[_0xd9e6[102]](_0xd9e6[216])[_0xd9e6[207]](_0xd9e6[214] + lang[17] + _0xd9e6[215]),
        i++,
        $(this)[_0xd9e6[76]](_0xd9e6[90], (window[_0xd9e6[75]] - $(this)[_0xd9e6[29]]()) / 2 + _0xd9e6[136])
    }),
    $(_0xd9e6[218])[_0xd9e6[176]](function() {
        $(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[105]](200)
    }),
    $(_0xd9e6[82])[_0xd9e6[219]](function() {
        makeAblakocskaActive($(this)[_0xd9e6[72]](_0xd9e6[190]))
    }),
    $(_0xd9e6[221])[_0xd9e6[220]]({
        resize: function(e, d) {
            refreshVideoSize()
        }
    }),
    $(_0xd9e6[81])[_0xd9e6[222]]({
        cancel: _0xd9e6[221]
    }),
    $(_0xd9e6[82])[_0xd9e6[222]](),
    $(_0xd9e6[81])[_0xd9e6[219]](function() {
        makeWindowActive($(this)[_0xd9e6[72]](_0xd9e6[190]))
    }),
    $(_0xd9e6[223])[_0xd9e6[176]](function() {
        closeWindwow($(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[72]](_0xd9e6[190]))
    }),
    $(_0xd9e6[224])[_0xd9e6[176]](function() {
        minimizeWindow($(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[72]](_0xd9e6[190]))
    }),
    $(_0xd9e6[87])[_0xd9e6[176]](function() {
        id = $(this)[_0xd9e6[72]](_0xd9e6[190]),
        $(this)[_0xd9e6[95]](_0xd9e6[86]) ? minimizeWindow($(this)[_0xd9e6[72]](_0xd9e6[190])) : $(this)[_0xd9e6[95]](_0xd9e6[91]) ? openMinimized(id) : makeWindowActive(id)
    }),
    $(_0xd9e6[225])[_0xd9e6[176]](function() {
        openWindow($(this)[_0xd9e6[72]](_0xd9e6[190]))
    }),
    $(_0xd9e6[228])[_0xd9e6[176]](function() {
        $(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[95]](_0xd9e6[226]) ? ($(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[70]](_0xd9e6[226]), $(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[227]](_0xd9e6[221])[_0xd9e6[78]](minimizedHeight[$(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[72]](_0xd9e6[190])]), $(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[227]](_0xd9e6[221])[_0xd9e6[29]](minimizedWidth[$(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[72]](_0xd9e6[190])]), refreshVideoSize()) : ($(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[85]](_0xd9e6[226]), minimizedHeight[$(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[72]](_0xd9e6[190])] = $(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[227]](_0xd9e6[221])[_0xd9e6[78]](), minimizedWidth[$(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[72]](_0xd9e6[190])] = $(this)[_0xd9e6[217]]()[_0xd9e6[217]]()[_0xd9e6[227]](_0xd9e6[221])[_0xd9e6[29]](), adjustFullScreenSize(), refreshVideoSize())
    }),
    adjustFullScreenSize(),
    $(_0xd9e6[230])[_0xd9e6[229]](),
    $(_0xd9e6[11])[_0xd9e6[242]](function(e) {
        auto = 0,
        down || (down = !0, vir = -1, $(_0xd9e6[164])[_0xd9e6[70]](_0xd9e6[181]), 27 == e[_0xd9e6[231]] || 32 == e[_0xd9e6[231]] ? $(_0xd9e6[82])[_0xd9e6[105]](222) : 48 == e[_0xd9e6[231]] || 96 == e[_0xd9e6[231]] ? (ablakocskatMutat(_0xd9e6[232]), -1 == tx && satelliteAnimation()) : 49 == e[_0xd9e6[231]] || 97 == e[_0xd9e6[231]] ? ablakocskatMutat(_0xd9e6[233]) : 50 == e[_0xd9e6[231]] || 98 == e[_0xd9e6[231]] ? ablakocskatMutat(_0xd9e6[234]) : 51 == e[_0xd9e6[231]] || 99 == e[_0xd9e6[231]] ? (vir = 0, ablakocskatMutat(_0xd9e6[235]), virInstall()) : 52 == e[_0xd9e6[231]] || 100 == e[_0xd9e6[231]] ? ($(_0xd9e6[27])[_0xd9e6[26]](600), ablakocskatMutat(_0xd9e6[236]), sdcounter = 600) : 53 == e[_0xd9e6[231]] || 101 == e[_0xd9e6[231]] ? (ablakocskatMutat(_0xd9e6[167]), $(_0xd9e6[170])[_0xd9e6[169]](_0xd9e6[168])) : 54 == e[_0xd9e6[231]] || 102 == e[_0xd9e6[231]] ? ablakocskatMutat(_0xd9e6[171]) : 55 == e[_0xd9e6[231]] || 103 == e[_0xd9e6[231]] ? (ablakocskatMutat(_0xd9e6[172]), createTimeline()) : 56 == e[_0xd9e6[231]] || 104 == e[_0xd9e6[231]] ? (vir = 0, ablakocskatMutat(_0xd9e6[237]), virInstall()) : 57 == e[_0xd9e6[231]] || 105 == e[_0xd9e6[231]] ? ablakocskatMutat(_0xd9e6[238]) : $(_0xd9e6[239])[_0xd9e6[95]](_0xd9e6[84]) ? addKey() : $(_0xd9e6[240])[_0xd9e6[95]](_0xd9e6[84]) ? addKey2() : $(_0xd9e6[241])[0] || addKey3())
    }),
    $(_0xd9e6[11])[_0xd9e6[243]](function(e) {
        down = !1
    }),
    cursorBlink(),
    nuclearPlant(),
    setTimeout(function() {
        document[_0xd9e6[246]](_0xd9e6[245])[_0xd9e6[244]] ? document[_0xd9e6[246]](_0xd9e6[245])[_0xd9e6[248]][_0xd9e6[247]] = _0xd9e6[249] : document[_0xd9e6[246]](_0xd9e6[251])[_0xd9e6[250]] = _0xd9e6[252] + lang[0] + _0xd9e6[253] + lang[1] + _0xd9e6[254] + lang[2] + _0xd9e6[255]
    },
    1e3)
});
var text = _0xd9e6[263],
betu = 0,
betu3 = 0,
k3 = 0,
ht = -1,
ri = 0,
pauseTyping = 0,
hackText = _0xd9e6[273] + text,
serverResponses = _0xd9e6[274],
serverResponsesLines = serverResponses[_0xd9e6[276]](_0xd9e6[275]),
serverLine = 0,
betu2 = 0; !
function(e, d) {
    typeof define === _0xd9e6[457] && define[_0xd9e6[458]] ? define([_0xd9e6[459]], d) : d(e[_0xd9e6[460]])
} (this,
function(e) {
    function d(d) {
        if (t[_0xd9e6[335]] && !d) return {
            height: 0,
            width: 0
        };
        if (!t[_0xd9e6[307]][_0xd9e6[437]]) {
            var x = {
                border: _0xd9e6[249],
                "box-sizing": _0xd9e6[438],
                height: _0xd9e6[439],
                margin: _0xd9e6[16],
                padding: _0xd9e6[16],
                width: _0xd9e6[439]
            };
            t[_0xd9e6[307]][_0xd9e6[440]] = e(_0xd9e6[341])[_0xd9e6[76]](e[_0xd9e6[310]]({},
            x)),
            t[_0xd9e6[307]][_0xd9e6[437]] = e(_0xd9e6[341])[_0xd9e6[76]](e[_0xd9e6[310]]({
                left: _0xd9e6[441],
                overflow: _0xd9e6[300],
                position: _0xd9e6[337],
                top: _0xd9e6[441]
            },
            x))[_0xd9e6[196]](t[_0xd9e6[307]][_0xd9e6[440]])[_0xd9e6[169]](_0xd9e6[11])
        }
        return t[_0xd9e6[307]][_0xd9e6[437]][_0xd9e6[318]](1e3)[_0xd9e6[319]](1e3),
        {
            height: Math[_0xd9e6[442]](t[_0xd9e6[307]][_0xd9e6[437]][_0xd9e6[375]]()[_0xd9e6[89]] - t[_0xd9e6[307]][_0xd9e6[440]][_0xd9e6[375]]()[_0xd9e6[89]] || 0),
            width: Math[_0xd9e6[442]](t[_0xd9e6[307]][_0xd9e6[437]][_0xd9e6[375]]()[_0xd9e6[90]] - t[_0xd9e6[307]][_0xd9e6[440]][_0xd9e6[375]]()[_0xd9e6[90]] || 0)
        }
    }
    function x() {
        var e = d(!0);
        return ! (e[_0xd9e6[78]] || e[_0xd9e6[29]])
    }
    function _(e) {
        var d = e[_0xd9e6[361]];
        return (!d[_0xd9e6[443]] || d[_0xd9e6[443]] !== d[_0xd9e6[444]]) && !d[_0xd9e6[445]]
    }
    _0xd9e6[290];
    var t = {
        data: {
            index: 0,
            name: _0xd9e6[229]
        },
        macosx: /mac/i[_0xd9e6[292]](navigator[_0xd9e6[291]]),
        mobile: /android|webos|iphone|ipad|ipod|blackberry/i[_0xd9e6[292]](navigator[_0xd9e6[293]]),
        overlay: null,
        scroll: null,
        scrolls: [],
        webkit: /webkit/i[_0xd9e6[292]](navigator[_0xd9e6[293]]) && !/edge\/\d+/i[_0xd9e6[292]](navigator[_0xd9e6[293]])
    };
    t[_0xd9e6[295]][_0xd9e6[294]] = function(e) {
        this[_0xd9e6[297]](e)[_0xd9e6[296]](e)
    },
    t[_0xd9e6[295]][_0xd9e6[297]] = function(d) {
        for (; e[_0xd9e6[298]](d, this) >= 0;) this[_0xd9e6[299]](e[_0xd9e6[298]](d, this), 1);
        return this
    };
    var i = {
        autoScrollSize: !0,
        autoUpdate: !0,
        debug: !1,
        disableBodyScroll: !1,
        duration: 200,
        ignoreMobile: !1,
        ignoreOverlay: !1,
        scrollStep: 30,
        showArrows: !1,
        stepScrolling: !0,
        scrollx: null,
        scrolly: null,
        onDestroy: null,
        onInit: null,
        onScroll: null,
        onUpdate: null
    },
    n = function(_) {
        t[_0xd9e6[300]] || (t[_0xd9e6[301]] = x(), t[_0xd9e6[300]] = d(), a(), e(window)[_0xd9e6[302]](function() {
            var e = !1;
            if (t[_0xd9e6[300]] && (t[_0xd9e6[300]][_0xd9e6[78]] || t[_0xd9e6[300]][_0xd9e6[29]])) {
                var x = d();
                x[_0xd9e6[78]] === t[_0xd9e6[300]][_0xd9e6[78]] && x[_0xd9e6[29]] === t[_0xd9e6[300]][_0xd9e6[29]] || (t[_0xd9e6[300]] = x, e = !0)
            }
            a(e)
        })),
        this[_0xd9e6[303]] = _,
        this[_0xd9e6[304]] = _0xd9e6[305] + t[_0xd9e6[307]][_0xd9e6[306]]++,
        this[_0xd9e6[308]] = e[_0xd9e6[310]]({},
        i, window[_0xd9e6[309]] || {}),
        this[_0xd9e6[311]] = null,
        this[_0xd9e6[312]] = {},
        this[_0xd9e6[313]] = {},
        _[_0xd9e6[307]](t[_0xd9e6[307]][_0xd9e6[314]], this),
        t[_0xd9e6[295]][_0xd9e6[294]](this)
    };
    n[_0xd9e6[315]] = {
        destroy: function() {
            if (this[_0xd9e6[316]]) {
                this[_0xd9e6[303]][_0xd9e6[317]](t[_0xd9e6[307]][_0xd9e6[314]]),
                t[_0xd9e6[295]][_0xd9e6[297]](this);
                var d = this[_0xd9e6[303]][_0xd9e6[318]](),
                x = this[_0xd9e6[303]][_0xd9e6[319]]();
                this[_0xd9e6[303]][_0xd9e6[322]](this[_0xd9e6[316]])[_0xd9e6[76]]({
                    height: _0xd9e6[32],
                    margin: _0xd9e6[32],
                    "max-height": _0xd9e6[32]
                })[_0xd9e6[70]](_0xd9e6[321])[_0xd9e6[320]](this[_0xd9e6[304]])[_0xd9e6[318]](d)[_0xd9e6[319]](x),
                this[_0xd9e6[312]][_0xd9e6[300]][_0xd9e6[70]](_0xd9e6[325])[_0xd9e6[102]](_0xd9e6[324])[_0xd9e6[323]]()[_0xd9e6[320]](this[_0xd9e6[304]]),
                this[_0xd9e6[313]][_0xd9e6[300]][_0xd9e6[70]](_0xd9e6[326])[_0xd9e6[102]](_0xd9e6[324])[_0xd9e6[323]]()[_0xd9e6[320]](this[_0xd9e6[304]]),
                this[_0xd9e6[316]][_0xd9e6[297]](),
                e(document)[_0xd9e6[294]](_0xd9e6[11])[_0xd9e6[320]](this[_0xd9e6[304]]),
                e[_0xd9e6[328]](this[_0xd9e6[308]][_0xd9e6[327]]) && this[_0xd9e6[308]][_0xd9e6[327]][_0xd9e6[329]](this, [this[_0xd9e6[303]]])
            }
        },
        init: function(d) {
            var x = this,
            i = this[_0xd9e6[303]],
            n = this[_0xd9e6[330]] || i,
            o = this[_0xd9e6[304]],
            a = e[_0xd9e6[310]](this[_0xd9e6[308]], d || {}),
            s = {
                x: this[_0xd9e6[312]],
                y: this[_0xd9e6[313]]
            },
            r = this[_0xd9e6[316]],
            c = {
                scrollLeft: i[_0xd9e6[318]](),
                scrollTop: i[_0xd9e6[319]]()
            };
            if (t[_0xd9e6[331]] && a[_0xd9e6[332]] || t[_0xd9e6[301]] && a[_0xd9e6[333]] || t[_0xd9e6[334]] && !t[_0xd9e6[335]]) return ! 1;
            if (r) n[_0xd9e6[76]]({
                height: _0xd9e6[163],
                "margin-bottom": -1 * t[_0xd9e6[300]][_0xd9e6[78]] + _0xd9e6[136],
                "margin-right": -1 * t[_0xd9e6[300]][_0xd9e6[29]] + _0xd9e6[136],
                "max-height": _0xd9e6[32]
            });
            else {
                if (this[_0xd9e6[316]] = r = e(_0xd9e6[341])[_0xd9e6[85]](_0xd9e6[340])[_0xd9e6[85]](i[_0xd9e6[72]](_0xd9e6[339]))[_0xd9e6[76]](_0xd9e6[336], i[_0xd9e6[76]](_0xd9e6[336]) == _0xd9e6[337] ? _0xd9e6[337] : _0xd9e6[338])[_0xd9e6[322]](i)[_0xd9e6[196]](i), i[_0xd9e6[343]](_0xd9e6[342]) && (this[_0xd9e6[330]] = n = e(_0xd9e6[341])[_0xd9e6[322]](i)[_0xd9e6[196]](i), r[_0xd9e6[85]](_0xd9e6[344])), n[_0xd9e6[85]](_0xd9e6[345])[_0xd9e6[76]]({
                    height: _0xd9e6[163],
                    "margin-bottom": -1 * t[_0xd9e6[300]][_0xd9e6[78]] + _0xd9e6[136],
                    "margin-right": -1 * t[_0xd9e6[300]][_0xd9e6[29]] + _0xd9e6[136],
                    "max-height": _0xd9e6[32]
                }), i[_0xd9e6[355]](_0xd9e6[300] + o,
                function(d) {
                    e[_0xd9e6[328]](a[_0xd9e6[346]]) && a[_0xd9e6[346]][_0xd9e6[6]](x, {
                        maxScroll: s[_0xd9e6[348]][_0xd9e6[347]],
                        scroll: i[_0xd9e6[319]](),
                        size: s[_0xd9e6[348]][_0xd9e6[349]],
                        visible: s[_0xd9e6[348]][_0xd9e6[350]]
                    },
                    {
                        maxScroll: s[_0xd9e6[351]][_0xd9e6[347]],
                        scroll: i[_0xd9e6[318]](),
                        size: s[_0xd9e6[351]][_0xd9e6[349]],
                        visible: s[_0xd9e6[351]][_0xd9e6[350]]
                    }),
                    s[_0xd9e6[351]][_0xd9e6[352]] && s[_0xd9e6[351]][_0xd9e6[300]][_0xd9e6[354]][_0xd9e6[76]](_0xd9e6[90], i[_0xd9e6[318]]() * s[_0xd9e6[351]][_0xd9e6[353]] + _0xd9e6[136]),
                    s[_0xd9e6[348]][_0xd9e6[352]] && s[_0xd9e6[348]][_0xd9e6[300]][_0xd9e6[354]][_0xd9e6[76]](_0xd9e6[89], i[_0xd9e6[319]]() * s[_0xd9e6[348]][_0xd9e6[353]] + _0xd9e6[136])
                }), r[_0xd9e6[355]](_0xd9e6[300] + o,
                function() {
                    r[_0xd9e6[319]](0)[_0xd9e6[318]](0)
                }), a[_0xd9e6[356]]) {
                    var l = function(e) {
                        _(e) ? s[_0xd9e6[348]][_0xd9e6[352]] && s[_0xd9e6[348]][_0xd9e6[357]](e) : s[_0xd9e6[351]][_0xd9e6[352]] && s[_0xd9e6[351]][_0xd9e6[357]](e)
                    };
                    r[_0xd9e6[355]](_0xd9e6[358] + o, l),
                    r[_0xd9e6[355]](_0xd9e6[357] + o, l),
                    t[_0xd9e6[331]] && r[_0xd9e6[355]](_0xd9e6[359] + o,
                    function(d) {
                        var x = d[_0xd9e6[361]][_0xd9e6[360]] && d[_0xd9e6[361]][_0xd9e6[360]][0] || d,
                        _ = {
                            pageX: x[_0xd9e6[362]],
                            pageY: x[_0xd9e6[363]]
                        },
                        t = {
                            left: i[_0xd9e6[318]](),
                            top: i[_0xd9e6[319]]()
                        };
                        e(document)[_0xd9e6[355]](_0xd9e6[364] + o,
                        function(e) {
                            var d = e[_0xd9e6[361]][_0xd9e6[365]] && e[_0xd9e6[361]][_0xd9e6[365]][0] || e;
                            i[_0xd9e6[318]](t[_0xd9e6[90]] + _[_0xd9e6[362]] - d[_0xd9e6[362]]),
                            i[_0xd9e6[319]](t[_0xd9e6[89]] + _[_0xd9e6[363]] - d[_0xd9e6[363]]),
                            e[_0xd9e6[366]]()
                        }),
                        e(document)[_0xd9e6[355]](_0xd9e6[367] + o,
                        function() {
                            e(document)[_0xd9e6[320]](o)
                        })
                    })
                }
                e[_0xd9e6[328]](a[_0xd9e6[368]]) && a[_0xd9e6[368]][_0xd9e6[329]](this, [i])
            }
            e[_0xd9e6[73]](s,
            function(d, t) {
                var n = null,
                r = 1,
                c = d === _0xd9e6[351] ? _0xd9e6[318] : _0xd9e6[319],
                l = a[_0xd9e6[369]],
                u = function() {
                    var e = i[c]();
                    i[c](e + l),
                    1 == r && e + l >= h && (e = i[c]()),
                    -1 == r && e + l <= h && (e = i[c]()),
                    i[c]() == e && n && n()
                },
                h = 0;
                t[_0xd9e6[300]] || (t[_0xd9e6[300]] = x._getScroll(a[_0xd9e6[300] + d])[_0xd9e6[85]](_0xd9e6[370] + d), a[_0xd9e6[371]] && t[_0xd9e6[300]][_0xd9e6[85]](_0xd9e6[372]), t[_0xd9e6[357]] = function(e) {
                    if (!t[_0xd9e6[352]] || d === _0xd9e6[351] && _(e)) return ! 0;
                    if (d === _0xd9e6[348] && !_(e)) return s[_0xd9e6[351]][_0xd9e6[357]](e),
                    !0;
                    var n = -1 * e[_0xd9e6[361]][_0xd9e6[373]] || e[_0xd9e6[361]][_0xd9e6[374]],
                    o = t[_0xd9e6[349]] - t[_0xd9e6[350]] - t[_0xd9e6[375]];
                    return (n > 0 && h < o || n < 0 && h > 0) && ((h += n) < 0 && (h = 0), h > o && (h = o), x[_0xd9e6[311]] = x[_0xd9e6[311]] || {},
                    x[_0xd9e6[311]][c] = h, setTimeout(function() {
                        x[_0xd9e6[311]] && (i[_0xd9e6[377]]()[_0xd9e6[92]](x[_0xd9e6[311]], 240, _0xd9e6[376],
                        function() {
                            h = i[c]()
                        }), x[_0xd9e6[311]] = null)
                    },
                    1)),
                    e[_0xd9e6[366]](),
                    !1
                },
                t[_0xd9e6[300]][_0xd9e6[355]](_0xd9e6[358] + o, t[_0xd9e6[357]])[_0xd9e6[355]](_0xd9e6[357] + o, t[_0xd9e6[357]])[_0xd9e6[355]](_0xd9e6[378] + o,
                function() {
                    h = i[c]()
                }), t[_0xd9e6[300]][_0xd9e6[102]](_0xd9e6[390])[_0xd9e6[355]](_0xd9e6[219] + o,
                function(_) {
                    if (1 != _[_0xd9e6[379]]) return ! 0;
                    r = 1;
                    var o = {
                        eventOffset: _[d === _0xd9e6[351] ? _0xd9e6[362] : _0xd9e6[363]],
                        maxScrollValue: t[_0xd9e6[349]] - t[_0xd9e6[350]] - t[_0xd9e6[375]],
                        scrollbarOffset: t[_0xd9e6[300]][_0xd9e6[354]][_0xd9e6[375]]()[d === _0xd9e6[351] ? _0xd9e6[90] : _0xd9e6[89]],
                        scrollbarSize: t[_0xd9e6[300]][_0xd9e6[354]][d === _0xd9e6[351] ? _0xd9e6[380] : _0xd9e6[381]]()
                    },
                    s = 0,
                    f = 0;
                    return e(this)[_0xd9e6[95]](_0xd9e6[382]) ? (r = e(this)[_0xd9e6[95]](_0xd9e6[383]) ? 1 : -1, l = a[_0xd9e6[369]] * r, h = r > 0 ? o[_0xd9e6[384]] : 0) : (r = o[_0xd9e6[385]] > o[_0xd9e6[386]] + o[_0xd9e6[387]] ? 1 : o[_0xd9e6[385]] < o[_0xd9e6[386]] ? -1 : 0, l = Math[_0xd9e6[132]](.75 * t[_0xd9e6[350]]) * r, h = o[_0xd9e6[385]] - o[_0xd9e6[386]] - (a[_0xd9e6[388]] ? 1 == r ? o[_0xd9e6[387]] : 0 : Math[_0xd9e6[132]](o[_0xd9e6[387]] / 2)), h = i[c]() + h / t[_0xd9e6[353]]),
                    x[_0xd9e6[311]] = x[_0xd9e6[311]] || {},
                    x[_0xd9e6[311]][c] = a[_0xd9e6[388]] ? i[c]() + l: h,
                    a[_0xd9e6[388]] && (n = function() {
                        h = i[c](),
                        clearInterval(f),
                        clearTimeout(s),
                        s = 0,
                        f = 0
                    },
                    s = setTimeout(function() {
                        f = setInterval(u, 40)
                    },
                    a[_0xd9e6[389]] + 100)),
                    setTimeout(function() {
                        x[_0xd9e6[311]] && (i[_0xd9e6[92]](x[_0xd9e6[311]], a[_0xd9e6[389]]), x[_0xd9e6[311]] = null)
                    },
                    1),
                    x._handleMouseDown(n, _)
                }), t[_0xd9e6[300]][_0xd9e6[354]][_0xd9e6[355]](_0xd9e6[219] + o,
                function(_) {
                    if (1 != _[_0xd9e6[379]]) return ! 0;
                    var n = _[d === _0xd9e6[351] ? _0xd9e6[362] : _0xd9e6[363]],
                    a = i[c]();
                    return t[_0xd9e6[300]][_0xd9e6[85]](_0xd9e6[391]),
                    e(document)[_0xd9e6[355]](_0xd9e6[392] + o,
                    function(e) {
                        var x = parseInt((e[d === _0xd9e6[351] ? _0xd9e6[362] : _0xd9e6[363]] - n) / t[_0xd9e6[353]], 10);
                        i[c](a + x)
                    }),
                    x._handleMouseDown(function() {
                        t[_0xd9e6[300]][_0xd9e6[70]](_0xd9e6[391]),
                        h = i[c]()
                    },
                    _)
                }))
            }),
            e[_0xd9e6[73]](s,
            function(e, d) {
                var x = _0xd9e6[393] + e + _0xd9e6[394],
                _ = e == _0xd9e6[351] ? s[_0xd9e6[348]] : s[_0xd9e6[351]];
                d[_0xd9e6[300]][_0xd9e6[70]](x),
                _[_0xd9e6[300]][_0xd9e6[70]](x),
                n[_0xd9e6[70]](x)
            }),
            e[_0xd9e6[73]](s,
            function(d, x) {
                e[_0xd9e6[310]](x, d == _0xd9e6[351] ? {
                    offset: parseInt(i[_0xd9e6[76]](_0xd9e6[90]), 10) || 0,
                    size: i[_0xd9e6[396]](_0xd9e6[395]),
                    visible: r[_0xd9e6[29]]()
                }: {
                    offset: parseInt(i[_0xd9e6[76]](_0xd9e6[89]), 10) || 0,
                    size: i[_0xd9e6[396]](_0xd9e6[397]),
                    visible: r[_0xd9e6[78]]()
                })
            }),
            this._updateScroll(_0xd9e6[351], this[_0xd9e6[312]]),
            this._updateScroll(_0xd9e6[348], this[_0xd9e6[313]]),
            e[_0xd9e6[328]](a[_0xd9e6[398]]) && a[_0xd9e6[398]][_0xd9e6[329]](this, [i]),
            e[_0xd9e6[73]](s,
            function(e, d) {
                var x = e === _0xd9e6[351] ? _0xd9e6[90] : _0xd9e6[89],
                _ = e === _0xd9e6[351] ? _0xd9e6[380] : _0xd9e6[381],
                t = e === _0xd9e6[351] ? _0xd9e6[29] : _0xd9e6[78],
                n = parseInt(i[_0xd9e6[76]](x), 10) || 0,
                o = d[_0xd9e6[349]],
                s = d[_0xd9e6[350]] + n,
                r = d[_0xd9e6[300]][_0xd9e6[349]][_]() + (parseInt(d[_0xd9e6[300]][_0xd9e6[349]][_0xd9e6[76]](x), 10) || 0);
                a[_0xd9e6[399]] && (d[_0xd9e6[387]] = parseInt(r * s / o, 10), d[_0xd9e6[300]][_0xd9e6[354]][_0xd9e6[76]](t, d[_0xd9e6[387]] + _0xd9e6[136])),
                d[_0xd9e6[387]] = d[_0xd9e6[300]][_0xd9e6[354]][_](),
                d[_0xd9e6[353]] = (r - d[_0xd9e6[387]]) / (o - s) || 1,
                d[_0xd9e6[347]] = o - s
            }),
            i[_0xd9e6[318]](c[_0xd9e6[318]])[_0xd9e6[319]](c[_0xd9e6[319]])[_0xd9e6[400]](_0xd9e6[300])
        },
        _getScroll: function(d) {
            var x = {
                advanced: [_0xd9e6[402], _0xd9e6[403], _0xd9e6[404], _0xd9e6[405], _0xd9e6[406], _0xd9e6[407], _0xd9e6[408], _0xd9e6[409], _0xd9e6[410], _0xd9e6[46], _0xd9e6[46], _0xd9e6[411], _0xd9e6[412], _0xd9e6[413], _0xd9e6[46], _0xd9e6[414], _0xd9e6[415], _0xd9e6[46], _0xd9e6[46], _0xd9e6[46]][_0xd9e6[401]](_0xd9e6[32]),
                simple: [_0xd9e6[402], _0xd9e6[406], _0xd9e6[407], _0xd9e6[416], _0xd9e6[417], _0xd9e6[46], _0xd9e6[46]][_0xd9e6[401]](_0xd9e6[32])
            };
            return x[d] && (d = x[d]),
            d || (d = x[_0xd9e6[418]]),
            d = typeof d == _0xd9e6[419] ? e(d)[_0xd9e6[169]](this[_0xd9e6[316]]) : e(d),
            e[_0xd9e6[310]](d, {
                bar: d[_0xd9e6[102]](_0xd9e6[420]),
                size: d[_0xd9e6[102]](_0xd9e6[421]),
                track: d[_0xd9e6[102]](_0xd9e6[422])
            }),
            d
        },
        _handleMouseDown: function(d, x) {
            var _ = this[_0xd9e6[304]];
            return e(document)[_0xd9e6[355]](_0xd9e6[423] + _,
            function() {
                e(document)[_0xd9e6[294]](_0xd9e6[11])[_0xd9e6[320]](_),
                d && d()
            }),
            e(document)[_0xd9e6[355]](_0xd9e6[424] + _,
            function(e) {
                return e[_0xd9e6[366]](),
                !1
            }),
            e(document)[_0xd9e6[355]](_0xd9e6[425] + _,
            function() {
                e(document)[_0xd9e6[294]](_0xd9e6[11])[_0xd9e6[320]](_),
                d && d()
            }),
            e(_0xd9e6[11])[_0xd9e6[355]](_0xd9e6[426] + _,
            function(e) {
                return e[_0xd9e6[366]](),
                !1
            }),
            x && x[_0xd9e6[366]](),
            !1
        },
        _updateScroll: function(d, x) {
            var _ = this[_0xd9e6[303]],
            i = this[_0xd9e6[330]] || _,
            n = _0xd9e6[393] + d + _0xd9e6[394],
            o = d === _0xd9e6[351] ? this[_0xd9e6[313]] : this[_0xd9e6[312]],
            a = parseInt(this[_0xd9e6[303]][_0xd9e6[76]](d === _0xd9e6[351] ? _0xd9e6[90] : _0xd9e6[89]), 10) || 0,
            s = this[_0xd9e6[316]],
            r = x[_0xd9e6[349]],
            c = x[_0xd9e6[350]] + a;
            x[_0xd9e6[352]] = r - c > 1,
            x[_0xd9e6[352]] ? (x[_0xd9e6[300]][_0xd9e6[85]](n), o[_0xd9e6[300]][_0xd9e6[85]](n), i[_0xd9e6[85]](n)) : (x[_0xd9e6[300]][_0xd9e6[70]](n), o[_0xd9e6[300]][_0xd9e6[70]](n), i[_0xd9e6[70]](n)),
            d === _0xd9e6[348] && (_[_0xd9e6[343]](_0xd9e6[342]) || r < c ? i[_0xd9e6[76]]({
                height: c + t[_0xd9e6[300]][_0xd9e6[78]] + _0xd9e6[136],
                "max-height": _0xd9e6[249]
            }) : i[_0xd9e6[76]]({
                "max-height": c + t[_0xd9e6[300]][_0xd9e6[78]] + _0xd9e6[136]
            })),
            x[_0xd9e6[349]] == _[_0xd9e6[396]](_0xd9e6[395]) && o[_0xd9e6[349]] == _[_0xd9e6[396]](_0xd9e6[397]) && x[_0xd9e6[350]] == s[_0xd9e6[29]]() && o[_0xd9e6[350]] == s[_0xd9e6[78]]() && x[_0xd9e6[375]] == (parseInt(_[_0xd9e6[76]](_0xd9e6[90]), 10) || 0) && o[_0xd9e6[375]] == (parseInt(_[_0xd9e6[76]](_0xd9e6[89]), 10) || 0) || (e[_0xd9e6[310]](this[_0xd9e6[312]], {
                offset: parseInt(_[_0xd9e6[76]](_0xd9e6[90]), 10) || 0,
                size: _[_0xd9e6[396]](_0xd9e6[395]),
                visible: s[_0xd9e6[29]]()
            }), e[_0xd9e6[310]](this[_0xd9e6[313]], {
                offset: parseInt(_[_0xd9e6[76]](_0xd9e6[89]), 10) || 0,
                size: this[_0xd9e6[303]][_0xd9e6[396]](_0xd9e6[397]),
                visible: s[_0xd9e6[78]]()
            }), this._updateScroll(d === _0xd9e6[351] ? _0xd9e6[348] : _0xd9e6[351], o))
        }
    };
    var o = n;
    e[_0xd9e6[427]][_0xd9e6[229]] = function(d, x) {
        return typeof d !== _0xd9e6[419] && (x = d, d = _0xd9e6[428]),
        typeof x === _0xd9e6[8] && (x = []),
        e[_0xd9e6[429]](x) || (x = [x]),
        this[_0xd9e6[431]](_0xd9e6[430])[_0xd9e6[73]](function() {
            var _ = e(this),
            i = _[_0xd9e6[307]](t[_0xd9e6[307]][_0xd9e6[314]]); (i || d === _0xd9e6[428]) && (i || (i = new o(_)), i[d] && i[d][_0xd9e6[329]](i, x))
        }),
        this
    },
    e[_0xd9e6[427]][_0xd9e6[229]][_0xd9e6[308]] = i;
    var a = function() {
        var e = 0,
        d = 0;
        return function(x) {
            var _, i, n, o, s, r, c;
            for (_ = 0; _ < t[_0xd9e6[295]][_0xd9e6[33]]; _++) i = (o = t[_0xd9e6[295]][_])[_0xd9e6[303]],
            n = o[_0xd9e6[308]],
            s = o[_0xd9e6[316]],
            r = o[_0xd9e6[312]],
            c = o[_0xd9e6[313]],
            (x || n[_0xd9e6[432]] && s && s[_0xd9e6[343]](_0xd9e6[433]) && (i[_0xd9e6[396]](_0xd9e6[395]) != r[_0xd9e6[349]] || i[_0xd9e6[396]](_0xd9e6[397]) != c[_0xd9e6[349]] || s[_0xd9e6[29]]() != r[_0xd9e6[350]] || s[_0xd9e6[78]]() != c[_0xd9e6[350]])) && (o[_0xd9e6[428]](), n[_0xd9e6[434]] && (window[_0xd9e6[435]] && console[_0xd9e6[94]]({
                scrollHeight: i[_0xd9e6[396]](_0xd9e6[397]) + _0xd9e6[15] + o[_0xd9e6[313]][_0xd9e6[349]],
                scrollWidth: i[_0xd9e6[396]](_0xd9e6[395]) + _0xd9e6[15] + o[_0xd9e6[312]][_0xd9e6[349]],
                visibleHeight: s[_0xd9e6[78]]() + _0xd9e6[15] + o[_0xd9e6[313]][_0xd9e6[350]],
                visibleWidth: s[_0xd9e6[29]]() + _0xd9e6[15] + o[_0xd9e6[312]][_0xd9e6[350]]
            },
            !0), d++));
            clearTimeout(e),
            e = setTimeout(a, 300)
        }
    } ();
    window[_0xd9e6[446]] &&
    function(e) {
        e[_0xd9e6[456]](_0xd9e6[448], [])[_0xd9e6[455]](_0xd9e6[448],
        function() {
            var d = i;
            return {
                setOptions: function(x) {
                    e[_0xd9e6[310]](d, x)
                },
                $get: function() {
                    return {
                        options: e[_0xd9e6[454]](d)
                    }
                }
            }
        })[_0xd9e6[453]](_0xd9e6[447], [_0xd9e6[448], _0xd9e6[449],
        function(e, d) {
            return {
                restrict: _0xd9e6[450],
                link: function(x, _, t) {
                    var i = d(t[_0xd9e6[447]])(x);
                    _[_0xd9e6[229]](i || e[_0xd9e6[308]])[_0xd9e6[355]](_0xd9e6[451],
                    function() {
                        _[_0xd9e6[229]](_0xd9e6[452])
                    })
                }
            }
        }])
    } (window[_0xd9e6[446]])
}),
_0xd9e6[290],
_0xd9e6[461] != typeof window[_0xd9e6[462]] && (window[_0xd9e6[462]] = {}),
window[_0xd9e6[462]][_0xd9e6[463]] = {
    programNoLongerBeingMonitored: !1,
    timeOfFirstCallToShouldStopLoop: 0,
    _loopExits: {},
    _loopTimers: {},
    START_MONITORING_AFTER: 2e3,
    STOP_ALL_MONITORING_TIMEOUT: 5e3,
    MAX_TIME_IN_LOOP_WO_EXIT: 2200,
    exitedLoop: function(e) {
        this[_0xd9e6[464]][e] = !0
    },
    shouldStopLoop: function(e) {
        if (this[_0xd9e6[465]]) return ! 0;
        if (this[_0xd9e6[466]]) return ! 1;
        if (this[_0xd9e6[464]][e]) return ! 1;
        var d = this._getTime();
        if (0 === this[_0xd9e6[467]]) return this[_0xd9e6[467]] = d,
        !1;
        var x = d - this[_0xd9e6[467]];
        if (x < this[_0xd9e6[468]]) return ! 1;
        if (x > this[_0xd9e6[469]]) return this[_0xd9e6[466]] = !0,
        !1;
        try {
            this._checkOnInfiniteLoop(e, d)
        } catch(e) {
            return this._sendErrorMessageToEditor(),
            this[_0xd9e6[465]] = !0,
            !0
        }
        return ! 1
    },
    _sendErrorMessageToEditor: function() {
        try {
            if (this._shouldPostMessage()) {
                var e = {
                    action: _0xd9e6[470],
                    line: this._findAroundLineNumber()
                };
                parent[_0xd9e6[473]](JSON[_0xd9e6[471]](e), _0xd9e6[472])
            } else this._throwAnErrorToStopPen()
        } catch(e) {
            this._throwAnErrorToStopPen()
        }
    },
    _shouldPostMessage: function() {
        return document[_0xd9e6[158]][_0xd9e6[157]][_0xd9e6[474]](/boomerang/)
    },
    _throwAnErrorToStopPen: function() {
        throw _0xd9e6[475]
    },
    _findAroundLineNumber: function() {
        var e = new Error,
        d = 0;
        if (e[_0xd9e6[476]]) {
            var x = e[_0xd9e6[476]][_0xd9e6[474]](/boomerang\S+:(\d+):\d+/);
            x && (d = x[1])
        }
        return d
    },
    _checkOnInfiniteLoop: function(e, d) {
        if (!this[_0xd9e6[477]][e]) return this[_0xd9e6[477]][e] = d,
        !1;
        if (d - this[_0xd9e6[477]][e] > this[_0xd9e6[478]]) throw _0xd9e6[479] + e
    },
    _getTime: function() {
        return + new Date
    }
},
window[_0xd9e6[462]][_0xd9e6[480]] = function(e) {
    var d = window[_0xd9e6[462]][_0xd9e6[463]][_0xd9e6[481]](e);
    return ! 0 === d && console[_0xd9e6[483]](_0xd9e6[482]),
    d
},
window[_0xd9e6[462]][_0xd9e6[484]] = function(e) {
    window[_0xd9e6[462]][_0xd9e6[463]][_0xd9e6[484]](e)
},
particlesJS(_0xd9e6[485], {
    particles: {
        number: {
            value: 204,
            density: {
                enable: !0,
                value_area: 473.4885849793636
            }
        },
        color: {
            value: _0xd9e6[486]
        },
        shape: {
            type: _0xd9e6[487],
            stroke: {
                width: 0,
                color: _0xd9e6[488]
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: _0xd9e6[489],
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 1,
            random: !1,
            anim: {
                enable: !1,
                speed: 1,
                opacity_min: .1,
                sync: !1
            }
        },
        size: {
            value: 3.945738208161363,
            random: !0,
            anim: {
                enable: !1,
                speed: 40,
                size_min: .1,
                sync: !1
            }
        },
        line_linked: {
            enable: !0,
            distance: 94.69771699587272,
            color: _0xd9e6[486],
            opacity: 1,
            width: 2
        },
        move: {
            enable: !0,
            speed: 6,
            direction: _0xd9e6[249],
            random: !1,
            straight: !1,
            out_mode: _0xd9e6[490],
            bounce: !1,
            attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: _0xd9e6[491],
        events: {
            onhover: {
                enable: !0,
                mode: _0xd9e6[492]
            },
            onclick: {
                enable: !0,
                mode: _0xd9e6[493]
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 50,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 50,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 50,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0
});
var message = _0xd9e6[494];
document[_0xd9e6[496]] ? (document[_0xd9e6[497]](Event.MOUSEDOWN), document[_0xd9e6[498]] = clickNS) : (document[_0xd9e6[499]] = clickNS, document[_0xd9e6[500]] = clickIE),
document[_0xd9e6[500]] = new Function(_0xd9e6[501]);
var c = document[_0xd9e6[246]](_0xd9e6[502]),
ctx = c[_0xd9e6[504]](_0xd9e6[503]);
c[_0xd9e6[78]] = window[_0xd9e6[79]],
c[_0xd9e6[29]] = window[_0xd9e6[75]];
var chinese = _0xd9e6[505];
chinese = chinese[_0xd9e6[276]](_0xd9e6[32]);
for (var font_size = 25,
columns = c[_0xd9e6[29]] / font_size, drops = [], x = 0; x < columns; x++) drops[x] = 1;
setInterval(draw, 33),
function(e) {
    function d(e) {
        this[_0xd9e6[308]] = _[_0xd9e6[310]]({},
        d[_0xd9e6[516]], e),
        this[_0xd9e6[517]]()
    }
    function x(e) {
        this[_0xd9e6[308]] = _[_0xd9e6[310]]({},
        x[_0xd9e6[525]], e),
        this[_0xd9e6[526]] = [],
        this[_0xd9e6[527]] = 1,
        this[_0xd9e6[528]] = 0,
        this[_0xd9e6[529]] = 0,
        this[_0xd9e6[392]] = this[_0xd9e6[392]][_0xd9e6[530]](this),
        this[_0xd9e6[531]] = this[_0xd9e6[531]][_0xd9e6[530]](this)
    }
    Date[_0xd9e6[513]] = Date[_0xd9e6[513]] ||
    function() {
        return (new Date)[_0xd9e6[514]]()
    };
    var _ = {
        extend: function() {
            arguments[0] = arguments[0] || {};
            for (var e = 1; e < arguments[_0xd9e6[33]]; e++) for (var d in arguments[e]) arguments[e][_0xd9e6[515]](d) && (typeof arguments[e][d] === _0xd9e6[461] ? arguments[e][d] instanceof Array ? arguments[0][d] = arguments[e][d] : arguments[0][d] = _[_0xd9e6[310]](arguments[0][d], arguments[e][d]) : arguments[0][d] = arguments[e][d]);
            return arguments[0]
        },
        binarySearch: function(e, d) {
            for (var x = 0,
            _ = e[_0xd9e6[33]]; x < _;) {
                var t = x + _ >> 1;
                d < e[t][0] ? _ = t: x = t + 1
            }
            return x
        }
    };
    d[_0xd9e6[516]] = {
        resetBoundsInterval: 3e3,
        resetBounds: !0
    },
    d[_0xd9e6[315]][_0xd9e6[517]] = function() {
        this[_0xd9e6[307]] = [],
        this[_0xd9e6[518]] = Number[_0xd9e6[519]],
        this[_0xd9e6[520]] = Number[_0xd9e6[519]]
    },
    d[_0xd9e6[315]][_0xd9e6[521]] = function() {
        if (this[_0xd9e6[307]][_0xd9e6[33]]) {
            this[_0xd9e6[518]] = this[_0xd9e6[307]][0][1],
            this[_0xd9e6[520]] = this[_0xd9e6[307]][0][1];
            for (var e = 1; e < this[_0xd9e6[307]][_0xd9e6[33]]; e++) {
                var d = this[_0xd9e6[307]][e][1];
                d > this[_0xd9e6[518]] && (this[_0xd9e6[518]] = d),
                d < this[_0xd9e6[520]] && (this[_0xd9e6[520]] = d)
            }
        } else this[_0xd9e6[518]] = Number[_0xd9e6[519]],
        this[_0xd9e6[520]] = Number[_0xd9e6[519]]
    },
    d[_0xd9e6[315]][_0xd9e6[196]] = function(e, d, x) {
        for (var _ = this[_0xd9e6[307]][_0xd9e6[33]] - 1; _ >= 0 && this[_0xd9e6[307]][_][0] > e;) _--; - 1 === _ ? this[_0xd9e6[307]][_0xd9e6[299]](0, 0, [e, d]) : this[_0xd9e6[307]][_0xd9e6[33]] > 0 && this[_0xd9e6[307]][_][0] === e ? x ? (this[_0xd9e6[307]][_][1] += d, d = this[_0xd9e6[307]][_][1]) : this[_0xd9e6[307]][_][1] = d: _ < this[_0xd9e6[307]][_0xd9e6[33]] - 1 ? this[_0xd9e6[307]][_0xd9e6[299]](_ + 1, 0, [e, d]) : this[_0xd9e6[307]][_0xd9e6[296]]([e, d]),
        this[_0xd9e6[518]] = isNaN(this[_0xd9e6[518]]) ? d: Math[_0xd9e6[522]](this[_0xd9e6[518]], d),
        this[_0xd9e6[520]] = isNaN(this[_0xd9e6[520]]) ? d: Math[_0xd9e6[523]](this[_0xd9e6[520]], d)
    },
    d[_0xd9e6[315]][_0xd9e6[524]] = function(e, d) {
        for (var x = 0; this[_0xd9e6[307]][_0xd9e6[33]] - x >= d && this[_0xd9e6[307]][x + 1][0] < e;) x++;
        0 !== x && this[_0xd9e6[307]][_0xd9e6[299]](0, x)
    },
    x[_0xd9e6[532]] = function(e, d) {
        for (var _ = [(this[_0xd9e6[308]][_0xd9e6[533]] || x[_0xd9e6[534]])(new Date(e))], t = 0; t < d[_0xd9e6[33]]; ++t) _[_0xd9e6[296]](_0xd9e6[535] + d[t][_0xd9e6[537]][_0xd9e6[308]][_0xd9e6[536]] + _0xd9e6[538] + this[_0xd9e6[308]][_0xd9e6[542]](d[t][_0xd9e6[539]], this[_0xd9e6[308]][_0xd9e6[541]][_0xd9e6[540]]) + _0xd9e6[23]);
        return _[_0xd9e6[401]](_0xd9e6[543])
    },
    x[_0xd9e6[525]] = {
        millisPerPixel: 20,
        enableDpiScaling: !0,
        yMinFormatter: function(e, d) {
            return parseFloat(e)[_0xd9e6[544]](d)
        },
        yMaxFormatter: function(e, d) {
            return parseFloat(e)[_0xd9e6[544]](d)
        },
        maxValueScale: 1,
        minValueScale: 1,
        interpolation: _0xd9e6[545],
        scaleSmoothing: .125,
        maxDataSetLength: 2,
        scrollBackwards: !1,
        grid: {
            fillStyle: _0xd9e6[488],
            strokeStyle: _0xd9e6[546],
            lineWidth: 1,
            sharpLines: !1,
            millisPerLine: 1e3,
            verticalSections: 2,
            borderVisible: !0
        },
        labels: {
            fillStyle: _0xd9e6[547],
            disabled: !1,
            fontSize: 10,
            fontFamily: _0xd9e6[548],
            precision: 2
        },
        horizontalLines: [],
        tooltip: !1,
        tooltipLine: {
            lineWidth: 1,
            strokeStyle: _0xd9e6[549]
        },
        tooltipFormatter: x[_0xd9e6[532]],
        responsive: !1,
        limitFPS: 0
    },
    x[_0xd9e6[550]] = function() {
        return {
            requestAnimationFrame: function(e, d) {
                return (window[_0xd9e6[551]] || window[_0xd9e6[552]] || window[_0xd9e6[553]] || window[_0xd9e6[554]] || window[_0xd9e6[555]] ||
                function(e) {
                    return window[_0xd9e6[556]](function() {
                        e(Date[_0xd9e6[513]]())
                    },
                    16)
                })[_0xd9e6[6]](window, e, d)
            },
            cancelAnimationFrame: function(e) {
                return (window[_0xd9e6[557]] ||
                function(e) {
                    clearTimeout(e)
                })[_0xd9e6[6]](window, e)
            }
        }
    } (),
    x[_0xd9e6[558]] = {
        lineWidth: 1,
        strokeStyle: _0xd9e6[547]
    },
    x[_0xd9e6[315]][_0xd9e6[559]] = function(e, d) {
        this[_0xd9e6[526]][_0xd9e6[296]]({
            timeSeries: e,
            options: _[_0xd9e6[310]]({},
            x[_0xd9e6[558]], d)
        }),
        e[_0xd9e6[308]][_0xd9e6[521]] && e[_0xd9e6[308]][_0xd9e6[560]] > 0 && (e[_0xd9e6[561]] = setInterval(function() {
            e[_0xd9e6[521]]()
        },
        e[_0xd9e6[308]][_0xd9e6[560]]))
    },
    x[_0xd9e6[315]][_0xd9e6[562]] = function(e) {
        for (var d = this[_0xd9e6[526]][_0xd9e6[33]], x = 0; x < d; x++) if (this[_0xd9e6[526]][x][_0xd9e6[563]] === e) {
            this[_0xd9e6[526]][_0xd9e6[299]](x, 1);
            break
        }
        e[_0xd9e6[561]] && clearInterval(e[_0xd9e6[561]])
    },
    x[_0xd9e6[315]][_0xd9e6[564]] = function(e) {
        for (var d = this[_0xd9e6[526]][_0xd9e6[33]], x = 0; x < d; x++) if (this[_0xd9e6[526]][x][_0xd9e6[563]] === e) return this[_0xd9e6[526]][x][_0xd9e6[308]]
    },
    x[_0xd9e6[315]][_0xd9e6[565]] = function(e) {
        for (var d = this[_0xd9e6[526]][_0xd9e6[33]], x = 0; x < d; x++) if (this[_0xd9e6[526]][x][_0xd9e6[563]] === e) {
            var _ = this[_0xd9e6[526]][_0xd9e6[299]](x, 1);
            this[_0xd9e6[526]][_0xd9e6[296]](_[0]);
            break
        }
    },
    x[_0xd9e6[315]][_0xd9e6[566]] = function(e, d) {
        this[_0xd9e6[491]] = e,
        this[_0xd9e6[567]] = d,
        this[_0xd9e6[181]]()
    },
    x[_0xd9e6[315]][_0xd9e6[568]] = function() {
        return this[_0xd9e6[569]] || (this[_0xd9e6[569]] = document[_0xd9e6[570]](_0xd9e6[324]), this[_0xd9e6[569]][_0xd9e6[571]] = _0xd9e6[572], this[_0xd9e6[569]][_0xd9e6[248]][_0xd9e6[336]] = _0xd9e6[337], this[_0xd9e6[569]][_0xd9e6[248]][_0xd9e6[247]] = _0xd9e6[249], document[_0xd9e6[11]][_0xd9e6[573]](this[_0xd9e6[569]])),
        this[_0xd9e6[569]]
    },
    x[_0xd9e6[315]][_0xd9e6[574]] = function() {
        var e = this[_0xd9e6[568]]();
        if (this[_0xd9e6[575]] && this[_0xd9e6[308]][_0xd9e6[576]]) {
            var d = this[_0xd9e6[529]] - (this[_0xd9e6[567]] || 0);
            d -= d % this[_0xd9e6[308]][_0xd9e6[577]];
            for (var x = this[_0xd9e6[308]][_0xd9e6[578]] ? d - this[_0xd9e6[579]] * this[_0xd9e6[308]][_0xd9e6[577]] : d - (this[_0xd9e6[491]][_0xd9e6[580]] - this[_0xd9e6[579]]) * this[_0xd9e6[308]][_0xd9e6[577]], t = [], i = 0; i < this[_0xd9e6[526]][_0xd9e6[33]]; i++) {
                var n = this[_0xd9e6[526]][i][_0xd9e6[563]],
                o = _[_0xd9e6[581]](n[_0xd9e6[307]], x);
                o > 0 && o < n[_0xd9e6[307]][_0xd9e6[33]] && t[_0xd9e6[296]]({
                    series: this[_0xd9e6[526]][i],
                    index: o,
                    value: n[_0xd9e6[307]][o][1]
                })
            }
            t[_0xd9e6[33]] ? (e[_0xd9e6[250]] = this[_0xd9e6[308]][_0xd9e6[532]][_0xd9e6[6]](this, x, t), e[_0xd9e6[248]][_0xd9e6[247]] = _0xd9e6[582]) : e[_0xd9e6[248]][_0xd9e6[247]] = _0xd9e6[249]
        } else e[_0xd9e6[248]][_0xd9e6[247]] = _0xd9e6[249]
    },
    x[_0xd9e6[315]][_0xd9e6[392]] = function(e) {
        this[_0xd9e6[575]] = !0,
        this[_0xd9e6[579]] = e[_0xd9e6[583]],
        this[_0xd9e6[584]] = e[_0xd9e6[585]],
        this[_0xd9e6[586]] = e[_0xd9e6[362]],
        this[_0xd9e6[587]] = e[_0xd9e6[363]];
        var d = this[_0xd9e6[568]]();
        d[_0xd9e6[248]][_0xd9e6[89]] = Math[_0xd9e6[132]](this[_0xd9e6[587]]) + _0xd9e6[136],
        d[_0xd9e6[248]][_0xd9e6[90]] = Math[_0xd9e6[132]](this[_0xd9e6[586]]) + _0xd9e6[136],
        this[_0xd9e6[574]]()
    },
    x[_0xd9e6[315]][_0xd9e6[531]] = function() {
        this[_0xd9e6[575]] = !1,
        this[_0xd9e6[579]] = this[_0xd9e6[584]] = -1,
        x[_0xd9e6[569]] && (x[_0xd9e6[569]][_0xd9e6[248]][_0xd9e6[247]] = _0xd9e6[249])
    },
    x[_0xd9e6[315]][_0xd9e6[302]] = function() {
        var e, d, x = this[_0xd9e6[308]][_0xd9e6[588]] && window ? window[_0xd9e6[589]] : 1;
        this[_0xd9e6[308]][_0xd9e6[590]] ? (e = this[_0xd9e6[491]][_0xd9e6[580]], d = this[_0xd9e6[491]][_0xd9e6[244]], e !== this[_0xd9e6[591]] && (this[_0xd9e6[591]] = e, this[_0xd9e6[491]][_0xd9e6[592]](_0xd9e6[29], Math[_0xd9e6[1]](e * x).toString())), d !== this[_0xd9e6[593]] && (this[_0xd9e6[593]] = d, this[_0xd9e6[491]][_0xd9e6[592]](_0xd9e6[78], Math[_0xd9e6[1]](d * x).toString()))) : 1 !== x && (e = parseInt(this[_0xd9e6[491]][_0xd9e6[594]](_0xd9e6[29])), d = parseInt(this[_0xd9e6[491]][_0xd9e6[594]](_0xd9e6[78])), this[_0xd9e6[595]] && Math[_0xd9e6[1]](this[_0xd9e6[595]] * x) === e || (this[_0xd9e6[595]] = e, this[_0xd9e6[491]][_0xd9e6[592]](_0xd9e6[29], Math[_0xd9e6[1]](e * x).toString()), this[_0xd9e6[491]][_0xd9e6[248]][_0xd9e6[29]] = e + _0xd9e6[136], this[_0xd9e6[491]][_0xd9e6[504]](_0xd9e6[503])[_0xd9e6[596]](x, x)), this[_0xd9e6[597]] && Math[_0xd9e6[1]](this[_0xd9e6[597]] * x) === d || (this[_0xd9e6[597]] = d, this[_0xd9e6[491]][_0xd9e6[592]](_0xd9e6[78], Math[_0xd9e6[1]](d * x).toString()), this[_0xd9e6[491]][_0xd9e6[248]][_0xd9e6[78]] = d + _0xd9e6[136], this[_0xd9e6[491]][_0xd9e6[504]](_0xd9e6[503])[_0xd9e6[596]](x, x)))
    },
    x[_0xd9e6[315]][_0xd9e6[181]] = function() {
        if (!this[_0xd9e6[598]]) {
            this[_0xd9e6[491]][_0xd9e6[599]](_0xd9e6[392], this[_0xd9e6[392]]),
            this[_0xd9e6[491]][_0xd9e6[599]](_0xd9e6[531], this[_0xd9e6[531]]);
            var e = function() {
                this[_0xd9e6[598]] = x[_0xd9e6[550]][_0xd9e6[551]](function() {
                    this[_0xd9e6[600]](),
                    e()
                } [_0xd9e6[530]](this))
            } [_0xd9e6[530]](this);
            e()
        }
    },
    x[_0xd9e6[315]][_0xd9e6[377]] = function() {
        this[_0xd9e6[598]] && (x[_0xd9e6[550]][_0xd9e6[557]](this[_0xd9e6[598]]), delete this[_0xd9e6[598]], this[_0xd9e6[491]][_0xd9e6[601]](_0xd9e6[392], this[_0xd9e6[392]]), this[_0xd9e6[491]][_0xd9e6[601]](_0xd9e6[531], this[_0xd9e6[531]]))
    },
    x[_0xd9e6[315]][_0xd9e6[602]] = function() {
        for (var e = this[_0xd9e6[308]], d = Number[_0xd9e6[519]], x = Number[_0xd9e6[519]], _ = 0; _ < this[_0xd9e6[526]][_0xd9e6[33]]; _++) {
            var t = this[_0xd9e6[526]][_][_0xd9e6[563]];
            isNaN(t[_0xd9e6[518]]) || (d = isNaN(d) ? t[_0xd9e6[518]] : Math[_0xd9e6[522]](d, t[_0xd9e6[518]])),
            isNaN(t[_0xd9e6[520]]) || (x = isNaN(x) ? t[_0xd9e6[520]] : Math[_0xd9e6[523]](x, t[_0xd9e6[520]]))
        }
        if (null != e[_0xd9e6[518]] ? d = e[_0xd9e6[518]] : d *= e[_0xd9e6[603]], null != e[_0xd9e6[520]] ? x = e[_0xd9e6[520]] : x -= Math[_0xd9e6[155]](x * e[_0xd9e6[604]] - x), this[_0xd9e6[308]][_0xd9e6[605]]) {
            var i = this[_0xd9e6[308]][_0xd9e6[605]]({
                min: x,
                max: d
            });
            x = i[_0xd9e6[523]],
            d = i[_0xd9e6[522]]
        }
        if (!isNaN(d) && !isNaN(x)) {
            var n = d - x - this[_0xd9e6[527]],
            o = x - this[_0xd9e6[528]];
            this[_0xd9e6[606]] = Math[_0xd9e6[155]](n) > .1 || Math[_0xd9e6[155]](o) > .1,
            this[_0xd9e6[527]] += e[_0xd9e6[607]] * n,
            this[_0xd9e6[528]] += e[_0xd9e6[607]] * o
        }
        this[_0xd9e6[608]] = {
            min: x,
            max: d
        }
    },
    x[_0xd9e6[315]][_0xd9e6[600]] = function(e, d) {
        var x = Date[_0xd9e6[513]]();
        if (! (this[_0xd9e6[308]][_0xd9e6[609]] > 0 && x - this[_0xd9e6[529]] < 1e3 / this[_0xd9e6[308]][_0xd9e6[609]])) {
            if (!this[_0xd9e6[606]]) {
                var _ = Math[_0xd9e6[523]](1e3 / 6, this[_0xd9e6[308]][_0xd9e6[577]]);
                if (x - this[_0xd9e6[529]] < _) return
            }
            this[_0xd9e6[302]](),
            this[_0xd9e6[574]](),
            this[_0xd9e6[529]] = x,
            e = e || this[_0xd9e6[491]],
            d = d || x - (this[_0xd9e6[567]] || 0),
            d -= d % this[_0xd9e6[308]][_0xd9e6[577]];
            var t = e[_0xd9e6[504]](_0xd9e6[503]),
            i = this[_0xd9e6[308]],
            n = {
                top: 0,
                left: 0,
                width: e[_0xd9e6[610]],
                height: e[_0xd9e6[611]]
            },
            o = d - n[_0xd9e6[29]] * i[_0xd9e6[577]],
            a = function(e) {
                var d = e - this[_0xd9e6[528]];
                return 0 === this[_0xd9e6[527]] ? n[_0xd9e6[78]] : n[_0xd9e6[78]] - Math[_0xd9e6[132]](d / this[_0xd9e6[527]] * n[_0xd9e6[78]])
            } [_0xd9e6[530]](this),
            s = function(e) {
                return i[_0xd9e6[578]] ? Math[_0xd9e6[132]]((d - e) / i[_0xd9e6[577]]) : Math[_0xd9e6[132]](n[_0xd9e6[29]] - (d - e) / i[_0xd9e6[577]])
            };
            if (this[_0xd9e6[602]](), t[_0xd9e6[510]] = i[_0xd9e6[541]][_0xd9e6[612]] + _0xd9e6[613] + i[_0xd9e6[541]][_0xd9e6[614]], t[_0xd9e6[615]](), t[_0xd9e6[616]](n[_0xd9e6[90]], n[_0xd9e6[89]]), t[_0xd9e6[617]](), t[_0xd9e6[618]](0, 0, n[_0xd9e6[29]], n[_0xd9e6[78]]), t[_0xd9e6[619]](), t[_0xd9e6[615]](), t[_0xd9e6[506]] = i[_0xd9e6[620]][_0xd9e6[506]], t[_0xd9e6[621]](0, 0, n[_0xd9e6[29]], n[_0xd9e6[78]]), t[_0xd9e6[508]](0, 0, n[_0xd9e6[29]], n[_0xd9e6[78]]), t[_0xd9e6[622]](), t[_0xd9e6[615]](), t[_0xd9e6[623]] = i[_0xd9e6[620]][_0xd9e6[623]], t[_0xd9e6[536]] = i[_0xd9e6[620]][_0xd9e6[536]], i[_0xd9e6[620]][_0xd9e6[624]] > 0) {
                t[_0xd9e6[617]]();
                for (P = d - d % i[_0xd9e6[620]][_0xd9e6[624]]; P >= o; P -= i[_0xd9e6[620]][_0xd9e6[624]]) {
                    I = s(P);
                    i[_0xd9e6[620]][_0xd9e6[625]] && (I -= .5),
                    t[_0xd9e6[626]](I, 0),
                    t[_0xd9e6[627]](I, n[_0xd9e6[78]])
                }
                t[_0xd9e6[628]](),
                t[_0xd9e6[629]]()
            }
            for (var r = 1; r < i[_0xd9e6[620]][_0xd9e6[630]]; r++) {
                var c = Math[_0xd9e6[132]](r * n[_0xd9e6[78]] / i[_0xd9e6[620]][_0xd9e6[630]]);
                i[_0xd9e6[620]][_0xd9e6[625]] && (c -= .5),
                t[_0xd9e6[617]](),
                t[_0xd9e6[626]](0, c),
                t[_0xd9e6[627]](n[_0xd9e6[29]], c),
                t[_0xd9e6[628]](),
                t[_0xd9e6[629]]()
            }
            if (i[_0xd9e6[620]][_0xd9e6[631]] && (t[_0xd9e6[617]](), t[_0xd9e6[632]](0, 0, n[_0xd9e6[29]], n[_0xd9e6[78]]), t[_0xd9e6[629]]()), t[_0xd9e6[622]](), i[_0xd9e6[633]] && i[_0xd9e6[633]][_0xd9e6[33]]) for (var l = 0; l < i[_0xd9e6[633]][_0xd9e6[33]]; l++) {
                var u = i[_0xd9e6[633]][l],
                h = Math[_0xd9e6[132]](a(u[_0xd9e6[539]])) - .5;
                t[_0xd9e6[536]] = u[_0xd9e6[634]] || _0xd9e6[547],
                t[_0xd9e6[623]] = u[_0xd9e6[623]] || 1,
                t[_0xd9e6[617]](),
                t[_0xd9e6[626]](0, h),
                t[_0xd9e6[627]](n[_0xd9e6[29]], h),
                t[_0xd9e6[628]](),
                t[_0xd9e6[629]]()
            }
            for (var f = 0; f < this[_0xd9e6[526]][_0xd9e6[33]]; f++) {
                t[_0xd9e6[615]]();
                var m = this[_0xd9e6[526]][f][_0xd9e6[563]],
                p = m[_0xd9e6[307]],
                g = this[_0xd9e6[526]][f][_0xd9e6[308]];
                m[_0xd9e6[524]](o, i[_0xd9e6[635]]),
                t[_0xd9e6[623]] = g[_0xd9e6[623]],
                t[_0xd9e6[536]] = g[_0xd9e6[536]],
                t[_0xd9e6[617]]();
                for (var w = 0,
                v = 0,
                b = 0,
                $ = 0; $ < p[_0xd9e6[33]] && 1 !== p[_0xd9e6[33]]; $++) {
                    var k = s(p[$][0]),
                    y = a(p[$][1]);
                    if (0 === $) w = k,
                    t[_0xd9e6[626]](k, y);
                    else switch (i[_0xd9e6[639]]) {
                    case _0xd9e6[376]:
                    case _0xd9e6[636]:
                        t[_0xd9e6[627]](k, y);
                        break;
                    case _0xd9e6[545]:
                    default:
                        t[_0xd9e6[637]](Math[_0xd9e6[132]]((v + k) / 2), b, Math[_0xd9e6[132]](v + k) / 2, y, k, y);
                        break;
                    case _0xd9e6[638]:
                        t[_0xd9e6[627]](k, b),
                        t[_0xd9e6[627]](k, y)
                    }
                    v = k,
                    b = y
                }
                p[_0xd9e6[33]] > 1 && (g[_0xd9e6[506]] && (t[_0xd9e6[627]](n[_0xd9e6[29]] + g[_0xd9e6[623]] + 1, b), t[_0xd9e6[627]](n[_0xd9e6[29]] + g[_0xd9e6[623]] + 1, n[_0xd9e6[78]] + g[_0xd9e6[623]] + 1), t[_0xd9e6[627]](w, n[_0xd9e6[78]] + g[_0xd9e6[623]]), t[_0xd9e6[506]] = g[_0xd9e6[506]], t[_0xd9e6[640]]()), g[_0xd9e6[536]] && g[_0xd9e6[536]] !== _0xd9e6[249] && t[_0xd9e6[628]](), t[_0xd9e6[629]]()),
                t[_0xd9e6[622]]()
            }
            if (i[_0xd9e6[576]] && this[_0xd9e6[579]] >= 0 && (t[_0xd9e6[623]] = i[_0xd9e6[641]][_0xd9e6[623]], t[_0xd9e6[536]] = i[_0xd9e6[641]][_0xd9e6[536]], t[_0xd9e6[617]](), t[_0xd9e6[626]](this[_0xd9e6[579]], 0), t[_0xd9e6[627]](this[_0xd9e6[579]], n[_0xd9e6[78]]), t[_0xd9e6[629]](), t[_0xd9e6[628]](), this[_0xd9e6[574]]()), !i[_0xd9e6[541]][_0xd9e6[642]] && !isNaN(this[_0xd9e6[608]][_0xd9e6[523]]) && !isNaN(this[_0xd9e6[608]][_0xd9e6[522]])) {
                var S = i[_0xd9e6[542]](this[_0xd9e6[608]][_0xd9e6[522]], i[_0xd9e6[541]][_0xd9e6[540]]),
                T = i[_0xd9e6[643]](this[_0xd9e6[608]][_0xd9e6[523]], i[_0xd9e6[541]][_0xd9e6[540]]),
                M = i[_0xd9e6[578]] ? 0 : n[_0xd9e6[29]] - t[_0xd9e6[644]](S)[_0xd9e6[29]] - 2,
                A = i[_0xd9e6[578]] ? 0 : n[_0xd9e6[29]] - t[_0xd9e6[644]](T)[_0xd9e6[29]] - 2;
                t[_0xd9e6[506]] = i[_0xd9e6[541]][_0xd9e6[506]],
                t[_0xd9e6[512]](S, M, i[_0xd9e6[541]][_0xd9e6[612]]),
                t[_0xd9e6[512]](T, A, n[_0xd9e6[78]] - 2)
            }
            if (i[_0xd9e6[533]] && i[_0xd9e6[620]][_0xd9e6[624]] > 0) for (var z = i[_0xd9e6[578]] ? t[_0xd9e6[644]](T)[_0xd9e6[29]] : n[_0xd9e6[29]] - t[_0xd9e6[644]](T)[_0xd9e6[29]] + 4, P = d - d % i[_0xd9e6[620]][_0xd9e6[624]]; P >= o; P -= i[_0xd9e6[620]][_0xd9e6[624]]) {
                var I = s(P);
                if (!i[_0xd9e6[578]] && I < z || i[_0xd9e6[578]] && I > z) {
                    var R = new Date(P),
                    C = i[_0xd9e6[533]](R),
                    N = t[_0xd9e6[644]](C)[_0xd9e6[29]];
                    z = i[_0xd9e6[578]] ? I + N + 2 : I - N - 2,
                    t[_0xd9e6[506]] = i[_0xd9e6[541]][_0xd9e6[506]],
                    i[_0xd9e6[578]] ? t[_0xd9e6[512]](C, I, n[_0xd9e6[78]] - 2) : t[_0xd9e6[512]](C, I - N, n[_0xd9e6[78]] - 2)
                }
            }
            t[_0xd9e6[622]]()
        }
    },
    x[_0xd9e6[534]] = function(e) {
        function d(e) {
            return (e < 10 ? _0xd9e6[16] : _0xd9e6[32]) + e
        }
        return d(e[_0xd9e6[12]]()) + _0xd9e6[15] + d(e[_0xd9e6[13]]()) + _0xd9e6[15] + d(e[_0xd9e6[14]]())
    },
    e[_0xd9e6[645]] = d,
    e[_0xd9e6[646]] = x
} (typeof exports === _0xd9e6[8] ? this: exports);
var random = new TimeSeries;
setInterval(function() {
    random[_0xd9e6[196]]((new Date)[_0xd9e6[514]](), 1e4 * Math[_0xd9e6[0]]() - 5e3)
},
500);