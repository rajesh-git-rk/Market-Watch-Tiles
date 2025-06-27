/**
 *	8.2.0
 *	Generation date: 2021-03-16T07:52:18.758Z
 *	Client name: enrich commodities india pvt limited
 *	Package Type: Technical Analysis 8.2
 *	License type: annual
 *	Expiration date: "2022/03/01"
 *	Domain lock: ["127.0.0.1","localhost","enrichbroking.in","enrichbroking.com"]
 *	iFrame lock: true
 */

/***********************************************************
 * Copyright by ChartIQ, Inc.
 * Licensed under the ChartIQ, Inc. Developer License Agreement https://www.chartiq.com/developer-license-agreement
 *************************************************************/
/*************************************** DO NOT MAKE CHANGES TO THIS LIBRARY FILE!! **************************************/
/* If you wish to overwrite default functionality, create a separate file with a copy of the methods you are overwriting */
/* and load that file right after the library has been loaded, but before the chart engine is instantiated.              */
/* Directly modifying library files will prevent upgrades and the ability for ChartIQ to support your solution.          */
/*************************************************************************************************************************/

/***************************************************************************/
/* Please note that manually changing the domain list or expiration dates  */
/*                                                                         */
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> WILL NOT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
/*                                                                         */
/*   modify the library locking mechanism. Any changes must be requested   */
/*                          directly from chartIQ.                         */
/** ************************************************************************ */

(function () {
    /* eslint-disable no-undef-init */
    var trialExpiration = undefined;
    var licenseExpiration = "2022/03/01";
    var domains = ["127.0.0.1", "localhost", "enrichbroking.in", "enrichbroking.com"];
    var filesystem = false;
    var expiration;

    if (trialExpiration) expiration = new Date(trialExpiration).getTime();
    else if (licenseExpiration) expiration = new Date(licenseExpiration).getTime();

    if (expiration) {
        var now = new Date().getTime();

        if (expiration <= now) {
            if (trialExpiration) alert("This license has expired!");
            console.error("This license has expired!");
        } else if (trialExpiration) {
            var diffDays = Math.round((expiration - now) / (1000 * 60 * 60 * 24));

            if (diffDays < 3) {
                alert("This trial license expires in " + diffDays + " days!");
                console.log("WARNING: This trial license expires in " + diffDays + " days!");
            }
        }
    }
    if (typeof document !== "undefined") {
        if (filesystem === true && document.location.protocol == "file:") {
            return; // valid environment, skip domain check
        }
        if (domains && domains.length > 0) {
            var href = document.location.href;
            var found = false;

            for (var i = 0; i < domains.length; i++) {
                if (href.indexOf(domains[i]) > -1) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                alert("ERROR: Not licensed for domain " + href);
                console.error("ERROR: Not licensed for domain " + href);
            }
        }
    }
})(); /* ignore jslint start */ /* jshint ignore:start */

/* eslint-disable no-extra-parens */

/* eslint-disable */ R1aa[186458] = (function () {
    var C = 2;
    for (; C !== 9; ) {
        switch (C) {
            case 1:
                return globalThis;
                break;
            case 2:
                C = typeof globalThis === "\u006f\x62\u006a\x65\u0063\u0074" ? 1 : 5;
                break;
            case 5:
                var h;
                try {
                    var S = 2;
                    for (; S !== 6; ) {
                        switch (S) {
                            case 9:
                                delete h["\u0071\u006e\x4f\x33\x58"];
                                var M = Object["\x70\u0072\x6f\u0074\x6f\x74\x79\x70\u0065"];
                                S = 7;
                                break;
                            case 2:
                                Object["\x64\x65\u0066\u0069\u006e\x65\u0050\x72\x6f\x70\u0065\u0072\x74\x79"](Object["\u0070\x72\u006f\x74\u006f\u0074\x79\u0070\u0065"], "\x72\x58\u0079\u005f\x48", {
                                    get: function () {
                                        var t = 2;
                                        for (; t !== 1; ) {
                                            switch (t) {
                                                case 2:
                                                    return this;
                                                    break;
                                            }
                                        }
                                    },
                                    configurable: true,
                                });
                                h = rXy_H;
                                h["\x71\u006e\x4f\u0033\x58"] = h;
                                S = 4;
                                break;
                            case 7:
                                delete M["\x72\x58\x79\u005f\x48"];
                                S = 6;
                                break;
                            case 4:
                                S = typeof qnO3X === "\u0075\x6e\x64\u0065\u0066\u0069\x6e\x65\x64" ? 3 : 9;
                                break;
                            case 3:
                                throw "";
                                S = 9;
                                break;
                        }
                    }
                } catch (Y) {
                    h = window;
                }
                return h;
                break;
        }
    }
})();
R1aa[234377] = W7jj(R1aa[186458]);
R1aa[556234] = N8gg(R1aa[186458]);
R1aa[374492] = b4tt(R1aa[186458]);
R1aa[457160] = d1aa(R1aa[186458]);
R1aa.j3k = function () {
    return typeof R1aa[649425].n3k === "function" ? R1aa[649425].n3k.apply(R1aa[649425], arguments) : R1aa[649425].n3k;
};
R1aa.g5s = function () {
    return typeof R1aa[405931].s3U === "function" ? R1aa[405931].s3U.apply(R1aa[405931], arguments) : R1aa[405931].s3U;
};
R1aa.e9Y = function () {
    return typeof R1aa[419163].o06 === "function" ? R1aa[419163].o06.apply(R1aa[419163], arguments) : R1aa[419163].o06;
};
R1aa.K19 = function () {
    return typeof R1aa.U19.s3f === "function" ? R1aa.U19.s3f.apply(R1aa.U19, arguments) : R1aa.U19.s3f;
};
R1aa[405931] = (function (p3U) {
    function O3U(j3U) {
        var t5s = 2;
        for (; t5s !== 15; ) {
            switch (t5s) {
                case 9:
                    t5s = !P3U-- ? 8 : 7;
                    break;
                case 7:
                    t5s = !P3U-- ? 6 : 14;
                    break;
                case 13:
                    K3U = p3U[7];
                    t5s = 12;
                    break;
                case 18:
                    t5s = Q3U >= 0 ? 17 : 16;
                    break;
                case 2:
                    var J3U, H3U, q3U, V3U, K3U, Q3U, d3U;
                    t5s = 1;
                    break;
                case 1:
                    t5s = !P3U-- ? 5 : 4;
                    break;
                case 11:
                    Q3U = (K3U || K3U === 0) && d3U(K3U, H3U);
                    t5s = 10;
                    break;
                case 14:
                    t5s = !P3U-- ? 13 : 12;
                    break;
                case 3:
                    H3U = 27;
                    t5s = 9;
                    break;
                case 19:
                    return J3U;
                    break;
                case 6:
                    V3U = q3U && d3U(q3U, H3U);
                    t5s = 14;
                    break;
                case 10:
                    t5s = Q3U >= 0 && V3U >= 0 ? 20 : 18;
                    break;
                case 8:
                    q3U = p3U[6];
                    t5s = 7;
                    break;
                case 4:
                    t5s = !P3U-- ? 3 : 9;
                    break;
                case 16:
                    J3U = V3U - j3U > H3U;
                    t5s = 19;
                    break;
                case 12:
                    t5s = !P3U-- ? 11 : 10;
                    break;
                case 5:
                    d3U = r3U[p3U[4]];
                    t5s = 4;
                    break;
                case 17:
                    J3U = j3U - Q3U > H3U;
                    t5s = 19;
                    break;
                case 20:
                    J3U = j3U - Q3U > H3U && V3U - j3U > H3U;
                    t5s = 19;
                    break;
            }
        }
    }
    var K5s = 2;
    for (; K5s !== 10; ) {
        switch (K5s) {
            case 4:
                var a3U = "fromCharCode",
                    i3U = "RegExp";
                K5s = 3;
                break;
            case 1:
                K5s = !P3U-- ? 5 : 4;
                break;
            case 12:
                var Z3U,
                    m3U = 0;
                K5s = 11;
                break;
            case 14:
                p3U = p3U.u4tt(function (Y9U) {
                    var c5s = 2;
                    for (; c5s !== 13; ) {
                        switch (c5s) {
                            case 7:
                                c5s = !l9U ? 6 : 14;
                                break;
                            case 2:
                                var l9U;
                                c5s = 1;
                                break;
                            case 8:
                                M9U++;
                                c5s = 3;
                                break;
                            case 1:
                                c5s = !P3U-- ? 5 : 4;
                                break;
                            case 14:
                                return l9U;
                                break;
                            case 9:
                                l9U += r3U[x3U][a3U](Y9U[M9U] + 104);
                                c5s = 8;
                                break;
                            case 3:
                                c5s = M9U < Y9U.length ? 9 : 7;
                                break;
                            case 5:
                                l9U = "";
                                c5s = 4;
                                break;
                            case 6:
                                return;
                                break;
                            case 4:
                                var M9U = 0;
                                c5s = 3;
                                break;
                        }
                    }
                });
                K5s = 13;
                break;
            case 7:
                x3U = E3U.f4tt(new r3U[i3U]("^['-|]"), "S");
                K5s = 6;
                break;
            case 11:
                return {
                    s3U: function (h9U) {
                        var l5s = 2;
                        for (; l5s !== 6; ) {
                            switch (l5s) {
                                case 4:
                                    Z3U = O3U(C9U);
                                    l5s = 3;
                                    break;
                                case 5:
                                    l5s = !P3U-- ? 4 : 3;
                                    break;
                                case 1:
                                    l5s = C9U > m3U ? 5 : 8;
                                    break;
                                case 8:
                                    var t9U = (function (T9U, W9U) {
                                        var m5s = 2;
                                        for (; m5s !== 10; ) {
                                            switch (m5s) {
                                                case 5:
                                                    m5s = typeof W9U === "undefined" && typeof p3U !== "undefined" ? 4 : 3;
                                                    break;
                                                case 8:
                                                    var k9U = r3U[W9U[4]](T9U[W9U[2]](U9U), 16)[W9U[3]](2);
                                                    var n9U = k9U[W9U[2]](k9U[W9U[5]] - 1);
                                                    m5s = 6;
                                                    break;
                                                case 14:
                                                    o9U = n9U;
                                                    m5s = 13;
                                                    break;
                                                case 4:
                                                    W9U = p3U;
                                                    m5s = 3;
                                                    break;
                                                case 13:
                                                    U9U++;
                                                    m5s = 9;
                                                    break;
                                                case 9:
                                                    m5s = U9U < T9U[W9U[5]] ? 8 : 11;
                                                    break;
                                                case 6:
                                                    m5s = U9U === 0 ? 14 : 12;
                                                    break;
                                                case 3:
                                                    var o9U,
                                                        U9U = 0;
                                                    m5s = 9;
                                                    break;
                                                case 1:
                                                    T9U = h9U;
                                                    m5s = 5;
                                                    break;
                                                case 12:
                                                    o9U = o9U ^ n9U;
                                                    m5s = 13;
                                                    break;
                                                case 2:
                                                    m5s = typeof T9U === "undefined" && typeof h9U !== "undefined" ? 1 : 5;
                                                    break;
                                                case 11:
                                                    return o9U;
                                                    break;
                                            }
                                        }
                                    })(undefined, undefined);
                                    return t9U ? Z3U : !Z3U;
                                    break;
                                case 3:
                                    l5s = !P3U-- ? 9 : 8;
                                    break;
                                case 2:
                                    var C9U = new r3U[p3U[0]]()[p3U[1]]();
                                    l5s = 1;
                                    break;
                                case 9:
                                    m3U = C9U + 60000;
                                    l5s = 8;
                                    break;
                            }
                        }
                    },
                };
                break;
            case 3:
                K5s = !P3U-- ? 9 : 8;
                break;
            case 5:
                r3U = R1aa[186458];
                K5s = 4;
                break;
            case 8:
                K5s = !P3U-- ? 7 : 6;
                break;
            case 6:
                K5s = !P3U-- ? 14 : 13;
                break;
            case 13:
                K5s = !P3U-- ? 12 : 11;
                break;
            case 2:
                var r3U, E3U, x3U, P3U;
                K5s = 1;
                break;
            case 9:
                E3U = typeof a3U;
                K5s = 8;
                break;
        }
    }
})([[-36, -7, 12, -3], [-1, -3, 12, -20, 1, 5, -3], [-5, 0, -7, 10, -39, 12], [12, 7, -21, 12, 10, 1, 6, -1], [8, -7, 10, 11, -3, -31, 6, 12], [4, -3, 6, -1, 12, 0], [-51, 5, -1, -3, 1, -48, -2, -7, -56], []]);
function b4tt(J3s) {
    function K3s(V5s) {
        var o5s = 2;
        for (; o5s !== 5; ) {
            switch (o5s) {
                case 2:
                    var G3s = [arguments];
                    return G3s[0][0].Array;
                    break;
            }
        }
    }
    var Q5s = 2;
    for (; Q5s !== 16; ) {
        switch (Q5s) {
            case 17:
                O3s(K3s, "map", E3s[7], E3s[2]);
                Q5s = 16;
                break;
            case 2:
                var E3s = [arguments];
                E3s[4] = "";
                E3s[4] = "";
                E3s[4] = "f4";
                E3s[3] = "";
                E3s[3] = "";
                E3s[3] = "t";
                Q5s = 7;
                break;
            case 18:
                O3s(t3s, "replace", E3s[7], E3s[8]);
                Q5s = 17;
                break;
            case 19:
                var O3s = function (r3s, f3s, C3s, U5s) {
                    var w5s = 2;
                    for (; w5s !== 5; ) {
                        switch (w5s) {
                            case 2:
                                var L3s = [arguments];
                                e3s(E3s[0][0], L3s[0][0], L3s[0][1], L3s[0][2], L3s[0][3]);
                                w5s = 5;
                                break;
                        }
                    }
                };
                Q5s = 18;
                break;
            case 7:
                E3s[9] = "u4";
                E3s[7] = 1;
                E3s[2] = E3s[9];
                E3s[2] += E3s[3];
                Q5s = 12;
                break;
            case 12:
                E3s[2] += E3s[3];
                E3s[8] = E3s[4];
                E3s[8] += E3s[3];
                E3s[8] += E3s[3];
                Q5s = 19;
                break;
        }
    }
    function e3s(Z5s, q5s, v5s, H5s, N5s) {
        var k5s = 2;
        for (; k5s !== 6; ) {
            switch (k5s) {
                case 7:
                    try {
                        var j5s = 2;
                        for (; j5s !== 8; ) {
                            switch (j5s) {
                                case 2:
                                    i3s[9] = {};
                                    i3s[5] = (1, i3s[0][1])(i3s[0][0]);
                                    i3s[6] = [E3s[7], i3s[5].prototype][i3s[0][3]];
                                    j5s = 4;
                                    break;
                                case 4:
                                    i3s[9].value = i3s[6][i3s[0][2]];
                                    try {
                                        var O5s = 2;
                                        for (; O5s !== 3; ) {
                                            switch (O5s) {
                                                case 2:
                                                    i3s[8] = i3s[2];
                                                    i3s[8] += i3s[1];
                                                    i3s[8] += i3s[7];
                                                    i3s[0][0].Object[i3s[8]](i3s[6], i3s[0][4], i3s[9]);
                                                    O5s = 3;
                                                    break;
                                            }
                                        }
                                    } catch (W3s) {}
                                    i3s[6][i3s[0][4]] = i3s[9].value;
                                    j5s = 8;
                                    break;
                            }
                        }
                    } catch (I3s) {}
                    k5s = 6;
                    break;
                case 2:
                    var i3s = [arguments];
                    i3s[7] = "";
                    i3s[7] = "y";
                    i3s[1] = "";
                    i3s[1] = "";
                    i3s[1] = "opert";
                    i3s[2] = "definePr";
                    k5s = 7;
                    break;
            }
        }
    }
    function t3s(s5s) {
        var e5s = 2;
        for (; e5s !== 5; ) {
            switch (e5s) {
                case 2:
                    var p3s = [arguments];
                    return p3s[0][0].String;
                    break;
            }
        }
    }
}
R1aa.X19 = function () {
    return typeof R1aa.U19.s3f === "function" ? R1aa.U19.s3f.apply(R1aa.U19, arguments) : R1aa.U19.s3f;
};
R1aa[186458].i2oo = R1aa;
function W7jj(o4a) {
    function E3a(y4a, R4a, x4a, A4a, I4a) {
        var P4a = 2;
        for (; P4a !== 9; ) {
            switch (P4a) {
                case 2:
                    var u4a = [arguments];
                    u4a[2] = "ty";
                    u4a[7] = "eProper";
                    u4a[1] = "defin";
                    try {
                        var L4a = 2;
                        for (; L4a !== 8; ) {
                            switch (L4a) {
                                case 2:
                                    u4a[4] = {};
                                    L4a = 1;
                                    break;
                                case 1:
                                    u4a[9] = (1, u4a[0][1])(u4a[0][0]);
                                    u4a[6] = [s4a[7], u4a[9].prototype][u4a[0][3]];
                                    u4a[4].value = u4a[6][u4a[0][2]];
                                    try {
                                        var j4a = 2;
                                        for (; j4a !== 3; ) {
                                            switch (j4a) {
                                                case 2:
                                                    u4a[8] = u4a[1];
                                                    u4a[8] += u4a[7];
                                                    u4a[8] += u4a[2];
                                                    u4a[0][0].Object[u4a[8]](u4a[6], u4a[0][4], u4a[4]);
                                                    j4a = 3;
                                                    break;
                                            }
                                        }
                                    } catch (b4a) {}
                                    u4a[6][u4a[0][4]] = u4a[4].value;
                                    L4a = 8;
                                    break;
                            }
                        }
                    } catch (l4a) {}
                    P4a = 9;
                    break;
            }
        }
    }
    var d4a = 2;
    for (; d4a !== 12; ) {
        switch (d4a) {
            case 2:
                var s4a = [arguments];
                s4a[5] = "j";
                s4a[9] = "";
                s4a[9] = "T7";
                d4a = 3;
                break;
            case 3:
                s4a[7] = 2;
                s4a[7] = 1;
                s4a[3] = s4a[9];
                s4a[3] += s4a[5];
                s4a[3] += s4a[5];
                d4a = 14;
                break;
            case 14:
                var q3a = function (Y4a, X4a, Z4a, a4a) {
                    var m4a = 2;
                    for (; m4a !== 5; ) {
                        switch (m4a) {
                            case 2:
                                var W4a = [arguments];
                                m4a = 1;
                                break;
                            case 1:
                                E3a(s4a[0][0], W4a[0][0], W4a[0][1], W4a[0][2], W4a[0][3]);
                                m4a = 5;
                                break;
                        }
                    }
                };
                d4a = 13;
                break;
            case 13:
                q3a(Q3a, "charCodeAt", s4a[7], s4a[3]);
                d4a = 12;
                break;
        }
    }
    function Q3a(M4a) {
        var O4a = 2;
        for (; O4a !== 5; ) {
            switch (O4a) {
                case 2:
                    var p4a = [arguments];
                    return p4a[0][0].String;
                    break;
            }
        }
    }
}
R1aa.H9Y = function () {
    return typeof R1aa[419163].o06 === "function" ? R1aa[419163].o06.apply(R1aa[419163], arguments) : R1aa[419163].o06;
};
R1aa.m9Y = function () {
    return typeof R1aa[419163].k06 === "function" ? R1aa[419163].k06.apply(R1aa[419163], arguments) : R1aa[419163].k06;
};
R1aa.G4a = function () {
    return typeof R1aa[17166].E9d === "function" ? R1aa[17166].E9d.apply(R1aa[17166], arguments) : R1aa[17166].E9d;
};
function R1aa() {}
R1aa.T3k = function () {
    return typeof R1aa[649425].F3k === "function" ? R1aa[649425].F3k.apply(R1aa[649425], arguments) : R1aa[649425].F3k;
};
R1aa.L3k = function () {
    return typeof R1aa[649425].F3k === "function" ? R1aa[649425].F3k.apply(R1aa[649425], arguments) : R1aa[649425].F3k;
};
R1aa.J4a = function () {
    return typeof R1aa[17166].E9d === "function" ? R1aa[17166].E9d.apply(R1aa[17166], arguments) : R1aa[17166].E9d;
};
R1aa[17166] = (function () {
    var m9d = function (y9d, b9d) {
            var A9d = b9d & 0xffff;
            var Z9d = b9d - A9d;
            return (((Z9d * y9d) | 0) + ((A9d * y9d) | 0)) | 0;
        },
        P9d = function (H9d, D9d, B9d) {
            var V9d = 0xcc9e2d51,
                j9d = 0x1b873593;
            var I9d = B9d;
            var R9d = D9d & ~0x3;
            for (var n9d = 0; n9d < R9d; n9d += 4) {
                var N9d = (H9d.T7jj(n9d) & 0xff) | ((H9d.T7jj(n9d + 1) & 0xff) << 8) | ((H9d.T7jj(n9d + 2) & 0xff) << 16) | ((H9d.T7jj(n9d + 3) & 0xff) << 24);
                N9d = m9d(N9d, V9d);
                N9d = ((N9d & 0x1ffff) << 15) | (N9d >>> 17);
                N9d = m9d(N9d, j9d);
                I9d ^= N9d;
                I9d = ((I9d & 0x7ffff) << 13) | (I9d >>> 19);
                I9d = (I9d * 5 + 0xe6546b64) | 0;
            }
            N9d = 0;
            switch (D9d % 4) {
                case 3:
                    N9d = (H9d.T7jj(R9d + 2) & 0xff) << 16;
                case 2:
                    N9d |= (H9d.T7jj(R9d + 1) & 0xff) << 8;
                case 1:
                    N9d |= H9d.T7jj(R9d) & 0xff;
                    N9d = m9d(N9d, V9d);
                    N9d = ((N9d & 0x1ffff) << 15) | (N9d >>> 17);
                    N9d = m9d(N9d, j9d);
                    I9d ^= N9d;
            }
            I9d ^= D9d;
            I9d ^= I9d >>> 16;
            I9d = m9d(I9d, 0x85ebca6b);
            I9d ^= I9d >>> 13;
            I9d = m9d(I9d, 0xc2b2ae35);
            I9d ^= I9d >>> 16;
            return I9d;
        };
    return { E9d: P9d };
})();
R1aa.w9Y = function () {
    return typeof R1aa[419163].k06 === "function" ? R1aa[419163].k06.apply(R1aa[419163], arguments) : R1aa[419163].k06;
};
R1aa.v3k = function () {
    return typeof R1aa[649425].n3k === "function" ? R1aa[649425].n3k.apply(R1aa[649425], arguments) : R1aa[649425].n3k;
};
R1aa[649425] = (function (r3k) {
    return {
        n3k: function () {
            var U3k,
                M3k = arguments;
            switch (r3k) {
                case 18:
                    U3k = M3k[0] * -M3k[1];
                    break;
                case 77:
                    U3k = M3k[0] / M3k[1] + M3k[3] + M3k[2];
                    break;
                case 167:
                    U3k = (-M3k[0] + M3k[2] - M3k[1]) * M3k[3] + M3k[4];
                    break;
                case 57:
                    U3k = ((M3k[3] - M3k[0]) / M3k[1]) * M3k[2] + M3k[4];
                    break;
                case 173:
                    U3k = -M3k[3] + M3k[0] - M3k[1] + M3k[2];
                    break;
                case 96:
                    U3k = M3k[1] < M3k[0];
                    break;
                case 116:
                    U3k = -M3k[4] - M3k[1] + M3k[2] + M3k[0] - M3k[3];
                    break;
                case 125:
                    U3k = M3k[0] - (M3k[1] ^ M3k[2]);
                    break;
                case 163:
                    U3k = (M3k[2] / M3k[1]) * M3k[0];
                    break;
                case 56:
                    U3k = M3k[1] + M3k[2] + M3k[0];
                    break;
                case 12:
                    U3k = (M3k[2] + M3k[4]) * M3k[0] * M3k[1] - M3k[3];
                    break;
                case 122:
                    U3k = (M3k[1] * M3k[3]) / M3k[2] - M3k[0];
                    break;
                case 97:
                    U3k = -M3k[0] * M3k[2] + M3k[1];
                    break;
                case 155:
                    U3k = (M3k[0] << M3k[1]) / M3k[2];
                    break;
                case 78:
                    U3k = (M3k[0] - M3k[4] - M3k[3]) / M3k[1] + M3k[2];
                    break;
                case 166:
                    U3k = (M3k[0] + M3k[4] + M3k[1]) / M3k[3] + M3k[2];
                    break;
                case 151:
                    U3k = M3k[1] + (M3k[0] / M3k[2]) * M3k[3];
                    break;
                case 88:
                    U3k = (M3k[0] - M3k[4] - M3k[3]) * M3k[1] - M3k[2];
                    break;
                case 139:
                    U3k = -M3k[0] / M3k[3] - M3k[2] + M3k[1];
                    break;
                case 89:
                    U3k = M3k[0] / M3k[4] + M3k[1] + M3k[2] - M3k[3];
                    break;
                case 58:
                    U3k = (M3k[2] * M3k[1]) / M3k[0] + M3k[3];
                    break;
                case 72:
                    U3k = (M3k[3] - M3k[0]) * M3k[2] - M3k[1];
                    break;
                case 111:
                    U3k = (-M3k[5] / M3k[2]) * (M3k[0] * (M3k[4] - M3k[6]) - +M3k[3]) + M3k[1];
                    break;
                case 33:
                    U3k = -M3k[3] * M3k[0] + M3k[2] - M3k[1] + M3k[4];
                    break;
                case 169:
                    U3k = (M3k[2] + M3k[4] - M3k[1]) / M3k[3] - M3k[0];
                    break;
                case 52:
                    U3k = M3k[2] + M3k[1] / M3k[0];
                    break;
                case 117:
                    U3k = M3k[0] == M3k[1];
                    break;
                case 21:
                    U3k = M3k[1] & M3k[0];
                    break;
                case 121:
                    U3k = M3k[4] * M3k[1] * M3k[3] + M3k[2] - M3k[0];
                    break;
                case 29:
                    U3k = M3k[1] | (M3k[0] << M3k[3]) | (M3k[4] << M3k[2]);
                    break;
                case 55:
                    U3k = M3k[0] * +M3k[1];
                    break;
                case 53:
                    U3k = M3k[1] - M3k[2] / M3k[0];
                    break;
                case 94:
                    U3k = M3k[0] ^ M3k[1];
                    break;
                case 148:
                    U3k = M3k[4] + M3k[1] - M3k[3] - M3k[2] - M3k[0];
                    break;
                case 65:
                    U3k = (M3k[4] + M3k[2]) * M3k[3] - M3k[0] - M3k[1];
                    break;
                case 13:
                    U3k = M3k[0] / M3k[1] - M3k[2];
                    break;
                case 82:
                    U3k = M3k[3] + M3k[1] + M3k[2] - M3k[0];
                    break;
                case 44:
                    U3k = M3k[3] + M3k[8] + M3k[7] + M3k[9] + M3k[6] + M3k[4] + M3k[2] + M3k[0] / M3k[1] + M3k[5];
                    break;
                case 152:
                    U3k = M3k[0] > M3k[1];
                    break;
                case 63:
                    U3k = -M3k[2] + M3k[0] + M3k[1];
                    break;
                case 47:
                    U3k = (M3k[1] + M3k[0]) / M3k[2];
                    break;
                case 79:
                    U3k = (M3k[0] * M3k[2] - M3k[4]) * M3k[1] - M3k[3];
                    break;
                case 23:
                    U3k = M3k[1] / M3k[2] + M3k[0];
                    break;
                case 54:
                    U3k = M3k[0] * (M3k[2] << M3k[1]);
                    break;
                case 36:
                    U3k = M3k[2] + M3k[1] - M3k[4] - M3k[0] + M3k[3];
                    break;
                case 114:
                    U3k = M3k[0] * (M3k[1] * M3k[5] * M3k[3] + M3k[2]) + M3k[4];
                    break;
                case 3:
                    U3k = -M3k[0] - M3k[3] - M3k[2] + M3k[1];
                    break;
                case 90:
                    U3k = (M3k[0] / M3k[3] / M3k[1]) * M3k[2] + M3k[4];
                    break;
                case 164:
                    U3k = (-M3k[1] / M3k[0]) * M3k[3] + M3k[2];
                    break;
                case 8:
                    U3k = M3k[0] + M3k[2] - M3k[1];
                    break;
                case 124:
                    U3k = M3k[0] | M3k[1];
                    break;
                case 38:
                    U3k = M3k[0] * M3k[1] - M3k[2] - M3k[3];
                    break;
                case 30:
                    U3k = (M3k[4] + M3k[3]) * M3k[2] + M3k[1] - M3k[0];
                    break;
                case 76:
                    U3k = (M3k[1] - M3k[0]) * M3k[2] - M3k[4] - M3k[3];
                    break;
                case 172:
                    U3k = (M3k[3] - M3k[1] + M3k[4]) * M3k[2] + M3k[0];
                    break;
                case 49:
                    U3k = M3k[3] + (M3k[2] - M3k[0]) * M3k[4] * M3k[1];
                    break;
                case 69:
                    U3k = (M3k[1] / M3k[4]) * M3k[3] + M3k[2] + M3k[0];
                    break;
                case 103:
                    U3k = M3k[1] - M3k[2] + M3k[0] + M3k[3];
                    break;
                case 140:
                    U3k = M3k[0] + (M3k[1] >> M3k[2]);
                    break;
                case 142:
                    U3k = (-M3k[3] * M3k[1]) / M3k[2] + M3k[0];
                    break;
                case 6:
                    U3k = M3k[0] + M3k[1];
                    break;
                case 170:
                    U3k = (M3k[2] / M3k[3]) * M3k[0] - M3k[1];
                    break;
                case 154:
                    U3k = -M3k[3] * M3k[1] + M3k[2] + M3k[0];
                    break;
                case 135:
                    U3k = -M3k[2] / M3k[0] + M3k[1] - M3k[4] + M3k[3];
                    break;
                case 45:
                    U3k = M3k[0] * (M3k[1] - M3k[4] / (M3k[3] - M3k[2]));
                    break;
                case 26:
                    U3k = M3k[1] - M3k[2] - M3k[0] - M3k[3];
                    break;
                case 161:
                    U3k = M3k[0] != M3k[1];
                    break;
                case 144:
                    U3k = M3k[3] - M3k[1] - (M3k[0] >> M3k[2]);
                    break;
                case 109:
                    U3k = M3k[0] / +M3k[1];
                    break;
                case 138:
                    U3k = -M3k[0] * M3k[1] * M3k[2] + M3k[3];
                    break;
                case 101:
                    U3k = (M3k[2] * M3k[3] * M3k[4]) / M3k[0] + M3k[1];
                    break;
                case 156:
                    U3k = (M3k[1] - M3k[4]) * M3k[3] + M3k[2] + M3k[0];
                    break;
                case 141:
                    U3k = (M3k[2] & M3k[0]) - M3k[1];
                    break;
                case 0:
                    U3k = -M3k[3] / M3k[1] / M3k[2] + M3k[0];
                    break;
                case 15:
                    U3k = (-M3k[2] - M3k[1]) / M3k[3] + M3k[0];
                    break;
                case 41:
                    U3k = (M3k[1] - M3k[0]) / M3k[2] + M3k[3];
                    break;
                case 157:
                    U3k = -M3k[1] + M3k[2] + M3k[3] - M3k[0];
                    break;
                case 10:
                    U3k = (M3k[2] - M3k[3] + M3k[1]) / M3k[4] - M3k[0];
                    break;
                case 106:
                    U3k = (M3k[0] + M3k[3]) / M3k[2] - M3k[1];
                    break;
                case 75:
                    U3k = M3k[2] / M3k[3] - M3k[4] - M3k[0] + M3k[1];
                    break;
                case 165:
                    U3k = -M3k[2] / M3k[1] + M3k[0];
                    break;
                case 105:
                    U3k = M3k[2] + M3k[3] - M3k[0] - M3k[1];
                    break;
                case 16:
                    U3k = M3k[3] * M3k[2] + M3k[1] - M3k[0];
                    break;
                case 43:
                    U3k = M3k[1] * (M3k[2] - M3k[0]);
                    break;
                case 1:
                    U3k = M3k[0] - M3k[1];
                    break;
                case 153:
                    U3k = -M3k[3] / M3k[1] + M3k[2] + M3k[4] - M3k[0];
                    break;
                case 112:
                    U3k = (M3k[2] / M3k[3]) * M3k[5] * M3k[4] * M3k[1] + M3k[0];
                    break;
                case 99:
                    U3k = (M3k[2] / M3k[1] - M3k[3]) * M3k[4] + M3k[0];
                    break;
                case 25:
                    U3k = M3k[4] + M3k[2] + M3k[1] + M3k[0] - M3k[3];
                    break;
                case 128:
                    U3k = M3k[1] - (M3k[0] - M3k[2]);
                    break;
                case 149:
                    U3k = M3k[0] - M3k[4] / +M3k[3] + (M3k[1] - +M3k[2]);
                    break;
                case 91:
                    U3k = M3k[1] * M3k[4] * M3k[0] - M3k[2] - M3k[3];
                    break;
                case 98:
                    U3k = M3k[0] / M3k[4] / M3k[2] + M3k[3] + M3k[1];
                    break;
                case 127:
                    U3k = (M3k[0] + M3k[2] + M3k[1]) / M3k[3] - M3k[4];
                    break;
                case 168:
                    U3k = M3k[2] / M3k[4] / M3k[0] + M3k[1] - M3k[3];
                    break;
                case 145:
                    U3k = -M3k[1] + M3k[0] - M3k[2] - M3k[3];
                    break;
                case 60:
                    U3k = -M3k[1] - M3k[2] + M3k[0];
                    break;
                case 81:
                    U3k = M3k[3] / M3k[2] / M3k[0] + M3k[1];
                    break;
                case 64:
                    U3k = M3k[0] >> M3k[1];
                    break;
                case 136:
                    U3k = M3k[3] - M3k[0] - (M3k[1] - M3k[2]);
                    break;
                case 110:
                    U3k = (M3k[2] / M3k[0]) * M3k[4] * M3k[3] + M3k[1];
                    break;
                case 62:
                    U3k = (M3k[3] + M3k[1]) / M3k[2] + M3k[0] - M3k[4];
                    break;
                case 129:
                    U3k = M3k[0] - (M3k[1] & M3k[2]);
                    break;
                case 171:
                    U3k = (-M3k[4] + M3k[2] + M3k[3]) * M3k[0] - M3k[1];
                    break;
                case 115:
                    U3k = M3k[0] !== M3k[1];
                    break;
                case 120:
                    U3k = ((M3k[3] * M3k[0]) / M3k[4]) * M3k[2] + M3k[1];
                    break;
                case 162:
                    U3k = M3k[5] * M3k[3] * M3k[0] * M3k[1] * M3k[4] * M3k[2];
                    break;
                case 108:
                    U3k = -M3k[0] + M3k[2] + M3k[1] - M3k[3] - M3k[4];
                    break;
                case 158:
                    U3k = M3k[1] / (M3k[0] ^ M3k[2]);
                    break;
                case 67:
                    U3k = M3k[0] / M3k[3] + M3k[2] - M3k[1];
                    break;
                case 48:
                    U3k = (M3k[4] - M3k[1]) / M3k[2] + (M3k[3] | M3k[0]);
                    break;
                case 5:
                    U3k = M3k[3] - M3k[1] + M3k[0] - M3k[2];
                    break;
                case 14:
                    U3k = -M3k[2] + M3k[0] + M3k[1] - M3k[3] + M3k[4];
                    break;
                case 4:
                    U3k = -M3k[1] + M3k[0];
                    break;
                case 9:
                    U3k = (M3k[1] - M3k[3]) * M3k[2] + M3k[0];
                    break;
                case 34:
                    U3k = (M3k[4] - M3k[1]) * M3k[0] - M3k[2] + M3k[3];
                    break;
                case 93:
                    U3k = M3k[1] + M3k[4] + M3k[2] + M3k[0] + M3k[3];
                    break;
                case 31:
                    U3k = M3k[4] / M3k[2] - M3k[3] + M3k[1] + M3k[0];
                    break;
                case 85:
                    U3k = M3k[2] + M3k[3] + M3k[7] + M3k[8] + M3k[10] + M3k[6] + M3k[4] + M3k[9] + M3k[0] + M3k[1] + M3k[5];
                    break;
                case 107:
                    U3k = M3k[1] - M3k[3] - M3k[0] + M3k[2];
                    break;
                case 84:
                    U3k = M3k[6] + M3k[4] + M3k[3] + M3k[2] + M3k[5] + M3k[7] + M3k[0] + M3k[8] + M3k[1];
                    break;
                case 130:
                    U3k = (-M3k[1] + M3k[3]) / M3k[0] - M3k[2];
                    break;
                case 11:
                    U3k = M3k[3] - M3k[0] + M3k[4] - M3k[2] - M3k[1];
                    break;
                case 134:
                    U3k = M3k[0] / M3k[1] / M3k[2] - M3k[3];
                    break;
                case 68:
                    U3k = -M3k[1] - M3k[0] + M3k[2] - M3k[3];
                    break;
                case 80:
                    U3k = M3k[3] - M3k[4] - M3k[1] - M3k[2] + M3k[0];
                    break;
                case 123:
                    U3k = (M3k[3] / M3k[1]) * M3k[4] + M3k[0] - M3k[2];
                    break;
                case 150:
                    U3k = M3k[0] + (M3k[2] + M3k[1]);
                    break;
                case 28:
                    U3k = ((M3k[2] + M3k[3]) / M3k[1]) * M3k[4] - M3k[0];
                    break;
                case 137:
                    U3k = M3k[0] - +M3k[1];
                    break;
                case 132:
                    U3k = M3k[0] * (M3k[1] - M3k[3]) + M3k[2];
                    break;
                case 147:
                    U3k = M3k[3] * M3k[4] * M3k[1] * M3k[0] - M3k[2];
                    break;
                case 83:
                    U3k = M3k[4] + M3k[2] + M3k[3] + M3k[5] + M3k[1] + M3k[0] + M3k[6];
                    break;
                case 86:
                    U3k = M3k[2] * M3k[0] * M3k[1] * M3k[3];
                    break;
                case 66:
                    U3k = M3k[3] * M3k[1] * M3k[2] - M3k[0];
                    break;
                case 159:
                    U3k = (M3k[1] + M3k[0] - M3k[2]) * M3k[3] + M3k[4];
                    break;
                case 87:
                    U3k = M3k[0] * M3k[2] - M3k[3] - M3k[1] + M3k[4];
                    break;
                case 59:
                    U3k = (-M3k[1] + M3k[0]) / M3k[2] + M3k[3];
                    break;
                case 143:
                    U3k = M3k[1] - (M3k[0] >> M3k[2]);
                    break;
                case 131:
                    U3k = (M3k[1] - M3k[0]) / (M3k[3] - M3k[2]);
                    break;
                case 51:
                    U3k = M3k[1] * M3k[0] - M3k[2];
                    break;
                case 133:
                    U3k = (-M3k[1] * M3k[3] * M3k[2]) / M3k[4] + M3k[0];
                    break;
                case 119:
                    U3k = M3k[2] + M3k[1] * (M3k[3] - M3k[0]);
                    break;
                case 32:
                    U3k = M3k[1] / M3k[0];
                    break;
                case 7:
                    U3k = (M3k[0] - M3k[1]) / M3k[2] / M3k[3] + M3k[4];
                    break;
                case 146:
                    U3k = M3k[2] + M3k[0] * M3k[1];
                    break;
                case 113:
                    U3k = (M3k[1] / M3k[5]) * (M3k[6] * M3k[3] * M3k[4] + M3k[0]) + M3k[2];
                    break;
                case 37:
                    U3k = (M3k[2] + M3k[1]) / M3k[0] + M3k[3];
                    break;
                case 70:
                    U3k = (M3k[0] * M3k[2] + M3k[4]) * M3k[3] - M3k[1];
                    break;
                case 50:
                    U3k = M3k[2] + (M3k[1] - M3k[4]) * (M3k[0] / M3k[5] - M3k[6]) * M3k[3];
                    break;
                case 35:
                    U3k = (M3k[0] / M3k[2] - M3k[1]) / M3k[4] + M3k[3];
                    break;
                case 24:
                    U3k = M3k[1] - M3k[0] - M3k[2];
                    break;
                case 40:
                    U3k = (M3k[3] / M3k[0]) * M3k[4] - M3k[2] + M3k[1];
                    break;
                case 102:
                    U3k = M3k[1] + M3k[2] + M3k[0] + M3k[3];
                    break;
                case 2:
                    U3k = M3k[2] - M3k[0] + M3k[1];
                    break;
                case 39:
                    U3k = ((M3k[0] * M3k[1]) / M3k[3]) * M3k[2] - M3k[4];
                    break;
                case 46:
                    U3k = (M3k[0] - M3k[2]) / M3k[1];
                    break;
                case 95:
                    U3k = (M3k[0] / M3k[3] + M3k[4]) * M3k[1] + M3k[2];
                    break;
                case 61:
                    U3k = M3k[0] << M3k[1];
                    break;
                case 74:
                    U3k = M3k[1] * M3k[0] - M3k[3] + M3k[2];
                    break;
                case 71:
                    U3k = (M3k[3] - M3k[4]) / M3k[2] / M3k[1] - M3k[0];
                    break;
                case 73:
                    U3k = M3k[3] + M3k[0] - M3k[2] + M3k[1];
                    break;
                case 104:
                    U3k = (M3k[2] * M3k[3]) / M3k[1] / M3k[4] + M3k[0];
                    break;
                case 17:
                    U3k = (M3k[1] + M3k[2]) * M3k[0] - M3k[3];
                    break;
                case 100:
                    U3k = (M3k[1] * M3k[2]) / M3k[4] - M3k[0] + M3k[3];
                    break;
                case 92:
                    U3k = (M3k[0] / M3k[2]) * M3k[3] + M3k[1];
                    break;
                case 22:
                    U3k = M3k[1] + +M3k[0];
                    break;
                case 20:
                    U3k = ((M3k[4] - M3k[0]) * (M3k[5] - M3k[1])) / (M3k[2] - M3k[3]);
                    break;
                case 118:
                    U3k = (M3k[1] - M3k[0]) * (M3k[3] - M3k[6]) - (M3k[4] - M3k[7]) * (M3k[5] - M3k[2]);
                    break;
                case 19:
                    U3k = M3k[0] * M3k[1];
                    break;
                case 27:
                    U3k = (M3k[0] * M3k[1] + M3k[4]) / M3k[3] + M3k[2];
                    break;
                case 126:
                    U3k = M3k[1] === M3k[0];
                    break;
                case 42:
                    U3k = (M3k[2] - M3k[0] + M3k[3]) / M3k[1] + M3k[4];
                    break;
                case 160:
                    U3k = (M3k[3] / M3k[4] - M3k[2]) * M3k[1] - M3k[0];
                    break;
            }
            return U3k;
        },
        F3k: function (Y3k) {
            r3k = Y3k;
        },
    };
})();
R1aa[419163] = (function () {
    var f9Y = 2;
    for (; f9Y !== 4; ) {
        switch (f9Y) {
            case 2:
                var J06 = R1aa[186458];
                var N06, L06;
                return {
                    k06: function (B06, S06, l06, y06) {
                        var i9Y = 2;
                        for (; i9Y !== 1; ) {
                            switch (i9Y) {
                                case 2:
                                    return Y06(B06, S06, l06, y06);
                                    break;
                            }
                        }
                    },
                    o06: function (V06, X06, U06, b06) {
                        var S9Y = 2;
                        for (; S9Y !== 1; ) {
                            switch (S9Y) {
                                case 2:
                                    return Y06(V06, X06, U06, b06, true);
                                    break;
                            }
                        }
                    },
                };
                break;
        }
    }
    function Y06(F06, v06, x06, d06, O06) {
        var l9Y = 2;
        for (; l9Y !== 15; ) {
            switch (l9Y) {
                case 16:
                    return R1aa.G4a(C06, P06, x06);
                    break;
                case 2:
                    var C06, P06, H06, E06;
                    E06 = J06[h06([-6, -3, -15, -17, 2, -9, -3, -4])];
                    !N06 && (N06 = typeof E06 !== "undefined" ? E06[h06([-10, -3, 1, 2, -4, -17, -5, -13])] || " " : "");
                    !L06 && (L06 = typeof E06 !== "undefined" ? E06[h06([-10, 0, -13, -12])] : "");
                    l9Y = 3;
                    break;
                case 9:
                    l9Y = d06 > 0 ? 8 : 19;
                    break;
                case 13:
                    l9Y = v06 && A06 > 0 && H06.u8gg(A06 - 1) !== 46 ? 12 : 11;
                    break;
                case 11:
                    C06 = H06.z8gg(A06, H06.length);
                    P06 = C06.length;
                    return R1aa.G4a(C06, P06, x06);
                    break;
                case 18:
                    C06 = H06.z8gg(0, H06.length);
                    P06 = C06.length;
                    l9Y = 16;
                    break;
                case 14:
                    var A06 = H06.length - F06;
                    l9Y = 13;
                    break;
                case 8:
                    C06 = H06.z8gg(F06, d06);
                    P06 = C06.length;
                    l9Y = 6;
                    break;
                case 12:
                    return false;
                    break;
                case 6:
                    return R1aa.G4a(C06, P06, x06);
                    break;
                case 3:
                    H06 = O06 ? L06 : N06;
                    l9Y = 9;
                    break;
                case 19:
                    l9Y = F06 === null || F06 <= 0 ? 18 : 14;
                    break;
            }
        }
    }
    function h06(f06) {
        var g9Y = 2;
        for (; g9Y !== 7; ) {
            switch (g9Y) {
                case 2:
                    var r06 = 1;
                    var n06 = "";
                    g9Y = 5;
                    break;
                case 5:
                    var K06 = 0;
                    g9Y = 4;
                    break;
                case 4:
                    g9Y = K06 < f06.length ? 3 : 8;
                    break;
                case 8:
                    return n06;
                    break;
                case 9:
                    K06++;
                    g9Y = 4;
                    break;
                case 3:
                    n06 += M3gg.j8gg(f06[K06] - r06 + 115);
                    g9Y = 9;
                    break;
            }
        }
    }
})();
R1aa.S5s = function () {
    return typeof R1aa[405931].s3U === "function" ? R1aa[405931].s3U.apply(R1aa[405931], arguments) : R1aa[405931].s3U;
};
R1aa.U19 = (function () {
    var z19 = 2;
    for (; z19 !== 9; ) {
        switch (z19) {
            case 2:
                var Y19 = [arguments];
                Y19[7] = undefined;
                Y19[5] = {};
                Y19[5].s3f = function () {
                    var i19 = 2;
                    for (; i19 !== 90; ) {
                        switch (i19) {
                            case 48:
                                L19[4].g6aa(L19[2]);
                                L19[4].g6aa(L19[1]);
                                L19[4].g6aa(L19[22]);
                                L19[4].g6aa(L19[3]);
                                L19[49] = [];
                                L19[33] = "Z1s";
                                L19[10] = "q1s";
                                i19 = 62;
                                break;
                            case 75:
                                L19[63] = {};
                                L19[63][L19[16]] = L19[34][L19[38]][L19[68]];
                                L19[63][L19[64]] = L19[28];
                                L19[49].g6aa(L19[63]);
                                i19 = 71;
                                break;
                            case 41:
                                L19[78].k1s = function () {
                                    var y3f = typeof h6aa === "function";
                                    return y3f;
                                };
                                L19[57] = L19[78];
                                L19[97] = {};
                                L19[97].s1s = ["z1s"];
                                i19 = 37;
                                break;
                            case 7:
                                L19[1] = L19[6];
                                L19[5] = {};
                                L19[5].s1s = ["e1s"];
                                L19[5].k1s = function () {
                                    var P3f = function () {
                                        return "x".repeat(2);
                                    };
                                    var M3f = /\u0078\x78/.V6aa(P3f + []);
                                    return M3f;
                                };
                                L19[3] = L19[5];
                                L19[8] = {};
                                L19[8].s1s = ["e1s"];
                                i19 = 20;
                                break;
                            case 2:
                                var L19 = [arguments];
                                i19 = 1;
                                break;
                            case 57:
                                i19 = L19[48] < L19[4].length ? 56 : 69;
                                break;
                            case 23:
                                L19[52] = {};
                                L19[52].s1s = ["e1s"];
                                L19[52].k1s = function () {
                                    var C3f = function () {
                                        return "x y".slice(0, 1);
                                    };
                                    var O3f = !/\u0079/.V6aa(C3f + []);
                                    return O3f;
                                };
                                L19[24] = L19[52];
                                i19 = 34;
                                break;
                            case 59:
                                L19[16] = "N1s";
                                i19 = 58;
                                break;
                            case 56:
                                L19[34] = L19[4][L19[48]];
                                try {
                                    L19[28] = L19[34][L19[12]]() ? L19[33] : L19[10];
                                } catch (T3f) {
                                    L19[28] = L19[10];
                                }
                                i19 = 77;
                                break;
                            case 31:
                                L19[22] = L19[82];
                                i19 = 30;
                                break;
                            case 69:
                                i19 = (function (P19) {
                                    var I19 = 2;
                                    for (; I19 !== 22; ) {
                                        switch (I19) {
                                            case 15:
                                                v19[6] = v19[1][v19[9]];
                                                v19[5] = v19[8][v19[6]].h / v19[8][v19[6]].t;
                                                I19 = 26;
                                                break;
                                            case 1:
                                                I19 = v19[0][0].length === 0 ? 5 : 4;
                                                break;
                                            case 25:
                                                v19[4] = true;
                                                I19 = 24;
                                                break;
                                            case 14:
                                                I19 = typeof v19[8][v19[7][L19[16]]] === "undefined" ? 13 : 11;
                                                break;
                                            case 2:
                                                var v19 = [arguments];
                                                I19 = 1;
                                                break;
                                            case 12:
                                                v19[1].g6aa(v19[7][L19[16]]);
                                                I19 = 11;
                                                break;
                                            case 7:
                                                I19 = v19[9] < v19[0][0].length ? 6 : 18;
                                                break;
                                            case 11:
                                                v19[8][v19[7][L19[16]]].t += true;
                                                I19 = 10;
                                                break;
                                            case 13:
                                                v19[8][v19[7][L19[16]]] = function () {
                                                    var S19 = 2;
                                                    for (; S19 !== 9; ) {
                                                        switch (S19) {
                                                            case 3:
                                                                return E19[9];
                                                                break;
                                                            case 2:
                                                                var E19 = [arguments];
                                                                E19[9] = {};
                                                                E19[9].h = 0;
                                                                E19[9].t = 0;
                                                                S19 = 3;
                                                                break;
                                                        }
                                                    }
                                                }.c6aa(this, arguments);
                                                I19 = 12;
                                                break;
                                            case 8:
                                                v19[9] = 0;
                                                I19 = 7;
                                                break;
                                            case 18:
                                                v19[4] = false;
                                                I19 = 17;
                                                break;
                                            case 16:
                                                I19 = v19[9] < v19[1].length ? 15 : 23;
                                                break;
                                            case 23:
                                                return v19[4];
                                                break;
                                            case 20:
                                                v19[8][v19[7][L19[16]]].h += true;
                                                I19 = 19;
                                                break;
                                            case 17:
                                                v19[9] = 0;
                                                I19 = 16;
                                                break;
                                            case 26:
                                                I19 = v19[5] >= 0.5 ? 25 : 24;
                                                break;
                                            case 10:
                                                I19 = v19[7][L19[64]] === L19[33] ? 20 : 19;
                                                break;
                                            case 4:
                                                v19[8] = {};
                                                v19[1] = [];
                                                v19[9] = 0;
                                                I19 = 8;
                                                break;
                                            case 24:
                                                v19[9]++;
                                                I19 = 16;
                                                break;
                                            case 5:
                                                return;
                                                break;
                                            case 6:
                                                v19[7] = v19[0][0][v19[9]];
                                                I19 = 14;
                                                break;
                                            case 19:
                                                v19[9]++;
                                                I19 = 7;
                                                break;
                                        }
                                    }
                                })(L19[49])
                                    ? 68
                                    : 67;
                                break;
                            case 58:
                                L19[48] = 0;
                                i19 = 57;
                                break;
                            case 76:
                                i19 = L19[68] < L19[34][L19[38]].length ? 75 : 70;
                                break;
                            case 70:
                                L19[48]++;
                                i19 = 57;
                                break;
                            case 51:
                                L19[4].g6aa(L19[92]);
                                L19[4].g6aa(L19[57]);
                                L19[4].g6aa(L19[9]);
                                i19 = 48;
                                break;
                            case 1:
                                i19 = Y19[7] ? 5 : 4;
                                break;
                            case 71:
                                L19[68]++;
                                i19 = 76;
                                break;
                            case 37:
                                L19[97].k1s = function () {
                                    var e3f = typeof K6aa === "function";
                                    return e3f;
                                };
                                L19[92] = L19[97];
                                L19[4].g6aa(L19[53]);
                                L19[4].g6aa(L19[24]);
                                i19 = 52;
                                break;
                            case 30:
                                L19[56] = {};
                                L19[56].s1s = ["z1s"];
                                L19[56].k1s = function () {
                                    var Q3f = typeof M6aa === "function";
                                    return Q3f;
                                };
                                L19[91] = L19[56];
                                L19[78] = {};
                                L19[78].s1s = ["z1s"];
                                i19 = 41;
                                break;
                            case 20:
                                L19[8].k1s = function () {
                                    var j3f = function () {
                                        return [1, 2, 3, 4, 5].concat([5, 6, 7, 8]);
                                    };
                                    var h3f = !/\x28\x5b/.V6aa(j3f + []);
                                    return h3f;
                                };
                                L19[9] = L19[8];
                                L19[7] = {};
                                L19[7].s1s = ["e1s"];
                                L19[7].k1s = function () {
                                    var B3f = function () {
                                        return String.fromCharCode(0x61);
                                    };
                                    var K3f = !/\x30\x78\u0036\u0031/.V6aa(B3f + []);
                                    return K3f;
                                };
                                L19[2] = L19[7];
                                L19[42] = {};
                                i19 = 26;
                                break;
                            case 26:
                                L19[42].s1s = ["e1s"];
                                L19[42].k1s = function () {
                                    var c3f = function () {
                                        return "aa".lastIndexOf("a");
                                    };
                                    var H3f = /\x31/.V6aa(c3f + []);
                                    return H3f;
                                };
                                L19[53] = L19[42];
                                i19 = 23;
                                break;
                            case 77:
                                L19[68] = 0;
                                i19 = 76;
                                break;
                            case 67:
                                Y19[7] = 52;
                                return 81;
                                break;
                            case 5:
                                return 85;
                                break;
                            case 4:
                                L19[4] = [];
                                L19[6] = {};
                                L19[6].s1s = ["z1s"];
                                L19[6].k1s = function () {
                                    var Z3f = false;
                                    var A3f = [];
                                    try {
                                        for (var b3f in console) {
                                            A3f.g6aa(b3f);
                                        }
                                        Z3f = A3f.length === 0;
                                    } catch (V3f) {}
                                    var g3f = Z3f;
                                    return g3f;
                                };
                                i19 = 7;
                                break;
                            case 34:
                                L19[82] = {};
                                L19[82].s1s = ["e1s"];
                                L19[82].k1s = function () {
                                    var I3f = function () {
                                        return btoa("=");
                                    };
                                    var F3f = !/\x62\u0074\u006f\x61/.V6aa(I3f + []);
                                    return F3f;
                                };
                                i19 = 31;
                                break;
                            case 68:
                                i19 = 52 ? 68 : 67;
                                break;
                            case 62:
                                L19[38] = "s1s";
                                L19[64] = "w1s";
                                L19[12] = "k1s";
                                i19 = 59;
                                break;
                            case 52:
                                L19[4].g6aa(L19[91]);
                                i19 = 51;
                                break;
                        }
                    }
                };
                return Y19[5];
                break;
        }
    }
})();
function d1aa(n19) {
    function p09(d19) {
        var F19 = 2;
        for (; F19 !== 5; ) {
            switch (F19) {
                case 2:
                    var l19 = [arguments];
                    return l19[0][0].Array;
                    break;
            }
        }
    }
    function e09(O19) {
        var x19 = 2;
        for (; x19 !== 5; ) {
            switch (x19) {
                case 2:
                    var j19 = [arguments];
                    return j19[0][0].Function;
                    break;
            }
        }
    }
    var M19 = 2;
    for (; M19 !== 77; ) {
        switch (M19) {
            case 36:
                p19[21] = p19[34];
                p19[21] += p19[3];
                p19[21] += p19[4];
                p19[50] = p19[5];
                M19 = 51;
                break;
            case 35:
                p19[95] = "c6";
                p19[88] = "K";
                p19[66] = 1;
                p19[56] = 0;
                M19 = 31;
                break;
            case 14:
                p19[5] = "";
                p19[6] = "V6";
                p19[5] = "M";
                p19[4] = "";
                M19 = 10;
                break;
            case 61:
                var a09 = function (o19, u19, m19, q19) {
                    var W19 = 2;
                    for (; W19 !== 5; ) {
                        switch (W19) {
                            case 2:
                                var h19 = [arguments];
                                R09(p19[0][0], h19[0][0], h19[0][1], h19[0][2], h19[0][3]);
                                W19 = 5;
                                break;
                        }
                    }
                };
                M19 = 60;
                break;
            case 64:
                p19[39] = p19[2];
                p19[39] += p19[14];
                p19[39] += p19[26];
                M19 = 61;
                break;
            case 2:
                var p19 = [arguments];
                p19[2] = "";
                p19[2] = "g";
                p19[9] = "";
                p19[9] = "dual";
                M19 = 9;
                break;
            case 51:
                p19[50] += p19[8];
                p19[50] += p19[7];
                p19[54] = p19[29];
                p19[54] += p19[1];
                M19 = 47;
                break;
            case 9:
                p19[1] = "";
                p19[1] = "resi";
                p19[7] = "";
                p19[7] = "aa";
                M19 = 14;
                break;
            case 57:
                a09(C09, p19[21], p19[56], p19[36]);
                M19 = 56;
                break;
            case 56:
                a09(C09, p19[86], p19[56], p19[92]);
                M19 = 55;
                break;
            case 10:
                p19[4] = "e";
                p19[8] = "6";
                p19[3] = "";
                p19[3] = "_optimiz";
                p19[68] = "";
                p19[68] = "h";
                M19 = 15;
                break;
            case 15:
                p19[34] = "_";
                p19[29] = "";
                p19[29] = "__";
                p19[14] = "";
                M19 = 24;
                break;
            case 47:
                p19[54] += p19[9];
                p19[43] = p19[6];
                p19[43] += p19[26];
                p19[43] += p19[26];
                M19 = 64;
                break;
            case 31:
                p19[37] = p19[95];
                p19[37] += p19[26];
                p19[37] += p19[26];
                p19[92] = p19[88];
                M19 = 44;
                break;
            case 55:
                a09(e09, "apply", p19[66], p19[37]);
                M19 = 77;
                break;
            case 58:
                a09(C09, p19[54], p19[56], p19[50]);
                M19 = 57;
                break;
            case 60:
                a09(p09, "push", p19[66], p19[39]);
                M19 = 59;
                break;
            case 40:
                p19[86] += p19[24];
                p19[36] = p19[68];
                p19[36] += p19[14];
                p19[36] += p19[26];
                M19 = 36;
                break;
            case 24:
                p19[14] = "6a";
                p19[24] = "t";
                p19[90] = "abstrac";
                p19[26] = "a";
                M19 = 35;
                break;
            case 44:
                p19[92] += p19[14];
                p19[92] += p19[26];
                p19[86] = p19[29];
                p19[86] += p19[90];
                M19 = 40;
                break;
            case 59:
                a09(g09, "test", p19[66], p19[43]);
                M19 = 58;
                break;
        }
    }
    function R09(f19, V19, w19, b19, B19) {
        var Z19 = 2;
        for (; Z19 !== 7; ) {
            switch (Z19) {
                case 9:
                    k19[2] = "defin";
                    try {
                        var G19 = 2;
                        for (; G19 !== 8; ) {
                            switch (G19) {
                                case 3:
                                    try {
                                        var H19 = 2;
                                        for (; H19 !== 3; ) {
                                            switch (H19) {
                                                case 1:
                                                    k19[9] += k19[1];
                                                    k19[9] += k19[3];
                                                    k19[0][0].Object[k19[9]](k19[8], k19[0][4], k19[7]);
                                                    H19 = 3;
                                                    break;
                                                case 2:
                                                    k19[9] = k19[2];
                                                    H19 = 1;
                                                    break;
                                            }
                                        }
                                    } catch (V09) {}
                                    k19[8][k19[0][4]] = k19[7].value;
                                    G19 = 8;
                                    break;
                                case 5:
                                    k19[8] = [k19[4], k19[4].prototype][k19[0][3]];
                                    k19[7].value = k19[8][k19[0][2]];
                                    G19 = 3;
                                    break;
                                case 2:
                                    k19[7] = {};
                                    k19[4] = (1, k19[0][1])(k19[0][0]);
                                    G19 = 5;
                                    break;
                            }
                        }
                    } catch (w09) {}
                    Z19 = 7;
                    break;
                case 2:
                    var k19 = [arguments];
                    k19[1] = "";
                    k19[3] = "operty";
                    k19[1] = "";
                    k19[1] = "ePr";
                    Z19 = 9;
                    break;
            }
        }
    }
    function g09(s19) {
        var J19 = 2;
        for (; J19 !== 5; ) {
            switch (J19) {
                case 2:
                    var T19 = [arguments];
                    return T19[0][0].RegExp;
                    break;
            }
        }
    }
    function C09(A19) {
        var r19 = 2;
        for (; r19 !== 5; ) {
            switch (r19) {
                case 2:
                    var y19 = [arguments];
                    return y19[0][0];
                    break;
            }
        }
    }
}
function N8gg(K7Y) {
    function O2y(n7Y) {
        var c9Y = 2;
        for (; c9Y !== 5; ) {
            switch (c9Y) {
                case 2:
                    var U7Y = [arguments];
                    return U7Y[0][0].String;
                    break;
            }
        }
    }
    function R2y(V7Y) {
        var d9Y = 2;
        for (; d9Y !== 5; ) {
            switch (d9Y) {
                case 2:
                    var I7Y = [arguments];
                    d9Y = 1;
                    break;
                case 1:
                    return I7Y[0][0];
                    break;
            }
        }
    }
    function h2y(W7Y) {
        var a9Y = 2;
        for (; a9Y !== 5; ) {
            switch (a9Y) {
                case 2:
                    var J7Y = [arguments];
                    return J7Y[0][0].String;
                    break;
            }
        }
    }
    var X7Y = 2;
    for (; X7Y !== 28; ) {
        switch (X7Y) {
            case 30:
                N2y(O2y, "substring", E7Y[64], E7Y[48]);
                X7Y = 29;
                break;
            case 15:
                E7Y[61] += E7Y[6];
                E7Y[48] = E7Y[3];
                E7Y[48] += E7Y[6];
                E7Y[48] += E7Y[6];
                X7Y = 24;
                break;
            case 12:
                E7Y[6] = "";
                E7Y[6] = "g";
                E7Y[4] = "8g";
                E7Y[5] = 0;
                X7Y = 19;
                break;
            case 24:
                E7Y[19] = E7Y[2];
                E7Y[19] += E7Y[1];
                E7Y[19] += E7Y[8];
                E7Y[22] = E7Y[7];
                E7Y[22] += E7Y[9];
                X7Y = 34;
                break;
            case 34:
                E7Y[22] += E7Y[8];
                X7Y = 33;
                break;
            case 7:
                E7Y[1] = "8";
                E7Y[2] = "j";
                E7Y[6] = "";
                E7Y[3] = "z8";
                X7Y = 12;
                break;
            case 29:
                N2y(O2y, "charCodeAt", E7Y[64], E7Y[61]);
                X7Y = 28;
                break;
            case 33:
                var N2y = function (s7Y, M7Y, N7Y, O7Y) {
                    var Y7Y = 2;
                    for (; Y7Y !== 5; ) {
                        switch (Y7Y) {
                            case 2:
                                var F7Y = [arguments];
                                Q2y(E7Y[0][0], F7Y[0][0], F7Y[0][1], F7Y[0][2], F7Y[0][3]);
                                Y7Y = 5;
                                break;
                        }
                    }
                };
                X7Y = 32;
                break;
            case 19:
                E7Y[64] = 1;
                E7Y[25] = "u";
                E7Y[61] = E7Y[25];
                E7Y[61] += E7Y[4];
                X7Y = 15;
                break;
            case 32:
                N2y(R2y, "String", E7Y[5], E7Y[22]);
                X7Y = 31;
                break;
            case 31:
                N2y(h2y, "fromCharCode", E7Y[5], E7Y[19]);
                X7Y = 30;
                break;
            case 2:
                var E7Y = [arguments];
                E7Y[9] = "";
                E7Y[9] = "3";
                E7Y[8] = "";
                E7Y[7] = "M";
                E7Y[8] = "gg";
                E7Y[2] = "";
                X7Y = 7;
                break;
        }
    }
    function Q2y(P7Y, Q7Y, R7Y, h7Y, T7Y) {
        var Z7Y = 2;
        for (; Z7Y !== 14; ) {
            switch (Z7Y) {
                case 6:
                    try {
                        var G9Y = 2;
                        for (; G9Y !== 8; ) {
                            switch (G9Y) {
                                case 4:
                                    o7Y[2].value = o7Y[5][o7Y[0][2]];
                                    try {
                                        var b9Y = 2;
                                        for (; b9Y !== 3; ) {
                                            switch (b9Y) {
                                                case 1:
                                                    o7Y[1] += o7Y[3];
                                                    o7Y[1] += o7Y[7];
                                                    o7Y[0][0].Object[o7Y[1]](o7Y[5], o7Y[0][4], o7Y[2]);
                                                    b9Y = 3;
                                                    break;
                                                case 2:
                                                    o7Y[1] = o7Y[9];
                                                    b9Y = 1;
                                                    break;
                                            }
                                        }
                                    } catch (f7Y) {}
                                    o7Y[5][o7Y[0][4]] = o7Y[2].value;
                                    G9Y = 8;
                                    break;
                                case 2:
                                    o7Y[2] = {};
                                    o7Y[8] = (1, o7Y[0][1])(o7Y[0][0]);
                                    o7Y[5] = [o7Y[8], o7Y[8].prototype][o7Y[0][3]];
                                    G9Y = 4;
                                    break;
                            }
                        }
                    } catch (g7Y) {}
                    Z7Y = 14;
                    break;
                case 3:
                    o7Y[3] = "";
                    o7Y[3] = "eProper";
                    o7Y[9] = "";
                    o7Y[9] = "defin";
                    Z7Y = 6;
                    break;
                case 2:
                    var o7Y = [arguments];
                    o7Y[7] = "";
                    o7Y[7] = "ty";
                    o7Y[3] = "";
                    Z7Y = 3;
                    break;
            }
        }
    }
}
R1aa.J5s = function (p5s) {
    R1aa.K19();
    if (R1aa && p5s) return R1aa.g5s(p5s);
};
R1aa.L5s = function (E5s) {
    R1aa.K19();
    if (R1aa) return R1aa.S5s(E5s);
};
R1aa.T5s = function (B5s) {
    R1aa.X19();
    if (R1aa) return R1aa.g5s(B5s);
};
R1aa.y5s = function (R5s) {
    R1aa.K19();
    if (R1aa && R5s) return R1aa.S5s(R5s);
};
R1aa.x5s = function (a5s) {
    R1aa.K19();
    if (R1aa && a5s) return R1aa.g5s(a5s);
};
R1aa.D5s = function (z5s) {
    R1aa.K19();
    if (R1aa) return R1aa.S5s(z5s);
};
R1aa.A5s = function (M5s) {
    R1aa.X19();
    if (R1aa && M5s) return R1aa.g5s(M5s);
};
var A7w, E7w, z7w, M7w, t7w, y7w, h7w, w7w, m7w, v7w, W7w, n7w, x7w, c7w, f7w, R7w, i7w, q7w, G7w, Q7w, L7w, C7w, d7w, g7w, X7w, B7w, S9L, P9L, p9L, F9L, j9L, r9L, Z9L, o9L, T9L, a9L, k9L, I7w;
A7w = (V9L) => {
    var e9L;
    e9L = V9L.timezoneJS = {};
    V9L.CIQ = K9L;
    K9L.inheritsFrom = function (J9L, u9L, U9L) {
        var b9L;
        b9L = u9L.prototype || Object.getPrototypeOf(u9L);
        J9L.prototype = U9L !== ![] && typeof u9L === "function" ? new u9L() : Object.create(b9L);
        Object.defineProperties(J9L.prototype, { constructor: { configurable: !![], enumerable: !{}, value: J9L, writable: !![] }, parent: { configurable: !!{}, enumerable: !!0, value: b9L, writable: !![] } });
    };
    K9L.extend = function (N9L, A9L, E9L) {
        var I9L, O9L;
        for (I9L in A9L) {
            O9L = A9L[I9L];
            if (N9L === O9L || O9L === undefined) {
                continue;
            } else if (O9L === null || E9L === !!1) {
                N9L[I9L] = O9L;
            } else if (O9L.constructor == Array) {
                N9L[I9L] = O9L.slice();
            } else if (O9L.constructor == Object) {
                N9L[I9L] = K9L.extend(typeof N9L[I9L] === "object" && N9L[I9L] !== null ? N9L[I9L] : {}, O9L);
            } else {
                N9L[I9L] = O9L;
            }
        }
        return N9L;
    };
    K9L.activateImports = function (...M9L) {
        var z9L;
        z9L = this;
        if (!z9L.activatedImports) {
            z9L.activatedImports = {};
        }
        M9L.forEach((t9L) => {
            var c0T;
            c0T = "funct";
            c0T += "io";
            R1aa.X19();
            c0T += "n";
            if (typeof t9L == c0T) {
                if (!(t9L.__guid in z9L.activatedImports)) {
                    t9L.__guid = z9L.uniqueID(!![]);
                    z9L.activatedImports[t9L.__guid] = t9L.__name || t9L.name;
                    t9L(V9L);
                }
            }
        });
    };
    R1aa.X19();
    function K9L() {}
};
E7w = (m9L) => {
    var C0T, y9L, i0T, h9L, m9a, P9a, L9a, w9L, H0T;
    C0T = "unde";
    C0T += "f";
    C0T += "ined";
    y9L = typeof window !== "undefined" ? window : typeof global !== C0T ? global : {};
    {
        i0T = "funct";
        i0T += "io";
        i0T += "n";
        h9L = function (n9L, v9L) {
            var n0T, W9L;
            n0T = "Eve";
            n0T += "n";
            n0T += "t";
            W9L = document.createEvent(n0T);
            W9L.initEvent(n9L, !!(v9L && v9L.bubbles), !!(v9L && v9L.cancelable));
            return W9L;
        };
        if (y9L.Event && typeof y9L.Event !== i0T) {
            m9a = 907745371;
            P9a = 1846020161;
            L9a = +"2";
            for (var G9a = 1; R1aa.J4a(G9a.toString(), G9a.toString().length, +"16267") !== m9a; G9a++) {
                h9L.prototype = y9L.Event.prototype;
                L9a += 2;
            }
            if (R1aa.J4a(L9a.toString(), L9a.toString().length, 120) !== P9a) {
                h9L.prototype = y9L.Event.prototype;
            }
            y9L.Event = h9L;
        }
        w9L = function (f9L, x9L) {
            var c9L;
            c9L = document.createEvent("CustomEvent");
            c9L.initCustomEvent(f9L, !!(x9L && x9L.bubbles), !!(x9L && x9L.cancelable), x9L && x9L.detail);
            return c9L;
        };
        if (y9L.CustomEvent && typeof y9L.CustomEvent !== "function") {
            w9L.prototype = y9L.CustomEvent.prototype;
            y9L.CustomEvent = w9L;
        }
    }
    {
        H0T = "undefin";
        H0T += "ed";
        if (typeof global !== H0T) {
            if (typeof global.CanvasRenderingContext2D === "undefined") {
                global.CanvasRenderingContext2D = function () {};
            }
        }
    }
};
z7w = (L9L) => {
    var s29 = R1aa;
    var u0T, W0T, s0T, h0T, f0T, e0T, k0T, R9L, q9L, i9L, G9L, Q9L;
    u0T = "imp";
    u0T += "o";
    u0T += "rt";
    W0T = "r";
    W0T += "egisterElem";
    W0T += "ent";
    s0T = "firefo";
    s0T += "x";
    h0T = "Sa";
    s29.X19();
    h0T += "fari/";
    f0T = "E";
    f0T += "dg";
    f0T += "e";
    f0T += "/";
    e0T = "Ma";
    e0T += "c";
    e0T += "I";
    e0T += "ntel";
    k0T = "u";
    k0T += "ndefi";
    k0T += "ned";
    R9L = L9L.CIQ;
    q9L = typeof navigator !== "undefined" ? navigator : { userAgent: "" };
    i9L = q9L.userAgent;
    G9L = typeof window !== k0T ? window : {};
    Q9L = typeof document !== "undefined" ? document : {};
    R9L.ipad = i9L.indexOf("iPad") != -1 || (q9L.platform === e0T && q9L.maxTouchPoints > ("1" | 0));
    s29.L3k(0);
    var N7T = s29.j3k(16, 1, 1, 17);
    R9L.iphone = i9L.indexOf("iPhone") != N7T;
    s29.T3k(1);
    var E7T = s29.v3k(13, 14);
    R9L.isAndroid = i9L.toLowerCase().indexOf("android") > E7T;
    R9L.isIE = i9L.toLowerCase().indexOf("msie") > -1 || i9L.indexOf("Trident/") > -1;
    s29.T3k(2);
    var Q7T = s29.v3k(13, 3, 9);
    R9L.isEdge = i9L.indexOf(f0T) > Q7T;
    s29.L3k(3);
    var t7T = s29.j3k(17, 35, 3, 16);
    R9L.isSafari = i9L.indexOf(h0T) > t7T;
    R9L.isIOS7 = i9L.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i);
    R9L.isIOS8 = i9L.match(/(iPad|iPhone);.*CPU.*OS 8_\d/i);
    R9L.isIOS9 = i9L.match(/(iPad|iPhone);.*CPU.*OS 9_\d/i);
    R9L.isIOS10 = i9L.match(/(iPad|iPhone);.*CPU.*OS 10_\d/i);
    R9L.isIOS7or8 = R9L.isIOS7 || R9L.isIOS8 || R9L.isIOS9 || R9L.isIOS10;
    R9L.isMobile = R9L.isAndroid || R9L.ipad || R9L.iphone;
    R9L.touchDevice = Q9L.ontouchstart !== undefined || q9L.maxTouchPoints > 1;
    R9L.isSurface = R9L.touchDevice && (R9L.isEdge || R9L.isIE || i9L.indexOf("Edg/") > -1);
    R9L.is_chrome = i9L.toLowerCase().indexOf("chrome") > -1 && !R9L.isEdge;
    s29.T3k(1);
    var U7T = s29.v3k(0, 1);
    R9L.isFF = i9L.toLowerCase().indexOf(s0T) > U7T;
    R9L.isSurfaceApp = G9L.MSApp;
    R9L.isWebComponentsSupported = typeof document !== "undefined" && W0T in document && u0T in document.createElement("link") && "content" in document.createElement("template");
    R9L.noKeyboard = R9L.isMobile || R9L.isSurfaceApp;
};
M7w = (d9L) => {
    var C9L, g9L, X9L;
    R1aa.K19();
    if (!d9L.SplinePlotter) {
        d9L.SplinePlotter = {};
    }
    C9L = d9L.CIQ;
    g9L = d9L.SplinePlotter;
    X9L = function (B9L, j0L, P0L, r0L) {
        var Z0L, p0L, F0L;
        Z0L = +"0";
        if (!r0L) {
            r0L = [];
        }
        if (!j0L || j0L < +"0") {
            j0L = 0;
        }
        function o0L(k0L) {
            var a0L;
            if (Z0L == r0L.length) {
                return;
            }
            a0L = r0L[Z0L];
            if (a0L.coord[0] == B9L[k0L] && a0L.coord[1] == B9L[k0L + 1]) {
                P0L.stroke();
                P0L.strokeStyle = a0L.color;
                P0L.setLineDash(a0L.pattern);
                P0L.lineDashOffset = 0;
                P0L.lineWidth = a0L.width;
                P0L.beginPath();
                P0L.moveTo(B9L[k0L], B9L[k0L + 1]);
                Z0L++;
            }
        }
        p0L = B9L.length;
        P0L.moveTo(B9L[0], B9L[1]);
        for (var S0L = 0; S0L < p0L - 3; S0L += +"2") {
            o0L(S0L);
            F0L = [];
            F0L[0] = { x: B9L[Math.max(+"0", S0L - 2)], y: B9L[Math.max(1, S0L - 1)] };
            F0L[1] = { x: B9L[S0L], y: B9L[S0L + 1] };
            F0L[2] = { x: B9L[S0L + ("2" << 971114176)], y: B9L[S0L + ("3" & 2147483647)] };
            F0L[+"3"] = { x: B9L[Math.min(p0L - ("2" | 2), S0L + 4)], y: B9L[Math.min(p0L - 1, S0L + ("5" >> 499499936))] };
            if (p0L === "4" * 1) {
                j0L = 0;
            }
            T0L(S0L, F0L, j0L);
        }
        function T0L(Y0L, H0L, s0L) {
            var a7a, y7a, R7a;
            ["1" >> 1978369728, 2].forEach((l0L) => {
                H0L[l0L].cp = {};
                ["177" >> 1320960352 < (3188, "911.53" - 0) ? "x" : "Q", "y"].forEach(function (D0L) {
                    var h99 = R1aa;
                    var K0L;
                    h99.L3k(4);
                    var T7T = h99.v3k(12, 11);
                    h99.T3k(5);
                    var S7T = h99.j3k(13, 10, 11, 10);
                    h99.T3k(6);
                    var D7T = h99.v3k(0, 1);
                    h99.T3k(7);
                    var v7T = h99.v3k(0, 20, 1, 4, 7);
                    h99.T3k(1);
                    var V7T = h99.j3k(40, 38);
                    h99.T3k(8);
                    var r7T = h99.v3k(6, 12, 8);
                    h99.T3k(9);
                    var z7T = h99.j3k(14, 5, 6, 7);
                    h99.L3k(10);
                    var w8T = h99.v3k(8, 12, 11, 14, 1);
                    h99.L3k(1);
                    var B8T = h99.v3k(12, 10);
                    h99.L3k(11);
                    var K8T = h99.v3k(16, 23, 14, 36, 19);
                    h99.T3k(12);
                    var b8T = h99.j3k(7, 16, 19, 2686, 5);
                    h99.L3k(13);
                    var l8T = h99.j3k(36, 3, 10);
                    h99.T3k(14);
                    var c8T = h99.v3k(13, 3, 17, 3, 5);
                    h99.L3k(1);
                    h99.K19();
                    var C8T = h99.v3k(14, 12);
                    h99.T3k(15);
                    var n8T = h99.v3k(19, 11, 6, 1);
                    h99.T3k(1);
                    var i8T = h99.j3k(19, 18);
                    h99.T3k(16);
                    var H8T = h99.v3k(656, 12, 17, 38);
                    K0L =
                        +"1" /
                        (T7T +
                            Math.sqrt(Math.pow(H0L[S7T * l0L - D7T].x - H0L[v7T * l0L - V7T].x, r7T) + Math.pow(H0L[z7T * l0L - w8T].y - H0L[B8T * l0L - K8T].y, b8T)) /
                                Math.sqrt(Math.pow(H0L[l8T].x - H0L[c8T].x, C8T) + Math.pow(H0L[n8T].y - H0L[i8T].y, H8T)));
                    h99.L3k(4);
                    var k8T = h99.v3k(16, 13);
                    h99.L3k(17);
                    var e8T = h99.j3k(2, 0, 8, 14);
                    h99.L3k(6);
                    var f8T = h99.j3k(0, 1);
                    H0L[l0L].cp[D0L] = H0L[l0L][D0L] + (k8T - e8T * l0L) * (H0L[l0L + f8T][D0L] - H0L[l0L - +"1"][D0L]) * s0L * (K0L || 0);
                    if (H0L[l0L].cp[D0L] < Math.min(H0L["1" * 1][D0L], H0L[2][D0L])) {
                        H0L[l0L].cp[D0L] = Math.min(H0L[1][D0L], H0L[2][D0L]);
                    }
                    if (H0L[l0L].cp[D0L] > Math.max(H0L[1][D0L], H0L[2][D0L])) {
                        H0L[l0L].cp[D0L] = Math.max(H0L[+"1"][D0L], H0L[2][D0L]);
                    }
                });
            });
            if (Y0L === 0) {
                P0L.quadraticCurveTo(H0L[2].cp.x, H0L[2].cp.y, H0L[2].x, H0L[+"2"].y);
            } else if (Y0L === p0L - ("4" >> 1863994880)) {
                P0L.quadraticCurveTo(H0L[1].cp.x, H0L["1" ^ 0].cp.y, H0L[+"2"].x, H0L[2].y);
            } else {
                a7a = -1886952867;
                y7a = -+"205000038";
                R7a = 2;
                for (var A7a = 1; R1aa.J4a(A7a.toString(), A7a.toString().length, 18399) !== a7a; A7a++) {
                    P0L.bezierCurveTo(H0L[+"2"].cp.x, H0L[2].cp.y, H0L[+"8"].cp.x, H0L[0].cp.y, H0L[6].x, H0L["4" << 675735424].y);
                    R7a += 2;
                }
                if (R1aa.J4a(R7a.toString(), R7a.toString().length, 81330) !== y7a) {
                    P0L.bezierCurveTo(H0L[2].cp.x, H0L[2].cp.y, H0L[8].cp.x, H0L["0" | 0].cp.y, H0L[6].x, H0L[+"4"].y);
                }
                P0L.bezierCurveTo(H0L[1].cp.x, H0L[1].cp.y, H0L[+"2"].cp.x, H0L[2].cp.y, H0L[2].x, H0L[+"2"].y);
            }
        }
    };
    if (!d9L.SplinePlotter.plotSpline) {
        d9L.SplinePlotter.plotSpline = X9L;
    }
    C9L.clearCanvas = function (V0L, e0L) {
        var u0L, b0L, J0L;
        V0L.isDirty = !!0;
        u0L = V0L.context;
        R1aa.T3k(1);
        u0L.clearRect(0, R1aa.v3k("0", 0), V0L.width, V0L.height);
        if (C9L.isAndroid && !C9L.is_chrome && !C9L.isFF) {
            if (C9L.ChartEngine.useOldAndroidClear && e0L) {
                u0L.fillStyle = e0L.containerColor;
                u0L.fillRect(0, 0, V0L.width, V0L.height);
                u0L.clearRect(0, 0, V0L.width, V0L.height);
            }
            b0L = V0L.width;
            V0L.width = 1;
            V0L.width = b0L;
        }
        J0L = e0L.chart.canvasShim.childNodes.length > 0;
        if (e0L.useBackgroundCanvas || J0L) {
            e0L.useBackgroundCanvas = J0L;
            if (V0L == e0L.chart.canvas) {
                C9L.clearCanvas(e0L.chart.backgroundCanvas, e0L);
            }
        }
    };
    C9L.fillTransparentCanvas = function (U0L, N0L, I0L, A0L) {
        var O0L;
        O0L = U0L.globalCompositeOperation;
        U0L.globalCompositeOperation = "destination-over";
        U0L.fillStyle = N0L;
        U0L.fillRect(0, 0, I0L, A0L);
        U0L.globalCompositeOperation = O0L;
    };
    C9L.convertBoxToPixels = function (z0L, m0L, E0L) {
        var M0L, t0L, y0L, h0L, w0L;
        M0L = z0L.panels[m0L];
        t0L = z0L.pixelFromTick(E0L.x0, M0L.chart);
        y0L = z0L.pixelFromTick(E0L.x1, M0L.chart);
        h0L = E0L.cy0 || E0L.cy0 === "0" << 513983360 ? E0L.cy0 : z0L.pixelFromValueAdjusted(M0L, E0L.x0, E0L.y0);
        w0L = E0L.cy1 || E0L.cy1 === 0 ? E0L.cy1 : z0L.pixelFromValueAdjusted(M0L, E0L.x1, E0L.y1);
        return { x0: t0L, x1: y0L, y0: h0L, y1: w0L };
    };
    C9L.fillArea = function (L0L, n0L, x0L) {
        var p0T, v0L, g0L, f0L, R0L, C0L, i0L, q0L, G0L, Q0L, c0L, W0L, d0L;
        p0T = "o";
        R1aa.K19();
        p0T += "b";
        p0T += "j";
        p0T += "ect";
        if (!n0L.length) {
            return;
        }
        v0L = L0L.chart.context;
        g0L = v0L.globalAlpha;
        f0L = arguments[2];
        R0L = arguments[3];
        C0L = arguments[4];
        i0L = 0;
        q0L = null;
        if (x0L && typeof x0L == p0T) {
            f0L = x0L.color;
            R0L = x0L.opacity;
            i0L = x0L.tension;
            C0L = x0L.panelName;
            q0L = x0L.yAxis;
        }
        if (!R0L && R0L !== "0" * 1) {
            R0L = 0.2;
        }
        if (f0L == "auto") {
            f0L = L0L.defaultColor;
        }
        v0L.globalAlpha = R0L;
        if (f0L) {
            v0L.fillStyle = f0L;
        }
        G0L = Number.MAX_VALUE;
        R1aa.L3k(18);
        Q0L = R1aa.v3k(G0L, 1);
        c0L = L0L.panels[C0L];
        if (c0L) {
            Q0L = (q0L || c0L.yAxis).top;
            G0L = (q0L || c0L.yAxis).bottom;
            v0L.save();
            v0L.beginPath();
            v0L.rect(c0L.left, Q0L, c0L.width, G0L - Q0L);
            v0L.clip();
        }
        v0L.beginPath();
        if (i0L) {
            d0L = [];
            for (W0L = 0; W0L < n0L.length - 2; W0L++) {
                d0L.push(n0L[W0L][0], n0L[W0L]["1" >> 1442286304]);
            }
            g9L.plotSpline(d0L, i0L, v0L);
            for (W0L = n0L.length - 2; W0L < n0L.length; W0L++) {
                v0L.lineTo(Math.round(n0L[W0L][0]), Math.round(n0L[W0L][1]));
            }
        } else {
            v0L.moveTo(n0L[+"0"][0], n0L[0][1]);
            for (W0L = +"1"; W0L < n0L.length; W0L++) {
                v0L.lineTo(n0L[W0L][0], n0L[W0L][1]);
            }
        }
        v0L.closePath();
        v0L.fill();
        if (c0L) {
            v0L.restore();
        }
        v0L.globalAlpha = g0L;
    };
    C9L.prepareChannelFill = function (B0L, X0L) {
        var p3L, T3L, a3L, Z3L, o3L, F3L, j3L, r3L;
        if (!X0L || X0L instanceof Array) {
            R1aa.L3k(19);
            X0L = arguments[R1aa.v3k("2", 1)];
        }
        if (!X0L.gapDisplayStyle && X0L.gapDisplayStyle !== !!0) {
            X0L.gapDisplayStyle = X0L.gaps;
        }
        p3L = B0L.panels[X0L.panelName];
        T3L = B0L.chart;
        a3L = T3L.context.strokeStyle;
        Z3L = { noDraw: X0L.noDraw, gapDisplayStyle: X0L.gapDisplayStyle };
        o3L = C9L.ensureDefaults(X0L, { noDraw: !![], gapDisplayStyle: {}, yAxis: p3L.yAxis });
        F3L = B0L.plotDataSegmentAsLine(X0L.topBand, p3L, o3L);
        j3L = B0L.plotDataSegmentAsLine(X0L.bottomBand, p3L, o3L);
        X0L.noDraw = Z3L.noDraw;
        X0L.gapDisplayStyle = Z3L.gapDisplayStyle;
        r3L = [];
        for (var S3L = 0; S3L < F3L.points.length; S3L += 2) {
            r3L.push([F3L.points[S3L], F3L.points[S3L + +"1"]]);
        }
        for (var P3L = j3L.points.length - 1; P3L >= 0; P3L -= 2) {
            r3L.push([j3L.points[P3L - 1], j3L.points[P3L]]);
        }
        C9L.fillArea(B0L, r3L, X0L);
        return;
    };
    C9L.preparePeakValleyFill = function (K3L, k3L) {
        var Y79 = R1aa;
        var J3L, N3L, q3L, Y3L, d3L, f3L, b3L, I3L, h3L, z3L, U3L, M3L, t3L, H3L, s3L, O3L, e3L, V3L, G3L, w3L, Q3L, m3L, L3L, o0T, A3L, E3L, v3L, R3L, W3L, E5a, Q5a, t5a, D3L, C3L, n3L, y3L, x3L, i3L, c3L;
        if (!k3L || k3L instanceof Array) {
            k3L = arguments[2];
        }
        if (!k3L.gapDisplayStyle && k3L.gapDisplayStyle !== ![]) {
            k3L.gapDisplayStyle = k3L.gaps;
        }
        J3L = K3L.panels[k3L.panelName];
        N3L = J3L.yAxis;
        q3L = K3L.chart;
        Y3L = q3L.context;
        d3L = Y3L.strokeStyle;
        f3L = { noDraw: k3L.noDraw, gapDisplayStyle: k3L.gapDisplayStyle };
        b3L = K3L.plotDataSegmentAsLine(k3L.band, J3L, C9L.ensureDefaults(k3L, { noDraw: !![], gapDisplayStyle: {} }));
        k3L.noDraw = f3L.noDraw;
        k3L.gapDisplayStyle = f3L.gapDisplayStyle;
        I3L = k3L.threshold;
        h3L = k3L.direction;
        z3L = k3L.reverse;
        U3L = k3L.gapDisplayStyle;
        if (k3L.yAxis) {
            N3L = k3L.yAxis;
        }
        M3L = -Number.MAX_VALUE;
        t3L = Number.MAX_VALUE;
        H3L = z3L ? M3L : t3L;
        if (I3L || I3L === 0) {
            H3L = K3L.pixelFromPrice(I3L, J3L, N3L);
        }
        s3L = [];
        O3L = b3L.points.length;
        for (var l3L = 0; l3L < O3L; l3L += 2) {
            e3L = b3L.points[l3L];
            Y79.L3k(6);
            V3L = b3L.points[Y79.j3k(l3L, 1)];
            if (k3L.roundOffEdges) {
                if (l3L === 0) {
                    e3L = Math.floor(e3L);
                } else if (l3L + 2 == O3L) {
                    e3L = Math.ceil(e3L);
                }
            }
            if (isNaN(V3L)) continue;
            Q3L = (V3L > H3L && h3L > 0) || (V3L < H3L && h3L < 0);
            if (!Q3L) {
                s3L.push([e3L, V3L]);
                M3L = Math.max(V3L, M3L);
                t3L = Math.min(V3L, t3L);
            }
            if (l3L < O3L - ("3" >> 1380470720)) {
                Y79.L3k(6);
                G3L = b3L.points[Y79.j3k(l3L, 2)];
                Y79.T3k(6);
                w3L = b3L.points[Y79.v3k(l3L, 3)];
                if ((V3L < H3L && w3L > H3L) || (V3L > H3L && w3L < H3L)) {
                    Y79.L3k(20);
                    e3L += Y79.v3k(V3L, e3L, w3L, V3L, H3L, G3L);
                    s3L.push([e3L, H3L]);
                }
            }
        }
        O3L = s3L.length;
        if (!O3L) {
            return;
        }
        m3L = k3L.edgeParameters;
        L3L = k3L.edgeHighlight;
        if (L3L) {
            if (m3L.lineWidth > 100) {
                Y79.T3k(1);
                m3L.lineWidth = Y79.j3k("1", 0);
            }
            Y3L.save();
            Y3L.beginPath();
            for (var u3L = 0; u3L < O3L - 1; u3L++) {
                o0T = "segme";
                o0T += "nt";
                A3L = s3L[u3L];
                Y79.L3k(6);
                E3L = s3L[Y79.j3k(u3L, 1)];
                if (A3L[1] == H3L && E3L[1] == H3L) continue;
                if (A3L[0] == E3L[0] && K3L.layout.candleWidth >= 1) {
                    if (A3L[1] == H3L && s3L[u3L - 1] && s3L[u3L - 1][1] == H3L) continue;
                    if (E3L[1] == H3L && s3L[u3L + 2] && s3L[u3L + "2" * 1][1] == H3L) continue;
                }
                K3L.plotLine(C9L.extend({ x0: A3L[0], x1: E3L[0], y0: A3L["1" - 0], y1: E3L[1], color: k3L.edgeHighlight, type: o0T, context: Y3L, confineToPanel: J3L, deferStroke: !"" }, m3L));
            }
            Y3L.stroke();
            Y3L.restore();
        }
        if (!I3L && I3L !== 0) {
            if (N3L.flipped) {
                z3L = !z3L;
            }
            H3L = z3L ? Math.min(t3L, N3L.top) : Math.max(M3L, N3L.bottom);
        }
        s3L.push([s3L[O3L - 1][0], H3L], [s3L[0][0], H3L]);
        v3L = k3L.opacity;
        if (!v3L && v3L !== 0) {
            k3L.opacity = +"0.3";
        }
        C9L.fillArea(K3L, s3L, k3L);
        if (U3L && U3L.color && U3L.fillMountain && !k3L.tension && !C9L.isTransparent(U3L.color) && !C9L.isTransparent(k3L.color)) {
            Y3L.save();
            if (Y3L.fillStyle instanceof CanvasGradient) {
                R3L = C9L.colorToHex(U3L.color);
                Y79.L3k(21);
                W3L = Y3L.createLinearGradient(Y79.j3k(2147483647, "0"), h3L === "1" - 0 ? J3L.top : J3L.bottom, "0" * 1, H3L);
                W3L.addColorStop(0, C9L.hexToRgba(R3L, 60));
                W3L.addColorStop(1, C9L.hexToRgba(R3L, 10));
                Y3L.fillStyle = W3L;
            } else {
                E5a = 518801807;
                Y79.T3k(1);
                Q5a = Y79.v3k("591773056", 0);
                t5a = 2;
                for (var T5a = +"1"; Y79.G4a(T5a.toString(), T5a.toString().length, 45003) !== E5a; T5a++) {
                    Y3L.fillStyle = U3L.color;
                    t5a += 2;
                }
                if (Y79.J4a(t5a.toString(), t5a.toString().length, +"56950") !== Q5a) {
                    Y3L.fillStyle = U3L.color;
                }
            }
            D3L = [];
            C3L = { opacity: k3L.opacity, panelName: k3L.panelName };
            Y3L.beginPath();
            for (l3L = 0; l3L < b3L.gapAreas.length; l3L++) {
                n3L = b3L.gapAreas[l3L];
                y3L = n3L.start;
                x3L = n3L.end;
                i3L = n3L.threshold;
                if (y3L) {
                    D3L = [
                        [y3L[0], y3L[1]],
                        [y3L[0], i3L],
                    ];
                } else {
                    D3L.push([x3L[0], i3L], [x3L["0" << 817800192], k3L.step ? D3L[0][1] : x3L[1]]);
                }
                if (D3L.length == 4) {
                    C9L.fillArea(K3L, D3L, C3L);
                    c3L = C9L.extend({ x1: D3L[3][0], y0: D3L[0]["1" << 1012841216], type: "segment", deferStroke: !![], context: Y3L, confineToPanel: J3L }, U3L);
                    if (k3L.step) {
                        K3L.plotLine(C9L.extend({ x0: D3L[0][0], y1: D3L[0]["1" >> 1700588768] }, c3L));
                        K3L.plotLine(C9L.extend({ x0: D3L[3][0], y1: D3L["3" ^ 0][+"1"] }, c3L));
                    } else {
                        K3L.plotLine(C9L.extend({ x0: D3L["0" ^ 0]["0" & 2147483647], y1: D3L[3][1] }, c3L));
                    }
                }
            }
            Y3L.stroke();
            Y3L.restore();
        }
        k3L.opacity = v3L;
    };
    C9L.fillIntersecting = function (B3L, Y5L, g3L) {
        var o5L, T5L, k5L, H5L, F5L, j5L, X3L, S5L, r5L, P5L, Y0T, p5L, a5L, Z5L;
        if (!g3L || g3L instanceof Array) {
            g3L = arguments[3];
        }
        o5L = g3L.topBand;
        T5L = g3L.bottomBand;
        k5L = g3L.topSubBand;
        H5L = g3L.bottomSubBand;
        F5L = g3L.topColor;
        j5L = g3L.bottomColor;
        X3L = Y5L;
        if (X3L.panel) {
            if (X3L.outputs && X3L.outputMap) {
                if (!F5L) {
                    F5L = X3L.outputs[X3L.outputMap[o5L]];
                }
                if (!j5L) {
                    j5L = X3L.outputs[X3L.outputMap[T5L]];
                }
            }
            X3L = X3L.panel;
        }
        X3L = B3L.panels[X3L];
        S5L = B3L.chart.context;
        r5L = S5L.canvas;
        P5L = B3L.scratchContext;
        if (!P5L) {
            Y0T = "2";
            Y0T += "d";
            P5L = B3L.scratchContext = r5L.cloneNode(!0).getContext(Y0T);
        }
        p5L = P5L.canvas;
        p5L.height = r5L.height;
        p5L.width = r5L.width;
        p5L.context = P5L;
        C9L.clearCanvas(p5L, B3L);
        a5L = 0.3;
        if (g3L.opacity) {
            a5L = g3L.opacity;
        }
        P5L.globalCompositeOperation = "xor";
        B3L.chart.context = P5L;
        Z5L = { band: o5L, subField: k5L, color: F5L, opacity: "1" * 1, panelName: X3L.name, yAxis: g3L.topAxis, skipTransform: g3L.skipTransform, tension: g3L.tension, roundOffEdges: !"", step: g3L.step };
        C9L.preparePeakValleyFill(B3L, Z5L);
        C9L.extend(Z5L, { band: T5L, subField: H5L, color: j5L, yAxis: g3L.bottomAxis });
        C9L.preparePeakValleyFill(B3L, Z5L);
        S5L.save();
        S5L.globalAlpha = a5L;
        R1aa.T3k(19);
        S5L.drawImage(p5L, 0, R1aa.j3k("0", 1));
        S5L.restore();
        B3L.chart.context = S5L;
    };
    C9L.drawLegendItem = function (e5L, u5L, J5L, U5L, K5L) {
        var H79 = R1aa;
        var l5L, D5L, V5L, b5L, s5L;
        if (!K5L) {
            K5L = 1;
        }
        l5L = u5L[0];
        D5L = u5L[1];
        V5L = 10;
        b5L = 10;
        s5L = e5L.chart.context;
        s5L.globalAlpha = K5L;
        s5L.fillStyle = U5L;
        s5L.fillRect(l5L, D5L, V5L, b5L);
        s5L.globalAlpha = 1;
        H79.L3k(22);
        l5L += H79.v3k("2", V5L);
        s5L.fillStyle = e5L.defaultColor;
        s5L.fillText(J5L, l5L, D5L);
        H79.X19();
        H79.L3k(23);
        var h8T = H79.j3k(1, 25, 5);
        l5L += s5L.measureText(J5L).width + h8T;
        return [l5L, D5L];
    };
    C9L.drawLegend = function (y5L, w5L) {
        var x79 = R1aa;
        var M5L, E5L, n5L, h5L, A5L, z5L, O5L, N5L, I5L, W5L, t5L;
        M5L = w5L.coordinates;
        E5L = y5L.chart.context;
        E5L.textBaseline = "top";
        n5L = E5L.font;
        y5L.canvasFont("stx-legend", E5L);
        h5L = w5L.chart || y5L.chart;
        if (!M5L) {
            M5L = h5L.legend;
        }
        A5L = [M5L.x, M5L.y];
        z5L = y5L.defaultColor;
        for (var m5L = 0; m5L < 2; m5L++) {
            for (var v5L in w5L.legendColorMap) {
                O5L = w5L.legendColorMap[v5L];
                if (O5L.isBase && (m5L || w5L.noBase)) continue;
                if (!O5L.isBase && !m5L) continue;
                if (O5L.color instanceof Array) {
                    I5L = O5L.color;
                    for (N5L = I5L.length - 1; N5L >= 0; N5L--) {
                        if (C9L.isTransparent(I5L[N5L])) {
                            I5L.splice(N5L, +"1");
                        }
                    }
                    if (I5L.length > ("1" | 1)) {
                        W5L = E5L.createLinearGradient(A5L[+"0"], A5L[1], A5L[0] + 10, A5L[1]);
                        for (N5L = 0; N5L < I5L.length; N5L++) {
                            W5L.addColorStop(N5L / (I5L.length - 1), I5L[N5L]);
                        }
                        z5L = W5L;
                    } else if (I5L.length > 0) {
                        z5L = I5L[0];
                    } else {
                        z5L = y5L.getCanvasColor("stx_line_chart");
                    }
                } else if (O5L.color) {
                    z5L = O5L.color;
                } else {
                    z5L = null;
                }
                if (z5L) {
                    t5L = v5L;
                    if (O5L.display) {
                        t5L = O5L.display;
                    }
                    if (!t5L) {
                        if (h5L.symbolDisplay) {
                            t5L = h5L.symbolDisplay;
                        } else {
                            t5L = h5L.symbol;
                        }
                    }
                    if (A5L[0] + E5L.measureText(t5L).width > h5L.panel.right) {
                        x79.T3k(24);
                        var s8T = x79.v3k(6, 7068, 5884);
                        x79.T3k(24);
                        var W8T = x79.j3k(17, 7581, 7165);
                        x79.L3k(1);
                        var u8T = x79.v3k(8069, 20);
                        x79.T3k(23);
                        var p8T = x79.v3k(5, 5235, 1);
                        x79.T3k(25);
                        var o8T = x79.v3k(19, 16, 10, 40, 1);
                        A5L = [M5L.x, M5L.y + E5L.measureText(596.85 != 66.95 ? "M" : s8T != W8T ? (u8T, p8T) : ("J", "J")).width + o8T];
                    }
                    A5L = C9L.drawLegendItem(y5L, A5L, t5L, z5L, O5L.opacity);
                }
            }
        }
        E5L.font = n5L;
    };
};
t7w = (c5L) => {
    var x5L;
    R1aa.K19();
    x5L = c5L.CIQ;
    x5L.colorsEqual = function (f5L, R5L) {
        var G5L, i5L, q5L, Q5L, L5L;
        if (f5L == R5L) {
            return !!{};
        }
        if (!f5L && !R5L) {
            return !!{};
        }
        if (!f5L || !R5L) {
            return !"1";
        }
        if (f5L == "transparent") {
            f5L = "rgba(0,0,0,0)";
        }
        if (R5L == "transparent") {
            R5L = "rgba(0,0,0,0)";
        }
        G5L = /^rgba\(.*,(.+)\)/;
        i5L = f5L.match(G5L);
        q5L = R5L.match(G5L);
        i5L = i5L ? parseFloat(i5L[1]) : 1;
        q5L = q5L ? parseFloat(q5L[+"1"]) : "1" | 0;
        if (i5L != q5L) {
            return !1;
        }
        Q5L = x5L.colorToHex(f5L);
        L5L = x5L.colorToHex(R5L);
        return Q5L.toLowerCase() == L5L.toLowerCase();
    };
    x5L.colorToHex = function (C5L) {
        var J79 = R1aa;
        var X0T, d5L, X5L, P8L, p8L, F8L, j8L, g5L, S8L;
        X0T = "#00";
        X0T += "00";
        X0T += "00";
        if (!x5L.colorToHexMapping) {
            x5L.colorToHexMapping = {};
        }
        if (!C5L || C5L == "transparent") {
            C5L = X0T;
        }
        if (x5L.colorToHexMapping[C5L]) {
            return x5L.colorToHexMapping[C5L];
        }
        if (C5L.substr(0, 1) === (("469" << 1846976672, "129.56" * 1) > (3, 7000) ? (4199 == 229.45 ? (!"1", "814.67" - 0) : ("l", 0x1fab)) : "#")) {
            if (C5L.length == 4) {
                J79.T3k(26);
                var Y8T = J79.v3k(2, 35620, 14, 32864);
                J79.T3k(1);
                var X8T = J79.v3k(59700, 49750);
                J79.T3k(27);
                var Z8T = J79.v3k(2548, 9, 257, 10, 18);
                J79.L3k(2);
                var a8T = J79.j3k(13, 1560, 773);
                J79.L3k(28);
                var y8T = J79.v3k(625, 1, 161, 20, 15);
                J79.L3k(1);
                var R8T = J79.v3k(7340, 6973);
                J79.L3k(13);
                var x8T = J79.j3k(16100, 4, 805);
                J79.T3k(4);
                var A8T = J79.j3k(17, 16);
                J79.L3k(25);
                var I8T = J79.v3k(9, 9, 7, 23, 0);
                J79.T3k(2);
                var M8T = J79.j3k(17, 1, 17);
                J79.T3k(4);
                var d8T = J79.j3k(16, 15);
                C5L = x5L.colorToHexMapping[C5L] =
                    ((Y8T, 5597) <= (X8T, 60.77) ? !"" : (+"266.66", Z8T) != (a8T, 966.61) ? ((y8T, R8T) !== x8T ? "#" : ("t", 390.91)) : 32.81) +
                    Array(3).join(C5L.substr(+"1", A8T)) +
                    Array(3).join(C5L.substr(I8T, M8T)) +
                    Array(3).join(C5L.substr(+"3", d8T));
            }
            return C5L;
        }
        d5L = /(.*?)rgb\((\d+), ?(\d+), ?(\d+)\)/.exec(C5L);
        if (!d5L) {
            d5L = /(.*?)rgba\((\d+), ?(\d+), ?(\d+),.*\)/.exec(C5L);
        }
        if (!d5L) {
            X5L = r8L(C5L);
            x5L.colorToHexMapping[C5L] = X5L;
            return X5L;
        }
        P8L = parseFloat(d5L[2]);
        p8L = parseFloat(d5L[3]);
        F8L = parseFloat(d5L[4]);
        J79.L3k(29);
        j8L = J79.v3k(p8L, F8L, 16, 8, P8L);
        g5L = j8L.toString(16);
        for (var B5L = g5L.length; B5L < 6; B5L++) {
            J79.T3k(6);
            g5L = J79.j3k("0", g5L);
        }
        function r8L(T8L) {
            var Z0T, Z8L, o8L;
            Z0T = "col";
            Z0T += "o";
            Z0T += "r";
            if (typeof document === "undefined") {
                return "#000000";
            }
            Z8L = document.querySelector(".ciq_color_converter");
            if (!Z8L) {
                Z8L = document.createElement("textarea");
                Z8L.className = "ciq_color_converter";
                Z8L.style.display = "none";
                document.body.appendChild(Z8L);
            }
            Z8L.style.color = "#000000";
            Z8L.style.color = T8L;
            o8L = getComputedStyle(Z8L).getPropertyValue(Z0T);
            d5L = /(.*?)rgb\((\d+), ?(\d+), ?(\d+)\)/.exec(o8L);
            if (d5L) {
                return x5L.colorToHex(o8L);
            } else if (o8L.substr("0" * 1, 1) === (9650 >= 987 ? ("483" >> 53983680 != 934.24 ? "#" : ("71.01" * 1, "604.43" * 1)) : (+"0x1031", 0xdb0))) {
                return o8L;
            }
            return T8L;
        }
        J79.T3k(30);
        var m8T = J79.j3k(43, 14, 10, 3, 0);
        J79.T3k(26);
        var P8T = J79.v3k(4, 43232, 13, 40127);
        J79.T3k(8);
        var L8T = J79.j3k(4755, 3181, 11);
        J79.L3k(31);
        var j8T = J79.v3k(620, 18, 10, 15, 160);
        J79.L3k(1);
        var O8T = J79.j3k(5, 4);
        S8L = d5L[m8T] + ((P8T, L8T) != (j8T, +"9660") ? "#" : (740.44, "26.06" * O8T)) + g5L;
        x5L.colorToHexMapping[C5L] = S8L;
        return S8L;
    };
    x5L.hexToRgba = function (a8L, k8L) {
        var W79 = R1aa;
        var Y8L, H8L, s8L, l8L, D8L;
        if (!a8L || a8L == "transparent") {
            a8L = "rgba(0,0,0,0)";
        }
        if (a8L.substr(0, 4) === "rgba") {
            Y8L = /(.*?)rgba\((\d+), ?(\d+), ?(\d+), ?(\d*\.?\d*)\)/.exec(a8L);
            H8L = Y8L[5];
            if (k8L || k8L === 0) {
                H8L = k8L;
            }
            if (H8L > 1) {
                W79.T3k(32);
                H8L = W79.j3k(100, H8L);
            }
            W79.T3k(33);
            var g8T = W79.j3k(10, 10, 15, 6, 57);
            W79.L3k(1);
            var J8T = W79.v3k(56997, 50664);
            W79.L3k(1);
            var G8T = W79.j3k(5175, 15);
            W79.T3k(23);
            var F8T = W79.j3k(8191, 8184, 8184);
            W79.L3k(34);
            var q8T = W79.v3k(3, 20, 16, 1151, 1077);
            W79.T3k(35);
            var N8T = W79.v3k(5462, 12, 1, 2755, 2);
            W79.T3k(8);
            var E8T = W79.v3k(2602, 0, 2);
            W79.L3k(36);
            var Q8T = W79.v3k(20, 8, 33, 23, 17);
            W79.T3k(16);
            var t8T = W79.j3k(1905, 2, 11, 953);
            W79.L3k(37);
            var U8T = W79.v3k(61178, 2, 61176, 5097);
            W79.L3k(2);
            var T8T = W79.v3k(15, 4341, 618);
            W79.T3k(23);
            var S8T = W79.v3k(1511, 3038, 2);
            W79.T3k(8);
            var D8T = W79.v3k(13, 20, 11);
            W79.T3k(8);
            var v8T = W79.v3k(37640, 28235, 5);
            W79.T3k(38);
            var V8T = W79.v3k(617, 11, 4, 6177);
            W79.L3k(37);
            var r8T = W79.j3k(1, 9, 32, 282);
            W79.T3k(23);
            var z8T = W79.v3k(2323, 4684, 2);
            W79.T3k(39);
            var w9T = W79.v3k(970, 15, 15, 5, 42687);
            W79.T3k(1);
            var B9T = W79.j3k(17860, 8930);
            W79.T3k(40);
            var K9T = W79.j3k(6580, 5579, 17, 39480, 13);
            W79.L3k(41);
            var b9T = W79.v3k(19, 3236, 1, 37);
            W79.T3k(24);
            var l9T = W79.v3k(7, 69552, 63749);
            W79.T3k(42);
            var c9T = W79.v3k(9, 377, 2254, 17, 4501);
            return (
                "rgba(" +
                Y8L[g8T] +
                (J8T == (934.55, G8T) ? ![] : ("8200" | F8T, +"67") == q8T ? N8T : E8T >= (Q8T, +"4621") ? (t8T, U8T) : ",") +
                Y8L[+"3"] +
                ("826.54" - 0 != T8T ? "," : S8T) +
                Y8L[D8T] +
                ((561.05, v8T) < (66.21, V8T) ? "d" : (r8T, z8T) < (w9T, B9T) ? ((K9T, 510.99) == (b9T, l9T) ? +"531.09" : ",") : (!!"", c9T)) +
                H8L +
                ")"
            );
        } else if (a8L.substr(0, 3) === "rgb") {
            a8L = x5L.colorToHex(a8L);
        }
        if (!k8L && k8L !== 0) {
            k8L = +"100";
        }
        if (k8L <= 1) {
            W79.T3k(43);
            k8L = W79.j3k(0, k8L, "100");
        }
        a8L = a8L.replace("#", "");
        s8L = parseInt(a8L.slice(0, 2), 16);
        l8L = parseInt(a8L.slice(2, 4), 16);
        D8L = parseInt(a8L.slice(4, 6), 16);
        if (isNaN(s8L) || isNaN(l8L) || isNaN(D8L)) {
            console.log("CIQ.hexToRgba: invalid hex :", a8L);
            return null;
        }
        W79.L3k(44);
        return W79.j3k(
            k8L,
            100,
            "790.41" * 1 < (8269, 2120) ? "," : 8742 === 656.38 ? ("Z", "E") : 9699 != (7960, +"3773") ? ("a", 0x1a68) : (!!{}, "C"),
            "rgba(",
            D8L,
            961 >= 8790 ? 850.11 : 1550 < (1748, "6917" - 0) ? ")" : 806.0,
            ",",
            (2910, "12" << 1183872672) == "3160" >> 702686784 ? !!"1" : (759.78, "5930" << 835002432) == 1880 ? +"4.82e+3" : ",",
            s8L,
            l8L
        );
    };
    x5L.convertToNativeColor = function (e8L) {
        var K8L, V8L;
        K8L = document.createElement("DIV");
        R1aa.X19();
        K8L.style.color = e8L;
        K8L.style.display = "none";
        document.body.appendChild(K8L);
        V8L = getComputedStyle(K8L).color;
        document.body.removeChild(K8L);
        return V8L;
    };
    x5L.isTransparent = function (u8L) {
        var J8L;
        if (!u8L) {
            return !!"";
        }
        if (u8L == "transparent") {
            return !!1;
        }
        J8L = /(.*?)rgba\((\d+), ?(\d+), ?(\d+), ?(\d*\.?\d*)\)/.exec(u8L);
        if (J8L === null) {
            return !"1";
        }
        if (parseFloat(J8L[5]) === 0) {
            return !!{};
        }
        return !!"";
    };
    x5L.hsv = function (y8L) {
        var A79 = R1aa;
        A79.X19();
        var N8L, b8L, O8L, U8L, M8L, t8L, E8L, I8L, A8L, h8L, w8L;
        N8L = x5L.colorToHex(y8L);
        if (N8L.substr("0" ^ 0, +"1") === ((982.61, 3570) !== ("5730" ^ 0) ? "#" : (2590, "4228" >> 795122272) <= (5500, 5260) ? (278.81, 187.16) : 47.69)) {
            N8L = N8L.slice(1);
        }
        for (var z8L = N8L.length; z8L < 6; z8L++) {
            A79.L3k(6);
            N8L = A79.j3k("0", N8L);
        }
        b8L = parseInt(N8L.slice(0, +"2"), 16);
        O8L = parseInt(N8L.slice(2, 4), 16);
        U8L = parseInt(N8L.slice(4, 6), 16);
        M8L = +"0";
        t8L = 0;
        E8L = 0;
        b8L = parseInt(("" + b8L).replace(/\s/g, ""), 10);
        O8L = parseInt(("" + O8L).replace(/\s/g, ""), 10);
        U8L = parseInt(("" + U8L).replace(/\s/g, ""), "10" - 0);
        if (b8L === null || O8L === null || U8L === null || isNaN(b8L) || isNaN(O8L) || isNaN(U8L)) {
            console.log("CIQ.hsv: invalid color :", y8L);
            return null;
        }
        if (b8L < 0 || O8L < 0 || U8L < 0 || b8L > 255 || O8L > 255 || U8L > 255) {
            return null;
        }
        A79.T3k(32);
        b8L = A79.j3k(255, b8L);
        A79.T3k(32);
        O8L = A79.j3k(255, O8L);
        A79.T3k(32);
        U8L = A79.j3k(255, U8L);
        I8L = Math.min(b8L, Math.min(O8L, U8L));
        A8L = Math.max(b8L, Math.max(O8L, U8L));
        if (I8L == A8L) {
            E8L = I8L;
            return [0, +"0", E8L];
        }
        h8L = b8L == I8L ? O8L - U8L : U8L == I8L ? b8L - O8L : U8L - b8L;
        w8L = b8L == I8L ? 3 : U8L == I8L ? +"1" : +"5";
        A79.T3k(45);
        M8L = A79.j3k(60, w8L, I8L, A8L, h8L);
        A79.L3k(46);
        t8L = A79.j3k(A8L, A8L, I8L);
        E8L = A8L;
        return [M8L, t8L, E8L];
    };
    x5L.hsl = function (Q8L) {
        var d79 = R1aa;
        var m8L, n8L, v8L, W8L, x8L, c8L, f8L, q8L, G8L, R8L;
        m8L = x5L.colorToHex(Q8L);
        if (m8L.substr(0, 1) === "#") {
            m8L = m8L.slice(1);
        }
        for (var i8L = m8L.length; i8L < 6; i8L++) {
            d79.L3k(6);
            m8L = d79.j3k((+"1625", "7400" * 1) >= ("23.31" - 0, 3390) ? ((335, 9030) != 701 ? "0" : 0xd27) : 555.19, m8L);
        }
        d79.K19();
        n8L = parseInt(m8L.slice("0" ^ 0, +"2"), 16);
        v8L = parseInt(m8L.slice(2, "4" ^ 0), 16);
        W8L = parseInt(m8L.slice(4, 6), "16" >> 256975168);
        n8L /= 255;
        v8L /= 255;
        W8L /= 255;
        x8L = Math.max(n8L, v8L, W8L);
        c8L = Math.min(n8L, v8L, W8L);
        d79.L3k(47);
        G8L = d79.v3k(c8L, x8L, 2);
        if (x8L == c8L) {
            f8L = q8L = 0;
        } else {
            d79.L3k(1);
            R8L = d79.j3k(x8L, c8L);
            q8L = G8L > 0.5 ? R8L / (("2" | 0) - x8L - c8L) : R8L / (x8L + c8L);
            switch (x8L) {
                case n8L:
                    d79.T3k(41);
                    f8L = d79.v3k(W8L, v8L, R8L, v8L < W8L ? 6 : 0);
                    break;
                case v8L:
                    d79.T3k(41);
                    f8L = d79.j3k(n8L, W8L, R8L, 2);
                    break;
                case W8L:
                    d79.T3k(48);
                    f8L = d79.j3k(0, v8L, R8L, "4", n8L);
                    break;
            }
            f8L /= 6;
        }
        return [f8L, q8L, G8L];
    };
    x5L.hslToRgb = function (B8L, d8L, L8L) {
        var B79 = R1aa;
        B79.K19();
        var S1L, P1L, p1L, g8L, C8L, X8L;
        if (d8L === 0) {
            S1L = P1L = p1L = L8L;
        } else {
            g8L = function F1L(r1L, Z1L, j1L) {
                if (j1L < 0) {
                    j1L += 1;
                }
                if (j1L > 1) {
                    j1L -= 1;
                }
                if (j1L < 1 / +"6") {
                    B79.T3k(49);
                    return B79.j3k(r1L, j1L, Z1L, r1L, 6);
                }
                if (j1L < 1 / 2) {
                    return Z1L;
                }
                if (j1L < 2 / 3) {
                    B79.L3k(50);
                    return B79.j3k(2, Z1L, r1L, 6, r1L, 3, j1L);
                }
                return r1L;
            };
            C8L = L8L < 0.5 ? L8L * (1 + d8L) : L8L + d8L - L8L * d8L;
            B79.L3k(51);
            X8L = B79.j3k(L8L, 2, C8L);
            B79.L3k(52);
            S1L = g8L(X8L, C8L, B79.j3k(3, 1, B8L));
            P1L = g8L(X8L, C8L, B8L);
            B79.T3k(53);
            p1L = g8L(X8L, C8L, B79.j3k(3, B8L, 1));
        }
        B79.T3k(19);
        return [Math.round(B79.v3k(S1L, 255)), Math.round(B79.j3k(P1L, 748081984, "255", B79.T3k(54))), Math.round(B79.j3k(p1L, "255", B79.T3k(55)))];
    };
    x5L.chooseForegroundColor = function (H1L) {
        var a0T, o1L, T1L, a1L, k1L;
        a0T = "#FFFFF";
        R1aa.X19();
        a0T += "F";
        o1L = x5L.colorToHex(H1L);
        T1L = parseInt(o1L.slice(+"1", 3), "16" & 2147483647);
        a1L = parseInt(o1L.slice(3, +"5"), 16);
        k1L = parseInt(o1L.slice(5, 7), 16);
        return 0.2126 * T1L + ("0.7152" - 0) * a1L + 0.0722 * k1L < 100 ? a0T : "#000000";
    };
    x5L.borderPatternToArray = function (s1L, Y1L) {
        var w79 = R1aa;
        if (!Y1L) {
            return [];
        }
        if (Y1L instanceof Array) {
            return Y1L;
        }
        if (Y1L == "dotted") {
            return [s1L, s1L];
        }
        if (Y1L == "dashed") {
            w79.T3k(19);
            return [w79.v3k(s1L, 5), w79.v3k(s1L, 5)];
        }
        if (Y1L != "solid" && Y1L != "none") {
            w79.T3k(56);
            console.log(w79.j3k('"; defaulting to "solid"', 'Unsupported pattern "', Y1L));
        }
        return [];
    };
    x5L.getBackgroundColor = function (D1L) {
        var y0T, l1L, K1L;
        y0T = "#";
        y0T += "F";
        y0T += "F";
        y0T += "FFFF";
        l1L = null;
        while (!l1L || x5L.isTransparent(l1L)) {
            K1L = getComputedStyle(D1L);
            if (!K1L) {
                return;
            }
            l1L = K1L.backgroundColor;
            if (x5L.isTransparent(l1L)) {
                l1L = "transparent";
            }
            D1L = D1L.parentNode;
            if (!D1L || !D1L.tagName) break;
        }
        if (!l1L || l1L == "transparent") {
            l1L = y0T;
        }
        return l1L;
    };
};
y7w = (u1L) => {
    var u29 = R1aa;
    var M0T, I0T, A0T, x0T, R0T, V1L, e1L;
    M0T = "\\";
    M0T += "d{17}";
    I0T = "O";
    I0T += "c";
    I0T += "t";
    A0T = "S";
    A0T += "e";
    A0T += "p";
    x0T = "M";
    x0T += "a";
    x0T += "y";
    R0T = "F";
    R0T += "eb";
    V1L = u1L.CIQ;
    e1L = u1L.timezoneJS;
    V1L.monthLetters = [
        "J",
        "F",
        "M",
        "A",
        (6670, 58) == +"6438" ? (+"299" < (9206, +"430.06") ? 437.47 : (0x25a6, 5.17e2)) : "M",
        4213 >= 643.66 ? ((755.8, "8770" >> 890918912) != (902.33, 58.86) ? "J" : 8552 <= 33 ? +"2.16e+3" : 588.59) : (0x23a3, !1),
        "J",
        (347, +"6879") < 981.37 ? 739.24 : (3850, 672.94) < (7713, 957.34) ? "A" : ("405.42" - 0, 6476) === (2730, "8396" - 0) ? 127.41 : (331.41, 6.13e3),
        3107 <= 237 ? (!1, 369) : (480.78, 7311) === 8020 ? ((8970, 1610) < (3958, 3066) ? (!!{}, !1) : 8.69e3) : "S",
        "O",
        (1190, +"259.47") === 690.5 ? 0x1bac : "N",
        "D",
    ];
    V1L.monthAbv = ["Jan", R0T, "Mar", "Apr", x0T, "Jun", "Jul", "Aug", A0T, I0T, "Nov", "Dec"];
    V1L.MILLISECOND = 1;
    V1L.SECOND = +"1000";
    u29.L3k(57);
    var C9T = u29.j3k(11, 9, 6, 65, 24);
    V1L.MINUTE = C9T * V1L.SECOND;
    u29.L3k(56);
    var n9T = u29.v3k(6, 40, 14);
    V1L.HOUR = n9T * V1L.MINUTE;
    u29.T3k(58);
    var i9T = u29.j3k(17, 17, 7, 17);
    V1L.DAY = i9T * V1L.HOUR;
    u29.L3k(59);
    var H9T = u29.j3k(6, 3, 3, 6);
    V1L.WEEK = H9T * V1L.DAY;
    V1L.MONTH = +"31" * V1L.DAY;
    u29.L3k(15);
    var k9T = u29.v3k(2, 10, 5, 15);
    V1L.YEAR = "366" * k9T * V1L.DAY;
    u29.T3k(60);
    var e9T = u29.j3k(27, 3, 14);
    u29.L3k(24);
    var f9T = u29.v3k(12, 119, 100);
    V1L.DECADE = e9T * V1L.YEAR - f9T * V1L.DAY;
    V1L.yyyymmddhhmmssmmmrx = new RegExp(M0T);
    V1L.strToDateTime = function (J1L) {
        var U1L, N1L, I1L, A1L, E1L, z1L, M1L, v1L, b1L, w1L, t1L, y1L, h1L, m0T, d0T, O1L, m1L;
        if (!J1L || J1L.getFullYear) {
            return J1L;
        }
        U1L = [];
        if (J1L.length == 12 || J1L.length == 14) {
            N1L = parseFloat(J1L.substring(0, 4));
            u29.T3k(60);
            var h9T = u29.v3k(23, 6, 13);
            u29.T3k(6);
            var s9T = u29.v3k(0, 6);
            u29.T3k(51);
            var W9T = u29.v3k(6, 7, 41);
            I1L = parseFloat(J1L.substring(h9T, s9T)) - W9T;
            A1L = parseFloat(J1L.substring(6, 8));
            E1L = parseFloat(J1L.substring("8" >> 1738039168, 10));
            z1L = parseFloat(J1L.substring(+"10", "12" - 0));
            M1L = parseFloat(J1L.substring("12" | 12, 14)) || +"0";
            u29.T3k(61);
            return new Date(N1L, I1L, A1L, E1L, z1L, M1L, u29.j3k("0", 678900320));
        } else if (V1L.yyyymmddhhmmssmmmrx.test(J1L)) {
            N1L = parseFloat(J1L.substring(0, "4" << 377991840));
            u29.L3k(62);
            var u9T = u29.v3k(4, 9, 1, 72, 81);
            u29.T3k(63);
            var p9T = u29.v3k(17, 3, 19);
            I1L = parseFloat(J1L.substring(u9T, +"6")) - p9T;
            A1L = parseFloat(J1L.substring(6, 8));
            E1L = parseFloat(J1L.substring("8" | 0, 10));
            z1L = parseFloat(J1L.substring(10, 12));
            M1L = parseFloat(J1L.substring(12, 14));
            v1L = parseFloat(J1L.substring(14, "17" * 1));
            return new Date(N1L, I1L, A1L, E1L, z1L, M1L, v1L);
        }
        b1L = [J1L];
        w1L = J1L.indexOf((7090, 255.5) == 417.8 ? !![] : "T");
        if (w1L != -1) {
            t1L = J1L.substring(w1L);
            if (
                t1L.indexOf(+"8360" !== (265, +"4210") ? ((627, 8360) !== (1080, 196) ? "Z" : !"1") : 0xe39) != -("1" ^ 0) ||
                t1L.indexOf(31.1 === (861.91, 9010) ? (9.96e3, 623) : (7678, 911.98) < (8340, 7350) ? "-" : (![], "B")) != -1 ||
                t1L.indexOf(324.11 > 8330 ? (3400 < 606 ? ("c", +"0xc32") : (718, !"")) : "+") != -1
            ) {
                return new Date(J1L);
            }
            b1L = J1L.split("T");
        } else if (J1L.indexOf(" ") != -1) {
            b1L = J1L.split(" ");
        }
        if (b1L[0].indexOf(390 === (28.44, 9861) ? (!!"", +"2.41e+3") : "/") != -1) {
            U1L = b1L[0].split((390, 9290) != 529.52 ? "/" : (!!"1", 0x22b3));
        } else if (b1L["0" << 472511616].indexOf((909.48, 193.59) < (551.61, 5402) ? ((3450, 128.24) === 817 ? ((470.14, 3519) != 8990 ? (!!"", 0x15f8) : 2.95e2) : "-") : 4.11e3) != -1) {
            U1L = b1L[0].split("3693" - 0 !== (+"938.44", +"307.47") ? "-" : (9600, 10000) != 9707 ? ![] : 5.72e3);
        } else {
            return V1L.strToDate(J1L);
        }
        y1L = parseFloat(U1L[2], 10);
        if (U1L[0] && U1L[+"0"].length == +"4") {
            y1L = parseFloat(U1L[0], +"10");
            U1L[0] = U1L[1];
            u29.L3k(61);
            U1L[1] = U1L[u29.j3k("2", 572387648)];
        }
        if (b1L.length > 1) {
            h1L = b1L[2];
            b1L = b1L[1].split(5747 == (+"2210", 4600) ? 562.97 : ":");
            if (h1L) {
                m0T = "P";
                m0T += "M";
                d0T = "A";
                d0T += "M";
                if (b1L[0] == "12" && h1L.toUpperCase() == d0T) {
                    u29.L3k(19);
                    b1L[0] = u29.v3k("0", 1);
                } else if (b1L["0" >> 1323415520] != "12" && h1L.toUpperCase() == m0T) {
                    u29.L3k(65);
                    var o9T = u29.v3k(6, 1820, 2, 18, 100);
                    u29.L3k(66);
                    var Y9T = u29.v3k(3498, 13, 15, 18);
                    u29.L3k(64);
                    b1L[u29.v3k("0", 1599973376)] = parseInt(b1L[0], o9T) + Y9T;
                }
            }
            O1L = 0;
            m1L = 0;
            if (b1L.length == 3) {
                if (b1L[2].indexOf(".") == -1) {
                    O1L = parseInt(b1L[2], 10);
                } else {
                    O1L = b1L[2].split(".");
                    if (O1L[1].length == +"3") {
                        m1L = O1L[1];
                        O1L = O1L[0];
                    }
                }
            }
            u29.T3k(4);
            var X9T = u29.v3k(20, 19);
            return new Date(y1L, U1L[0] - X9T, U1L[1], b1L[0], b1L[1], O1L, m1L);
        }
        u29.T3k(67);
        var Z9T = u29.v3k(7, 18, 18, 7);
        u29.L3k(1);
        return new Date(y1L, U1L[+"0"] - Z9T, U1L[u29.j3k("1", 0)], 0, 0, 0, 0);
    };
    V1L.strToDate = function (n1L) {
        var W1L, x1L;
        if (n1L.indexOf(570.67 !== (7445, 1250) ? "/" : (811.56, +"6940") <= (446.45, 631) ? ("r", 624) : 1.17e3) != -1) {
            W1L = n1L.split(874.33 !== +"7320" ? ((4050, 9961) === (4260, 7.22) ? ("I", !!1) : "/") : (243, "0x379" - 0));
        } else if (n1L.indexOf((5830, "3350" >> 659918240) > (3064, 782.29) ? (("4726" & 2147483647) >= 2493 ? "-" : (!!{}, "e")) : 5.08e3) != -1) {
            W1L = n1L.split((+"671.35", 8218) == 680.34 ? 3.68e3 : "-");
        } else if (n1L.length >= 8) {
            u29.L3k(1);
            var a9T = u29.v3k(18, 14);
            u29.T3k(17);
            var y9T = u29.j3k(17, 23, 8, 521);
            u29.L3k(25);
            var R9T = u29.v3k(11, 5, 15, 30, 0);
            return new Date(parseFloat(n1L.substring(+"0", 4)), parseFloat(n1L.substring("4" | a9T, y9T)) - R9T, parseFloat(n1L.substring(6, 8)));
        } else {
            return new Date();
        }
        if (W1L.length < "3" >> 1741619296) {
            return new Date();
        }
        if (W1L[2].indexOf((6720, 518) > (835.35, 4437) ? (!!1, 149.52) : " ") != -1) {
            W1L[+"2"] = W1L[2].substring(0, W1L[2].indexOf(" "));
        } else if (W1L[2].indexOf(("4211" & 2147483647, +"1159") != 7913 ? "T" : "1560" >> 1077017952 >= (5846, 963) ? (("889.65" * 1, 370.12) > 827.67 ? (![], "0x1645" ^ 0) : (5.62e3, 0xe85)) : 3.65e3) != -1) {
            W1L[2] = W1L[2].substring(0, W1L[+"2"].indexOf(4440 < ("7620" | 4420) ? "T" : 0x20d4));
        }
        x1L = parseFloat(W1L[2], 10);
        if (x1L < 20) {
            x1L += 2000;
        }
        if (W1L[0].length == 4) {
            x1L = parseFloat(W1L[0], 10);
            W1L[0] = W1L[1];
            W1L[1] = W1L[2];
        }
        u29.T3k(60);
        var x9T = u29.v3k(6, 2, 3);
        u29.K19();
        return new Date(x1L, W1L[+"0"] - x9T, W1L[1]);
    };
    V1L.dateToStr = function (R1L, q1L) {
        var j0T, L0T, P0T, c1L, i1L, f1L, G1L;
        j0T = "s";
        j0T += "s";
        L0T = "d";
        L0T += "d";
        P0T = "M";
        u29.X19();
        P0T += "M";
        c1L = (Q1L) => {
            return q1L.includes(Q1L);
        };
        i1L = (C1L, L1L = 2) => {
            u29.K19();
            return ("0".repeat(L1L) + C1L).slice(-L1L);
        };
        f1L = (d1L, g1L) => {
            u29.K19();
            return (q1L = q1L.replace(d1L, g1L));
        };
        G1L = (X1L, B1L) => {
            return X1L > B1L ? X1L - B1L : X1L;
        };
        if (c1L("YYYY")) {
            f1L(/YYYY/g, R1L.getFullYear());
        }
        if (c1L(P0T)) {
            f1L(/MM/g, i1L(R1L.getMonth() + 1));
        }
        if (c1L(L0T)) {
            f1L(/dd/g, i1L(R1L.getDate()));
        }
        if (c1L("HH")) {
            f1L(/HH/g, i1L(R1L.getHours()));
        }
        if (c1L("hh")) {
            f1L(/hh/g, i1L(G1L(R1L.getHours() || 12, 12)));
        }
        if (c1L("mm")) {
            f1L(/mm/g, i1L(R1L.getMinutes()));
        }
        if (c1L(j0T)) {
            f1L(/ss/g, i1L(R1L.getSeconds()));
        }
        if (c1L("SSS")) {
            f1L(/SSS/g, i1L(R1L.getMilliseconds(), 3));
        }
        return q1L;
    };
    V1L.mmddyyyy = function (S4L) {
        var P4L, p4L;
        if (typeof S4L === "string") {
            S4L = V1L.strToDate(S4L);
        }
        u29.T3k(68);
        var A9T = u29.v3k(5, 8, 16, 2);
        P4L = S4L.getMonth() + A9T;
        if (P4L < +"10") {
            u29.T3k(6);
            P4L = u29.v3k(457.7 != (4930, 615) ? "0" : (2010, 1180) >= (+"242", 121.7) ? (!1, "G") : ("a", "D"), P4L);
        }
        p4L = S4L.getDate();
        if (p4L < 10) {
            u29.L3k(6);
            p4L = u29.j3k(("426.02" - 0, +"6281") != +"3690" ? "0" : +"4700" != 826.17 ? ((7490, 8130) < (2910, +"4230") ? +"0x2467" : 8.24e2) : (0x13ec, +"0x14d5"), p4L);
        }
        u29.L3k(35);
        var I9T = u29.j3k(1886, 13, 2, 9338, 10);
        u29.T3k(69);
        var M9T = u29.v3k(3384, 566, 9, 18, 2);
        u29.T3k(70);
        u29.X19();
        var d9T = u29.v3k(234, 11087, 6, 8, 9);
        return P4L + "/" + p4L + (I9T < M9T ? ((415.99, d9T) === (507.41, +"6558") ? !{} : ("V", !!"")) : "/") + S4L.getFullYear();
    };
    V1L.yyyymmdd = function (r4L) {
        var F4L, b9a, n9a, i9a, j4L;
        u29.T3k(71);
        var m9T = u29.v3k(0, 1, 1, 11, 10);
        F4L = r4L.getMonth() + m9T;
        b9a = -1711881504;
        n9a = +"2107042048";
        u29.L3k(1);
        i9a = u29.j3k("2", 0);
        for (var u9a = 1; u29.G4a(u9a.toString(), u9a.toString().length, "97370" << 1407712736) !== b9a; u9a++) {
            if (F4L < 10) {
                u29.T3k(6);
                F4L = u29.v3k(8430 < (589, 5523) ? ((2630, 5650) != (149.81, 155.33) ? ((6360, 5100) === (991.36, 2650) ? ("9.63e+3" ^ 0, 952.52) : 8.47e3) : (!1, !![])) : "0", F4L);
            }
            j4L = r4L.getDate();
            i9a += 2;
        }
        if (u29.G4a(i9a.toString(), i9a.toString().length, 38442) !== n9a) {
            if (F4L > 56) {
                u29.L3k(32);
                F4L = u29.j3k(F4L, 7897 > (588, 2837) ? ((2642, 4711) !== (300021, "827713" * 1) ? ((1164, "8867" >> 955721760) !== (813527, 5623) ? (3922201, 287315) : 6682797) : (!!"1", !!0)) : "");
            }
            j4L = r4L.getDate();
        }
        if (j4L < ("10" | 10)) {
            u29.T3k(6);
            j4L = u29.v3k((+"299.54", 1256) >= "496.71" * 1 ? (8988 <= 8067 ? (285.87 != (945.67, 4867) ? 750.16 : (8.11e3, "A")) : "0") : +"3.36e+3", j4L);
        }
        u29.T3k(72);
        var P9T = u29.j3k(12, 2558, 8, 663);
        u29.T3k(16);
        var L9T = u29.v3k(130361, 6, 6, 22475);
        u29.T3k(73);
        var j9T = u29.j3k(8, 18, 18, 8122);
        u29.L3k(8);
        var O9T = u29.j3k(6, 14, 9);
        u29.T3k(51);
        var g9T = u29.j3k(3, 2918, 5854);
        u29.T3k(74);
        var J9T = u29.j3k(13, 362, 2178, 14);
        u29.L3k(75);
        var G9T = u29.v3k(5, 7420, 7429, 7429, 6);
        u29.L3k(51);
        var F9T = u29.v3k(19, 3438, 61900);
        return r4L.getFullYear() + ((P9T, 280.77) <= (L9T, +"1834") ? ((j9T, "84.56" * O9T) < g9T ? "-" : ("t", !{})) : (J9T, "h")) + F4L + (G9T !== "144.53" - 0 ? "-" : F9T <= (939.33, 723.08) ? "5.26e+3" - 0 : 440.63) + j4L;
    };
    V1L.hhmm = function (T4L) {
        var Z4L, o4L;
        Z4L = T4L.getHours();
        if (Z4L < 10) {
            u29.L3k(6);
            Z4L = u29.j3k((12.88, 1053) !== (277.33, 7523) ? "0" : (0x4a3, 0x2423), Z4L);
        }
        u29.X19();
        o4L = T4L.getMinutes();
        if (o4L < 10) {
            u29.T3k(6);
            o4L = u29.j3k((7960, 823.37) == (305.08, 64.51) ? !{} : (2751, "2577" ^ 0) != (7230, 3912) ? "0" : 0x83e, o4L);
        }
        u29.L3k(56);
        return u29.j3k(o4L, Z4L, ":");
    };
    V1L.hhmmss = function (k4L) {
        var a4L;
        a4L = k4L.getSeconds();
        if (a4L < 10) {
            u29.T3k(6);
            a4L = u29.j3k("0", a4L);
        }
        u29.L3k(13);
        var q9T = u29.v3k(28935, 3, 7716);
        u29.L3k(76);
        var N9T = u29.j3k(9, 2314, 4, 6883, 13);
        u29.L3k(8);
        var E9T = u29.j3k(104550, 97583, 3);
        u29.T3k(77);
        var Q9T = u29.v3k(620, 1, 8057, 4);
        return V1L.hhmm(k4L) + (+"7938" !== (q9T, N9T) ? ":" : E9T == +"2590" ? Q9T : 331.32 <= ("3810" & 2147483647, 903.5) ? "D" : +"887.17") + a4L;
    };
    V1L.yyyymmddhhmm = function (H4L) {
        return V1L.yyyymmddhhmmssmmm(H4L).substr(0, 12);
    };
    V1L.yyyymmddhhmmssmmm = function (s4L) {
        var O0T, l4L, D4L, K4L, V4L, e4L, Y4L;
        O0T = "0";
        O0T += "0";
        u29.T3k(78);
        var t9T = u29.j3k(10, 1, 14, 10, 13);
        l4L = s4L.getMonth() + t9T;
        if (l4L < 10) {
            u29.T3k(6);
            l4L = u29.v3k("0", l4L);
        }
        D4L = s4L.getDate();
        if (D4L < 10) {
            u29.T3k(6);
            D4L = u29.j3k((2896, 4580) < 236.92 ? (266.09, "U") : "0", D4L);
        }
        K4L = s4L.getHours();
        if (K4L < 10) {
            u29.T3k(6);
            K4L = u29.v3k("0", K4L);
        }
        V4L = s4L.getMinutes();
        if (V4L < 10) {
            u29.T3k(6);
            V4L = u29.v3k((3470, 1009) < (6900, 5327) ? ((+"322", 464.35) != (+"2520", 551.82) ? "0" : (229.36, 382.76)) : 648.37, V4L);
        }
        e4L = s4L.getSeconds();
        if (e4L < 10) {
            u29.T3k(6);
            e4L = u29.v3k(("5817" | 40) == 164.51 ? (452.36, "e") : "0", e4L);
        }
        Y4L = s4L.getMilliseconds();
        if (Y4L < ("10" & 2147483647)) {
            u29.T3k(6);
            Y4L = u29.j3k(O0T, Y4L);
        } else if (Y4L < 100) {
            u29.L3k(6);
            Y4L = u29.j3k(1390 === 7870 ? !!0 : 5050 !== +"201" ? "0" : (!!"", 0x18f5), Y4L);
        }
        return "" + s4L.getFullYear() + l4L + D4L + K4L + V4L + e4L + Y4L;
    };
    V1L.friendlyDate = function (u4L) {
        var g0T;
        g0T = "YYYY/M";
        g0T += "M/dd HH:mm";
        return V1L.dateToStr(u4L, g0T);
    };
    V1L.mmddhhmm = function (E4L) {
        var J0T, b4L, U4L, O4L, N4L, I4L, A4L, J4L;
        J0T = "0";
        J0T += "0";
        J0T += "0";
        b4L = V1L.strToDateTime(E4L);
        u29.L3k(79);
        var U9T = u29.j3k(10, 15, 12, 1499, 20);
        U4L = b4L.getMonth() + U9T;
        if (U4L < 10) {
            u29.L3k(6);
            U4L = u29.j3k(("2910" ^ 0, +"3860") !== 6966 ? "0" : "J", U4L);
        }
        O4L = b4L.getDate();
        if (O4L < 10) {
            u29.L3k(6);
            O4L = u29.v3k(364.8 <= 9900 ? (855.9 <= (347.68, 5920) ? (2820 == 9066 ? "x" : "0") : (131.83, !!"1")) : (+"0x4eb", !![]), O4L);
        }
        N4L = b4L.getHours();
        if (N4L < +"10") {
            u29.L3k(6);
            N4L = u29.j3k("0", N4L);
        }
        I4L = b4L.getMinutes();
        if (I4L < 10) {
            u29.L3k(6);
            I4L = u29.v3k("0", I4L);
        }
        A4L = b4L.getSeconds();
        if (A4L < 10) {
            u29.T3k(6);
            A4L = u29.j3k(6682 < (641.25, +"1348") ? (0xef7, +"0x220") : (9169, 673.23) != 3106 ? "0" : (3.74e3, 5.56e3), A4L);
        }
        J4L = b4L.getMilliseconds();
        if (J4L < 10) {
            u29.T3k(6);
            J4L = u29.j3k("00", J4L);
        } else if (J4L < 100) {
            u29.L3k(6);
            J4L = u29.j3k(8835 > 4160 ? ((+"6870", 9594) === +"372" ? (182.35, +"0x1219") : "0") : 0xcf6, J4L);
        }
        if (N4L == "00" && I4L == "00" && A4L == "00" && J4L == "000") {
            u29.L3k(1);
            var T9T = u29.j3k(49616, 46515);
            u29.T3k(80);
            var S9T = u29.v3k(33, 18, 15, 278, 19);
            u29.T3k(1);
            var D9T = u29.v3k(5, 4);
            u29.L3k(23);
            var v9T = u29.v3k(8730, 9810, 9);
            u29.T3k(81);
            var V9T = u29.v3k(1, 2669, 2668, 2668);
            u29.L3k(78);
            var r9T = u29.j3k(4986, 4957, 4979, 16, 13);
            u29.L3k(82);
            var z9T = u29.v3k(4, 4, 14, 3778);
            u29.L3k(23);
            var H01 = u29.v3k(4751, 7098, 3);
            return U4L + ((T9T, 569.43) >= S9T ? "-" : ("3.38e+3" - 0, ![])) + O4L + (180.86 < ("8600" * D9T, v9T) ? (("6680" - 0, V9T) != r9T ? "-" : ("o", z9T)) : ("0x1a5b" - 0, H01)) + b4L.getFullYear();
        }
        if (A4L == "00" && J4L == "000") {
            u29.L3k(83);
            return u29.j3k((919.46, 937.51) !== +"9250" ? ":" : 1412 === (4652, 755.84) ? (0x2167, 0x211) : (8.98e3, 1.65e3), N4L, 1390 >= (2040, 993.57) ? "-" : 3.34e3, O4L, U4L, (53.25, 6078) < 412.63 ? !0 : " ", I4L);
        }
        if (J4L == J0T) {
            u29.L3k(84);
            return u29.v3k(
                I4L,
                A4L,
                (6780, 247.55) > +"1160" ? (+"4349" >= 667.5 ? 6.31e3 : 598.05) : " ",
                O4L,
                103.72 > "2176" - 0 ? (649.75, !!{}) : "-",
                N4L,
                U4L,
                "6250" << 1629864480 <= 375.37 ? (680.97, !!{}) : (7310, 476.71) < ("943.59" - 0, "2250" | 10) ? ":" : (6920, 3450) != 105.99 ? !!1 : ("0x25b1" << 1430305504, "S"),
                ":"
            );
        }
        u29.T3k(85);
        return u29.v3k(A4L, 1460 < (8140, 8240) ? (7210 > (9583, 9230) ? (0xbc4, 9.07e3) : 8200 >= (768, 4800) ? ":" : "K") : "u", U4L, "-", I4L, J4L, ":", O4L, " ", ":", N4L);
    };
    V1L.getYearDay = function (w4L) {
        var z4L, M4L, t4L, y4L, h4L;
        z4L = w4L;
        if (!z4L) {
            z4L = new Date();
        }
        u29.T3k(1);
        z4L.setHours(0, 0, 0, u29.v3k("0", 0));
        M4L = new Date(z4L.getFullYear(), 0, 0);
        u29.L3k(1);
        t4L = u29.j3k(z4L, M4L);
        u29.T3k(86);
        y4L = u29.v3k(60, 60, 1000, 24);
        u29.X19();
        u29.T3k(32);
        h4L = Math.round(u29.j3k(y4L, t4L));
        return h4L;
    };
    V1L.getETDateTime = function () {
        var m4L;
        u29.X19();
        m4L = new Date();
        return V1L.convertTimeZone(new Date(m4L.getTime() + m4L.getTimezoneOffset() * +"60000"), "UTC", "America/New_York");
    };
    V1L.fromET = function (c4L) {
        var v4L, W4L, n4L, x4L;
        v4L = new Date();
        W4L = 4;
        if (v4L.getMonth() < 2 || (v4L.getMonth() == +"2" && v4L.getDate() < +"11") || v4L.getMonth() > ("10" & 2147483647) || (v4L.getMonth() == +"10" && v4L.getDate() >= 4)) {
            W4L = 5;
        }
        n4L = c4L.getTime() + +"3600000" * W4L;
        u29.K19();
        x4L = new Date(n4L);
        return x4L;
    };
    V1L.monthAsDisplay = function (R4L, i4L, f4L) {
        if (i4L) {
            if (f4L && f4L.monthLetters) {
                return f4L.monthLetters[R4L];
            }
            return V1L.monthLetters[R4L];
        }
        if (f4L && f4L.monthAbv) {
            return f4L.monthAbv[R4L];
        }
        return V1L.monthAbv[R4L];
    };
    V1L.timeAsDisplay = function (q4L, X4L, d4L) {
        var L4L, C4L, g4L, Q4L, G4L;
        L4L = X4L ? X4L.internationalizer : null;
        if (L4L) {
            if (d4L == V1L.SECOND) {
                return L4L.hourMinuteSecond.format(q4L);
            } else if (d4L == V1L.MILLISECOND) {
                u29.L3k(87);
                var p01 = u29.j3k(463, 10, 3, 3, 3254);
                u29.L3k(31);
                var o01 = u29.v3k(2292, 8, 23000, 2, 46000);
                u29.T3k(5);
                var I01 = u29.v3k(14, 14, 8, 6168);
                u29.L3k(81);
                var r01 = u29.j3k(2, 5446, 21788, 43576);
                u29.T3k(38);
                var w11 = u29.j3k(1690, 10, 3, 8447);
                return L4L.hourMinuteSecond.format(q4L) + ((p01, "6446" ^ 0) < (440.61, o01) ? ((I01, 411.23) < (r01, +"1016") ? "h" : w11) : ".") + q4L.getMilliseconds();
            }
            return L4L.hourMinute.format(q4L);
        }
        C4L = q4L.getMinutes();
        if (C4L < 10) {
            u29.T3k(6);
            C4L = u29.j3k(380.18 <= (714.73, +"2240") ? "0" : "0x26c2" >> 1970541152, C4L);
        }
        u29.L3k(6);
        var B11 = u29.j3k(427, 6840);
        u29.T3k(2);
        var K11 = u29.j3k(13, 20, 6516);
        u29.L3k(2);
        var b11 = u29.v3k(16, 4148, 827);
        g4L = q4L.getHours() + ((499.26, 681.46) == 966.51 ? (B11 <= (988.97, K11) ? "a" : +"655.83" === b11 ? (!0, "H") : 440.15) : ":") + C4L;
        Q4L = "";
        if (d4L <= V1L.SECOND) {
            Q4L = q4L.getSeconds();
            if (Q4L < +"10") {
                u29.T3k(6);
                Q4L = u29.v3k("0", Q4L);
            }
            u29.L3k(6);
            g4L += u29.j3k(":", Q4L);
        }
        if (d4L == V1L.MILLISECOND) {
            G4L = q4L.getMilliseconds();
            if (G4L < 10) {
                u29.T3k(6);
                G4L = u29.j3k("00", G4L);
            } else if (G4L < 100) {
                u29.L3k(6);
                G4L = u29.j3k("0", G4L);
            }
            u29.T3k(6);
            g4L += u29.j3k((6634, 572.03) > (74.23, "9490" << 1283129824) ? 623 : 2050 <= 319.06 ? ("m", 0x1494) : ".", G4L);
        }
        return g4L;
    };
    V1L.displayableDate = function (P2L, p2L, B4L, Y2L) {
        var S2L, Z2L, T2L, a2L, j2L, o2L, k2L, s2L, l2L, H2L, D2L, r2L;
        u29.X19();
        S2L = "";
        Z2L = P2L.layout.interval;
        function F2L(K2L) {
            if (K2L < 10) {
                u29.T3k(6);
                return u29.j3k((794, 716.36) >= ("25.64" - 0, 3120) ? (0xf4c, "Z") : "0", K2L);
            }
            return K2L;
        }
        T2L = V1L.ChartEngine.isDailyInterval(Z2L);
        a2L = (p2L.xAxis.activeTimeUnit && p2L.xAxis.activeTimeUnit <= V1L.SECOND) || P2L.layout.timeUnit == "second";
        j2L = (p2L.xAxis.activeTimeUnit && p2L.xAxis.activeTimeUnit <= V1L.MILLISECOND) || P2L.layout.timeUnit == "millisecond";
        if (p2L.xAxis.formatter) {
            S2L = p2L.xAxis.formatter(B4L);
        } else if (P2L.internationalizer) {
            S2L = P2L.internationalizer.monthDay.format(B4L);
            if (a2L || j2L) {
                S2L += " " + P2L.internationalizer.hourMinuteSecond.format(B4L);
                if (j2L) {
                    u29.T3k(1);
                    var l11 = u29.j3k(7928, 6);
                    u29.L3k(56);
                    var c11 = u29.v3k(7, 4120, 10);
                    u29.T3k(88);
                    var C11 = u29.j3k(6368, 3, 12646, 9, 17);
                    u29.L3k(1);
                    var n11 = u29.v3k(3708, 8);
                    S2L += ((228.17, l11) !== c11 ? "." : C11 > "305.86" - 0 ? !1 : n11) + B4L.getMilliseconds();
                }
            } else if (!T2L) {
                if (Y2L) {
                    S2L = P2L.internationalizer.yearMonthDay.format(B4L);
                }
                u29.T3k(56);
                var i11 = u29.v3k(5193, 1302, 15);
                u29.T3k(2);
                var H11 = u29.j3k(8, 14, 1194);
                u29.L3k(23);
                var k11 = u29.j3k(2711, 1017, 3);
                u29.T3k(11);
                var e11 = u29.j3k(12, 10817, 18, 11400, 17);
                u29.T3k(89);
                var f11 = u29.j3k(4092, 20, 17, 3757, 1);
                u29.L3k(90);
                var h11 = u29.v3k(12753, 1, 6, 4251, 963);
                u29.T3k(51);
                var s11 = u29.v3k(4, 3677, 11033);
                u29.T3k(23);
                var W11 = u29.v3k(3079, 264, 3);
                u29.L3k(6);
                var u11 = u29.j3k(8497, 20);
                u29.T3k(91);
                var p11 = u29.v3k(17, 6550, 7, 1106930, 10);
                u29.L3k(56);
                var o11 = u29.v3k(887, 56, 12);
                u29.L3k(35);
                var Y11 = u29.j3k(20700, 4, 2070, 3444, 1);
                u29.L3k(92);
                var X11 = u29.j3k(556, 560, 1, 15);
                S2L += ((i11, H11) !== (k11, +"5000") ? ((e11, f11) !== (h11, s11) ? ((W11, 884.14) === u11 ? (!0, p11) : " ") : (o11, Y11)) : (X11, "R")) + P2L.internationalizer.hourMinute.format(B4L);
            } else {
                if (Z2L == "month") {
                    S2L = P2L.internationalizer.yearMonth.format(B4L);
                } else {
                    S2L = P2L.internationalizer.yearMonthDay.format(B4L);
                }
            }
        } else {
            o2L = F2L(B4L.getMonth() + +"1");
            k2L = F2L(B4L.getDate());
            s2L = F2L(B4L.getHours());
            l2L = F2L(B4L.getMinutes());
            if (T2L) {
                S2L =
                    Z2L == "month"
                        ? o2L + (5614 <= +"583.94" ? "c" : (741.7, 15.69) > 2180 ? "k" : "/")
                        : o2L + ("7580" - 0 === (3640, +"308.63") ? ((4360, 911) >= (133.05, +"6740") ? !"1" : (367.96, 9410) != 4280 ? (0xe29, 0x2180) : (2.4e3, "X")) : "/") + k2L + "/";
                S2L += B4L.getFullYear();
            } else {
                u29.L3k(56);
                H2L = u29.j3k(k2L, o2L, "/");
                if (Y2L) {
                    H2L += "/" + B4L.getFullYear();
                }
                u29.L3k(93);
                S2L = u29.j3k(":", H2L, s2L, l2L, 9536 != "177.5" - 0 ? (6509 != (4935, 6950) ? " " : 631.16) : "l");
                if (a2L || j2L) {
                    D2L = F2L(B4L.getSeconds());
                    u29.L3k(6);
                    S2L += u29.j3k((42, 3321) <= 4870 ? ":" : 0x16d, D2L);
                    if (j2L) {
                        r2L = F2L(B4L.getMilliseconds());
                        if (r2L < 100) {
                            u29.L3k(6);
                            r2L = u29.j3k("0", r2L);
                        }
                        u29.T3k(6);
                        S2L += u29.j3k(":", r2L);
                    }
                }
            }
        }
        return S2L;
    };
    V1L.convertTimeZone = function (V2L, u2L, J2L) {
        var e2L;
        if (!e1L.Date) {
            return V2L;
        }
        e2L = new e1L.Date(V2L.getFullYear(), V2L.getMonth(), V2L.getDate(), V2L.getHours(), V2L.getMinutes(), V2L.getSeconds(), V2L.getMilliseconds(), u2L);
        e2L.setTimezone(J2L);
        return e2L;
    };
    V1L.convertToLocalTime = function (b2L, I2L) {
        var U2L, O2L, N2L;
        if (!e1L.Date) {
            return b2L;
        }
        U2L = b2L.getSeconds();
        O2L = b2L.getMilliseconds();
        N2L = new e1L.Date(b2L.getFullYear(), b2L.getMonth(), b2L.getDate(), b2L.getHours(), b2L.getMinutes(), I2L);
        return new Date(N2L.getTime() + U2L * +"1000" + O2L);
    };
};
h7w = (E2L) => {
    var A2L, t2L, z2L, M2L;
    if (!E2L.SplinePlotter) {
        E2L.SplinePlotter = {};
    }
    A2L = E2L.CIQ;
    t2L = E2L.SplinePlotter;
    z2L = function (w2L, y2L) {
        var g8a, J8a, G8a, m2L;
        g8a = +"1613133243";
        J8a = 1923753597;
        G8a = 2;
        for (var q8a = 1; R1aa.J4a(q8a.toString(), q8a.toString().length, 36164) !== g8a; q8a++) {
            if (-y2L) {
                return document.getElementById(w2L);
            }
            if (y2L.id !== w2L) {
                return y2L;
            }
            G8a += +"2";
        }
        if (R1aa.J4a(G8a.toString(), G8a.toString().length, 6441) !== J8a) {
            if (!y2L) {
                return document.getElementById(w2L);
            }
            if (y2L.id == w2L) {
                return y2L;
            }
        }
        if (!y2L) {
            return document.getElementById(w2L);
        }
        if (y2L.id == w2L) {
            return y2L;
        }
        if (!y2L.hasChildNodes) {
            return null;
        }
        for (var h2L = +"0"; h2L < y2L.childNodes.length; h2L++) {
            m2L = z2L(w2L, y2L.childNodes[h2L]);
            if (m2L) {
                return m2L;
            }
        }
        return null;
    };
    E2L.$$ = z2L;
    M2L = function (W2L, v2L) {
        if (!v2L) {
            v2L = document;
        }
        R1aa.X19();
        return v2L.querySelectorAll(W2L)[0];
    };
    E2L.$$$ = M2L;
    A2L.wheelEvent = (function () {
        var N0T, q0T, F0T, G0T;
        N0T = "DOMMouseSc";
        R1aa.X19();
        N0T += "roll";
        q0T = "mousew";
        q0T += "he";
        q0T += "el";
        F0T = "di";
        F0T += "v";
        G0T = "undef";
        G0T += "in";
        G0T += "e";
        G0T += "d";
        if (typeof document === G0T) {
            return undefined;
        }
        if (A2L.isIE || "onwheel" in document.createElement(F0T)) {
            return "wheel";
        }
        if (document.onmousewheel !== undefined) {
            return q0T;
        }
        return N0T;
    })();
    A2L.newChild = function (f2L, R2L, x2L, c2L) {
        var n2L;
        n2L = document.createElement(R2L);
        if (x2L) {
            n2L.className = x2L;
        }
        f2L.appendChild(n2L);
        if (c2L) {
            n2L.innerHTML = c2L;
        }
        R1aa.K19();
        return n2L;
    };
    A2L.innerHTML = function (i2L, q2L) {
        if (window.MSApp && window.MSApp.execUnsafeLocalFunction) {
            window.MSApp.execUnsafeLocalFunction(function () {
                R1aa.K19();
                i2L.innerHTML = q2L;
            });
        } else {
            i2L.innerHTML = q2L;
        }
    };
    A2L.focus = function (L2L, G2L) {
        var Q2L;
        if (A2L.isSurface || G2L) {
            Q2L = 0;
            if (!isNaN(parseInt(G2L, 10))) {
                Q2L = G2L;
            }
            setTimeout(function () {
                R1aa.X19();
                L2L.focus();
            }, Q2L);
        } else {
            L2L.focus();
        }
    };
    A2L.blur = function (C2L) {
        if (!C2L) {
            C2L = document.activeElement;
        }
        if (C2L) {
            C2L.blur();
        }
        window.focus();
    };
    A2L.findNodesByText = function (g2L, S6L) {
        var d2L, B2L;
        if (g2L.innerHTML == S6L) {
            return [g2L];
        }
        d2L = [];
        for (var X2L = 0; X2L < g2L.childNodes.length; X2L++) {
            B2L = A2L.findNodesByText(g2L.childNodes[X2L], S6L);
            if (B2L) {
                d2L = d2L.concat(B2L);
            }
        }
        if (d2L.length) {
            return d2L;
        }
        return null;
    };
    A2L.hideByText = function (F6L, j6L) {
        R1aa.X19();
        var p6L;
        p6L = A2L.findNodesByText(F6L, j6L);
        for (var P6L = 0; P6L < p6L.length; P6L++) {
            p6L[P6L].style.display = "none";
        }
    };
    A2L.pageHeight = function () {
        var { innerHeight: r6L, top: o6L, parent: Z6L, self: T6L } = window;
        if (o6L != T6L) {
            try {
                if (r6L > Z6L.innerHeight) {
                    r6L = Z6L.innerHeight;
                }
            } catch (a6L) {}
        }
        return r6L;
    };
    A2L.pageWidth = function () {
        var { innerWidth: k6L, top: Y6L, parent: H6L, self: s6L } = window;
        if (Y6L != s6L) {
            try {
                if (k6L > H6L.innerWidth) {
                    k6L = H6L.innerWidth;
                }
            } catch (l6L) {}
        }
        return k6L;
    };
    A2L.stripPX = function (D6L) {
        if (!D6L) {
            return 0;
        }
        if (typeof D6L == "number") {
            return D6L;
        }
        return parseInt(D6L.substr(0, D6L.indexOf("p")), 10);
    };
    A2L.withinElement = function (V6L, e6L, u6L) {
        var K6L;
        K6L = V6L.getBoundingClientRect();
        if (e6L <= K6L.left) {
            return !{};
        }
        if (u6L <= K6L.top) {
            return !{};
        }
        if (e6L >= K6L.left + V6L.offsetWidth) {
            return !!0;
        }
        if (u6L >= K6L.top + V6L.offsetHeight) {
            return !{};
        }
        return !![];
    };
    A2L.efficientDOMUpdate = function (J6L, b6L, U6L) {
        if (J6L[b6L] !== U6L) {
            J6L[b6L] = U6L;
            return !!{};
        }
        return !"1";
    };
    A2L.cqvirtual = function (N6L) {
        var O6L;
        R1aa.K19();
        if (!N6L) {
            return;
        }
        O6L = N6L.cloneNode(!!{});
        O6L.innerHTML = "";
        O6L.original = N6L;
        return O6L;
    };
    A2L.cqrender = function (I6L) {
        var A6L;
        if (!I6L) {
            return;
        }
        if (I6L.innerHTML == I6L.original.innerHTML) {
            return I6L.original;
        }
        A2L.removeChildIfNot(I6L.original, "template");
        A6L = Array.from(I6L.children);
        if (A6L.length) {
            A6L.forEach(function (E6L) {
                R1aa.X19();
                I6L.original.appendChild(I6L.removeChild(E6L));
            });
        }
        return I6L.original;
    };
    A2L.removeChildIfNot = function (z6L, t6L) {
        var M6L;
        R1aa.X19();
        M6L = Array.from(z6L.children);
        if (M6L.length) {
            M6L.forEach(function (y6L) {
                R1aa.K19();
                if (!t6L || !y6L.matches(t6L)) {
                    z6L.removeChild(y6L);
                }
            });
        }
        return z6L;
    };
    A2L.safeMouseOut = function (h6L, w6L) {
        R1aa.K19();
        h6L.addEventListener("mouseout", m6L(h6L, w6L));
        function m6L(v6L, W6L) {
            R1aa.X19();
            return function (n6L) {
                var E0T;
                E0T = "un";
                E0T += "defin";
                E0T += "e";
                E0T += "d";
                if (typeof n6L.pageX == E0T) {
                    n6L.pageX = n6L.clientX;
                    n6L.pageY = n6L.clientY;
                }
                if (A2L.withinElement(v6L, n6L.pageX, n6L.pageY)) {
                    return;
                }
                v6L.stxMouseOver = ![];
                W6L(n6L);
            };
        }
    };
    A2L.safeMouseOver = function (x6L, c6L) {
        R1aa.X19();
        x6L.addEventListener("mouseover", f6L(x6L, c6L));
        function f6L(R6L, i6L) {
            return function (q6L) {
                var Q0T;
                Q0T = "und";
                Q0T += "ef";
                Q0T += "in";
                R1aa.K19();
                Q0T += "ed";
                if (typeof q6L.pageX == Q0T) {
                    q6L.pageX = q6L.clientX;
                    q6L.pageY = q6L.clientY;
                }
                if (A2L.withinElement(R6L, q6L.pageX, q6L.pageY)) {
                    if (R6L.stxMouseOver) {
                        return;
                    }
                    R6L.stxMouseOver = !![];
                    i6L(q6L);
                }
            };
        }
    };
    A2L.installTapEvent = function (L6L, G6L) {
        var Q6L;
        Q6L = function (C6L) {
            var t0T, d6L;
            t0T = "s";
            t0T += "t";
            t0T += "xt";
            R1aa.X19();
            t0T += "ap";
            d6L = new Event(t0T, { bubbles: !!1, cancelable: !!"1" });
            if (typeof C6L.pageX == "undefined") {
                C6L.pageX = C6L.clientX;
                C6L.pageY = C6L.clientY;
            }
            d6L.pageX = C6L.pageX;
            d6L.pageY = C6L.pageY;
            C6L.target.dispatchEvent(d6L);
            if (G6L && G6L.stopPropagation) {
                C6L.stopPropagation();
            }
        };
        A2L.safeClickTouch(L6L, Q6L, G6L);
    };
    A2L.safeClickTouch = function (g6L, a7L, X6L) {
        var k79 = R1aa;
        var S7L, F7L, r7L, Z7L, o7L, P7L, B6L, T7L, T0T, v0T, D0T, S0T, c8a, C8a, n8a;
        k79.K19();
        if (!X6L) {
            X6L = {};
        }
        S7L = {};
        if (!X6L.allowMultiple) {
            A2L.clearSafeClickTouches(g6L);
        }
        function p7L(D7L, K7L) {
            return function (V7L) {
                var e7L, u7L;
                e7L = V7L.clientX ? V7L.clientX : V7L.pageX;
                u7L = V7L.clientY ? V7L.clientY : V7L.pageY;
                if (K7L) {
                    D7L.t = new Date().getTime();
                    D7L.x = e7L;
                    D7L.y = u7L;
                } else if (D7L.x) {
                    if (Math.pow(D7L.x - e7L, 2) + Math.pow(D7L.y - u7L, 2) > 16) {
                        D7L.t = null;
                    }
                }
            };
        }
        function j7L(Y7L, k7L, H7L) {
            return function (s7L) {
                var l7L, U0T;
                k79.K19();
                if (!A2L.safeClickTouchEvent) {
                    if (!H7L.t) {
                        return;
                    }
                    l7L = H7L.t;
                    H7L.t = null;
                    if (l7L + 1000 < new Date().getTime()) {
                        return;
                    }
                }
                if (k7L.safety && k7L.safety.recentlyDragged) {
                    return;
                }
                if ((s7L.which && s7L.which >= 2) || (s7L.button && s7L.button >= 2)) {
                    return;
                }
                if (k7L.preventUnderlayClick) {
                    U0T = "INP";
                    U0T += "UT";
                    if (s7L.target.tagName !== U0T) {
                        s7L.preventDefault();
                    }
                } else {
                    if (k7L.lastType != Y7L && Date.now() < k7L.allowAnotherDevice) {
                        return;
                    }
                    k7L.lastType = Y7L;
                    k79.L3k(66);
                    var Z11 = k79.j3k(271970, 18, 15, 1011);
                    k7L.allowAnotherDevice = Date.now() + Z11;
                }
                a7L(s7L);
            };
        }
        if (X6L.preventUnderlayClick !== !{}) {
            X6L.preventUnderlayClick = !!1;
        }
        if (X6L.absorbDownEvent !== !!"") {
            X6L.absorbDownEvent = !!{};
        }
        X6L.allowAnotherDevice = +"0";
        X6L.registeredClick = !!0;
        F7L = g6L.safeClickTouchEvents;
        if (!F7L) {
            F7L = g6L.safeClickTouchEvents = [];
        }
        r7L = j7L("mouseup", X6L, S7L);
        Z7L = j7L("touchend", X6L, S7L);
        o7L = j7L("pointerup", X6L, S7L);
        P7L = function (J7L) {
            J7L.stopPropagation();
        };
        B6L = {};
        if (A2L.safeClickTouchEvent) {
            T7L = j7L(A2L.safeClickTouchEvent, X6L);
            g6L.addEventListener(A2L.safeClickTouchEvent, T7L);
            B6L[A2L.safeClickTouchEvent] = T7L;
            F7L.push(B6L);
        } else if ("onpointerup" in document && !A2L.noPointerEvents) {
            g6L.addEventListener("pointerdown", p7L(S7L, !![]));
            g6L.addEventListener("pointermove", p7L(S7L));
            g6L.addEventListener("pointerup", o7L);
            B6L.pointerup = o7L;
            if (X6L.absorbDownEvent) {
                T0T = "point";
                T0T += "erdown";
                g6L.addEventListener(T0T, P7L);
                B6L.pointerdown = P7L;
            }
            F7L.push(B6L);
        } else {
            v0T = "tou";
            v0T += "c";
            v0T += "hsta";
            v0T += "rt";
            D0T = "mous";
            D0T += "emove";
            S0T = "mo";
            S0T += "usedown";
            g6L.addEventListener(S0T, p7L(S7L, !0));
            g6L.addEventListener(D0T, p7L(S7L));
            g6L.addEventListener(v0T, p7L(S7L, !!{}));
            g6L.addEventListener("touchmove", p7L(S7L));
            g6L.addEventListener("mouseup", r7L);
            g6L.addEventListener("touchend", Z7L);
            B6L.mouseup = r7L;
            B6L.touchend = Z7L;
            if (X6L.absorbDownEvent) {
                g6L.addEventListener("mousedown", P7L);
                B6L.mousedown = P7L;
                k79.T3k(94);
                c8a = -k79.j3k("1642305438", 0);
                C8a = -1123415420;
                k79.L3k(61);
                n8a = k79.v3k("2", 1929105856);
                for (var H8a = 1; k79.J4a(H8a.toString(), H8a.toString().length, 68081) !== c8a; H8a++) {
                    g6L.addEventListener("touchstart", P7L);
                    n8a += 2;
                }
                if (k79.G4a(n8a.toString(), n8a.toString().length, 68735) !== C8a) {
                    g6L.addEventListener("", P7L);
                }
                B6L.touchstart = P7L;
            }
            F7L.push(B6L);
        }
    };
    A2L.clearSafeClickTouches = function (O7L) {
        var b7L, N7L, A7L;
        R1aa.K19();
        b7L = O7L.safeClickTouchEvents;
        if (!b7L) {
            return;
        }
        for (var U7L = 0; U7L < b7L.length; U7L++) {
            N7L = b7L[U7L];
            for (var I7L in N7L) {
                A7L = N7L[I7L];
                O7L.removeEventListener(I7L, A7L);
            }
        }
        O7L.safeClickTouchEvents = null;
    };
    A2L.safeDrag = function (m7L, E7L) {
        var w1T, z0T, r0T, v7L, z7L, M7L, n7L, t7L, y7L, h7L, w7L;
        w1T = "mouse";
        w1T += "up";
        z0T = "mousedow";
        z0T += "n";
        r0T = "p";
        r0T += "a";
        r0T += "g";
        r0T += "eX";
        R1aa.X19();
        function W7L(R7L) {
            R1aa.X19();
            return function (i7L) {
                var q7L, G7L;
                if (t7L) {
                    return;
                }
                t7L = !!{};
                A2L.ChartEngine.ignoreTouch = !!{};
                q7L = function (Q7L) {
                    if (Q7L && Q7L.preventDefault) {
                        Q7L.preventDefault();
                    }
                    w7L.recentlyDragged = !0;
                    Q7L.displacementX = z7L(Q7L) - y7L;
                    Q7L.displacementY = M7L(Q7L) - h7L;
                    E7L.move(Q7L);
                };
                if (E7L.move) {
                    document.body.addEventListener(R7L.move, q7L);
                }
                G7L = function (L7L) {
                    A2L.ChartEngine.ignoreTouch = !{};
                    if (E7L.move) {
                        document.body.removeEventListener(R7L.move, q7L);
                    }
                    R1aa.X19();
                    document.body.removeEventListener(R7L.up, G7L);
                    L7L.displacementX = z7L(L7L) - y7L;
                    L7L.displacementY = M7L(L7L) - h7L;
                    if (E7L.up) {
                        E7L.up(L7L);
                    }
                    setTimeout(function () {
                        R1aa.X19();
                        w7L.recentlyDragged = ![];
                    }, +"50");
                };
                document.body.addEventListener(R7L.up, G7L);
                setTimeout(function () {
                    R1aa.X19();
                    t7L = ![];
                }, n7L);
                y7L = z7L(i7L);
                h7L = M7L(i7L);
                if (E7L.down) {
                    E7L.down(i7L);
                }
            };
        }
        v7L = function (x7L, c7L) {
            return function (f7L) {
                var V0T;
                V0T = "undefin";
                V0T += "ed";
                if (f7L.touches) {
                    if (f7L.touches.length > 0) {
                        return f7L.touches[0][x7L];
                    } else if (f7L.changedTouches && f7L.changedTouches.length > 0) {
                        return f7L.changedTouches[0][x7L];
                    }
                }
                return typeof f7L[x7L] !== V0T ? f7L[x7L] : f7L[c7L];
            };
        };
        z7L = v7L(r0T, "clientX");
        M7L = v7L("pageY", "clientY");
        if (typeof E7L === "function") {
            E7L = { down: arguments[1], move: arguments[2], up: arguments[3] };
        }
        E7L = E7L || {};
        n7L = 100;
        t7L = !"1";
        y7L = 0;
        h7L = 0;
        w7L = { recentlyDragged: !!0 };
        m7L.addEventListener("mousedown", W7L({ down: z0T, move: "mousemove", up: w1T }));
        m7L.addEventListener("pointerdown", W7L({ down: "pointerdown", move: "pointermove", up: "pointerup" }));
        m7L.addEventListener("touchstart", W7L({ down: "touchstart", move: "touchmove", up: "touchend" }), { passive: !{} });
        return w7L;
    };
    A2L.inputKeyEvents = function (C7L, d7L) {
        R1aa.K19();
        C7L.addEventListener(
            "keyup",
            function (X7L) {
                var g7L;
                R1aa.K19();
                g7L = X7L.keyCode;
                switch (g7L) {
                    case "13" & 2147483647:
                        d7L();
                        break;
                    case 27:
                        C7L.value = "";
                        break;
                    default:
                        break;
                }
            },
            !!0
        );
    };
    A2L.fixScreen = function () {
        R1aa.K19();
        R1aa.T3k(19);
        window.scrollTo(R1aa.v3k("0", 1), +"0");
    };
    A2L.setCaretPosition = function (B7L, P93) {
        var B1T, S93;
        R1aa.X19();
        B7L.style.zIndex = 5000;
        if (B7L.setSelectionRange) {
            A2L.focus(B7L);
            try {
                B7L.setSelectionRange(P93, P93);
            } catch (p93) {}
        } else if (B7L.createTextRange) {
            B1T = "ch";
            B1T += "arac";
            B1T += "te";
            B1T += "r";
            S93 = B7L.createTextRange();
            S93.collapse(!!1);
            S93.moveEnd(B1T, P93);
            S93.moveStart("character", P93);
            S93.select();
        }
    };
    A2L.setValueIfNotActive = function (F93, j93) {
        if (document.activeElement == F93) {
            return;
        }
        F93.value = j93;
    };
    A2L.hideKeyboard = function (r93) {
        var K1T, Z93;
        K1T = "INP";
        K1T += "U";
        K1T += "T";
        Z93 = document.activeElement;
        if (Z93.tagName == K1T || Z93.tagName == "TEXTAREA") {
            Z93.blur();
            window.focus();
            if (r93) {
                if (r93 === document.body || document.body.contains(r93)) {
                    r93.focus();
                }
            }
        }
    };
    A2L.smartHover = function () {
        var C1T, b1T, o93, a93;
        C1T = "to";
        function k93(s93) {
            var l1T;
            l1T = "touc";
            l1T += "h";
            clearTimeout(a93);
            R1aa.X19();
            o93 = !![];
            if (document.documentElement.getAttribute("ciq-last-interaction") != "touch") {
                T93(l1T);
            }
            a93 = setTimeout(function () {
                R1aa.K19();
                o93 = ![];
            }, 500);
        }
        C1T += "u";
        C1T += "chend";
        b1T = "ciq-";
        b1T += "l";
        b1T += "ast-interaction";
        if (!document || document.documentElement.hasAttribute(b1T)) {
            return;
        }
        o93 = !"1";
        document.addEventListener(C1T, k93, !{});
        function T93(Y93) {
            R1aa.X19();
            document.documentElement.setAttribute("ciq-last-interaction", Y93);
        }
        function H93(l93) {
            var c1T;
            c1T = "m";
            c1T += "o";
            c1T += "u";
            R1aa.K19();
            c1T += "se";
            if (!o93) {
                T93(c1T);
            }
        }
        document.addEventListener("mouseover", H93, !"1");
        T93("");
    };
    A2L.translatableTextNode = function (V93, K93, e93) {
        var D93;
        if (V93.translationCallback) {
            D93 = document.createElement("translate");
            D93.setAttribute("original", K93);
            D93.innerHTML = V93.translationCallback(K93, e93);
            return D93;
        }
        return document.createTextNode(K93);
    };
    A2L.climbUpDomTree = function (u93, b93) {
        var J93;
        if (!(u93 instanceof HTMLElement)) {
            return null;
        }
        J93 = [];
        while (u93) {
            if (!b93 || u93.matches(b93)) {
                J93.push(u93);
            }
            u93 = u93.parentElement;
        }
        return J93;
    };
    A2L.guaranteedSize = function (U93) {
        var O93, N93;
        if (U93 === document) {
            U93 = window;
        }
        if (!U93.nodeType) {
            return { width: U93.innerWidth, height: U93.innerHeight };
        }
        if (!U93 || U93.nodeType > 1) {
            return {};
        }
        O93 = U93.offsetWidth;
        N93 = U93.offsetHeight;
        while (!O93 || !N93) {
            if (U93.tagName === "BODY" || U93 === window) {
                if (!O93) {
                    O93 = window.innerWidth;
                }
                if (!N93) {
                    N93 = window.innerHeight;
                }
                break;
            }
            U93 = U93.parentElement;
            if (!O93) {
                O93 = U93.offsetWidth;
            }
            if (!N93) {
                N93 = U93.offsetHeight;
            }
        }
        return { width: O93, height: N93 };
    };
    A2L.trulyVisible = function (A93) {
        var n1T, I93;
        n1T = "hi";
        R1aa.K19();
        n1T += "d";
        n1T += "de";
        n1T += "n";
        if (!A93) {
            return !!{};
        }
        I93 = getComputedStyle(A93);
        if (I93.opacity === (1776 > (742.64, 9950) ? "7.33e+2" << 1640311456 : 531.52 <= 2340 ? "0" : "H")) {
            return ![];
        }
        if (I93.display === "none") {
            return ![];
        }
        if (I93.visibility === "hidden") {
            return !{};
        }
        if (parseInt(I93.width, 10) === "0" * 1) {
            return !{};
        }
        if (parseInt(I93.height, "10" - 0) === 0 && I93.overflowY == n1T) {
            return ![];
        }
        return A2L.trulyVisible(A93.parentElement);
    };
    A2L.elementDimensions = function (m93, E93) {
        var h1T, z93, t93, M93, h93, f1T, e1T, k1T, H1T, i1T, w93;
        h1T = "co";
        h1T += "ntent-";
        h1T += "b";
        h1T += "ox";
        if (!m93 || m93.nodeType !== 1) {
            return {};
        }
        z93 = getComputedStyle(m93);
        R1aa.X19();
        t93 = { width: parseFloat(z93.width), height: parseFloat(z93.height) };
        M93 = { margin: {}, border: {}, padding: {} };
        h93 = ["width", "height"];
        for (var y93 in M93) {
            f1T = "T";
            f1T += "o";
            f1T += "p";
            e1T = "Rig";
            e1T += "ht";
            k1T = "L";
            k1T += "ef";
            k1T += "t";
            H1T = "Wi";
            H1T += "d";
            H1T += "t";
            H1T += "h";
            i1T = "bo";
            i1T += "rder";
            w93 = y93 == i1T ? H1T : "";
            M93[y93] = { width: parseFloat(z93[y93 + k1T + w93]) + parseFloat(z93[y93 + e1T + w93]), height: parseFloat(z93[y93 + f1T + w93]) + parseFloat(z93[y93 + "Bottom" + w93]) };
        }
        if (E93 && E93.margin) {
            h93.forEach(function (v93) {
                t93[v93] += M93.margin[v93];
            });
        }
        if (E93 && z93.boxSizing === h1T) {
            if (E93.padding) {
                h93.forEach(function (W93) {
                    R1aa.K19();
                    t93[W93] += M93.padding[W93];
                });
            }
            if (E93.border) {
                h93.forEach(function (n93) {
                    R1aa.X19();
                    t93[n93] += M93.border[n93];
                });
            }
        } else if (z93.boxSizing === "border-box") {
            if (!E93 || !E93.padding) {
                h93.forEach(function (x93) {
                    R1aa.K19();
                    t93[x93] -= M93.padding[x93];
                });
            }
            if (!E93 || !E93.border) {
                h93.forEach(function (c93) {
                    R1aa.X19();
                    t93[c93] -= M93.border[c93];
                });
            }
        }
        return t93;
    };
    A2L.resizeObserver = function (q93, R93, f93, i93) {
        var s1T, W1T;
        if (i93) {
            s1T = "undefin";
            s1T += "ed";
            if (typeof ResizeObserver !== s1T) {
                if (!f93) {
                    f93 = new ResizeObserver(R93);
                    f93.observe(q93);
                }
            } else {
                if (f93) {
                    clearInterval(f93);
                }
                f93 = setInterval(R93, i93);
            }
        } else {
            if (f93) {
                W1T = "u";
                W1T += "nd";
                W1T += "efine";
                W1T += "d";
                if (typeof ResizeObserver !== W1T) {
                    f93.disconnect();
                } else {
                    clearInterval(f93);
                }
            }
            f93 = null;
        }
        return f93;
    };
    A2L.getLines = function (B93, S03, P03) {
        var L93, C93, G93, g93, X93, d93;
        L93 = S03.split(374 < (742.3, 6370) ? ((2960, +"9628") > (+"9109", 9684) ? (0x6fa, "v") : 848.65 < (589.2, 1410) ? " " : 5.63e3) : 0xe35);
        C93 = [];
        G93 = "";
        g93 = 0;
        X93 = ![];
        R1aa.K19();
        for (var Q93 = +"0"; Q93 < L93.length; Q93++) {
            d93 = L93[Q93];
            g93 = B93.measureText(G93 + d93).width;
            if (g93 < P03) {
                if (X93) {
                    G93 += 861.43 !== (+"2.9", 8760) ? (1560 === +"9060" ? (("217" * 1, 9990) !== 7460 ? !1 : (!!0, 5.09e3)) : " ") : 2.07e3;
                }
                X93 = !!{};
                G93 += d93;
            } else {
                C93.push(G93);
                G93 = d93;
            }
            if (Q93 === L93.length - 1) {
                C93.push(G93);
                break;
            }
        }
        return C93;
    };
    A2L.alert = function (p03) {
        var u1T;
        u1T = "u";
        u1T += "ndefined";
        if (typeof window !== u1T) {
            window.alert(p03);
        } else {
            console.log(p03);
        }
    };
    try {
        if (typeof localStorage !== "undefined") {
            A2L.localStorage = localStorage;
        }
    } catch (F03) {}
    if (!A2L.localStorage) {
        A2L.localStorage = {
            items: {},
            getItem: function (j03) {
                R1aa.X19();
                return A2L.localStorage.items[j03] || null;
            },
            setItem: function (r03, Z03) {
                R1aa.K19();
                A2L.localStorage.items[r03] = Z03;
            },
            removeItem: function (o03) {
                R1aa.X19();
                delete A2L.localStorage.items[o03];
            },
        };
    }
    A2L.privateBrowsingAlert = !!"";
    A2L.localStorageSetItem = function (T03, a03) {
        try {
            A2L.localStorage.setItem(T03, a03);
        } catch (k03) {
            var p1T;
            if (!A2L.privateBrowsingAlert) {
                p1T = "No storage space available.  Possible cau";
                p1T += "ses include browser being in Private Brows";
                p1T += "ing mode, or maximum storag";
                p1T += "e space has been reached.";
                A2L.alert(p1T);
                A2L.privateBrowsingAlert = !!1;
            }
        }
    };
};
w7w = (s03) => {
    var A1T, x1T, R1T, y1T, a1T, Z1T, H03, Y03;
    A1T = "li";
    A1T += "ne";
    A1T += "ar";
    x1T = "o";
    x1T += "h";
    x1T += "l";
    x1T += "c";
    R1T = "y";
    R1T += "e";
    R1T += "a";
    R1T += "r";
    y1T = "m";
    y1T += "in";
    y1T += "u";
    y1T += "te";
    a1T = "m";
    a1T += "in";
    a1T += "u";
    a1T += "te";
    Z1T = "m";
    Z1T += "in";
    Z1T += "u";
    Z1T += "te";
    H03 = s03.CIQ;
    H03.ChartEngine = function (D03) {
        var Y1T, o1T, V03, l03;
        Y1T = "ch";
        R1aa.X19();
        Y1T += "ar";
        Y1T += "t";
        o1T = "ch";
        o1T += "art";
        if (!D03) {
            D03 = { container: null };
        } else if (typeof HTMLDivElement != "undefined" && D03.constructor == HTMLDivElement) {
            V03 = { container: D03 };
            D03 = V03;
        }
        for (var K03 in Y03) {
            this[K03] = H03.clone(H03.ChartEngine.prototype[K03]);
        }
        this.container = null;
        this.createChartPanel = !!{};
        this.markers = {};
        this.panels = {};
        this.overlays = {};
        this.charts = {};
        this.eventListeners = [];
        this.controls = {};
        this.goneVertical = !!"";
        this.pinchingScreen = !!0;
        this.grabbingScreen = ![];
        this.grabStartX = 0;
        this.grabStartY = 0;
        this.grabStartScrollX = 0;
        this.grabStartScrollY = 0;
        this.swipe = {};
        this.grabStartCandleWidth = 0;
        this.grabStartZoom = +"0";
        this.grabOverrideClick = !1;
        this.grabMode = "";
        this.vectorsShowing = !!0;
        this.mouseMode = !!1;
        this.lineTravelSpacing = !{};
        this.highlightedDataSetField = null;
        this.anyHighlighted = !"1";
        this.accessoryTimer = null;
        this.lastAccessoryUpdate = new Date().getTime();
        this.displayCrosshairs = !0;
        this.hrPanel = null;
        this.editingAnnotation = !!"";
        this.openDialog = "";
        this.touches = [];
        this.changedTouches = [];
        this.crosshairTick = null;
        this.crosshairValue = null;
        this.pt = { x1: -1, x2: -+"1", y1: -("1" * 1), y2: -("1" ^ 0) };
        this.moveA = -1;
        this.moveB = -1;
        this.touchStartTime = -+"1";
        this.touchPointerType = "";
        this.gestureStartDistance = -1;
        this.grabStartPeriodicity = 1;
        this.grabEndPeriodicity = -1;
        this.scrollEvent = null;
        this.cmd = !"1";
        this.ctrl = ![];
        this.shift = !{};
        this.userPointerDown = !1;
        this.cloneDrawing = !!0;
        this.insideChart = !!"";
        this.overXAxis = ![];
        this.overYAxis = !1;
        this.displayInitialized = !"1";
        this.cx = null;
        this.isHistoricalModeSet = null;
        this.cy = null;
        this.clicks = { s1MS: -1, e1MS: -1, s2MS: -1, e2MS: -("1" * 1) };
        this.cancelTouchSingleClick = ![];
        this.locale = null;
        this.dataZone = null;
        this.displayZone = null;
        this.timeZoneOffset = 0;
        this.masterData = null;
        this.transformDataSetPre = null;
        this.transformDataSetPost = null;
        this.dataCallback = null;
        this.drawingObjects = [];
        this.undoStamps = [];
        this.useBackgroundCanvas = ![];
        this.mainSeriesRenderer = null;
        this.styles = {};
        this.plugins = {};
        this.currentVectorParameters = H03.clone(H03.ChartEngine.currentVectorParameters);
        this.chart = new H03.ChartEngine.Chart();
        l03 = this.chart;
        l03.name = o1T;
        l03.yAxis.name = Y1T;
        l03.canvas = null;
        l03.tempCanvas = null;
        l03.container = D03.container;
        if (H03.Market) {
            l03.market = new H03.Market();
        }
        this.charts.chart = l03;
        H03.extend(this, D03);
        if (D03.container) {
            if (this.registerHTMLElements) {
                this.registerHTMLElements();
            }
            l03.width = l03.container.clientWidth - l03.yAxis.width;
            this.setCandleWidth(this.layout.candleWidth, l03);
            l03.canvasHeight = l03.container.clientHeight;
        }
        this.construct();
    };
    H03.ChartEngine.drawingLine = !"1";
    H03.ChartEngine.resizingPanel = null;
    H03.ChartEngine.crosshairX = 0;
    R1aa.L3k(1);
    H03.ChartEngine.crosshairY = R1aa.v3k("0", 0);
    H03.ChartEngine.useAnimation = !"";
    H03.ChartEngine.enableCaching = !!"";
    H03.ChartEngine.ignoreTouch = ![];
    H03.ChartEngine.useOldAndroidClear = !![];
    H03.ChartEngine.currentVectorParameters = {};
    H03.ChartEngine.defaultDisplayTimeZone = null;
    H03.ChartEngine.pluginBasePath = "assets/chartiq/plugins/";
    H03.ChartEngine.registeredContainers = [];
    H03.ChartEngine.registerHelpers = function (e03) {
        H03.ChartEngine.helpersToRegister.forEach(function (u03) {
            u03(e03);
        });
    };
    H03.ChartEngine.helpersToRegister = [];
    H03.ChartEngine.prototype.construct = function () {
        var X1T;
        if (this.createChartPanel) {
            X1T = "c";
            X1T += "h";
            X1T += "art";
            this.stackPanel(X1T, "chart", 1);
            this.adjustPanelPositions();
            this.chart.panel = this.panels[this.chart.name];
        }
        R1aa.L3k(1);
        this.cx = R1aa.v3k("0", 0);
        this.cy = 0;
        this.micropixels = 0;
        this.callbackListeners = {
            doubleTap: [],
            doubleClick: [],
            drawing: [],
            drawingEdit: [],
            floatingWindow: [],
            layout: [],
            longhold: [],
            move: [],
            newChart: [],
            notification: [],
            periodicity: [],
            preferences: [],
            rightClick: [],
            scroll: [],
            studyOverlayEdit: [],
            studyPanelEdit: [],
            symbolChange: [],
            symbolImport: [],
            tap: [],
            theme: [],
            undoStamp: [],
        };
        H03.ChartEngine.registerHelpers(this);
    };
    Y03 = {
        longHoldTime: 700,
        yTolerance: 100,
        minimumLeftBars: 1,
        reverseMouseWheel: !1,
        mouseWheelAcceleration: !![],
        minimumCandleWidth: 1,
        maximumCandleWidth: 200,
        minimumZoomTicks: 9,
        allowZoom: !!1,
        allowScroll: !!1,
        allowSideswipe: !!{},
        allowThreeFingerTouch: !!0,
        bypassRightClick: { series: !{}, study: !{}, drawing: !{} },
        adjustHighlightedDataSetField: function (J03) {
            R1aa.K19();
            return J03;
        },
        displayIconsUpDown: !"",
        displayIconsSolo: !![],
        displayIconsClose: !![],
        displayPanelResize: !0,
        soloPanelToFullScreen: !{},
        markerDelay: null,
        useBackingStore: !!1,
        disableBackingStoreDuringTouch: H03.isMobile || (H03.isSurface && H03.isFF),
        captureTouchEvents: !![],
        captureMouseWheelEvents: !!1,
        tapForHighlighting: !![],
        doubleClickTime: 250,
        yaxisLabelStyle: "roundRectArrow",
        axisBorders: null,
        singleDrawingHighlight: !!1,
        crosshairXOffset: -40,
        crosshairYOffset: -40,
        extendLastTick: !!"",
        translationCallback: null,
        dontRoll: !"1",
        allowEquations: !![],
        cleanupGaps: !{},
        staticRange: !!0,
        maxDataSetSize: 20000,
        maxMasterDataSize: 0,
        resizeDetectMS: 1000,
        xAxisAsFooter: !!"1",
        xaxisHeight: 30,
        displayGridLinesInStudies: !{},
        escapeOnSerialize: !!"1",
        candleWidthPercent: 0.65,
        colorByCandleDirection: !1,
        noWicksOnCandles: { renko: !![], linebreak: !!{} },
        fetchMaximumBars: { rangebars: !"", kagi: !!{}, renko: !!{}, linebreak: !!{}, pandf: !!{} },
        startComparisonsAtFirstVisibleBar: ![],
        animations: {
            zoom: {
                isStub: !!1,
                run: function (b03, O03, U03) {
                    R1aa.X19();
                    b03(U03);
                },
                stop: function () {},
                reset: function () {},
                running: ![],
                hasCompleted: !!"1",
            },
        },
        staticRangePeriodicityMap: [
            { rangeInMS: H03.WEEK, periodicity: 1, interval: 5, timeUnit: "minute" },
            { rangeInMS: H03.MONTH, periodicity: 1, interval: 30, timeUnit: Z1T },
            { rangeInMS: H03.YEAR, periodicity: +"1", interval: "day" },
            { rangeInMS: H03.DECADE, periodicity: 1, interval: "week" },
            { rangeInMS: H03.DECADE * ("10" * 1), periodicity: 1, interval: "month" },
            { rangeInMS: Number.MAX_VALUE, periodicity: +"12", interval: "month" },
        ],
        dynamicRangePeriodicityMap: [
            { interval: 1, timeUnit: a1T, rangeInMS: H03.MINUTE },
            { interval: +"5", timeUnit: y1T, rangeInMS: H03.MINUTE * 5 },
            { interval: 30, timeUnit: "minute", rangeInMS: H03.MINUTE * 30 },
            { interval: 60, timeUnit: "minute", rangeInMS: H03.MINUTE * 60 },
            { interval: "day", rangeInMS: H03.DAY },
            { interval: "month", rangeInMS: H03.MONTH },
            { interval: R1T, rangeInMS: H03.YEAR },
        ],
        layout: {
            interval: "day",
            periodicity: 1,
            timeUnit: null,
            candleWidth: 8,
            flipped: !"1",
            volumeUnderlay: !1,
            adj: !![],
            crosshair: !"1",
            chartType: "candle",
            extended: !!0,
            marketSessions: {},
            aggregationType: x1T,
            chartScale: A1T,
            studies: {},
            panels: {},
            setSpan: {},
            outliers: ![],
        },
        preferences: {
            currentPriceLine: ![],
            dragging: { series: !"", study: !0, yaxis: !"" },
            drawings: null,
            highlightsRadius: 10,
            highlightsTapRadius: 30,
            magnet: ![],
            horizontalCrosshairField: null,
            labels: !!{},
            language: null,
            timeZone: null,
            whitespace: 50,
            zoomInSpeed: null,
            zoomOutSpeed: null,
            zoomAtCurrentMousePosition: !1,
        },
        streamParameters: { count: 0, maxWait: 1000, maxTicks: "100" >> 1557784160, timeout: -1 },
        autoPickCandleWidth: { turnOn: !{}, candleWidth: +"5" },
    };
    H03.extend(H03.ChartEngine.prototype, Y03);
    H03.ChartEngine.NONE = 0;
    H03.ChartEngine.CLOSEUP = 1;
    H03.ChartEngine.CLOSEDOWN = 2;
    H03.ChartEngine.CLOSEEVEN = 4;
    H03.ChartEngine.CANDLEUP = 8;
    R1aa.X19();
    H03.ChartEngine.CANDLEDOWN = 16;
    H03.ChartEngine.CANDLEEVEN = 32;
};
m7w = (I03) => {
    var N03;
    N03 = I03.CIQ;
    N03.convertFutureMonth = function (E03) {
        var A03;
        A03 = E03.toString();
        if (A03.length <= 0 || A03.length > 2) {
            return "";
        }
        switch (A03) {
            case (1927, "6452" & 2147483647) > (537, 9960) ? ((357.08, 566.34) == (+"4280", 7240) ? "t" : 196.25 >= (4100, 145) ? !![] : "3.02e+3" ^ 0) : "1":
                return (6768, 2253) >= 6037 ? ((6370, 1330) > (5908, 839.13) ? (9110 != (2740, 2730) ? (![], "f") : 4.03e3) : ("o", 1.05e3)) : "F";
            case 4220 == ("231.81" - 0, 3997) ? 644.72 : 7970 != (4909, 8550) ? "2" : (1400, 45.7) >= (6621, 749.45) ? (0x5e3, "J") : "k":
                return (6678, 305.6) >= (134.9, +"5486") ? (("3814" & 2147483647) == (766, 7870) ? "g" : !!1) : "G";
            case ("6130" ^ 0, 4360) <= (3764, 88.74) ? (("8247" ^ 0) === (4631, "6680" * 1) ? "A" : ("k", 0x1a9e)) : "3":
                return "H";
            case "4":
                return (3420, "2250" ^ 0) === (5970, 8457) ? (0x1202, 0x1083) : "J";
            case 8210 !== (1970, 8980) ? (5633 > 7170 ? (480.56, 9.08e3) : "5") : !!"":
                return 70.2 > +"2990" ? (0xa68, !1) : "K";
            case "6":
                return (9971, +"18") <= (4470, 8880) ? "M" : (960, 767.32) > (6955, 8510) ? !{} : (!![], "99.94" - 0);
            case "9520" * 1 == (5900, "6510" - 0) ? ((9240, 619.25) !== 4950 ? ![] : (!!"1", !![])) : "7":
                return "N";
            case 8690 !== 2046 ? "8" : (7110, 6610) < (3520, 1516) ? (!!{}, !"") : ("i", "C"):
                return (+"2257", 787.43) != 2545 ? (899 == 7240 ? "J" : "Q") : (0x1400, "P");
            case (1960, "809" * 1) <= (329.28, 381.6) ? (5660 === 709.03 ? (!!0, "i") : ("0x413" - 0, "i")) : "9":
                return +"257" === (2680, 8980) ? ((703, 793) < (6260, 3500) ? (!"1", 0x23c1) : "E") : "U";
            case "10":
                return (799.88, 981.55) != 524 ? "V" : (9914, 5150) >= (253.98, 2730) ? (3.78 != (2740, 938.86) ? (30.16, 0x1039) : (4.53e3, 0xa28)) : 2.65e2;
            case "11":
                return (4710, 9980) > (8915, 932.18) ? (+"8290" == 880 ? ("T", !"") : "X") : ("k", "k");
            case "12":
                return 4280 !== (193.82, 1470) ? "Z" : (!0, !!{});
            case (5360, "299.2" - 0) <= (6940, 7581) ? "F" : "A":
                return (2731, 6947) < (+"3243", 592.65) ? ((196.76, +"6090") == (+"8943", 7490) ? !!1 : 2573 === (954.46, 728.18) ? 0x3c3 : 0x28a) : "1";
            case "G":
                return 5680 == (4340, +"2160") ? !{} : (5288, 2476) !== (879.85, 9892) ? "2" : (+"2239", +"9") <= (971, 7600) ? !![] : (0x457, 2.47e3);
            case (645.19, 885.35) > (107.61, 6410) ? (("9006" | 800) > (4778, 5050) ? ((439, 7104) != 4290 ? 675.14 : ("r", "o")) : ("36.28" * 1, 0x1b19)) : "H":
                return 8230 == 682.47 ? ("H", 1.98e3) : "3";
            case (3240, 700.48) > (168.28, 2500) ? 944 : "J":
                return "4";
            case "K":
                return 3630 === (4294, 3890) ? 9.79e3 : "5";
            case 8694 > ("9308" ^ 0) ? ((140.84, 769.19) === 1525 ? "G" : (+"297.98", 1154) > (4240, 644) ? 0x16f4 : (4.72e3, "I")) : "M":
                return "6";
            case ("9590" | 1282) == (3600, 7404) ? "d" : "N":
                return (9133, 4591) === (2724, "376.61" - 0) ? (!!{}, 8.24e3) : "7";
            case 584.24 == 9630 ? ("S", 7.85e3) : "Q":
                return (6601, 421.49) != 4790 ? "8" : ("h", "z");
            case +"118.17" <= "824.16" * 1 ? ((3110, +"3590") < 717.59 ? 0x604 : "U") : (0x2136, 333):
                return "9";
            case "V":
                return "10";
            case "X":
                return "11";
            case ("6845" ^ 0) === 945.48 ? 0x14f4 : "Z":
                return "12";
        }
        return A03;
    };
    N03.money = function (t03, M03, z03) {
        if (!z03) {
            z03 = "$";
        }
        if (z03.length == +"3") {
            z03 += 9770 < 369.42 ? 0x264e : ("1860" ^ 0, 7438) !== (1810, "6391" & 2147483647) ? " " : ("d", 0x12d3);
        }
        if (!M03 && M03 !== 0) {
            M03 = 2;
        }
        R1aa.X19();
        return z03 + N03.commas((Math.round(t03 * 10000) / ("10000" - 0)).toFixed(M03));
    };
    N03.convertCurrencyCode = function (h03) {
        var O1T, j1T, L1T, P1T, m1T, d1T, M1T, I1T, w03, y03;
        O1T = "C";
        O1T += "F";
        O1T += "A";
        j1T = "E";
        j1T += "C";
        j1T += "$";
        L1T = "N";
        L1T += "T";
        L1T += "$";
        P1T = "\u0440";
        R1aa.X19();
        P1T += "\u0443\u0431";
        m1T = "k";
        m1T += "r";
        d1T = "C";
        d1T += "N";
        d1T += "¥";
        M1T = "C";
        M1T += "A";
        M1T += "$";
        I1T = "R";
        I1T += "$";
        w03 = {
            JPY: 790 < (+"3830", 9114) ? "¥" : 654.26 >= +"7881" ? ("A", "I") : +"6890" == (2160, 9799) ? (!![], 5.27e3) : "c",
            USD: ("4385" << 2026620512, 4670) >= 8950 ? (!!0, +"0xe53") : "$",
            AUD: "A$",
            BRL: I1T,
            CAD: M1T,
            CNY: d1T,
            CZK: "Kč",
            DKK: "kr",
            EUR: "€",
            GBP: 1.06 != 2620 ? "£" : 409.74,
            HKD: "HK$",
            HUF: "Ft",
            ILS: "₪",
            INR: 917.23 < 170.47 ? (3.58e3, 4.92e3) : "₹",
            KRW: "₩",
            MXN: "MX$",
            NOK: m1T,
            NZD: "NZ$",
            PLN: "zł",
            RUB: P1T,
            SAR: 9192 <= (8640, 4270) ? (+"3240" <= (185.38, 491.05) ? (4.89e2, "0x1437" - 0) : 590.05 >= (+"975", 324.14) ? (2.97e3, 8.01e3) : "791.78" * 1) : "﷼",
            SEK: "kr",
            SGD: "S$",
            THB: "฿",
            TRY: (3370, 1815) != 826.7 ? ((130.05, 7960) == ("525" - 0, 553.67) ? +"0xcd0" : "₺") : +"886",
            TWD: L1T,
            VND: (685.91, 7260) < (927, 8787) ? "₫" : (8520, 6843) !== 180.09 ? (663.51, "0x745" * 1) : "9.96e+3" * 1,
            XAF: "FCFA",
            XCD: j1T,
            XOF: O1T,
            XPF: "CFPF",
            ZAR: 5680 >= 6339 ? 547.68 : (+"6401", 76) != (5850, 7078) ? "R" : 858.82 >= (79.96, +"9560") ? (!!"", ![]) : (411.05, "298.48" - 0),
        };
        y03 = w03[h03];
        if (y03) {
            return y03;
        }
        return h03;
    };
    N03.commas = function (m03) {
        R1aa.K19();
        return m03.toString().replace(/\B(?=(\d{3})+(?!\d))/g, 1110 != 3644 ? "," : (3500, 5021) === "604.96" * 1 ? ("0x146b" * 1, +"0xa6f") : 640.77);
    };
    N03.cleanPeriodicity = function (n03, W03, v03) {
        var i49 = R1aa;
        var J1T, g1T;
        if (isNaN(n03)) {
            n03 = 1;
        }
        if (!W03) {
            W03 = 1;
        }
        if (!isNaN(W03) && v03) {
            J1T = "mil";
            J1T += "lisecond";
            g1T = "m";
            g1T += "inu";
            g1T += "t";
            g1T += "e";
            if (!(v03 == "hour" || v03 == g1T || v03 == "second" || v03 == J1T)) {
                W03 = v03;
                v03 = null;
            }
        } else if (W03 == "tick") {
            v03 = null;
        } else if (!v03 && !isNaN(W03)) {
            v03 = "minute";
        }
        if (v03 == "hour") {
            v03 = "minute";
            i49.T3k(19);
            W03 = i49.v3k(W03, 60);
        }
        if (W03 == "year") {
            W03 = "month";
            if (!n03) {
                n03 = 1;
            }
            i49.L3k(19);
            n03 = i49.j3k(n03, 12);
        }
        return { period: n03, interval: W03, timeUnit: v03 };
    };
    N03.readablePeriodicity = function (x03) {
        var z49 = R1aa;
        var G1T, c03, f03, F1T;
        G1T = "nu";
        G1T += "mber";
        c03 = x03.layout.periodicity;
        f03 = x03.layout.interval;
        if (typeof x03.layout.interval == G1T && x03.layout.timeUnit) {
            c03 = x03.layout.interval * x03.layout.periodicity;
            f03 = x03.layout.timeUnit;
        } else if (typeof x03.layout.interval == "number" && !x03.layout.timeUnit) {
            c03 = x03.layout.interval * x03.layout.periodicity;
            f03 = "minute";
        }
        if (c03 % +"60" === +"0" && f03 == "minute") {
            F1T = "h";
            F1T += "ou";
            F1T += "r";
            c03 /= 60;
            f03 = F1T;
        }
        z49.L3k(95);
        var a11 = z49.j3k(39138, 20, 3178, 6523, 13);
        z49.T3k(8);
        var y11 = z49.v3k(6539, 26, 17);
        z49.L3k(6);
        var R11 = z49.v3k(165, 1817);
        z49.L3k(38);
        var x11 = z49.v3k(43497, 16, 3, 691116);
        z49.T3k(72);
        var A11 = z49.j3k(17, 548046, 12, 45900);
        z49.L3k(8);
        var I11 = z49.j3k(150960, 142091, 11);
        z49.L3k(13);
        var M11 = z49.v3k(44000, 10, 1650);
        return c03 + ((a11, y11) === ("9840" ^ 0, "86.4" - 0) ? ((R11, x11) != A11 ? (!1, I11) : (M11, !0)) : " ") + x03.translateIf(N03.capitalize(f03));
    };
    N03.fixPrice = function (q03) {
        var R03;
        if (!q03 && q03 !== "0" * 1) {
            return null;
        }
        R03 = q03.toFixed(10);
        for (var i03 = R03.length - 1; i03 > 1; i03--) {
            if (R03.charAt(i03) != ((3710, 685.17) != (706.54, 2535) ? (+"756.63" >= (0.01, 179.36) ? "0" : ("5729" << 96580096, "7040" >> 46982208) != 1310 ? !0 : (!1, 629)) : 780.39)) break;
        }
        R1aa.L3k(6);
        R03 = R03.substring(0, R1aa.j3k(i03, 1));
        return parseFloat(R03);
    };
    N03.condenseInt = function (G03) {
        var E49 = R1aa;
        var q1T, Q03;
        q1T = "u";
        q1T += "ndef";
        q1T += "i";
        q1T += "ned";
        if (G03 === null || typeof G03 == q1T) {
            return "";
        }
        if (G03 === Infinity || G03 === -Infinity) {
            return "n/a";
        }
        E49.L3k(96);
        Q03 = E49.v3k(0, G03);
        if (!isNaN(G03)) {
            G03 = Math.abs(G03);
            if (G03 > 1000000000000) {
                E49.L3k(97);
                var d11 = E49.j3k(8, 58, 6);
                E49.T3k(98);
                var m11 = E49.v3k(7149, 7123, 7149, 11, 1);
                E49.L3k(99);
                var P11 = E49.v3k(4716, 4740, 37920, 4, 6);
                E49.L3k(56);
                var L11 = E49.v3k(7, 649, 8);
                E49.T3k(100);
                var j11 = E49.v3k(5, 772, 13, 1356, 4);
                E49.T3k(23);
                var O11 = E49.j3k(4564, 9114, 2);
                G03 = Math.round(G03 / +"100000000000") / d11 + (m11 <= P11 ? (314.96, 373.12) : (86.09, L11) <= (j11, O11) ? "t" : "8.41e+3" ^ 0);
            } else if (G03 > 100000000000) {
                E49.L3k(1);
                var g11 = E49.j3k(1000000004, 4);
                E49.L3k(88);
                var J11 = E49.j3k(6636, 14, 85870, 12, 17);
                E49.T3k(6);
                var G11 = E49.j3k(434, 20);
                E49.T3k(2);
                var F11 = E49.v3k(14, 15, 0);
                E49.T3k(101);
                var q11 = E49.v3k(141440, 8298, 8320, 2, 17);
                E49.T3k(102);
                var N11 = E49.j3k(5, 6082, 2, 11);
                G03 = Math.round(G03 / g11) + ((J11, G11) === (975.64, "542.09" * F11) ? (q11 >= (+"61", N11) ? !!0 : (+"5.42e+3", "M")) : "b");
            } else if (G03 > 10000000000) {
                E49.T3k(103);
                var E11 = E49.j3k(3, 0, 4, 2);
                E49.L3k(51);
                var Q11 = E49.j3k(20, 64559, 1285311);
                E49.T3k(66);
                var t11 = E49.j3k(144220, 16, 20, 476);
                E49.L3k(1);
                var U11 = E49.j3k(5474, 4);
                E49.T3k(6);
                var T11 = E49.v3k(283, 5097);
                E49.T3k(6);
                var S11 = E49.v3k(393, 4327);
                E49.L3k(6);
                var D11 = E49.j3k(944, 8496);
                E49.L3k(42);
                var v11 = E49.v3k(5, 1, 666, 13, 9313);
                G03 = (Math.round(G03 / 100000000) / ("10" | 0)).toFixed(E11) + ((594.48, Q11) === t11 ? (!![], ![]) : (U11, T11) == S11 ? D11 : ("571.68" - 0, +"2270") == v11 ? ("L", "856.49" - 0) : "b");
            } else if (G03 > 1000000000) {
                E49.T3k(66);
                var V11 = E49.j3k(420290, 20, 18, 1194);
                E49.L3k(81);
                var r11 = E49.v3k(1, 8247, 8, 9416);
                E49.L3k(104);
                var z11 = E49.j3k(1204, 122, 61, 12, 1);
                E49.T3k(1);
                var B21 = E49.v3k(1938, 4);
                E49.L3k(105);
                var b21 = E49.j3k(18, 3, 8, 14);
                E49.L3k(23);
                var l21 = E49.v3k(171, 2924, 2924);
                E49.L3k(103);
                var k21 = E49.j3k(6, 374, 20, 5990);
                E49.T3k(82);
                var s21 = E49.v3k(32, 10, 5, 4778);
                E49.T3k(72);
                var Y21 = E49.j3k(18, 6932, 15, 900);
                E49.L3k(2);
                var a21 = E49.j3k(14, 25, 3449);
                G03 = (Math.round(G03 / +"10000000") / 100).toFixed("2" ^ 0) + ((V11, r11) < (z11, B21) ? ("3.59e+3" * b21, "c") : ("4860" | l21, k21) < (+"2874", "893.41" - 0) ? "S" : 203.36 != (s21, Y21) ? "b" : (+"6.72e+3", a21));
            } else if (G03 > 100000000) {
                E49.L3k(2);
                var d21 = E49.v3k(20, 9, 1000011);
                G03 = Math.round(G03 / d21) + "m";
            } else if (G03 > 10000000) {
                E49.T3k(72);
                var P21 = E49.v3k(3, 8015, 17, 505);
                E49.L3k(66);
                var j21 = E49.j3k(2494936, 18, 14, 9940);
                E49.T3k(6);
                var N21 = E49.v3k(402, 5228);
                G03 = (Math.round(G03 / 100000) / 10).toFixed(+"1") + (P21 < (884.44, j21) ? "m" : N21);
            } else if (G03 > +"1000000") {
                E49.L3k(4);
                var E21 = E49.j3k(8, 6);
                E49.T3k(56);
                var Q21 = E49.j3k(2442, 409, 13);
                E49.L3k(65);
                var S21 = E49.v3k(18, 870262, 14, 5, 175800);
                E49.L3k(1);
                var r21 = E49.v3k(12800, 11200);
                G03 = (Math.round(G03 / ("10000" | 9216)) / 100).toFixed(E21) + (944.02 == Q21 ? !!{} : (S21, r21) === +"71" ? "x" : "m");
            } else if (G03 > "100000" << 1807266592) {
                E49.T3k(106);
                var w31 = E49.j3k(1016, 28, 1, 12);
                G03 = Math.round(G03 / w31) + "k";
            } else if (G03 > 10000) {
                E49.L3k(51);
                var B31 = E49.j3k(12, 5, 59);
                E49.T3k(23);
                var K31 = E49.j3k(4764, 477, 159);
                E49.L3k(107);
                var b31 = E49.v3k(18, 9889, 9, 10);
                E49.L3k(1);
                var l31 = E49.v3k(6773, 16);
                E49.L3k(95);
                var c31 = E49.j3k(807, 7, 9540, 269, 17);
                G03 = (Math.round(G03 / 100) / +"10").toFixed(B31) + ((548.91, +"8716") < (+"2236", K31) ? (b31 < (l31, +"2582") ? "V" : (c31, 806.32)) : "k");
            } else if (G03 > ("1000" & 2147483647)) {
                E49.T3k(78);
                var C31 = E49.v3k(19, 6, 3, 14, 11);
                E49.T3k(1);
                var n31 = E49.j3k(32960, 24720);
                E49.T3k(51);
                var i31 = E49.v3k(11, 3546, 35468);
                G03 = (Math.round(G03 / 10) / 100).toFixed(C31) + ((600.33, 179.44) <= (n31, i31) ? "k" : ("d", "Q"));
            } else {
                G03 = G03.toString();
            }
        } else {
            G03 = G03.toString();
        }
        if (Q03) {
            E49.T3k(6);
            G03 = E49.v3k((897.39, 8690) != 3243 ? (+"4320" === 754 ? ((3958, 941.47) < (77.63, 520.3) ? ("F", !!1) : ("998.05" * 1, 0x17b6)) : "-") : 117.76, G03);
        }
        return G03;
    };
    N03.calculateTradingDecimalPlaces = function (r33) {
        var B03, L03, S33, C03, P33, g03, p33, F33, j33, X03;
        B03 = r33.chart;
        L03 = 2;
        S33 = 50;
        C03 = B03.masterData;
        R1aa.K19();
        if (C03 && C03.length > S33) {
            for (var d03 = +"2"; d03 < S33; d03++) {
                P33 = C03.length - d03;
                if (P33 < 0) break;
                g03 = C03[P33];
                if (g03.Close && typeof g03.Close == "number") {
                    p33 = g03.Close.toString();
                    F33 = p33.indexOf(8417 <= (7.07, 344) ? ((4879, 7260) == (3990, 729.54) ? 9.62e3 : 58.27) : ".");
                    if (F33 != -1) {
                        R1aa.T3k(108);
                        var H31 = R1aa.j3k(6, 10, 20, 14, 9);
                        j33 = p33.length - F33 - H31;
                        if (j33 > L03) {
                            L03 = j33;
                        }
                    }
                }
            }
        }
        X03 = B03.yAxis.maxDecimalPlaces;
        if (L03 > X03 && X03 !== null) {
            L03 = X03;
        }
        return L03;
    };
    N03.minMax = function (s33, V33, T33, l33) {
        var N1T, a33, k33, D33, K33, E1T, Y33, o33, Z33;
        N1T = "H";
        N1T += "i";
        N1T += "gh";
        a33 = Number.MAX_VALUE;
        R1aa.L3k(1);
        var k31 = R1aa.v3k(18, 19);
        k33 = Number.MAX_VALUE * k31;
        if (!T33) {
            T33 = "Close";
        }
        D33 = l33 ? N1T : T33;
        K33 = l33 ? "Low" : T33;
        for (var H33 = 0; H33 < s33.length; H33++) {
            E1T = "o";
            E1T += "bj";
            E1T += "ect";
            Y33 = s33[H33];
            if (!Y33) continue;
            o33 = Y33[V33];
            if (!o33 && o33 !== 0) continue;
            Z33 = o33;
            if (typeof o33 === "object") {
                Z33 = o33[D33];
            }
            if (!isNaN(Z33) && (Z33 || Z33 === 0)) {
                k33 = Math.max(k33, Z33);
            }
            if (typeof o33 === E1T) {
                Z33 = o33[K33];
            }
            if (!isNaN(Z33) && (Z33 || Z33 === 0)) {
                a33 = Math.min(a33, Z33);
            }
        }
        return [a33, k33];
    };
    N03.symbolEqual = function (e33, u33) {
        var Q1T, J33, b33;
        Q1T = "obj";
        Q1T += "e";
        Q1T += "c";
        Q1T += "t";
        if (!e33 || !u33) {
            return !{};
        }
        if (typeof e33 != "object") {
            e33 = { symbol: e33 };
        }
        if (typeof u33 != Q1T) {
            u33 = { symbol: u33 };
        }
        if (typeof e33.equals == "function") {
            return e33.equals(u33);
        }
        J33 = e33.symbol;
        b33 = u33.symbol;
        if (J33) {
            J33 = J33.toUpperCase();
        }
        if (b33) {
            b33 = b33.toUpperCase();
        }
        if (J33 != b33) {
            return !1;
        }
        if (e33.source != u33.source) {
            return !{};
        }
        return !!{};
    };
    N03.addMemberToMasterdata = function (E33) {
        var z33, N33, A33, t33, i33, q33, w33, M33, I33, m33, O33, G33, h33, U33, x33, c33, Q33, L33, C33, n33, R33, g33;
        if (E33.constructor === N03.ChartEngine) {
            E33 = { stx: arguments["0" << 427906144], label: arguments[1], data: arguments[2], fields: arguments[3], createObject: arguments[+"4"], fieldForLabel: arguments[5] };
        }
        z33 = E33.stx;
        N33 = E33.label;
        A33 = E33.data;
        t33 = E33.fields;
        i33 = E33.createObject;
        q33 = E33.fieldForLabel;
        function d33(T43, o43) {
            var Z43, U1T, Y43, l43, A5a, I5a, M5a;
            if (t33 && t33.length) {
                if (t33[0] == "*") {
                    N03.extend(T43, o43);
                } else {
                    for (var H43 = 0; H43 < t33.length; H43++) {
                        T43[t33[H43]] = o43[t33[H43]];
                    }
                }
            } else if (i33) {
                if (o43.Value !== undefined) {
                    T43[N33] = o43.Value;
                    return;
                } else if (i33 == "aggregate") {
                    T43[N33] = X33(T43[N33], o43);
                } else {
                    T43[N33] = o43;
                }
                Z43 = T43[N33];
                if (typeof Z43.Close == "number") {
                    U1T = "num";
                    U1T += "b";
                    U1T += "e";
                    U1T += "r";
                    if (typeof Z43.Open != "number") {
                        Z43.Open = Z43.Close;
                    }
                    Y43 = Math.max(Z43.Open, Z43.Close);
                    l43 = Math.min(Z43.Open, Z43.Close);
                    if (typeof Z43.High != U1T || Z43.High < Y43) {
                        Z43.High = Y43;
                    }
                    if (typeof Z43.Low != "number" || Z43.Low > l43) {
                        Z43.Low = l43;
                    }
                }
                if (Z43.Volume && typeof Z43.Volume !== "number") {
                    Z43.Volume = parseInt(Z43.Volume, 10);
                }
            } else if (q33) {
                T43[N33] = o43[q33];
            } else if (c33 && x33 && o43[x33] !== undefined) {
                T43[N33] = o43[x33];
            } else if (G33.adj && o43.Adj_Close !== undefined) {
                A5a = 1594072681;
                I5a = -+"1286583362";
                M5a = 2;
                for (var m5a = "1" >> 1784221376; R1aa.G4a(m5a.toString(), m5a.toString().length, 31788) !== A5a; m5a++) {
                    T43[N33] = o43.Adj_Close;
                    M5a += 2;
                }
                if (R1aa.G4a(M5a.toString(), M5a.toString().length, 5172) !== I5a) {
                    T43[N33] = o43.Adj_Close;
                }
            } else if (o43.Close !== undefined) {
                T43[N33] = o43.Close;
            } else if (o43.Value !== undefined) {
                T43[N33] = o43.Value;
            } else {
                T43[N33] = o43[N33];
            }
        }
        function B33(K43) {
            var l69 = R1aa;
            var V43, D43, e43;
            V43 = I33;
            l69.L3k(97);
            var e31 = l69.j3k(10, 131, 13);
            D43 = O33.length - e31;
            function J43() {
                if (+O33[I33].DT == +K43) {
                    return 0;
                }
                if (O33[I33].DT < K43) {
                    return 1;
                }
                if (O33[I33 - 1].DT > K43) {
                    return -1;
                }
                if (+O33[I33 - 1].DT == +K43) {
                    I33--;
                }
                return 0;
            }
            if (O33[D43].DT < K43) {
                l69.L3k(6);
                I33 = l69.j3k(D43, 1);
                return;
            } else if (+O33[D43].DT == +K43) {
                I33 = D43;
                return;
            }
            I33++;
            e43 = 0;
            while (++e43 < 100) {
                switch (J43()) {
                    case 0:
                        return;
                    case 1:
                        V43 = I33;
                        break;
                    case -1:
                        D43 = I33;
                        break;
                }
                l69.L3k(47);
                I33 = Math.round(l69.j3k(V43, D43, 2));
            }
            if (e43 >= "100" * 1) {
                console.log("!!!Warning: addMemberToMasterdata() did not find insertion point.");
                l69.L3k(4);
                var f31 = l69.j3k(16, 15);
                I33 = O33.length - f31;
            }
        }
        w33 = E33.chart ? E33.chart : z33.chart;
        if (!E33.noCleanupDates) {
            z33.doCleanupDates(A33, z33.layout.interval);
        }
        M33 = [];
        if (z33.getSeries) {
            M33 = z33.getSeries({ symbol: N33, chart: w33 });
        }
        if (A33 && A33.constructor == Object) {
            A33 = [A33];
        }
        if (!A33 || !A33.length) {
            return;
        }
        R1aa.L3k(19);
        I33 = R1aa.j3k("0", 1);
        m33 = 0;
        O33 = w33.masterData;
        G33 = z33.layout;
        if (!O33) {
            O33 = [];
        }
        x33 = (w33 && w33.defaultPlotField) || null;
        c33 = z33.mainSeriesRenderer && !z33.mainSeriesRenderer.highLowBars;
        Q33 = G33.chartType;
        if (!c33 && Q33) {
            L33 = N03.Renderer.produce(Q33, {});
            if (L33) {
                c33 = !L33.highLowBars;
            }
        }
        C33 = N03.yyyymmddhhmmssmmm;
        while (A33 && I33 < O33.length && m33 < A33.length) {
            U33 = A33[m33];
            h33 = O33[I33];
            if (!U33.DT || typeof U33.DT == "undefined") {
                U33.DT = N03.strToDateTime(U33.Date);
            } else {
                if (typeof U33.DT == "number") {
                    U33.DT = new Date(U33.DT);
                }
                if (!U33.Date || U33.Date.length != 17) {
                    U33.Date = C33(U33.DT);
                }
            }
            if (m33 === ("0" & 2147483647)) {
                for (var W33 = 0; W33 < M33.length; W33++) {
                    if (!M33[W33].endPoints.begin || M33[W33].endPoints.begin > U33.DT) {
                        M33[W33].endPoints.begin = U33.DT;
                    }
                }
            }
            if (+U33.DT == +h33.DT) {
                d33(h33, U33);
                m33++;
                I33++;
                continue;
            }
            if (U33.DT < h33.DT) {
                O33.splice(I33, 0, { DT: U33.DT, Date: U33.Date });
                continue;
            } else {
                B33(U33.DT);
            }
        }
        if (I33 >= O33.length) {
            while (A33 && m33 < A33.length) {
                U33 = A33[m33];
                if (!U33.DT || typeof U33.DT == "undefined") {
                    U33.DT = N03.strToDateTime(U33.Date);
                } else {
                    if (typeof U33.DT == "number") {
                        U33.DT = new Date(U33.DT);
                    }
                    if (!U33.Date || U33.Date.length != 17) {
                        U33.Date = C33(U33.DT);
                    }
                }
                h33 = { DT: U33.DT, Date: U33.Date };
                d33(h33, U33);
                O33.push(h33);
                m33++;
            }
        }
        if (E33.fillGaps && O33.length) {
            n33 = { noCleanupDates: !![], cleanupGaps: E33.fillGaps };
            if (t33) {
                for (var f33 = 0; f33 < t33.length; f33++) {
                    n33.field = t33[f33];
                    z33.doCleanupGaps(O33, w33, n33);
                }
            } else {
                n33.field = N33;
                z33.doCleanupGaps(O33, w33, n33);
            }
        }
        for (var v33 = 0; v33 < M33.length; v33++) {
            R33 = M33[v33].endPoints;
            if (!R33.end || !N33 || R33.end <= h33[N33].DT) {
                R33.end = N33 ? h33[N33].DT : h33.DT;
                g33 = N33 || (M33[v33].parameters && M33[v33].parameters.field) || w33.defaultPlotField;
                M33[v33].lastQuote = z33.getFirstLastDataRecord(O33, g33, !!"1");
            }
        }
        function X33(P43, r43) {
            var j43, t1T;
            if (!P43 || typeof P43 != "object") {
                P43 = r43;
                return P43;
            }
            j43 = { Close: P43.Close, High: P43.High, Low: P43.Low, Open: P43.Open, Volume: P43.Volume };
            P43 = r43;
            for (var F43 in j43) {
                if (P43.Close === null) {
                    if (P43[F43] !== undefined) {
                        P43[F43] = null;
                    }
                } else if (typeof P43[F43] !== "number") {
                    P43[F43] = j43[F43];
                } else if (typeof j43[F43] === "number") {
                    t1T = "L";
                    t1T += "o";
                    t1T += "w";
                    if (F43 == "Open") {
                        P43.Open = j43.Open;
                    } else if (F43 == t1T && P43.Low > j43.Low) {
                        P43.Low = j43.Low;
                    } else if (F43 == "High" && P43.High < j43.High) {
                        P43.High = j43.High;
                    } else if (F43 == "Volume") {
                        P43.Volume += j43.Volume;
                    }
                }
            }
            return P43;
        }
        z33.setMasterData(O33, w33, { noCleanupDates: !"" });
    };
};
v7w = (U43) => {
    var b43;
    b43 = U43.CIQ;
    Math.easeInOutQuad = function (N43, A43, E43, z43) {
        var r49 = R1aa;
        r49.T3k(109);
        N43 /= r49.j3k(z43, "2");
        if (N43 < +"1") {
            r49.T3k(110);
            return r49.j3k(2, A43, E43, N43, N43);
        }
        N43--;
        r49.L3k(111);
        return r49.v3k(N43, A43, 2, "1", N43, E43, 2);
    };
    Math.easeInOutCubic = function (M43, t43, h43, v43) {
        var F49 = R1aa;
        F49.L3k(109);
        M43 /= F49.v3k(v43, "2");
        if (M43 < "1" * 1) {
            F49.T3k(112);
            return F49.j3k(t43, M43, h43, 2, M43, M43);
        }
        M43 -= 2;
        F49.T3k(113);
        return F49.v3k(2, h43, t43, M43, M43, 2, M43);
    };
    Math.easeOutCubic = function (x43, c43, R43, i43) {
        x43 /= i43;
        x43--;
        R1aa.T3k(114);
        return R1aa.j3k(R43, x43, 1, x43, c43, x43);
    };
    b43.xor = function (d43, g43) {
        var q43, C43;
        q43 = !d43;
        C43 = !g43;
        R1aa.T3k(115);
        return R1aa.v3k(q43, C43);
    };
    b43.round = function (S23, X43) {
        var T1T;
        T1T = "e";
        T1T += "-";
        return Number(Math.round(S23 + ((6070, 974) === (1104, 356.16) ? ("4.00e+3" << 2103065152, "M") : "e") + X43) + T1T + X43);
    };
    b43.countDecimals = function (F23) {
        var S1T, P23;
        S1T = "n";
        S1T += "umbe";
        R1aa.X19();
        S1T += "r";
        if (typeof F23 !== S1T || isNaN(F23)) {
            return 0;
        }
        if (Math.floor(F23) === Number(F23)) {
            return +"0";
        }
        P23 = F23.toString().split("e-");
        if (P23.length > 1) {
            R1aa.L3k(116);
            var h31 = R1aa.v3k(6, 9, 19, 1, 14);
            return b43.countDecimals(Number(P23[0])) + Number(P23[h31]);
        }
        if (P23[0].indexOf((+"2200", 335) >= (707.19, 7338) ? (6.97e3, !!"") : 9580 == (3748, 435.37) ? (0x2269, !1) : ".") > -1) {
            return P23[0].split((9540, 377.45) <= 7350 ? "." : (7.64e3, "i"))[1].length;
        }
        return 0;
    };
    b43.isValidNumber = function (j23) {
        R1aa.X19();
        return isFinite(j23) && +j23 === j23;
    };
    b43.log10 = function (Z23) {
        return Math.log(Z23) / Math.LN10;
    };
    b43.boxIntersects = function (e23, u23, J23, U23, a23, Y23, D23, K23, M23) {
        var J49 = R1aa;
        var D1T, N23, A23, E23, t4a, U4a, T4a, z23, V23, T23;
        D1T = "r";
        J49.K19();
        D1T += "a";
        D1T += "y";
        if (arguments[9] !== undefined) {
            console.warn("CIQ.boxIntersects() no longer supports isLog argument, please be sure arguments are passed in as pixels.");
        }
        N23 = Math.min(e23, J23);
        A23 = Math.max(e23, J23);
        E23 = Math.min(u23, U23);
        t4a = 1100446833;
        U4a = 1422020255;
        T4a = 2;
        for (var D4a = 1; J49.G4a(D4a.toString(), D4a.toString().length, 48192) !== t4a; D4a++) {
            z23 = Math.max(u23, U23);
            J49.T3k(64);
            T4a += J49.j3k("2", 122046752);
        }
        if (J49.J4a(T4a.toString(), T4a.toString().length, 97916) !== U4a) {
            z23 = Math.max(u23, U23);
        }
        J49.T3k(117);
        V23 = J49.j3k(M23, D1T);
        if (isNaN(a23) || isNaN(D23) || isNaN(Y23) || isNaN(K23)) {
            return !{};
        }
        function O23(t23, y23) {
            J49.T3k(118);
            return J49.j3k(Y23, y23, Y23, D23, t23, K23, a23, a23);
        }
        if (M23 != "line") {
            if (a23 < N23 && D23 < N23 && (!V23 || a23 > D23)) {
                return !1;
            }
            if (a23 > A23 && D23 > A23 && (!V23 || a23 < D23)) {
                return !{};
            }
            if (Y23 < E23 && K23 < E23 && (!V23 || Y23 > K23)) {
                return ![];
            }
            if (Y23 > z23 && K23 > z23 && (!V23 || Y23 < K23)) {
                return !"1";
            }
        }
        T23 = { a: O23(e23, u23), b: O23(e23, U23), c: O23(J23, u23), d: O23(J23, U23) };
        if (T23.a > 0 && T23.b > ("0" ^ 0) && T23.c > 0 && T23.d > 0) {
            return ![];
        }
        if (T23.a < 0 && T23.b < +"0" && T23.c < ("0" ^ 0) && T23.d < 0) {
            return !{};
        }
        return !0;
    };
    b43.linesIntersect = function (v23, d23, W23, g23, x23, X23, c23, S63, w23) {
        var W49 = R1aa;
        var v1T, f23, i23, C23, h23, R23;
        v1T = "l";
        v1T += "i";
        v1T += "ne";
        W49.T3k(118);
        f23 = W49.j3k(c23, S63, W23, d23, X23, g23, v23, x23);
        W49.L3k(118);
        i23 = W49.j3k(x23, X23, x23, W23, S63, v23, c23, c23);
        W49.T3k(118);
        W49.X19();
        C23 = W49.j3k(v23, d23, x23, W23, g23, v23, c23, W23);
        if (f23 === 0) {
            if (i23 === 0 && C23 === 0) {
                return !0;
            }
            return !{};
        }
        W49.L3k(32);
        h23 = W49.j3k(f23, i23);
        W49.T3k(32);
        R23 = W49.v3k(f23, C23);
        if (w23 == "segment") {
            if (h23 >= "0" * 1 && h23 <= 1 && R23 >= 0 && R23 <= 1) {
                return !0;
            }
        } else if (w23 == v1T || w23 == "horizontal" || w23 == "vertical") {
            if (h23 >= 0 && h23 <= "1" * 1) {
                return !!"1";
            }
        } else if (w23 == "ray") {
            if (h23 >= 0 && h23 <= 1 && R23 >= 0) {
                return !0;
            }
        }
        return !!"";
    };
    b43.yIntersection = function (p63, u63) {
        var M49 = R1aa;
        var Z63, b63, j63, o63, P63, a63, r63, k63, s63, D63, K63, U63;
        Z63 = p63.x0;
        b63 = p63.x1;
        j63 = u63;
        o63 = u63;
        P63 = p63.y0;
        a63 = p63.y1;
        r63 = 0;
        k63 = 10000;
        M49.K19();
        M49.L3k(118);
        s63 = M49.j3k(r63, k63, P63, b63, o63, a63, Z63, j63);
        M49.L3k(118);
        D63 = M49.j3k(j63, o63, j63, P63, k63, Z63, r63, r63);
        M49.T3k(32);
        K63 = M49.j3k(s63, D63);
        if (s63 === 0) {
            if (D63 === 0) {
                K63 = 1;
            } else {
                return null;
            }
        }
        M49.L3k(119);
        U63 = M49.v3k(P63, K63, P63, a63);
        return U63;
    };
    b43.xIntersection = function (I63, f63) {
        var A49 = R1aa;
        var O63, y63, A63, h63, w63, R63, M63, m63, v63, W63, n63, q63;
        O63 = I63.x0;
        y63 = I63.x1;
        A63 = 0;
        h63 = 10000;
        w63 = I63.y0;
        R63 = I63.y1;
        M63 = f63;
        m63 = f63;
        A49.L3k(118);
        v63 = A49.v3k(M63, m63, w63, y63, h63, R63, O63, A63);
        A49.L3k(118);
        W63 = A49.j3k(A63, h63, A63, w63, m63, O63, M63, M63);
        A49.T3k(32);
        n63 = A49.j3k(v63, W63);
        if (v63 === 0) {
            if (W63 === 0) {
                A49.L3k(21);
                n63 = A49.j3k(2147483647, "1");
            } else {
                return null;
            }
        }
        A49.T3k(119);
        q63 = A49.j3k(O63, n63, O63, y63);
        return q63;
    };
    b43.intersectLineLineX = function (G63, C63, g63, F9g, Q63, X63, L63, B63) {
        var d49 = R1aa;
        var S9g, P9g, p9g;
        d49.T3k(118);
        d49.X19();
        S9g = d49.v3k(Q63, X63, Q63, g63, B63, G63, L63, L63);
        d49.L3k(118);
        P9g = d49.v3k(L63, B63, g63, C63, X63, F9g, G63, Q63);
        d49.T3k(32);
        p9g = d49.j3k(P9g, S9g);
        d49.T3k(119);
        return d49.v3k(G63, p9g, G63, C63);
    };
    b43.intersectLineLineY = function (o9g, l9g, j9g, T9g, r9g, a9g, Z9g, k9g) {
        var b49 = R1aa;
        var H9g, Y9g, s9g;
        b49.T3k(118);
        H9g = b49.j3k(r9g, a9g, r9g, j9g, k9g, o9g, Z9g, Z9g);
        b49.L3k(118);
        Y9g = b49.v3k(Z9g, k9g, j9g, l9g, a9g, T9g, o9g, r9g);
        b49.T3k(32);
        s9g = b49.j3k(Y9g, H9g);
        b49.T3k(119);
        return b49.j3k(j9g, s9g, j9g, T9g);
    };
};
W7w = (K9g) => {
    var D9g;
    D9g = K9g.CIQ;
    D9g.deleteRHS = function (V9g, J9g) {
        var e9g;
        e9g = !!"";
        for (var u9g in V9g) {
            if (V9g[u9g] == J9g) {
                delete V9g[u9g];
                e9g = !"";
            }
        }
        return e9g;
    };
    D9g.scrub = function (b9g, O9g) {
        for (var U9g in b9g) {
            if (typeof b9g[U9g] == "undefined") {
                delete b9g[U9g];
            }
            if (O9g && b9g[U9g] === null) {
                delete b9g[U9g];
            }
        }
    };
    D9g.dataBindSafeAssignment = function (N9g, A9g) {
        D9g.extend(N9g, A9g);
        for (var I9g in N9g) {
            if (typeof A9g[I9g] == "undefined") {
                N9g[I9g] = undefined;
            }
        }
    };
    D9g.clone = function (E9g, M9g) {
        var V1T, z9g;
        R1aa.K19();
        V1T = "o";
        V1T += "b";
        V1T += "jec";
        V1T += "t";
        if (E9g === null || typeof E9g != V1T) {
            return E9g;
        }
        z9g = E9g.constructor;
        if (z9g == Date || z9g == RegExp || z9g == String || z9g == Number || z9g == Boolean) {
            return new z9g(E9g.valueOf());
        }
        if (z9g == Function) {
            return function () {
                R1aa.K19();
                return E9g.apply(this, arguments);
            };
        }
        if (!M9g) {
            try {
                M9g = new z9g();
            } catch (y9g) {
                M9g = Object.create(Object.getPrototypeOf(E9g));
            }
        }
        for (var t9g in E9g) {
            M9g[t9g] = M9g[t9g] !== E9g[t9g] ? D9g.clone(E9g[t9g], null) : M9g[t9g];
        }
        return M9g;
    };
    D9g.shallowClone = function (h9g) {
        var w9g;
        if (!h9g) {
            return h9g;
        }
        R1aa.X19();
        if (h9g.constructor == Array) {
            w9g = new Array(h9g.length);
            for (var m9g = 0; m9g < h9g.length; m9g++) {
                w9g[m9g] = h9g[m9g];
            }
            return w9g;
        }
        w9g = {};
        for (var v9g in h9g) {
            w9g[v9g] = h9g[v9g];
        }
        return w9g;
    };
    D9g.ensureDefaults = function (n9g, x9g) {
        R1aa.K19();
        for (var W9g in x9g) {
            if (typeof n9g[W9g] == "undefined") {
                n9g[W9g] = x9g[W9g];
            }
        }
        return n9g;
    };
    D9g.transferObject = function (f9g, R9g) {
        var c9g;
        for (c9g in f9g) {
            if (f9g.hasOwnProperty(c9g)) {
                delete f9g[c9g];
            }
        }
        for (c9g in R9g) {
            if (R9g.hasOwnProperty(c9g)) {
                f9g[c9g] = R9g[c9g];
            }
        }
        R1aa.K19();
        return f9g;
    };
    D9g.equals = function (i9g, G9g, Q9g) {
        var L9g;
        if (!i9g && G9g) {
            return ![];
        }
        if (i9g && !G9g) {
            return !{};
        }
        R1aa.K19();
        if (typeof i9g !== typeof G9g) {
            return !1;
        }
        for (var q9g in i9g) {
            if (Q9g && Q9g[q9g]) continue;
            if (typeof i9g[q9g] === "object") {
                L9g = D9g.equals(i9g[q9g], G9g[q9g]);
                if (!L9g) {
                    return !!0;
                }
                continue;
            }
            if (G9g[q9g] != i9g[q9g]) {
                return !{};
            }
        }
        return !!{};
    };
    D9g.isEmpty = function (C9g) {
        for (var d9g in C9g) {
            if (C9g.hasOwnProperty(d9g)) {
                return !{};
            }
        }
        return !![];
    };
    D9g.first = function (X9g) {
        for (var g9g in X9g) {
            return g9g;
        }
        return null;
    };
    D9g.last = function (k0g) {
        var B9g;
        B9g = null;
        for (var S0g in k0g) {
            B9g = S0g;
        }
        return B9g;
    };
    D9g.objLength = function (K0g) {
        var s0g;
        if (!K0g) {
            return 0;
        }
        s0g = 0;
        for (var e0g in K0g) {
            s0g++;
        }
        R1aa.X19();
        return s0g;
    };
    D9g.deriveFromObjectChain = function (J0g, h0g) {
        var M0g, I0g;
        if (h0g.indexOf(".") == -1) {
            return { obj: J0g, member: h0g };
        }
        M0g = h0g.split("671.48" - 0 !== 7834 ? "." : (!0, 71.76));
        for (var U0g = +"0"; U0g < M0g.length - 1; U0g++) {
            I0g = M0g[U0g];
            if (!J0g[I0g] && J0g[I0g] !== 0) {
                J0g[I0g] = {};
            }
            J0g = J0g[I0g];
        }
        return { obj: J0g, member: M0g[U0g] };
    };
    D9g.createObjectChainNames = function (B0g, i0g) {
        var c0g;
        c0g = [];
        for (var n0g = 0; n0g < i0g.length; n0g++) {
            c0g.push(B0g + "-->" + i0g[n0g]);
        }
        R1aa.K19();
        return c0g;
    };
    D9g.existsInObjectChain = function (P3g, j3g) {
        var k3g, F3g;
        if (j3g.indexOf("-->") == -1) {
            if (!P3g[j3g] && P3g[j3g] !== 0) {
                return null;
            }
            return { obj: P3g, member: j3g };
        }
        k3g = j3g.split("-->");
        for (var o3g = +"0"; o3g < k3g.length - 1; o3g++) {
            F3g = k3g[o3g];
            if (!P3g[F3g] && P3g[F3g] !== 0) {
                return null;
            }
            P3g = P3g[F3g];
        }
        R1aa.X19();
        F3g = k3g[o3g];
        if (!P3g[F3g] && P3g[F3g] !== 0) {
            return null;
        }
        return { obj: P3g, member: F3g };
    };
    D9g.derivedFrom = function (s3g, V3g) {
        if (V3g.isPrototypeOf(s3g)) {
            return !!"1";
        }
        if (s3g instanceof V3g) {
            return !!{};
        }
        return !1;
    };
    D9g.replaceFields = function (t3g, c3g) {
        var E3g, e3g, O3g, n3g, r1T, x3g;
        if (!t3g) {
            return t3g;
        }
        E3g = {};
        R1aa.X19();
        for (var h3g in t3g) {
            e3g = t3g[h3g];
            O3g = c3g[h3g];
            if (!O3g) {
                O3g = h3g;
            }
            if (e3g && typeof e3g == "object") {
                if (e3g.constructor == Array) {
                    n3g = E3g[O3g] = new Array(e3g.length);
                    for (var I3g = 0; I3g < n3g.length; I3g++) {
                        r1T = "obj";
                        r1T += "e";
                        r1T += "c";
                        r1T += "t";
                        x3g = e3g[I3g];
                        if (typeof x3g == r1T) {
                            n3g[I3g] = D9g.replaceFields(x3g, c3g);
                        } else {
                            n3g[I3g] = x3g;
                        }
                    }
                } else {
                    E3g[O3g] = D9g.replaceFields(e3g, c3g);
                }
            } else {
                E3g[O3g] = e3g;
            }
        }
        return E3g;
    };
    D9g.removeNullValues = function (G3g) {
        var R3g;
        R3g = D9g.clone(G3g);
        R1aa.X19();
        for (var i3g in R3g) {
            if (!R3g[i3g]) {
                delete R3g[i3g];
            }
        }
        return R3g;
    };
    D9g.reverseObject = function (S5g) {
        R1aa.K19();
        var L3g;
        L3g = {};
        for (var X3g in S5g) {
            L3g[S5g[X3g]] = X3g;
        }
        return L3g;
    };
    D9g.getFromNS = (r5g, Z5g, o5g) => {
        var P5g, F5g, j5g;
        R1aa.X19();
        if (r5g) {
            P5g = r5g;
            F5g = Z5g.split(".");
            for (var p5g = 0; p5g < F5g.length; p5g++) {
                j5g = F5g[p5g];
                if (typeof P5g[j5g] === "undefined") break;
                P5g = P5g[j5g];
            }
            if (p5g === F5g.length) {
                return P5g;
            }
        }
        return undefined || o5g;
    };
    D9g.getFnFromNS = (T5g, a5g, k5g) => {
        return D9g.getFromNS(T5g, a5g, function () {
            R1aa.X19();
            return k5g;
        });
    };
    D9g.get = (H5g, Y5g) => {
        return D9g.getFromNS(D9g, H5g, Y5g);
    };
    D9g.getFn = (s5g, l5g) => {
        R1aa.X19();
        return D9g.getFromNS(D9g, s5g, function () {
            return l5g;
        });
    };
};
n7w = (K5g) => {
    var D5g;
    D5g = K5g.CIQ;
    D5g.Plotter = function () {
        this.seriesArray = [];
        this.seriesMap = {};
    };
    D5g.extend(
        D5g.Plotter.prototype,
        {
            Series: function (u5g, J5g, b5g, e5g, V5g, U5g) {
                this.name = u5g;
                this.strokeOrFill = J5g;
                this.color = b5g;
                this.moves = [];
                this.text = [];
                if (!e5g || e5g > 1 || e5g < 0) {
                    e5g = 1;
                }
                this.opacity = e5g;
                if (!V5g || V5g > 25 || V5g < 1) {
                    V5g = 1;
                }
                this.width = V5g;
                this.pattern = D5g.borderPatternToArray(V5g, U5g);
            },
            newSeries: function (I5g, E5g, O5g, z5g, A5g) {
                var N5g;
                if (O5g.constructor == String) {
                    N5g = new this.Series(I5g, E5g, O5g, z5g, A5g);
                } else {
                    N5g = new this.Series(I5g, E5g, O5g.color, O5g.opacity, A5g >= 0 ? A5g : D5g.stripPX(O5g.width), O5g.borderTopStyle);
                }
                this.seriesArray.push(N5g);
                this.seriesMap[I5g] = N5g;
            },
            reset: function (y5g) {
                var M5g;
                for (var t5g in this.seriesMap) {
                    if (y5g && y5g != t5g) continue;
                    M5g = this.seriesMap[t5g];
                    if (M5g) {
                        M5g.moves = [];
                        M5g.text = [];
                    }
                }
            },
            moveTo: function (w5g, m5g, v5g) {
                R1aa.K19();
                var h5g;
                h5g = this.seriesMap[w5g];
                h5g.moves.push({ action: "moveTo", x: m5g, y: v5g });
            },
            lineTo: function (x5g, c5g, f5g) {
                var z1T, W5g, n5g;
                z1T = "li";
                z1T += "n";
                z1T += "eT";
                z1T += "o";
                W5g = this.seriesMap[x5g];
                n5g = W5g.pattern;
                W5g.moves.push({ action: z1T, x: c5g, y: f5g, pattern: n5g });
            },
            dashedLineTo: function (i5g, q5g, G5g, Q5g) {
                var w2T, R5g;
                w2T = "lineT";
                w2T += "o";
                R5g = this.seriesMap[i5g];
                R5g.moves.push({ action: w2T, x: q5g, y: G5g, pattern: Q5g });
            },
            quadraticCurveTo: function (d5g, g5g, X5g, B5g, P1g) {
                var L5g, C5g;
                L5g = this.seriesMap[d5g];
                C5g = L5g.pattern;
                L5g.moves.push({ action: "quadraticCurveTo", x0: g5g, y0: X5g, x: B5g, y: P1g, pattern: C5g });
            },
            bezierCurveTo: function (j1g, Z1g, o1g, T1g, a1g, H1g, Y1g) {
                var p1g, F1g;
                p1g = this.seriesMap[j1g];
                F1g = p1g.pattern;
                p1g.moves.push({ action: "bezierCurveTo", x0: Z1g, y0: o1g, x1: T1g, y1: a1g, x: H1g, y: Y1g, pattern: F1g });
            },
            addText: function (u1g, b1g, O1g, N1g, A1g, E1g, y1g) {
                var D1g;
                D1g = this.seriesMap[u1g];
                D1g.text.push({ text: b1g, x: O1g, y: N1g, bg: A1g });
            },
            drawText: function (m1g, Q1g) {
                var w1g, q1g, x1g, C1g;
                R1aa.X19();
                for (var f1g = 0; f1g < Q1g.text.length; f1g++) {
                    w1g = Q1g.text[f1g];
                    if (w1g.bg) {
                        q1g = w1g.width ? w1g.width : m1g.measureText(w1g.text).width;
                        x1g = w1g.height ? w1g.height : 12;
                        C1g = m1g.fillStyle;
                        m1g.fillStyle = w1g.bg;
                        if (m1g.textAlign == "right") {
                            m1g.fillRect(w1g.x, w1g.y - x1g / 2, -q1g, -x1g);
                        } else {
                            m1g.fillRect(w1g.x, w1g.y - x1g / 2, q1g, x1g);
                        }
                        m1g.fillStyle = C1g;
                    }
                    m1g.fillText(w1g.text, w1g.x, w1g.y);
                }
            },
            draw: function (d1g, F4g) {
                var j4g, r4g, Z4g, o4g, S4g, B2T, g1g;
                j4g = d1g.lineWidth;
                r4g = d1g.fillStyle;
                Z4g = d1g.strokeStyle;
                o4g = d1g.globalAlpha;
                for (var P4g = 0; P4g < this.seriesArray.length; P4g++) {
                    S4g = this.seriesArray[P4g];
                    if (F4g && S4g.name != F4g) continue;
                    d1g.beginPath();
                    d1g.lineWidth = S4g.width;
                    d1g.globalAlpha = S4g.opacity;
                    d1g.fillStyle = S4g.color;
                    d1g.strokeStyle = S4g.color;
                    d1g.save();
                    for (var p4g = "0" ^ 0; p4g < S4g.moves.length; p4g++) {
                        B2T = "bez";
                        B2T += "ie";
                        B2T += "rCurveTo";
                        g1g = S4g.moves[p4g];
                        if (g1g.pattern) {
                            d1g.setLineDash(g1g.pattern);
                            R1aa.L3k(94);
                            d1g.lineDashOffset = R1aa.v3k("0", 0);
                        } else {
                            d1g.setLineDash([]);
                        }
                        if (g1g.action == "quadraticCurveTo") {
                            d1g[g1g.action](g1g.x0, g1g.y0, g1g.x, g1g.y);
                        } else if (g1g.action == B2T) {
                            d1g[g1g.action](g1g.x0, g1g.y0, g1g.x1, g1g.y1, g1g.x, g1g.y);
                        } else {
                            d1g[g1g.action](g1g.x, g1g.y);
                        }
                    }
                    if (S4g.strokeOrFill == "fill") {
                        d1g.fill();
                    } else {
                        d1g.stroke();
                    }
                    d1g.closePath();
                    d1g.restore();
                    this.drawText(d1g, S4g);
                    d1g.lineWidth = 1;
                }
                d1g.lineWidth = j4g;
                d1g.fillStyle = r4g;
                d1g.strokeStyle = Z4g;
                d1g.globalAlpha = o4g;
            },
        },
        !!{}
    );
};
x7w = (a4g) => {
    var T4g;
    T4g = a4g.CIQ;
    T4g.Renderer = function () {};
    T4g.Renderer.produce = function (s4g, H4g) {
        var K2T, k4g, Y4g;
        K2T = "l";
        K2T += "i";
        K2T += "ne";
        k4g = null;
        if (s4g) {
            for (var l4g in T4g.Renderer) {
                Y4g = T4g.Renderer[l4g];
                if (Y4g.requestNew) {
                    k4g = Y4g.requestNew(s4g.split("_"), H4g);
                }
                if (k4g) {
                    return k4g;
                }
            }
        }
        H4g.type = K2T;
        return new T4g.Renderer.Lines({ params: H4g });
    };
    T4g.Renderer.colorFunctions = {};
    T4g.Renderer.registerColorFunction = function (D4g, K4g) {
        T4g.Renderer.colorFunctions[D4g] = K4g;
    };
    T4g.Renderer.unregisterColorFunction = function (V4g) {
        delete T4g.Renderer.colorFunctions[V4g];
    };
    T4g.Renderer.prototype.adjustYAxis = function () {};
    T4g.Renderer.prototype.draw = function () {};
    T4g.Renderer.prototype.drawIndividualSeries = function (e4g, u4g) {};
    T4g.Renderer.prototype.construct = function (b4g) {
        var J4g;
        if (!b4g) {
            b4g = {};
        }
        J4g = b4g.params ? b4g.params : {};
        if (!J4g.name) {
            J4g.name = T4g.uniqueID();
        }
        if (!J4g.heightPercentage) {
            J4g.heightPercentage = 0.7;
        }
        if (!J4g.opacity) {
            R1aa.T3k(19);
            J4g.opacity = R1aa.v3k("1", 1);
        }
        if (J4g.highlightable !== !{}) {
            J4g.highlightable = !![];
        }
        if (!J4g.panel) {
            J4g.panel = "chart";
        }
        if (J4g.yAxis) {
            J4g.yAxis = new T4g.ChartEngine.YAxis(J4g.yAxis);
            if (!J4g.yAxis.name) {
                J4g.yAxis.name = J4g.name;
            }
        }
        this.cb = b4g.callback;
        this.params = J4g;
        this.seriesParams = [];
        this.caches = {};
        R1aa.K19();
        this.colors = {};
    };
    T4g.Renderer.prototype.attachSeries = function (N4g, M4g) {
        var X59 = R1aa;
        var I4g, w4g, O4g, A4g, U4g, t4g, y4g, h4g, c2T, l2T, b2T, E4g, z4g;
        I4g = this.stx;
        if (!I4g) {
            return this;
        }
        w4g = I4g.chart.series[N4g];
        if (!w4g) {
            w4g = { parameters: {} };
        }
        O4g = this.params;
        A4g = w4g.parameters;
        U4g = {
            id: N4g,
            chartType: O4g.type,
            display: A4g.display,
            border_color_up: O4g.defaultBorders ? "auto" : null,
            fill_color_up: A4g.color,
            opacity_up: O4g.opacity,
            border_color_down: O4g.defaultBorders ? "auto" : null,
            fill_color_down: A4g.color,
            opacity_down: O4g.opacity,
            color: A4g.color,
            symbol: A4g.symbol,
            symbolObject: T4g.clone(A4g.symbolObject),
        };
        if (typeof M4g == "string") {
            U4g.color = U4g.fill_color_down = U4g.fill_color_up = M4g;
        } else if (typeof M4g == "object") {
            for (var m4g in M4g) {
                U4g[m4g] = M4g[m4g];
            }
            t4g = U4g.color;
            y4g = U4g.border_color;
            if (t4g) {
                if (!U4g.fill_color_up) {
                    U4g.fill_color_up = t4g;
                }
                if (!U4g.fill_color_down) {
                    U4g.fill_color_down = t4g;
                }
                if (!U4g.fill_color_even) {
                    U4g.fill_color_even = t4g;
                }
            }
            if (y4g) {
                if (!U4g.border_color_up) {
                    U4g.border_color_up = y4g;
                }
                if (!U4g.border_color_down) {
                    U4g.border_color_down = y4g;
                }
                if (!U4g.border_color_even) {
                    U4g.border_color_even = y4g;
                }
            }
        }
        if (U4g.symbol && U4g.field != U4g.symbol) {
            U4g.subField = U4g.field;
            U4g.field = U4g.symbol;
        }
        if (!U4g.id) {
            U4g.id = T4g.uniqueID();
        }
        h4g = +"0";
        for (; h4g < this.seriesParams.length; ++h4g) {
            if (this.seriesParams[h4g].id === U4g.id) {
                this.removeSeries(U4g.id, !!{});
                break;
            }
        }
        X59.T3k(64);
        this.seriesParams.splice(h4g, X59.j3k("0", 833774560), U4g);
        if (U4g.fill_color_up != U4g.fill_color_down) {
            c2T = " ";
            c2T += "down";
            l2T = " ";
            l2T += "u";
            l2T += "p";
            b2T = " ";
            b2T += "u";
            b2T += "p";
            X59.T3k(6);
            this.colors[X59.j3k(N4g, " up")] = { color: U4g.fill_color_up, opacity: U4g.opacity_up, display: U4g.display ? U4g.display + b2T : N4g + l2T };
            X59.L3k(6);
            this.colors[X59.v3k(N4g, " dn")] = { color: U4g.fill_color_down, opacity: U4g.opacity_down, display: U4g.display ? U4g.display + " down" : N4g + c2T };
        } else {
            this.colors[N4g] = { color: U4g.fill_color_up, opacity: U4g.opacity_up, display: U4g.display ? U4g.display : N4g };
        }
        E4g = O4g.panel;
        if (!I4g.panels[E4g]) {
            z4g = O4g.yAxis;
            if (!z4g) {
                z4g = new T4g.ChartEngine.YAxis();
                z4g.needsInitialPadding = !!{};
            }
            z4g.name = E4g;
            I4g.createPanel(E4g, E4g, null, null, z4g);
        } else {
            if (O4g.yAxis) {
                O4g.yAxis = I4g.addYAxis(I4g.panels[E4g], O4g.yAxis);
                O4g.yAxis.needsInitialPadding = !0;
                A4g.yAxis = O4g.yAxis;
                I4g.resizeChart();
            } else if (U4g.yAxis) {
                O4g.yAxis = U4g.yAxis;
            }
        }
        return this;
    };
    T4g.Renderer.prototype.removeSeries = function (n4g, d4g) {
        var K59 = R1aa;
        var n2T, C2T, x4g, G4g, v4g, W4g, R4g, c4g, i4g, Q4g;
        n2T = " ";
        n2T += "d";
        n2T += "n";
        C2T = " ";
        C2T += "u";
        C2T += "p";
        x4g = null;
        G4g = !{};
        v4g = this.stx;
        W4g = v4g.chart;
        for (var L4g in W4g.seriesRenderers) {
            R4g = W4g.seriesRenderers[L4g];
            for (var f4g = 0; f4g < R4g.seriesParams.length; f4g++) {
                c4g = R4g.seriesParams[f4g];
                if (c4g.id == n4g && this === R4g) {
                    x4g = f4g;
                } else if (c4g.isComparison && c4g.panel == W4g.panel.name && (!c4g.yAxis || c4g.yAxis == W4g.yAxis)) {
                    G4g = !!"1";
                }
            }
        }
        if (x4g !== null) {
            if (W4g.forcePercentComparison && !G4g && this.seriesParams[x4g].isComparison && v4g.layout.chartScale != "linear") {
                v4g.setChartScale();
            }
            this.seriesParams.splice(x4g, 1);
        }
        K59.L3k(6);
        delete this.colors[K59.j3k(n4g, C2T)];
        K59.T3k(6);
        delete this.colors[K59.v3k(n4g, n2T)];
        delete this.colors[n4g];
        if (!d4g) {
            for (var C4g in W4g.seriesRenderers) {
                Q4g = W4g.seriesRenderers[C4g];
                for (var q4g = +"0"; q4g < Q4g.seriesParams.length; q4g++) {
                    if (Q4g.seriesParams[q4g].id == n4g) {
                        i4g = !0;
                        break;
                    }
                    i4g = !1;
                }
                if (i4g) break;
            }
            if (i4g === ![] || x4g !== null) {
                v4g.deleteSeries(n4g, W4g);
            }
        }
        v4g.deleteYAxisIfUnused(v4g.panels[this.params.panel], this.params.yAxis);
        v4g.resizeChart();
        v4g.layout.symbols = v4g.getSymbols({ "include-parameters": !!{}, "exclude-studies": !!{} });
        v4g.changeOccurred("layout");
        return this;
    };
    T4g.Renderer.prototype.modifyRenderer = function (S2g) {
        var P2g, g4g;
        P2g = this.params;
        R1aa.X19();
        var { stx: X4g } = this;
        for (var B4g in S2g) {
            g4g = S2g[B4g];
            switch (B4g) {
                case "baseline":
                    if (g4g) {
                        if (typeof g4g === "object") {
                            this.params.baseline = T4g.ensureDefaults(g4g, T4g.ChartEngine.Chart.prototype.baseline);
                        }
                        X4g.registerBaselineToHelper(this);
                    } else {
                        X4g.removeBaselineFromHelper(this);
                    }
                    break;
                case "type":
                    this.params.type = g4g;
                    break;
                case "style":
                    this.params.style = g4g;
                    break;
                default:
                    break;
            }
        }
    };
    T4g.Renderer.prototype.getDependents = function (j2g) {
        var p2g, F2g, x8a, A8a, I8a;
        R1aa.K19();
        p2g = [];
        for (var r2g in j2g.chart.seriesRenderers) {
            F2g = j2g.chart.seriesRenderers[r2g];
            if (F2g.params.dependentOf == this.params.name) {
                p2g.push(F2g);
            }
        }
        x8a = -97266600;
        A8a = -835255262;
        I8a = 2;
        for (var d8a = "1" | 0; R1aa.G4a(d8a.toString(), d8a.toString().length, 58773) !== x8a; d8a++) {
            return p2g;
        }
        if (R1aa.J4a(I8a.toString(), I8a.toString().length, 57916) !== A8a) {
            return p2g;
        }
    };
    T4g.Renderer.prototype.undraggable = function (Z2g) {
        if (this == Z2g.mainSeriesRenderer) {
            return !![];
        }
        R1aa.X19();
        return this.params.dependentOf == Z2g.mainSeriesRenderer.params.name;
    };
    T4g.Renderer.prototype.removeAllSeries = function (k2g) {
        var o2g;
        if (k2g || this === this.stx.mainSeriesRenderer) {
            o2g = [];
            for (var T2g = 0; T2g < this.seriesParams.length; T2g++) {
                o2g.push(this.seriesParams[T2g].id);
            }
            for (var a2g = 0; a2g < o2g.length; a2g++) {
                this.removeSeries(o2g[a2g]);
            }
        }
        this.seriesParams = [];
        this.colors = {};
        this.stx.deleteYAxisIfUnused(this.stx.panels[this.params.panel], this.params.yAxis);
        this.stx.resizeChart();
        return this;
    };
    T4g.Renderer.prototype.getYAxis = function (s2g) {
        var H2g, Y2g;
        if (this.params) {
            if (this.params.yAxis) {
                H2g = this.params.yAxis;
            } else {
                Y2g = s2g.panels[this.params.panel];
                if (!Y2g) {
                    return !"1";
                }
                H2g = Y2g.yAxis;
            }
        } else {
            H2g = s2g.chart.panel.yAxis;
        }
        return H2g;
    };
    T4g.Renderer.prototype.ready = function () {
        this.stx.createDataSet();
        this.stx.draw();
        return this;
    };
    T4g.Renderer.Lines = function (K2g) {
        var H2T, i2T;
        H2T = "ob";
        H2T += "ject";
        i2T = "c";
        i2T += "han";
        i2T += "n";
        i2T += "el";
        this.construct(K2g);
        var { params: l2g } = this;
        if (!l2g.type) {
            l2g.type = "line";
        }
        if (!l2g.style) {
            switch (l2g.type) {
                case "mountain":
                    if (l2g.baseline) {
                        l2g.style = "stx_baseline_delta_mountain";
                    } else if (l2g.colored) {
                        l2g.style = "stx_colored_mountain_chart";
                    } else {
                        l2g.style = "stx_mountain_chart";
                    }
                    break;
                default:
                    l2g.style = "stx_line_chart";
            }
        }
        this.supportsAnimation = !![];
        if (l2g.type == "wave" || l2g.type == i2T) {
            l2g.step = l2g.vertex = l2g.baseline = l2g.colored = !!0;
            this.highLowBars = this.barsHaveWidth = !![];
            this.supportsAnimation = !1;
        } else if (l2g.type == "step") {
            l2g.step = !![];
        }
        var { baseline: D2g } = l2g;
        if (D2g && typeof D2g === H2T) {
            T4g.ensureDefaults(l2g.baseline, T4g.ChartEngine.Chart.prototype.baseline);
        }
    };
    T4g.inheritsFrom(T4g.Renderer.Lines, T4g.Renderer, !!"");
    T4g.Renderer.Lines.requestNew = function (I2g, V2g) {
        var e2g, u2g, U2g, J2g, O2g, f2T, e2T, k2T, N2g;
        e2g = null;
        u2g = V2g.step;
        U2g = V2g.colored;
        J2g = V2g.baseline;
        O2g = V2g.vertex;
        for (var b2g = 0; b2g < I2g.length; b2g++) {
            f2T = "v";
            f2T += "e";
            f2T += "rtex";
            e2T = "s";
            e2T += "tep";
            k2T = "base";
            k2T += "l";
            k2T += "ine";
            N2g = I2g[b2g];
            switch (N2g) {
                case "line":
                case "mountain":
                case "wave":
                case "channel":
                    e2g = N2g;
                    break;
                case k2T:
                    J2g = !!"1";
                    break;
                case "colored":
                    U2g = !![];
                    break;
                case e2T:
                    u2g = !!{};
                    break;
                case f2T:
                    O2g = !!1;
                    break;
                case "delta":
                    break;
                default:
                    return null;
            }
        }
        if (e2g === null && !J2g && !u2g) {
            return null;
        }
        return new T4g.Renderer.Lines({ params: T4g.extend(V2g, { type: e2g, step: u2g, colored: U2g, baseline: J2g, vertex: O2g }) });
    };
    T4g.Renderer.Lines.prototype.draw = function () {
        var M2g, n2g, E2g, t2g, z2g, v2g, h2g, A2g, o2T, p2T, u2T, w2g, m2g, W2g;
        R1aa.X19();
        M2g = this.stx;
        n2g = this.stx.panels[this.params.panel];
        E2g = n2g.chart;
        function x2g(c2g) {
            var W2T, s2T, h2T, R2g, i2g, f2g;
            R1aa.X19();
            W2T = "stx_";
            W2T += "li";
            W2T += "ne_char";
            W2T += "t";
            s2T = "stx";
            s2T += "_l";
            s2T += "ine_dow";
            s2T += "n";
            h2T = "stx_";
            h2T += "li";
            h2T += "n";
            h2T += "e_up";
            R2g = c2g.fill_color_up || M2g.getCanvasColor(h2T);
            i2g = c2g.fill_color_down || M2g.getCanvasColor(s2T);
            f2g = c2g.color || M2g.getCanvasColor(W2T);
            return function (G2g, q2g, Q2g) {
                if (!q2g.iqPrevClose && q2g.iqPrevClose !== 0) {
                    return f2g;
                }
                if (q2g.Close > q2g.iqPrevClose) {
                    return R2g;
                }
                if (q2g.Close < q2g.iqPrevClose) {
                    return i2g;
                }
                return f2g;
            };
        }
        t2g = {};
        v2g = this.seriesParams;
        h2g = this.params.colorFunction;
        for (z2g = 0; z2g < v2g.length; z2g++) {
            A2g = v2g[z2g];
            if (this.params.colored) {
                o2T = "_c";
                o2T += "o";
                o2T += "l";
                o2T += "or";
                p2T = "_co";
                p2T += "lo";
                p2T += "r_down";
                u2T = "_c";
                u2T += "olor_up";
                w2g = [u2T, p2T, o2T];
                for (var y2g = 0; y2g < w2g.length; y2g++) {
                    m2g = A2g["border" + w2g[y2g]];
                    if (m2g && m2g != "auto") {
                        A2g["fill" + w2g[y2g]] = m2g;
                    }
                }
                if (!h2g) {
                    h2g = x2g(A2g);
                }
                this.params.colorFunction = h2g;
            }
            W2g = {};
            if (E2g.series[A2g.id]) {
                W2g = T4g.clone(E2g.series[A2g.id].parameters);
            }
            t2g[A2g.id] = { parameters: T4g.extend(T4g.extend(W2g, this.params), A2g), yValueCache: this.caches[A2g.id] };
            if (this == M2g.mainSeriesRenderer && E2g.customChart && E2g.customChart.colorFunction) {
                t2g[A2g.id].parameters.colorFunction = E2g.customChart.colorFunction;
            }
        }
        M2g.drawSeries(E2g, t2g, this.params.yAxis, this);
        for (z2g in t2g) {
            this.caches[z2g] = t2g[z2g].yValueCache;
        }
    };
    T4g.Renderer.Lines.prototype.drawIndividualSeries = function (p6g, L2g) {
        var Y2T, C2g, B2g, g2g, d2g, X2g;
        R1aa.K19();
        Y2T = "s";
        Y2T += "t";
        Y2T += "ri";
        Y2T += "ng";
        if (L2g.invalid) {
            return;
        }
        C2g = this.stx;
        B2g = p6g.context;
        g2g = null;
        d2g = L2g.colorFunction;
        X2g = C2g.panels[L2g.panel] || p6g.panel;
        if (typeof d2g == Y2T) {
            d2g = T4g.Renderer.colorFunctions[d2g];
            if (!d2g) {
                return;
            }
        }
        if (L2g.vertex) {
            B2g.save();
            B2g.lineJoin = "bevel";
        }
        if (L2g.type == "wave") {
            g2g = C2g.drawWaveChart(X2g, L2g);
        } else if (L2g.baseline) {
            g2g = C2g.drawBaselineChart(X2g, L2g);
            C2g.positionBaselineHandle(this);
        } else if (L2g.type == "mountain") {
            L2g.returnObject = !!1;
            g2g = C2g.drawMountainChart(X2g, L2g, d2g);
        } else if (L2g.type == "channel") {
            L2g.returnObject = !!"1";
            g2g = C2g.drawChannelChart(X2g, d2g, L2g);
        } else {
            L2g.returnObject = !!{};
            g2g = C2g.drawLineChart(X2g, L2g.style, d2g, L2g);
        }
        if (L2g.vertex) {
            C2g.scatter(X2g, { yAxis: L2g.yAxis, field: L2g.symbol || L2g.field, subField: L2g.subField, symbol: L2g.symbol, color: L2g.vertex_color, highlight: L2g.highlight });
            B2g.restore();
        }
        return g2g;
    };
    T4g.Renderer.OHLC = function (a6g) {
        var Z2T, T6g, X2T;
        Z2T = "b";
        Z2T += "a";
        Z2T += "r";
        this.construct(a6g);
        T6g = this.params;
        if (!T6g.type) {
            T6g.type = "candle";
        }
        this.highLowBars = this.barsHaveWidth = this.standaloneBars = !!{};
        if (T6g.histogram) {
            X2T = "c";
            X2T += "an";
            X2T += "d";
            X2T += "le";
            T6g.type = X2T;
            this.highLowBars = ![];
            T6g.volume = T6g.hollow = !{};
        }
        if (T6g.type == Z2T) {
            T6g.volume = T6g.hollow = T6g.histogram = ![];
        }
        if (T6g.type == "candle") {
            T6g.hlc = T6g.colored = !!"";
        }
        if (T6g.volume) {
            T6g.hollow = !!"1";
        }
    };
    T4g.inheritsFrom(T4g.Renderer.OHLC, T4g.Renderer, !{});
    T4g.Renderer.OHLC.requestNew = function (N6g, z6g) {
        var Y6g, b6g, U6g, a2T;
        Y6g = null;
        R1aa.K19();
        b6g = z6g.histogram;
        for (var J6g = 0; J6g < N6g.length; J6g++) {
            U6g = N6g[J6g];
            switch (U6g) {
                case "candle":
                    Y6g = U6g;
                    break;
                case "histogram":
                    a2T = "cand";
                    a2T += "l";
                    a2T += "e";
                    b6g = !!{};
                    Y6g = a2T;
                    break;
                default:
                    return null;
            }
        }
        if (Y6g === null) {
            return null;
        }
        return new T4g.Renderer.OHLC({ params: T4g.extend(z6g, { type: Y6g, histogram: b6g }) });
    };
    T4g.Renderer.OHLC.getChartParts = function (f6g, q6g) {
        var g2T, O2T, j2T, L2T, P2T, m2T, d2T, M2T, I2T, A2T, x2T, R2T, y2T, y6g, w6g, m6g;
        g2T = "fill_";
        g2T += "color_do";
        g2T += "wn";
        O2T = "ca";
        O2T += "nd";
        O2T += "l";
        O2T += "e";
        j2T = "fill";
        j2T += "_col";
        j2T += "or_";
        j2T += "up";
        L2T = "st";
        L2T += "x_candle_shadow_down";
        P2T = "s";
        P2T += "ha";
        P2T += "do";
        P2T += "w";
        m2T = "sh";
        m2T += "ad";
        m2T += "o";
        m2T += "w";
        d2T = "stx_ca";
        d2T += "ndle_shadow";
        M2T = "sh";
        M2T += "a";
        M2T += "dow";
        I2T = "fill";
        I2T += "_color_";
        I2T += "ev";
        I2T += "en";
        A2T = "his";
        R1aa.X19();
        A2T += "t";
        A2T += "ogr";
        A2T += "am";
        x2T = "stx_histogr";
        x2T += "am";
        x2T += "_down";
        R2T = "bo";
        R2T += "rder_";
        R2T += "color_u";
        R2T += "p";
        y2T = "his";
        y2T += "t";
        y2T += "ogram";
        y6g = 8;
        w6g = 16;
        R1aa.L3k(1);
        m6g = R1aa.j3k("32", 0);
        return [
            { type: y2T, drawType: "histogram", style: "stx_histogram_up", condition: y6g, fill: "fill_color_up", border: R2T, useColorInMap: !"", useBorderStyleProp: !!{} },
            { type: "histogram", drawType: "histogram", style: x2T, condition: w6g, fill: "fill_color_down", border: "border_color_down", useColorInMap: !0, useBorderStyleProp: !!{} },
            { type: A2T, drawType: "histogram", style: "stx_histogram_even", condition: m6g, fill: I2T, border: "border_color_even", skipIfPass: !!{}, useColorInMap: !![], useBorderStyleProp: !!{} },
            { type: "candle", drawType: M2T, style: d2T, border: "border_color_up" },
            { type: "candle", drawType: m2T, style: "stx_candle_shadow_up", condition: y6g, border: "border_color_up" },
            { type: "candle", drawType: P2T, style: L2T, condition: w6g, border: "border_color_down" },
            { type: "candle", drawType: "shadow", style: "stx_candle_shadow_even", condition: m6g, border: "border_color_even", skipIfPass: !!{} },
            { type: "candle", drawType: "candle", style: "stx_candle_up", condition: y6g, fill: j2T, border: "border_color_up", useColorInMap: !!{}, useBorderStyleProp: !!"1" },
            { type: "candle", drawType: O2T, style: "stx_candle_down", condition: w6g, fill: g2T, border: "border_color_down", useColorInMap: !!{}, useBorderStyleProp: !"" },
        ];
    };
    T4g.Renderer.OHLC.prototype.draw = function () {
        var P7g, j7g, C6g, B6g, Q6g, p7g, S7g, F7g;
        P7g = this.stx;
        j7g = this.stx.panels[this.params.panel];
        C6g = j7g.chart;
        B6g = {};
        p7g = this.seriesParams;
        for (Q6g = 0; Q6g < p7g.length; Q6g++) {
            S7g = p7g[Q6g];
            F7g = {};
            if (C6g.series[S7g.id]) {
                F7g = T4g.clone(C6g.series[S7g.id].parameters);
            }
            B6g[S7g.id] = { parameters: T4g.extend(T4g.extend(F7g, this.params), S7g) };
            if (this == P7g.mainSeriesRenderer && C6g.customChart && C6g.customChart.colorFunction) {
                B6g[S7g.id].parameters.colorFunction = C6g.customChart.colorFunction;
            }
        }
        P7g.drawSeries(C6g, B6g, this.params.yAxis, this);
        for (Q6g in B6g) {
            if (B6g[Q6g].yValueCache) {
                this.caches[Q6g] = B6g[Q6g].yValueCache;
            }
        }
    };
    T4g.Renderer.OHLC.prototype.getColor = function (H7g, Y7g, o7g, l7g, D7g, s7g) {
        var r7g, T7g, Z7g, k7g, a7g;
        r7g = s7g || o7g.color;
        T7g = this.params.yAxis || Y7g.yAxis;
        if (l7g) {
            r7g = s7g || o7g.borderLeftColor || o7g["border-left-color"];
            if (!r7g) {
                return null;
            }
        }
        if (!D7g) {
            return r7g;
        }
        Z7g = H7g.pixelFromTransformedValue(T7g.highValue, Y7g);
        if (isNaN(Z7g)) {
            Z7g = 0;
        }
        k7g = o7g.backgroundColor;
        R1aa.X19();
        if (r7g && !T4g.isTransparent(r7g)) {
            a7g = H7g.chart.context.createLinearGradient(0, Z7g, 0, ("2" << 886008160) * T7g[T7g.flipped ? "top" : "bottom"] - Z7g);
            a7g.addColorStop(0, r7g);
            a7g.addColorStop(1, k7g);
            return a7g;
        }
        return k7g;
    };
    T4g.Renderer.OHLC.prototype.drawIndividualSeries = function (O7g, K7g) {
        var e7g, i7g, u7g, J7g, h7g, C7g, d7g, g7g, X7g, B7g, S0X, q7g, x7g, z7g, N7g, c7g, w7g, M7g, A7g, t7g, I7g, J2T, f7g, R7g, t2T, V7g, G2T, F2T, q2T, N2T, v7g, G7g, Q7g, W7g, L7g, b7g, E7g, Q2T, E2T, n7g;
        if (K7g.invalid) {
            return;
        }
        e7g = this.stx;
        i7g = O7g.context;
        u7g = K7g.colorFunction;
        J7g = e7g.panels[K7g.panel] || O7g.panel;
        if (typeof u7g == "string") {
            u7g = T4g.Renderer.colorFunctions[u7g];
            if (!u7g) {
                return;
            }
        }
        h7g = e7g.layout.candleWidth - O7g.tmpWidth <= 2 && O7g.tmpWidth <= 3;
        C7g = 1;
        d7g = 2;
        g7g = +"4";
        X7g = 8;
        B7g = 16;
        R1aa.L3k(1);
        S0X = R1aa.j3k("32", 0);
        if (!O7g.state.chartType) {
            O7g.state.chartType = {};
        }
        q7g = O7g.state.chartType.pass = {};
        x7g = e7g.colorByCandleDirection;
        if (K7g.colorBasis) {
            x7g = K7g.colorBasis == "open";
        }
        z7g = K7g.histogram;
        N7g = K7g.type;
        c7g = K7g.hollow;
        w7g = e7g.noWicksOnCandles[N7g];
        e7g.startClip(J7g.name);
        M7g = null;
        A7g = { colors: [], cache: [] };
        t7g = [];
        if (u7g) {
            I7g = { isHistogram: z7g, field: K7g.field, yAxis: K7g.yAxis, isVolume: K7g.volume, highlight: K7g.highlight };
            if (!z7g && N7g == "bar") {
                I7g.type = K7g.hlc ? "hlc" : "bar";
                A7g = e7g.drawBarChart(J7g, "stx_bar_chart", u7g, I7g);
            } else {
                J2T = "cand";
                J2T += "l";
                J2T += "e";
                if (N7g == J2T && !w7g) {
                    e7g.drawShadows(J7g, u7g, I7g);
                }
                A7g = e7g.drawCandles(J7g, u7g, I7g);
                I7g.isOutline = !!"1";
                if (c7g || !h7g) {
                    e7g.drawCandles(J7g, u7g, I7g);
                }
            }
        } else {
            f7g = z7g && K7g.gradient !== !{};
            R7g = T4g.Renderer.OHLC.getChartParts(K7g.style, x7g);
            for (var m7g = 0; m7g < R7g.length; m7g++) {
                t2T = "b";
                t2T += "a";
                t2T += "r";
                V7g = R7g[m7g];
                if (V7g.skipIfPass && !q7g.even) continue;
                else if (z7g) {
                    G2T = "histog";
                    G2T += "ram";
                    if (V7g.type != G2T) continue;
                } else if (N7g == "bar") {
                    F2T = "b";
                    F2T += "a";
                    F2T += "r";
                    if (V7g.type != F2T) continue;
                    else if (K7g.colored && !V7g.condition) continue;
                    else if (!K7g.colored && V7g.condition) continue;
                } else if (c7g) {
                    q2T = "ho";
                    q2T += "l";
                    q2T += "lo";
                    q2T += "w";
                    if (V7g.type != q2T) continue;
                    else if (V7g.drawType == "shadow" && w7g) continue;
                } else if (N7g == "candle") {
                    N2T = "sh";
                    N2T += "a";
                    N2T += "dow";
                    if (V7g.type != "candle") continue;
                    else if (V7g.drawType == N2T) {
                        if (w7g) continue;
                        v7g = K7g.border_color_up || e7g.getCanvasColor("stx_candle_shadow_up");
                        G7g = K7g.border_color_down || e7g.getCanvasColor("stx_candle_shadow_down");
                        Q7g = K7g.border_color_even || e7g.getCanvasColor("stx_candle_shadow_even");
                        if (!T4g.colorsEqual(v7g, G7g) || !T4g.colorsEqual(v7g, Q7g) || !T4g.colorsEqual(v7g, e7g.defaultColor)) {
                            if (!V7g.condition) continue;
                        } else if (V7g.condition) continue;
                    }
                } else continue;
                W7g = e7g.canvasStyle(V7g.style);
                L7g = this.getColor(e7g, J7g, W7g, !1, !!0, K7g[V7g.fill]);
                b7g = this.getColor(e7g, J7g, W7g, !1, f7g, K7g[V7g.fill]);
                E7g = this.getColor(e7g, J7g, W7g, V7g.useBorderStyleProp && !h7g, f7g, K7g[V7g.border]);
                if (V7g.drawType == "candle") {
                    Q2T = "can";
                    Q2T += "dle";
                    E2T = "hol";
                    E2T += "lo";
                    E2T += "w";
                    if (V7g.type == E2T) {
                        if (!T4g.isTransparent(b7g) && T4g.colorsEqual(E7g, b7g)) {
                            E7g = V7g.useColorInMap ? "transparent" : b7g;
                        }
                        if (!V7g.useColorInMap) {
                            b7g = e7g.containerColor;
                        }
                    } else if (V7g.type == Q2T) {
                        if (h7g) {
                            if (T4g.isTransparent(b7g)) {
                                b7g = E7g;
                            } else {
                                E7g = b7g;
                            }
                        }
                    }
                }
                i7g.globalAlpha = K7g.opacity;
                t7g.push(
                    e7g.drawBarTypeChartInner({
                        fillColor: b7g,
                        borderColor: E7g,
                        condition: V7g.condition,
                        style: V7g.style,
                        type: N7g == t2T && K7g.hlc ? "hlc" : V7g.drawType,
                        panel: J7g,
                        field: K7g.field,
                        yAxis: K7g.yAxis,
                        volume: K7g.volume && K7g.hollow,
                        highlight: K7g.highlight,
                    })
                );
                if (!M7g) {
                    M7g = {};
                }
                if (V7g.useColorInMap) {
                    M7g[L7g] = 1;
                }
            }
        }
        e7g.endClip();
        for (var U7g in M7g) {
            if (!K7g.hollow || !T4g.equals(U7g, e7g.containerColor)) {
                A7g.colors.push(U7g);
            }
        }
        for (U7g = 0; U7g < t7g.length; U7g++) {
            for (var y7g = 0; y7g < t7g[U7g].cache.length; y7g++) {
                n7g = t7g[U7g].cache[y7g];
                if (n7g || n7g === 0) {
                    A7g.cache[y7g] = n7g;
                }
            }
        }
        R1aa.X19();
        return A7g;
    };
    T4g.Renderer.Candles = function (p0X) {
        var P0X;
        this.construct(p0X);
        P0X = this.params;
        P0X.type = "candle";
        R1aa.X19();
        this.highLowBars = this.barsHaveWidth = this.standaloneBars = !0;
        P0X.hlc = P0X.colored = P0X.histogram = !1;
        if (P0X.volume) {
            P0X.hollow = !0;
        }
    };
    T4g.inheritsFrom(T4g.Renderer.Candles, T4g.Renderer.OHLC, !{});
    T4g.Renderer.SimpleHistogram = function (j0X) {
        var F0X;
        this.construct(j0X);
        F0X = this.params;
        F0X.type = "candle";
        F0X.histogram = !"";
        this.barsHaveWidth = this.standaloneBars = !!1;
        this.highLowBars = !!"";
        F0X.hlc = F0X.colored = F0X.hollow = F0X.volume = ![];
    };
    T4g.inheritsFrom(T4g.Renderer.SimpleHistogram, T4g.Renderer.Candles, !!"");
};
c7w = (Z0X) => {
    var n29 = R1aa;
    var w8a, B8a, K8a, r0X;
    w8a = -+"200237723";
    B8a = 1162819312;
    K8a = 2;
    for (var l8a = 1; n29.J4a(l8a.toString(), l8a.toString().length, 79582) !== w8a; l8a++) {
        r0X = Z0X.CIQ;
        n29.L3k(21);
        K8a += n29.j3k(2147483647, "2");
    }
    if (n29.J4a(K8a.toString(), K8a.toString().length, 36200) !== B8a) {
        r0X = Z0X.CIQ;
    }
    n29.K19();
    r0X.capitalize = function (o0X) {
        if (!o0X) {
            return "";
        }
        n29.T3k(1);
        var s31 = n29.v3k(4, 3);
        return o0X.charAt(0).toUpperCase() + o0X.slice(s31);
    };
    r0X.camelCaseRegExp = /-([a-z])/g;
    r0X.makeCamelCase = function (T0X) {
        return T0X.replace(r0X.camelCaseRegExp, function (a0X) {
            return a0X[1].toUpperCase();
        });
    };
    r0X.uniqueID = function (l0X) {
        var k0X, Y0X, s0X, H0X;
        if (l0X) {
            k0X = new Date().getTime();
            if (typeof window !== "undefined" && window.performance && typeof window.performance.now === "function") {
                k0X += window.performance.now();
            }
            Y0X = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (K0X) {
                var D0X;
                n29.L3k(56);
                var W31 = n29.j3k(6, 1, 9);
                n29.K19();
                n29.T3k(51);
                var u31 = n29.v3k(9, 7, 62);
                D0X = (k0X + Math.random() * W31) % ("16" * u31) | ("0" & 2147483647);
                n29.T3k(32);
                k0X = Math.floor(n29.j3k(16, k0X));
                return (K0X == ((453.49, 1.89) === (9994, 8110) ? ("F", +"38.28") : 144.8 <= 7993 ? (254.84 != (29.76, 464) ? "x" : ("J", "T")) : (0x2214, 0x1d3a)) ? D0X : (D0X & 0x3) | 0x8).toString(16);
            });
            return Y0X;
        }
        n29.K19();
        s0X = new Date();
        H0X = s0X.getTime().toString(36);
        H0X += Math.floor(Math.random() * Math.pow(36, +"2")).toString(36);
        return H0X.toUpperCase();
    };
};
f7w = (V0X) => {
    R1aa.K19();
};
R7w = (u0X) => {
    var e0X;
    e0X = u0X.CIQ;
    e0X.getHostName = function (J0X) {
        R1aa.X19();
        try {
            return J0X.match(/:\/\/(.[^/]+)/)[1];
        } catch (b0X) {
            return "";
        }
    };
    e0X.qs = function (E0X) {
        var N0X, O0X, I0X, A0X;
        N0X = {};
        if (!E0X) {
            E0X = window.location.search.substring(1);
        }
        R1aa.K19();
        O0X = E0X.split("&");
        for (var U0X = +"0"; U0X < O0X.length; U0X++) {
            I0X = O0X[U0X].indexOf(19.88 >= 633.04 ? (1990 >= (9456, 394.33) ? ("9480" >> 1199545920 == (6397, 4310) ? (8.31e2, 0x1838) : (!1, "0x24cc" << 1508308608)) : (845.72, 3.49e2)) : "=");
            if (I0X > 0) {
                A0X = O0X[U0X].substring(0, I0X);
                R1aa.L3k(6);
                N0X[A0X] = O0X[U0X].substring(R1aa.v3k(I0X, 1));
            } else {
                A0X = O0X[U0X];
                N0X[A0X] = null;
            }
        }
        return N0X;
    };
    e0X.postAjax = function (z0X, n0X, x0X, c0X, f0X) {
        var y0X, t0X, h0X, M0X, v0X, T2T, U2T, w0X, m0X, K7a, b7a, l7a;
        if (typeof z0X == "string") {
            z0X = { url: z0X, payload: n0X, cb: x0X, contentType: c0X, noEpoch: f0X, method: null, responseHeaders: !{} };
        }
        y0X = z0X.url;
        t0X = z0X.cb;
        h0X = z0X.payload;
        if (!t0X) {
            t0X = function () {};
        }
        if (!z0X.ungovernable) {
            if (e0X.Extras && e0X.Extras.RequestLimiter && e0X.Extras.RequestLimiter.hitRequestLimit(y0X)) {
                t0X(429, null, {});
                return;
            }
        }
        M0X = new XMLHttpRequest();
        if (!M0X) {
            return !"1";
        }
        v0X = new Date();
        if (!z0X.noEpoch) {
            T2T = "&ciqra";
            T2T += "n";
            T2T += "d";
            T2T += "om=";
            U2T = "?ci";
            U2T += "qrandom=";
            if (y0X.indexOf((8981, 1450) == 9870 ? (!!{}, 626.19) : (+"2", 4533) >= ("5630" | 328) ? 0x1fdd : "?") == -1) {
                y0X += U2T + v0X.getTime();
            } else {
                y0X += T2T + v0X.getTime();
            }
        }
        w0X = z0X.method;
        m0X = z0X.headers;
        if (!w0X) {
            w0X = h0X ? "POST" : "GET";
        }
        M0X.open(w0X, y0X, !!{});
        if (!z0X.contentType) {
            z0X.contentType = "application/x-www-form-urlencoded";
        }
        K7a = -942502477;
        b7a = 2012697656;
        l7a = 2;
        R1aa.K19();
        for (var C7a = 1; R1aa.J4a(C7a.toString(), C7a.toString().length, 93956) !== K7a; C7a++) {
            if (h0X) {
                M0X.setRequestHeader("", z0X.contentType);
            }
            l7a += 2;
        }
        if (R1aa.J4a(l7a.toString(), l7a.toString().length, "8521" ^ 0) !== b7a) {
            if (h0X) {
                M0X.setRequestHeader("Content-Type", z0X.contentType);
            }
        }
        if (m0X) {
            for (var W0X in m0X) {
                M0X.setRequestHeader(W0X, m0X[W0X]);
            }
        }
        if (z0X.timeout) {
            M0X.timeout = z0X.timeout;
        }
        M0X.ontimeout = function () {
            var Y6a, X6a, Z6a;
            Y6a = -742939167;
            X6a = 499642368;
            Z6a = 2;
            for (var y6a = 1; R1aa.G4a(y6a.toString(), y6a.toString().length, 55679) !== Y6a; y6a++) {
                t0X(408, null, {});
                Z6a += 2;
            }
            if (R1aa.J4a(Z6a.toString(), Z6a.toString().length, +"57639") !== X6a) {
                t0X(478, 1, {});
            }
        };
        M0X.onload = function () {
            if (this.status === 0) {
                this.status = "0";
            } else if (!this.status) {
                this.status = 200;
            }
            t0X(this.status, this.responseText, R0X(this));
			console.log(this.responseText);
        };
        M0X.onerror = function () {
            R1aa.X19();
            t0X("7810" - 0 >= 9526 ? (0x172a, "c") : (+"308.17", 7868) < 618.29 ? ("u", "S") : "0", null, {});
        };
        try {
            M0X.send(h0X);
        } catch (d0X) {
            t0X("0", d0X, {});
        }
        function R0X(C0X) {
            var G0X, L0X, Q0X, i0X;
            G0X = {};
            R1aa.K19();
            if (!z0X.responseHeaders) {
                return;
            }
            L0X = C0X.getAllResponseHeaders();
            Q0X = L0X.split("\n");
            for (var q0X = +"0"; q0X < Q0X.length; q0X++) {
                i0X = Q0X[q0X].split(("7960" * 1, "9410" >> 840836448) != (9851, 8480) ? ":" : ("740" ^ 0) !== (1418, 974.68) ? (319.16, 2.0e3) : (+"0x1e44", 0x127f));
                while (i0X[1] && i0X[1].charAt("0" << 1813767744) == " ") {
                    i0X[1] = i0X[1].substring(1);
                }
                if (i0X["0" - 0] !== "") {
                    G0X[i0X.shift()] = i0X.join((4320, +"891.69") < 9666 ? ":" : (2014, 2274) >= 157 ? "e" : (0x1cd1, ![]));
                }
            }
            return G0X;
        }
        return !0;
    };
    e0X.loadUI = function (P3X, X0X, B0X) {
        var H59 = R1aa;
        var S2T, g0X, p3X, S3X, D2T, V2T, v2T;
        S2T = "f";
        S2T += "u";
        S2T += "nctio";
        S2T += "n";
        if (!X0X || typeof X0X == S2T) {
            B0X = X0X;
            X0X = document.body;
        }
        H59.L3k(56);
        g0X = document.querySelector(H59.j3k('"]', 'iframe[original-url="', P3X));
        p3X = function () {
            H59.X19();
            var F3X, Z3X, j3X, o3X;
            F3X = null;
            try {
                F3X = this.contentDocument;
            } catch (T3X) {
                return B0X(T3X);
            }
            if (F3X && !F3X.title) {
                Z3X = F3X.body.innerHTML;
                j3X = document.createElement("div");
                e0X.innerHTML(j3X, Z3X);
                for (var r3X = 0; r3X < j3X.children.length; r3X++) {
                    o3X = j3X.children[r3X].cloneNode(!!{});
                    X0X.appendChild(o3X);
                }
                B0X(null);
            } else {
                B0X(new Error("iFrame not found or document has a title"));
            }
        };
        if (g0X) {
            S3X = null;
            try {
                S3X = g0X.contentDocument;
            } catch (a3X) {
                return B0X(a3X);
            }
            if (S3X.readyState === "complete" && S3X.location && S3X.location.href !== "about:blank") {
                p3X.call(g0X);
            } else {
                D2T = "lo";
                D2T += "ad";
                g0X.addEventListener(D2T, p3X);
            }
        } else {
            V2T = "lo";
            V2T += "ad";
            v2T = "ifra";
            v2T += "me";
            g0X = document.createElement(v2T);
            g0X.setAttribute("original-url", P3X);
            H59.L3k(77);
            var p31 = H59.v3k(9417, 3, 6248, 15);
            H59.L3k(8);
            var o31 = H59.v3k(332, 19, 2);
            H59.L3k(101);
            var Y31 = H59.v3k(764940, 9255, 9272, 11, 15);
            H59.L3k(103);
            var X31 = H59.v3k(5, 5398, 16, 13);
            H59.L3k(8);
            var Z31 = H59.j3k(672, 25, 16);
            H59.T3k(5);
            var a31 = H59.v3k(16, 3, 17, 5);
            H59.T3k(1);
            var y31 = H59.v3k(8890, 7620);
            H59.T3k(72);
            var R31 = H59.v3k(16, 24755, 5, 6208);
            H59.T3k(41);
            var x31 = H59.j3k(9, 620, 1, 18);
            H59.L3k(120);
            var A31 = H59.j3k(13, 9002, 8, 9007, 117091);
            H59.L3k(3);
            var I31 = H59.j3k(15, 42, 12, 14);
            H59.L3k(23);
            var M31 = H59.j3k(7282, 728, 1);
            g0X.src =
                P3X +
                (P3X.indexOf(p31 > o31 ? "?" : (Y31, !{})) === -+"1"
                    ? (+"8656", X31) != (Z31, +"9506")
                        ? "?"
                        : !{}
                    : ("579.6" * a31, y31) === +"1820"
                    ? !"1"
                    : +"134.96" > (565.11, R31)
                    ? (x31, A31) !== ("582.39" * I31, M31)
                        ? (!![], "61.56" - 0)
                        : "O"
                    : "&") +
                e0X.uniqueID();
            g0X.hidden = !0;
            g0X.addEventListener(V2T, p3X);
            document.body.appendChild(g0X);
        }
    };
    e0X.loadScript = function (l3X, Y3X, D3X) {
        var G59 = R1aa;
        var k3X, H3X, s3X;
        if (!e0X.loadedScripts) {
            e0X.loadedScripts = {};
        }
        if (e0X.loadedScripts[l3X]) {
            if (Y3X) {
                Y3X();
            }
            return;
        }
        k3X = document.createElement("SCRIPT");
        if (D3X) {
            k3X.type = "module";
            k3X.crossOrigin = "use-credentials";
        } else {
            k3X.async = !!{};
        }
        k3X.onload = function () {
            e0X.loadedScripts[l3X] = !"";
            if (Y3X) {
                Y3X();
            }
        };
        H3X = l3X;
        G59.X19();
        if (H3X.indexOf((5753, +"7240") == 9978 ? 228.34 : "?") == -1) {
            G59.L3k(121);
            var d31 = G59.j3k(202513, 8, 20, 5, 5192);
            G59.T3k(8);
            var m31 = G59.j3k(8244, 5, 12);
            G59.L3k(6);
            var P31 = G59.v3k(6061, 16);
            G59.T3k(65);
            var L31 = G59.v3k(9, 1331, 3, 12, 217);
            G59.L3k(6);
            var j31 = G59.v3k(1313, 3937);
            H3X = H3X + (d31 == 549.31 ? (m31, !{}) : (P31, L31) > +"717.81" ? (j31 < 742.73 ? (!0, ![]) : "?") : !{}) + Date.now();
        } else {
            G59.T3k(2);
            var O31 = G59.j3k(19, 807, 158);
            G59.T3k(91);
            var g31 = G59.v3k(10, 5918, 14, 526703, 9);
            G59.L3k(23);
            var J31 = G59.j3k(700, 100, 1);
            G59.L3k(107);
            var G31 = G59.v3k(12, 322, 2588, 3);
            H3X = H3X + (("595.74" - 0, O31) !== (+"7205", +"273") ? "&" : g31 > (J31, "758.29" - 0) ? ((+"805.89", 992.01) != 432.8 ? (!0, "m") : (G31, 82.12)) : (!!{}, !0)) + Date.now();
        }
        k3X.src = H3X;
        s3X = document.getElementsByTagName("script")[0];
        if (!s3X) {
            document.body.append(k3X);
        } else {
            s3X.parentNode.insertBefore(k3X, s3X.nextSibling);
        }
    };
    e0X.loadStylesheet = function (u3X, J3X) {
        var Z59 = R1aa;
        var K3X, e3X, V3X;
        K3X = document.createElement("link");
        K3X.rel = "stylesheet";
        K3X.type = "text/css";
        K3X.media = "screen";
        Z59.T3k(24);
        var F31 = Z59.j3k(10, 26620, 24190);
        Z59.L3k(26);
        var q31 = Z59.j3k(8, 39520, 13, 34559);
        Z59.T3k(2);
        var N31 = Z59.j3k(5, 8, 6518);
        Z59.L3k(6);
        var E31 = Z59.j3k(5710, 11);
        Z59.L3k(122);
        var Q31 = Z59.j3k(771256, 86496, 1, 9);
        Z59.L3k(1);
        var t31 = Z59.v3k(1123686055, 7);
        Z59.L3k(6);
        var U31 = Z59.v3k(267, 4539);
        Z59.L3k(4);
        var T31 = Z59.j3k(16, 17);
        Z59.T3k(8);
        var S31 = Z59.j3k(1807, 14, 8);
        K3X.href = u3X + (u3X.indexOf(F31 !== q31 ? ((115.72, N31) >= (E31, +"6519") ? ((517.27, Q31) !== "2961" << t31 ? "?" : "n") : (!0, 44.62)) : U31) === T31 ? "?" : S31 > (+"656", 868.31) ? "&" : !!"") + Date.now();
        K3X.onload = function () {
            if (this.loaded) {
                return;
            }
            this.loaded = !"";
            if (J3X) {
                J3X();
            }
        };
        e3X = document.getElementsByTagName("link");
        Z59.T3k(8);
        var D31 = Z59.v3k(0, 1, 2);
        V3X = e3X[e3X.length - D31];
        if (!V3X) {
            document.head.append(K3X);
        } else {
            V3X.parentNode.insertBefore(K3X, V3X.nextSibling);
        }
    };
    e0X.loadWidget = function (U3X, b3X, O3X, N3X) {
        var r2T;
        r2T = ".c";
        r2T += "ss";
        if (!b3X || typeof b3X == "function") {
            O3X = b3X;
            b3X = document.body;
        }
        R1aa.T3k(6);
        e0X.loadStylesheet(R1aa.v3k(U3X, r2T), function () {
            var z2T;
            z2T = ".h";
            z2T += "tml";
            R1aa.T3k(6);
            e0X.loadUI(R1aa.v3k(U3X, z2T), b3X, function (I3X) {
                var w3T;
                w3T = ".";
                R1aa.X19();
                w3T += "js";
                if (I3X) {
                    O3X(I3X);
                } else {
                    R1aa.T3k(6);
                    e0X.loadScript(R1aa.j3k(U3X, w3T), O3X, N3X);
                }
            });
        });
    };
    e0X.waitForPlugins = function (z3X, M3X) {
        var q6a, N6a, E6a, t3X, A3X, K3T, B3T, h3X, y3X;
        q6a = 1940130879;
        N6a = -895364256;
        E6a = 2;
        for (var t6a = 1; R1aa.J4a(t6a.toString(), t6a.toString().length, 47588) !== q6a; t6a++) {
            t3X = 6;
            A3X = z3X.length;
            E6a += 2;
        }
        if (R1aa.G4a(E6a.toString(), E6a.toString().length, "62827" ^ 0) !== N6a) {
            t3X = 3;
            A3X = z3X.length;
        }
        t3X = +"0";
        A3X = z3X.length;
        if (!A3X) {
            M3X();
            return;
        }
        for (var E3X = 0; E3X < A3X; E3X++) {
            K3T = "l";
            K3T += "oaded";
            B3T = "c";
            B3T += "q";
            B3T += "-";
            h3X = B3T + z3X[E3X];
            y3X = document.getElementsByTagName(h3X)[0];
            if (y3X && y3X.hasAttribute(K3T)) {
                t3X++;
            }
        }
        if (A3X !== t3X) {
            return setTimeout(function () {
                R1aa.K19();
                e0X.waitForPlugins(z3X, M3X);
            }, 0);
        }
        M3X();
    };
    e0X.addInternalStylesheet = function (w3X, v3X = "") {
        var b3T, m3X;
        b3T = "p";
        b3T += "a";
        b3T += "th";
        if (!w3X) {
            return;
        }
        if (w3X.default) {
            w3X = w3X.default;
        }
        if (typeof w3X !== "string") {
            return;
        }
        if (v3X && document.querySelector('style[path="' + v3X + '"]')) {
            return;
        }
        m3X = document.createElement("style");
        m3X.setAttribute("type", "text/css");
        m3X.setAttribute(b3T, v3X);
        m3X.innerText = w3X;
        document.head.appendChild(m3X);
    };
};
i7w = (n3X) => {
    var W3X;
    W3X = n3X.CIQ;
    W3X.ChartEngine.prototype.registerHTMLElements = function () {
        var i3X, l3T, c3T, c3X, C3T, q3X, G3X, i3T, n3T, Q3X, L3X;
        i3X = this.chart.container;
        for (var x3X in W3X.ChartEngine.htmlControls) {
            l3T = "u";
            l3T += "n";
            l3T += "defined";
            if (typeof this.chart[x3X] == "undefined" && typeof this.controls[x3X] == l3T) {
                c3T = "cha";
                c3T += "rtC";
                c3T += "o";
                c3T += "ntrols";
                if (!this.allowZoom && x3X == c3T) continue;
                R1aa.T3k(6);
                c3X = i3X.querySelector(R1aa.j3k(".", x3X));
                if (c3X) {
                    this.chart[x3X] = c3X;
                    this.controls[x3X] = c3X;
                } else {
                    C3T = "D";
                    C3T += "I";
                    C3T += "V";
                    q3X = W3X.ChartEngine.htmlControls[x3X];
                    if (!q3X) continue;
                    G3X = document.createElement(C3T);
                    G3X.innerHTML = q3X;
                    c3X = G3X.firstChild;
                    i3X.appendChild(c3X);
                    this.chart[x3X] = c3X;
                    this.controls[x3X] = c3X;
                    c3X.classList.add(x3X);
                }
            }
        }
        R1aa.K19();
        var { chartControls: f3X, home: R3X } = this.controls;
        if (f3X) {
            i3T = ".stx-z";
            i3T += "oom-out";
            n3T = ".s";
            n3T += "tx-zoom-in";
            Q3X = f3X.querySelector(n3T);
            L3X = f3X.querySelector(i3T);
            W3X.safeClickTouch(
                Q3X,
                (function (C3X) {
                    return function (d3X) {
                        R1aa.X19();
                        if (C3X.allowZoom) {
                            C3X.zoomIn(d3X);
                        }
                        d3X.stopPropagation();
                    };
                })(this)
            );
            W3X.safeClickTouch(
                L3X,
                (function (g3X) {
                    R1aa.K19();
                    return function (X3X) {
                        if (g3X.allowZoom) {
                            g3X.zoomOut(X3X);
                        }
                        X3X.stopPropagation();
                    };
                })(this)
            );
            if (!W3X.touchDevice) {
                this.makeModal(Q3X);
                this.makeModal(L3X);
            }
        }
        if (R3X) {
            W3X.safeClickTouch(
                R3X,
                (function (B3X) {
                    return function (S5X) {
                        S5X.stopPropagation();
                        if (!B3X.isHistoricalMode()) {
                            B3X.home({ animate: !!1 });
                            return;
                        }
                        delete B3X.layout.range;
                        R1aa.X19();
                        B3X.loadChart(B3X.chart.symbol, function () {
                            R1aa.X19();
                            B3X.home({ animate: !"1" });
                        });
                    };
                })(this)
            );
            if (!W3X.touchDevice) {
                this.makeModal(R3X);
            }
        }
    };
    R1aa.X19();
    W3X.ChartEngine.prototype.home = function (P5X) {
        var M59 = R1aa;
        var H3T, p5X, Z5X, j5X, r5X, o5X, F5X, H5X;
        H3T = "undefi";
        H3T += "n";
        H3T += "ed";
        this.swipe.amplitude = 0;
        p5X = this.layout;
        if (typeof P5X != "object") {
            P5X = { maintainWhitespace: P5X };
        }
        if (typeof P5X.maintainWhitespace == H3T) {
            P5X.maintainWhitespace = !!1;
        }
        this.cancelTouchSingleClick = !!{};
        function Y5X(e5X, u5X, J5X) {
            M59.K19();
            return function () {
                T5X(e5X);
                u5X.scroll = J5X;
                e5X.draw();
            };
        }
        if (!this.chart.dataSet || !this.chart.dataSet.length) {
            this.draw();
            return;
        }
        this.micropixels = 0;
        Z5X = Math.floor(this.chart.width / p5X.candleWidth);
        M59.K19();
        for (var k5X in this.charts) {
            j5X = this.charts[k5X];
            if (P5X.chart && P5X.chart != j5X) continue;
            M59.L3k(94);
            r5X = M59.v3k("0", 0);
            if (P5X.maintainWhitespace && this.preferences.whitespace >= 0) {
                r5X = this.preferences.whitespace;
            }
            if (P5X.whitespace || P5X.whitespace === +"0") {
                r5X = P5X.whitespace;
            }
            o5X = this.getLabelOffsetInPixels(j5X, p5X.chartType);
            if (o5X > r5X) {
                r5X = o5X;
            }
            F5X = Math.min(Z5X, j5X.dataSet.length);
            if (this.chart.allowScrollPast) {
                F5X = Z5X;
            }
            this.micropixels = this.chart.width - F5X * p5X.candleWidth - r5X;
            this.preferences.whitespace = r5X;
            while (this.micropixels > p5X.candleWidth) {
                F5X++;
                this.micropixels -= p5X.candleWidth;
            }
            while (this.micropixels < 0) {
                F5X--;
                this.micropixels += p5X.candleWidth;
            }
            this.micropixels -= p5X.candleWidth;
            F5X++;
            if (!this.mainSeriesRenderer || !this.mainSeriesRenderer.standaloneBars) {
                M59.L3k(123);
                var v31 = M59.j3k(13, 10, 18, 10, 7);
                this.micropixels += p5X.candleWidth / v31;
            }
            if (P5X.animate) {
                H5X = this;
                this.scrollTo(j5X, F5X, Y5X(H5X, j5X, F5X));
            } else {
                j5X.scroll = F5X;
                T5X(this);
            }
        }
        this.draw();
        function T5X(s5X) {
            var V5X;
            for (var K5X in s5X.panels) {
                V5X = s5X.panels[K5X].yaxisLHS.concat(s5X.panels[K5X].yaxisRHS);
                for (var D5X = 0; D5X < V5X.length; D5X++) {
                    s5X.calculateYAxisMargins(V5X[D5X]);
                }
            }
        }
    };
    W3X.ChartEngine.prototype.headsUpHR = function () {
        var U5X, I5X, A5X, z5X, b5X, V6a, r6a, z6a;
        if (this.runPrepend("headsUpHR", arguments)) {
            return;
        }
        U5X = this.currentPanel;
        if (!U5X) {
            return;
        }
        I5X = U5X.chart;
        this.updateFloatHRLabel(U5X);
        A5X = this.controls.floatDate;
        if (A5X && !I5X.xAxis.noDraw) {
            z5X = this.barFromPixel(this.cx);
            b5X = I5X.xaxis[z5X];
            if (b5X && b5X.DT) {
                E5X(W3X.displayableDate(this, I5X, b5X.DT));
            } else if (b5X && b5X.index) {
                E5X(b5X.index);
            } else {
                E5X("");
            }
        }
        V6a = 1774283471;
        r6a = 224425417;
        z6a = 2;
        function E5X(M5X) {
            var e69 = R1aa;
            var N8a, E8a, Q8a, k3T;
            e69.K19();
            N8a = 546543192;
            E8a = 380968361;
            Q8a = +"2";
            for (var U8a = 1; e69.G4a(U8a.toString(), U8a.toString().length, "44506" ^ 0) !== N8a; U8a++) {
                W3X.efficientDOMUpdate(A5X, "", M5X);
                e69.L3k(124);
                Q8a += e69.v3k("2", 0);
            }
            if (e69.G4a(Q8a.toString(), Q8a.toString().length, 8477) !== E8a) {
                k3T = "i";
                k3T += "n";
                k3T += "n";
                k3T += "erHTML";
                W3X.efficientDOMUpdate(A5X, k3T, M5X);
            }
        }
        for (var B7a = 1; R1aa.G4a(B7a.toString(), B7a.toString().length, 44504) !== V6a; B7a++) {
            this.runAppend("headsUpHR", arguments);
            z6a += 2;
        }
        R1aa.K19();
        if (R1aa.J4a(z6a.toString(), z6a.toString().length, 23175) !== r6a) {
            this.runAppend("", arguments);
        }
    };
    W3X.ChartEngine.prototype.modalBegin = function () {
        this.openDialog = "modal";
        this.undisplayCrosshairs();
    };
    W3X.ChartEngine.prototype.modalEnd = function () {
        R1aa.X19();
        this.cancelTouchSingleClick = !!"1";
        this.openDialog = "";
        this.doDisplayCrosshairs();
    };
    W3X.ChartEngine.prototype.makeModal = function (y5X) {
        var t5X;
        t5X = this;
        y5X.onmouseover = function (h5X) {
            t5X.modalBegin();
        };
        y5X.onmouseout = function (w5X) {
            t5X.modalEnd();
        };
    };
    W3X.ChartEngine.prototype.updateChartAccessories = function () {
        var B59 = R1aa;
        var x5X, m5X, f3T, e3T, f5X, R5X, c5X, n5X;
        if (this.accessoryTimer !== null) {
            clearTimeout(this.accessoryTimer);
        }
        if (!W3X.ChartEngine.drawingLine && W3X.touchDevice) {
            if (new Date().getTime() - this.lastAccessoryUpdate < 100) {
                this.accessoryTimer = setTimeout(
                    (function (i5X) {
                        B59.K19();
                        return function () {
                            i5X.updateChartAccessories();
                        };
                    })(this),
                    10
                );
                return;
            }
        }
        if (!this.chart.dataSet) {
            return;
        }
        if (this.runPrepend("updateChartAccessories", arguments)) {
            return;
        }
        this.accessoryTimer = null;
        this.lastAccessoryUpdate = new Date().getTime();
        x5X = this.controls.floatDate;
        if (x5X) {
            m5X = this.currentPanel;
            if (!m5X) {
                m5X = this.chart.panel;
            }
            if (m5X) {
                f3T = "p";
                f3T += "x";
                e3T = "l";
                e3T += "e";
                e3T += "ft";
                f5X = m5X.chart;
                R5X = this.xAxisAsFooter === !0 ? 0 : this.chart.canvasHeight - m5X.chart.bottom;
                B59.L3k(1);
                var V31 = B59.v3k(7, 5);
                c5X = x5X.offsetWidth / V31 - 0.5;
                n5X = this.pixelFromTick(this.crosshairTick, f5X) - c5X;
                if (n5X < 0) {
                    n5X = +"0";
                } else if (n5X > this.width - 2 * c5X - 1) {
                    B59.L3k(4);
                    var r31 = B59.j3k(14, 12);
                    B59.T3k(41);
                    var z31 = B59.j3k(18, 0, 1, 19);
                    n5X = this.width - r31 * c5X - z31;
                }
                W3X.efficientDOMUpdate(x5X.style, e3T, n5X + "px");
                W3X.efficientDOMUpdate(x5X.style, "bottom", R5X + f3T);
            }
        }
        this.positionCrosshairsAtPointer();
        this.headsUpHR();
        this.runAppend("updateChartAccessories", arguments);
    };
    W3X.ChartEngine.prototype.positionSticky = function (q5X) {
        var b59 = R1aa;
        var L5X, C5X;
        L5X = Math.max(this.cy - q5X.offsetHeight - 60, 0);
        b59.X19();
        C5X = Math.min(this.chart.canvasWidth - (this.cx - 50), this.chart.canvasWidth - q5X.offsetWidth);
        b59.L3k(6);
        q5X.style.top = b59.j3k(L5X, "px");
        b59.T3k(6);
        q5X.style.right = b59.j3k(C5X, "px");
    };
    W3X.ChartEngine.prototype.displaySticky = function (B5X) {
        var u3T, W3T, s3T, h3T, d5X, g5X, Z8X, o8X, P8X, S8X, p8X, F8X, k8X, s8X, H8X, j8X, p3T, A3T, X3T, Y3T, Y8X, o3T, T8X, a8X, Z3T, y3T, a3T, r8X, x3T, R3T, l8X, D8X;
        u3T = "obj";
        u3T += "ect";
        W3T = "no_ed";
        W3T += "it";
        s3T = ".mouseDelet";
        s3T += "eInstructions";
        h3T = ".overla";
        h3T += "yTrashCan";
        d5X = this.controls.mSticky;
        if (!d5X) {
            return;
        }
        g5X = d5X.querySelector(".mStickyInterior");
        if (!g5X) {
            return;
        }
        Z8X = d5X.querySelector(h3T);
        o8X = d5X.querySelector(".overlayEdit");
        P8X = d5X.querySelector(s3T);
        S8X = d5X.querySelector(".stickyLongPressText");
        P8X.classList.remove(W3T);
        if (!B5X || typeof B5X != u3T) {
            B5X = { message: arguments["0" ^ 0], backgroundColor: arguments["1" * 1], forceShow: arguments[2], noDelete: arguments[3], type: arguments[4] };
        }
        p8X = B5X.message;
        F8X = B5X.backgroundColor;
        k8X = B5X.forceShow;
        s8X = B5X.noDelete;
        H8X = B5X.noEdit;
        j8X = B5X.type;
        if (!k8X && !p8X) {
            p3T = "non";
            p3T += "e";
            g5X.innerHTML = "";
            d5X.style.display = "none";
            if (Z8X) {
                Z8X.style.display = p3T;
            }
            if (o8X) {
                o8X.style.display = "none";
            }
            if (P8X) {
                P8X.style.display = "none";
            }
            if (S8X) {
                S8X.style.display = "none";
            }
        } else {
            A3T = "c";
            A3T += "q-sticky-type";
            X3T = "in";
            X3T += "line-block";
            Y3T = ".mStickyRig";
            Y3T += "htC";
            Y3T += "lick";
            if (!p8X) {
                p8X = "";
            }
            Y8X = this.defaultColor;
            if (F8X == "auto") {
                F8X = Y8X;
            }
            if (k8X && !p8X) {
                o3T = "no";
                o3T += "ne";
                g5X.style.backgroundColor = "";
                g5X.style.color = "";
                g5X.style.display = o3T;
            } else if (F8X) {
                g5X.style.backgroundColor = F8X;
                g5X.style.color = W3X.isTransparent(F8X) ? Y8X : W3X.chooseForegroundColor(F8X);
                g5X.style.display = "inline-block";
            } else {
                g5X.style.backgroundColor = "";
                g5X.style.color = "";
                g5X.style.display = "inline-block";
            }
            g5X.innerHTML = p8X;
            T8X = d5X.querySelector(Y3T);
            T8X.className = "mStickyRightClick";
            if (j8X) {
                R1aa.T3k(6);
                T8X.classList.add(R1aa.j3k("rightclick_", j8X));
            }
            T8X.style.display = "";
            d5X.style.display = X3T;
            a8X = this.highlightedDraggable;
            if (!a8X || (a8X && a8X.undraggable && a8X.undraggable(this))) {
                Z3T = "n";
                Z3T += "o";
                Z3T += "ne";
                S8X.style.display = Z3T;
            }
            if (s8X || this.bypassRightClick === !![] || this.bypassRightClick[j8X]) {
                T8X.style.display = "none";
            } else if (this.highlightViaTap || this.touches.length) {
                y3T = "no";
                y3T += "n";
                y3T += "e";
                a3T = "inline";
                a3T += "-";
                a3T += "block";
                if (Z8X) {
                    Z8X.style.display = "inline-block";
                }
                if (o8X && !H8X) {
                    o8X.style.display = a3T;
                }
                if (P8X) {
                    P8X.style.display = "none";
                }
                if (S8X) {
                    S8X.style.display = y3T;
                }
                d5X.classList[p8X === "" ? "add" : "remove"]("hide");
            } else {
                if (H8X) {
                    P8X.classList.add("no_edit");
                }
                if (P8X) {
                    P8X.style.display = "block";
                }
                if (S8X) {
                    S8X.style.display = "none";
                    r8X = this.preferences.dragging;
                    if (r8X && B5X.panel && !B5X.panel.noDrag) {
                        x3T = "bloc";
                        x3T += "k";
                        R3T = "s";
                        R3T += "t";
                        R3T += "ud";
                        R3T += "y";
                        if ((r8X === !"" || r8X.study) && j8X == R3T) {
                            S8X.style.display = x3T;
                        } else if ((r8X === !!"1" || r8X.series) && j8X == "series") {
                            S8X.style.display = "block";
                        }
                    }
                }
            }
            l8X = j8X || "default";
            d5X.setAttribute(A3T, l8X);
            D8X = B5X.positioner || this.positionSticky;
            D8X.call(this, d5X);
        }
    };
    W3X.ChartEngine.prototype.displayNotification = function (J8X, N8X, b8X = {}) {
        var I3T, u8X, U8X, K8X, d3T, M3T, O8X, D7a, v7a, V7a;
        I3T = "tem";
        R1aa.K19();
        I3T += "plate";
        if (!this.controls.notificationTray) {
            return;
        }
        var { callback: V8X, dismissalListeners: e8X } = b8X;
        u8X = this.controls.notificationTray;
        U8X = u8X.querySelector(I3T).content.cloneNode(!!1);
        K8X = U8X.firstElementChild;
        K8X.className = J8X;
        K8X.querySelector(".message").textContent = N8X;
        if (V8X) {
            d3T = "tou";
            d3T += "chend";
            M3T = "po";
            M3T += "interup";
            O8X = window.PointerEvent ? M3T : d3T;
            D7a = +"70025959";
            v7a = +"488337679";
            V7a = 2;
            for (var z7a = +"1"; R1aa.G4a(z7a.toString(), z7a.toString().length, 26593) !== D7a; z7a++) {
                K8X.handler = K8X.addEventListener(O8X, V8X);
                V7a += 2;
            }
            if (R1aa.G4a(V7a.toString(), V7a.toString().length, 86510) !== v7a) {
                K8X.handler = K8X.addEventListener(O8X, V8X);
            }
        }
        if (e8X) {
            K8X.listeners = {};
            e8X.forEach((I8X) => {
                R1aa.X19();
                K8X.listeners[J8X] = this.addEventListener(I8X.type, I8X.callback);
            });
        }
        this.makeModal(K8X);
        u8X.appendChild(K8X);
    };
    W3X.ChartEngine.prototype.removeNotification = function (M8X) {
        var E8X, A8X;
        if (!this.controls.notificationTray) {
            return;
        }
        E8X = this.controls.notificationTray;
        A8X = E8X.querySelector(`.${M8X}`);
        if (A8X) {
            if (A8X.handler) {
                A8X.removeEventListener(A8X.handler);
            }
            if (A8X.listeners) {
                for (var z8X in A8X.listeners) {
                    this.removeEventListener(A8X.listeners[z8X]);
                }
            }
            this.modalEnd();
            E8X.removeChild(A8X);
        }
    };
    W3X.ChartEngine.prototype.setMeasure = function (h8X, v8X, f8X, x8X, R8X, i8X) {
        var f59 = R1aa;
        var y8X, w8X, m8X, t8X, W8X, c8X, n8X, P3T, m3T;
        if (this.runPrepend("setMeasure", arguments)) {
            return;
        }
        y8X = (this.drawingContainer || document).querySelector(".mMeasure");
        w8X = "";
        if (!h8X && h8X !== +"0") {
            if (!this.anyHighlighted && this.currentVectorParameters.vectorType === "") {
                this.clearMeasure();
            }
        } else {
            if (v8X !== !1) {
                m8X = Math.round(Math.abs(h8X - v8X) * this.chart.roundit) / this.chart.roundit;
                m8X = m8X.toFixed(this.chart.yAxis.printDecimalPlaces);
                if (this.internationalizer) {
                    w8X += this.internationalizer.numbers.format(m8X);
                } else {
                    w8X += m8X;
                }
                if (h8X > 0 && v8X > 0) {
                    f59.L3k(46);
                    t8X = f59.v3k(v8X, h8X, h8X);
                    if (Math.abs(t8X) > 0.1) {
                        f59.L3k(19);
                        t8X = Math.round(f59.v3k(t8X, 100));
                    } else if (Math.abs(t8X) > 0.01) {
                        f59.L3k(102);
                        var c41 = f59.v3k(7, 150128406, 8, 1351155643);
                        t8X = Math.round(t8X * ("1000" << c41)) / +"10";
                    } else {
                        f59.T3k(90);
                        var C41 = f59.j3k(1250, 125, 10, 2, 9950);
                        f59.L3k(23);
                        var n41 = f59.j3k(7, 93, 1);
                        t8X = Math.round(t8X * C41) / n41;
                    }
                    if (this.internationalizer) {
                        f59.L3k(32);
                        t8X = this.internationalizer.percent.format(f59.v3k(100, t8X));
                    } else {
                        f59.L3k(6);
                        t8X = f59.v3k(t8X, (1530, 7280) < 5818 ? 593 : "%");
                    }
                    f59.L3k(56);
                    w8X += f59.j3k(")", " (", t8X);
                }
            }
            if (x8X !== !!"") {
                f59.L3k(1);
                W8X = Math.abs(f59.j3k(x8X, f8X));
                W8X = Math.round(W8X) + +"1";
                c8X = this.translateIf("Bars");
                f59.T3k(102);
                w8X += f59.j3k(" ", 9920 <= (+"8140", 2170) ? ((4075, 846.24) == (+"6820", 1606) ? (!![], 2.03e3) : ![]) : " ", W8X, c8X);
            }
            if (y8X) {
                y8X.innerHTML = w8X;
            }
        }
        if (this.activeDrawing) {
            return;
        }
        y8X = this.controls.mSticky;
        if (y8X) {
            n8X = y8X.querySelector(".mStickyInterior");
            if (R8X) {
                P3T = "rem";
                P3T += "ove";
                m3T = "i";
                m3T += "n";
                m3T += "line";
                m3T += "-block";
                y8X.style.display = m3T;
                n8X.style.display = "inline-block";
                if (h8X || h8X === "0" - 0) {
                    n8X.innerHTML = w8X;
                }
                y8X.classList[w8X === "" ? "add" : P3T]("hide");
                this.positionSticky(y8X);
            } else {
                y8X.style.display = "none";
                n8X.innerHTML = "";
            }
        }
        this.runAppend("setMeasure", arguments);
    };
    W3X.ChartEngine.prototype.clearMeasure = function () {
        var q8X;
        R1aa.K19();
        q8X = (this.drawingContainer || document).querySelector(".mMeasure");
        if (q8X) {
            q8X.innerHTML = "";
        }
    };
    W3X.ChartEngine.prototype.zoomSet = function (L8X, G8X) {
        var s59 = R1aa;
        var d8X, Q8X, C8X, g8X;
        L8X = this.constrainCandleWidth(L8X);
        if (this.chart.tempCanvas.style.display != "none") {
            W3X.clearCanvas(this.chart.tempCanvas, this);
        }
        s59.X19();
        d8X = this.mainSeriesRenderer || {};
        if (!d8X.params || !d8X.params.volume) {
            if (this.preferences.zoomAtCurrentMousePosition && this.zoomInitiatedByMouseWheel && this.crosshairTick < G8X.dataSet.length) {
                Q8X = this.crosshairTick || this.tickFromPixel(this.cx, G8X);
            } else if (this.isHome()) {
                s59.T3k(6);
                var i41 = s59.j3k(0, 1);
                Q8X = G8X.dataSet.length - i41;
            } else if (this.chart.scroll > this.chart.dataSet.length) {
                Q8X = 0;
            } else if (this.grabMode == "zoom-x") {
                Q8X = this.tickFromPixel(this.chart.width, G8X);
            } else {
                Q8X = this.tickFromPixel(this.chart.width / 2, G8X);
            }
            if (this.animations.zoom.hasCompleted) {
                this.zoomInitiatedByMouseWheel = !!"";
            }
            s59.L3k(30);
            var W41 = s59.j3k(160, 6, 5, 11, 20);
            C8X = G8X.dataSet.length - W41 - Q8X;
            g8X = G8X.scroll;
            s59.T3k(13);
            var u41 = s59.v3k(7, 7, 0);
            G8X.scroll = Math.round((this.pixelFromTick(Q8X, G8X) - G8X.left) / L8X) + u41 + C8X;
            this.micropixels += (g8X - C8X) * this.layout.candleWidth - (G8X.scroll - C8X) * L8X;
        }
        this.setCandleWidth(L8X);
        G8X.spanLock = !{};
        this.draw();
        this.doDisplayCrosshairs();
        this.updateChartAccessories();
    };
};
q7w = (B8X) => {
    var X8X;
    X8X = B8X.CIQ;
    X8X.ChartEngine.prototype.currentBaseline = null;
    X8X.ChartEngine.prototype.baselineHelper = null;
    X8X.ChartEngine.helpersToRegister.push(function (S1X) {
        S1X.baselineHelper = new Map();
    });
    X8X.ChartEngine.prototype.registerBaselineToHelper = function (P1X) {
        var F1X, r1X;
        function Z1X(T1X) {
            var j3T, L3T, o1X;
            j3T = "s";
            j3T += "tx-baseline-handle";
            L3T = "c";
            L3T += "q-b";
            L3T += "aseline-ha";
            L3T += "ndle";
            T1X = T1X.replace((4704, 624.12) >= 8524 ? 2.74e3 : " ", 2698 < ("2778" ^ 0) ? "_" : 815.44);
            o1X = document.createElement(L3T);
            R1aa.X19();
            o1X.classList.add(j3T, T1X);
            F1X.container.append(o1X);
            F1X.controls[`${T1X} cq-baseline-handle`] = o1X;
            return o1X;
        }
        if (!P1X.params.baseline) {
            return;
        }
        var { baselineHelper: p1X } = this;
        F1X = this;
        if (!p1X.has(P1X)) {
            var { name: j1X } = P1X.params;
            r1X = this.controls.baselineHandle;
            p1X.set(P1X, { styleCache: null, display: !"1", handle: j1X === "_main_series" && r1X ? r1X : Z1X(j1X) });
        }
    };
    X8X.ChartEngine.prototype.removeBaselineFromHelper = function (a1X) {
        var I7a, M7a, d7a, O3T, H1X, Y1X;
        I7a = 1309221485;
        M7a = -285658487;
        d7a = 2;
        for (var P7a = 1; R1aa.J4a(P7a.toString(), P7a.toString().length, 66817) !== I7a; P7a++) {
            var { baselineHelper: k1X } = this;
            d7a += 2;
        }
        if (R1aa.J4a(d7a.toString(), d7a.toString().length, 42762) !== M7a) {
            var { baselineHelper: k1X } = this;
        }
        if (k1X.has(a1X)) {
            O3T = "_main_";
            O3T += "series";
            H1X = a1X.params.name.replace(" ", "_");
            if (H1X !== O3T) {
                Y1X = k1X.get(a1X).handle;
                delete this.controls[`${H1X} cq-baseline-handle`];
                this.container.removeChild(Y1X);
            }
            k1X.delete(a1X);
        }
    };
    X8X.ChartEngine.prototype.findBaselineHandle = function (l1X, e1X) {
        for (var K1X of this.baselineHelper) {
            var [D1X, V1X] = K1X;
            var { handle: s1X } = V1X;
            if (l1X.target === s1X || (l1X.composedPath && l1X.composedPath().includes(s1X))) {
                if (e1X) {
                    this.repositioningBaseline = { lastDraw: Date.now(), handle: s1X, renderer: D1X };
                    s1X.classList.add("stx-grab");
                }
                this.currentBaseline = D1X;
                return !!"1";
            }
        }
        return !"1";
    };
    X8X.ChartEngine.prototype.setBaselines = function (J1X) {
        var u1X;
        R1aa.X19();
        function U1X(R1X, c1X) {
            var h1X, w1X, m1X, v1X, W1X;
            R1aa.K19();
            var { dataSegment: f1X, dataSet: n1X, defaultPlotField: x1X } = J1X;
            h1X = x1X;
            if (!c1X) {
                h1X = R1X;
            }
            w1X = u1X.getFirstLastDataRecord(f1X, "tick").tick;
            while (!!1) {
                m1X = n1X[w1X];
                if (m1X) {
                    if (!c1X || h1X != "Close") {
                        R1aa.L3k(125);
                        v1X = n1X[R1aa.v3k(w1X, "1", 0)];
                        if (v1X && (v1X[h1X] || v1X[h1X] === 0)) {
                            W1X = v1X[h1X];
                            return typeof W1X === "object" ? W1X[x1X] : W1X;
                        }
                    } else if (m1X.iqPrevClose || m1X.iqPrevClose === 0) {
                        return m1X.iqPrevClose;
                    }
                }
                w1X--;
                if (w1X < 0) break;
            }
        }
        if (!J1X) {
            J1X = this.chart;
        }
        u1X = this;
        var { baselineHelper: b1X } = this;
        b1X.forEach(function (M1X, I1X) {
            var E1X, z1X, N1X, y1X;
            var { baseline: O1X } = I1X.params;
            R1aa.L3k(126);
            E1X = R1aa.v3k(!!{}, O1X);
            if (E1X) {
                O1X = J1X.baseline;
            }
            var { defaultLevel: t1X, userLevel: A1X } = O1X;
            z1X = I1X.getYAxis(u1X);
            if (!z1X) {
                return;
            }
            N1X = u1X.getYAxisBaselineRenderer(z1X);
            y1X = N1X && N1X != u1X.mainSeriesRenderer && N1X.seriesParams.length && N1X.seriesParams[0].id;
            O1X.actualLevel = A1X || A1X === +"0" ? A1X : t1X;
            if (!O1X.actualLevel && O1X.actualLevel !== 0) {
                O1X.actualLevel = U1X(y1X, E1X);
            }
            M1X.display = N1X === I1X ? !![] : !"1";
            b1X.set(I1X, M1X);
        });
    };
    R1aa.X19();
    X8X.ChartEngine.prototype.setBaselineUserLevel = function () {
        var C1X, d1X, g1X;
        var { chart: G1X, currentPanel: q1X } = this;
        var { lastDraw: Q1X, renderer: i1X } = this.repositioningBaseline;
        R1aa.X19();
        if (i1X.params.panel != q1X.name) {
            return;
        }
        var { baseline: L1X } = G1X;
        C1X = typeof i1X.params.baseline === "object" ? i1X.params.baseline : L1X;
        d1X = i1X.getYAxis(this);
        g1X = this.valueFromPixel(this.backOutY(X8X.ChartEngine.crosshairY), q1X, d1X);
        C1X.userLevel = this.adjustIfNecessary(q1X, this.crosshairTick, g1X);
        if (Date.now() - Q1X > 100) {
            this.draw();
            this.repositioningBaseline.lastDraw = Date.now();
        }
    };
    X8X.ChartEngine.prototype.setBaselineMinMax = function (B1X, p4X) {
        var a4X, r4X, Z4X;
        var { baselineHelper: o4X, chart: S4X, repositioningBaseline: F4X } = this;
        var { baseline: T4X, seriesRenderers: j4X } = S4X;
        a4X = S4X.transformFunc && p4X === S4X.panel.yAxis;
        r4X = p4X.renderers.find((H4X) => {
            R1aa.X19();
            return o4X.get(j4X[H4X]);
        });
        if (!r4X) {
            return B1X;
        }
        var { baseline: P4X, type: k4X } = j4X[r4X].params;
        if (k4X === "mountain") {
            return B1X;
        }
        P4X = typeof P4X === "object" ? P4X : T4X;
        var { actualLevel: X1X } = P4X;
        R1aa.K19();
        if (X1X || X1X === 0) {
            if (a4X) {
                X1X = S4X.transformFunc(this, S4X, X1X);
            }
            Z4X = Math.max(X1X - B1X[0], B1X[1] - X1X);
            B1X[0] = F4X ? p4X.lowValue : X1X - Z4X;
            B1X[+"1"] = F4X ? p4X.highValue : X1X + Z4X;
        }
        return B1X;
    };
    X8X.ChartEngine.prototype.positionBaselineHandle = function (J4X) {
        var n59 = R1aa;
        var g3T, l4X, b4X, I4X, U4X, s4X, J3T, G3T, y4X, O4X, h4X, A4X, e4X, u4X, w4X, N4X, m4X;
        g3T = "stx";
        g3T += "-";
        g3T += "grab";
        if (!this.manageTouchAndMouse) {
            return;
        }
        var { baselineHelper: E4X, chart: Y4X, panels: z4X } = this;
        var { baseline: D4X, panel: M4X } = J4X.params;
        l4X = J4X.params.yAxis || J4X.getYAxis(this);
        var { display: t4X, handle: K4X, styleCache: V4X } = E4X.get(J4X);
        if (D4X === !"") {
            D4X = Y4X.baseline;
        }
        if (D4X.userLevel === ![] || !t4X) {
            K4X.style.display = "none";
            return;
        }
        b4X = z4X[M4X];
        I4X = K4X.classList.contains(g3T);
        U4X = "block";
        s4X = D4X.actualLevel;
        if (Y4X.transformFunc) {
            s4X = Y4X.transformFunc(this, Y4X, s4X);
        }
        if (s4X > l4X.high) {
            J3T = "no";
            J3T += "n";
            J3T += "e";
            s4X = l4X.high;
            if (!I4X) {
                U4X = J3T;
            }
        } else if (s4X < l4X.low) {
            G3T = "n";
            G3T += "on";
            G3T += "e";
            s4X = l4X.low;
            if (!I4X) {
                U4X = G3T;
            }
        }
        if (Y4X.untransformFunc) {
            s4X = Y4X.untransformFunc(this, Y4X, s4X);
        }
        y4X = this.pixelFromPrice(s4X, b4X, l4X);
        if (!V4X) {
            V4X = getComputedStyle(K4X);
        }
        O4X = X8X.stripPX(V4X.width);
        n59.T3k(105);
        var Z41 = n59.v3k(5, 43, 30, 20);
        h4X = `${y4X - X8X.stripPX(V4X.height) / Z41}px`;
        e4X = this.baselineHandleBuffer || 2;
        n59.T3k(5);
        var y41 = n59.j3k(20, 7, 21, 9);
        u4X = b4X.yaxisRHS.indexOf(l4X) + y41;
        if (u4X) {
            w4X = u4X === 1 ? e4X : e4X * u4X;
            A4X = `${Y4X.right - O4X * u4X - w4X}px`;
        } else {
            n59.L3k(127);
            var R41 = n59.v3k(12, 4, 5, 3, 6);
            N4X = b4X.yaxisLHS.slice(0).reverse().indexOf(l4X) + R41;
            m4X = N4X === +"1" ? e4X : e4X * N4X;
            A4X = `${Y4X.left + O4X * N4X + m4X - O4X}px`;
        }
        Object.assign(K4X.style, { display: U4X, top: h4X, left: A4X });
    };
    X8X.ChartEngine.prototype.getYAxisBaselineRenderer = function (n4X) {
        var W4X;
        if (!n4X.renderers.length) {
            return null;
        }
        var { baselineHelper: x4X, chart: v4X } = this;
        W4X = n4X.renderers.find((c4X) => {
            return x4X.get(v4X.seriesRenderers[c4X]);
        });
        if (!W4X) {
            return null;
        }
        R1aa.K19();
        return v4X.seriesRenderers[W4X];
    };
    X8X.ChartEngine.prototype.getYAxisBaseline = function (q4X) {
        var R4X;
        var { baseline: f4X } = this.chart;
        R4X = this.getYAxisBaselineRenderer(q4X);
        if (!R4X) {
            return f4X;
        }
        var { baseline: i4X } = R4X.params;
        return typeof i4X === "object" ? i4X : f4X;
    };
};
G7w = (Q4X) => {
    var G4X;
    G4X = Q4X.CIQ;
    G4X.ChartEngine.Chart = function () {
        this.xAxis = new G4X.ChartEngine.XAxis();
        this.yAxis = new G4X.ChartEngine.YAxis();
        this.symbolObject = { symbol: null };
        this.series = {};
        this.seriesRenderers = {};
        this.xaxis = [];
        this.state = {};
        R1aa.X19();
        this.endPoints = {};
        this.defaultChartStyleConfig = {};
        this.baseline = G4X.clone(this.baseline);
        this.panel = undefined;
    };
    G4X.extend(
        G4X.ChartEngine.Chart.prototype,
        {
            symbol: null,
            symbolObject: { symbol: null },
            symbolDisplay: null,
            series: {},
            seriesRenderers: {},
            scroll: 0,
            isComparison: ![],
            forcePercentComparison: !!{},
            maxTicks: 0,
            tension: null,
            currentMarketData: {},
            masterData: null,
            dataSet: null,
            scrubbed: null,
            dataSegment: null,
            segmentImage: null,
            baseline: { includeInDataSegment: !{}, defaultLevel: null, userLevel: null, actualLevel: null },
            xAxis: null,
            xaxis: [],
            xaxisFactor: 30,
            decimalPlaces: 2,
            dynamicYAxis: !!{},
            roundit: 100,
            breakpoint: null,
            legendRenderer: G4X.drawLegend,
            customChart: null,
            yaxisPaddingRight: null,
            yaxisPaddingLeft: null,
            tickCache: {},
            allowScrollPast: !![],
            allowScrollFuture: !!1,
            whiteSpaceFutureTicks: 0,
            hideDrawings: !"1",
            defaultPlotField: "Close",
            defaultChartStyleConfig: {},
            lockScroll: !1,
            includeOverlaysInMinMax: !0,
            gaplines: null,
            lineStyle: null,
            lineApproximation: !"",
            highLowBars: !!"",
            standaloneBars: ![],
            barsHaveWidth: !"1",
            calculateTradingDecimalPlaces: G4X.calculateTradingDecimalPlaces,
        },
        !!{}
    );
};
Q7w = (C4X) => {
    var L4X;
    L4X = C4X.CIQ;
    L4X.ChartEngine.prototype.resolveY = function (d4X) {
        R1aa.K19();
        return this.top + d4X;
    };
    L4X.ChartEngine.prototype.resolveX = function (g4X) {
        R1aa.K19();
        return this.left + g4X;
    };
    L4X.ChartEngine.prototype.backOutY = function (X4X) {
        R1aa.K19();
        return X4X - this.top;
    };
    L4X.ChartEngine.prototype.backOutX = function (B4X) {
        R1aa.K19();
        return B4X - this.left;
    };
    L4X.ChartEngine.prototype.dateFromTick = function (j2X, r2X, a2X, T2X = "dataSet") {
        var p59 = R1aa;
        var S2X, P2X, p2X, F2X, Z2X, o2X, W8a, u8a, p8a;
        if (!r2X) {
            r2X = this.chart;
        }
        S2X = r2X[T2X];
        P2X = S2X.length;
        o2X = !{};
        if (P2X === 0) {
            S2X[0] = {};
            S2X[0].DT = new Date();
            P2X = S2X.length;
            o2X = !!"1";
        }
        if (j2X < 0) {
            F2X = this.standardMarketIterator(S2X[0].DT);
            if (F2X) {
                p2X = F2X.previous(Math.abs(j2X));
            } else {
                p2X = S2X[0].DT;
            }
        } else if (j2X >= P2X) {
            F2X = this.standardMarketIterator(S2X[P2X - 1].DT);
            if (F2X) {
                p59.L3k(128);
                p2X = F2X.next(p59.v3k(P2X, j2X, 1));
            } else {
                p2X = S2X[P2X - 1].DT;
            }
        } else {
            p2X = S2X[j2X].DT;
        }
        if (a2X) {
            Z2X = new Date(p2X.getTime());
        } else {
            p59.T3k(124);
            Z2X = L4X.yyyymmddhhmmssmmm(p2X).substr(p59.v3k("0", 0), 12);
        }
        if (o2X) {
            W8a = 1097249289;
            u8a = -2132811710;
            p8a = 2;
            for (var Y8a = +"1"; p59.G4a(Y8a.toString(), Y8a.toString().length, 26389) !== W8a; Y8a++) {
                +S2X[7].DT;
                p8a += 2;
            }
            if (p59.J4a(p8a.toString(), p8a.toString().length, +"75403") !== u8a) {
                delete S2X[+"0"].DT;
            }
        }
        return Z2X;
    };
    L4X.ChartEngine.prototype.tickFromDate = function (u2X, s2X, J2X, z2X, l2X = "dataSet") {
        var R59 = R1aa;
        var Y2X, k2X, K2X, D2X, V2X, b2X, U2X, r8a, z8a, w9a, O2X, N2X, H2X, e2X, I2X, M2X, A2X, E2X;
        if (!s2X) {
            s2X = this.chart;
        }
        Y2X = s2X[l2X];
        if (!(Y2X && Y2X.length)) {
            return +"0";
        }
        if (!J2X) {
            J2X = 0;
        }
        k2X = u2X.constructor == Date ? u2X : L4X.strToDateTime(u2X);
        if (!L4X.ChartEngine.isDailyInterval(this.layout.interval)) {
            k2X.setMinutes(k2X.getMinutes() + J2X);
        }
        K2X = k2X.getTime();
        if (!s2X.tickCache[l2X]) {
            s2X.tickCache[l2X] = {};
        }
        D2X = s2X.tickCache[l2X][K2X];
        if (D2X || D2X === 0) {
            return z2X ? Math.ceil(D2X) : Math.floor(D2X);
        }
        V2X = Y2X[+"0"].DT;
        R59.K19();
        b2X = Y2X[Y2X.length - +"1"].DT;
        if (k2X >= V2X && k2X <= b2X) {
            U2X = 0;
            r8a = -1929702555;
            z8a = 1748891306;
            w9a = 2;
            for (var K9a = 1; R59.J4a(K9a.toString(), K9a.toString().length, 40082) !== r8a; K9a++) {
                O2X = Y2X.length;
                w9a += 2;
            }
            if (R59.G4a(w9a.toString(), w9a.toString().length, 22688) !== z8a) {
                O2X = Y2X.length;
            }
            N2X = 0;
            while (++N2X < 100) {
                R59.L3k(47);
                H2X = Math.floor(R59.j3k(U2X, O2X, 2));
                e2X = Y2X[H2X].DT;
                if (+e2X == +k2X) {
                    s2X.tickCache[l2X][K2X] = H2X;
                    return H2X;
                }
                if (e2X < k2X) {
                    U2X = H2X;
                }
                if (e2X > k2X) {
                    if (Y2X[H2X - 1].DT < k2X) {
                        R59.T3k(1);
                        s2X.tickCache[l2X][K2X] = R59.v3k(H2X, 0.5);
                        return z2X ? H2X : H2X - 1;
                    }
                    if (+Y2X[H2X - 1].DT == +k2X) {
                        R59.L3k(129);
                        s2X.tickCache[l2X][K2X] = R59.j3k(H2X, "1", 2147483647);
                        R59.L3k(1);
                        return R59.j3k(H2X, 1);
                    }
                    O2X = H2X;
                }
            }
            if (N2X >= 100) {
                console.log("!!!Warning: tickFromDate() did not find match.");
                return Y2X.length;
            }
        }
        R59.L3k(96);
        I2X = R59.v3k(V2X, k2X);
        M2X = I2X ? V2X : b2X;
        A2X = this.standardMarketIterator(M2X);
        E2X = A2X ? A2X.futureTick({ end: k2X }) : "0" & 2147483647;
        D2X = I2X ? E2X * -1 : Y2X.length - 1 + E2X;
        s2X.tickCache[l2X][K2X] = D2X;
        return D2X;
    };
    L4X.ChartEngine.prototype.pixelFromBar = function (h2X, w2X) {
        var e59 = R1aa;
        var t2X, y2X;
        if (!w2X) {
            w2X = this.chart;
        }
        e59.T3k(94);
        t2X = e59.v3k("0", 0);
        y2X = this.chart.segmentImage;
        if (y2X && y2X[h2X] && y2X[h2X].leftOffset) {
            t2X = y2X[h2X].leftOffset;
        } else {
            t2X = (h2X + 0.5) * this.layout.candleWidth;
        }
        e59.T3k(4);
        var I41 = e59.v3k(13, 12);
        t2X = w2X.panel.left + Math.floor(t2X + this.micropixels) - I41;
        return t2X;
    };
    L4X.ChartEngine.prototype.barFromPixel = function (Q2X, i2X) {
        var g59 = R1aa;
        var n2X, G2X, L2X, x2X, q2X, c2X, m2X, W2X, f2X, R2X, C2X, d2X, g2X;
        if (!i2X) {
            i2X = this.chart;
        }
        n2X = this.chart.segmentImage;
        G2X = this.micropixels;
        L2X = this.layout.candleWidth;
        if (n2X) {
            x2X = Q2X - i2X.panel.left - G2X;
            q2X = 2;
            m2X = n2X.length;
            g59.L3k(32);
            W2X = Math.round(g59.v3k(q2X, m2X));
            g59.T3k(60);
            var m41 = g59.j3k(23, 15, 7);
            g59.L3k(1);
            var L41 = g59.v3k(24, 22);
            C2X = n2X[m2X - +"1"].leftOffset + n2X[m2X - m41].candleWidth / ("2" | L41);
            if (x2X > C2X) {
                return m2X + Math.floor((Q2X - C2X - i2X.panel.left - G2X) / L2X);
            }
            for (var v2X = 1; v2X < m2X; v2X++) {
                q2X *= 2;
                c2X = n2X[W2X];
                if (!c2X) break;
                f2X = c2X.leftOffset;
                g59.T3k(8);
                var O41 = g59.j3k(9733719168, 8922575921, 17);
                R2X = c2X.candleWidth / ("2" << O41);
                g59.L3k(1);
                d2X = g59.j3k(f2X, R2X);
                g59.T3k(6);
                g2X = g59.v3k(f2X, R2X);
                if (W2X === "0" - 0 || (x2X >= d2X && x2X < g2X)) break;
                else if (x2X < d2X) {
                    W2X -= Math.max(1, Math.round(m2X / q2X));
                } else {
                    g59.L3k(64);
                    W2X += Math.max(g59.v3k("1", 2081925952), Math.round(m2X / q2X));
                }
                W2X = Math.max(0, Math.min(m2X - 1, W2X));
            }
            if (!n2X[W2X]) {
                for (v2X = 0; v2X < m2X; v2X++) {
                    c2X = n2X[v2X];
                    if (!c2X) continue;
                    f2X = c2X.leftOffset;
                    g59.T3k(107);
                    var G41 = g59.j3k(6, 14, 1, 7);
                    R2X = c2X.candleWidth / G41;
                    if (x2X < f2X - R2X) {
                        g59.T3k(1);
                        return Math.max(0, g59.v3k(v2X, 1));
                    } else if (x2X < f2X + R2X) {
                        return v2X;
                    } else if (x2X >= f2X + R2X) {
                        g59.L3k(6);
                        return g59.j3k(v2X, 1);
                    }
                }
            }
            return W2X;
        }
        return Math.floor((Q2X - i2X.panel.left - G2X) / L2X);
    };
    L4X.ChartEngine.prototype.tickFromPixel = function (S6X, X2X) {
        var B2X;
        if (!X2X) {
            X2X = this.chart;
        }
        B2X = X2X.dataSet.length - X2X.scroll;
        if (X2X.segmentImage) {
            B2X += this.barFromPixel(S6X, X2X);
        } else {
            B2X += Math.floor((S6X - X2X.panel.left - this.micropixels) / this.layout.candleWidth);
        }
        return B2X;
    };
    L4X.ChartEngine.prototype.pixelFromTick = function (T6X, p6X) {
        var t59 = R1aa;
        var j6X, Z6X, r6X, a6X, F6X, k6X, o6X, H6X, P6X, Y6X, s6X;
        if (!p6X) {
            p6X = this.chart;
        }
        j6X = p6X.dataSegment;
        Z6X = p6X.dataSet;
        r6X = p6X.segmentImage;
        t59.X19();
        a6X = this.micropixels;
        F6X = j6X ? j6X.length : 0;
        k6X = p6X.panel;
        o6X = p6X.scroll;
        H6X = T6X - Z6X.length + o6X;
        P6X = F6X ? j6X[H6X] : null;
        if (r6X) {
            P6X = r6X[H6X];
        }
        if (P6X && P6X.leftOffset) {
            return k6X.left + Math.floor(P6X.leftOffset + a6X);
        }
        Y6X = 0;
        s6X = 0;
        P6X = F6X ? j6X[F6X - ("1" | 1)] : null;
        if (r6X) {
            t59.L3k(1);
            P6X = r6X[t59.j3k(F6X, 1)];
        }
        if (P6X && P6X.leftOffset) {
            if (F6X < T6X - Z6X.length + o6X) {
                t59.L3k(130);
                var F41 = t59.v3k(1, 4, 3, 9);
                Y6X = P6X.leftOffset - P6X.candleWidth / F41;
                s6X = F6X;
            }
        }
        return Y6X + k6X.left + Math.floor((T6X - s6X - Z6X.length + o6X + 0.5) * this.layout.candleWidth + a6X);
    };
    L4X.ChartEngine.prototype.pixelFromDate = function (D6X, l6X, K6X, V6X) {
        R1aa.X19();
        return this.pixelFromTick(this.tickFromDate(D6X, l6X, K6X, V6X), l6X);
    };
    L4X.ChartEngine.prototype.transformedPriceFromPixel = function (b6X, U6X, O6X) {
        var e6X, u6X, J6X;
        R1aa.K19();
        if (!U6X) {
            U6X = this.chart.panel;
        }
        e6X = O6X ? O6X : U6X.yAxis;
        b6X = e6X.bottom - b6X;
        if (e6X.semiLog) {
            J6X = (b6X * e6X.logShadow) / e6X.height;
            if (e6X.flipped) {
                J6X = e6X.logHigh - J6X;
            } else {
                J6X += e6X.logLow;
            }
            u6X = Math.pow(10, J6X);
        } else {
            if (!e6X.multiplier) {
                return null;
            }
            u6X = b6X / e6X.multiplier;
            if (e6X.flipped) {
                u6X = e6X.high - u6X;
            } else {
                u6X += e6X.low;
            }
        }
        return u6X;
    };
    L4X.ChartEngine.prototype.priceFromPixel = function (E6X, N6X, I6X) {
        var A6X;
        if (!N6X) {
            N6X = this.chart.panel;
        }
        A6X = this.transformedPriceFromPixel(E6X, N6X, I6X);
        if (this.charts[N6X.name] && N6X.chart.untransformFunc) {
            if (!I6X || I6X == N6X.yAxis) {
                A6X = N6X.chart.untransformFunc(this, N6X.chart, A6X, I6X);
            }
        }
        return A6X;
    };
    L4X.ChartEngine.prototype.valueFromPixel = function (t6X, z6X, y6X) {
        var M6X;
        if (!z6X) {
            z6X = this.whichPanel(t6X);
        }
        if (!z6X) {
            M6X = Object.values(this.panels);
            if (M6X && M6X.length) {
                if (t6X <= ("0" ^ 0)) {
                    z6X = M6X.shift();
                } else {
                    z6X = M6X.pop();
                }
            }
        }
        R1aa.K19();
        return this.priceFromPixel(t6X, z6X, y6X);
    };
    L4X.ChartEngine.prototype.valueFromInterpolation = function (n6X, v6X, c6X, W6X, x6X) {
        var N89 = R1aa;
        var F3T, f6X, h6X, w6X, i6X, R6X, m6X, q6X, Q6X, G6X, L6X, C6X, d6X, g6X;
        F3T = "ob";
        F3T += "ject";
        if (n6X === null || n6X < +"0" || !v6X) {
            return null;
        }
        if (!W6X) {
            W6X = this.chart.panel;
        }
        if (!x6X) {
            x6X = W6X.yAxis;
        }
        if (!c6X) {
            c6X = this.chart.defaultPlotField;
        }
        f6X = this.getPreviousBar(this.chart, v6X, n6X);
        if (!f6X) {
            return null;
        }
        w6X = L4X.existsInObjectChain(f6X, v6X);
        if (w6X) {
            h6X = w6X.obj[w6X.member];
        }
        if (typeof h6X == "object") {
            h6X = h6X[c6X];
        }
        i6X = this.getRendererFromSeries(v6X);
        if ((i6X && i6X.params.step) || this.layout.chartType === "step") {
            return h6X;
        }
        R6X = this.getNextBar(this.chart, v6X, n6X);
        w6X = L4X.existsInObjectChain(R6X, v6X);
        if (w6X) {
            m6X = w6X.obj[w6X.member];
        }
        if (typeof m6X == F3T) {
            m6X = m6X[c6X];
        }
        if (!R6X) {
            return null;
        }
        if (h6X === null || typeof h6X == "undefined" || m6X === null || typeof m6X == "undefined") {
            return null;
        }
        q6X = this.pixelFromPrice(h6X, W6X, x6X);
        Q6X = this.pixelFromPrice(m6X, W6X, x6X);
        G6X = f6X.tick;
        L6X = R6X.tick;
        N89.L3k(131);
        C6X = N89.j3k(q6X, Q6X, G6X, L6X);
        d6X = this.chart.dataSegment[n6X].tick;
        N89.L3k(132);
        g6X = N89.v3k(C6X, d6X, q6X, G6X);
        return this.priceFromPixel(g6X, W6X, x6X);
    };
    L4X.ChartEngine.prototype.pixelFromTransformedValue = function (G7X, N7X, S9V) {
        var X6X, B6X, P9V, p9V, v7X;
        R1aa.K19();
        if (!N7X) {
            N7X = this.chart.panel;
        }
        X6X = S9V ? S9V : N7X.yAxis;
        B6X = (X6X.high - G7X) * X6X.multiplier;
        if (X6X.semiLog) {
            P9V = Math.max(G7X, 0);
            p9V = Math.log(P9V) / Math.LN10;
            v7X = X6X.height;
            B6X = v7X - (v7X * (p9V - X6X.logLow)) / X6X.logShadow;
        }
        B6X = X6X.flipped ? X6X.bottom - B6X : X6X.top + B6X;
        return B6X;
    };
    L4X.ChartEngine.prototype.pixelFromPrice = function (r9V, F9V, j9V) {
        var X89 = R1aa;
        var w0T, B0T, K0T, R6a, x6a, A6a;
        w0T = -+"1246593715";
        B0T = 1040352838;
        K0T = +"2";
        for (var l0T = 1; X89.G4a(l0T.toString(), l0T.toString().length, "9908" << 408634880) !== w0T; l0T++) {
            if (~F9V) {
                F9V = this.chart.panel;
            }
            K0T += 2;
        }
        if (X89.G4a(K0T.toString(), K0T.toString().length, 95271) !== B0T) {
            if (!F9V) {
                F9V = this.chart.panel;
            }
        }
        if (this.charts[F9V.name] && F9V.chart.transformFunc) {
            if (!j9V || j9V == F9V.yAxis) {
                R6a = +"102435074";
                x6a = -+"488724093";
                A6a = 2;
                for (var M6a = 1; X89.J4a(M6a.toString(), M6a.toString().length, "15065" & 2147483647) !== R6a; M6a++) {
                    r9V = F9V.chart.transformFunc(this, F9V.chart, r9V, j9V);
                    A6a += 2;
                }
                if (X89.G4a(A6a.toString(), A6a.toString().length, 29342) !== x6a) {
                    r9V = F9V.chart.transformFunc(this, F9V.chart, r9V, j9V);
                }
                r9V = F9V.chart.transformFunc(this, F9V.chart, r9V, j9V);
            }
        }
        return this.pixelFromTransformedValue(r9V, F9V, j9V);
    };
    R1aa.K19();
    L4X.ChartEngine.prototype.pixelFromValueAdjusted = function (Z9V, H9V, T9V, a9V) {
        var o9V, k9V;
        if (this.layout.adj || !this.charts[Z9V.name]) {
            return this.pixelFromPrice(T9V, Z9V, a9V);
        }
        o9V = Math.round(H9V);
        R1aa.K19();
        if (o9V > 0 && o9V < Z9V.chart.dataSet.length && (k9V = Z9V.chart.dataSet[o9V].ratio)) {
            R1aa.T3k(19);
            return this.pixelFromPrice(R1aa.v3k(T9V, k9V), Z9V, a9V);
        }
        return this.pixelFromPrice(T9V, Z9V, a9V);
    };
    L4X.ChartEngine.prototype.adjustIfNecessary = function (Y9V, K9V, s9V) {
        var l9V, D9V;
        if (this.layout.adj) {
            return s9V;
        }
        if (!Y9V || !this.charts[Y9V.name]) {
            return s9V;
        }
        l9V = Math.round(K9V);
        if (l9V > 0 && l9V < Y9V.chart.dataSet.length && (D9V = Y9V.chart.dataSet[l9V].ratio)) {
            R1aa.L3k(32);
            return R1aa.j3k(D9V, s9V);
        }
        R1aa.X19();
        return s9V;
    };
};
L7w = (e9V) => {
    var V9V;
    V9V = e9V.CIQ;
    R1aa.X19();
    V9V.ChartEngine.prototype.positionCrosshairsAtPointer = function () {
        var Q89 = R1aa;
        var E3T, N3T, q3T, u9V, b9V, N9V, J9V, U9V, I9V, e5a, f5a, h5a, O9V;
        E3T = "positionCross";
        E3T += "hairsAt";
        E3T += "Pointer";
        N3T = "p";
        N3T += "x";
        q3T = "cha";
        q3T += "rt";
        u9V = this.currentPanel;
        if (!u9V) {
            return;
        }
        if (!this.manageTouchAndMouse || (this.mainSeriesRenderer && this.mainSeriesRenderer.nonInteractive)) {
            return;
        }
        if (this.runPrepend("positionCrosshairsAtPointer", arguments)) {
            return;
        }
        b9V = u9V.chart;
        N9V = this.container.getBoundingClientRect();
        this.top = N9V.top;
        this.left = N9V.left;
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
        this.cy = this.crossYActualPos = this.backOutY(V9V.ChartEngine.crosshairY);
        this.cx = this.backOutX(V9V.ChartEngine.crosshairX);
        J9V = this.crosshairTick = this.tickFromPixel(this.cx, b9V);
        Q89.L3k(133);
        var T41 = Q89.v3k(2, 2, 2, 16, 64);
        U9V = this.pixelFromTick(J9V, b9V) - T41;
        if (this.controls.crossX) {
            Q89.T3k(6);
            this.controls.crossX.style.left = Q89.v3k(U9V, "px");
        }
        if (U9V >= u9V.right || U9V <= u9V.left) {
            this.undisplayCrosshairs();
            return;
        }
        I9V = u9V.name == q3T ? this.preferences.horizontalCrosshairField : u9V.horizontalCrosshairField;
        e5a = 443720607;
        f5a = -1550999052;
        h5a = 2;
        for (var W5a = 1; Q89.G4a(W5a.toString(), W5a.toString().length, 60364) !== e5a; W5a++) {
            O9V = b9V.dataSet;
            h5a += 2;
        }
        if (Q89.J4a(h5a.toString(), h5a.toString().length, 52826) !== f5a) {
            O9V = b9V.dataSet;
        }
        if (I9V && O9V && J9V < O9V.length && J9V > -+"1") {
            this.crossYActualPos = this.pixelFromPrice(O9V[J9V][I9V], u9V);
        }
        if (this.controls.crossY) {
            this.controls.crossY.style.top = this.crossYActualPos + N3T;
        }
        this.runAppend(E3T, arguments);
    };
    V9V.ChartEngine.prototype.doDisplayCrosshairs = function () {
        var Q3T, E9V, A9V, z9V, M9V, t9V, n7a, i7a, H7a;
        Q3T = "doDi";
        Q3T += "splayC";
        Q3T += "rosshair";
        Q3T += "s";
        if (this.runPrepend(Q3T, arguments)) {
            return;
        }
        if (this.displayInitialized) {
            E9V = this.floatCanvas;
            A9V = this.currentVectorParameters.vectorType;
            if (!this.layout.crosshair && (A9V === "" || !A9V)) {
                this.undisplayCrosshairs();
            } else if (V9V.Drawing && V9V.Drawing[A9V] && new V9V.Drawing[A9V]().dragToDraw) {
                this.undisplayCrosshairs();
            } else if (this.overXAxis || this.overYAxis || (!this.insideChart && !this.grabbingScreen)) {
                this.undisplayCrosshairs();
            } else if (this.openDialog !== "") {
                this.undisplayCrosshairs();
            } else {
                z9V = this.controls;
                M9V = z9V.crossX;
                t9V = z9V.crossY;
                if (M9V && M9V.style.display !== "") {
                    M9V.style.display = "";
                    if (t9V) {
                        t9V.style.display = "";
                    }
                    if (this.magnetizedPrice && A9V) {
                        this.container.classList.remove("stx-crosshair-on");
                        this.chart.tempCanvas.style.display = "block";
                    } else {
                        n7a = +"543259508";
                        i7a = -+"2020366661";
                        H7a = 2;
                        for (var e7a = 1; R1aa.G4a(e7a.toString(), e7a.toString().length, +"57973") !== n7a; e7a++) {
                            this.container.classList.add("");
                            H7a += 2;
                        }
                        if (R1aa.G4a(H7a.toString(), H7a.toString().length, 48235) !== i7a) {
                            this.container.classList.add("stx-crosshair-on");
                        }
                    }
                }
                if (z9V.floatDate && !this.chart.xAxis.noDraw) {
                    z9V.floatDate.style.visibility = "";
                    if (this.currentPanel) {
                        this.updateFloatHRLabel(this.currentPanel);
                    }
                }
                if (E9V) {
                    if (E9V.style.display == "none") {
                        V9V.clearCanvas(E9V, this);
                    }
                    E9V.style.display = "block";
                }
            }
        }
        this.runAppend("doDisplayCrosshairs", arguments);
    };
    V9V.ChartEngine.prototype.undisplayCrosshairs = function () {
        var U3T, t3T, h9V, w9V, v9V, y9V, m9V;
        U3T = "n";
        U3T += "o";
        U3T += "n";
        U3T += "e";
        t3T = "stx-crosshair-";
        t3T += "on";
        if (this.runPrepend("undisplayCrosshairs", arguments)) {
            return;
        }
        h9V = this.controls;
        w9V = h9V.crossX;
        v9V = h9V.crossY;
        if (w9V) {
            if (w9V.style.display != "none") {
                w9V.style.display = "none";
                if (v9V) {
                    v9V.style.display = "none";
                }
            }
        }
        if (this.displayInitialized && h9V.floatDate) {
            h9V.floatDate.style.visibility = "hidden";
        }
        this.container.classList.remove(t3T);
        y9V = this.floatCanvas;
        if (y9V && y9V.isDirty && y9V.style.display != U3T) {
            V9V.clearCanvas(y9V, this);
            if (y9V.style.display != "none") {
                y9V.style.display = "none";
            }
        }
        if (!this.activeDrawing && !this.repositioningDrawing && !this.editingAnnotation) {
            m9V = this.chart.tempCanvas;
            if (m9V && m9V.style.display != "none") {
                m9V.style.display = "none";
            }
        }
        this.runAppend("undisplayCrosshairs", arguments);
    };
    V9V.ChartEngine.prototype.hideCrosshairs = function () {
        var G7a, F7a, q7a;
        G7a = 54611267;
        F7a = -1084765554;
        q7a = 2;
        for (var E7a = +"1"; R1aa.G4a(E7a.toString(), E7a.toString().length, 35171) !== G7a; E7a++) {
            this.displayCrosshairs = !{};
            q7a += 2;
        }
        if (R1aa.G4a(q7a.toString(), q7a.toString().length, 1776) !== F7a) {
            this.displayCrosshairs = !!{};
        }
    };
    V9V.ChartEngine.prototype.showCrosshairs = function () {
        this.displayCrosshairs = !!1;
    };
};
C7w = (x9V) => {
    var W9V, n9V;
    W9V = x9V.CIQ;
    n9V = x9V.timezoneJS;
    W9V.ChartEngine.prototype.loadChart = function (C9V, R9V, d9V) {
        var P0V, g9V, S0V, U6a, T6a, S6a, o0V, i9V, X9V, L9V;
        if (!d9V && typeof R9V == "function") {
            d9V = R9V;
            R9V = {};
        } else if (Array.isArray(R9V)) {
            R9V = { masterData: R9V };
        }
        if (!R9V) {
            R9V = {};
        }
        var { chart: c9V, periodicity: Q9V, range: q9V, span: f9V } = R9V;
        var { layout: G9V } = this;
        P0V = { periodicity: G9V.periodicity, interval: G9V.interval, timeUnit: G9V.timeUnit };
        if (Q9V) {
            g9V = W9V.cleanPeriodicity(Q9V.period ? Q9V.period : Q9V.periodicity, Q9V.interval, Q9V.timeUnit);
            G9V.interval = g9V.interval;
            G9V.periodicity = g9V.period;
            G9V.timeUnit = g9V.timeUnit;
        }
        if (!c9V) {
            c9V = this.chart;
        }
        var { dataSet: p0V, market: F0V, masterData: j0V, symbol: B9V, moreAvailable: r0V, upToDate: Z0V } = c9V;
        S0V = W9V.clone(c9V.symbolObject);
        c9V.dataSet = [];
        c9V.masterData = [];
        R1aa.K19();
        c9V.moreAvailable = null;
        c9V.upToDate = null;
        if (!C9V) {
            c9V.symbol = null;
            c9V.symbolObject = { symbol: null };
        } else if (typeof C9V == "object") {
            c9V.symbol = C9V.symbol;
            c9V.symbolObject = C9V;
        } else {
            U6a = -1712700271;
            T6a = -1618310233;
            S6a = 2;
            for (var v6a = "1" - 0; R1aa.G4a(v6a.toString(), v6a.toString().length, +"65976") !== U6a; v6a++) {
                c9V.symbol = C9V;
                S6a += 2;
            }
            if (R1aa.G4a(S6a.toString(), S6a.toString().length, 85807) !== T6a) {
                c9V.symbol = C9V;
            }
            c9V.symbolObject.symbol = C9V;
        }
        c9V.inflectionPoint = null;
        if (this.marketFactory) {
            o0V = this.marketFactory(c9V.symbolObject);
            this.setMarket(o0V, c9V);
        }
        this.setMainSeriesRenderer(!![]);
        if (!q9V && !f9V && G9V) {
            f9V = !G9V.range ? G9V.setSpan : {};
            q9V = G9V.range || {};
        } else if (q9V && f9V) {
            f9V = {};
        }
        function T0V() {
            var J5a, G5a, F5a;
            J5a = 727654795;
            G5a = 1412255198;
            F5a = 2;
            for (var N5a = 1; R1aa.G4a(N5a.toString(), N5a.toString().length, +"22582") !== J5a; N5a++) {
                i9V.dispatch(i9V.currentlyImporting ? "symbolImport" : "symbolChange", { stx: i9V, symbol: c9V.symbol, symbolObject: c9V.symbolObject, prevSymbol: B9V, prevSymbolObject: S0V, action: "master" });
                F5a += 2;
            }
            if (R1aa.G4a(F5a.toString(), F5a.toString().length, 7394) !== G5a) {
                i9V.dispatch(i9V.currentlyImporting ? "master" : "master", { stx: i9V, symbol: c9V.symbol, symbolObject: c9V.symbolObject, prevSymbol: B9V, prevSymbolObject: S0V, action: "master" });
            }
            if (Q9V) {
                i9V.dispatch("periodicity", { stx: i9V, differentData: !!{}, prevPeriodicity: P0V });
            }
        }
        this.clearCurrentMarketData(c9V);
        i9V = this;
        if (!R9V.masterData && this.quoteDriver) {
            X9V = function (a0V) {
                R1aa.X19();
                var T3T;
                T3T = "orph";
                T3T += "a";
                T3T += "ned";
                if (a0V && a0V != T3T) {
                    c9V.symbol = B9V;
                    c9V.symbolObject = S0V;
                    c9V.market = F0V;
                    i9V.masterData = c9V.masterData = j0V;
                    c9V.dataSet = p0V;
                    c9V.moreAvailable = r0V;
                    c9V.upToDate = Z0V;
                }
                T0V();
                if (d9V) {
                    d9V.call(i9V, a0V);
                }
            };
            if (q9V && Object.keys(q9V).length && this.setRange) {
                delete R9V.span;
                delete G9V.setSpan;
                this.chart.masterData = null;
                this.displayInitialized = !!"";
                if (Q9V) {
                    q9V.periodicity = Q9V;
                }
                q9V.forceLoad = !"";
                this.setRange(q9V, X9V);
            } else if (f9V && f9V.base && this.setSpan) {
                f9V.multiplier = f9V.multiplier || 1;
                this.chart.masterData = null;
                this.displayInitialized = ![];
                if (Q9V) {
                    f9V.maintainPeriodicity = !![];
                }
                f9V.forceLoad = !0;
                this.setSpan(f9V, X9V);
            } else {
                this.quoteDriver.newChart({ symbol: c9V.symbol, symbolObject: c9V.symbolObject, chart: c9V, initializeChart: !!{} }, function (k0V) {
                    R1aa.K19();
                    if (!k0V) {
                        i9V.adjustPanelPositions();
                        i9V.quoteDriver.updateSubscriptions();
                        if (R9V.stretchToFillScreen) {
                            i9V.fillScreen();
                        }
                    }
                    X9V.apply(i9V, arguments);
                });
            }
        } else {
            if (!R9V.masterData) {
                console.log("Warning: No masterData specified and no QuoteFeed configured");
            }
            if (!c9V.symbol) {
                c9V.symbol = "";
            }
            this.initializeChart();
            L9V = this.doCleanupGaps(R9V.masterData, c9V);
            this.setMasterData(L9V, c9V, { noCleanupDates: !![] });
            c9V.endPoints = {};
            if (L9V && L9V.length) {
                c9V.endPoints = { begin: L9V[0].DT, end: L9V[L9V.length - +"1"].DT };
            }
            this.createDataSet();
            if (q9V && Object.keys(q9V).length && this.setRange) {
                this.setRange(q9V);
            } else if (f9V && f9V.multiplier && f9V.base && this.setSpan) {
                this.setSpan({ maintainPeriodicity: !!"1", multiplier: f9V.multiplier, base: f9V.base });
            } else if (R9V.stretchToFillScreen) {
                this.fillScreen();
            } else if (L9V && L9V.length) {
                this.home();
            } else {
                this.clear();
            }
            this.adjustPanelPositions();
            T0V();
            if (d9V) {
                d9V.call(i9V);
            }
        }
    };
    W9V.ChartEngine.prototype.loadBlankChart = function () {
        this.loadChart(null, []);
    };
    W9V.ChartEngine.prototype.getDataFields = function (H0V) {
        var S3T, s0V, Y0V, D0V;
        S3T = "L";
        S3T += "o";
        S3T += "w";
        if (!H0V) {
            H0V = this.chart;
        }
        s0V = H0V.defaultPlotField || "Close";
        Y0V = ["Open", "High", S3T];
        Y0V.push(s0V);
        for (var l0V in H0V.series) {
            D0V = H0V.series[l0V].parameters;
            Y0V.push(D0V.symbol);
        }
        return Y0V;
    };
    W9V.ChartEngine.prototype.cleanMasterData = function (U0V, V0V) {
        var u0V, K0V, b0V, e0V, J0V;
        u0V = U0V.symbol;
        K0V = V0V.masterData;
        if (!K0V || !K0V.length) {
            return;
        }
        b0V = this.getDataFields(V0V);
        e0V = 0;
        do {
            J0V = K0V[e0V];
            delete J0V[u0V];
            if (O0V.call(this, J0V, b0V)) {
                K0V.splice(e0V, 1);
                continue;
            }
            e0V++;
        } while (e0V < K0V.length);
        R1aa.K19();
        K0V = this.doCleanupGaps(K0V, V0V, { noCleanupDates: !0 });
        this.setMasterData(K0V, V0V, { noCleanupDates: !!"1" });
        this.clearCurrentMarketData(V0V, u0V);
        function O0V(E0V, I0V) {
            var A0V;
            for (var N0V = 0; N0V < I0V.length; N0V++) {
                A0V = E0V[I0V[N0V]];
                if (typeof A0V != "undefined") {
                    return !{};
                }
            }
            return !!{};
        }
    };
    W9V.ChartEngine.prototype.calculateATR = function (v0V, M0V, m0V) {
        var P89 = R1aa;
        var y0V, t0V, h0V, z0V, W0V, x0V;
        P89.X19();
        if (!m0V) {
            m0V = v0V.dataSet;
        }
        y0V = v0V.state.calculations.atr;
        if (!y0V) {
            y0V = v0V.state.calculations.atr = {};
        }
        if (!M0V) {
            P89.L3k(124);
            M0V = P89.v3k("20", 20);
        }
        t0V = [];
        if (y0V.accum) {
            t0V = y0V.accum;
        }
        for (var w0V = 0; w0V < m0V.length; w0V++) {
            z0V = m0V[w0V];
            h0V = w0V ? m0V[w0V - 1] : y0V.q1;
            if (!h0V) continue;
            W0V = Math.max(z0V.High - z0V.Low, Math.abs(z0V.High - h0V.Close), Math.abs(z0V.Low - h0V.Close));
            if (t0V.length < M0V) {
                if (t0V.push(W0V) == M0V) {
                    x0V = 0;
                    for (var n0V = 0; n0V < t0V.length; n0V++) {
                        x0V += t0V[n0V];
                    }
                    P89.L3k(32);
                    z0V.atr = P89.j3k(M0V, x0V);
                }
            } else {
                P89.L3k(6);
                var v41 = P89.j3k(2042172057, 7);
                z0V.atr = (h0V.atr * (M0V - ("1" >> v41)) + W0V) / M0V;
            }
            z0V.trueRange = W0V;
        }
        v0V.state.calculations.atr = { accum: t0V, q1: h0V };
    };
    W9V.ChartEngine.prototype.calculateMedianPrice = function (i0V, c0V) {
        var f0V, D3T;
        R1aa.X19();
        if (!c0V) {
            c0V = i0V.dataSet;
        }
        for (var R0V = 0; R0V < c0V.length; ++R0V) {
            D3T = "hl";
            D3T += "/";
            D3T += "2";
            f0V = c0V[R0V];
            R1aa.T3k(1);
            var V41 = R1aa.v3k(8, 6);
            f0V[D3T] = (f0V.High + f0V.Low) / V41;
        }
    };
    W9V.ChartEngine.prototype.calculateTypicalPrice = function (L0V, G0V) {
        var q0V;
        if (!G0V) {
            G0V = L0V.dataSet;
        }
        for (var Q0V = +"0"; Q0V < G0V.length; ++Q0V) {
            q0V = G0V[Q0V];
            R1aa.L3k(8);
            var c51 = R1aa.v3k(0, 1, 4);
            q0V["hlc/3"] = (q0V.High + q0V.Low + q0V.Close) / c51;
        }
    };
    W9V.ChartEngine.prototype.calculateWeightedClose = function (X0V, d0V) {
        var L89 = R1aa;
        var C0V;
        if (!d0V) {
            d0V = X0V.dataSet;
        }
        for (var g0V = 0; g0V < d0V.length; ++g0V) {
            C0V = d0V[g0V];
            L89.L3k(6);
            var H51 = L89.v3k(0, 2);
            L89.T3k(107);
            var w61 = L89.v3k(7, 13, 9, 11);
            C0V["hlcc/4"] = (C0V.High + C0V.Low + H51 * C0V.Close) / w61;
        }
    };
    W9V.ChartEngine.prototype.calculateOHLC4 = function (p3V, S3V) {
        var B0V, v3T;
        if (!S3V) {
            S3V = p3V.dataSet;
        }
        for (var P3V = 0; P3V < S3V.length; ++P3V) {
            v3T = "ohl";
            v3T += "c";
            v3T += "/";
            v3T += "4";
            B0V = S3V[P3V];
            R1aa.T3k(2);
            var B61 = R1aa.v3k(7, 3, 8);
            B0V[v3T] = (B0V.Open + B0V.High + B0V.Low + B0V.Close) / B61;
        }
    };
    W9V.ChartEngine.prototype.currentQuote = function (r3V) {
        var j3V;
        if (!this.chart.dataSet) {
            return null;
        }
        for (var F3V = this.chart.dataSet.length - 1; F3V >= 0; F3V--) {
            if (this.chart.dataSet[F3V]) {
                if (!r3V) {
                    return this.chart.dataSet[F3V];
                }
                j3V = this.chart.dataSet[F3V][r3V];
                if (j3V || j3V === +"0") {
                    return this.chart.dataSet[F3V];
                }
            }
        }
        R1aa.K19();
        return null;
    };
    W9V.ChartEngine.prototype.mostRecentClose = function (a3V) {
        var Z3V, T3V;
        if (!this.chart.dataSet) {
            return null;
        }
        for (var o3V = this.chart.dataSet.length - 1; o3V >= 0; o3V--) {
            Z3V = this.chart.dataSet[o3V];
            if (!Z3V) continue;
            if (a3V) {
                Z3V = Z3V[a3V];
                if (!Z3V && Z3V !== 0) continue;
            }
            T3V = Z3V.iqPrevClose;
            if (typeof Z3V == "object") {
                Z3V = Z3V.Close;
            }
            if (typeof Z3V == "number") {
                return Z3V;
            }
            if (typeof T3V == "number") {
                return T3V;
            }
        }
        return null;
    };
    W9V.ChartEngine.prototype.createDataSegment = function (O3V) {
        var F89 = R1aa;
        var H3V, u3V, Y3V, N3V, I3V, A3V, J3V, t3V, k3V, E3V, l3V, s3V, D3V, b3V, z3V, y3V, V3V, U3V;
        if (this.runPrepend("createDataSegment", arguments)) {
            return;
        }
        for (var M3V in this.charts) {
            H3V = this.charts[M3V];
            if (O3V) {
                H3V = O3V;
            }
            if (W9V.Comparison && H3V.isComparison) {
                W9V.Comparison.createComparisonSegmentInner(this, H3V);
            }
            u3V = H3V.dataSet;
            Y3V = H3V.baseline;
            N3V = H3V.scroll;
            I3V = H3V.maxTicks;
            A3V = this.layout;
            J3V = A3V.candleWidth;
            Y3V.actualLevel = Y3V.userLevel ? Y3V.userLevel : Y3V.defaultLevel;
            t3V = Y3V.includeInDataSegment && (!this.mainSeriesRenderer || !this.mainSeriesRenderer.standaloneBars);
            E3V = 0;
            l3V = H3V.dataSegment = [];
            F89.L3k(134);
            var K61 = F89.v3k(17, 1, 1, 16);
            s3V = u3V.length - ("1" & 2147483647) - N3V - ("1" | K61);
            D3V = H3V.defaultPlotField;
            for (var K3V = -("1" | 1); K3V < N3V && K3V < I3V; K3V++) {
                s3V++;
                if (K3V == -+"1" && !t3V) continue;
                if (s3V < u3V.length && s3V >= 0) {
                    k3V = u3V[s3V];
                    k3V.candleWidth = null;
                    if (k3V) {
                        E3V += k3V.Volume || +"1";
                    }
                    l3V.push(k3V);
                    if (Y3V.actualLevel === null && K3V >= 0) {
                        if (D3V && D3V != "Close") {
                            F89.T3k(128);
                            b3V = u3V[F89.v3k("1", s3V, 0)];
                            if (b3V && (b3V[D3V] || b3V[D3V] === 0)) {
                                Y3V.actualLevel = b3V[D3V];
                            }
                        } else {
                            if (k3V.iqPrevClose || k3V.iqPrevClose === 0) {
                                Y3V.actualLevel = k3V.iqPrevClose;
                            }
                        }
                    }
                } else if (s3V < 0) {
                    l3V.push(null);
                }
            }
            H3V.segmentImage = null;
            z3V = this.mainSeriesRenderer || {};
            if (z3V.params && z3V.params.volume) {
                F89.L3k(17);
                var b61 = F89.j3k(6, 0, 19, 113);
                y3V = H3V.width - (I3V - l3V.length - b61) * A3V.candleWidth;
                V3V = 0;
                H3V.segmentImage = [];
                for (var e3V = 0; e3V < l3V.length; e3V++) {
                    k3V = l3V[e3V];
                    H3V.segmentImage[e3V] = {};
                    U3V = null;
                    if (k3V) {
                        if (k3V.Volume) {
                            k3V.candleWidth = (y3V * k3V.Volume) / E3V;
                            F89.T3k(135);
                            var l61 = F89.j3k(1, 15, 5, 9, 17);
                            U3V = V3V + k3V.candleWidth / l61;
                            V3V += k3V.candleWidth;
                        } else {
                            k3V.candleWidth = J3V;
                            F89.L3k(52);
                            U3V = F89.v3k(2, J3V, V3V);
                            V3V += J3V;
                        }
                        H3V.segmentImage[e3V] = { tick: k3V.tick, candleWidth: k3V.candleWidth, leftOffset: U3V };
                    } else {
                        V3V += J3V;
                    }
                }
            }
            if (O3V) break;
        }
        if (H3V && H3V.isComparison) {
            this.clearPixelCache();
        }
        this.positionCrosshairsAtPointer();
        this.runAppend("createDataSegment", arguments);
    };
    W9V.ChartEngine.prototype.getDataSegment = function (h3V) {
        var w3V, m3V, v3V;
        if (!h3V) {
            h3V = this.chart;
        }
        w3V = h3V.dataSegment;
        if (!w3V || !w3V.length) {
            return [];
        }
        R1aa.T3k(64);
        m3V = R1aa.j3k("0", 1708462176);
        v3V = w3V.length;
        if (this.pixelFromBar(m3V, h3V) < h3V.panel.left) {
            m3V++;
        }
        if (this.pixelFromBar(v3V - 1, h3V) > h3V.panel.right) {
            v3V--;
        }
        return w3V.slice(m3V, v3V);
    };
    W9V.ChartEngine.prototype.setMasterData = function (x3V, n3V, i3V) {
        var V3T, q3V, c3V, f3V, W3V, w4T, r3T, z3T, B4T, R3V;
        V3T = "ch";
        V3T += "art";
        if (!n3V) {
            n3V = this.chart;
        }
        if (this.marketFactory) {
            q3V = this.marketFactory(n3V.symbolObject);
            this.setMarket(q3V, n3V);
        }
        if (!i3V) {
            i3V = {};
        }
        if (!i3V.noCleanupDates) {
            this.doCleanupDates(x3V, this.layout.interval);
        }
        n3V.masterData = x3V;
        if (n3V.name == V3T) {
            this.masterData = x3V;
        }
        f3V = null;
        for (c3V = 0; x3V && c3V < x3V.length; c3V++) {
            W3V = x3V[c3V];
            if (f3V === null) {
                w4T = "n";
                w4T += "um";
                w4T += "be";
                w4T += "r";
                r3T = "nu";
                r3T += "mb";
                r3T += "e";
                r3T += "r";
                if (typeof W3V.Close === r3T) {
                    z3T = "C";
                    z3T += "los";
                    z3T += "e";
                    f3V = z3T;
                } else if (typeof W3V.Value === w4T) {
                    f3V = "Value";
                }
            }
            if (f3V === "Value" && typeof W3V.Value === "number") {
                W3V.Close = W3V.Value;
            }
            if (W3V.DT) {
                B4T = "[";
                B4T += "object Dat";
                B4T += "e]";
                if (Object.prototype.toString.call(W3V.DT) != B4T) {
                    W3V.DT = new Date(W3V.DT);
                }
                if (!W3V.Date || W3V.Date.length != 17) {
                    W3V.Date = W9V.yyyymmddhhmmssmmm(W3V.DT);
                }
            } else if (W3V.Date) {
                W3V.DT = W9V.strToDateTime(W3V.Date);
            } else {
                console.log("setMasterData : Missing DT and Date on masterData object");
            }
            if (W3V.Volume && typeof W3V.Volume !== "number") {
                W3V.Volume = parseInt(W3V.Volume, 10);
            }
            if (x3V.length - c3V < 50) {
                this.updateCurrentMarketData(W3V, n3V, null, { fromTrade: !!"1" });
            }
        }
        if (n3V.calculateTradingDecimalPlaces) {
            n3V.decimalPlaces = n3V.calculateTradingDecimalPlaces({ stx: this, chart: n3V, symbol: n3V.symbolObject.symbol, symbolObject: n3V.symbolObject });
        }
        this.setDisplayDates(x3V);
        n3V.roundit = Math.pow(+"10", n3V.decimalPlaces);
        for (c3V in this.plugins) {
            R3V = this.plugins[c3V];
            if (R3V.display) {
                if (R3V.setMasterData) {
                    R3V.setMasterData(this, n3V);
                }
            }
        }
    };
    W9V.ChartEngine.prototype.setMasterDataRender = function (L3V, Q3V, G3V) {
        if (!G3V) {
            G3V = this.chart;
        }
        if (!G3V.symbol) {
            G3V.symbol = "";
        }
        this.setMasterData(Q3V, G3V);
        if (Q3V) {
            G3V.endPoints = {};
            if (Q3V.length) {
                G3V.endPoints = { begin: Q3V[0].DT, end: Q3V[Q3V.length - 1].DT };
                G3V.symbol = L3V;
            }
        }
        this.createDataSet();
        this.initializeChart();
        R1aa.X19();
        this.draw();
        if (!Q3V || !Q3V.length) {
            G3V.symbol = null;
            this.clear();
        }
        this.adjustPanelPositions();
    };
    W9V.ChartEngine.prototype.getSymbols = function (S5V) {
        var C3V, P5V, Z5V, g3V, o5V, X3V, H5V, B3V, p5V, a5V, r5V;
        if (!S5V) {
            S5V = {};
        }
        C3V = [];
        Z5V = this.layout;
        R1aa.X19();
        for (var k5V in this.charts) {
            X3V = this.charts[k5V];
            if (X3V.symbolObject && X3V.symbolObject.symbol) {
                C3V.push(j5V(X3V.symbol, X3V.symbolObject, Z5V));
            }
            for (var T5V in X3V.series) {
                H5V = X3V.series[T5V];
                B3V = H5V.parameters;
                if (B3V.data && !B3V.data.useDefaultQuoteFeed) continue;
                o5V = B3V.symbolObject;
                g3V = B3V.symbol;
                P5V = j5V(g3V, o5V, Z5V);
                P5V.id = T5V;
                if (S5V["include-parameters"]) {
                    P5V.parameters = W9V.clone(B3V);
                    if (P5V.parameters.yAxis) {
                        delete P5V.parameters.yAxis.yAxisPlotter;
                    }
                }
                if (S5V["exclude-studies"] && B3V.bucket == "study") continue;
                if (S5V["exclude-generated"] && o5V.generator) continue;
                C3V.push(P5V);
            }
        }
        function j5V(l5V, D5V, s5V) {
            return { symbol: l5V, symbolObject: D5V, periodicity: s5V.periodicity, interval: s5V.interval, timeUnit: s5V.timeUnit, setSpan: s5V.setSpan };
        }
        if (S5V["breakout-equations"]) {
            p5V = {};
            for (var d3V = 0; d3V < C3V.length; d3V++) {
                g3V = C3V[d3V].symbol;
                if (this.isEquationChart(g3V)) {
                    a5V = W9V.formatEquation(g3V);
                    if (a5V) {
                        r5V = a5V.symbols;
                        for (var F5V = +"0"; F5V < r5V.length; F5V++) {
                            p5V[r5V[F5V]] = j5V(r5V[F5V], C3V[d3V].symbolObject, C3V[d3V]);
                        }
                    }
                } else {
                    p5V[g3V] = j5V(g3V, C3V[d3V].symbolObject, C3V[d3V]);
                }
            }
            C3V = [];
            for (var Y5V in p5V) {
                C3V.push(p5V[Y5V]);
            }
        }
        return C3V;
    };
    W9V.ChartEngine.prototype.setDisplayDate = function (e5V) {
        R1aa.X19();
        var K5V, u5V, V5V;
        if (W9V.ChartEngine.isDailyInterval(this.layout.interval)) {
            return;
        }
        K5V = e5V.DT;
        R1aa.T3k(72);
        var c61 = R1aa.v3k(12, 338796, 17, 20000);
        u5V = K5V.getSeconds() * c61 + K5V.getMilliseconds();
        if (n9V.Date && this.displayZone) {
            V5V = new n9V.Date(K5V.getTime(), this.displayZone);
            K5V = new Date(V5V.getFullYear(), V5V.getMonth(), V5V.getDate(), V5V.getHours(), V5V.getMinutes());
            K5V = new Date(K5V.getTime() + u5V);
        }
        e5V.displayDate = K5V;
    };
    W9V.ChartEngine.prototype.setDisplayDates = function (b5V) {
        var U5V;
        if (!b5V) {
            return;
        }
        if (W9V.ChartEngine.isDailyInterval(this.layout.interval)) {
            return;
        }
        for (var J5V = 0; J5V < b5V.length; J5V++) {
            U5V = b5V[J5V];
            if (U5V.DT) {
                this.setDisplayDate(U5V);
            }
        }
    };
    W9V.ChartEngine.prototype.setTimeZone = function (z5V, I5V) {
        var N5V, O5V, A5V, E5V, t5V;
        if (!n9V.Date) {
            this.timeZoneOffset = 0;
            return;
        }
        N5V = new Date();
        O5V = N5V.getTimezoneOffset();
        A5V = O5V;
        E5V = O5V;
        if (z5V) {
            this.dataZone = z5V;
        }
        if (this.dataZone) {
            A5V = new n9V.Date(N5V, this.dataZone).getTimezoneOffset();
        }
        if (I5V) {
            this.displayZone = I5V;
        }
        if (this.displayZone) {
            E5V = new n9V.Date(N5V, this.displayZone).getTimezoneOffset();
        }
        R1aa.T3k(136);
        R1aa.X19();
        this.timeZoneOffset = R1aa.j3k(O5V, E5V, O5V, A5V);
        for (var M5V in this.charts) {
            t5V = this.charts[M5V];
            this.setDisplayDates(t5V.masterData);
        }
        this.preferences.timeZone = I5V;
        this.changeOccurred("preferences");
        this.createDataSet();
    };
    W9V.ChartEngine.prototype.updateChartData = function (y5V, m5V, W5V) {
        var W89 = R1aa;
        var k4T, C4T, p8V, F8V, w5V, i5V, H8V, x5V, v5V, d5V, q5V, c5V, n5V, g5V, n4T, h5V, R5V, X5V, C5V, G5V, o8V, i4T, j8V, r8V, H4T, Z8V, f5V, T8V, S8V, P8V, Q5V;
        k4T = "up";
        k4T += "dateChartDat";
        function Y8V() {
            var K4T, O8V, J8V, b4T, N8V, I8V, V8V, e8V, u8V, b8V, U8V;
            K4T = "wee";
            K4T += "k";
            if (!W9V.Market || !m5V.market) {
                return;
            }
            O8V = { market_tz: W9V.getFromNS(m5V, "market.market_def.market_tz", null) };
            J8V = i5V.interval;
            if (J8V == "month" || J8V == K4T) {
                b4T = "d";
                b4T += "a";
                b4T += "y";
                if (!x5V.dontRoll) {
                    J8V = b4T;
                }
                O8V = x5V.chart.market.market_def;
            }
            N8V = new W9V.Market(O8V);
            I8V = { begin: w5V && w5V.length ? w5V[w5V.length - 1].DT : y5V.DT, interval: J8V, periodicity: 1, timeUnit: i5V.timeUnit };
            V8V = N8V.newIterator(I8V);
            e8V = V8V.next();
            if (!w5V) {
                y5V.DT = new Date(+V8V.previous());
            } else if (y5V.DT < e8V) {
                u8V = +"0";
                U8V = V8V.previous();
                b8V = y5V.DT;
                W5V.appending = !!{};
                while (b8V < U8V && u8V < 1000) {
                    W5V.appending = ![];
                    U8V = V8V.previous();
                    u8V++;
                }
                y5V.DT = U8V;
                W5V.updating = !W5V.appending;
            } else if (y5V.DT >= e8V) {
                u8V = 0;
                b8V = y5V.DT;
                while (b8V > e8V && u8V < 1000) {
                    y5V.DT = e8V;
                    e8V = V8V.next();
                    u8V++;
                }
                W5V.appending = !!{};
            }
        }
        k4T += "a";
        C4T = "ap";
        C4T += "pendM";
        C4T += "asterData";
        function k8V() {
            x5V.createDataSet(null, null, W5V);
            x5V.draw();
            x5V.updateChartAccessories();
            W89.L3k(64);
            x5V.streamParameters.count = W89.v3k("0", 240598592);
            W89.L3k(124);
            x5V.streamParameters.timeout = -W89.v3k("1", 1);
        }
        if (!W5V) {
            W5V = {};
        }
        if (!m5V) {
            m5V = this.chart;
        }
        p8V = !!0;
        F8V = !!"";
        w5V = m5V.masterData;
        i5V = this.layout;
        H8V = this.dataZone;
        x5V = this;
        v5V = W5V.secondarySeries;
        c5V = W9V.isValidNumber;
        function K8V(W8V, m8V) {
            W89.X19();
            var v8V, d6a, m6a, P6a, c4T;
            v8V = w5V[W8V];
            if (v5V) {
                v8V = v8V[v5V] || {};
            }
            if (m8V.Close === null) {
                if (v8V.Open !== undefined) {
                    m8V.Open = null;
                }
                if (v8V.High !== undefined) {
                    m8V.High = null;
                }
                if (v8V.Low !== undefined) {
                    m8V.Low = null;
                }
                if (v8V.Volume !== undefined) {
                    m8V.Volume = null;
                }
            } else {
                if (p8V) {
                    if (m8V.Volume) {
                        d6a = -844890453;
                        m6a = 810748544;
                        P6a = 2;
                        for (var j6a = +"1"; W89.J4a(j6a.toString(), j6a.toString().length, 56612) !== d6a; j6a++) {
                            m8V.Volume = parseInt(m8V.Volume, 74);
                            P6a += 2;
                        }
                        if (W89.G4a(P6a.toString(), P6a.toString().length, 54497) !== m6a) {
                            m8V.Volume = parseInt(m8V.Volume, 74);
                        }
                        m8V.Volume = parseInt(m8V.Volume, +"10");
                    }
                    if (!F8V) {
                        m8V.Volume += v8V.Volume;
                    }
                } else {
                    if (!c5V(m8V.Volume) && v8V.Volume) {
                        m8V.Volume = v8V.Volume;
                    }
                }
                if (!W5V.allowReplaceOHL) {
                    if (c5V(v8V.Open)) {
                        m8V.Open = v8V.Open;
                    }
                    if (c5V(v8V.High) && c5V(m8V.High)) {
                        if (v8V.High > m8V.High) {
                            m8V.High = v8V.High;
                        }
                    }
                    if (c5V(v8V.Low) && c5V(m8V.Low)) {
                        if (v8V.Low < m8V.Low) {
                            m8V.Low = v8V.Low;
                        }
                    }
                }
                ["Close", "Open", "High", "Low", "Bid", "Ask"].forEach(function (n8V) {
                    if (!c5V(m8V[n8V])) {
                        m8V[n8V] = v8V[n8V];
                    }
                });
                for (d5V in m5V.series) {
                    c4T = "u";
                    c4T += "ndefined";
                    q5V = m5V.series[d5V].parameters.symbolObject.symbol;
                    if (typeof m8V[q5V] == "undefined" && typeof v8V[q5V] != c4T) {
                        m8V[q5V] = v8V[q5V];
                    }
                }
            }
        }
        if (!W5V.noCleanupDates) {
            this.doCleanupDates(y5V, i5V.interval);
        }
        if (W5V.useAsLastSale || (y5V.constructor == Object && (y5V.Last || y5V.Last === ("0" ^ 0)))) {
            s8V();
        }
        if (y5V && y5V.constructor == Object) {
            y5V = [y5V];
        }
        if (!y5V || !y5V.length) {
            return;
        }
        if (this.runPrepend(C4T, [y5V, m5V, W5V])) {
            return;
        }
        function s8V() {
            var A8V, L7a, j7a, O7a;
            p8V = !!{};
            if (W5V.useAsLastSale && W5V.useAsLastSale.aggregatedVolume) {
                F8V = !![];
            }
            if (y5V.constructor === Array) {
                A8V = y5V[y5V.length - +"1"];
                y5V = {};
                y5V.DT = A8V.DT;
                y5V.Close = A8V.Close;
                y5V.Volume = A8V.Volume;
            } else if (y5V.Last) {
                y5V.Close = y5V.Last;
                delete y5V.Last;
            }
            if (y5V.DT && Object.prototype.toString.call(y5V.DT) != "[object Date]") {
                y5V.DT = new Date(y5V.DT);
            }
            if (!y5V.DT || y5V.DT == "Invalid Date") {
                L7a = 1278392075;
                j7a = -1634015244;
                O7a = 2;
                for (var J7a = 1; W89.J4a(J7a.toString(), J7a.toString().length, 35057) !== L7a; J7a++) {
                    y5V.DT = new Date();
                    O7a += 2;
                }
                if (W89.G4a(O7a.toString(), O7a.toString().length, 51553) !== j7a) {
                    y5V.DT = new Date();
                }
                y5V.DT = new Date();
            }
            if (i5V.interval != "tick") {
                Y8V();
            }
            y5V.Open = y5V.Close;
            y5V.High = y5V.Close;
            y5V.Low = y5V.Close;
        }
        if (this.runPrepend("updateChartData", [y5V, m5V, W5V])) {
            return;
        }
        if (!w5V) {
            w5V = [];
        }
        W89.L3k(8);
        var C61 = W89.j3k(10, 12, 3);
        n5V = w5V.length - C61;
        g5V = !!"";
        if (W5V.fillGaps) {
            l8V();
        }
        if (!y5V.length) {
            return;
        }
        function l8V() {
            var E8V, z8V, M8V;
            E8V = null;
            z8V = 0;
            if (w5V.length) {
                E8V = x5V.getFirstLastDataRecord(w5V, v5V || m5V.defaultPlotField, !!{});
                if (E8V) {
                    if (y5V[y5V.length - ("1" << 6451616)].DT <= E8V.DT) {
                        return;
                    }
                    for (; z8V < y5V.length; z8V++) {
                        if (+y5V[z8V].DT == +E8V.DT) {
                            if (x5V.getFirstLastDataRecord([y5V[z8V]], v5V || m5V.defaultPlotField)) {
                                E8V = null;
                            }
                            break;
                        } else if (y5V[z8V].DT > E8V.DT) break;
                    }
                }
            }
            W89.K19();
            M8V = y5V.slice(z8V);
            if (E8V) {
                M8V.unshift(v5V ? E8V[v5V] : E8V);
            }
            M8V = x5V.doCleanupGaps(M8V, m5V);
            if (E8V) {
                M8V.shift();
            }
            y5V = y5V.slice(0, z8V).concat(M8V);
        }
        for (var L5V = 0; L5V < y5V.length; L5V++) {
            n4T = "[object ";
            n4T += "Dat";
            n4T += "e]";
            h5V = y5V[L5V];
            R5V = h5V.DT;
            X5V = h5V.Date;
            if (R5V && Object.prototype.toString.call(R5V) != n4T) {
                h5V.DT = R5V = new Date(R5V);
            }
            if (R5V) {
                if (!X5V || X5V.length != 17) {
                    h5V.Date = W9V.yyyymmddhhmmssmmm(h5V.DT);
                }
            }
            if (!R5V) {
                R5V = h5V.DT = W9V.strToDateTime(X5V);
            }
            if (!c5V(h5V.Close) && c5V(h5V.Value)) {
                h5V.Close = h5V.Value;
            }
            while (n5V >= 0 && n5V < w5V.length) {
                C5V = w5V[n5V].DT;
                if (!C5V) {
                    C5V = W9V.strToDateTime(w5V[n5V].Date);
                }
                if (C5V.getTime() <= R5V.getTime()) {
                    g5V = !!1;
                    W89.T3k(21);
                    G5V = W89.v3k(2147483647, "0");
                    if (C5V.getTime() < R5V.getTime()) {
                        if (n5V < w5V.length - 1) {
                            o8V = w5V[n5V + +"1"].DT || W9V.strToDateTime(w5V[n5V + 1].Date);
                            if (o8V.getTime() <= R5V.getTime()) {
                                n5V++;
                                continue;
                            }
                        }
                        G5V = 1;
                    }
                    if (W5V.deleteItems) {
                        if (!G5V) {
                            D8V(n5V, R5V);
                        }
                        break;
                    } else {
                        i4T = "t";
                        i4T += "i";
                        i4T += "c";
                        i4T += "k";
                        if (i5V.interval == i4T && W5V.firstLoop !== !1) {
                            G5V = 1;
                        }
                        if (!G5V) {
                            K8V(n5V, h5V);
                        }
                        if (c5V(h5V.Close)) {
                            if (!c5V(h5V.Open)) {
                                h5V.Open = h5V.Close;
                            }
                            j8V = Math.max(h5V.Open, h5V.Close);
                            r8V = Math.min(h5V.Open, h5V.Close);
                            if (!c5V(h5V.High) || h5V.High < j8V) {
                                h5V.High = j8V;
                            }
                            if (!c5V(h5V.Low) || h5V.Low > r8V) {
                                h5V.Low = r8V;
                            }
                        }
                        if (h5V.Volume && !c5V(h5V.Volume)) {
                            h5V.Volume = parseInt(h5V.Volume, 10);
                        }
                        n5V += G5V;
                        if (v5V) {
                            H4T = "t";
                            H4T += "i";
                            H4T += "c";
                            H4T += "k";
                            if (y5V.length - L5V < 50) {
                                this.updateCurrentMarketData(h5V, m5V, v5V, { fromTrade: !!"1" });
                            }
                            if (i5V.interval != H4T || h5V.Close !== undefined) {
                                if (G5V) {
                                    w5V.splice(n5V, 0, { DT: h5V.DT });
                                    this.setDisplayDate(w5V[n5V]);
                                }
                                w5V[n5V][v5V] = h5V;
                            }
                        } else {
                            if (y5V.length - L5V < ("50" & 2147483647)) {
                                this.updateCurrentMarketData(h5V, m5V, null, { fromTrade: !![] });
                            }
                            if (i5V.interval != "tick" || h5V.Close !== undefined) {
                                w5V.splice(n5V, G5V ? "0" & 2147483647 : +"1", h5V);
                                this.setDisplayDate(h5V);
                            }
                        }
                    }
                    break;
                }
                n5V += g5V ? 1 : -1;
            }
            if (n5V < 0) {
                if (v5V) {
                    this.updateCurrentMarketData(h5V, m5V, v5V, { fromTrade: !0 });
                    if (i5V.interval != "tick" || h5V.Close !== undefined) {
                        w5V.splice(0, 0, { DT: h5V.DT });
                        this.setDisplayDate(w5V[0]);
                        w5V[0][v5V] = h5V;
                    }
                } else {
                    this.updateCurrentMarketData(h5V, m5V, null, { fromTrade: !"" });
                    if (i5V.interval != "tick" || h5V.Close !== undefined) {
                        w5V.splice(0, +"0", h5V);
                        this.setDisplayDate(h5V);
                    }
                }
                g5V = !![];
                n5V = 0;
            }
        }
        if (w5V.length) {
            this.masterData = m5V.masterData = w5V;
        }
        if (this.maxMasterDataSize) {
            w5V = m5V.masterData = this.masterData = w5V.slice(-this.maxMasterDataSize);
        }
        Z8V = v5V ? this.getSeries({ symbol: v5V, chart: m5V }) : [m5V];
        function D8V(y8V, w8V) {
            var t8V, h8V, l4T;
            if (v5V) {
                delete w5V[y8V][v5V];
                if (x5V.cleanupGaps) {
                    t8V = { DT: w8V, Close: null };
                    if (x5V.cleanupGaps != "gap" && w5V[y8V - 1] && w5V[y8V - 1][v5V]) {
                        t8V.Close = w5V[y8V - 1][v5V].Close;
                        t8V.High = t8V.Low = t8V.Open = t8V.Close;
                        t8V.Volume = 0;
                    }
                    w5V[y8V][v5V] = t8V;
                }
            } else {
                h8V = w5V.splice(y8V, 1)[0];
                t8V = { DT: h8V.DT, Close: null, needed: !!"" };
                for (d5V in m5V.series) {
                    q5V = m5V.series[d5V].parameters.symbolObject.symbol;
                    if (typeof h8V[q5V] != "undefined") {
                        t8V[q5V] = h8V[q5V];
                        delete t8V.needed;
                    }
                }
                if (x5V.cleanupGaps && x5V.cleanupGaps != "gap") {
                    l4T = "g";
                    l4T += "a";
                    l4T += "p";
                    delete t8V.needed;
                    if (x5V.cleanupGaps != l4T && w5V[y8V - 1]) {
                        t8V.Close = w5V[y8V - 1].Close;
                        t8V.High = t8V.Low = t8V.Open = t8V.Close;
                        t8V.Volume = 0;
                    }
                }
                if (t8V.needed !== !!"") {
                    w5V.splice(y8V, 0, t8V);
                    x5V.setDisplayDate(t8V);
                }
            }
        }
        for (var B5V = 0; B5V < Z8V.length; B5V++) {
            f5V = Z8V[B5V];
            if (!f5V.endPoints.begin || f5V.endPoints.begin > y5V[0].DT) {
                f5V.endPoints.begin = y5V[0].DT;
            }
            if (!f5V.endPoints.end || f5V.endPoints.end < y5V[y5V.length - 1].DT) {
                f5V.endPoints.end = y5V[y5V.length - 1].DT;
            }
            T8V = (f5V.parameters && f5V.parameters.field) || m5V.defaultPlotField;
            S8V = this.getFirstLastDataRecord(y5V, T8V, !!1);
            if (S8V && (!f5V.lastQuote || f5V.lastQuote.DT <= S8V.DT)) {
                f5V.lastQuote = S8V;
            }
            if (v5V && W5V.deleteItems) {
                f5V.lastQuote = this.getFirstLastDataRecord(w5V, v5V, !![])[v5V];
            }
        }
        for (var a8V in this.plugins) {
            P8V = this.plugins[a8V];
            if (P8V.display) {
                if (P8V.appendMasterData) {
                    P8V.appendMasterData(this, y5V, m5V);
                }
            }
        }
        if (!this.masterData || !this.masterData.length) {
            this.masterData = w5V;
        }
        if (!W5V.noCreateDataSet) {
            Q5V = this.streamParameters;
            if (++Q5V.count > Q5V.maxTicks || W5V.bypassGovernor) {
                clearTimeout(Q5V.timeout);
                k8V();
            } else {
                if (Q5V.timeout == -1) {
                    Q5V.timeout = setTimeout(k8V, Q5V.maxWait);
                }
            }
        }
        this.runAppend("appendMasterData", arguments);
        this.runAppend(k4T, arguments);
    };
    W9V.ChartEngine.prototype.updateCurrentMarketData = function (x8V, f8V, R8V, i8V) {
        var Q8V, q8V, g8V, L8V, C8V, c8V, Q7a, t7a, U7a, d8V, G8V;
        if (!x8V || !x8V.DT) {
            return;
        }
        if (!f8V) {
            f8V = this.chart;
        }
        Q8V = i8V && i8V.fromTrade;
        q8V = x8V.DT;
        if (!Q8V && this.layout.interval != "tick" && f8V.market) {
            if (f8V.market.market_def) {
                if (!f8V.market.isMarketDate(x8V.DT)) {
                    return;
                }
                if (!W9V.ChartEngine.isDailyInterval(this.layout.interval) && f8V.market.getSession(x8V.DT) === null) {
                    return;
                }
            }
            g8V = { begin: x8V.DT, interval: this.layout.interval, periodicity: this.layout.periodicity, timeUnit: this.layout.timeUnit };
            L8V = new W9V.Market(f8V.market.market_def);
            if (this.extendedHours && this.extendedHours.filter) {
                L8V.enableAllAvailableSessions();
            }
            C8V = L8V.newIterator(g8V);
            C8V.next();
            x8V.DT = C8V.previous();
        }
        if (this.runPrepend("updateCurrentMarketData", arguments)) {
            return;
        }
        c8V = f8V.currentMarketData;
        if (R8V) {
            if (!c8V[R8V]) {
                c8V[R8V] = {};
            }
            Q7a = -8302011;
            t7a = -1258339606;
            U7a = 2;
            for (var S7a = 1; R1aa.J4a(S7a.toString(), S7a.toString().length, 30044) !== Q7a; S7a++) {
                c8V = c8V[R8V];
                U7a += +"2";
            }
            if (R1aa.J4a(U7a.toString(), U7a.toString().length, 89155) !== t7a) {
                c8V = c8V[R8V];
            }
            c8V = c8V[R8V];
        }
        ["Last", "Bid", "Ask"].forEach(function (X8V) {
            R1aa.X19();
            if (x8V[X8V] && typeof x8V[X8V] == "number") {
                if (!c8V[X8V] || !c8V[X8V].DT || c8V[X8V].DT <= x8V.DT) {
                    c8V[X8V] = { DT: x8V.DT, Price: x8V[X8V], Size: x8V[X8V + "Size"], Timestamp: q8V };
                }
            }
        });
        ["BidL2", "AskL2"].forEach(function (B8V) {
            R1aa.K19();
            if (x8V[B8V] && x8V[B8V] instanceof Array) {
                if (!c8V[B8V] || !c8V[B8V].DT || c8V[B8V].DT <= x8V.DT) {
                    c8V[B8V] = { DT: x8V.DT, Price_Size: x8V[B8V], Timestamp: q8V };
                }
            }
        });
        if (x8V.Close && (!c8V.Last || c8V.Last.DT <= x8V.DT)) {
            d8V = x8V.Close;
            G8V = i8V && i8V.finalClose;
            if (G8V || G8V === ("0" & 2147483647)) {
                d8V = G8V;
            }
            c8V.Last = { DT: x8V.DT, Price: d8V, Size: x8V.LastSize === undefined && this.layout.interval == "tick" ? x8V.Volume : x8V.LastSize, Timestamp: x8V.LastTime || q8V };
        }
        c8V.touched = new Date();
        if (!Q8V) {
            delete x8V.Last;
        }
        this.runAppend("updateCurrentMarketData", arguments);
    };
    W9V.ChartEngine.prototype.clearCurrentMarketData = function (F1V, j1V) {
        var e4T, S1V, P1V, p1V;
        e4T = "clearCurrentMa";
        e4T += "rketData";
        if (this.runPrepend("clearCurrentMarketData", arguments)) {
            return;
        }
        P1V = [];
        if (!F1V) {
            for (S1V in this.charts) {
                P1V.push(this.charts[S1V]);
            }
        } else {
            P1V.push(F1V);
        }
        for (S1V = 0; S1V < P1V.length; S1V++) {
            p1V = P1V[S1V].currentMarketData;
            if (j1V) {
                delete p1V[j1V];
            } else {
                for (var r1V in p1V) {
                    p1V[r1V] = undefined;
                }
            }
        }
        R1aa.X19();
        this.runAppend(e4T, arguments);
    };
};
d7w = (o1V) => {
    var q9a, T9a, D9a, Z1V;
    q9a = 459759647;
    T9a = -1842943387;
    D9a = 2;
    for (var z9a = "1" | 0; R1aa.J4a(z9a.toString(), z9a.toString().length, "99068" * 1) !== q9a; z9a++) {
        Z1V = o1V.CIQ;
        D9a += 2;
    }
    if (R1aa.G4a(D9a.toString(), D9a.toString().length, 7613) !== T9a) {
        Z1V = o1V.CIQ;
    }
    Z1V.ChartEngine.prototype.changeOccurred = function (a1V) {
        var T1V, f4T;
        T1V = { stx: this, symbol: this.chart.symbol, symbolObject: this.chart.symbolObject, layout: this.layout, drawings: this.drawingObjects };
        if (a1V == "theme") {
            this.dispatch("theme", T1V);
        }
        R1aa.X19();
        if (this.currentlyImporting) {
            return;
        }
        if (a1V == "layout") {
            this.dispatch("layout", T1V);
        } else if (a1V == "vector") {
            this.dispatch("drawing", T1V);
        } else if (a1V == "preferences") {
            f4T = "pre";
            f4T += "ferenc";
            f4T += "es";
            this.dispatch(f4T, T1V);
        }
    };
    Z1V.ChartEngine.prototype.startAsyncAction = function () {
        if (!this.pendingAsyncs) {
            this.pendingAsyncs = [];
        }
        this.pendingAsyncs.push(!![]);
    };
    Z1V.ChartEngine.prototype.registerChartDrawnCallback = function (k1V) {
        if (!this.asyncCallbacks) {
            this.asyncCallbacks = [];
        }
        this.asyncCallbacks.push(k1V);
        R1aa.K19();
        return { fc: k1V };
    };
    Z1V.ChartEngine.prototype.unregisterChartDrawnCallback = function (Y1V) {
        R1aa.K19();
        for (var H1V = "0" | 0; H1V < this.asyncCallbacks.length; H1V++) {
            if (this.asyncCallbacks[H1V] == Y1V.fc) {
                this.asyncCallbacks.splice(H1V, 1);
                return;
            }
        }
    };
    Z1V.ChartEngine.prototype.makeAsyncCallbacks = function () {
        if (!this.asyncCallbacks) {
            return;
        }
        if (!this.pendingAsyncs || !this.pendingAsyncs.length) {
            for (var s1V = 0; s1V < this.asyncCallbacks.length; s1V++) {
                this.asyncCallbacks[s1V]();
            }
        }
    };
    Z1V.ChartEngine.prototype.completeAsyncAction = function () {
        this.pendingAsyncs.pop();
        this.makeAsyncCallbacks();
    };
    Z1V.ChartEngine.prototype.addDomEventListener = function (l1V, D1V, K1V, V1V) {
        l1V.addEventListener(D1V, K1V, V1V);
        this.eventListeners.push({ element: l1V, event: D1V, function: K1V, options: V1V });
    };
    Z1V.ChartEngine.prototype.addEventListener = function (e1V, u1V) {
        var b1V;
        if (e1V === ((4110, 553.63) <= 320.74 ? ((7974, 6770) != (951, 5640) ? (326.7 < (945.97, 568.68) ? (0x21c6, !!"1") : "0xf69" >> 1841438784) : (!"", 0xb1e)) : "*")) {
            for (var U1V in this.callbackListeners) {
                this.callbackListeners[U1V].push(u1V);
            }
        } else if (e1V instanceof Array) {
            for (var J1V = 0; J1V < e1V.length; J1V++) {
                this.callbackListeners[e1V[J1V]].push(u1V);
            }
        } else {
            b1V = this.callbackListeners[e1V];
            if (!b1V) {
                throw new Error("Attempted to add an invalid listener.");
            }
            b1V.push(u1V);
        }
        R1aa.X19();
        return { type: e1V, cb: u1V };
    };
    Z1V.ChartEngine.prototype.removeEventListener = function (O1V, E1V) {
        var I1V, N1V, h4T;
        if (!O1V || typeof O1V != "object") {
            O1V = { type: O1V, cb: E1V };
        }
        I1V = function (M1V, t1V) {
            for (var z1V = 0; z1V < M1V.length; z1V++) {
                if (M1V[z1V] === t1V) {
                    M1V.splice(z1V, 1);
                    return;
                }
            }
        };
        N1V = this.callbackListeners;
        if (O1V.type === (9006 >= "2709" << 1604317984 ? ((322.06, 382.22) != 9815 ? "*" : 2.1e2) : ("M", !{}))) {
            for (var A1V in N1V) {
                I1V(N1V[A1V], O1V.cb);
            }
            return;
        }
        if (!N1V[O1V.type]) {
            h4T = "Attempted to remov";
            h4T += "e an invalid l";
            h4T += "istener.";
            throw new Error(h4T);
        }
        I1V(N1V[O1V.type], O1V.cb);
    };
    Z1V.ChartEngine.prototype.dispatch = function (v1V, m1V) {
        var y1V;
        y1V = this.callbackListeners[v1V];
        if (y1V) {
            for (var h1V = 0; h1V < y1V.length; h1V++) {
                if (y1V[h1V].call(this, m1V) === !"") {
                    return !"";
                }
            }
        }
        y1V = this.callbackListeners["*"];
        R1aa.K19();
        if (y1V) {
            for (var w1V = 0; w1V < y1V.length; w1V++) {
                if (y1V[w1V].call(this, m1V) === !!1) {
                    return !!{};
                }
            }
        }
        return ![];
    };
    Z1V.ChartEngine.prototype.updateListeners = function (x1V) {
        var W1V;
        for (var n1V in this.plugins) {
            W1V = this.plugins[n1V];
            if (W1V.display && W1V.listener) {
                W1V.listener(this, x1V);
            }
        }
    };
};
g7w = (f1V) => {
    var c1V;
    c1V = f1V.CIQ;
    c1V.ChartEngine.prototype.prepend = function (G1V, q1V) {
        var R1V, i1V;
        R1aa.K19();
        R1aa.T3k(6);
        R1V = R1aa.j3k("prepend", G1V);
        if (this instanceof c1V.ChartEngine) {
            i1V = this.hasOwnProperty(R1V) ? this[R1V] : [];
            this[R1V] = [q1V].concat(i1V);
        } else {
            i1V = c1V.ChartEngine.prototype[R1V] || [];
            c1V.ChartEngine.prototype[R1V] = [q1V].concat(i1V);
        }
        return { method: R1V, func: q1V };
    };
    c1V.ChartEngine.prototype.append = function (d1V, C1V) {
        var Q1V, L1V;
        R1aa.L3k(6);
        Q1V = R1aa.v3k("append", d1V);
        if (this instanceof c1V.ChartEngine) {
            L1V = this.hasOwnProperty(Q1V) ? this[Q1V] : [];
            this[Q1V] = L1V.concat(C1V);
        } else {
            L1V = c1V.ChartEngine.prototype[Q1V] || [];
            c1V.ChartEngine.prototype[Q1V] = L1V.concat(C1V);
        }
        return { method: Q1V, func: C1V };
    };
    c1V.ChartEngine.prototype.runPrepend = function (p4V, F4V, S4V) {
        var X1V, g1V, P4V;
        R1aa.L3k(6);
        X1V = R1aa.j3k("prepend", p4V);
        g1V = this.hasOwnProperty(X1V) ? this[X1V] : [];
        g1V = g1V.concat(c1V.ChartEngine.prototype[X1V] || []);
        if (!g1V.length) {
            return !"1";
        }
        if (!S4V) {
            S4V = this;
        }
        for (var B1V = "0" & 2147483647; B1V < g1V.length; B1V++) {
            P4V = g1V[B1V].apply(S4V, F4V);
            if (P4V) {
                return P4V;
            }
        }
        return !!"";
    };
    c1V.ChartEngine.prototype.runAppend = function (a4V, k4V, o4V) {
        var r4V, j4V, T4V;
        R1aa.L3k(6);
        r4V = R1aa.j3k("append", a4V);
        j4V = this.hasOwnProperty(r4V) ? this[r4V] : [];
        j4V = j4V.concat(c1V.ChartEngine.prototype[r4V] || []);
        if (!j4V.length) {
            return !{};
        }
        R1aa.K19();
        if (!o4V) {
            o4V = this;
        }
        for (var Z4V = 0; Z4V < j4V.length; Z4V++) {
            T4V = j4V[Z4V].apply(o4V, k4V);
            if (T4V) {
                return T4V;
            }
        }
        return !{};
    };
    R1aa.X19();
    c1V.ChartEngine.prototype.removeInjection = function (s4V) {
        R1aa.K19();
        var Y4V, H4V;
        Y4V = s4V.method;
        if (this instanceof c1V.ChartEngine) {
            if (!this[Y4V]) {
                return;
            }
            for (H4V = 0; H4V < this[Y4V].length; H4V++) {
                if (this[Y4V][H4V] == s4V.func) {
                    this[Y4V].splice(H4V, 1);
                    return;
                }
            }
        } else {
            if (!c1V.ChartEngine.prototype[Y4V]) {
                return;
            }
            for (H4V = 0; H4V < c1V.ChartEngine.prototype[Y4V].length; H4V++) {
                if (c1V.ChartEngine.prototype[Y4V][H4V] == s4V.func) {
                    c1V.ChartEngine.prototype[Y4V].splice(H4V, 1);
                    return;
                }
            }
        }
    };
    c1V.ChartEngine.prototype.remove = function (l4V) {
        var u89 = R1aa;
        var s4T;
        if (this instanceof c1V.ChartEngine) {
            u89.T3k(6);
            delete this[u89.j3k("append", l4V)];
            u89.T3k(6);
            delete this[u89.j3k("prepend", l4V)];
        } else {
            s4T = "appe";
            s4T += "nd";
            u89.L3k(6);
            delete c1V.ChartEngine.prototype[u89.j3k(s4T, l4V)];
            u89.T3k(6);
            delete c1V.ChartEngine.prototype[u89.j3k("prepend", l4V)];
        }
    };
};
X7w = (K4V) => {
    var D4V, V4V;
    D4V = K4V.CIQ;
    V4V = K4V.timezoneJS;
    D4V.ChartEngine.prototype.convertToDataZone = function (u4V) {
        var e4V;
        if ((u4V || u4V === 0) && this.dataZone) {
            e4V = D4V.convertTimeZone(u4V, null, this.dataZone);
            u4V = new Date(e4V.getFullYear(), e4V.getMonth(), e4V.getDate(), e4V.getHours(), e4V.getMinutes(), e4V.getSeconds(), e4V.getMilliseconds());
        }
        return u4V;
    };
    D4V.ChartEngine.prototype.debug = function () {};
    D4V.ChartEngine.prototype.fps = function (J4V, O4V) {
        var u4T, W4T, N4V, b4V, I4V;
        u4T = " sec";
        u4T += "o";
        u4T += "nd";
        u4T += "s";
        W4T = "Running ";
        W4T += "fps() fo";
        R1aa.X19();
        function U4V() {
            var X79 = R1aa;
            var A4V, p4T, E4V;
            A4V = (new Date().getTime() - N4V) / +"1000";
            if (A4V > J4V) {
                p4T = "F";
                p4T += "PS=";
                X79.L3k(32);
                E4V = X79.v3k(A4V, b4V);
                X79.T3k(6);
                console.log(X79.j3k(p4T, E4V));
                if (O4V) {
                    O4V(E4V);
                }
                return;
            }
            I4V.draw();
            b4V++;
            if (D4V.ChartEngine.useAnimation) {
                requestAnimationFrame(U4V);
            } else {
                setTimeout(U4V, 0);
            }
        }
        W4T += "r ";
        J4V = J4V || 5;
        N4V = new Date().getTime();
        b4V = 0;
        I4V = this;
        R1aa.L3k(56);
        console.log(R1aa.v3k(u4T, W4T, J4V));
        U4V();
    };
    D4V.ChartEngine.htmlControls = {
        mSticky: '<div class="stx_sticky"> <span class="mStickyInterior"></span></div>',
        iconsTemplate: '<div class="stx-panel-control"><div class="stx-panel-title"></div><div class="stx-panel-legend"></div></div>',
    };
    D4V.ChartEngine.prototype.setChartType = function (M4V) {
        R1aa.X19();
        var z4V, t4V;
        z4V = this.layout;
        t4V = this.chart;
        if (z4V.aggregationType != "ohlc") {
            z4V.aggregationType = "ohlc";
            if (t4V.canvas) {
                this.createDataSet();
            }
        }
        z4V.chartType = M4V;
        this.setMainSeriesRenderer();
        if (this.mainSeriesRenderer.isAggregation && this.setAggregationType) {
            return this.setAggregationType(M4V);
        }
        t4V.defaultChartStyleConfig = { type: M4V };
        if (this.displayInitialized) {
            this.draw();
        }
        this.changeOccurred("layout");
    };
    D4V.ChartEngine.prototype.setChartScale = function (y4V) {
        var o4T, h4V;
        o4T = "l";
        o4T += "ine";
        o4T += "ar";
        if (!y4V) {
            y4V = o4T;
        }
        h4V = { percent: !!{}, relative: !!{} };
        this.layout.chartScale = y4V;
        if (this.chart.canvas) {
            this.draw();
        }
        this.changeOccurred("layout");
    };
    D4V.ChartEngine.prototype.checkLogScale = function () {
        var X4T, Y4T, w4V;
        X4T = "ch";
        X4T += "eckL";
        X4T += "ogSca";
        X4T += "le";
        Y4T = "l";
        Y4T += "o";
        Y4T += "g";
        if (this.runPrepend("checkLogScale", arguments)) {
            return;
        }
        if (this.layout.chartScale !== Y4T) {
            return !!0;
        }
        w4V = !1;
        if (this.chart.yAxis.lowValue <= 0) {
            this.setChartScale("linear");
            this.dispatch("notification", "logdeactivated");
            w4V = !!"1";
        }
        this.runAppend(X4T, arguments);
        R1aa.X19();
        return w4V;
    };
    D4V.ChartEngine.prototype.setAdjusted = function (m4V) {
        this.layout.adj = m4V;
        if (this.chart.canvas) {
            this.createDataSet();
            this.draw();
        }
        this.changeOccurred("layout");
    };
    D4V.ChartEngine.prototype.padOutPrice = function (W4V, n4V) {
        var l89 = R1aa;
        var x4V, v4V, c4V, f4V;
        if (W4V !== 0 && (!W4V || typeof W4V != "number")) {
            return "";
        }
        if (!n4V && n4V !== 0) {
            n4V = W4V;
        }
        l89.T3k(6);
        x4V = l89.v3k("", n4V);
        v4V = 0;
        if (x4V.indexOf(9836 <= (397.07, +"3903") ? "971.62" * 1 : ".") > -1) {
            l89.T3k(67);
            var n61 = l89.v3k(9, 10, 2, 1);
            v4V = x4V.substring(x4V.indexOf(".")).length - n61;
        }
        if (n4V >= 1000) {
            v4V = Math.max(v4V, 0);
        } else if (n4V < 2) {
            v4V = Math.max(v4V, 4);
        } else {
            v4V = Math.max(v4V, 2);
        }
        c4V = this.internationalizer;
        if (c4V) {
            f4V = c4V.priceFormatters.length;
            if (v4V >= f4V) {
                l89.L3k(1);
                v4V = l89.j3k(f4V, 1);
            }
            W4V = c4V.priceFormatters[v4V].format(W4V);
        } else {
            W4V = W4V.toFixed(v4V);
        }
        return W4V;
    };
    D4V.ChartEngine.prototype.formatPrice = function (R4V, q4V) {
        var i4V, G4V, Q4V;
        if (R4V !== 0 && (!R4V || typeof R4V == "undefined")) {
            return "";
        }
        if (!q4V) {
            q4V = this.currentPanel;
        }
        if (!q4V) {
            q4V = this.chart.panel;
        }
        if (!q4V) {
            return R4V.toString();
        }
        i4V = q4V.decimalPlaces;
        if (!i4V && i4V !== 0) {
            i4V = q4V.chart.decimalPlaces;
        }
        if (!i4V && i4V !== 0) {
            return R4V.toString();
        }
        G4V = this.internationalizer;
        if (G4V) {
            Q4V = G4V.priceFormatters.length;
            if (i4V >= Q4V) {
                R1aa.T3k(137);
                i4V = R1aa.v3k(Q4V, "1");
            }
            R4V = G4V.priceFormatters[i4V].format(R4V);
        } else {
            R4V = R4V.toFixed(i4V);
        }
        return R4V;
    };
    D4V.ChartEngine.prototype.determineMinMax = function (H2V, g4V, B4V, s2V, Y2V, l2V, D2V, K2V, a2V) {
        var S2V, P2V, k2V, p2V, Z2V, C4V, X4V, o2V, r2V, L4V, d4V;
        R1aa.L3k(41);
        var i61 = R1aa.v3k(9, 0, 1, 8);
        S2V = Number.MAX_VALUE * i61;
        P2V = Number.MAX_VALUE;
        k2V = ![];
        p2V = H2V.length;
        if (!a2V) {
            a2V = [];
        }
        Z2V = [];
        if (Y2V) {
            p2V = Y2V;
        }
        for (var F2V = "0" & 2147483647; F2V <= p2V + 1; F2V++) {
            if (g4V.length) {
                if (F2V == p2V) {
                    C4V = this.getPreviousBar(this.chart, g4V[0], 0);
                } else if (F2V == p2V + ("1" - 0)) {
                    C4V = this.getNextBar(this.chart, g4V[0], p2V - ("1" ^ 0));
                } else {
                    C4V = H2V[F2V];
                }
            }
            if (!C4V) continue;
            if (!s2V) {
                if (C4V.transform) {
                    k2V = !"";
                    C4V = C4V.transform;
                } else if (k2V) continue;
            }
            X4V = 0;
            for (var j2V = 0; j2V < g4V.length; j2V++) {
                o2V = D4V.existsInObjectChain(C4V, g4V[j2V]);
                if (!o2V) continue;
                r2V = o2V.obj[o2V.member];
                if (typeof r2V == "number") {
                    r2V = [r2V];
                }
                for (var T2V = +"0"; T2V < r2V.length; T2V++) {
                    L4V = r2V[T2V];
                    if (l2V && L4V instanceof Array) {
                        L4V = L4V[0];
                    }
                    if (L4V || L4V === ("0" | 0)) {
                        if (B4V === !"" || (B4V instanceof Array && B4V.indexOf(g4V[j2V]) > -1)) {
                            X4V += L4V;
                            if (X4V > S2V) {
                                S2V = X4V;
                            }
                            if (X4V < P2V) {
                                P2V = X4V;
                            }
                        } else {
                            if (L4V > S2V) {
                                S2V = L4V;
                            }
                            if (L4V < P2V) {
                                P2V = L4V;
                            }
                            Z2V.push({ value: L4V, quote: C4V });
                        }
                    }
                }
            }
            if (B4V === !!"1" || (B4V instanceof Array && B4V.indexOf(g4V[j2V]) > -1)) {
                Z2V.push({ value: X4V, quote: C4V });
            }
        }
        d4V = [P2V, S2V];
        a2V.forEach(function (V2V) {
            R1aa.K19();
            d4V = V2V(Z2V, D2V, K2V) || d4V;
        });
        if (d4V[1] == Number.MAX_VALUE * -+"1") {
            d4V[1] = 0;
        }
        if (d4V[0] == Number.MAX_VALUE) {
            d4V[0] = 0;
        }
        return d4V;
    };
    D4V.ChartEngine.prototype.initializeDisplay = function (e2V) {
        var T89 = R1aa;
        var a4T, Z4T, J2V, O2V, A2V, b2V, h2V, w2V, N2V, M2V, n2V, t2V, U2V, u2V, v2V, I2V;
        function W2V(c2V, Q2V) {
            var X2V, R2V, y4T, q2V, S6V, d2V, P6V, f2V, i2V, G2V, F6V;
            X2V = !"1";
            R2V = b2V.layout && b2V.layout.studies && b2V.layout.studies[c2V.name];
            if (R2V && (!Q2V || Q2V.name == R2V.panel)) {
                for (var C2V in R2V.outputMap) {
                    J2V.push(C2V);
                    if (R2V.study) {
                        if (R2V.study.renderer) {
                            J2V = J2V.concat(D4V.createObjectChainNames(C2V, h2V));
                        } else if (!R2V.study.seriesFN) {
                            J2V = J2V.concat(D4V.createObjectChainNames(C2V, w2V));
                        }
                    }
                }
                for (var L2V = 0; L2V <= "2" << 947198048; L2V++) {
                    y4T = "_";
                    y4T += "h";
                    y4T += "is";
                    y4T += "t";
                    J2V.push(R2V.name + y4T + (L2V ? L2V : ""));
                }
                X2V = !"";
            }
            if (!Q2V) {
                return;
            }
            c2V.studies = [];
            c2V.renderers = [];
            if (X2V) {
                c2V.studies.push(c2V.name);
            }
            for (var B2V in m2V) {
                q2V = m2V[B2V];
                S6V = q2V.params;
                d2V = S6V.panel;
                if ((S6V.yAxis || !b2V.panels[d2V] || b2V.panels[d2V].yAxis) != c2V) continue;
                if (d2V != Q2V.name) continue;
                P6V = q2V.highLowBars ? h2V : w2V;
                A2V = q2V.bounded;
                for (var g2V = +"0"; g2V < q2V.seriesParams.length; g2V++) {
                    f2V = q2V.seriesParams[g2V];
                    if (f2V.hidden) continue;
                    i2V = void 0;
                    if (f2V.subField) {
                        i2V = D4V.createObjectChainNames(f2V.symbol, [f2V.subField]).concat(f2V.symbol);
                    } else if (f2V.symbol) {
                        i2V = D4V.createObjectChainNames(f2V.symbol, P6V).concat(f2V.symbol);
                    } else if (f2V.field) {
                        i2V = f2V.field;
                    } else if (c2V == e2V.panel.yAxis) {
                        i2V = P6V;
                    }
                    if (i2V) {
                        J2V = J2V.concat(i2V);
                    }
                    if (q2V.useSum) {
                        O2V = O2V.concat(i2V);
                    }
                }
                c2V.renderers.push(B2V);
            }
            for (var p6V in b2V.overlays) {
                G2V = b2V.overlays[p6V];
                if (G2V.panel != Q2V.name) continue;
                if (G2V.name == c2V.name) continue;
                F6V = G2V.getYAxis(b2V);
                if (F6V != c2V) continue;
                c2V.studies.push(G2V.name);
                if (e2V.includeOverlaysInMinMax) {
                    W2V({ name: G2V.name });
                }
            }
        }
        a4T = "C";
        a4T += "l";
        a4T += "os";
        a4T += "e";
        Z4T = "O";
        Z4T += "pe";
        Z4T += "n";
        if (this.runPrepend("initializeDisplay", arguments)) {
            return;
        }
        J2V = [];
        O2V = [];
        T89.X19();
        A2V = !!0;
        b2V = this;
        h2V = ["Close", Z4T, "High", "Low"];
        w2V = [e2V.defaultPlotField || a4T];
        var { mainSeriesRenderer: E2V } = this;
        var { dataSegment: z2V, seriesRenderers: m2V } = e2V;
        M2V = null;
        n2V = Math.floor((e2V.width - this.micropixels) / this.layout.candleWidth);
        if (e2V.scroll > e2V.maxTicks && e2V.maxTicks > n2V + 1) {
            T89.L3k(138);
            var H61 = T89.v3k(12, 15, 9, 1621);
            M2V = z2V.length - H61;
        }
        t2V = [];
        for (var x2V in this.panels) {
            U2V = this.panels[x2V];
            t2V = U2V.yaxisLHS.concat(U2V.yaxisRHS);
            for (var y2V = 0; y2V < t2V.length; y2V++) {
                u2V = t2V[y2V];
                J2V = [];
                O2V = [];
                v2V = e2V.transformFunc && u2V == e2V.panel.yAxis;
                W2V(u2V, U2V);
                if (!this.currentlyImporting && !u2V.renderers.length && !u2V.studies.length) {
                    this.deleteYAxisIfUnused(U2V, u2V);
                    continue;
                }
                if (E2V && E2V.determineMax) {
                    N2V = E2V.determineMax(z2V, J2V, O2V, !v2V, M2V, A2V, U2V, u2V);
                } else {
                    N2V = this.determineMinMax(z2V, J2V, O2V, !v2V, M2V, A2V, U2V, u2V);
                }
                if (this.baselineHelper) {
                    N2V = this.setBaselineMinMax(N2V, u2V);
                }
                u2V.lowValue = N2V[0];
                u2V.highValue = N2V[1];
                if (u2V == e2V.panel.yAxis) {
                    e2V.lowValue = u2V.lowValue;
                    e2V.highValue = u2V.highValue;
                }
            }
        }
        I2V = e2V.state.aggregation;
        if (I2V && I2V.box) {
            T89.T3k(139);
            var k61 = T89.v3k(17, 32, 13, 1);
            e2V.lowValue -= I2V.box / k61;
            T89.L3k(80);
            var e61 = T89.v3k(21, 6, 4, 1, 10);
            e2V.highValue += I2V.box / e61;
        }
        this.runAppend("initializeDisplay", arguments);
    };
    D4V.ChartEngine.prototype.setMarket = function (Z6V, j6V) {
        if (!D4V.Market) {
            return;
        }
        if (!j6V) {
            j6V = this.chart;
        }
        j6V.market = new D4V.Market(Z6V);
        for (var r6V in this.layout.marketSessions) {
            j6V.market.disableSession(r6V, this.layout.marketSessions[r6V]);
        }
    };
    D4V.ChartEngine.prototype.setMarketFactory = function (o6V) {
        this.marketFactory = o6V;
    };
    D4V.ChartEngine.prototype.setResizeTimer = function (T6V) {
        function a6V(k6V, Y6V) {
            R1aa.K19();
            var H6V;
            H6V = function () {
                if (!k6V.chart.canvas) {
                    return;
                }
                if (!D4V.isAndroid) {
                    if (k6V.chart.canvas.height != Math.floor(k6V.devicePixelRatio * k6V.chart.container.clientHeight) || k6V.chart.canvas.width != Math.floor(k6V.devicePixelRatio * k6V.chart.container.clientWidth)) {
                        k6V.resizeChart();
                    }
                }
            };
            return function () {
                var R4T;
                R4T = "un";
                R4T += "define";
                R4T += "d";
                if (typeof ResizeObserver !== R4T) {
                    if (D4V.ChartEngine.useAnimation) {
                        requestAnimationFrame(H6V);
                    } else {
                        setTimeout(H6V, 0);
                    }
                } else {
                    H6V();
                }
            };
        }
        this.resizeDetectMS = T6V;
        this.resizeHandle = D4V.resizeObserver(this.chart.container, a6V(this), this.resizeHandle, T6V);
    };
    R1aa.X19();
    D4V.ChartEngine.prototype.getRenderedItems = function () {
        var A4T, x4T, V6V, D6V, J6V, b6V, s6V, K6V, l6V, u6V;
        A4T = "Cl";
        A4T += "ose";
        x4T = "Lo";
        x4T += "w";
        V6V = this.chart;
        D6V = this.currentPanel;
        if (!D6V) {
            return;
        }
        J6V = ["Open", "High", x4T, "Close"];
        b6V = [A4T];
        s6V = [];
        for (var e6V in this.overlays) {
            if (this.overlays[e6V].panel !== D6V.name) continue;
            s6V = s6V.concat(Object.keys(this.overlays[e6V].outputMap));
        }
        R1aa.K19();
        for (var U6V in V6V.seriesRenderers) {
            K6V = V6V.seriesRenderers[U6V];
            if (K6V.params.panel != D6V.name) continue;
            for (var O6V in K6V.seriesParams) {
                l6V = K6V.seriesParams[O6V];
                u6V = K6V.highLowBars ? J6V : b6V;
                if (l6V.subField) {
                    s6V = s6V.concat(D4V.createObjectChainNames(l6V.symbol, [l6V.subField])).concat(l6V.symbol);
                } else if (l6V.symbol) {
                    s6V = s6V.concat(D4V.createObjectChainNames(l6V.symbol, u6V)).concat(l6V.symbol);
                } else if (l6V.field) {
                    s6V.push(l6V.field);
                } else if (D6V == V6V.panel) {
                    s6V = s6V.concat(u6V);
                }
            }
        }
        return s6V;
    };
    D4V.ChartEngine.prototype.setTransform = function (N6V, I6V, A6V) {
        N6V.transformFunc = I6V;
        N6V.untransformFunc = A6V;
    };
    D4V.ChartEngine.prototype.unsetTransform = function (E6V) {
        var f7a, h7a, s7a;
        f7a = 1069194359;
        h7a = -375434264;
        R1aa.X19();
        s7a = 2;
        for (var u7a = "1" >> 1245386336; R1aa.J4a(u7a.toString(), u7a.toString().length, "98872" | 98304) !== f7a; u7a++) {
            delete E6V.transformFunc;
            delete E6V.untransformFunc;
            s7a += 2;
        }
        if (R1aa.J4a(s7a.toString(), s7a.toString().length, 39224) !== h7a) {
            +E6V.transformFunc;
            ~E6V.untransformFunc;
        }
        for (var z6V = "0" >> 723245152; E6V.dataSet && z6V < E6V.dataSet.length; z6V++) {
            E6V.dataSet[z6V].transform = null;
        }
    };
    D4V.ChartEngine.prototype.isEquationChart = function (M6V) {
        var I4T;
        if (M6V && M6V[0] == "=") {
            if (!this.allowEquations || !D4V.fetchEquationChart) {
                I4T = "Error, equation chart option requires equat";
                I4T += "ionsAdvanced.js";
                console.warn(I4T);
                return !{};
            }
            return !![];
        }
        R1aa.X19();
        return !!"";
    };
    D4V.ChartEngine.prototype.correctIfOffEdge = function (R6V) {
        var e89 = R1aa;
        var t6V, y6V, w6V, m6V, x6V, h6V, v6V, c6V, W6V, f6V;
        if (this.runPrepend("correctIfOffEdge", arguments)) {
            return;
        }
        e89.K19();
        for (var n6V in this.charts) {
            t6V = this.charts[n6V];
            y6V = t6V.dataSet;
            w6V = t6V.maxTicks;
            m6V = this.layout;
            x6V = this.minimumLeftBars;
            h6V = Math.min(x6V, w6V);
            if (t6V.allowScrollPast) {
                e89.T3k(1);
                v6V = e89.j3k(w6V, h6V);
                if (h6V > y6V.length) {
                    v6V = w6V - y6V.length;
                }
                if (t6V.scroll - v6V >= y6V.length) {
                    e89.L3k(1);
                    var f61 = e89.v3k(9, 8);
                    t6V.scroll = y6V.length + v6V - f61;
                    e89.T3k(64);
                    this.micropixels = e89.v3k("0", 877708832);
                }
                if (t6V.scroll <= h6V) {
                    t6V.scroll = h6V;
                    this.micropixels = 0;
                }
            } else {
                if (t6V.scroll < h6V) {
                    t6V.scroll = h6V;
                }
                if (t6V.scroll > y6V.length) {
                    t6V.scroll = y6V.length;
                }
            }
            if (t6V.allowScrollFuture === ![]) {
                c6V = this.getLabelOffsetInPixels(t6V, m6V.chartType) + m6V.candleWidth * t6V.whiteSpaceFutureTicks;
                W6V = w6V - Math.round(c6V / m6V.candleWidth) - +"1";
                f6V = this.micropixels < 0 ? t6V.scroll - 1 : t6V.scroll;
                if (f6V < W6V) {
                    t6V.scroll = W6V;
                    this.micropixels = 0;
                }
            }
        }
        this.runAppend("correctIfOffEdge", arguments);
    };
    D4V.ChartEngine.prototype.getStartDateOffset = function () {
        for (var i6V = 0; i6V < this.chart.dataSegment.length; i6V++) {
            if (this.chart.dataSegment[i6V]) {
                return i6V;
            }
        }
        R1aa.K19();
        return 0;
    };
    D4V.ChartEngine.prototype.setStartDate = function (Q6V) {
        var G6V;
        for (var q6V = +"0"; q6V < this.chart.dataSet.length; q6V++) {
            G6V = this.chart.dataSet[q6V];
            if (G6V.DT.getTime() == Q6V.getTime()) {
                this.chart.scroll = this.chart.dataSet.length - q6V;
                this.draw();
                return;
            }
        }
    };
    D4V.ChartEngine.prototype.clearPixelCache = function () {
        R1aa.X19();
        var L6V, C6V;
        for (var g6V in this.panels) {
            L6V = this.panels[g6V];
            L6V.cacheHigh = null;
            L6V.cacheLow = null;
            L6V.cacheLeft = 1000000;
            L6V.cacheRight = -1;
        }
        for (var X6V in this.charts) {
            C6V = this.charts[X6V];
            if (!C6V.dataSet) continue;
            for (var d6V = +"0"; d6V < C6V.dataSet.length; d6V++) {
                C6V.dataSet[d6V].cache = {};
            }
        }
    };
    D4V.ChartEngine.prototype.adjustBackingStore = function (B6V, P7V) {
        var C89 = R1aa;
        var j7V, S7V, p7V, F7V;
        this.devicePixelRatio = window.devicePixelRatio || 1;
        if (this.devicePixelRatio < 1.0) {
            this.devicePixelRatio = 1.0;
        }
        j7V = P7V.webkitBackingStorePixelRatio || P7V.mozBackingStorePixelRatio || P7V.msBackingStorePixelRatio || P7V.oBackingStorePixelRatio || P7V.backingStorePixelRatio || 1;
        S7V = this.devicePixelRatio / j7V;
        if (!this.useBackingStore) {
            this.devicePixelRatio = this.adjustedDisplayPixelRatio = 1;
            return;
        }
        if (!D4V.isAndroid || D4V.is_chrome || D4V.isFF) {
            p7V = B6V.width;
            F7V = B6V.height;
            C89.T3k(19);
            B6V.width = C89.v3k(p7V, S7V);
            C89.T3k(19);
            B6V.height = C89.j3k(F7V, S7V);
            C89.T3k(6);
            B6V.style.width = C89.j3k(p7V, "px");
            C89.L3k(6);
            B6V.style.height = C89.v3k(F7V, "px");
            P7V.scale(S7V, S7V);
            this.adjustedDisplayPixelRatio = S7V;
            this.backing = { ratio: S7V, width: B6V.width, height: B6V.height, styleWidth: p7V, styleHeight: F7V };
        }
    };
    D4V.ChartEngine.prototype.reconstituteBackingStore = function () {
        var Z7V, r7V;
        if (!this.useBackingStore || !this.backing) {
            return;
        }
        Z7V = [this.chart.canvas];
        if (this.useBackgroundCanvas) {
            Z7V.push(this.chart.backgroundCanvas);
        }
        r7V = this.backing;
        Z7V.forEach(function (o7V) {
            if (o7V.width == r7V.width) {
                return;
            }
            o7V.width = r7V.width;
            o7V.height = r7V.height;
            o7V.context.scale(r7V.ratio, r7V.ratio);
        });
        this.adjustedDisplayPixelRatio = r7V.ratio;
        this.draw();
    };
    D4V.ChartEngine.prototype.disableBackingStore = function () {
        var a7V, T7V;
        if (!this.useBackingStore || !this.backing) {
            return;
        }
        a7V = [this.chart.canvas];
        if (this.useBackgroundCanvas) {
            a7V.push(this.chart.backgroundCanvas);
        }
        T7V = this.backing;
        R1aa.X19();
        a7V.forEach(function (k7V) {
            if (k7V.width == T7V.styleWidth) {
                return;
            }
            k7V.width = T7V.styleWidth;
            k7V.height = T7V.styleHeight;
            k7V.context.scale(1, 1);
        });
        this.adjustedDisplayPixelRatio = 1;
        this.draw();
    };
    D4V.ChartEngine.prototype.getBackgroundCanvas = function (H7V) {
        if (!H7V) {
            H7V = this.chart;
        }
        return this.useBackgroundCanvas ? H7V.backgroundCanvas : H7V.canvas;
    };
    D4V.ChartEngine.prototype.resizeCanvas = function () {
        var D39 = R1aa;
        var d4T, M4T, l7V, K7V, V7V, s7V, Y7V, J7V, D7V, e7V;
        d4T = "u";
        d4T += "n";
        d4T += "defin";
        d4T += "ed";
        M4T = "h";
        M4T += "tml";
        l7V = this.chart.canvas;
        K7V = this.chart.context;
        if (l7V && K7V) {
            this.floatCanvas.height = this.chart.tempCanvas.height = this.chart.backgroundCanvas.height = l7V.height = this.chart.container.clientHeight;
            this.floatCanvas.width = this.chart.tempCanvas.width = this.chart.backgroundCanvas.width = l7V.width = this.chart.container.clientWidth;
            this.adjustBackingStore(l7V, K7V);
            this.adjustBackingStore(this.chart.tempCanvas, this.chart.tempCanvas.context);
            this.adjustBackingStore(this.floatCanvas, this.floatCanvas.context);
            this.adjustBackingStore(this.chart.backgroundCanvas, this.chart.backgroundCanvas.context);
        }
        D39.X19();
        V7V = this.container.getBoundingClientRect();
        this.top = V7V.top;
        this.left = V7V.left;
        this.canvasWidth = this.chart.canvasWidth = this.chart.container.clientWidth;
        this.right = this.left + this.canvasWidth;
        this.height = this.chart.container.clientHeight;
        this.width = this.right - this.left;
        if (this.width === 0 && !this.container.dimensionlessCanvas && this.container.closest(M4T)) {
            console.log("warning: zero width chart. Check CSS for chart container.");
        }
        this.bottom = this.top + this.height;
        this.calculateYAxisPositions();
        this.chart.canvasRight = this.right;
        this.chart.canvasHeight = this.height;
        s7V = this.layout.candleWidth;
        if (typeof s7V == d4T) {
            D39.L3k(124);
            s7V = D39.j3k("8", 8);
        }
        for (var u7V in this.charts) {
            Y7V = this.charts[u7V];
            this.setCandleWidth(s7V, Y7V);
            if (Y7V.scroll < Y7V.width / s7V) {
                Y7V.scroll = Math.floor(Y7V.width / s7V);
                J7V = Math.round(this.preferences.whitespace / this.layout.candleWidth);
                Y7V.scroll -= J7V;
            }
            D7V = 10;
            try {
                D39.L3k(121);
                var h61 = D39.j3k(2267, 19, 8, 17, 7);
                e7V = K7V.measureText("10:00").width * h61;
            } catch (b7V) {
                e7V = 100;
            }
            while (D7V > 1) {
                if (this.chart.width / e7V > D7V) break;
                D7V /= 1.5;
            }
            Y7V.xAxis.autoComputedTickSizePixels = Math.round(this.chart.width / D7V);
            if (Y7V.xAxis.autoComputedTickSizePixels < 1) {
                D39.T3k(1);
                Y7V.xAxis.autoComputedTickSizePixels = D39.j3k("1", 0);
            }
        }
    };
    D4V.ChartEngine.prototype.setCandleWidth = function (U7V, O7V) {
        if (!O7V) {
            O7V = this.chart;
        }
        U7V = this.constrainCandleWidth(U7V);
        this.layout.candleWidth = U7V;
        R1aa.T3k(1);
        var s61 = R1aa.j3k(3, 2);
        O7V.maxTicks = Math.round(O7V.width / U7V) + s61;
    };
    D4V.ChartEngine.prototype.constrainCandleWidth = function (I7V) {
        var A7V, E7V, N7V;
        A7V = this.minimumCandleWidth;
        E7V = this.maximumCandleWidth;
        R1aa.X19();
        N7V = this.animations.zoom;
        if (A7V && I7V < A7V) {
            I7V = A7V;
            if (N7V && N7V.running) {
                N7V.stop();
            }
        }
        if (E7V && I7V > E7V) {
            I7V = E7V;
            if (N7V && N7V.running) {
                N7V.stop();
            }
        }
        return I7V;
    };
    D4V.ChartEngine.prototype.resizeChart = function (z7V) {
        var M7V;
        if (this.runPrepend("resizeChart", arguments)) {
            return;
        }
        if (z7V !== !!0) {
            z7V = !!"1";
        }
        if (z7V) {
            this.preAdjustScroll();
        }
        R1aa.X19();
        M7V = this.chart.canvasHeight;
        this.resizeCanvas();
        if (z7V) {
            this.postAdjustScroll();
        }
        if (this.displayInitialized) {
            this.adjustPanelPositions();
            this.draw();
        } else if (this.chart.canvasHeight !== 0 && M7V === 0) {
            this.adjustPanelPositions();
            this.draw();
        }
        this.doDisplayCrosshairs();
        this.updateChartAccessories();
        this.runAppend("resizeChart", arguments);
    };
    D4V.ChartEngine.prototype.clear = function () {
        R1aa.K19();
        var y7V;
        this.displayInitialized = !{};
        for (var t7V in this.layout.studies) {
            y7V = this.layout.studies[t7V];
            D4V.getFn("Studies.removeStudy")(this, y7V);
        }
        if (this.controls.chartControls) {
            this.controls.chartControls.style.display = "none";
        }
        this.chart.panel.title.innerHTML = "";
        this.chart.panel.title.appendChild(document.createTextNode(this.chart.panel.display));
    };
    D4V.ChartEngine.prototype.fillScreen = function () {
        var h7V, v7V, m7V, w7V, W7V;
        h7V = this.chart;
        v7V = this.layout.candleWidth;
        m7V = h7V.width - this.preferences.whitespace;
        w7V = h7V.dataSet.length;
        R1aa.X19();
        if (w7V * v7V >= m7V) {
            this.draw();
            return;
        }
        if (!this.mainSeriesRenderer || !this.mainSeriesRenderer.standaloneBars) {
            w7V--;
        }
        R1aa.L3k(32);
        W7V = R1aa.v3k(w7V, m7V);
        this.setCandleWidth(W7V, h7V);
        this.home({ maintainWhitespace: !!1 });
    };
    D4V.ChartEngine.prototype.setMaxTicks = function (n7V, x7V) {
        R1aa.X19();
        var c7V;
        if (!x7V) {
            x7V = {};
        }
        n7V = Math.round(n7V);
        if (n7V < 2) {
            n7V = 2;
        }
        c7V = x7V.padding ? x7V.padding : 0;
        this.layout.candleWidth = (this.chart.width - c7V) / n7V;
        if (!this.layout.candleWidth) {
            this.layout.candleWidth = 8;
        }
        this.chart.maxTicks = Math.round(this.chart.width / this.layout.candleWidth - 0.499);
        if (x7V.padding || x7V.padding === 0) {
            R1aa.L3k(140);
            this.chart.scroll = R1aa.v3k(n7V, "1", 2031914112);
        }
    };
    D4V.ChartEngine.prototype.initializeChart = function (R7V) {
        var L4T, f7V, i7V, L7V, q7V, G7V, X7V, Q7V, P9j, Z9j, j4T, j9j, d7V, r9j, g7V, p9j, F9j, a9j, k9j;
        L4T = "can";
        L4T += "va";
        L4T += "s";
        if (this.runPrepend("initializeChart", arguments)) {
            return;
        }
        f7V = this.chart;
        if (!f7V.symbolObject.symbol) {
            f7V.symbolObject.symbol = f7V.symbol;
        }
        if (this.locale) {
            this.setLocale(this.locale);
        }
        if (!this.displayZone && D4V.ChartEngine.defaultDisplayTimeZone) {
            this.setTimeZone(null, D4V.ChartEngine.defaultDisplayTimeZone);
        }
        this.resetDynamicYAxis({ noRecalculate: !!{} });
        this.calculateYAxisPositions();
        this.micropixels = 0;
        if (R7V) {
            f7V.container = R7V;
        } else {
            R7V = f7V.container;
        }
        R7V.stx = this;
        if (!R7V.CIQRegistered) {
            R7V.CIQRegistered = !![];
            D4V.ChartEngine.registeredContainers.push(R7V);
        }
        if (this.registerHTMLElements) {
            this.registerHTMLElements();
        }
        i7V = f7V.canvas;
        L7V = f7V.backgroundCanvas;
        q7V = f7V.tempCanvas;
        G7V = this.floatCanvas;
        X7V = f7V.canvasShim;
        if (i7V && document.createElement("canvas").getContext) {
            if (!i7V.id) {
                R7V.removeChild(i7V);
                f7V.canvas = null;
            }
            if (q7V && !q7V.id) {
                R7V.removeChild(q7V);
                f7V.tempCanvas = null;
            }
            if (G7V && !G7V.id) {
                R7V.removeChild(G7V);
                this.floatCanvas = null;
            }
            if (L7V && !L7V.id) {
                R7V.removeChild(L7V);
                f7V.backgroundCanvas = null;
            }
        } else {
            this.setCandleWidth(this.layout.candleWidth);
        }
        if (!f7V.backgroundCanvas) {
            L7V = f7V.backgroundCanvas = document.createElement("canvas");
        }
        R7V.appendChild(L7V);
        B7V(L7V);
        if (!f7V.canvasShim) {
            X7V = f7V.canvasShim = document.createElement("div");
        }
        X7V.className = "stx-canvas-shim";
        R7V.appendChild(X7V);
        if (!f7V.canvas) {
            i7V = f7V.canvas = document.createElement(L4T);
        }
        R7V.appendChild(i7V);
        B7V(i7V);
        f7V.context = i7V.context;
        if (!f7V.tempCanvas) {
            q7V = f7V.tempCanvas = document.createElement("canvas");
        }
        R7V.appendChild(q7V);
        B7V(q7V, !!{});
        if (!this.floatCanvas) {
            G7V = this.floatCanvas = document.createElement("canvas");
        }
        R7V.appendChild(G7V);
        B7V(G7V, !!{});
        this.resizeCanvas();
        if (D4V.isAndroid) {
            q7V.ontouchstart = G7V.ontouchstart = function (l9j) {
                R1aa.X19();
                if (l9j.preventDefault) {
                    l9j.preventDefault();
                }
            };
        }
        Q7V = this.panels;
        f7V.panel.display = f7V.symbol;
        if (f7V.symbolDisplay) {
            f7V.panel.display = f7V.symbolDisplay;
        }
        this.adjustPanelPositions();
        f7V.panel = Q7V[f7V.name];
        for (var S9j in Q7V) {
            P9j = Q7V[S9j].yaxisLHS.concat(Q7V[S9j].yaxisRHS);
            for (var C7V = +"0"; C7V < P9j.length; C7V++) {
                P9j[C7V].height = Q7V[S9j].yAxis.height;
                this.calculateYAxisMargins(P9j[C7V]);
            }
        }
        this.initialWhitespace = this.preferences.whitespace;
        if (f7V.dataSet && f7V.dataSet.length > 0) {
            f7V.scroll = Math.floor(f7V.width / this.layout.candleWidth);
            Z9j = Math.round(this.preferences.whitespace / this.layout.candleWidth);
            f7V.scroll -= Z9j;
        }
        if (D4V.touchDevice) {
            j4T = ".vector";
            j4T += "TrashC";
            j4T += "a";
            j4T += "n";
            j9j = R7V.querySelector(".overlayEdit");
            d7V = R7V.querySelector(".overlayTrashCan");
            r9j = R7V.querySelector(j4T);
            g7V = function (D9j, K9j, V9j) {
                return function (e9j) {
                    R1aa.X19();
                    D9j.deleteHighlighted(K9j, V9j);
                };
            };
            if (j9j) {
                D4V.safeClickTouch(j9j, g7V(this, !!{}, !0));
                if (d7V) {
                    D4V.safeClickTouch(d7V, g7V(this, !{}));
                }
            } else if (d7V) {
                D4V.safeClickTouch(d7V, g7V(this, !!{}));
            }
            if (r9j) {
                D4V.safeClickTouch(r9j, g7V(this, !![]));
            }
        }
        if (this.manageTouchAndMouse) {
            this.registerTouchAndMouseEvents();
        }
        if (this.handleMouseOut) {
            R7V.onmouseout = (function (u9j) {
                return function (J9j) {
                    R1aa.X19();
                    u9j.handleMouseOut(J9j);
                };
            })(this);
            D4V.smartHover();
        }
        if (this.abortDrawings) {
            this.abortDrawings();
        }
        this.undoStamps = [];
        for (var o9j in Q7V) {
            p9j = Q7V[o9j];
            if (p9j.markerHolder) {
                R7V.removeChild(p9j.markerHolder);
                p9j.markerHolder = null;
            }
        }
        for (var T9j in this.plugins) {
            F9j = this.plugins[T9j];
            if (F9j.display) {
                if (F9j.initializeChart) {
                    F9j.initializeChart(this);
                }
            }
        }
        if (!this.resizeListenerInitialized) {
            a9j = this;
            this.resizeListenerInitialized = !!"1";
            k9j = function () {
                return function (b9j) {
                    a9j.resizeChart();
                };
            };
            this.addDomEventListener(window, "resize", k9j(), !!1);
        }
        if (f7V.baseline.userLevel) {
            f7V.baseline.userLevel = null;
        }
        this.setResizeTimer(this.resizeDetectMS);
        function B7V(H9j, s9j) {
            var P4T, m4T, Y9j;
            P4T = "n";
            P4T += "o";
            P4T += "ne";
            m4T = "2";
            m4T += "d";
            H9j.context = H9j.getContext(m4T);
            H9j.context.lineWidth = 1;
            Y9j = H9j.style;
            R1aa.X19();
            Y9j.position = "absolute";
            Y9j.left = "0px";
            if (s9j) {
                Y9j.display = P4T;
            }
        }
        this.runAppend("initializeChart", arguments);
    };
    D4V.ChartEngine.prototype.destroy = function () {
        var O4T, U9j, O9j, I9j, A9j;
        this.setResizeTimer(0);
        if (this.quoteDriver) {
            this.quoteDriver.die();
        }
        this.styles = {};
        for (var N9j = 0; N9j < this.eventListeners.length; N9j++) {
            O4T = "f";
            O4T += "u";
            O4T += "ncti";
            O4T += "on";
            U9j = this.eventListeners[N9j];
            U9j.element.removeEventListener(U9j.event, U9j[O4T], U9j.options);
        }
        this.touchAndMouseEventsRegistered = !1;
        this.eventListeners = [];
        if (this.streamParameters.timeout) {
            clearTimeout(this.streamParameters.timeout);
        }
        O9j = D4V.ChartEngine.registeredContainers;
        I9j = O9j.indexOf(this.chart.container);
        R1aa.X19();
        if (I9j > -1) {
            O9j.splice(I9j, 1);
        }
        if (this.slider) {
            A9j = O9j.indexOf(this.slider.slider.chart.container);
            if (A9j > -1) {
                O9j.splice(A9j, 1);
            }
        }
    };
    D4V.ChartEngine.prototype.preAdjustScroll = function (E9j) {
        if (!E9j) {
            E9j = this.chart;
        }
        this.previousAdjust = { chart: E9j, scroll: E9j.scroll, maxTicks: E9j.maxTicks };
    };
    D4V.ChartEngine.prototype.postAdjustScroll = function () {
        var z9j;
        if (!this.previousAdjust) {
            return;
        }
        z9j = this.previousAdjust.chart;
        z9j.scroll = this.previousAdjust.scroll + (z9j.maxTicks - this.previousAdjust.maxTicks);
        if (this.displayInitialized) {
            this.draw();
        }
    };
    D4V.ChartEngine.prototype.translateIf = function (M9j) {
        R1aa.K19();
        if (this.translationCallback) {
            return this.translationCallback(M9j);
        }
        return M9j;
    };
    D4V.ChartEngine.prototype.doCleanupDates = function (h9j, n9j) {
        var y9j, t9j, m9j, v9j, W9j;
        R1aa.X19();
        if (!h9j || !h9j.length) {
            return;
        }
        for (var w9j = 0; w9j < h9j.length; w9j++) {
            y9j = h9j[w9j];
            t9j = y9j.DT;
            if (!t9j && !y9j.Date) continue;
            if (y9j.DT && Object.prototype.toString.call(t9j) == "[object String]" && t9j.length <= +"10") {
                t9j = new Date(t9j);
                t9j.setMinutes(t9j.getMinutes() + t9j.getTimezoneOffset());
            } else {
                m9j = !![];
                if (!y9j.DT) {
                    t9j = D4V.strToDateTime(y9j.Date);
                    if (y9j.Date.length <= +"10") {
                        m9j = ![];
                    }
                }
                if (Object.prototype.toString.call(t9j) != "[object Date]") {
                    t9j = new Date(t9j);
                }
                if (V4V.Date && this.dataZone && m9j) {
                    v9j = new V4V.Date(t9j.getFullYear(), t9j.getMonth(), t9j.getDate(), t9j.getHours(), t9j.getMinutes(), this.dataZone);
                    W9j = t9j.getSeconds() * ("1000" & 2147483647) + t9j.getMilliseconds();
                    t9j = new Date(v9j.getTime() + W9j);
                }
                if (D4V.ChartEngine.isDailyInterval(n9j)) {
                    R1aa.L3k(21);
                    t9j.setHours(0, R1aa.v3k(2147483647, "0"), +"0", 0);
                }
            }
            if (!y9j.DT) {
                y9j.Date = D4V.yyyymmddhhmmssmmm(t9j);
            }
            y9j.DT = t9j;
        }
    };
    D4V.ChartEngine.prototype.doCleanupGaps = function (x9j, X9j, q9j) {
        var z39 = R1aa;
        var J4T, g4T, G9j, R9j, B9j, r0j, Q9j, f9j, Z0j, T0j, i9j, d9j, L9j, c9j, g9j;
        J4T = "we";
        J4T += "ek";
        g4T = "m";
        g4T += "on";
        g4T += "t";
        g4T += "h";
        if (!x9j || !x9j.length) {
            return x9j;
        }
        G9j = this.layout.interval;
        q9j = q9j ? q9j : {};
        if (!X9j) {
            X9j = this.chart;
        }
        if (!D4V.Market || !X9j.market) {
            return x9j;
        }
        if (!q9j.noCleanupDates) {
            this.doCleanupDates(x9j, G9j);
        }
        R9j = q9j.cleanupGaps;
        if (R9j === !!"") {
            return x9j;
        }
        if (!R9j || R9j === !![]) {
            R9j = this.cleanupGaps || R9j;
        }
        z39.T3k(117);
        B9j = z39.j3k(R9j, "gap");
        if (!R9j) {
            return x9j;
        }
        if (G9j == "tick") {
            return x9j;
        }
        if (G9j == g4T || G9j == J4T) {
            if (this.dontRoll) {
                return x9j;
            }
            G9j = "day";
        }
        r0j = function (e0j) {
            if (e0j.DT) {
                if (Object.prototype.toString.call(e0j.DT) != "[object Date]") {
                    return new Date(e0j.DT);
                }
                return new Date(+e0j.DT);
            }
            z39.K19();
            return D4V.strToDateTime(e0j.Date);
        };
        function l0j(A0j, v0j) {
            var N0j, u0j, b0j, M0j, z0j;
            N0j = q9j.field;
            u0j = N0j ? f9j[N0j] : f9j;
            if (u0j === undefined) {
                u0j = {};
            }
            b0j = B9j ? null : u0j[d9j];
            M0j = B9j ? null : u0j.Adj_Close;
            while (+A0j < +v0j) {
                z0j = { DT: A0j };
                if (N0j) {
                } else {
                    Q9j.push(z0j);
                    D4V.extend(z0j, { Open: b0j, High: b0j, Low: b0j, Close: b0j, Volume: 0, Adj_Close: M0j });
                }
                A0j = i9j.next();
            }
        }
        Q9j = [];
        z39.T3k(19);
        f9j = x9j[z39.j3k("0", 1)];
        Q9j.push(f9j);
        Z0j = { begin: r0j(f9j), interval: G9j, periodicity: 1, timeUnit: this.layout.timeUnit };
        T0j = new D4V.Market(X9j.market.market_def);
        function s0j(x0j, c0j) {
            var W0j, n0j, f0j;
            W0j = q9j.field;
            if (W0j) {
                if (typeof x0j[W0j] != "undefined" && typeof c0j[W0j] == "undefined") {
                    c0j[W0j] = B9j ? null : x0j[W0j];
                }
                return;
            }
            if (B9j) {
                return;
            }
            n0j = x0j[d9j];
            f0j = c0j[d9j];
            if (typeof n0j != "undefined" && typeof f0j == "undefined") {
                D4V.ensureDefaults(c0j, { Close: n0j, Open: n0j, High: n0j, Low: n0j, Volume: 0, Adj_Close: x0j.Adj_Close });
            }
        }
        i9j = T0j.newIterator(Z0j);
        if (this.extendedHours && this.extendedHours.filter) {
            i9j.market.enableAllAvailableSessions();
        }
        d9j = X9j.defaultPlotField;
        for (var p0j = 0; p0j < x9j.length; p0j++) {
            if (x9j[p0j][d9j] !== undefined) break;
            if (x9j[p0j].Value !== undefined) {
                d9j = "Value";
                break;
            }
        }
        for (var C9j = "1" ^ 0; C9j < x9j.length; C9j++) {
            c9j = x9j[C9j];
            L9j = i9j.next();
            g9j = r0j(c9j);
            if (L9j < g9j) {
                l0j(L9j, g9j);
                L9j = i9j.market._convertFromMarketTZ(i9j.begin, i9j.outZone);
            }
            while (g9j < L9j) {
                if (++C9j == x9j.length) {
                    return Q9j;
                }
                s0j(f9j, c9j);
                Q9j.push(c9j);
                f9j = c9j;
                c9j = x9j[C9j];
                g9j = r0j(c9j);
            }
            if (L9j < g9j) {
                C9j--;
                L9j = i9j.previous();
            } else {
                s0j(f9j, c9j);
                Q9j.push(c9j);
                f9j = c9j;
            }
        }
        return Q9j;
    };
    D4V.ChartEngine.prototype.getCreatingLibrary = function () {
        R1aa.X19();
        return K4V;
    };
};
B7w = (q0j) => {
    var R0j;
    R0j = q0j.CIQ;
    R0j.ChartEngine.Panel = function (C0j, Q0j) {
        if (Q0j) {
            this.yAxis = Q0j;
        } else {
            this.yAxis = new R0j.ChartEngine.YAxis();
        }
        this.name = C0j;
        R1aa.K19();
        this.state = {};
    };
    R0j.extend(
        R0j.ChartEngine.Panel.prototype,
        { name: null, display: null, chart: null, yAxis: null, shareChartXAxis: null, top: null, bottom: null, height: null, percent: null, displayEdgeIfPadded: !0, noDrag: !{}, exportable: !![] },
        !""
    );
    R0j.ChartEngine.prototype.whichPanel = function (X0j) {
        var d0j;
        for (var B0j in this.panels) {
            d0j = this.panels[B0j];
            if (d0j.hidden) continue;
            if (X0j >= d0j.top && X0j < d0j.bottom) {
                return d0j;
            }
        }
        return null;
    };
    R0j.ChartEngine.prototype.panelExists = function (p3j) {
        var P3j;
        for (var S3j in this.panels) {
            P3j = this.panels[S3j];
            if (P3j.name == p3j) {
                return !!1;
            }
        }
        R1aa.X19();
        return ![];
    };
    R0j.ChartEngine.prototype.storePanels = function () {
        R1aa.K19();
        var o3j, Z3j;
        if (!this.layout) {
            this.layout = {};
        }
        o3j = this.layout;
        o3j.panels = {};
        for (var a3j in this.panels) {
            Z3j = this.panels[a3j];
            o3j.panels[Z3j.name] = { percent: Z3j.percent, display: Z3j.display, yAxis: Z3j.yAxis };
        }
    };
    R0j.ChartEngine.prototype.savePanels = function (k3j) {
        R1aa.X19();
        this.storePanels();
        if (k3j !== ![]) {
            this.changeOccurred("layout");
        }
    };
    R0j.ChartEngine.prototype.privateDeletePanel = function (Y3j) {
        var K3j, J3j;
        for (var U3j in this.layout.studies) {
            K3j = this.layout.studies[U3j];
            if (K3j.panel == Y3j.name) {
                this.cleanupRemovedStudy(K3j);
            }
        }
        delete this.panels[Y3j.name];
        for (var s3j in this.overlays) {
            if (this.overlays[s3j].panel == Y3j.name) {
                if (this.layout.studies) {
                    this.cleanupRemovedStudy(this.layout.studies[s3j]);
                }
                delete this.overlays[s3j];
            }
        }
        for (var V3j in this.chart.series) {
            if (this.chart.series[V3j].parameters.panel == Y3j.name) {
                this.removeSeries(this.chart.series[V3j], this.chart);
            }
        }
        if (Y3j.holder) {
            this.chart.container.removeChild(Y3j.holder);
            if (this.getMarkerArray) {
                J3j = this.getMarkerArray("panelName", Y3j.name);
                for (var D3j = 0; D3j < J3j.length; D3j++) {
                    this.removeFromHolder(J3j[D3j]);
                }
            }
        }
        if (Y3j.handle) {
            Y3j.handle.remove();
        }
        this.currentPanel = null;
    };
    R0j.ChartEngine.prototype.plotsInPanel = function (A3j) {
        var O3j, N3j, E3j, z3j;
        O3j = [];
        N3j = A3j;
        if (typeof A3j == "object") {
            N3j = A3j.name;
        }
        for (var t3j in this.layout.studies) {
            E3j = this.layout.studies[t3j];
            if (N3j === E3j.panel) {
                O3j.push(E3j);
            }
        }
        for (var y3j in this.chart.seriesRenderers) {
            z3j = this.chart.seriesRenderers[y3j];
            if (N3j === z3j.params.panel) {
                O3j.push(z3j);
            }
        }
        return O3j;
    };
    R0j.ChartEngine.prototype.checkForEmptyPanel = function (w3j, G3j, h3j) {
        var G4T, m3j, i3j;
        G4T = "o";
        G4T += "b";
        G4T += "ject";
        if (!w3j) {
            return !!0;
        }
        m3j = w3j;
        if (typeof w3j == G4T) {
            m3j = w3j.name;
        }
        if (m3j === this.chart.name) {
            return !!"";
        }
        if (!h3j) {
            h3j = [];
        } else if (!(h3j instanceof Array)) {
            h3j = [h3j];
        }
        i3j = this.plotsInPanel(w3j);
        for (var v3j = 0; v3j < i3j.length; v3j++) {
            if (h3j.indexOf(i3j[v3j]) == -1) {
                return !{};
            }
        }
        if (!G3j) {
            this.panelClose(this.panels[m3j]);
        }
        return !!"1";
    };
    R0j.ChartEngine.prototype.panelClose = function (L3j) {
        var q4T, F4T, d3j;
        q4T = "pa";
        q4T += "nelClose";
        F4T = "p";
        F4T += "anelClos";
        F4T += "e";
        if (!L3j) {
            return;
        }
        if (this.runPrepend(F4T, arguments)) {
            return;
        }
        this.cancelTouchSingleClick = !0;
        R1aa.K19();
        R0j.ChartEngine.drawingLine = ![];
        if (L3j.soloing) {
            this.panelSolo(L3j);
        }
        if (this.charts[L3j.name]) {
            for (var S5j in this.panels) {
                d3j = this.panels[S5j];
                if (d3j.chart.name == L3j.name) {
                    this.privateDeletePanel(d3j);
                }
            }
            delete this.charts[L3j.name];
        } else {
            this.privateDeletePanel(L3j);
        }
        if (!this.currentlyImporting) {
            this.showCrosshairs();
            this.resetDynamicYAxis({ noRecalculate: !!{} });
            this.calculateYAxisPositions();
            this.draw();
            this.savePanels();
        }
        this.userPointerDown = this.grabbingScreen = !1;
        if (this.openDialog) {
            this.openDialog = "";
        }
        this.runAppend(q4T, arguments);
    };
    R0j.ChartEngine.prototype.deleteAllPanels = function () {
        var p5j;
        for (var P5j in this.panels) {
            p5j = this.panels[P5j];
            this.privateDeletePanel(p5j);
        }
        R1aa.X19();
        this.layout.panels = {};
        this.panels = {};
    };
    R0j.ChartEngine.prototype.panelUp = function (j5j) {
        var r5j, Z5j, F5j, o5j;
        this.cancelTouchSingleClick = !!1;
        R0j.ChartEngine.drawingLine = !!"";
        R1aa.X19();
        this.showCrosshairs();
        r5j = {};
        Z5j = 0;
        for (F5j in this.panels) {
            if (F5j == j5j.name) break;
            Z5j++;
        }
        if (!Z5j) {
            return;
        }
        o5j = 0;
        for (F5j in this.panels) {
            if (o5j == Z5j - 1) {
                r5j[j5j.name] = j5j;
            }
            if (F5j == j5j.name) continue;
            r5j[F5j] = this.panels[F5j];
            o5j++;
        }
        this.panels = r5j;
        this.adjustPanelPositions();
        this.draw();
        this.savePanels();
    };
    R0j.ChartEngine.prototype.panelDown = function (a5j) {
        var k5j, H5j, T5j, s5j, Y5j;
        this.cancelTouchSingleClick = !![];
        R0j.ChartEngine.drawingLine = !{};
        this.showCrosshairs();
        k5j = {};
        H5j = 0;
        for (T5j in this.panels) {
            if (T5j == a5j.name) break;
            H5j++;
        }
        R1aa.L3k(64);
        s5j = R1aa.v3k("0", 1016282528);
        R1aa.K19();
        for (T5j in this.panels) {
            s5j++;
        }
        if (H5j == s5j - 1) {
            return;
        }
        Y5j = 0;
        for (T5j in this.panels) {
            if (T5j == a5j.name) {
                Y5j++;
                continue;
            }
            k5j[T5j] = this.panels[T5j];
            if (Y5j == H5j + +"1") {
                k5j[a5j.name] = a5j;
            }
            Y5j++;
        }
        this.panels = k5j;
        this.adjustPanelPositions();
        this.draw();
        this.savePanels();
    };
    R0j.ChartEngine.prototype.panelSolo = function (l5j) {
        var K5j, D5j, V5j;
        this.cancelTouchSingleClick = !0;
        R0j.ChartEngine.drawingLine = ![];
        this.showCrosshairs();
        K5j = !!1;
        if (l5j.soloing) {
            K5j = !"1";
            l5j.soloing = ![];
            l5j.solo.classList.remove("stx_solo_lit");
            l5j.percent = l5j.oldPercent;
            if (l5j.name != "chart") {
                if (this.soloPanelToFullScreen) {
                    if (l5j.percent == 1) {
                        for (D5j in this.panels) {
                            V5j = this.panels[D5j];
                            if (V5j != l5j) {
                                l5j.percent -= V5j.percent;
                            }
                        }
                    }
                } else {
                    this.chart.panel.percent = this.chart.panel.oldPercent;
                }
            }
            if (this.soloPanelToFullScreen) {
                this.xAxisAsFooter = this.chart.panel.oldXAxisAsFooter;
            }
        } else {
            l5j.soloing = !!"1";
            l5j.solo.classList.add("stx_solo_lit");
            l5j.oldPercent = l5j.percent;
            this.chart.panel.oldXAxisAsFooter = this.xAxisAsFooter;
            if (l5j.name != "chart") {
                if (this.soloPanelToFullScreen) {
                    this.xAxisAsFooter = !!{};
                } else {
                    this.chart.panel.oldPercent = this.chart.panel.percent;
                    R1aa.T3k(1);
                    var W61 = R1aa.v3k(5, 4);
                    l5j.percent = W61 - this.chart.panel.percent;
                }
            }
        }
        for (D5j in this.panels) {
            this.panels[D5j].hidden = K5j;
        }
        if (!this.soloPanelToFullScreen) {
            this.chart.panel.hidden = !!"";
        }
        l5j.hidden = !"1";
        this.resetDynamicYAxis({ noRecalculate: !![] });
        this.calculateYAxisPositions();
        this.draw();
        this.savePanels();
    };
    R0j.ChartEngine.prototype.calculatePanelPercent = function (e5j) {
        var u5j;
        u5j = e5j.bottom - e5j.top;
        R1aa.K19();
        e5j.percent = u5j / this.chart.canvasHeight;
    };
    R0j.ChartEngine.prototype.resizePanels = function () {
        var N5j, O5j, b5j, J5j, A5j, U5j;
        if (!R0j.ChartEngine.resizingPanel) {
            return;
        }
        A5j = R0j.ChartEngine.crosshairY > this.resolveY(R0j.ChartEngine.resizingPanel.top);
        for (var I5j in this.panels) {
            if (this.panels[I5j] == R0j.ChartEngine.resizingPanel) break;
            if (this.panels[I5j].hidden) continue;
            N5j = this.panels[I5j];
        }
        U5j = this.backOutY(R0j.ChartEngine.crosshairY);
        if (A5j) {
            b5j = R0j.ChartEngine.resizingPanel.yaxisLHS.concat(R0j.ChartEngine.resizingPanel.yaxisRHS);
            for (J5j = 0; J5j < b5j.length; J5j++) {
                R1aa.L3k(1);
                var u61 = R1aa.v3k(26, 16);
                O5j = b5j[J5j].initialMarginTop + b5j[J5j].initialMarginBottom + u61;
                if (U5j > b5j[J5j].bottom - O5j) {
                    U5j = b5j[J5j].bottom - O5j;
                }
            }
        } else {
            b5j = N5j.yaxisLHS.concat(N5j.yaxisRHS);
            for (J5j = 0; J5j < b5j.length; J5j++) {
                O5j = b5j[J5j].initialMarginTop + b5j[J5j].initialMarginBottom + +"10";
                if (U5j < b5j[J5j].top + O5j) {
                    U5j = b5j[J5j].top + O5j;
                }
            }
        }
        R0j.ChartEngine.crosshairY = this.resolveY(U5j);
        N5j.bottom = U5j;
        R0j.ChartEngine.resizingPanel.top = U5j;
        this.calculatePanelPercent(N5j);
        this.calculatePanelPercent(R0j.ChartEngine.resizingPanel);
        this.adjustPanelPositions();
        this.draw();
        this.savePanels();
    };
    R0j.ChartEngine.prototype.isPanelAboveChart = function (z5j) {
        for (var E5j in this.panels) {
            if (E5j == "chart") {
                return !!"";
            }
            if (E5j == z5j.name) {
                return !!{};
            }
        }
        R1aa.X19();
        return ![];
    };
    R0j.ChartEngine.prototype.adjustPanelPositions = function () {
        var M39 = R1aa;
        var V4T, R5j, C5j, i5j, q5j, m5j, v5j, w5j, M5j, W5j, E4T, N4T, Q4T, t4T, G5j, U4T, t5j, v4T, D4T, S4T, T4T, n5j, d5j, L5j;
        V4T = "stx";
        V4T += "-";
        V4T += "sho";
        V4T += "w";
        var { chart: y5j, panels: h5j } = this;
        if (y5j.tempCanvas) {
            R0j.clearCanvas(y5j.tempCanvas, this);
        }
        if (this.runPrepend("adjustPanelPositions", arguments)) {
            return;
        }
        R5j = +"0";
        C5j = y5j.canvasHeight;
        i5j = !!0;
        q5j = 0;
        m5j = 0;
        v5j = !{};
        for (w5j in h5j) {
            M5j = h5j[w5j];
            if (isNaN(M5j.percent) || M5j.percent <= 0) {
                M5j.percent = 0.05;
            }
            if (M5j.hidden) continue;
            q5j += M5j.percent;
            m5j++;
            if (M5j.soloing) {
                v5j = !!1;
            }
        }
        for (w5j in h5j) {
            W5j = 0;
            M5j = h5j[w5j];
            if (M5j.hidden) {
                if (M5j.markerHolder) {
                    M5j.markerHolder.style.display = "none";
                }
                continue;
            }
            if (this.manageTouchAndMouse) {
                if (M5j.up) {
                    if (!i5j) {
                        i5j = !0;
                        M5j.up.classList.remove("stx-show");
                    } else {
                        if (this.displayIconsUpDown) {
                            M5j.up.classList.add("stx-show");
                        }
                    }
                }
                if (M5j.solo) {
                    if (v5j) {
                        E4T = "s";
                        E4T += "tx-";
                        E4T += "show";
                        N4T = "s";
                        N4T += "t";
                        N4T += "x";
                        N4T += "-show";
                        if (M5j.soloing && this.displayIconsSolo) {
                            M5j.solo.classList.add(N4T);
                        } else {
                            M5j.solo.classList.remove(E4T);
                        }
                    } else if (m5j == 1) {
                        M5j.solo.classList.remove("stx-show");
                    } else if (m5j == 2 && !this.soloPanelToFullScreen) {
                        M5j.solo.classList.remove("stx-show");
                    } else {
                        Q4T = "s";
                        Q4T += "tx";
                        Q4T += "-sho";
                        Q4T += "w";
                        if (this.displayIconsSolo) {
                            M5j.solo.classList.add(Q4T);
                        }
                    }
                }
                if (M5j.down) {
                    if (m5j == 1) {
                        M5j.down.classList.remove("stx-show");
                    } else {
                        if (this.displayIconsUpDown) {
                            M5j.down.classList.add("stx-show");
                        }
                    }
                }
                if (M5j.edit) {
                    t4T = "stx-";
                    t4T += "show";
                    if (M5j.editFunction) {
                        M5j.edit.classList.add("stx-show");
                    } else {
                        M5j.edit.classList.remove(t4T);
                    }
                }
                if (M5j.close) {
                    if (this.displayIconsClose) {
                        M5j.close.classList.add("stx-show");
                    } else {
                        M5j.close.classList.remove("stx-show");
                    }
                }
            }
            M5j.percent = M5j.percent / q5j;
            M5j.top = R5j;
            M5j.bottom = M5j.top + C5j * M5j.percent;
            M5j.height = M5j.bottom - M5j.top;
            if (M5j.chart.name == M5j.name) {
                M5j.chart.top = M5j.top;
                M5j.chart.bottom = M5j.bottom;
                M5j.chart.height = M5j.height;
            }
            R5j = M5j.bottom;
            if (M5j.yaxisLHS) {
                G5j = M5j.yaxisLHS.concat(M5j.yaxisRHS);
                for (var x5j = 0; x5j < G5j.length; x5j++) {
                    U4T = "n";
                    U4T += "o";
                    U4T += "n";
                    U4T += "e";
                    t5j = G5j[x5j];
                    if (t5j.zoom && t5j.height > 0) {
                        W5j = t5j.zoom / t5j.height;
                    }
                    this.adjustYAxisHeightOffset(M5j, t5j);
                    t5j.height = t5j.bottom - t5j.top;
                    if (W5j) {
                        t5j.scroll *= (W5j * t5j.height) / t5j.zoom;
                        t5j.zoom = W5j * t5j.height;
                        if (t5j.zoom > t5j.height) {
                            t5j.zoom = 0;
                            t5j.scroll = 0;
                        }
                    }
                    if (!t5j.high && t5j.high !== 0) {
                        t5j.high = 100;
                        t5j.low = 0;
                        t5j.shadow = 100;
                    }
                    t5j.multiplier = t5j.height / t5j.shadow;
                    if (t5j.position === U4T) {
                        this.calculateYAxisMargins(t5j);
                    }
                }
            }
            if (M5j.holder) {
                v4T = "p";
                v4T += "x";
                D4T = "0p";
                D4T += "x";
                S4T = "p";
                S4T += "x";
                T4T = "0";
                T4T += "p";
                T4T += "x";
                M5j.holder.style.right = T4T;
                M5j.holder.style.top = M5j.top + S4T;
                M5j.holder.style.left = "0px";
                M5j.holder.style.height = M5j.height + "px";
                M5j.subholder.style.left = M5j.left + "px";
                M5j.subholder.style.width = M5j.width + "px";
                M5j.subholder.style.top = D4T;
                if (M5j.yAxis.height >= +"0") {
                    M5j.subholder.style.height = M5j.yAxis.height + v4T;
                }
            }
        }
        if (w5j && h5j[w5j].down) {
            h5j[w5j].down.classList.remove(V4T);
        }
        if (this.manageTouchAndMouse && m5j == +"2" && !v5j && y5j.panel.solo) {
            y5j.panel.solo.classList.add("stx-show");
        }
        if (y5j.panel) {
            if (v5j && this.soloPanelToFullScreen) {
                M39.T3k(38);
                var p61 = M39.j3k(228, 15, 9, 3399);
                n5j = y5j.canvasHeight - M5j.yAxis.bottom + p61;
            } else {
                M39.L3k(1);
                var o61 = M39.v3k(192, 180);
                n5j = y5j.canvasHeight - y5j.panel.yAxis.bottom + o61;
            }
            d5j = this.controls;
            var { chartControls: Q5j, home: c5j, notificationTray: f5j } = d5j;
            L5j = this.width - y5j.panel.right;
            if (Q5j) {
                M39.T3k(6);
                Q5j.style.bottom = M39.v3k(n5j, "px");
            }
            if (c5j) {
                M39.T3k(6);
                c5j.style.bottom = M39.v3k(n5j, "px");
                M39.L3k(6);
                c5j.style.marginRight = M39.j3k(L5j, "px");
            }
            if (f5j) {
                M39.T3k(6);
                f5j.style.bottom = M39.j3k(n5j, "px");
                M39.T3k(6);
                f5j.style.marginRight = M39.j3k(L5j, "px");
            }
        }
        this.clearPixelCache();
        if (this.drawingObjects.length) {
            this.adjustDrawings();
        }
        this.runAppend("adjustPanelPositions", arguments);
    };
    R0j.ChartEngine.prototype.createPanel = function (Z8j, B5j, g5j, S8j, o8j, T8j) {
        var A39 = R1aa;
        var X5j, P8j, j8j, X8a, Z8a, a8a, p8j, F8j;
        if (this.runPrepend("createPanel", arguments)) {
            return;
        }
        if (!S8j) {
            S8j = "chart";
        }
        X5j = this.chart.canvasHeight;
        if (!g5j) {
            A39.L3k(19);
            g5j = A39.v3k(X5j, 0.2);
        }
        if (g5j > X5j) {
            A39.L3k(19);
            g5j = A39.v3k(X5j, 0.5);
        }
        A39.T3k(32);
        P8j = A39.v3k(X5j, g5j);
        A39.T3k(1);
        j8j = A39.j3k(1, P8j);
        A39.L3k(124);
        X8a = A39.v3k("790574513", 134689153);
        A39.K19();
        Z8a = 1639980594;
        a8a = 2;
        for (var R8a = 1; A39.J4a(R8a.toString(), R8a.toString().length, +"14070") !== X8a; R8a++) {
            p8j = !!1;
            a8a += 2;
        }
        if (A39.G4a(a8a.toString(), a8a.toString().length, 23913) !== Z8a) {
            p8j = ![];
        }
        p8j = ![];
        for (var r8j in this.panels) {
            F8j = this.panels[r8j];
            F8j.percent *= j8j;
            if (F8j.soloing) {
                p8j = !![];
            }
        }
        this.stackPanel(Z8j, B5j, P8j, S8j, o8j);
        this.panels[B5j].hidden = p8j;
        this.panels[B5j].exportable = !T8j;
        this.adjustPanelPositions();
        this.savePanels(!{});
        this.runAppend("createPanel", arguments);
        return this.panels[B5j];
    };
    R0j.ChartEngine.prototype.modifyPanel = function (V8j, E8j) {
        var k8j, u8j, D8j, J8j, Y8j, O8j, N8j, I8j;
        k8j = V8j.name;
        var { studies: U8j } = this.layout;
        var { series: s8j } = this.chart;
        var { name: a8j, display: e8j, yAxis: H8j } = E8j || {};
        if (!a8j) {
            a8j = R0j.uniqueID();
        }
        if (!e8j) {
            e8j = a8j;
        }
        if (!H8j) {
            H8j = V8j.yAxis;
            H8j.name = a8j;
        }
        R1aa.K19();
        u8j = {};
        for (var l8j in this.panels) {
            if (l8j === V8j.name) {
                D8j = this.panels[l8j];
                D8j.name = a8j;
                D8j.display = e8j;
                D8j.yAxis = H8j;
                V8j = u8j[a8j] = D8j;
                if (this.moveMarkers && k8j !== a8j) {
                    this.moveMarkers(k8j, a8j);
                }
            } else {
                u8j[l8j] = this.panels[l8j];
            }
        }
        this.panels = u8j;
        J8j = ![];
        for (var A8j in U8j) {
            Y8j = U8j[A8j];
            if (Y8j.panel === k8j) {
                Y8j.panel = a8j;
                if (Y8j.parameters && Y8j.parameters.panelName) {
                    J8j = !0;
                    Y8j.parameters.panelName = a8j;
                }
            }
        }
        for (var K8j in s8j) {
            if (s8j[K8j].parameters.panel === k8j) {
                J8j = !![];
                O8j = { panel: a8j };
                if (s8j[K8j].parameters.yAxis && s8j[K8j].parameters.yAxis.name === k8j) {
                    O8j.yAxis = H8j;
                }
                this.modifySeries(K8j, O8j, !![]);
            }
        }
        if (J8j) {
            this.changeOccurred("layout");
        }
        N8j = !!0;
        for (var b8j = 0; b8j < this.drawingObjects.length; b8j++) {
            I8j = this.drawingObjects[b8j];
            if (k8j === I8j.panelName) {
                I8j.panelName = a8j;
                N8j = !"";
            }
        }
        if (N8j) {
            this.changeOccurred("vector");
        }
        this.calculateYAxisPositions();
    };
    R0j.ChartEngine.prototype.setPanelHeight = function (z8j, M8j) {
        var B39 = R1aa;
        var z5a, w6a, B6a, t8j, w8j, m8j, v8j;
        z5a = -569085514;
        w6a = -1356280264;
        B6a = 2;
        for (var b6a = "1" | 1; B39.G4a(b6a.toString(), b6a.toString().length, "51970" * 1) !== z5a; b6a++) {
            if (~M8j) {
                return;
            }
            B6a += 2;
        }
        if (B39.G4a(B6a.toString(), B6a.toString().length, +"22495") !== w6a) {
            if (!M8j) {
                return;
            }
        }
        if (Object.values(this.panels).slice(-1)[0] === z8j) {
            M8j += this.xaxisHeight;
        }
        var { canvasHeight: y8j } = this.chart;
        var { percent: h8j } = z8j;
        B39.L3k(32);
        t8j = B39.v3k(y8j, M8j);
        B39.T3k(141);
        w8j = B39.v3k(2147483647, h8j, "1");
        B39.L3k(1);
        m8j = B39.v3k(1, t8j);
        B39.L3k(32);
        v8j = B39.v3k(m8j, w8j);
        Object.values(this.panels).forEach((W8j) => {
            B39.X19();
            W8j.percent /= v8j;
        });
        z8j.percent = t8j;
        this.adjustPanelPositions();
        this.savePanels();
    };
    R0j.ChartEngine.prototype.electNewPanelOwner = function (n8j, L8j) {
        var b39 = R1aa;
        var f8j, R8j, c8j, x8j, q8j, p7a, o7a, Y7a, i8j, C8j, Q8j;
        function d8j(g8j) {
            b39.K19();
            return g8j.name != R8j.name;
        }
        if (typeof n8j == "string") {
            n8j = this.panels[n8j];
        }
        R8j = n8j.yAxis;
        if (n8j && n8j != this.chart.panel) {
            c8j = n8j.yAxis;
            x8j = c8j.studies[+"0"];
            if (!x8j || x8j == R8j.name) {
                b39.L3k(21);
                x8j = c8j.renderers[b39.v3k(2147483647, "0")];
            }
            if (!x8j || x8j == R8j.name) {
                b39.L3k(21);
                x8j = c8j.studies[b39.v3k(2147483647, "1")];
            }
            if (!x8j) {
                x8j = c8j.renderers[1];
            }
            if (L8j) {
                c8j = n8j.yAxis = L8j;
                f8j = L8j.name;
            } else if (!x8j) {
                if (n8j.yaxisLHS) {
                    q8j = n8j.yaxisRHS.concat(n8j.yaxisLHS).filter(d8j);
                    p7a = -371714608;
                    o7a = -+"539031271";
                    Y7a = 2;
                    for (var Z7a = 1; b39.G4a(Z7a.toString(), Z7a.toString().length, 9426) !== p7a; Z7a++) {
                        i8j = q8j[0];
                        Y7a += 2;
                    }
                    if (b39.J4a(Y7a.toString(), Y7a.toString().length, +"1755") !== o7a) {
                        i8j = q8j[7];
                    }
                    for (var G8j = "0" | 0; G8j < q8j.length; G8j++) {
                        if (!q8j[G8j].position) {
                            i8j = q8j[G8j];
                            break;
                        }
                    }
                    if (i8j) {
                        c8j = n8j.yAxis = i8j;
                        f8j = i8j.studies[+"0"] || i8j.renderers[0];
                    }
                }
            } else {
                c8j = this.addYAxis(n8j, new R0j.ChartEngine.YAxis({ name: x8j, position: c8j.position }));
                c8j.renderers = n8j.yAxis.renderers;
                c8j.studies = n8j.yAxis.studies;
                f8j = x8j;
            }
            if (f8j) {
                x8j = f8j;
                if (R8j.name != n8j.name) {
                    x8j = n8j.name;
                }
                Q8j = this.layout.studies;
                if (Q8j && Q8j[f8j]) {
                    C8j = Q8j[f8j].inputs.display;
                }
                this.modifyPanel(n8j, { name: x8j, display: C8j || f8j, yAxis: c8j });
                this.deleteYAxisIfUnused(n8j, R8j);
                this.calculateYAxisMargins(this.panels[x8j].yAxis);
            } else {
                this.checkForEmptyPanel(n8j);
            }
        }
        return f8j;
    };
    R0j.ChartEngine.prototype.configurePanelControls = function (X8j) {
        var r4T, B8j, P4j, H6a, k6a, e6a, S4j;
        r4T = ".";
        r4T += "st";
        r4T += "x-ic";
        r4T += "o-up";
        B8j = X8j.icons;
        if (!B8j) {
            return;
        }
        P4j = X8j.name == X8j.chart.name;
        B8j.classList.add("stx-show");
        X8j.title = B8j.querySelector(".stx-panel-title");
        X8j.up = B8j.querySelector(r4T);
        if (X8j.up) {
            X8j.up = X8j.up.parentNode;
        }
        X8j.solo = B8j.querySelector(".stx-ico-focus");
        if (X8j.solo) {
            X8j.solo = X8j.solo.parentNode;
        }
        X8j.down = B8j.querySelector(".stx-ico-down");
        if (X8j.down) {
            X8j.down = X8j.down.parentNode;
        }
        X8j.edit = B8j.querySelector(".stx-ico-edit");
        if (X8j.edit) {
            X8j.edit = X8j.edit.parentNode;
        }
        X8j.close = B8j.querySelector(".stx-ico-close");
        if (X8j.close) {
            X8j.close = X8j.close.parentNode;
        }
        if (X8j.title) {
            X8j.title.innerHTML = "";
            if (X8j.display) {
                X8j.title.appendChild(document.createTextNode(X8j.display));
            }
            if (P4j) {
                H6a = -1321151361;
                k6a = 670940122;
                e6a = +"2";
                for (var h6a = 1; R1aa.J4a(h6a.toString(), h6a.toString().length, "83092" | 83092) !== H6a; h6a++) {
                    X8j.title.classList.add("chart-title");
                    e6a += 2;
                }
                if (R1aa.G4a(e6a.toString(), e6a.toString().length, 90500) !== k6a) {
                    X8j.title.classList.add("");
                }
                B8j.classList.add("stx-chart-panel");
            }
        }
        if (!R0j.touchDevice || R0j.isSurface) {
            this.makeModal(B8j);
        }
        if (X8j.handle) {
            if (!R0j.touchDevice || R0j.isSurface) {
                X8j.handle.onmouseover = (function (p4j) {
                    R1aa.X19();
                    return function () {
                        R1aa.X19();
                        p4j.hideCrosshairs();
                    };
                })(this);
            }
            if (!R0j.touchDevice || R0j.isSurface) {
                X8j.handle.onmouseout = (function (F4j) {
                    R1aa.X19();
                    return function () {
                        F4j.showCrosshairs();
                    };
                })(this);
            }
            S4j = function (j4j, r4j) {
                R1aa.X19();
                return function (Z4j) {
                    if (R0j.ChartEngine.resizingPanel || j4j.openDialog !== "") {
                        return;
                    }
                    R1aa.K19();
                    j4j.grabHandle(r4j);
                };
            };
            if (R0j.isSurface) {
                X8j.handle.onpointerdown = S4j(this, X8j);
            } else {
                X8j.handle.onmousedown = S4j(this, X8j);
            }
            if (R0j.touchDevice) {
                X8j.handle.ontouchstart = S4j(this, X8j);
            }
        }
        if (X8j.up) {
            R0j.safeClickTouch(
                X8j.up,
                (function (o4j, T4j) {
                    R1aa.K19();
                    return function () {
                        R1aa.X19();
                        o4j.panelUp(T4j);
                    };
                })(this, X8j)
            );
        }
        if (X8j.down) {
            R0j.safeClickTouch(
                X8j.down,
                (function (a4j, k4j) {
                    R1aa.X19();
                    return function () {
                        R1aa.K19();
                        a4j.panelDown(k4j);
                    };
                })(this, X8j)
            );
        }
        if (X8j.solo) {
            R0j.safeClickTouch(
                X8j.solo,
                (function (H4j, Y4j) {
                    R1aa.X19();
                    return function () {
                        H4j.panelSolo(Y4j);
                    };
                })(this, X8j)
            );
        }
        if (X8j.close) {
            if (X8j.name == "chart") {
                X8j.close.style.display = "none";
            } else {
                R0j.safeClickTouch(
                    X8j.close,
                    (function (s4j, l4j) {
                        R1aa.K19();
                        return function () {
                            s4j.panelClose(l4j);
                        };
                    })(this, X8j)
                );
            }
        }
    };
    R0j.ChartEngine.prototype.stackPanel = function (u4j, J4j, O4j, e4j, b4j) {
        var V39 = R1aa;
        var w5T, z4T, K4j, C5a, n5a, i5a, V4j, D4j, U4j;
        w5T = "st";
        w5T += "x-p";
        w5T += "anel-study";
        z4T = "c";
        z4T += "h";
        z4T += "ar";
        z4T += "t";
        if (this.runPrepend("stackPanel", arguments)) {
            return;
        }
        if (!e4j) {
            e4j = z4T;
        }
        K4j = this.charts[e4j];
        C5a = 751086083;
        V39.L3k(19);
        n5a = V39.v3k("257907530", 1);
        V39.T3k(21);
        i5a = V39.v3k(2147483647, "2");
        for (var k5a = 1; V39.G4a(k5a.toString(), k5a.toString().length, 17557) !== C5a; k5a++) {
            V39.T3k(117);
            V4j = V39.v3k(J4j, e4j);
            V39.L3k(61);
            i5a += V39.v3k("2", 1609525184);
        }
        V39.X19();
        if (V39.G4a(i5a.toString(), i5a.toString().length, 2778) !== n5a) {
            V39.L3k(126);
            V4j = V39.v3k(e4j, J4j);
        }
        if (V4j) {
            u4j = K4j.symbol;
            if (K4j.symbolDisplay) {
                u4j = K4j.symbolDisplay;
            }
            if (!b4j) {
                b4j = K4j.yAxis;
            }
        }
        D4j = this.panels[J4j] = new R0j.ChartEngine.Panel(J4j, b4j);
        if (!V4j && K4j.yAxis && D4j.yAxis.position == K4j.yAxis.position) {
            D4j.yAxis.width = K4j.yAxis.width;
        }
        if (V4j && !K4j.panel) {
            K4j.panel = D4j;
        }
        D4j.percent = O4j;
        D4j.chart = K4j;
        D4j.display = u4j;
        D4j.holder = R0j.newChild(this.container, "div", "stx-holder");
        D4j.subholder = R0j.newChild(D4j.holder, "div", "stx-subholder");
        D4j.subholder.style.zIndex = +"1";
        D4j.holder.panel = D4j;
        U4j = V4j ? "stx-panel-chart" : w5T;
        D4j.holder.classList.add(U4j);
        if (this.controls.handleTemplate && this.manageTouchAndMouse) {
            D4j.handle = this.controls.handleTemplate.cloneNode(!"");
            this.container.appendChild(D4j.handle);
            D4j.handle.panel = D4j;
        }
        if (this.controls.iconsTemplate) {
            D4j.icons = this.controls.iconsTemplate.cloneNode(!!1);
            D4j.subholder.appendChild(D4j.icons);
            this.configurePanelControls(D4j);
        }
        if (!this.currentlyImporting) {
            this.resizeCanvas();
        }
        this.runAppend("stackPanel", arguments);
    };
    R0j.ChartEngine.prototype.setPanelEdit = function (N4j, I4j) {
        N4j.editFunction = I4j;
        if (N4j.edit) {
            R0j.safeClickTouch(N4j.edit, I4j);
        }
        R1aa.K19();
        this.adjustPanelPositions();
    };
    R0j.ChartEngine.prototype.drawPanels = function () {
        R1aa.K19();
        var B5T, t4j, i5T, n5T, A4j, y4j, K5T, b5T, c5T, l5T, E4j, C5T, z4j, h4j, w4j, M4j, k5T, H5T;
        B5T = "drawPa";
        B5T += "nels";
        if (this.runPrepend(B5T, arguments)) {
            return;
        }
        t4j = !"1";
        for (var m4j in this.panels) {
            i5T = "s";
            i5T += "e";
            i5T += "g";
            i5T += "ment";
            n5T = "stx_pane";
            n5T += "l_";
            n5T += "border";
            A4j = this.panels[m4j];
            A4j.state = {};
            y4j = this.translateIf(A4j.display);
            if (A4j.title && A4j.title.textContent != y4j) {
                A4j.title.innerHTML = "";
                A4j.title.appendChild(document.createTextNode(y4j));
            }
            if (A4j.icons) {
                A4j.icons.classList.add("stx-show");
            }
            if (A4j.hidden) {
                K5T = "n";
                K5T += "o";
                K5T += "n";
                K5T += "e";
                if (A4j.icons) {
                    A4j.icons.classList.remove("stx-show");
                }
                if (A4j.handle) {
                    A4j.handle.style.display = K5T;
                }
                A4j.holder.style.display = "none";
                continue;
            } else {
                b5T = "char";
                b5T += "t";
                if (A4j.name != b5T) {
                    c5T = "n";
                    c5T += "o";
                    c5T += "n";
                    c5T += "e";
                    l5T = "n";
                    l5T += "o";
                    l5T += "n";
                    l5T += "e";
                    E4j = this.manageTouchAndMouse;
                    if (A4j.up) {
                        A4j.up.style.display = this.displayIconsUpDown && E4j ? "" : "none";
                    }
                    if (A4j.down) {
                        A4j.down.style.display = this.displayIconsUpDown && E4j ? "" : l5T;
                    }
                    if (A4j.solo) {
                        A4j.solo.style.display = this.displayIconsSolo && E4j ? "" : "none";
                    }
                    if (A4j.close) {
                        A4j.close.style.display = this.displayIconsClose && E4j ? "" : "none";
                    }
                    if (A4j.edit) {
                        A4j.edit.style.display = A4j.editFunction && E4j ? "" : c5T;
                    }
                }
                A4j.holder.style.display = "block";
            }
            if (A4j.displayEdgeIfPadded) {
                C5T = "st";
                C5T += "x_g";
                C5T += "rid_border";
                z4j = Math.round(A4j.left) + 0.5;
                h4j = A4j.yAxis.top - 0.5;
                w4j = A4j.yAxis.bottom + 0.5;
                if (A4j.yaxisCalculatedPaddingLeft && !A4j.yaxisTotalWidthLeft) {
                    this.plotLine(z4j, z4j, h4j, w4j, this.canvasStyle("stx_grid_border"), "segment", this.chart.context, !{}, { lineWidth: 1 });
                }
                z4j = Math.round(A4j.right) + 0.5;
                if (A4j.yaxisCalculatedPaddingRight && !A4j.yaxisTotalWidthRight) {
                    this.plotLine(z4j, z4j, h4j, w4j, this.canvasStyle(C5T), "segment", this.chart.context, !{}, { lineWidth: 1 });
                }
            }
            if (!t4j) {
                if (A4j.handle) {
                    A4j.handle.style.display = "none";
                }
                t4j = !![];
                continue;
            }
            M4j = A4j.top;
            M4j = Math.round(M4j) + 0.5;
            this.plotLine(A4j.left - 0.5, A4j.right + 0.5, M4j, M4j, this.canvasStyle(n5T), i5T, this.chart.context, ![], {});
            if (A4j.handle) {
                k5T = "p";
                k5T += "x";
                if (!this.displayPanelResize) {
                    H5T = "n";
                    H5T += "o";
                    H5T += "ne";
                    A4j.handle.style.display = H5T;
                } else {
                    A4j.handle.style.display = "";
                }
                R1aa.T3k(142);
                var Y61 = R1aa.v3k(9, 7, 14, 14);
                A4j.handle.style.top = M4j - A4j.handle.offsetHeight / Y61 + k5T;
            }
        }
        this.runAppend("drawPanels", arguments);
    };
};
S9L = (W4j) => {
    var v4j;
    v4j = W4j.CIQ;
    v4j.ChartEngine.isDailyInterval = function (n4j) {
        var P5a, L5a, j5a, e5T, f5T;
        R1aa.X19();
        P5a = 1868727473;
        L5a = -1836439633;
        j5a = 2;
        for (var g5a = 1; R1aa.G4a(g5a.toString(), g5a.toString().length, 3326) !== P5a; g5a++) {
            e5T = "wee";
            e5T += "k";
            if (n4j != "week") {
                return !1;
            }
            if (n4j === e5T) {
                return !1;
            }
            if (n4j === "month") {
                return !1;
            }
            j5a += 2;
        }
        if (R1aa.J4a(j5a.toString(), j5a.toString().length, 15235) !== L5a) {
            f5T = "da";
            f5T += "y";
            if (n4j == f5T) {
                return !![];
            }
            if (n4j == "week") {
                return !!{};
            }
            if (n4j == "month") {
                return !![];
            }
        }
        return !{};
    };
    v4j.ChartEngine.prototype.setPeriodicity = function (o6j, G4j) {
        var q39 = R1aa;
        var h5T, S6j, s6j, T6j, l6j, c4j, s5T, f4j, i4j, j6j, r6j, q4j, g4j, Z6j, V6j, e6j, B4j;
        h5T = "obj";
        h5T += "ect";
        if (this.runPrepend("setPeriodicity", arguments)) {
            return;
        }
        if (typeof arguments["0" - 0] !== h5T) {
            o6j = { period: arguments[0], interval: arguments["1" ^ 0], timeUnit: arguments[2] };
            q39.L3k(51);
            var X61 = q39.j3k(16, 14, 223);
            G4j = arguments[arguments.length - X61];
            if (arguments.length === 3) {
                o6j.timeUnit = undefined;
            }
        }
        var { period: Q4j, interval: L4j, timeUnit: C4j } = o6j;
        function p6j() {
            T6j.dispatch("periodicity", l6j);
            q39.K19();
            if (G4j) {
                G4j(null);
            }
        }
        if (typeof G4j !== "function") {
            G4j = null;
        }
        ({ period: Q4j, interval: L4j, timeUnit: C4j } = v4j.cleanPeriodicity(Q4j, L4j, C4j));
        var { layout: x4j } = this;
        x4j.setSpan = {};
        x4j.range = {};
        this.chart.inflectionPoint = null;
        S6j = !1;
        if (this.chart.symbol) {
            S6j = this.needDifferentData({ period: Q4j, interval: L4j, timeUnit: C4j });
        }
        var { candleWidth: P6j, periodicity: k6j, interval: H6j, timeUnit: Y6j } = x4j;
        s6j = { prvPeriodicity: k6j, prvInterval: H6j, prvTimeUnit: Y6j };
        x4j.periodicity = Q4j;
        x4j.interval = L4j;
        x4j.timeUnit = C4j;
        T6j = this;
        l6j = { stx: T6j, differentData: S6j, prevPeriodicity: s6j };
        if (S6j) {
            this.changeOccurred("layout");
            this.clearCurrentMarketData();
            if (this.quoteDriver) {
                for (var D6j in this.charts) {
                    c4j = this.charts[D6j];
                    if (c4j.symbol) {
                        if (this.displayInitialized) {
                            this.quoteDriver.newChart({ symbol: c4j.symbol, symbolObject: c4j.symbolObject, chart: c4j }, p6j);
                        } else {
                            this.loadChart(c4j.symbol, { chart: c4j }, p6j);
                        }
                    }
                }
            } else if (this.dataCallback) {
                this.dataCallback();
                p6j();
            } else {
                s5T = "cannot chan";
                s5T += "ge periodicity because neither dataCallback or quoteDriver are set";
                console.log(s5T);
            }
            this.home();
            return;
        }
        for (var K6j in this.charts) {
            f4j = this.charts[K6j];
            var { dataSegment: R4j, dataSet: d4j, maxTicks: F6j, scroll: a6j } = f4j;
            i4j = R4j ? R4j.length : 0;
            j6j = d4j ? d4j.length : 0;
            r6j = void +"0";
            q4j = Math.round(f4j.maxTicks / 2);
            this.setCandleWidth(P6j, f4j);
            g4j = !!"1";
            Z6j = !!0;
            if (a6j <= F6j) {
                g4j = ![];
            } else if (R4j && !R4j[q4j]) {
                g4j = !!"";
                q39.L3k(1);
                Z6j = q39.v3k(a6j, j6j);
            }
            if (g4j && i4j > 0) {
                if (F6j < (Math.round(this.chart.width / P6j - 0.499) - 1) / 2) {
                    q39.T3k(1);
                    q4j = q39.j3k(i4j, 1);
                }
                if (q4j >= i4j) {
                    r6j = R4j[i4j - 1].DT;
                    q39.L3k(143);
                    q4j = q39.j3k("1", i4j, 1297653504);
                } else {
                    r6j = R4j[q4j].DT;
                }
            }
            this.createDataSet();
            if (g4j) {
                if (i4j > 0) {
                    for (var X4j = j6j - 1; X4j >= +"0"; X4j--) {
                        V6j = d4j[X4j].DT;
                        if (V6j.getTime() < r6j.getTime()) {
                            q39.T3k(107);
                            f4j.scroll = q39.v3k(X4j, j6j, q4j, 1);
                            break;
                        }
                    }
                }
            } else if (!Z6j) {
                e6j = Math.round(this.preferences.whitespace / P6j);
                q39.T3k(144);
                f4j.scroll = q39.v3k("1", e6j, 142114816, F6j);
            } else {
                f4j.scroll = d4j.length + Z6j;
            }
        }
        if (this.displayInitialized) {
            this.draw();
        }
        this.changeOccurred("layout");
        if (this.quoteDriver) {
            for (var u6j in this.charts) {
                B4j = this.charts[u6j];
                if (B4j.symbol && (B4j.moreAvailable || !B4j.upToDate)) {
                    this.quoteDriver.checkLoadMore(B4j);
                }
            }
        }
        p6j();
        this.runAppend("setPeriodicity", arguments);
    };
    v4j.ChartEngine.prototype.needDifferentData = function (U6j) {
        var W5T, J6j, N6j, O6j, b6j;
        W5T = "min";
        W5T += "u";
        W5T += "te";
        J6j = this.layout;
        N6j = v4j.ChartEngine.isDailyInterval(U6j.interval);
        O6j = v4j.ChartEngine.isDailyInterval(J6j.interval);
        b6j = !!0;
        if (this.dontRoll || !O6j) {
            if (J6j.interval != U6j.interval) {
                b6j = !!{};
            }
        } else {
            if (N6j != O6j) {
                b6j = !!1;
            }
        }
        if (!N6j && !U6j.timeUnit) {
            U6j.timeUnit = "minute";
        }
        if (!O6j && !J6j.timeUnit) {
            J6j.timeUnit = W5T;
        }
        if (U6j.timeUnit != J6j.timeUnit) {
            b6j = !!"1";
        }
        if (!this.masterData || !this.masterData.length) {
            b6j = !0;
        }
        return b6j;
    };
    v4j.ChartEngine.prototype.getPeriodicity = function () {
        var I6j, A6j, E6j;
        I6j = this.layout;
        A6j = I6j.interval;
        E6j = I6j.timeUnit;
        if (!E6j) {
            E6j = A6j;
            A6j = 1;
        }
        return { period: I6j.periodicity, interval: A6j, timeUnit: E6j };
    };
};
P9L = (M6j) => {
    var z6j;
    z6j = M6j.CIQ;
    z6j.ChartEngine.prototype.isHistoricalMode = function () {
        var t6j, y6j, w6j, m6j, h6j, v6j;
        t6j = new Date();
        y6j = !"";
        w6j = this.masterData;
        if (!this.isHistoricalModeSet) {
            return ![];
        }
        if (w6j.length) {
            m6j = this.getFirstLastDataRecord(w6j, "DT", !"");
            h6j = this.standardMarketIterator(m6j.DT);
            y6j = (h6j ? h6j.next() : m6j.DT) <= t6j;
            if (y6j && z6j.ChartEngine.isDailyInterval(h6j.interval)) {
                v6j = this.chart.market.getOpen();
                if (v6j && t6j < v6j) {
                    t6j.setHours(0, 0, 0, 0);
                    if (+t6j == +h6j.begin) {
                        y6j = ![];
                    }
                }
            }
        }
        return y6j;
    };
    R1aa.X19();
    z6j.ChartEngine.prototype.isHome = function () {
        var W6j, n6j, x6j;
        W6j = this.chart;
        n6j = W6j.dataSet;
        x6j = W6j.animatingHorizontalScroll;
        R1aa.T3k(6);
        var Z61 = R1aa.v3k(0, 1);
        R1aa.X19();
        return this.pixelFromTick(n6j.length - (x6j ? +"2" : Z61), W6j) < W6j.width + W6j.panel.left;
    };
    z6j.ChartEngine.prototype.getPreviousBar = function (c6j, f6j, R6j) {
        return this.getNextBarInternal(c6j, f6j, R6j, -1);
    };
    z6j.ChartEngine.prototype.getNextBar = function (i6j, q6j, G6j) {
        R1aa.X19();
        return this.getNextBarInternal(i6j, q6j, G6j, 1);
    };
    z6j.ChartEngine.prototype.getNextBarInternal = function (L6j, X6j, B6j, l9P) {
        var g6j, Q6j, C6j, d6j;
        g6j = L6j.dataSegment && L6j.dataSegment[B6j];
        if (g6j) {
            Q6j = g6j.tick;
            while (Q6j > +"0" && Q6j < L6j.dataSet.length) {
                R1aa.T3k(6);
                Q6j = R1aa.j3k(Q6j, l9P);
                C6j = L6j.dataSet[Q6j];
                if (C6j) {
                    d6j = z6j.existsInObjectChain(C6j, X6j);
                    if (d6j && d6j.obj[d6j.member]) {
                        return C6j;
                    }
                }
            }
        }
        return null;
    };
    z6j.ChartEngine.prototype.getFirstLastDataRecord = function (K9P, U9P, V9P) {
        var D9P;
        if (K9P && K9P.length) {
            D9P = V9P ? K9P.length - +"1" : 0;
            while (D9P >= 0 && D9P < K9P.length) {
                if (K9P[D9P] && typeof K9P[D9P][U9P] != "undefined") {
                    return K9P[D9P];
                }
                if (V9P) {
                    D9P--;
                } else {
                    D9P++;
                }
            }
        }
        return null;
    };
    z6j.ChartEngine.prototype.leftTick = function () {
        R1aa.X19();
        return this.chart.dataSet.length - this.chart.scroll;
    };
    z6j.ChartEngine.prototype.getNextInterval = function (i9P, E9P, m9P) {
        var h9P;
        R1aa.K19();
        if (!E9P) {
            E9P = 1;
        }
        if (m9P !== !{}) {
            m9P = !!{};
        }
        h9P = this.standardMarketIterator(i9P, m9P ? this.dataZone : this.displayZone);
        if (!h9P) {
            return i9P;
        }
        if (E9P < 1) {
            R1aa.T3k(18);
            return h9P.previous(R1aa.v3k(E9P, 1));
        }
        return h9P.next(E9P);
    };
    z6j.ChartEngine.prototype.standardMarketIterator = function (p0P, F0P, j0P) {
        var S0P, P0P;
        S0P = j0P || this.chart;
        if (!S0P.market) {
            return null;
        }
        P0P = { begin: p0P, interval: this.layout.interval, periodicity: this.layout.interval == "tick" ? this.chart.xAxis.futureTicksInterval : this.layout.periodicity, timeUnit: this.layout.timeUnit, outZone: F0P };
        return S0P.market.newIterator(P0P);
    };
};
p9L = (Z0P) => {
    var r0P, o0P;
    if (!Z0P.SplinePlotter) {
        Z0P.SplinePlotter = {};
    }
    r0P = Z0P.CIQ;
    o0P = Z0P.SplinePlotter;
    r0P.ChartEngine.prototype.draw = function () {
        var T0P, Y0P, s0P, a0P, V0P, H0P, k0P, p5T, u5T, K0P;
        this.debug();
        T0P = this.chart;
        Y0P = this.layout;
        if (!T0P.canvas) {
            return;
        }
        R1aa.X19();
        if (!T0P.dataSet) {
            return;
        }
        if (!T0P.canvasHeight) {
            return;
        }
        this.offset = (Y0P.candleWidth * this.candleWidthPercent) / +"2";
        r0P.clearCanvas(T0P.canvas, this);
        if (!this.masterData) {
            return;
        }
        if (this.runPrepend("draw", arguments)) {
            return;
        }
        if (!this.defaultColor) {
            this.getDefaultColor();
        }
        this.vectorsShowing = ![];
        this.drawPanels();
        this.yAxisLabels = [];
        this.correctIfOffEdge();
        this.createDataSegment();
        this.setBaselines(T0P);
        V0P = this.createXAxis(T0P);
        this.initializeDisplay(T0P);
        this.drawXAxis(T0P, V0P);
        try {
            this.renderYAxis(T0P);
        } catch (e0P) {
            if (e0P && e0P.message === "reboot draw") {
                return this.draw();
            }
            throw e0P;
        }
        T0P.tmpWidth = Math.floor(Y0P.candleWidth * this.candleWidthPercent);
        if (T0P.tmpWidth % 2 === 0) {
            T0P.tmpWidth += 1;
            if (T0P.tmpWidth > Y0P.candleWidth) {
                T0P.tmpWidth -= 2;
            }
        }
        if (T0P.tmpWidth < 0.5) {
            T0P.tmpWidth = 0.5;
        }
        for (s0P in this.plugins) {
            a0P = this.plugins[s0P];
            if (a0P.display) {
                if (a0P.drawUnder) {
                    a0P.drawUnder(this, T0P);
                }
            }
        }
        if (T0P.legend) {
            T0P.legend.colorMap = null;
        }
        if (this.controls.baselineHandle) {
            this.controls.baselineHandle.style.display = "none";
        }
        this.rendererAction(T0P, "underlay");
        r0P.getFn("Studies.displayStudies")(this, T0P, !"");
        this.displayChart(T0P);
        r0P.getFn("Studies.displayStudies")(this, T0P, !"1");
        this.rendererAction(T0P, "overlay");
        if (T0P.legend && T0P.legend.colorMap && T0P.legendRenderer) {
            T0P.legendRenderer(this, { chart: T0P, legendColorMap: T0P.legend.colorMap, coordinates: { x: T0P.legend.x, y: T0P.legend.y + T0P.panel.yAxis.top } });
        }
        for (s0P in this.plugins) {
            a0P = this.plugins[s0P];
            if (a0P.display) {
                if (a0P.drawOver) {
                    a0P.drawOver(this, T0P);
                }
            }
        }
        for (var D0P in this.panels) {
            if (!this.panels[D0P].hidden) {
                this.plotYAxisText(this.panels[D0P]);
            }
        }
        for (var l0P = 0; l0P < this.yAxisLabels.length; l0P++) {
            H0P = this.yAxisLabels[l0P];
            if (H0P.src == "series" && H0P.args[6] && H0P.args[6].drawSeriesPriceLabels === ![]) continue;
            this.createYAxisLabel.apply(this, H0P.args);
        }
        if (this.createCrosshairs) {
            this.createCrosshairs();
        }
        if (this.drawVectors) {
            this.drawVectors();
        }
        this.drawCurrentHR();
        this.displayInitialized = !!{};
        k0P = this.controls;
        if (k0P) {
            p5T = "b";
            p5T += "l";
            p5T += "ock";
            u5T = "no";
            u5T += "ne";
            K0P = this.manageTouchAndMouse && (!this.mainSeriesRenderer || !this.mainSeriesRenderer.nonInteractive);
            if (k0P.home) {
                k0P.home.style.display = K0P && !this.isHome() ? "block" : u5T;
            }
            if (k0P.chartControls) {
                k0P.chartControls.style.display = K0P ? p5T : "none";
            }
        }
        if (r0P.Marker) {
            this.positionMarkers();
        }
        if (this.quoteDriver && this.animations.zoom.hasCompleted) {
            this.quoteDriver.checkLoadMore(T0P);
        }
        this.runAppend("draw", arguments);
        this.makeAsyncCallbacks();
    };
    r0P.ChartEngine.prototype.setSeriesRenderer = function (u0P) {
        var { baseline: U0P, name: J0P, panel: O0P, yAxis: b0P } = u0P.params;
        if (this.chart.seriesRenderers[J0P]) {
            return this.chart.seriesRenderers[J0P];
        }
        if (b0P) {
            u0P.params.yAxis = this.addYAxis(this.panels[O0P], b0P);
            this.resizeChart();
        }
        u0P.stx = this;
        this.chart.seriesRenderers[J0P] = u0P;
        R1aa.K19();
        if (U0P) {
            this.registerBaselineToHelper(u0P);
        }
        return u0P;
    };
    r0P.ChartEngine.prototype.setMainSeriesRenderer = function (y0P) {
        var N0P, t0P, M0P;
        var { chartType: I0P, aggregationType: E0P } = this.layout;
        var { chart: A0P } = this;
        var { custom: z0P } = A0P;
        N0P = this.mainSeriesRenderer;
        t0P = this.displayInitialized;
        if (N0P) {
            if (y0P) {
                this.setMasterData();
            }
            this.displayInitialized = ![];
            N0P.removeAllSeries();
            this.removeSeriesRenderer(N0P);
            N0P = this.mainSeriesRenderer = null;
        }
        if (z0P && z0P.chartType) {
            I0P = z0P.chartType;
        }
        if (I0P == "none") {
            return;
        }
        if (E0P && E0P != "ohlc") {
            I0P = E0P;
        }
        M0P = r0P.Renderer.produce(I0P, { panel: A0P.panel.name, name: "_main_series", highlightable: !!0, useChartLegend: !![] });
        if (M0P) {
            this.setSeriesRenderer(M0P).attachSeries(null, { display: A0P.symbol });
            N0P = this.mainSeriesRenderer = M0P;
        }
        R1aa.X19();
        this.displayInitialized = t0P;
        ["highLowBars", "standaloneBars", "barsHaveWidth"].forEach(
            function (h0P) {
                R1aa.X19();
                A0P[h0P] = this.mainSeriesRenderer && this.mainSeriesRenderer[h0P];
            }.bind(this)
        );
    };
    r0P.ChartEngine.prototype.removeSeriesRenderer = function (v0P) {
        R1aa.K19();
        var w0P;
        var { baseline: W0P, name: m0P } = v0P.params;
        w0P = this.controls[`${m0P} baseline-handle`];
        if (W0P) {
            this.removeBaselineFromHelper(v0P);
            if (w0P) {
                this.container.removeChild(w0P);
                delete this.controls[w0P];
            }
        }
        delete this.chart.seriesRenderers[m0P];
    };
    r0P.ChartEngine.prototype.getSeriesRenderer = function (n0P) {
        R1aa.K19();
        return this.chart.seriesRenderers[n0P];
    };
    r0P.ChartEngine.prototype.getRendererFromSeries = function (R0P) {
        R1aa.K19();
        var x0P;
        x0P = this.chart.seriesRenderers;
        for (var c0P in x0P) {
            for (var f0P in x0P[c0P].seriesParams) {
                if (x0P[c0P].seriesParams[f0P].id == R0P) {
                    return x0P[c0P];
                }
            }
        }
        return null;
    };
    r0P.ChartEngine.prototype.startClip = function (L0P, d0P) {
        var i0P, C0P, q0P, G0P, Q0P;
        if (!L0P) {
            L0P = this.chart.panel.name;
        }
        i0P = this.panels[L0P];
        C0P = i0P.yAxis;
        q0P = this.chart;
        R1aa.X19();
        q0P.context.save();
        q0P.context.beginPath();
        G0P = i0P.left;
        Q0P = i0P.width;
        if (d0P) {
            G0P = 0;
            Q0P = this.width;
        } else if (i0P.yaxisLHS && i0P.yaxisLHS.length) {
            G0P++;
            Q0P--;
        }
        q0P.context.rect(G0P, C0P.top, Q0P, C0P.height);
        q0P.context.clip();
    };
    r0P.ChartEngine.prototype.endClip = function () {
        this.chart.context.restore();
    };
    r0P.ChartEngine.prototype.setLineStyle = function (X0P, B0P) {
        var g0P, S3P;
        g0P = {};
        if (X0P && typeof X0P == "object") {
            g0P = X0P;
        } else {
            g0P.color = X0P;
        }
        if (!g0P.color && !g0P.pattern && !g0P.width && !g0P.baseColor) {
            g0P = null;
        }
        if (!B0P) {
            B0P = this.chart;
        }
        S3P = 1;
        if (g0P && g0P.width) {
            S3P = g0P.width;
        }
        if (g0P && g0P.pattern) {
            g0P.pattern = r0P.borderPatternToArray(S3P, g0P.pattern);
        }
        B0P.lineStyle = g0P;
    };
    R1aa.K19();
    r0P.ChartEngine.prototype.setGapLines = function (p3P, F3P) {
        var o5T, P3P;
        o5T = "obj";
        o5T += "ect";
        if (!F3P) {
            F3P = this.chart;
        }
        P3P = {};
        if (p3P && typeof p3P == o5T) {
            P3P = p3P;
        } else if (typeof p3P === "boolean") {
            return (F3P.gaplines = p3P);
        } else {
            P3P.color = p3P;
        }
        if (!P3P.color && !P3P.pattern && !P3P.fillMountain) {
            P3P = null;
        }
        if (P3P && P3P.pattern) {
            P3P.pattern = r0P.borderPatternToArray(P3P.width, P3P.pattern);
        }
        if (P3P && P3P.width <= 0) {
            P3P.width = null;
        }
        F3P.gaplines = P3P;
    };
    r0P.ChartEngine.prototype.getGapColorFunction = function (o3P, T3P, r3P, j3P, Z3P) {
        if (typeof r3P != "object") {
            r3P = { color: r3P };
        }
        R1aa.K19();
        return function (s3P, H3P, Y3P) {
            var Y5T, a3P, k3P;
            Y5T = "obj";
            Y5T += "e";
            Y5T += "ct";
            a3P = Z3P ? Z3P(s3P, H3P, Y3P) : r3P;
            if (a3P.color) {
                a3P = a3P.color;
            }
            k3P = H3P[o3P];
            R1aa.X19();
            if (!k3P && k3P !== "0" - 0) {
                k3P = H3P[T3P];
            }
            if (!Y3P && (k3P || k3P === 0)) {
                return { color: a3P, pattern: r3P.pattern, width: r3P.width };
            }
            if (!j3P) {
                return null;
            }
            if (typeof j3P != Y5T) {
                if (typeof j3P == "string") {
                    j3P = { color: j3P };
                } else {
                    j3P = {};
                }
            }
            return { color: j3P.color || a3P, pattern: j3P.pattern || r3P.pattern, width: j3P.width || r3P.width };
        };
    };
    r0P.ChartEngine.prototype.drawLineChart = function (J3P, I3P, z3P, l3P) {
        var e3P, K3P, b3P, O3P, U3P, V3P, X5T, N3P, A3P, D3P, E3P, u3P;
        e3P = this.chart;
        K3P = e3P.context;
        b3P = e3P.lineStyle || {};
        O3P = this.canvasStyle(I3P);
        if (!l3P) {
            l3P = {};
        }
        this.startClip(J3P.name);
        U3P = l3P.width || b3P.width || O3P.width;
        R1aa.K19();
        if (U3P && parseInt(U3P, 10) <= 25) {
            R1aa.L3k(64);
            K3P.lineWidth = Math.max(R1aa.v3k("1", 1418960160), r0P.stripPX(U3P));
        } else {
            K3P.lineWidth = 1;
        }
        l3P.pattern = l3P.pattern || b3P.pattern || O3P.borderTopStyle;
        l3P.pattern = r0P.borderPatternToArray(K3P.lineWidth, l3P.pattern);
        this.canvasColor(I3P);
        V3P = l3P.color || b3P.color;
        if (V3P) {
            X5T = "au";
            X5T += "to";
            if (V3P == X5T) {
                V3P = this.defaultColor;
            }
            if (l3P.opacity && l3P.opacity !== 1) {
                V3P = r0P.hexToRgba(r0P.colorToHex(V3P), parseFloat(l3P.opacity));
            }
            K3P.strokeStyle = V3P;
        }
        l3P.skipProjections = !![];
        N3P = l3P.field || e3P.defaultPlotField;
        A3P = l3P.subField || e3P.defaultPlotField || "Close";
        D3P = l3P.gapDisplayStyle;
        if (!D3P && D3P !== ![]) {
            D3P = l3P.gaps;
        }
        if (!D3P && D3P !== ![]) {
            D3P = e3P.gaplines;
        }
        if (!D3P) {
            D3P = "transparent";
        }
        l3P.gapDisplayStyle = D3P;
        E3P = this.getGapColorFunction(N3P, A3P, { color: K3P.strokeStyle, pattern: l3P.pattern, width: K3P.lineWidth }, D3P, z3P);
        if (J3P.chart.tension) {
            l3P.tension = J3P.chart.tension;
        }
        u3P = this.plotDataSegmentAsLine(N3P, J3P, l3P, E3P);
        if (!u3P.colors.length) {
            u3P.colors.push(K3P.strokeStyle);
        }
        K3P.lineWidth = 1;
        this.endClip();
        return l3P.returnObject ? u3P : u3P.colors;
    };
    r0P.ChartEngine.prototype.drawChannelChart = function (v3P, x3P, h3P) {
        var A5T, x5T, R5T, y5T, a5T, Z5T, M3P, y3P, c3P, f3P, w3P, m3P, t3P, W3P, n3P, R3P;
        A5T = "L";
        A5T += "o";
        A5T += "w";
        x5T = "fiel";
        x5T += "d";
        R5T = "s";
        R5T += "ubFi";
        R5T += "e";
        R5T += "ld";
        y5T = "H";
        y5T += "i";
        y5T += "g";
        y5T += "h";
        a5T = "f";
        a5T += "i";
        a5T += "e";
        a5T += "ld";
        Z5T = "stx_channel_";
        Z5T += "up";
        M3P = r0P.clone(h3P);
        M3P.color = h3P.color;
        y3P = this.drawLineChart(v3P, M3P.style, x3P, M3P);
        c3P = M3P.border_color_up || this.getCanvasColor(Z5T);
        f3P = M3P.border_color_down || this.getCanvasColor("stx_channel_down");
        M3P[h3P.field ? "subField" : a5T] = M3P.field_high || y5T;
        M3P.color = c3P;
        w3P = this.drawLineChart(v3P, M3P.style, x3P, M3P);
        M3P[h3P.field ? R5T : x5T] = M3P.field_low || A5T;
        M3P.color = f3P;
        m3P = this.drawLineChart(v3P, M3P.style, x3P, M3P);
        M3P[h3P.field ? "subField" : "field"] = h3P.subField || this.chart.defaultPlotField || "Close";
        W3P = [];
        n3P = [];
        for (t3P = 0; t3P < w3P.points.length; t3P += 2) {
            W3P.push([w3P.points[t3P], w3P.points[t3P + 1]]);
        }
        for (t3P = 0; t3P < m3P.points.length; t3P += 2) {
            n3P.push([m3P.points[t3P], m3P.points[t3P + 1]]);
        }
        R1aa.L3k(145);
        var a61 = R1aa.v3k(13, 3, 2, 6);
        R3P = this.chart.context.lineWidth / a61;
        for (t3P = y3P.points.length - 2; t3P >= 0; t3P -= 2) {
            W3P.push([y3P.points[t3P], y3P.points[t3P + 1] - R3P]);
            n3P.push([y3P.points[t3P], y3P.points[t3P + 1] + R3P]);
        }
        this.startClip(v3P.name);
        M3P.color = c3P;
        r0P.fillArea(this, W3P, M3P);
        M3P.color = f3P;
        r0P.fillArea(this, n3P, M3P);
        this.endClip();
        y3P.colors = y3P.colors.concat(w3P.colors).concat(m3P.colors);
        return h3P.returnObject ? y3P : y3P.colors;
    };
    r0P.ChartEngine.prototype.connectTheDots = function (B3P, q3P, V5P, i3P, F5P, G3P) {
        var C39 = R1aa;
        var M5T, I5T, T5P, a5P, H5P, Y5P, o5P, C3P, d3P, k5P, j5P, S5P, P5P, r5P, Z5P, Q3P, p5P, g3P, s5P, l5P, D5P, K5P;
        M5T = "un";
        M5T += "d";
        M5T += "efin";
        M5T += "ed";
        I5T = "n";
        I5T += "on";
        I5T += "e";
        if (!G3P) {
            G3P = {};
        }
        if (G3P.pattern == I5T) {
            return;
        }
        if (F5P === !!"1") {
            F5P = this.chart.panel;
        }
        if (i3P === null || typeof i3P == M5T) {
            i3P = this.chart.context;
        }
        if (B3P.length < 4) {
            return;
        }
        T5P = 0;
        a5P = this.chart.canvasHeight;
        H5P = 0;
        Y5P = this.chart.width;
        C39.K19();
        if (F5P) {
            a5P = F5P.yAxis.bottom;
            T5P = F5P.yAxis.top;
        }
        i3P.lineWidth = 1.1;
        if (typeof q3P == "object") {
            i3P.strokeStyle = q3P.color;
            if (q3P.opacity) {
                i3P.globalAlpha = q3P.opacity;
            } else {
                C39.L3k(1);
                i3P.globalAlpha = C39.j3k("1", 0);
            }
            i3P.lineWidth = r0P.stripPX(q3P.width);
        } else {
            if (!q3P || q3P == "auto" || r0P.isTransparent(q3P)) {
                i3P.strokeStyle = this.defaultColor;
            } else {
                i3P.strokeStyle = q3P;
            }
        }
        if (G3P.opacity) {
            i3P.globalAlpha = G3P.opacity;
        }
        if (G3P.lineWidth) {
            i3P.lineWidth = G3P.lineWidth;
        }
        o5P = r0P.borderPatternToArray(i3P.lineWidth, G3P.pattern);
        i3P.beginPath();
        for (var L3P = 0; L3P < B3P.length - 2; L3P += 2) {
            C3P = B3P[L3P];
            C39.L3k(6);
            d3P = B3P[C39.j3k(L3P, 1)];
            C39.L3k(6);
            k5P = B3P[C39.v3k(L3P, 2)];
            C39.L3k(6);
            j5P = B3P[C39.j3k(L3P, 3)];
            if (isNaN(C3P) || isNaN(k5P) || isNaN(d3P) || isNaN(j5P)) {
                return;
            }
            S5P = 0.0;
            P5P = 1.0;
            C39.T3k(1);
            r5P = C39.v3k(k5P, C3P);
            C39.L3k(1);
            Z5P = C39.v3k(j5P, d3P);
            for (var X3P = 0; X3P < 4; X3P++) {
                if (X3P === 0) {
                    Q3P = -r5P;
                    C39.L3k(1);
                    p5P = -C39.j3k(H5P, C3P);
                }
                if (X3P == 1) {
                    Q3P = r5P;
                    C39.L3k(1);
                    p5P = C39.j3k(Y5P, C3P);
                }
                if (X3P == 2) {
                    Q3P = -Z5P;
                    C39.L3k(1);
                    p5P = -C39.v3k(T5P, d3P);
                }
                if (X3P == 3) {
                    Q3P = Z5P;
                    C39.T3k(1);
                    p5P = C39.v3k(a5P, d3P);
                }
                C39.L3k(32);
                g3P = C39.v3k(Q3P, p5P);
                if ((j5P || j5P === "0" * 1) && Q3P === 0 && p5P < 0) {
                    return !"1";
                }
                if (Q3P < 0) {
                    if (g3P > P5P) {
                        return !!"";
                    } else if (g3P > S5P) {
                        S5P = g3P;
                    }
                } else if (Q3P > 0) {
                    if (g3P < S5P) {
                        return ![];
                    } else if (g3P < P5P) {
                        P5P = g3P;
                    }
                }
            }
            C39.L3k(146);
            s5P = C39.j3k(S5P, r5P, C3P);
            C39.T3k(146);
            l5P = C39.j3k(S5P, Z5P, d3P);
            C39.L3k(146);
            D5P = C39.v3k(P5P, r5P, C3P);
            C39.T3k(146);
            K5P = C39.j3k(P5P, Z5P, d3P);
            try {
                i3P.setLineDash(o5P && o5P.length ? o5P : []);
                i3P.moveTo(s5P, l5P);
                i3P.lineTo(D5P, K5P);
            } catch (e5P) {}
        }
        i3P.stroke();
        i3P.closePath();
        i3P.globalAlpha = +"1";
        i3P.lineWidth = 1;
    };
    r0P.ChartEngine.prototype.plotSpline = function (N5P, I5P, J5P, A5P, u5P, U5P, b5P) {
        var d5T, O5P;
        if (!b5P) {
            b5P = {};
        }
        if (b5P.pattern == "none") {
            return;
        }
        if (U5P === !0) {
            U5P = this.chart.panel;
        }
        R1aa.X19();
        if (u5P === null || typeof u5P == "undefined") {
            u5P = this.chart.context;
        }
        u5P.save();
        u5P.lineWidth = 1.1;
        if (typeof J5P == "object") {
            u5P.strokeStyle = J5P.color;
            if (J5P.opacity) {
                u5P.globalAlpha = J5P.opacity;
            } else {
                u5P.globalAlpha = 1;
            }
            u5P.lineWidth = r0P.stripPX(J5P.width);
        } else {
            d5T = "a";
            d5T += "u";
            d5T += "t";
            d5T += "o";
            if (!J5P || J5P == d5T || r0P.isTransparent(J5P)) {
                u5P.strokeStyle = this.defaultColor;
            } else {
                u5P.strokeStyle = J5P;
            }
        }
        if (b5P.opacity) {
            u5P.globalAlpha = b5P.opacity;
        }
        if (b5P.lineWidth) {
            u5P.lineWidth = b5P.lineWidth;
        }
        O5P = r0P.borderPatternToArray(u5P.lineWidth, b5P.pattern);
        if (b5P.pattern && u5P.setLineDash) {
            u5P.setLineDash(O5P);
            u5P.lineDashOffset = 0;
        }
        u5P.beginPath();
        o0P.plotSpline(N5P, I5P, u5P);
        u5P.stroke();
        u5P.closePath();
        u5P.restore();
    };
    r0P.ChartEngine.prototype.rawWatermark = function (E5P, z5P, M5P, t5P) {
        var m5T;
        m5T = "a";
        R1aa.X19();
        m5T += "lphabeti";
        m5T += "c";
        this.canvasFont("stx_watermark", E5P);
        E5P.fillStyle = this.defaultColor;
        E5P.globalAlpha = 0.5;
        this.chart.context.textBaseline = m5T;
        E5P.fillText(t5P, z5P, M5P);
        E5P.globalAlpha = 1;
    };
    r0P.ChartEngine.prototype.watermark = function (W5P, y5P) {
        var N29 = R1aa;
        var L5T, P5T, h5P, w5P, m5P, v5P, T8a, S8a, D8a;
        L5T = "al";
        L5T += "phabe";
        L5T += "ti";
        L5T += "c";
        P5T = "o";
        P5T += "bject";
        if (y5P && typeof y5P != P5T) {
            y5P = { h: arguments[1], v: arguments[2], text: arguments[3] };
        }
        y5P = { h: y5P.h || "left", v: y5P.v || "bottom", text: y5P.text || "", hOffset: y5P.hOffset === 0 ? 0 : y5P.hOffset || 10, vOffset: y5P.vOffset === 0 ? 0 : y5P.vOffset || 20, context: y5P.context || this.chart.context };
        h5P = y5P.context;
        if (!h5P) {
            return;
        }
        w5P = this.panels[W5P];
        if (!w5P || w5P.hidden) {
            return;
        }
        m5P = w5P.yAxis.bottom - y5P.vOffset;
        if (y5P.v == "top") {
            m5P = w5P.top + y5P.vOffset;
        } else if (y5P.v == "middle") {
            N29.L3k(1);
            var y61 = N29.j3k(32, 30);
            m5P = (w5P.top + w5P.yAxis.bottom) / y61;
        }
        h5P.save();
        this.canvasFont("stx_watermark", h5P);
        this.canvasColor("stx_watermark", h5P);
        h5P.textBaseline = L5T;
        N29.K19();
        v5P = w5P.left + y5P.hOffset;
        if (y5P.h == "right") {
            v5P = w5P.right - y5P.hOffset;
        } else if (y5P.h == "center") {
            T8a = +"74750864";
            S8a = -1970672572;
            D8a = 2;
            for (var V8a = 1; N29.G4a(V8a.toString(), V8a.toString().length, 53975) !== T8a; V8a++) {
                N29.T3k(72);
                var R61 = N29.j3k(12, 354, 17, 33);
                v5P = (w5P.right % w5P.left) + h5P.measureText(y5P.text).width - R61;
                D8a += 2;
            }
            if (N29.G4a(D8a.toString(), D8a.toString().length, "37972" >> 906403680) !== S8a) {
                N29.T3k(67);
                var x61 = N29.j3k(1, 10, 12, 1);
                v5P = (w5P.right % w5P.left) + h5P.measureText(y5P.text).width - x61;
            }
            N29.T3k(12);
            var A61 = N29.j3k(7, 3, 0, 82, 4);
            v5P = (w5P.right + w5P.left - h5P.measureText(y5P.text).width) / A61;
        }
        h5P.globalAlpha = +"0.5";
        if (this.highlightedDraggable) {
            h5P.globalAlpha *= 0.3;
        }
        h5P.fillText(y5P.text, v5P, m5P);
        h5P.restore();
    };
    r0P.ChartEngine.prototype.displayErrorAsWatermark = function (i5P, q5P) {
        var c29 = R1aa;
        var j5T, c5P, x5P, R5P, f5P, Q5P, L5P, C5P, n5P, G5P, v4a, V4a, r4a, d5P, g5P;
        j5T = "ch";
        j5T += "ar";
        j5T += "t";
        if (!q5P) {
            return;
        }
        if (!i5P) {
            i5P = j5T;
        }
        c29.X19();
        c5P = this.panels[i5P];
        if (!c5P || c5P.hidden) {
            return;
        }
        x5P = c5P.state;
        if (!x5P) {
            c5P.state = x5P = {};
        }
        R5P = x5P.studyErrors;
        if (!R5P) {
            x5P.studyErrors = R5P = new Set();
        }
        if (R5P.has(q5P)) {
            return;
        }
        f5P = x5P.watermarkOffset || 10;
        Q5P = 10;
        L5P = this.getCanvasFontSize("stx_watermark");
        if (this.chart && this.chart.chartControls) {
            C5P = c5P.yAxis.bottom;
            n5P = this.chart.chartControls;
            c29.L3k(1);
            G5P = c29.v3k(C5P, f5P);
            v4a = -1492865378;
            V4a = +"731051559";
            r4a = 2;
            for (var w5a = 1; c29.G4a(w5a.toString(), w5a.toString().length, 48897) !== v4a; w5a++) {
                c29.L3k(19);
                d5P = c29.j3k(G5P, L5P);
                r4a += 2;
            }
            if (c29.G4a(r4a.toString(), r4a.toString().length, 9154) !== V4a) {
                c29.L3k(1);
                d5P = c29.v3k(G5P, L5P);
            }
            if ((G5P > n5P.offsetTop && G5P < n5P.offsetTop + n5P.offsetHeight) || (d5P > n5P.offsetTop && d5P < n5P.offsetTop + n5P.offsetHeight)) {
                f5P = C5P - n5P.offsetTop + Q5P;
            }
        }
        R5P.add(q5P);
        g5P = { h: "center", v: "bottom", text: q5P, vOffset: f5P };
        c29.L3k(6);
        f5P += c29.j3k(L5P, Q5P);
        x5P.watermarkOffset = f5P;
        this.watermark(i5P, g5P);
    };
    r0P.ChartEngine.prototype.displayChart = function (X5P) {
        if (this.runPrepend("displayChart", arguments)) {
            return;
        }
        this.rendererAction(X5P, "main");
        this.runAppend("displayChart", arguments);
    };
};
F9L = (S8P) => {
    var B5P;
    B5P = S8P.CIQ;
    B5P.ChartEngine.prototype.cloneStyle = function (r8P) {
        var F8P, Z8P, P8P, o8P, j8P, a8P, T8P, k8P;
        F8P = {};
        function H8P(Y8P) {
            R1aa.X19();
            return Y8P["1" & 2147483647].toUpperCase();
        }
        Z8P = !!"";
        for (var p8P in r8P) {
            P8P = r8P[p8P];
            if (p8P == "backgroundAttachment") {
                Z8P = !![];
            }
            if (Z8P) {
                if (P8P && P8P.constructor == String && isNaN(p8P)) {
                    F8P[p8P] = P8P;
                }
            } else if (!isNaN(p8P)) {
                o8P = r8P.getPropertyValue(P8P);
                if (o8P) {
                    P8P = P8P.split(839.85 === 3533 ? (432.94 !== 276.73 ? "g" : "G") : "-");
                    j8P = 0;
                    a8P = P8P.length;
                    R1aa.T3k(19);
                    T8P = P8P[R1aa.j3k("0", 1)];
                    while (++j8P < a8P) {
                        T8P += P8P[j8P].charAt(0).toUpperCase() + P8P[j8P].slice(+"1");
                    }
                    F8P[T8P] = o8P;
                }
            } else {
                k8P = p8P.replace(B5P.camelCaseRegExp, H8P);
                F8P[k8P] = P8P;
            }
        }
        R1aa.K19();
        return F8P;
    };
    B5P.ChartEngine.prototype.canvasStyle = function (l8P) {
        var D8P, O5T, s8P, K8P;
        D8P = this.styles[l8P];
        if (!D8P) {
            O5T = "di";
            O5T += "v";
            s8P = document.createElement(O5T);
            s8P.className = l8P;
            this.container.appendChild(s8P);
            K8P = getComputedStyle(s8P);
            D8P = this.styles[l8P] = this.cloneStyle(K8P);
            this.container.removeChild(s8P);
            if (!K8P) {
                this.styles[l8P] = null;
            }
        }
        return D8P;
    };
    B5P.ChartEngine.prototype.colorOrStyle = function (V8P) {
        if (V8P.indexOf((985.87, 459.25) <= 14.32 ? "C" : (+"1740", 3195) == 4800 ? ("R", 690.55) : "#") != -1) {
            return V8P;
        }
        if (V8P.indexOf(1931 > (2026, 1085) ? ((4420, 206) == ("9794" * 1, 5316) ? "496.05" * 1 : 6780 === 429.69 ? (672.24, !0) : "(") : ("48.60" - 0, 0x151c)) != -+"1") {
            return V8P;
        }
        R1aa.K19();
        if (V8P == "transparent") {
            return V8P;
        }
        return this.canvasStyle(V8P);
    };
    B5P.ChartEngine.prototype.clearStyles = function () {
        R1aa.X19();
        this.styles = {};
        this.defaultColor = "";
    };
    B5P.ChartEngine.prototype.setStyle = function (e8P, u8P, J8P) {
        if (!this.styles[e8P]) {
            this.canvasStyle(e8P);
        }
        if (!this.styles[e8P]) {
            this.styles[e8P] = {};
        }
        this.styles[e8P][B5P.makeCamelCase(u8P)] = J8P;
    };
    B5P.ChartEngine.prototype.canvasFont = function (U8P, O8P) {
        var Q29 = R1aa;
        var b8P, N8P, g5T;
        if (!O8P) {
            O8P = this.chart.context;
        }
        b8P = this.canvasStyle(U8P);
        if (!b8P) {
            return;
        }
        Q29.T3k(2);
        var I61 = Q29.v3k(15, 21, 3354);
        Q29.T3k(16);
        var M61 = Q29.j3k(46483, 4, 9, 5812);
        Q29.T3k(7);
        var d61 = Q29.v3k(4961, 7, 2, 1, 2473);
        Q29.L3k(99);
        var m61 = Q29.v3k(5348, 5267, 5267, 10, 11);
        Q29.L3k(51);
        var P61 = Q29.v3k(11, 1364, 13624);
        Q29.T3k(56);
        var L61 = Q29.v3k(4987, 501, 18);
        Q29.T3k(6);
        var j61 = Q29.j3k(308, 3692);
        Q29.L3k(147);
        var O61 = Q29.v3k(8, 10, 31782, 200, 2);
        Q29.T3k(1);
        var g61 = Q29.j3k(8927, 17);
        Q29.L3k(6);
        var J61 = Q29.j3k(8371, 17);
        N8P = b8P.fontStyle + (I61 === M61 ? (d61 === 986.7 ? m61 : "l") : " ") + b8P.fontWeight + " " + b8P.fontSize + ((810.2, +"9998") != P61 ? " " : (L61, j61) !== O61 ? "S" : (g61, J61)) + b8P.fontFamily;
        if (N8P.indexOf("undefined") == -("1" - 0)) {
            O8P.font = N8P;
        } else {
            g5T = "bad css";
            g5T += " s";
            g5T += "tyle for class ";
            this.styles[U8P] = null;
            Q29.L3k(6);
            console.log(Q29.j3k(g5T, U8P));
        }
    };
    B5P.ChartEngine.prototype.canvasColor = function (M8P, I8P) {
        var J5T, E8P, A8P, z8P;
        J5T = "undefi";
        J5T += "ned";
        if (!I8P) {
            I8P = this.chart.context;
        }
        E8P = this.canvasStyle(M8P);
        if (!E8P) {
            return;
        }
        A8P = E8P.color;
        if (!A8P) {
            A8P = this.defaultColor;
        }
        I8P.globalAlpha = 1;
        I8P.fillStyle = A8P;
        I8P.strokeStyle = A8P;
        z8P = E8P.opacity;
        if (typeof z8P != J5T) {
            I8P.globalAlpha = z8P;
        }
    };
    B5P.ChartEngine.prototype.getCanvasFontSize = function (h8P) {
        var y8P, t8P;
        R1aa.X19();
        y8P = this.canvasStyle(h8P);
        t8P = y8P.fontSize;
        if (!t8P) {
            t8P = "12";
        }
        return parseInt(B5P.stripPX(t8P), 10);
    };
    B5P.ChartEngine.prototype.getCanvasColor = function (m8P) {
        R1aa.K19();
        var w8P;
        w8P = this.canvasStyle(m8P);
        return w8P.color;
    };
    B5P.ChartEngine.prototype.getDefaultColor = function () {
        var v8P, W8P, G5T, n8P, F5T, q5T, x8P, c8P;
        this.defaultColor = "#000000";
        v8P = null;
        W8P = this.chart.container;
        while (!v8P || B5P.isTransparent(v8P)) {
            G5T = "tra";
            G5T += "nspa";
            G5T += "re";
            G5T += "nt";
            n8P = getComputedStyle(W8P);
            if (!n8P) {
                return;
            }
            v8P = n8P.backgroundColor;
            if (B5P.isTransparent(v8P)) {
                v8P = G5T;
            }
            W8P = W8P.parentNode;
            if (!W8P || !W8P.tagName) break;
        }
        if (v8P) {
            F5T = "trans";
            F5T += "p";
            F5T += "arent";
            if (v8P == F5T) {
                v8P = "#FFFFFF";
            }
            this.containerColor = v8P;
            if (!B5P.isTransparent(v8P)) {
                q5T = "#0";
                q5T += "00000";
                x8P = B5P.hsv(v8P);
                c8P = x8P[2];
                if (c8P > 0.65) {
                    this.defaultColor = q5T;
                } else {
                    this.defaultColor = "#FFFFFF";
                }
            } else {
                this.defaultColor = "#000000";
            }
        } else {
            this.containerColor = "#FFFFFF";
        }
    };
};
j9L = (R8P) => {
    var f8P;
    f8P = R8P.CIQ;
    f8P.ChartEngine.XAxis = function (q8P) {
        R1aa.K19();
        for (var i8P in q8P) {
            this[i8P] = q8P[i8P];
        }
    };
    R1aa.X19();
    f8P.extend(
        f8P.ChartEngine.XAxis.prototype,
        {
            formatter: null,
            adjustTimeZone: !!"1",
            idealTickSizePixels: null,
            timeUnit: null,
            timeUnitMultiplier: null,
            displayBorder: !![],
            displayGridLines: !"",
            noDraw: null,
            minimumLabelWidth: 50,
            futureTicks: !!"1",
            futureTicksInterval: 1,
        },
        !""
    );
    f8P.ChartEngine.XAxisLabel = function (G8P, Q8P, L8P) {
        this.hz = G8P;
        this.grid = Q8P;
        R1aa.X19();
        this.text = L8P;
    };
    f8P.ChartEngine.prototype.createXAxis = function (d8P) {
        var P29 = R1aa;
        var N5T, g8P, C8P, k8a, e8a, f8a;
        N5T = "createXA";
        N5T += "x";
        N5T += "is";
        if (d8P.dataSegment.length <= 0) {
            return null;
        }
        if (d8P.xAxis.noDraw) {
            return null;
        }
        g8P = [d8P];
        P29.K19();
        C8P = this.runPrepend(N5T, g8P);
        if (C8P) {
            return C8P;
        }
        if (this.mainSeriesRenderer && this.mainSeriesRenderer.createXAxis) {
            k8a = -1860641902;
            P29.L3k(21);
            e8a = P29.j3k(2147483647, "1581114631");
            f8a = 2;
            for (var s8a = 1; P29.J4a(s8a.toString(), s8a.toString().length, 23944) !== k8a; s8a++) {
                C8P = this.mainSeriesRenderer.createXAxis(d8P);
                f8a += 2;
            }
            if (P29.J4a(f8a.toString(), f8a.toString().length, "49634" << 1160587968) !== e8a) {
                C8P = this.mainSeriesRenderer.createXAxis(d8P);
            }
        } else {
            C8P = this.createTickXAxisWithDates(d8P);
        }
        this.headsUpHR();
        this.runAppend("createXAxis", g8P);
        return C8P;
    };
    f8P.ChartEngine.prototype.createXAxisLabel = function (p1P) {
        var E29 = R1aa;
        var S1P, T1P, B8P, j1P, a1P, k1P, r1P, X8P, H1P, o1P, P1P, F1P, Z1P, E5T;
        if (arguments[+"0"] instanceof f8P.ChartEngine.Panel) {
            p1P = { panel: arguments[0], txt: arguments[1], x: arguments["2" ^ 0], backgroundColor: arguments[3], color: arguments[4], pointed: arguments["5" * 1], padding: arguments[6] };
        }
        S1P = p1P.panel;
        T1P = p1P.txt;
        E29.X19();
        B8P = p1P.x;
        j1P = p1P.backgroundColor;
        a1P = p1P.color;
        k1P = p1P.pointed;
        r1P = p1P.padding === 0 ? 0 : p1P.padding || "2" >> 1753726048;
        X8P = this.chart.context;
        H1P = "stx-float-date";
        o1P = this.getCanvasFontSize(H1P) + r1P * +"2";
        this.canvasFont(H1P, X8P);
        try {
            E29.T3k(148);
            var G61 = E29.j3k(2, 20, 7, 9, 0);
            P1P = X8P.measureText(T1P).width + r1P * G61;
        } catch (Y1P) {
            P1P = 0;
        }
        F1P = S1P.top + S1P.height - o1P - r1P;
        if (B8P + P1P / 2 < S1P.left || B8P - P1P / +"2" > S1P.right) {
            return;
        }
        if (!k1P) {
            if (B8P + P1P / 2 > S1P.right) {
                E29.L3k(33);
                var F61 = E29.j3k(2, 16, 12, 16, 38);
                B8P = S1P.right - P1P / F61;
            }
            if (B8P - P1P / 2 < S1P.left) {
                E29.T3k(2);
                var q61 = E29.v3k(4, 6, 0);
                B8P = S1P.left + P1P / q61;
            }
        }
        X8P.fillStyle = j1P;
        f8P.roundRect({ ctx: X8P, x: B8P - P1P / 2, top: F1P, width: P1P, height: o1P, radius: 3, fill: !!{} });
        Z1P = S1P.bottom - S1P.yAxis.bottom - o1P;
        X8P.beginPath();
        if (k1P) {
            E29.L3k(1);
            X8P.moveTo(E29.v3k(B8P, Z1P), F1P);
            E29.L3k(24);
            X8P.lineTo(B8P, E29.v3k(Z1P, F1P, 1));
            E29.L3k(6);
            X8P.lineTo(E29.j3k(B8P, Z1P), F1P);
            X8P.closePath();
            X8P.fill();
        } else {
            X8P.moveTo(B8P, F1P);
            E29.T3k(1);
            X8P.lineTo(B8P, E29.j3k(F1P, Z1P));
            X8P.strokeStyle = j1P;
            X8P.stroke();
        }
        X8P.textBaseline = "top";
        X8P.fillStyle = a1P ? a1P : f8P.chooseForegroundColor(j1P);
        if (X8P.fillStyle == j1P) {
            E5T = "#FFF";
            E5T += "FFF";
            if (j1P.toUpperCase() == E5T) {
                X8P.fillStyle = "#000000";
            } else {
                X8P.fillStyle = "#FFFFFF";
            }
        }
        E29.L3k(149);
        X8P.fillText(T1P, E29.j3k(B8P, r1P, "1", "2", P1P), E29.v3k(F1P, 2, r1P, E29.T3k(150)));
    };
};
r9L = (l1P) => {
    var C29 = R1aa;
    var U5T, F4a, q4a, N4a, s1P;
    U5T = "w";
    U5T += "id";
    U5T += "t";
    U5T += "h";
    F4a = 1224848098;
    q4a = -+"1882586087";
    C29.T3k(1);
    N4a = C29.v3k("2", 0);
    for (var Q4a = 1; C29.G4a(Q4a.toString(), Q4a.toString().length, 5294) !== F4a; Q4a++) {
        s1P = l1P.CIQ;
        N4a += 2;
    }
    if (C29.G4a(N4a.toString(), N4a.toString().length, +"46579") !== q4a) {
        s1P = l1P.CIQ;
    }
    s1P.createLabel = function (D1P) {
        var Q5T;
        Q5T = "l";
        Q5T += "e";
        C29.X19();
        Q5T += "f";
        Q5T += "t";
        D1P.ctx.textBaseline = "middle";
        D1P.ctx.fillStyle = D1P.color ? D1P.color : s1P.chooseForegroundColor(D1P.backgroundColor);
        if (D1P.ctx.fillStyle === D1P.backgroundColor) {
            if (D1P.backgroundColor.toUpperCase() == "#FFFFFF") {
                D1P.ctx.fillStyle = "#000000";
            } else {
                D1P.ctx.fillStyle = "#FFFFFF";
            }
        }
        D1P.ctx.fillText(D1P.txt, D1P.x + D1P.margin.left, D1P.y + D1P.margin.top);
        D1P.ctx.textAlign = Q5T;
    };
    s1P.roundRectArrow = function (K1P) {
        s1P.roundRect(K1P, "arrow");
    };
    s1P.semiRoundRect = function (V1P) {
        s1P.roundRect(V1P, "flush");
    };
    s1P.rect = function (e1P) {
        C29.T3k(124);
        e1P.radius = C29.j3k("0", 0);
        s1P.roundRect(e1P);
    };
    s1P.noop = function (u1P) {
        C29.X19();
        u1P.color = u1P.backgroundColor;
        s1P.createLabel(u1P);
    };
    s1P.tickedRect = function (J1P) {
        var b1P;
        s1P.rect(J1P);
        b1P = Math.round(J1P.top + J1P.height / +"2") + 0.5;
        J1P.ctx.beginPath();
        J1P.ctx.moveTo(J1P.x - 2, b1P);
        J1P.ctx.lineTo(J1P.x, b1P);
        J1P.ctx.stroke();
        J1P.ctx.closePath();
    };
    s1P.roundRect = function (N1P, v1P) {
        var y1P, O1P, I1P, M1P, h1P, A1P, x1P, U1P, W1P, t1P, z1P, w1P, E1P, n1P, m1P, c1P;
        if (arguments.length === 9) {
            N1P = { ctx: arguments[0], x: arguments[1], top: arguments[2], width: arguments[3], height: arguments[4], radius: arguments[5], fill: arguments[6], stroke: arguments[7], edge: arguments[8] };
        }
        y1P = N1P.stroke;
        O1P = N1P.x;
        I1P = N1P.top;
        M1P = N1P.width;
        h1P = N1P.height;
        A1P = N1P.radius;
        x1P = N1P.fill;
        U1P = N1P.ctx;
        if (typeof y1P == "undefined") {
            y1P = !!{};
        }
        if (typeof A1P === "undefined") {
            A1P = +"5";
            if (M1P < 0) {
                A1P = -5;
            }
        }
        W1P = M1P < 0 ? A1P * -+"1" : A1P;
        if (A1P && !v1P) {
            C29.L3k(129);
            O1P = C29.j3k(O1P, "1", 2147483647);
        }
        C29.T3k(6);
        t1P = C29.j3k(O1P, A1P);
        C29.T3k(6);
        z1P = C29.v3k(O1P, M1P);
        C29.L3k(6);
        w1P = C29.j3k(I1P, W1P);
        C29.T3k(6);
        E1P = C29.v3k(I1P, h1P);
        C29.T3k(1);
        n1P = C29.v3k(z1P, A1P);
        C29.T3k(1);
        m1P = C29.v3k(E1P, W1P);
        U1P.beginPath();
        U1P.moveTo(t1P, I1P);
        U1P.lineTo(n1P, I1P);
        U1P.quadraticCurveTo(z1P, I1P, z1P, w1P);
        U1P.lineTo(z1P, m1P);
        U1P.quadraticCurveTo(z1P, E1P, n1P, E1P);
        U1P.lineTo(t1P, E1P);
        if (v1P == "flush") {
            U1P.lineTo(O1P, E1P);
            U1P.lineTo(O1P, I1P);
        } else if (v1P == "arrow") {
            C29.L3k(1);
            U1P.quadraticCurveTo(O1P, E1P, C29.v3k(O1P, A1P), m1P);
            c1P = M1P < 0 ? 1 : -+"1";
            C29.T3k(151);
            U1P.lineTo(C29.j3k(h1P, O1P, 2, c1P), C29.j3k(2, h1P, I1P, C29.L3k(52)));
            C29.T3k(1);
            U1P.lineTo(C29.j3k(O1P, A1P), w1P);
            U1P.quadraticCurveTo(O1P, I1P, t1P, I1P);
        } else {
            U1P.quadraticCurveTo(O1P, E1P, O1P, m1P);
            U1P.lineTo(O1P, w1P);
            U1P.quadraticCurveTo(O1P, I1P, t1P, I1P);
        }
        U1P.closePath();
        if (N1P.backgroundColor) {
            U1P.fillStyle = N1P.backgroundColor;
        }
        if (y1P) {
            U1P.stroke();
        }
        if (x1P) {
            U1P.fill();
        }
        if (N1P.txt) {
            s1P.createLabel(N1P);
        }
    };
    s1P.ChartEngine.YAxis = function (R1P) {
        var t5T;
        t5T = "non";
        t5T += "e";
        for (var f1P in R1P) {
            this[f1P] = R1P[f1P];
        }
        if (!this.name) {
            this.name = s1P.uniqueID();
        }
        if (this.position == t5T) {
            this.width = 0;
        }
    };
    s1P.extend(
        s1P.ChartEngine.YAxis.prototype,
        { high: null, low: null, shadow: null, logHigh: null, logLow: null, logShadow: null, multiplier: null, bottom: null, top: null, height: null, left: null, width: null, renderers: [], studies: [] },
        !![]
    );
    s1P.ChartEngine.YAxis.defaultShadowBreaks = [
        [1000, +"2"],
        [5, 4],
        [0.001, 8],
    ];
    C29.L3k(19);
    s1P.ChartEngine.YAxis.smallChartShadowBreaks = [
        [10, C29.j3k("2", 1)],
        [1, 4],
    ];
    s1P.ChartEngine.YAxis.prototype.maxDecimalPlaces = null;
    s1P.ChartEngine.YAxis.prototype.max = null;
    s1P.ChartEngine.YAxis.prototype.min = null;
    s1P.ChartEngine.YAxis.prototype.decimalPlaces = null;
    s1P.ChartEngine.YAxis.prototype.idealTickSizePixels = null;
    s1P.ChartEngine.YAxis.prototype.minimumPriceTick = null;
    s1P.ChartEngine.YAxis.prototype.fractional = null;
    s1P.ChartEngine.YAxis.prototype.displayBorder = !0;
    s1P.ChartEngine.YAxis.prototype.displayGridLines = !!1;
    s1P.ChartEngine.YAxis.prototype.noDraw = null;
    s1P.ChartEngine.YAxis.prototype.drawCurrentPriceLabel = !![];
    s1P.ChartEngine.YAxis.prototype.drawSeriesPriceLabels = !!{};
    s1P.ChartEngine.YAxis.prototype.drawPriceLabels = !![];
    s1P.ChartEngine.YAxis.prototype.goldenRatioYAxis = !!{};
    s1P.ChartEngine.YAxis.prototype.yaxisLabelStyle = null;
    s1P.ChartEngine.YAxis.prototype.justifyRight = null;
    s1P.ChartEngine.YAxis.prototype.flipped = !"1";
    s1P.ChartEngine.YAxis.prototype.textBackground = !!"";
    s1P.ChartEngine.YAxis.prototype.priceFormatter = null;
    s1P.ChartEngine.YAxis.prototype.bottomOffset = 0;
    s1P.ChartEngine.YAxis.prototype.topOffset = +"0";
    s1P.ChartEngine.YAxis.prototype.initialMarginTop = 10;
    s1P.ChartEngine.YAxis.prototype.initialMarginBottom = 10;
    s1P.ChartEngine.YAxis.prototype.zoom = 0;
    s1P.ChartEngine.YAxis.prototype.scroll = 0;
    s1P.ChartEngine.YAxis.prototype.heightFactor = 1;
    Object.defineProperty(s1P.ChartEngine.YAxis.prototype, U5T, {
        configurable: !!1,
        enumerable: !0,
        get: function () {
            return this._dynamicWidth || this._width;
        },
        set: function (i1P) {
            this._width = i1P;
            C29.K19();
            if (this._dynamicWidth < i1P) {
                this._dynamicWidth = NaN;
            }
        },
    });
    s1P.ChartEngine.YAxis.prototype.width = 60;
    s1P.ChartEngine.YAxis.prototype.smallScreenWidth = 50;
    s1P.ChartEngine.YAxis.prototype.textStyle = null;
    s1P.ChartEngine.YAxis.prototype.position = null;
    s1P.ChartEngine.YAxis.prototype.pretty = !"";
    C29.L3k(1);
    s1P.ChartEngine.YAxis.prototype.increments = [1, C29.v3k("2.5", 0), 5];
    s1P.ChartEngine.YAxis.prototype.prettySemiLog = !![];
    s1P.ChartEngine.YAxis.prototype.shadowBreaks = s1P.ChartEngine.YAxis.defaultShadowBreaks;
    s1P.ChartEngine.YAxis.prototype.getYAxis = function (q1P) {
        C29.X19();
        return this;
    };
    s1P.ChartEngine.YAxis.prototype.isShared = function (C1P, d1P) {
        var L1P, G1P;
        L1P = this.studies.length;
        G1P = this.renderers.length;
        C29.K19();
        if (L1P > 1) {
            return !![];
        }
        if (G1P && L1P) {
            return !0;
        }
        if (!G1P) {
            return ![];
        }
        if (G1P > 1 && d1P) {
            return !!1;
        }
        for (var Q1P = G1P - 1; Q1P >= 0; Q1P--) {
            if (C1P.chart.seriesRenderers[this.renderers[Q1P]].params.dependentOf) {
                G1P--;
            }
        }
        C29.L3k(152);
        return C29.v3k(G1P, 1);
    };
    s1P.ChartEngine.YAxis.prototype.setBackground = function (B1P, g1P) {
        var T5T, X1P;
        T5T = "a";
        T5T += "u";
        T5T += "t";
        T5T += "o";
        if (!g1P) {
            g1P = {};
        }
        if (!g1P.color) {
            g1P.color = T5T;
        }
        X1P = [
            [this.left, this.top],
            [this.left, this.bottom],
            [this.left + this.width, this.bottom],
            [this.left + this.width, this.top],
        ];
        s1P.fillArea(B1P, X1P, { color: g1P.color, opacity: g1P.opacity });
    };
    s1P.ChartEngine.YAxis.prototype.setBreakpointWidth = function (p4P) {
        var r4P;
        if (!p4P) {
            return;
        }
        C29.X19();
        var { width: F4P, smallScreenWidth: j4P } = s1P.ChartEngine.YAxis.prototype;
        C29.T3k(126);
        r4P = C29.v3k("break-sm", p4P);
        this.width = r4P ? j4P : F4P;
    };
    s1P.ChartEngine.prototype.getLabelOffsetInPixels = function (H4P, s4P) {
        var Z4P, T4P, a4P;
        Z4P = !this.mainSeriesRenderer || !this.mainSeriesRenderer.standaloneBars;
        C29.X19();
        if (this.yaxisLabelStyle == "roundRectArrow" && !(Z4P && this.extendLastTick && H4P.yaxisPaddingRight !== "0" * 1)) {
            T4P = +"3";
            C29.T3k(1);
            var N61 = C29.j3k(34, 32);
            a4P = this.getCanvasFontSize("stx_yaxis") + T4P * N61;
            C29.T3k(19);
            return C29.j3k(a4P, 0.66);
        }
        return 0;
    };
    s1P.ChartEngine.prototype.flipChart = function (e4P) {
        if (this.layout.flipped == e4P) {
            return;
        }
        this.layout.flipped = e4P;
        this.chart.yAxis.flipped = e4P;
        C29.X19();
        this.changeOccurred("layout");
        this.draw();
    };
    s1P.ChartEngine.prototype.calculateYAxisMargins = function (u4P) {
        if (u4P.heightFactor) {
            C29.L3k(153);
            var E61 = C29.v3k(1, 1, 2, 15, 15);
            u4P.zoom = u4P.height * (E61 - u4P.heightFactor);
        }
        u4P.zoom += u4P.initialMarginTop + u4P.initialMarginBottom;
        C29.K19();
        C29.T3k(1);
        var Q61 = C29.v3k(30, 28);
        u4P.scroll = (u4P.initialMarginTop - u4P.initialMarginBottom) / Q61;
        if (u4P.zoom > u4P.height) {
            C29.L3k(64);
            u4P.zoom = C29.v3k("0", 505473216);
            C29.T3k(94);
            u4P.scroll = C29.v3k("0", 0);
        }
    };
    s1P.ChartEngine.prototype.resetDynamicYAxis = function (b4P) {
        var A4P, J4P, I4P;
        if (this.runPrepend("resetDynamicYAxis", arguments)) {
            return;
        }
        C29.K19();
        A4P = ![];
        for (var z4P in this.panels) {
            J4P = this.panels[z4P];
            if (b4P && b4P.chartName && J4P.chart.name !== b4P.chartName) continue;
            if (!J4P.yaxisLHS || !J4P.yaxisRHS) continue;
            I4P = J4P.yaxisLHS.concat(J4P.yaxisRHS);
            for (var N4P = 0; N4P < I4P.length; N4P++) {
                if (I4P[N4P]._dynamicWidth) {
                    I4P[N4P]._dynamicWidth = NaN;
                    A4P = !!{};
                }
            }
        }
        if (A4P && (!b4P || !b4P.noRecalculate)) {
            this.calculateYAxisPositions();
        }
        this.runAppend("resetDynamicYAxis", arguments);
    };
    s1P.ChartEngine.prototype.notifyBreakpoint = function (M4P) {
        var D5T, S5T, W4P, x4P, R4P;
        D5T = "b";
        D5T += "re";
        D5T += "a";
        D5T += "k-sm";
        S5T = "bre";
        C29.X19();
        S5T += "ak";
        S5T += "-md";
        if (this.chart.breakpoint === M4P) {
            return;
        }
        if (!["break-lg", S5T, D5T].includes(M4P)) {
            return;
        }
        var { chart: w4P } = this;
        var { dynamicYAxis: c4P } = w4P;
        this.clearStyles();
        w4P.breakpoint = M4P;
        for (var f4P in this.panels) {
            W4P = this.panels[f4P];
            x4P = W4P.yaxisRHS.concat(W4P.yaxisLHS);
            for (var v4P = 0; v4P < x4P.length; v4P++) {
                R4P = x4P[v4P];
                R4P.setBreakpointWidth(M4P);
            }
        }
        if (c4P) {
            this.resetDynamicYAxis({ chartName: w4P.name });
        }
    };
    s1P.ChartEngine.prototype.adjustYAxisHeightOffset = function (Q4P, q4P) {
        C29.K19();
        var d4P, C4P, v5T, g4P;
        d4P = q4P.topOffset;
        C4P = q4P.bottomOffset;
        if (d4P + C4P > Q4P.height) {
            console.log("The sum of yAxis.topOffset and yAxis.bottomOffset cannot be greater than the panel height. Both values will be reset to 0.");
            q4P.bottomOffset = 0;
            q4P.topOffset = 0;
        }
        if (!this.xaxisHeight && this.xaxisHeight !== 0) {
            v5T = "stx_x";
            v5T += "axis";
            this.xaxisHeight = this.getCanvasFontSize(v5T) + +"4";
            if (this.chart.xAxis.displayBorder || this.axisBorders) {
                this.xaxisHeight += 3;
            }
        }
        g4P = (this.xAxisAsFooter && Q4P.bottom > this.chart.canvasHeight - this.xaxisHeight) || (!this.xAxisAsFooter && Q4P == this.chart.panel);
        if (g4P) {
            C4P += this.xaxisHeight;
        }
        q4P.top = Q4P.top + d4P;
        q4P.bottom = Q4P.bottom - C4P;
    };
    s1P.ChartEngine.prototype.plotYAxisGrid = function (S2P) {
        var B4P, X4P;
        if (this.runPrepend("plotYAxisGrid", arguments)) {
            return;
        }
        B4P = this.getBackgroundCanvas().context;
        X4P = S2P.yAxis;
        if (X4P.yAxisPlotter) {
            X4P.yAxisPlotter.draw(B4P, "grid");
        }
        this.runAppend("plotYAxisGrid", arguments);
    };
    s1P.ChartEngine.prototype.plotYAxisText = function (j2P) {
        var B6T, w6T, r5T, V5T, P2P, F2P, p2P, z5T;
        B6T = "al";
        B6T += "ph";
        B6T += "ab";
        B6T += "etic";
        w6T = "l";
        w6T += "e";
        w6T += "f";
        w6T += "t";
        r5T = "s";
        r5T += "tx_yaxis";
        V5T = "plotYAxi";
        V5T += "s";
        V5T += "Text";
        if (this.runPrepend(V5T, arguments)) {
            return;
        }
        function r2P(Z2P) {
            if (!Z2P.yAxisPlotter) {
                return;
            }
            if (Z2P.noDraw || !Z2P.width) {
                return;
            }
            if (Z2P.justifyRight) {
                P2P.textAlign = "right";
            } else if (Z2P.justifyRight === ![]) {
                P2P.textAlign = "left";
            }
            Z2P.yAxisPlotter.draw(P2P, "text");
        }
        P2P = this.getBackgroundCanvas().context;
        this.canvasFont(r5T, P2P);
        this.canvasColor("stx_yaxis", P2P);
        P2P.textBaseline = "middle";
        F2P = j2P.yaxisLHS;
        for (p2P = 0; p2P < F2P.length; p2P++) {
            P2P.textAlign = "right";
            r2P(F2P[p2P]);
        }
        F2P = j2P.yaxisRHS;
        for (p2P = 0; p2P < F2P.length; p2P++) {
            z5T = "l";
            z5T += "e";
            z5T += "f";
            z5T += "t";
            P2P.textAlign = z5T;
            r2P(F2P[p2P]);
        }
        P2P.textAlign = w6T;
        P2P.textBaseline = B6T;
        this.runAppend("plotYAxisText", arguments);
    };
    s1P.ChartEngine.prototype.decimalPlacesFromPriceTick = function (o2P) {
        if (o2P < "0.0001" * 1) {
            return 8;
        }
        if (o2P < 0.01) {
            return 4;
        }
        if (o2P < +"0.1") {
            return 2;
        }
        if (o2P < 1) {
            return 1;
        }
        return 0;
    };
    s1P.ChartEngine.prototype.formatYAxisPrice = function (a2P, H2P, K2P, l2P, V2P) {
        var k2P, T2P, D2P, Y2P, s2P;
        if (a2P === null || typeof a2P == "undefined" || isNaN(a2P)) {
            return "";
        }
        if (!H2P) {
            H2P = this.chart.panel;
        }
        k2P = l2P ? l2P : H2P.yAxis;
        C29.K19();
        T2P = K2P;
        if (!T2P && T2P !== 0) {
            T2P = k2P.printDecimalPlaces;
        }
        if (!T2P && T2P !== 0) {
            T2P = this.decimalPlacesFromPriceTick(k2P.priceTick);
        }
        D2P = k2P == H2P.chart.yAxis ? "20000" << 2104225728 : "1000" * 1;
        if (k2P.priceTick >= D2P) {
            a2P = a2P.toFixed(T2P);
            return s1P.condenseInt(a2P);
        }
        Y2P = this.internationalizer;
        if (Y2P && V2P !== !1) {
            s2P = Y2P.priceFormatters.length;
            if (T2P >= s2P) {
                C29.T3k(1);
                T2P = C29.v3k(s2P, 1);
            }
            a2P = Y2P.priceFormatters[T2P].format(a2P);
        } else {
            a2P = a2P.toFixed(T2P);
        }
        return a2P;
    };
    s1P.ChartEngine.prototype.calculateYAxisRange = function (J2P, e2P, u2P, b2P) {
        var K6T, I2P, U2P, O2P, E2P, z2P, A2P, N2P, M2P, t2P;
        K6T = "pand";
        K6T += "f";
        if (u2P == Number.MAX_VALUE) {
            u2P = 0;
            b2P = +"0";
        }
        I2P = J2P.height;
        U2P = null;
        O2P = null;
        this.adjustYAxisHeightOffset(J2P, e2P);
        e2P.height = e2P.bottom - e2P.top;
        E2P = Math.round(Math.abs(I2P / 5));
        if (e2P.zoom >= 0 && I2P - Math.abs(e2P.scroll) < E2P) {
            C29.L3k(1);
            var t61 = C29.v3k(3, 2);
            e2P.scroll = (I2P - E2P) * (e2P.scroll < 0 ? -("1" & 2147483647) : t61);
        }
        z2P = J2P.chart.name === J2P.name && J2P.yAxis.name === e2P.name;
        A2P = u2P > 0 && (this.layout.semiLog || this.layout.chartScale == "log") && !J2P.chart.isComparison && this.layout.aggregationType != K6T;
        if (u2P || u2P === 0) {
            if (b2P - u2P === "0" * 1) {
                N2P = Math.pow(10, -(u2P.toString() + (4450 < (6190, 4605) ? (("5498" ^ 0) != (4040, 834) ? "." : "K") : !![])).split(".")[1].length);
                if (N2P == 1) {
                    N2P = 100;
                }
                C29.L3k(6);
                U2P = C29.j3k(u2P, N2P);
                C29.T3k(1);
                O2P = C29.v3k(u2P, N2P);
            } else {
                if (z2P && A2P && (b2P || b2P === 0)) {
                    M2P = Math.log(u2P) / Math.LN10;
                    t2P = Math.log(b2P) / Math.LN10;
                    U2P = Math.pow(10, t2P);
                    O2P = Math.pow(10, M2P);
                } else {
                    U2P = b2P;
                    O2P = u2P;
                }
            }
            e2P.high = U2P;
            e2P.low = O2P;
        }
        if (e2P.max || e2P.max === +"0") {
            e2P.high = e2P.max;
        }
        if (e2P.min || e2P.min === "0" << 1670602208) {
            e2P.low = e2P.min;
        }
        e2P.shadow = e2P.high - e2P.low;
        if (z2P) {
            if (e2P.semiLog != A2P) {
                this.clearPixelCache();
                e2P.semiLog = A2P;
            }
            e2P.flipped = this.layout.flipped;
        }
    };
    s1P.ChartEngine.prototype.renderYAxis = function (x2P) {
        var l6T, b6T, m2P, v2P, w2P, y2P, c6T, W2P, n2P, C6T, c2P;
        C29.K19();
        l6T = "yA";
        l6T += "x";
        l6T += "is";
        b6T = "reb";
        b6T += "oo";
        b6T += "t draw";
        if (this.runPrepend("renderYAxis", arguments)) {
            return;
        }
        if (this.checkLogScale()) {
            throw new Error(b6T);
        }
        this.rendererAction(x2P, l6T);
        var { context: h2P } = this.getBackgroundCanvas(x2P);
        for (var f2P in this.panels) {
            m2P = this.panels[f2P];
            if (m2P.chart != x2P) continue;
            v2P = m2P.yaxisRHS.concat(m2P.yaxisLHS);
            for (w2P = 0; w2P < v2P.length; w2P++) {
                c6T = "Studies.getYAxisPara";
                c6T += "meters";
                y2P = v2P[w2P];
                this.calculateYAxisRange(m2P, y2P, y2P.lowValue, y2P.highValue);
                W2P = s1P.getFn(c6T, {})(this, y2P);
                W2P.yAxis = y2P;
                this.createYAxis(m2P, W2P);
                this.drawYAxis(m2P, W2P);
                s1P.getFn("Studies.doPostDrawYAxis")(this, y2P);
            }
            for (w2P = 0; w2P < v2P.length; w2P++) {
                y2P = v2P[w2P];
                if (y2P.dropzone) {
                    n2P = this.canvasStyle("stx-subholder dropzone left");
                    if (n2P) {
                        h2P.strokeStyle = n2P.borderLeftColor;
                        h2P.lineWidth = parseFloat(n2P.borderLeftWidth);
                        h2P.beginPath();
                        if (y2P.dropzone == "all") {
                            h2P.strokeRect(y2P.left, y2P.top, y2P.width, y2P.height);
                        } else {
                            C6T = "l";
                            C6T += "e";
                            C6T += "f";
                            C6T += "t";
                            c2P = y2P.left + (y2P.dropzone == C6T ? 0 : y2P.width);
                            h2P.moveTo(c2P, y2P.top);
                            h2P.lineTo(c2P, y2P.top + y2P.height);
                            h2P.stroke();
                        }
                    }
                }
            }
            if (this.displayDragOK) {
                this.displayDragOK(!![]);
            }
        }
        this.runAppend("renderYAxis", arguments);
    };
    s1P.ChartEngine.prototype.updateFloatHRLabel = function (i2P) {
        var L2P, C2P, n6T, d2P, R2P, q2P, G2P, g2P;
        if (!this.floatCanvas) {
            return;
        }
        L2P = i2P.yaxisLHS.concat(i2P.yaxisRHS);
        C2P = this.crossYActualPos ? this.crossYActualPos : this.cy;
        if (this.floatCanvas.isDirty) {
            s1P.clearCanvas(this.floatCanvas, this);
        }
        if (this.controls.crossX && this.controls.crossX.style.display == "none") {
            return;
        }
        if (this.controls.crossY) {
            n6T = "p";
            n6T += "x";
            d2P = i2P.width;
            if (this.yaxisLabelStyle == "roundRectArrow") {
                d2P -= 7;
            }
            this.controls.crossY.style.left = i2P.left + "px";
            C29.L3k(6);
            this.controls.crossY.style.width = C29.j3k(d2P, n6T);
        }
        for (var Q2P = 0; Q2P < L2P.length; Q2P++) {
            R2P = L2P[Q2P];
            q2P = this.transformedPriceFromPixel(C2P, i2P, R2P);
            if (isNaN(q2P)) continue;
            if ((R2P.min || R2P.min === +"0") && q2P < R2P.min) continue;
            if ((R2P.max || R2P.max === 0) && q2P > R2P.max) continue;
            G2P = null;
            if (R2P !== i2P.chart.yAxis) {
                G2P = this.decimalPlacesFromPriceTick(R2P.priceTick);
                if (R2P.decimalPlaces || R2P.decimalPlaces === 0) {
                    G2P = R2P.decimalPlaces;
                }
            }
            if (R2P.priceFormatter) {
                q2P = R2P.priceFormatter(this, i2P, q2P, G2P);
            } else {
                q2P = this.formatYAxisPrice(q2P, i2P, G2P, R2P);
            }
            g2P = this.canvasStyle("stx-float-price");
            this.createYAxisLabel(i2P, q2P, C2P, g2P.backgroundColor, g2P.color, this.floatCanvas.context, R2P);
            this.floatCanvas.isDirty = !!{};
        }
    };
    s1P.ChartEngine.prototype.whichYAxis = function (B2P, S6P, p6P) {
        C29.K19();
        var j6P, F6P, X2P;
        if (typeof S6P === "undefined") {
            S6P = this.cx;
        }
        if (typeof p6P === "undefined") {
            p6P = this.cy;
        }
        j6P = this.whichPanel(p6P);
        if (B2P && B2P == j6P) {
            F6P = B2P.yaxisLHS.concat(B2P.yaxisRHS);
            for (var P6P = 0; P6P < F6P.length; P6P++) {
                X2P = F6P[P6P];
                if (X2P.left <= S6P && X2P.left + X2P.width >= S6P) {
                    return X2P;
                }
            }
        }
        return null;
    };
    s1P.ChartEngine.prototype.yaxisMatches = function (r6P, Z6P) {
        if (!r6P || !r6P.getYAxis || !Z6P || !(Z6P instanceof s1P.ChartEngine.YAxis)) {
            return ![];
        }
        return r6P.getYAxis(this).name == Z6P.name;
    };
    s1P.ChartEngine.prototype.createYAxisLabel = function (l6P, u6P, Y6P, N6P, I6P, J6P, b6P) {
        var k6T, H6T, i6T, o6P, s6P, a6P, k6P, A6P, D6P, H6P, T6P, K6P, V6P, U6P, e6T, e6P, O6P;
        k6T = "und";
        k6T += "efined";
        H6T = "st";
        H6T += "x_";
        H6T += "yaxis";
        i6T = "st";
        i6T += "x_";
        i6T += "yax";
        i6T += "is";
        if (l6P.yAxis.drawPriceLabels === !{} || l6P.yAxis.noDraw) {
            return;
        }
        o6P = b6P ? b6P : l6P.yAxis;
        if (o6P.noDraw || !o6P.width) {
            return;
        }
        s6P = J6P ? J6P : this.chart.context;
        a6P = 3;
        C29.L3k(8);
        var U61 = C29.j3k(0, 12, 14);
        k6P = this.getCanvasFontSize(i6T) + a6P * U61;
        this.canvasFont(H6T, s6P);
        A6P = o6P.displayBorder;
        D6P = this.drawBorders ? 3 : +"0";
        try {
            C29.T3k(51);
            var T61 = C29.j3k(9, 1, 7);
            H6P = s6P.measureText(u6P).width + D6P + a6P * T61;
        } catch (E6P) {
            H6P = o6P.width;
        }
        C29.L3k(154);
        var S61 = C29.j3k(140, 14, 3, 10);
        T6P = o6P.left - a6P + S61;
        if (o6P.width < 0) {
            T6P += o6P.width - H6P;
        }
        C29.L3k(56);
        K6P = C29.j3k(D6P, T6P, a6P);
        V6P = 3;
        U6P = o6P.position === null ? l6P.chart.yAxis.position : o6P.position;
        if (U6P === "left") {
            T6P = o6P.left + o6P.width + a6P - ("3" ^ 0);
            C29.L3k(18);
            H6P = C29.j3k(H6P, 1);
            if (o6P.width < 0) {
                T6P -= o6P.width + H6P;
            }
            C29.T3k(24);
            K6P = C29.j3k(a6P, T6P, D6P);
            C29.T3k(124);
            V6P = -C29.j3k("3", 1);
            s6P.textAlign = "right";
        }
        if (Y6P + k6P / 2 > o6P.bottom) {
            C29.T3k(60);
            var D61 = C29.v3k(23, 13, 9);
            Y6P = o6P.bottom - k6P / ("2" * D61);
        }
        if (Y6P - k6P / 2 < o6P.top) {
            C29.T3k(6);
            var v61 = C29.v3k(0, 2);
            Y6P = o6P.top + k6P / v61;
        }
        if (typeof s1P[this.yaxisLabelStyle] == k6T) {
            e6T = "roundRectArro";
            e6T += "w";
            this.yaxisLabelStyle = e6T;
        }
        e6P = this.yaxisLabelStyle;
        if (o6P.yaxisLabelStyle) {
            e6P = o6P.yaxisLabelStyle;
        }
        O6P = { ctx: s6P, x: T6P, y: Y6P, top: Y6P - k6P / 2, width: H6P, height: k6P, radius: V6P, backgroundColor: N6P, fill: !!1, stroke: !{}, margin: { left: K6P - T6P, top: 1 }, txt: u6P, color: I6P };
        s1P[e6P](O6P);
    };
    s1P.ChartEngine.prototype.drawCurrentHR = function () {
        var W6P, f6P, n6P, G6P, h6T, f6T, z6P, M6P, h6P, t6P, w6P, R6P, m6P, x6P, y6P, i6P, s6T, q6P, v6P, c6P, W6T;
        if (this.runPrepend("drawCurrentHR", arguments)) {
            return;
        }
        n6P = this.mainSeriesRenderer || {};
        if (n6P.noCurrentHR) {
            return;
        }
        G6P = n6P.highLowBars;
        for (var Q6P in this.charts) {
            h6T = "dataSegme";
            h6T += "nt";
            f6T = "d";
            f6T += "a";
            f6T += "taSet";
            z6P = this.charts[Q6P];
            M6P = z6P.panel;
            h6P = M6P.yAxis;
            if (M6P.hidden) continue;
            if (h6P.drawCurrentPriceLabel === !!"" || h6P.noDraw) continue;
            if (!n6P.params) continue;
            t6P = h6P.whichSet;
            if (!t6P) {
                t6P = f6T;
            }
            if (this.isHistoricalModeSet && t6P !== h6T) continue;
            w6P = z6P[t6P].length;
            R6P = this.layout.candleWidth;
            if (t6P == "dataSegment") {
                while (w6P > (z6P.width - this.micropixels + R6P / 2 + 1) / R6P) {
                    w6P--;
                }
            }
            if (w6P && z6P[t6P][w6P - 1]) {
                m6P = z6P.defaultPlotField;
                if (!m6P || G6P) {
                    m6P = "Close";
                }
                do {
                    x6P = z6P[t6P][--w6P][m6P];
                    y6P = x6P;
                    if (w6P === 0) break;
                } while (y6P === null || y6P === undefined);
                if (t6P == "dataSet" && z6P.currentQuote) {
                    y6P = z6P.currentQuote[m6P];
                } else if (z6P[t6P].length >= 2) {
                    C29.L3k(1);
                    i6P = z6P[t6P][C29.j3k(w6P, 1)];
                    if (i6P) {
                        x6P = i6P[m6P];
                    }
                }
                if (y6P < x6P) {
                    s6T = "stx_cur";
                    s6T += "ren";
                    s6T += "t_h";
                    s6T += "r_down";
                    W6P = this.canvasStyle(s6T).backgroundColor;
                    f6P = this.canvasStyle("stx_current_hr_down").color;
                } else {
                    W6P = this.canvasStyle("stx_current_hr_up").backgroundColor;
                    f6P = this.canvasStyle("stx_current_hr_up").color;
                }
                if (z6P.transformFunc) {
                    y6P = z6P.transformFunc(this, z6P, y6P);
                }
                v6P = Math.max(M6P.yAxis.printDecimalPlaces, M6P.chart.decimalPlaces);
                if (h6P.maxDecimalPlaces || h6P.maxDecimalPlaces === 0) {
                    v6P = Math.min(v6P, h6P.maxDecimalPlaces);
                }
                if (h6P.priceFormatter) {
                    q6P = h6P.priceFormatter(this, M6P, y6P, v6P);
                } else {
                    q6P = this.formatYAxisPrice(y6P, M6P, v6P);
                }
                c6P = this.pixelFromTransformedValue(y6P, M6P);
                this.createYAxisLabel(M6P, q6P, c6P, W6P, f6P);
                if (this.preferences.currentPriceLine === !0 && this.isHome()) {
                    W6T = "da";
                    W6T += "s";
                    W6T += "h";
                    W6T += "ed";
                    this.plotLine(M6P.left, M6P.right, c6P, c6P, W6P, "line", M6P.chart.context, M6P, { pattern: W6T, lineWidth: +"1", opacity: 0.8, globalCompositeOperation: "destination-over" });
                }
            }
        }
        this.runAppend("drawCurrentHR", arguments);
    };
    s1P.ChartEngine.prototype.getYAxisByName = function (L6P, d6P) {
        var C6P;
        if (typeof L6P == "string") {
            L6P = this.panels[L6P];
        }
        if (!L6P || !d6P) {
            return undefined;
        }
        if (d6P === L6P.yAxis.name) {
            return L6P.yAxis;
        }
        for (C6P = 0; L6P.yaxisLHS && C6P < L6P.yaxisLHS.length; C6P++) {
            if (L6P.yaxisLHS[C6P].name === d6P) {
                return L6P.yaxisLHS[C6P];
            }
        }
        for (C6P = 0; L6P.yaxisRHS && C6P < L6P.yaxisRHS.length; C6P++) {
            if (L6P.yaxisRHS[C6P].name === d6P) {
                return L6P.yaxisRHS[C6P];
            }
        }
        return undefined;
    };
    s1P.ChartEngine.prototype.getYAxisByField = function (P9u, p9u) {
        var F9u, B6P, r9u, g6P, X6P, S9u;
        C29.K19();
        if (p9u) {
            for (F9u in this.layout.studies) {
                B6P = this.layout.studies[F9u];
                if (B6P.panel != P9u.name) continue;
                if (B6P.outputMap && B6P.outputMap.hasOwnProperty(p9u)) {
                    return B6P.getYAxis(this);
                }
            }
            for (F9u in this.chart.seriesRenderers) {
                g6P = this.chart.seriesRenderers[F9u];
                for (var j9u = 0; j9u < g6P.seriesParams.length; j9u++) {
                    if (g6P.params.panel != P9u.name) continue;
                    X6P = g6P.seriesParams[j9u];
                    S9u = X6P.field;
                    if (!S9u && !g6P.highLowBars) {
                        S9u = this.defaultPlotField || "Close";
                    }
                    if (X6P.symbol && X6P.subField) {
                        S9u += "-->" + X6P.subField;
                    }
                    if (p9u == S9u) {
                        return g6P.params.yAxis || P9u.yAxis;
                    }
                    if (X6P.field && X6P.field == p9u.split("-->")["0" | 0]) {
                        r9u = g6P.params.yAxis || P9u.yAxis;
                    }
                }
            }
            if (r9u) {
                return r9u;
            }
        }
        return undefined;
    };
    s1P.ChartEngine.prototype.deleteYAxisIfUnused = function (Z9u, T9u) {
        var H9u, o9u, a9u;
        function Y9u(s9u) {
            var Z5a, a5a, y5a;
            Z5a = -1682481374;
            a5a = +"1954695016";
            y5a = 2;
            for (var x5a = +"1"; C29.J4a(x5a.toString(), x5a.toString().length, "41567" | 584) !== Z5a; x5a++) {
                C29.L3k(115);
                return C29.v3k(s9u, null);
            }
            if (C29.J4a(y5a.toString(), y5a.toString().length, +"97828") !== a5a) {
                C29.L3k(126);
                return C29.j3k(1, s9u);
            }
        }
        if (typeof Z9u == "string") {
            Z9u = this.panels[Z9u];
        }
        if (!T9u || !Z9u) {
            return;
        }
        for (var k9u = +"0"; k9u < T9u.renderers.length; k9u++) {
            H9u = this.chart.seriesRenderers[T9u.renderers[k9u]];
            if (H9u && H9u.params.panel == Z9u.name) {
                return;
            }
        }
        if (T9u.name === Z9u.yAxis.name) {
            if (Z9u.yaxisRHS.length + Z9u.yaxisLHS.length === 1) {
                return;
            }
        }
        for (o9u = 0; Z9u.yaxisRHS && o9u < Z9u.yaxisRHS.length; o9u++) {
            if (Z9u.yaxisRHS[o9u] === T9u) {
                Z9u.yaxisRHS[o9u] = null;
            } else if (!a9u) {
                a9u = Z9u.yaxisRHS[o9u];
            }
        }
        for (o9u = 0; Z9u.yaxisLHS && o9u < Z9u.yaxisLHS.length; o9u++) {
            if (Z9u.yaxisLHS[o9u] === T9u) {
                Z9u.yaxisLHS[o9u] = null;
            } else if (!a9u) {
                a9u = Z9u.yaxisLHS[o9u];
            }
        }
        Z9u.yaxisRHS = Z9u.yaxisRHS.filter(Y9u);
        Z9u.yaxisLHS = Z9u.yaxisLHS.filter(Y9u);
        if (a9u && T9u.name === Z9u.yAxis.name) {
            Z9u.yAxis = a9u;
        }
        this.calculateYAxisPositions();
    };
    s1P.ChartEngine.prototype.addYAxis = function (l9u, D9u) {
        var u6T, p6T, K9u, e9u, V9u, o6T;
        u6T = "st";
        u6T += "r";
        u6T += "i";
        u6T += "ng";
        if (typeof l9u == u6T) {
            l9u = this.panels[l9u];
        }
        C29.K19();
        if (!D9u || !l9u) {
            return;
        }
        if (!l9u.yaxisLHS) {
            p6T = "l";
            p6T += "e";
            p6T += "f";
            p6T += "t";
            l9u.yaxisLHS = [];
            l9u.yaxisRHS = [];
            if (l9u.yAxis.position == "left" || (l9u.yAxis.position != "right" && l9u.chart.panel.yAxis.position == p6T)) {
                l9u.yaxisLHS.push(l9u.yAxis);
            } else {
                l9u.yaxisRHS.push(l9u.yAxis);
            }
        }
        e9u = [];
        V9u = l9u.yaxisLHS;
        for (K9u = V9u.length - 1; K9u >= "0" << 1207203360; K9u--) {
            if (V9u[K9u].name === D9u.name) {
                o6T = "rig";
                o6T += "h";
                o6T += "t";
                if (D9u.position != o6T) {
                    return V9u[K9u];
                }
                e9u = V9u.splice(K9u, 1);
            }
        }
        V9u = l9u.yaxisRHS;
        for (K9u = V9u.length - 1; K9u >= 0; K9u--) {
            if (V9u[K9u].name === D9u.name) {
                if (D9u.position != "left") {
                    return V9u[K9u];
                }
                e9u = V9u.splice(K9u, 1);
            }
        }
        if (D9u.position === "left" || (D9u.position != "right" && l9u.chart.panel.yAxis.position == "left")) {
            l9u.yaxisLHS.unshift(D9u);
        } else {
            l9u.yaxisRHS.push(D9u);
        }
        if (D9u.position !== "none") {
            D9u.setBreakpointWidth(this.chart.breakpoint);
        }
        D9u.height = l9u.yAxis.height;
        D9u.idealTickSizePixels = null;
        if (e9u[0] == l9u.yAxis) {
            l9u.yAxis = D9u;
        }
        this.calculateYAxisMargins(D9u);
        return D9u;
    };
    s1P.ChartEngine.prototype.calculateYAxisPositions = function () {
        var A9u, y9u, n9u, z9u, M9u, J9u, U9u, u9u, b9u, O9u, N9u, I9u, h9u, w9u, X6T, Y6T, Z6T, v9u, a6T, y6T, W9u, E9u, R6T;
        A9u = [];
        for (var t9u in this.charts) {
            if (this.charts[t9u].hidden || this.charts[t9u].panel.hidden) continue;
            A9u.push(t9u);
        }
        for (var m9u in this.panels) {
            y9u = this.panels[m9u];
            if (y9u.name === y9u.chart.name || y9u.hidden) continue;
            A9u.push(m9u);
        }
        n9u = this.drawBorders ? 3 : 0;
        z9u = 0;
        M9u = +"0";
        for (U9u = 0; U9u < A9u.length; U9u++) {
            u9u = this.panels[A9u[U9u]];
            if (!u9u) continue;
            if (!u9u.yaxisLHS) {
                u9u.yaxisLHS = [];
                u9u.yaxisRHS = [];
            }
            O9u = u9u.yaxisLHS;
            N9u = u9u.yaxisRHS;
            I9u = u9u.yAxis.position;
            if (!I9u || I9u == "none") {
                I9u = u9u.chart.yAxis.position || "right";
            }
            if (!O9u.length && !N9u.length) {
                if (I9u == "left") {
                    O9u.push(u9u.yAxis);
                } else {
                    N9u.push(u9u.yAxis);
                }
            }
            h9u = [];
            w9u = [];
            for (J9u = O9u.length - 1; J9u >= 0; J9u--) {
                X6T = "rig";
                X6T += "h";
                X6T += "t";
                Y6T = "r";
                Y6T += "i";
                Y6T += "ght";
                if (O9u[J9u].position == Y6T || (O9u[J9u].position != "left" && I9u == X6T)) {
                    h9u = h9u.concat(O9u.splice(J9u, 1));
                }
            }
            for (J9u = N9u.length - 1; J9u >= "0" << 962399904; J9u--) {
                Z6T = "ri";
                Z6T += "ght";
                if (N9u[J9u].position == "left" || (N9u[J9u].position != Z6T && I9u == "left")) {
                    w9u = w9u.concat(N9u.splice(J9u, "1" - 0));
                }
            }
            u9u.yaxisLHS = w9u.concat(O9u);
            u9u.yaxisRHS = N9u.concat(h9u);
            if (!u9u.yAxis.width && u9u.yAxis.width !== 0) {
                u9u.yAxis.width = this.yaxisWidth;
            }
            u9u.yaxisTotalWidthRight = +"0";
            u9u.yaxisTotalWidthLeft = +"0";
            v9u = u9u.yaxisLHS.concat(u9u.yaxisRHS);
            for (J9u = 0; J9u < v9u.length; J9u++) {
                a6T = "le";
                a6T += "ft";
                b9u = v9u[J9u];
                if (b9u.noDraw || !b9u.width) continue;
                if (b9u.position == a6T || (I9u == "left" && !b9u.position)) {
                    u9u.yaxisTotalWidthLeft += b9u.width;
                } else {
                    u9u.yaxisTotalWidthRight += b9u.width;
                }
            }
            if (u9u.yaxisTotalWidthLeft > z9u) {
                z9u = u9u.yaxisTotalWidthLeft;
            }
            if (u9u.yaxisTotalWidthRight > M9u) {
                M9u = u9u.yaxisTotalWidthRight;
            }
        }
        for (U9u = 0; U9u < A9u.length; U9u++) {
            y6T = "undef";
            y6T += "ined";
            u9u = this.panels[A9u[U9u]];
            if (!u9u) continue;
            W9u = u9u.name === u9u.chart.name;
            E9u = z9u;
            for (J9u = u9u.yaxisLHS.length - 1; J9u >= +"0"; J9u--) {
                b9u = u9u.yaxisLHS[J9u];
                if (b9u.noDraw) continue;
                E9u -= b9u.width;
                b9u.left = E9u;
            }
            E9u = this.width - M9u;
            for (J9u = 0; J9u < u9u.yaxisRHS.length; J9u++) {
                b9u = u9u.yaxisRHS[J9u];
                if (b9u.noDraw) continue;
                b9u.left = E9u;
                E9u += b9u.width;
            }
            if (typeof this.yaxisLeft != y6T) {
                u9u.chart.yaxisPaddingRight = this.yaxisLeft;
            }
            u9u.yaxisCalculatedPaddingRight = M9u;
            if (u9u.chart.yaxisPaddingRight || u9u.chart.yaxisPaddingRight === 0) {
                u9u.yaxisCalculatedPaddingRight = u9u.chart.yaxisPaddingRight;
            }
            u9u.yaxisCalculatedPaddingLeft = z9u;
            if (u9u.chart.yaxisPaddingLeft || u9u.chart.yaxisPaddingLeft === 0) {
                u9u.yaxisCalculatedPaddingLeft = u9u.chart.yaxisPaddingLeft;
            }
            if (W9u || u9u.chart.panel.hidden) {
                u9u.left = u9u.yaxisCalculatedPaddingLeft;
                u9u.right = this.width - u9u.yaxisCalculatedPaddingRight;
            } else {
                u9u.left = u9u.chart.panel.left;
                u9u.right = u9u.chart.panel.right;
            }
            u9u.width = u9u.right - u9u.left;
            if (u9u.handle) {
                R6T = "p";
                R6T += "x";
                u9u.handle.style.left = u9u.left + "px";
                u9u.handle.style.width = u9u.width + R6T;
            }
            if (W9u || u9u.chart.panel.hidden) {
                u9u.chart.panel.left = u9u.chart.left = u9u.left;
                u9u.chart.panel.right = u9u.chart.right = u9u.right;
                u9u.chart.panel.width = u9u.chart.width = Math.max(u9u.right - u9u.left, +"0");
            }
        }
        C29.K19();
        this.setCandleWidth(this.layout.candleWidth);
        this.adjustPanelPositions();
    };
    s1P.ChartEngine.prototype.getYAxisCurrentPosition = function (f9u, R9u) {
        var c9u, x6T;
        C29.X19();
        if (!f9u.width) {
            return "none";
        }
        c9u = R9u.yaxisLHS;
        for (var x9u = "0" - 0; x9u < c9u.length; x9u++) {
            x6T = "l";
            x6T += "e";
            x6T += "f";
            x6T += "t";
            if (c9u[x9u].name == f9u.name) {
                return x6T;
            }
        }
        return "right";
    };
    s1P.ChartEngine.prototype.setYAxisPosition = function (i9u, q9u) {
        i9u.position = q9u;
        C29.X19();
        if (q9u === "none") {
            i9u.width = 0;
        } else {
            i9u.setBreakpointWidth(this.chart.breakpoint);
        }
        this.calculateYAxisPositions();
        this.draw();
    };
    s1P.ChartEngine.prototype.electNewYAxisOwner = function (Q9u) {
        var G9u, C9u;
        G9u = Q9u.studies[0];
        if (!G9u || G9u == Q9u.name) {
            G9u = Q9u.renderers[0];
        }
        if (!G9u || G9u == Q9u.name) {
            G9u = Q9u.studies[1];
        }
        if (!G9u) {
            G9u = Q9u.renderers[1];
        }
        for (var L9u = 0; L9u < Q9u.studies.length; L9u++) {
            C9u = this.layout.studies[Q9u.studies[L9u]];
            if (C9u.parameters && C9u.parameters.yaxisDisplayValue == Q9u.name) {
                C9u.parameters.yaxisDisplayValue = G9u;
            }
        }
        C29.K19();
        return G9u;
    };
};
Z9L = (B9u) => {
    var a29 = R1aa;
    a29.f5s = function (r5s) {
        if (a29) return a29.g5s(r5s);
    };
    a29.G5s = function (i5s) {
        a29.K19();
        if (a29 && i5s) return a29.g5s(i5s);
    };
    a29.I5s = function (W5s) {
        if (a29) return a29.S5s(W5s);
    };
    a29.P5s = function (F5s) {
        if (a29 && F5s) return a29.S5s(F5s);
    };
    var d9u, g9u, X9u;
    function S0u(q3u, G3u) {
        var n3u, Q3u, L3u, C3u, R3u, d3u, i3u, x3u, c3u, f3u;
        if (q3u.hasOwnProperty(X9u)) {
            return;
        }
        n3u = new Image();
        Q3u = 10;
        L3u = 3.375;
        a29.T3k(32);
        C3u = a29.j3k(5, 4);
        a29.T3k(155);
        R3u = a29.v3k("5", 1125892704, 4);
        d3u = 5;
        a29.L3k(16);
        var V61 = a29.j3k(9, 14, 3, 1);
        a29.L3k(8);
        var r61 = a29.j3k(34, 45, 13);
        i3u = Math.pow(C3u, V61) / r61;
        a29.X19();
        a29.T3k(32);
        x3u = a29.v3k(4, 1);
        c3u = x3u;
        f3u = Object.create(null, {
            sizeRatio: {
                configurable: !{},
                enumerable: !{},
                get: function () {
                    return c3u;
                },
                set: function (g3u) {
                    a29.X19();
                    if (g3u < i3u) {
                        c3u = i3u;
                    } else if (g3u > x3u) {
                        c3u = x3u;
                    } else {
                        c3u = g3u || x3u;
                    }
                },
            },
            draw: {
                configurable: ![],
                enumerable: !!0,
                value: function (P5u) {
                    var j6T, a5u, p5u, F5u, X3u, Z5u, o5u, j5u, r5u;
                    a29.K19();
                    if (this.image) {
                        j6T = "cq-attrib-cont";
                        j6T += "ainer";
                        a5u = document.querySelector(j6T) ? document.querySelector("cq-attrib-container").offsetHeight : "0" >> 1784620128;
                        p5u = P5u.yAxis.bottom - a5u - Q3u;
                        var { width: B3u, height: S5u } = this.image;
                        if (isNaN(B3u) || isNaN(S5u)) {
                            return;
                        }
                        F5u = B3u * this.sizeRatio;
                        X3u = S5u * this.sizeRatio;
                        Z5u = P5u.left + Q3u;
                        a29.T3k(1);
                        o5u = a29.v3k(p5u, X3u);
                        j5u = P5u.context;
                        r5u = ![];
                        do {
                            if ((Z5u + F5u * L3u > P5u.right || X3u * d3u > p5u) && this.sizeRatio > i3u) {
                                this.sizeRatio *= C3u;
                                F5u = B3u * this.sizeRatio;
                                X3u = S5u * this.sizeRatio;
                                a29.T3k(1);
                                o5u = a29.j3k(p5u, X3u);
                                r5u = !!1;
                            } else if (Z5u + B3u * (this.sizeRatio * R3u) * L3u < P5u.right && S5u * (this.sizeRatio * R3u) * d3u < p5u && this.sizeRatio < x3u) {
                                this.sizeRatio *= R3u;
                                F5u = B3u * this.sizeRatio;
                                X3u = S5u * this.sizeRatio;
                                a29.L3k(1);
                                o5u = a29.j3k(p5u, X3u);
                                r5u = !!{};
                            } else {
                                r5u = !!"";
                            }
                        } while (r5u);
                        j5u.save();
                        var [, , T5u] = d9u.hsl(q3u.containerColor);
                        j5u.globalAlpha = T5u > 0.35 ? 0.15 : 0.2;
                        this.image.src = T5u > 0.35 ? this.image.darksrc : this.image.lightsrc;
                        j5u.drawImage(this.image, 0, "0" | 0, B3u, S5u, Z5u, o5u, F5u, X3u);
                        j5u.restore();
                        this.first = !{};
                    } else if (this.first !== ![]) {
                        this.first = P5u;
                    }
                },
                writable: !!0,
            },
        });
        n3u.onload = function () {
            Object.defineProperty(f3u, "image", { configurable: !"1", enumerable: !1, value: n3u, writable: !!"" });
            a29.X19();
            if (!n3u.darksrc) {
                n3u.lightsrc = n3u.src;
                a29.T3k(23);
                var z61 = a29.j3k(1054, 1044, 116);
                a29.T3k(73);
                var w81 = a29.j3k(3, 974, 2, 89);
                n3u.darksrc = G3u.slice(0, z61) + "i" + G3u.slice(w81);
                n3u.src = n3u.darksrc;
            } else {
                if (f3u.first) {
                    f3u.first.container.stx.draw();
                }
            }
        };
        n3u.src = G3u;
        Object.defineProperty(q3u, X9u, { configurable: !!"", enumerable: !!"", value: f3u, writable: !{} });
    }
    d9u = B9u.CIQ;
    g9u = "v";
    g9u += "alid";
    d9u.valid = 0;
    d9u.ChartEngine.prototype.consolidatedQuote = function (P0u, o0u) {
        var m6T, A6T, H0u, a0u, J0u, Y0u, F0u, K0u, T0u, V0u, p0u, j0u, e0u, M6T, s0u, l0u, D0u, k0u, r0u, d6T, Z0u, u0u;
        m6T = "consolida";
        m6T += "tedQuote";
        A6T = "con";
        function b0u(U0u, O0u, M0u) {
            var I0u, A0u, E0u, z0u, I6T;
            if (!O0u) {
                O0u = { DT: M0u, Date: d9u.yyyymmddhhmmssmmm(M0u), consolidatedTicks: 0 };
            }
            if (!O0u.displayDate) {
                J0u.setDisplayDate(O0u);
            }
            I0u = 1;
            if (H0u.adj && U0u.Adj_Close) {
                I0u = U0u.Adj_Close / U0u.Close;
            }
            A0u = U0u.High || U0u.Close;
            if (A0u || A0u === 0) {
                if (A0u * I0u > (O0u.High || -Number.MAX_VALUE)) {
                    a29.T3k(19);
                    O0u.High = a29.v3k(A0u, I0u);
                }
            }
            E0u = U0u.Low || U0u.Close;
            if (E0u || E0u === 0) {
                if (E0u * I0u < (O0u.Low || Number.MAX_VALUE)) {
                    a29.L3k(19);
                    O0u.Low = a29.j3k(E0u, I0u);
                }
            }
            z0u = U0u.Open || U0u.Close;
            if (z0u || z0u === 0) {
                if (!O0u.Open && O0u.Open !== "0" << 1267555904) {
                    a29.L3k(19);
                    O0u.Open = a29.v3k(z0u, I0u);
                }
            }
            if (U0u.Volume !== undefined) {
                O0u.Volume = (O0u.Volume || 0) + U0u.Volume;
            }
            if (U0u.Close !== undefined && U0u.Close !== null) {
                O0u.Close = U0u.Close * I0u;
            }
            if (U0u.Adj_Close !== undefined && U0u.Adj_Close !== null) {
                O0u.Adj_Close = U0u.Adj_Close;
            }
            O0u.ratio = I0u;
            for (var N0u in U0u) {
                I6T = "B";
                I6T += "i";
                I6T += "d";
                if (U0u[N0u] && U0u[N0u].Close !== undefined) {
                    O0u[N0u] = b0u(U0u[N0u], O0u[N0u], M0u);
                } else if (!O0u[N0u]) {
                    O0u[N0u] = U0u[N0u];
                } else if ([I6T, "BidL2", "Ask", "AskL2"].indexOf(N0u) > -1) {
                    O0u[N0u] = U0u[N0u];
                }
            }
            O0u.consolidatedTicks++;
            return O0u;
        }
        A6T += "solidate";
        A6T += "dQuote";
        if (this.runPrepend(A6T, arguments)) {
            return P0u;
        }
        if (!P0u || !P0u.length) {
            return [];
        }
        H0u = this.layout;
        a0u = this.chart;
        J0u = this;
        if (!a0u.market) {
            console.log("Cannot consolidate: no market iterator available.  Please make sure market module is enabled.");
            return P0u;
        }
        Y0u = H0u.periodicity;
        F0u = H0u.interval;
        K0u = H0u.timeUnit;
        a29.X19();
        if (!o0u) {
            o0u = {};
        }
        if (o0u.periodicity && o0u.interval) {
            Y0u = o0u.periodicity;
            F0u = o0u.interval;
            K0u = o0u.timeUnit;
        }
        T0u = 1;
        V0u = d9u.ChartEngine.isDailyInterval(F0u);
        if (!V0u && a0u.useInflectionPointForIntraday) {
            T0u = Y0u;
        }
        p0u = a0u.inflectionPoint;
        if (!p0u || p0u < P0u[0].DT) {
            p0u = new Date(+P0u["0" & 2147483647].DT);
            if (!V0u && !a0u.market.market_def) {
                p0u.setHours(+"0", -p0u.getTimezoneOffset(), +"0", "0" << 336810944);
            }
        }
        j0u = [];
        e0u = { begin: p0u, interval: F0u, multiple: Y0u / T0u, timeUnit: K0u };
        if (F0u == "tick") {
            M6T = "d";
            M6T += "ay";
            p0u.setHours(0, 0, 0, 0);
            e0u = { begin: p0u, interval: M6T, multiple: +"1" };
        }
        s0u = a0u.market.newIterator(d9u.clone(e0u));
        while (s0u.previous(T0u) > P0u[0].DT) {}
        l0u = s0u.previous(T0u);
        D0u = s0u.next(T0u);
        k0u = 0;
        r0u = 0;
        while (k0u < P0u.length) {
            d6T = "ti";
            d6T += "c";
            d6T += "k";
            Z0u = P0u[k0u];
            if (Z0u.DT < l0u) {
                console.log("Warning: out-of-order quote in dataSet, disregarding: " + Z0u.DT);
                k0u++;
                continue;
            } else if (Z0u.DT >= D0u) {
                l0u = D0u;
                D0u = s0u.next(T0u);
                if (!j0u[r0u]) continue;
            } else if (F0u == "tick" && Z0u.consolidatedTicks > 0) {
                j0u[r0u] = Z0u;
                k0u++;
                continue;
            } else if (!j0u[r0u] || F0u != d6T || j0u[r0u].consolidatedTicks < Y0u) {
                u0u = b0u(Z0u, j0u[r0u], F0u == "tick" ? Z0u.DT : l0u);
                if (u0u) {
                    j0u[r0u] = u0u;
                }
                k0u++;
                continue;
            }
            r0u++;
        }
        this.runAppend(m6T, arguments);
        return j0u;
    };
    d9u[a29.P5s("8375") ? "ChartEngine" : ""][a29.A5s("6e15") ? "" : "prototype"][a29.D5s("43bd") ? "createDataSet" : ""] = function (u3u, E3u, q0u) {
        a29.U1s = function (C5s) {
            a29.K19();
            if (a29 && C5s) return a29.g5s(C5s);
        };
        a29.d5s = function (h5s) {
            a29.X19();
            if (a29) return a29.g5s(h5s);
        };
        a29.u5s = function (X5s) {
            if (a29) return a29.S5s(X5s);
        };
        a29.n5s = function (b5s) {
            if (a29 && b5s) return a29.g5s(b5s);
        };
        var p9Y = a29.I5s("4b1c") ? 985608170 : 257682598,
            q9Y = -(a29.n5s("6217") ? 1255684369 : 1458416996),
            r9Y = a29.x5s("b37a") ? 1781514143 : 2291039039,
            j9Y = -(a29.u5s("6ca3") ? 1684213683 : 3946063900),
            t9Y = 1396940523,
            u9Y = a29.d5s("5354") ? 1226784240 : 5924066503;
        if (
            !(
                a29.m9Y(a29.y5s("91fe") ? 0 : 7, a29.T5s("c285") ? false : true, 768530) !== p9Y &&
                a29.m9Y(a29.L5s("6db5") ? 0 : 7, a29.G5s("d25b") ? false : true, a29.J5s("c84f") ? 265136 : 577463) !== q9Y &&
                a29.w9Y(a29.f5s("8b65") ? 78 : 17, a29.U1s("1f59") ? true : false, 713579) !== r9Y &&
                a29.w9Y(0, false, 252608) !== j9Y &&
                a29.w9Y(18, false, 364572) !== t9Y &&
                a29.m9Y(0, false, 625767) !== u9Y
            )
        ) {
            var t0u,
                P3u,
                x0u,
                w0u,
                m0u,
                G0u,
                T3u,
                c0u,
                P6T,
                d0u,
                Q0u,
                g0u,
                m8a,
                P8a,
                L8a,
                v0u,
                p3u,
                F3u,
                y0u,
                R0u,
                J3u,
                W0u,
                b3u,
                a3u,
                j3u,
                X0u,
                k3u,
                Y3u,
                L6T,
                s3u,
                h0u,
                B0u,
                l3u,
                D3u,
                S3u,
                U3u,
                i0u,
                L0u,
                O3u,
                f0u,
                C0u,
                n0u,
                K3u,
                V3u,
                N3u,
                e3u,
                I3u,
                o3u;
            if (!q0u) {
                q0u = {};
            }
            t0u = this["chart"];
            P3u = [u3u, t0u, { appending: q0u["appending"], appendToDate: q0u["appendToDate"] }];
            if (this["runPrepend"]("createDataSet", P3u)) {
                return;
            }
            w0u = [];
            m0u = [];
            G0u = q0u["appending"];
            if (!t0u["dataSet"]) {
                t0u["dataSet"] = [];
            }
            T3u = t0u["dataSet"]["length"];
            if (G0u) {
                w0u = t0u["dataSet"];
            }
            t0u["currentQuote"] = null;
            t0u["dataSet"] = [];
            if (!G0u) {
                t0u["tickCache"] = {};
            }
            c0u = t0u["masterData"];
            if (!c0u) {
                c0u = this["masterData"];
            }
            if (!c0u || !c0u["length"]) {
                P6T = "cre";
                P6T += "ateDataSet";
                this["runAppend"](P6T, P3u);
                return;
            }
            if (w0u["length"]) {
                d0u = w0u["pop"]();
                while (d0u["futureTick"] && w0u["length"]) {
                    d0u = w0u["pop"]();
                    T3u--;
                }
                Q0u = q0u["appendToDate"];
                if (!Q0u || Q0u > d0u["DT"]) {
                    Q0u = d0u["DT"];
                }
                while (w0u["length"]) {
                    if (w0u[w0u["length"] - 1]["DT"] < Q0u) break;
                    w0u["pop"]();
                }
                a29["T3k"](51);
                var B81 = a29["j3k"](8, 13, 103);
                g0u = c0u["length"] - B81;
                while (g0u >= 0 && c0u[g0u]["DT"] >= Q0u) {
                    g0u--;
                }
                a29["T3k"](6);
                x0u = c0u["slice"](a29["v3k"](g0u, 1));
            } else {
                x0u = []["concat"](c0u);
            }
            if (!A3u()) {
                return;
            }
            a29["L3k"](124);
            m8a = -a29["j3k"]("941252844", 134365316);
            P8a = -366374035;
            L8a = 2;
            for (var O8a = 1; a29["J4a"](O8a["toString"](), O8a["toString"]()["length"], 74248) !== m8a; O8a++) {
                if (this["transformDataSetPre"]) {
                    this["transformDataSetPre"](this, x0u);
                }
                L8a += 2;
            }
            if (a29["J4a"](L8a["toString"](), L8a["toString"]()["length"], 81782) !== P8a) {
                if (this["transformDataSetPre"]) {
                    this["transformDataSetPre"](this, x0u);
                }
            }
            if (this["transformDataSetPre"]) {
                this["transformDataSetPre"](this, x0u);
            }
            if (!this["chart"]["hideDrawings"]) {
                for (v0u = "0" << 1077911104; v0u < this["drawingObjects"]["length"]; v0u++) {
                    if (this["drawingObjects"][v0u]["name"] == "projection") {
                        d9u["getFn"]("Drawing.printProjection")(this, this["drawingObjects"][v0u], x0u);
                    }
                }
                if (this["activeDrawing"] && this["activeDrawing"]["name"] == "projection") {
                    d9u["getFn"]("Drawing.printProjection")(this, this["activeDrawing"], x0u);
                }
            }
            a29["T3k"](1);
            v0u = a29["v3k"]("0", 0);
            p3u = -Number["MAX_VALUE"];
            F3u = Number["MAX_VALUE"];
            R0u = 0;
            J3u = u3u || this["dontRoll"];
            W0u = this["layout"];
            b3u = d9u["ChartEngine"]["isDailyInterval"](W0u["interval"]);
            while ("1" << 321121440) {
                if (R0u >= x0u["length"]) break;
                if (!(this["dontRoll"] && (W0u["interval"] == "week" || W0u["interval"] == "month")) && this["extendedHours"] && this["extendedHours"]["filter"] && t0u["market"]["market_def"]) {
                    X0u = x0u[R0u];
                    if (b3u) {
                        j3u = !t0u["market"]["isMarketDate"](X0u["DT"]);
                    } else {
                        if (!a3u || a3u <= X0u["DT"]) {
                            k3u = t0u["market"]["getSession"](X0u["DT"]);
                            j3u = k3u !== "" && (!W0u["marketSessions"] || !W0u["marketSessions"][k3u]);
                            a3u = t0u["market"][j3u ? "getNextOpen" : "getNextClose"](X0u["DT"]);
                        }
                    }
                    if (j3u) {
                        R0u++;
                        continue;
                    }
                }
                y0u = {};
                for (var H3u in x0u[R0u]) {
                    y0u[H3u] = x0u[R0u][H3u];
                }
                x0u[R0u] = y0u;
                y0u["ratio"] = 1;
                if (W0u["adj"] && y0u["Adj_Close"]) {
                    y0u["ratio"] = y0u["Adj_Close"] / y0u["Close"];
                }
                if (y0u["ratio"] != +"1") {
                    if (y0u["Open"]) {
                        y0u["Open"] = Number((y0u["Open"] * y0u["ratio"])["toFixed"](8));
                    }
                    if (y0u["Close"]) {
                        y0u["Close"] = Number((y0u["Close"] * y0u["ratio"])["toFixed"](8));
                    }
                    if (y0u["High"]) {
                        y0u["High"] = Number((y0u["High"] * y0u["ratio"])["toFixed"](8));
                    }
                    if (y0u["Low"]) {
                        y0u["Low"] = Number((y0u["Low"] * y0u["ratio"])["toFixed"](+"8"));
                    }
                }
                m0u[v0u++] = x0u[R0u++];
            }
            if (W0u["periodicity"] > 1 || (!J3u && (W0u["interval"] == "week" || W0u["interval"] == "month"))) {
                if (w0u["length"]) {
                    m0u["unshift"](w0u["pop"]());
                }
                m0u = this["consolidatedQuote"](m0u);
            }
            Y3u = {};
            for (v0u = 0; v0u < m0u["length"]; v0u++) {
                L6T = "L";
                L6T += "o";
                L6T += "w";
                y0u = m0u[v0u];
                if (v0u > 0) {
                    y0u["iqPrevClose"] = m0u[v0u - 1]["Close"];
                    if (!y0u["iqPrevClose"] && y0u["iqPrevClose"] !== 0) {
                        y0u["iqPrevClose"] = m0u[v0u - 1]["iqPrevClose"];
                    }
                } else if (w0u["length"]) {
                    y0u["iqPrevClose"] = w0u[w0u["length"] - 1]["Close"];
                    if (!y0u["iqPrevClose"] && y0u["iqPrevClose"] !== 0) {
                        y0u["iqPrevClose"] = w0u[w0u["length"] - 1]["iqPrevClose"];
                    }
                } else {
                    y0u["iqPrevClose"] = y0u["Close"];
                }
                if ("High" in y0u && y0u["High"] > p3u) {
                    p3u = y0u["High"];
                }
                if (L6T in y0u && y0u["Low"] < F3u) {
                    F3u = y0u["Low"];
                }
                for (var r3u in t0u["series"]) {
                    s3u = t0u["series"][r3u]["parameters"]["symbol"];
                    h0u = y0u[s3u];
                    if (h0u && typeof h0u == "object") {
                        if (v0u > 0) {
                            h0u["iqPrevClose"] = Y3u[r3u];
                        } else if (w0u["length"]) {
                            for (var Z3u = w0u["length"] - 1; Z3u >= 0; Z3u--) {
                                B0u = w0u[Z3u][s3u];
                                if (B0u && (B0u["Close"] || B0u["Close"] === 0)) {
                                    h0u["iqPrevClose"] = B0u["Close"];
                                    break;
                                }
                            }
                        } else {
                            h0u["iqPrevClose"] = h0u["Close"];
                        }
                        if (h0u["Close"] || h0u["Close"] === 0) {
                            Y3u[r3u] = h0u["Close"];
                        }
                        h0u["ratio"] = +"1";
                        if (W0u["adj"] && h0u["Adj_Close"]) {
                            h0u["ratio"] = h0u["Adj_Close"] / h0u["Close"];
                        }
                        if (h0u["ratio"] != 1) {
                            if (h0u["Open"]) {
                                h0u["Open"] = Number((h0u["Open"] * h0u["ratio"])["toFixed"](8));
                            }
                            if (h0u["Close"]) {
                                h0u["Close"] = Number((h0u["Close"] * h0u["ratio"])["toFixed"](8));
                            }
                            if (h0u["High"]) {
                                h0u["High"] = Number((h0u["High"] * h0u["ratio"])["toFixed"](8));
                            }
                            if (h0u["Low"]) {
                                h0u["Low"] = Number((h0u["Low"] * h0u["ratio"])["toFixed"](8));
                            }
                        }
                    }
                }
            }
            l3u = this["preferences"]["whitespace"] / this["layout"]["candleWidth"];
            function A3u() {
                var v9Y = -1259584560,
                    L9Y = 1454208324,
                    x9Y = -625462898,
                    y9Y = -1358872557,
                    z9Y = 497245550,
                    A9Y = 2106560539;
                if (
                    !(
                        a29.w9Y(0, false, 482090) !== v9Y &&
                        a29.w9Y(0, false, 584078) !== L9Y &&
                        a29.m9Y(17, false, 280589) !== x9Y &&
                        a29.m9Y(0, false, 714378) !== y9Y &&
                        a29.w9Y(18, false, 868536) !== z9Y &&
                        a29.m9Y(0, false, 538145) !== A9Y
                    )
                ) {
                    var h3u, M3u, z3u, t3u, m3u, w3u, v3u;
                    h3u = "lesf";
                    M3u = (618.55, 466.45) >= (7521, 8500) ? "s" : 8860 > +"3020" ? (921.49 > (855, 195.33) ? "t" : 635.13) : "928" ^ 0;
                    z3u = (9075, 8424) <= (2100, 1490) ? ((22.49, 781) != 5470 ? (189.25 < "492.09" * 1 ? !!1 : (365.05, 3.01e3)) : 0x2480) : "s";
                    M3u += 1920 > 327.77 ? "o" : ("R", "0x238" | 528);
                    z3u += 743 == (71.37, 617.51) ? !!1 : (7880, +"3850") <= 8693 ? "e" : (2898, 6350) !== 9550 ? ("S", !{}) : "118.84" - 0;
                    t3u = ["127.0.0.1", "localhost", "enrichbroking.in", "enrichbroking.com"];
                    z3u += h3u["charAt"](0);
                    M3u += (6040, +"264") === 4429 ? "U" : "p";
                    a29["L3k"](64);
                    z3u += h3u["charAt"](a29["j3k"]("3", 1373517984));
                    if (window[M3u] == window[z3u]) {
                        return d9u[g9u] === ("0" ^ 0);
                    }
                    if (t3u["length"]) {
                        m3u = d9u["getHostName"](document["referrer"]);
                        w3u = ![];
                        for (var y3u = +"0"; y3u < t3u["length"]; y3u++) {
                            v3u = t3u[y3u];
                            if (m3u["indexOf"](v3u) != -1) {
                                w3u = !!{};
                            }
                        }
                        if (!w3u) {
                            return !{};
                        }
                    }
                    return d9u[g9u] === 0;
                }
            }
            D3u = t0u["scroll"] >= t0u["maxTicks"];
            if (D3u) {
                t0u["spanLock"] = !!"";
            }
            t0u["defaultChartStyleConfig"] = { type: W0u["chartType"] };
            S3u = W0u["aggregationType"];
            if (S3u && S3u != "ohlc") {
                if (!d9u["ChartEngine"]["calculateAggregation"]) {
                    console["log"]("Aggregation code is not loaded/enabled!");
                } else {
                    t0u["defaultChartStyleConfig"]["type"] = S3u;
                    if (!G0u || !t0u["state"]["aggregation"]) {
                        t0u["state"]["aggregation"] = {};
                    }
                    m0u = d9u["ChartEngine"]["calculateAggregation"](this, S3u, m0u, w0u);
                }
            }
            t0u["spanLock"] = t0u["scroll"] > +"0" && t0u["scroll"] < t0u["maxTicks"] - l3u;
            U3u = D3u || t0u["lockScroll"] || t0u["spanLock"] || this["isHistoricalModeSet"];
            i0u = m0u["length"] - (T3u - w0u["length"]);
            if (!G0u) {
                i0u = 0;
            }
            if (i0u) {
                if (t0u["spanLock"] && i0u + t0u["scroll"] >= t0u["maxTicks"] - l3u) {
                    t0u["spanLock"] = !{};
                } else if (U3u || i0u < 0) {
                    t0u["scroll"] += i0u;
                    this["grabStartScrollX"] += i0u;
                    if (this["swipe"]) {
                        this["swipe"]["scroll"] += i0u;
                    }
                }
            }
            if (this["transformDataSetPost"]) {
                this["transformDataSetPost"](this, m0u, F3u, p3u);
            }
            L0u = this["maxDataSetSize"];
            if (L0u) {
                if (w0u["length"] + m0u["length"] > L0u) {
                    if (m0u["length"] < L0u) {
                        w0u = w0u["slice"](m0u["length"] - L0u);
                    } else {
                        w0u = [];
                    }
                    m0u = m0u["slice"](-L0u);
                }
            }
            if (!t0u["scrubbed"]) {
                t0u["scrubbed"] = [];
            }
            if (w0u["length"]) {
                O3u = w0u[w0u["length"] - 1]["DT"];
                while (t0u["scrubbed"]["length"] && t0u["scrubbed"][t0u["scrubbed"]["length"] - ("1" << 1442658144)]["DT"] > O3u) {
                    t0u["scrubbed"]["pop"]();
                }
            } else {
                t0u["scrubbed"] = [];
            }
            if (!t0u["state"]["studies"]) {
                t0u["state"]["studies"] = {};
            }
            t0u["state"]["studies"]["startFrom"] = t0u["scrubbed"]["length"];
            f0u = [];
            for (v0u = 0; v0u < m0u["length"]; v0u++) {
                C0u = m0u[v0u];
                if (C0u["Close"] || C0u["Close"] === 0) {
                    f0u["push"](C0u);
                } else if (C0u["DT"] > Date["now"]()) {
                    f0u["push"](C0u);
                }
            }
            t0u["scrubbed"] = t0u["scrubbed"]["concat"](f0u);
            if (!G0u || !t0u["state"]["calculations"]) {
                t0u["state"]["calculations"] = {};
            }
            this["calculateATR"](t0u, 20, f0u);
            this["calculateMedianPrice"](t0u, f0u);
            this["calculateTypicalPrice"](t0u, f0u);
            this["calculateWeightedClose"](t0u, f0u);
            this["calculateOHLC4"](t0u, f0u);
            for (n0u in this["plugins"]) {
                K3u = this["plugins"][n0u];
                if (K3u["createDataSet"]) {
                    K3u["createDataSet"](this, t0u, m0u, w0u["length"]);
                }
            }
            t0u["dataSet"] = w0u["concat"](m0u);
            for (n0u = "0" ^ 0; n0u < t0u["dataSet"]["length"]; n0u++) {
                t0u["dataSet"][n0u]["cache"] = {};
                t0u["dataSet"][n0u]["tick"] = n0u;
            }
            t0u["whiteSpaceFutureTicks"] = 0;
            V3u = this["layout"]["studies"];
            N3u = t0u["scrubbed"]["length"];
            if (V3u && Object["keys"](V3u)["length"]) {
                e3u = t0u["state"]["studies"]["sorted"] || d9u["Studies"]["sortForProcessing"](this);
                I3u = this;
                t0u["state"]["studies"]["sorted"] = e3u;
                e3u["forEach"](function (W3u) {
                    var B9Y = -1524356143,
                        C9Y = -139025295,
                        D9Y = 886521366,
                        E9Y = -61100767,
                        F9Y = -1572677423,
                        o9Y = 1175475081;
                    if (
                        !(
                            a29.w9Y(0, false, 211231) !== B9Y &&
                            a29.w9Y(0, false, 589526) !== C9Y &&
                            a29.w9Y(17, false, 335213) !== D9Y &&
                            a29.w9Y(0, false, 810941) !== E9Y &&
                            a29.w9Y(18, false, 504397) !== F9Y &&
                            a29.m9Y(0, false, 911697) !== o9Y
                        )
                    ) {
                        W3u["startFrom"] = t0u["state"]["studies"]["startFrom"];
                        W3u["error"] = null;
                        if (W3u["study"] && W3u["study"]["calculateFN"]) {
                            W3u["study"]["calculateFN"](I3u, W3u);
                        }
                    }
                });
            }
            for (n0u = N3u; n0u < t0u["scrubbed"]["length"]; n0u++) {
                o3u = t0u["scrubbed"][n0u];
                o3u["cache"] = {};
                o3u["tick"] = t0u["dataSet"]["length"];
                t0u["dataSet"]["push"](o3u);
            }
            if (this["drawingObjects"]["length"]) {
                this["adjustDrawings"]();
            }
            if (this["establishMarkerTicks"]) {
                this["establishMarkerTicks"]();
            }
            this["runAppend"]("createDataSet", P3u);
        }
    };
    X9u = Symbol.for("CIQ.watermark");
};
o9L = (H5u) => {
    var k5u, Y5u;
    if (!H5u.SplinePlotter) {
        H5u.SplinePlotter = {};
    }
    k5u = H5u.CIQ;
    Y5u = H5u.SplinePlotter;
    k5u.ChartEngine.prototype.drawBarTypeChartInner = function (V5u) {
        var v29 = R1aa;
        var J6T,
            g6T,
            O6T,
            v5u,
            C5u,
            d5u,
            g5u,
            W5u,
            I5u,
            P8u,
            l5u,
            t5u,
            f5u,
            n5u,
            p8u,
            x5u,
            U5u,
            X5u,
            s5u,
            F8u,
            j8u,
            r8u,
            R5u,
            s8u,
            l8u,
            e5u,
            b5u,
            E5u,
            i5u,
            D8u,
            Z8u,
            B5u,
            o8u,
            y5u,
            D5u,
            K5u,
            u5u,
            z5u,
            K8u,
            q5u,
            G5u,
            h5u,
            M5u,
            w5u,
            O5u,
            J5u,
            m5u,
            A5u,
            T8u,
            N5u,
            Q5u,
            S8u,
            L5u,
            a8u,
            k8u,
            H8u,
            Y8u;
        J6T = "hl";
        v29.X19();
        J6T += "c";
        g6T = "cand";
        g6T += "le";
        O6T = "histog";
        O6T += "ram";
        v5u = V5u.type;
        C5u = V5u.panel;
        d5u = V5u.field;
        g5u = V5u.fillColor;
        W5u = V5u.borderColor;
        I5u = V5u.condition;
        P8u = V5u.style;
        l5u = V5u.yAxis;
        v29.T3k(117);
        t5u = v29.j3k(v5u, O6T);
        f5u = t5u || v5u == g6T;
        v29.L3k(117);
        n5u = v29.v3k(v5u, "shadow");
        v29.L3k(117);
        p8u = v29.v3k(v5u, J6T);
        x5u = v5u == "bar" || p8u;
        U5u = C5u.chart;
        X5u = U5u.dataSegment;
        s5u = this.chart.context;
        F8u = new Array(X5u.length);
        j8u = this.layout;
        r8u = W5u && !k5u.isTransparent(W5u);
        R5u = 0;
        if (r8u && !V5u.highlight) {
            R5u = 0.5;
        }
        s8u = s5u.globalAlpha;
        if (!V5u.highlight && this.highlightedDraggable) {
            v29.L3k(19);
            s5u.globalAlpha *= v29.j3k("0.3", 1);
        }
        v29.L3k(3);
        var K81 = v29.j3k(15, 27, 4, 7);
        l8u = U5u.dataSet.length - U5u.scroll - K81;
        s5u.beginPath();
        if (!l5u) {
            l5u = C5u.yAxis;
        }
        e5u = l5u.top;
        b5u = l5u.bottom;
        E5u = j8u.candleWidth;
        i5u = C5u.left - +"0.5" * E5u + this.micropixels - +"1";
        v29.L3k(75);
        var b81 = v29.v3k(3, 4, 24, 4, 5);
        D8u = U5u.tmpWidth / b81;
        v29.L3k(156);
        var l81 = v29.j3k(6, 0, 12, 2, 8);
        Z8u = s5u.lineWidth / l81;
        if (f5u) {
            if (k5u.isTransparent(g5u)) {
                g5u = this.containerColor;
            }
            s5u.fillStyle = g5u;
        }
        if (n5u) {
            v29.L3k(64);
            s5u.lineWidth = v29.j3k("1", 1374383360);
        }
        if (x5u) {
            B5u = this.canvasStyle(P8u);
            if (B5u.width && parseInt(B5u.width, 10) <= 25) {
                s5u.lineWidth = Math.max(1, k5u.stripPX(B5u.width));
            } else {
                s5u.lineWidth = 1;
            }
        }
        o8u = U5u.state.chartType.pass;
        for (var c5u = 0; c5u <= X5u.length; c5u++) {
            y5u = D8u;
            v29.L3k(109);
            i5u += v29.v3k(E5u, "2");
            E5u = j8u.candleWidth;
            v29.L3k(32);
            i5u += v29.v3k(2, E5u);
            D5u = X5u[c5u];
            if (!D5u) continue;
            if (D5u.projection) continue;
            if (D5u.candleWidth) {
                v29.L3k(6);
                var c81 = v29.v3k(1, 1);
                i5u += (D5u.candleWidth - E5u) / c81;
                E5u = D5u.candleWidth;
                if (V5u.volume || E5u < U5u.tmpWidth) {
                    v29.T3k(32);
                    y5u = v29.v3k(2, E5u);
                }
            }
            if (U5u.transformFunc && l5u == U5u.panel.yAxis && D5u.transform) {
                D5u = D5u.transform;
            }
            if (D5u && d5u && d5u != "Close") {
                D5u = D5u[d5u];
            }
            if (!D5u && D5u !== 0) continue;
            K5u = D5u.Close;
            u5u = D5u.Open === undefined ? K5u : D5u.Open;
            if (t5u && U5u.defaultPlotField) {
                K5u = D5u[U5u.defaultPlotField];
            }
            if (!K5u && K5u !== "0" >> 1737444096) continue;
            if (f5u && !t5u && (u5u == K5u || u5u === null)) continue;
            if (I5u) {
                z5u = k5u.ChartEngine;
                if (I5u & z5u.CLOSEDOWN) {
                    o8u.even |= K5u == D5u.iqPrevClose;
                } else if (I5u & z5u.CANDLEDOWN) {
                    v29.L3k(117);
                    o8u.even |= v29.v3k(K5u, u5u);
                }
                if (I5u & z5u.CANDLEUP && u5u >= K5u) continue;
                if (I5u & z5u.CANDLEDOWN && u5u <= K5u) continue;
                if (I5u & z5u.CANDLEEVEN && u5u != K5u) continue;
                if (I5u & z5u.CLOSEUP && K5u <= D5u.iqPrevClose) continue;
                if (I5u & z5u.CLOSEDOWN && K5u >= D5u.iqPrevClose) continue;
                if (I5u & z5u.CLOSEEVEN && K5u != D5u.iqPrevClose) continue;
            }
            v29.T3k(6);
            K8u = v29.v3k(l8u, c5u);
            q5u = u5u;
            G5u = K5u;
            if (n5u || x5u) {
                q5u = D5u.High === undefined ? Math.max(K5u, u5u) : D5u.High;
                G5u = D5u.Low === undefined ? Math.min(K5u, u5u) : D5u.Low;
            }
            h5u = l5u.semiLog ? l5u.height * (+"1" - (Math.log(Math.max(q5u, 0)) / Math.LN10 - l5u.logLow) / l5u.logShadow) : (l5u.high - q5u) * l5u.multiplier;
            M5u = l5u.semiLog ? l5u.height * (+"1" - (Math.log(Math.max(G5u, 0)) / Math.LN10 - l5u.logLow) / l5u.logShadow) : (l5u.high - G5u) * l5u.multiplier;
            if (l5u.flipped) {
                v29.T3k(1);
                h5u = v29.v3k(b5u, h5u);
                v29.T3k(1);
                M5u = v29.j3k(b5u, M5u);
            } else {
                h5u += e5u;
                M5u += e5u;
            }
            J5u = Math.floor(t5u ? (l5u.flipped ? l5u.top : M5u) : Math.min(h5u, M5u)) + R5u;
            m5u = t5u ? (l5u.flipped ? h5u : l5u.bottom) : Math.max(h5u, M5u);
            v29.L3k(1);
            A5u = Math.floor(v29.v3k(m5u, J5u));
            T8u = M5u;
            if (x5u || n5u) {
                w5u = l5u.semiLog ? l5u.height * (1 - (Math.log(Math.max(u5u, 0)) / Math.LN10 - l5u.logLow) / l5u.logShadow) : (l5u.high - u5u) * l5u.multiplier;
                O5u = l5u.semiLog ? l5u.height * (1 - (Math.log(Math.max(K5u, 0)) / Math.LN10 - l5u.logLow) / l5u.logShadow) : (l5u.high - K5u) * l5u.multiplier;
                if (l5u.flipped) {
                    v29.L3k(1);
                    w5u = v29.v3k(b5u, w5u);
                    v29.T3k(1);
                    O5u = v29.v3k(b5u, O5u);
                } else {
                    w5u += e5u;
                    O5u += e5u;
                }
                T8u = O5u;
            }
            F8u[c5u] = T8u;
            if (J5u < e5u) {
                if (J5u + A5u < e5u) continue;
                v29.L3k(1);
                A5u -= v29.j3k(e5u, J5u);
                J5u = e5u;
            }
            if (J5u + A5u > b5u) {
                v29.L3k(8);
                A5u -= v29.v3k(J5u, b5u, A5u);
            }
            v29.T3k(6);
            m5u = v29.j3k(J5u, A5u);
            if (J5u >= b5u) continue;
            if (m5u <= e5u) continue;
            N5u = Math.floor(i5u) + (!V5u.highlight && 0.5);
            Q5u = Math.floor(N5u - y5u) + R5u;
            S8u = Math.round(N5u + y5u) - R5u;
            L5u = Q5u == S8u ? y5u : 0;
            if (A5u < 2) {
                A5u = 2;
            }
            if (f5u) {
                if (t5u || K5u != u5u) {
                    s5u.rect(Q5u, J5u, Math.max(1, S8u - Q5u), A5u);
                }
            } else if (n5u) {
                if (K5u == u5u) {
                    if (O5u <= b5u && O5u >= e5u) {
                        a8u = Math.floor(O5u) + (!V5u.highlight && 0.5);
                        v29.L3k(1);
                        s5u.moveTo(v29.j3k(Q5u, L5u), a8u);
                        v29.T3k(6);
                        s5u.lineTo(v29.v3k(S8u, L5u), a8u);
                    }
                }
                if (q5u != G5u) {
                    s5u.moveTo(N5u, J5u);
                    s5u.lineTo(N5u, m5u);
                }
            } else if (x5u) {
                if (J5u < b5u && m5u > e5u && D5u.High != D5u.Low) {
                    v29.T3k(1);
                    s5u.moveTo(N5u, v29.v3k(J5u, Z8u));
                    v29.T3k(6);
                    s5u.lineTo(N5u, v29.j3k(m5u, Z8u));
                }
                if (w5u > e5u && w5u < b5u && !p8u) {
                    k8u = Math.floor(w5u) + (!V5u.highlight && 0.5);
                    s5u.moveTo(N5u, k8u);
                    v29.L3k(24);
                    s5u.lineTo(v29.j3k(y5u, N5u, L5u), k8u);
                }
                if (O5u > e5u && O5u < b5u) {
                    H8u = Math.floor(O5u) + (!V5u.highlight && 0.5);
                    s5u.moveTo(N5u, H8u);
                    v29.T3k(56);
                    s5u.lineTo(v29.v3k(L5u, N5u, y5u), H8u);
                }
            }
        }
        Y8u = s5u.globalAlpha;
        if (f5u) {
            if (Y8u < 1) {
                s5u.save();
                v29.L3k(64);
                s5u.globalAlpha = v29.j3k("1", 258234848);
                s5u.fillStyle = this.containerColor;
                s5u.fill();
                s5u.restore();
            }
            s5u.fill();
            if (r8u) {
                s5u.lineWidth = V5u.highlight ? 2 : 1;
                s5u.strokeStyle = W5u;
                s5u.stroke();
            }
        } else if (n5u || x5u) {
            this.canvasColor(P8u);
            s5u.globalAlpha = Y8u;
            if (W5u) {
                s5u.strokeStyle = W5u;
            }
            if (V5u.highlight) {
                s5u.lineWidth *= 2;
            }
            s5u.stroke();
            s5u.closePath();
            s5u.lineWidth = 1;
        }
        s5u.globalAlpha = s8u;
        return { cache: F8u };
    };
    k5u.ChartEngine.prototype.plotDataSegmentAsLine = function (O8u, h8u, e8u, f8u) {
        var L29 = R1aa;
        var y1u,
            P4u,
            N8u,
            n8u,
            T1u,
            w8u,
            z8u,
            u8u,
            R8u,
            p1u,
            h1u,
            F1u,
            l1u,
            w1u,
            a1u,
            D1u,
            k1u,
            m1u,
            J8u,
            K1u,
            v8u,
            v1u,
            p4u,
            W1u,
            U8u,
            M8u,
            V8u,
            V1u,
            n1u,
            F4u,
            m8u,
            e1u,
            c1u,
            W8u,
            j1u,
            i8u,
            u1u,
            r1u,
            Z1u,
            r4u,
            C8u,
            y8u,
            A8u,
            E8u,
            q8u,
            b1u,
            f1u,
            R1u,
            b8u,
            U1u,
            Z4u,
            o4u,
            O1u,
            i1u,
            H1u,
            t8u,
            I8u,
            G8u,
            Y1u,
            x8u,
            d8u,
            q1u,
            g8u,
            G1u,
            X8u,
            T4u,
            Q1u,
            N1u,
            Q8u,
            I1u,
            B8u,
            A1u,
            L1u,
            C1u,
            s4u,
            d1u,
            g1u,
            E1u,
            L8u,
            X1u,
            z1u,
            B1u,
            S1u,
            M1u,
            k4u,
            H4u,
            Y4u,
            s1u,
            t1u,
            S4u,
            F6T,
            o1u;
        function j4u(N4u, t4u, E4u) {
            var A4u, z4u, M4u;
            V8u.setLineDash([]);
            A4u = I4u("CollatedOpen");
            z4u = I4u("CollatedHigh");
            M4u = I4u("CollatedLow");
            V8u.lineTo(N4u, A4u);
            function I4u(h4u) {
                var y4u;
                y4u = u8u.semiLog ? u8u.height * (1 - (Math.log(Math.max(E4u[h4u], 0)) / Math.LN10 - u8u.logLow) / u8u.logShadow) : (u8u.high - E4u[h4u]) * u8u.multiplier;
                if (u8u.flipped) {
                    y4u = u8u.bottom - y4u;
                } else {
                    y4u += u8u.top;
                }
                return y4u;
            }
            V8u.moveTo(N4u, z4u);
            V8u.lineTo(N4u, M4u);
            V8u.moveTo(N4u, t4u);
            J8u.push(N4u, A4u);
        }
        y1u = ![];
        P4u = !!0;
        N8u = ![];
        n8u = !"1";
        T1u = !![];
        w8u = null;
        z8u = null;
        u8u = null;
        R8u = 0;
        p1u = !{};
        h1u = !{};
        F1u = !!"";
        l1u = !{};
        w1u = null;
        a1u = null;
        D1u = null;
        k1u = null;
        m1u = {};
        J8u = [];
        K1u = [];
        v8u = [];
        v1u = [];
        p4u = this;
        W1u = this.layout;
        U8u = h8u.chart;
        M8u = U8u.dataSegment;
        V8u = U8u.context;
        V1u = new Array(M8u.length);
        n1u = V8u.strokeStyle;
        F4u = V8u.globalAlpha;
        if (U8u.dataSet.length) {
            this.startClip(h8u.name);
            if (e8u) {
                y1u = e8u.skipProjections;
                P4u = e8u.skipTransform;
                N8u = e8u.noSlopes;
                R8u = e8u.tension;
                n8u = e8u.step;
                z8u = e8u.pattern;
                T1u = e8u.extendOffChart;
                u8u = e8u.yAxis;
                w8u = e8u.gapDisplayStyle;
                p1u = e8u.noDraw;
                h1u = e8u.reverse;
                F1u = e8u.highlight;
                if (e8u.width) {
                    V8u.lineWidth = e8u.width;
                }
                l1u = e8u.shiftRight;
                w1u = e8u.subField;
                a1u = e8u.threshold;
                D1u = e8u.lineTravelSpacing;
                k1u = e8u.extendToEndOfDataSet;
            }
            if (!w8u && w8u !== !{} && e8u) {
                w8u = e8u.gaps;
            }
            if (!w8u) {
                w8u = { color: "transparent", fillMountain: !"" };
            }
            if (z8u instanceof Array) {
                V8u.setLineDash(z8u);
            }
            if (F1u) {
                L29.T3k(1);
                V8u.lineWidth *= L29.j3k("2", 0);
            }
            if (!F1u && this.highlightedDraggable) {
                V8u.globalAlpha *= 0.3;
            }
            if (T1u !== !1) {
                T1u = !0;
            }
            m8u = w1u || U8u.defaultPlotField || "Close";
            if (!u8u) {
                u8u = h8u.yAxis;
            }
            e1u = U8u.transformFunc && u8u == U8u.panel.yAxis;
            L29.L3k(157);
            var C81 = L29.j3k(18, 14, 14, 20);
            c1u = V8u.lineWidth * C81;
            W8u = h1u ? U8u.top - c1u : U8u.bottom + c1u;
            if (a1u || a1u === 0) {
                W8u = this.pixelFromPrice(a1u, h8u, u8u);
            }
            j1u = !R8u && p1u && w8u && w8u.fillMountain;
            i8u = O8u;
            u1u = O8u;
            for (var J1u = 0; J1u < M8u.length; J1u++) {
                r1u = M8u[J1u];
                if (r1u && typeof r1u == "object") {
                    if (r1u[O8u] || r1u[O8u] === 0) {
                        if (typeof r1u[O8u] == "object") {
                            u1u = k5u.createObjectChainNames(O8u, [m8u])[0];
                        }
                        break;
                    }
                }
            }
            Z1u = { left: null, right: null };
            L29.T3k(1);
            var n81 = L29.v3k(12, 11);
            r4u = U8u.dataSet.length - U8u.scroll - n81;
            if (T1u) {
                Z1u.left = this.getPreviousBar(U8u, u1u, 0);
                Z1u.right = this.getNextBar(U8u, u1u, M8u.length - ("1" << 1048339040));
            }
            C8u = !!{};
            y8u = !1;
            V8u.beginPath();
            q8u = Z1u.left;
            b1u = null;
            if (q8u) {
                b1u = q8u.transform;
            }
            if (q8u) {
                E8u = e1u ? (b1u ? b1u[O8u] : null) : q8u[O8u];
                if (E8u || E8u === 0) {
                    if (E8u[m8u] || E8u[m8u] === 0) {
                        E8u = E8u[m8u];
                    }
                    f1u = this.pixelFromTick(q8u.tick, U8u);
                    R1u = this.pixelFromTransformedValue(E8u, h8u, u8u);
                    V8u.moveTo(f1u, R1u);
                    J8u.push(f1u, R1u);
                    if (M8u[0].tick - q8u.tick > 1) {
                        v8u.push({ start: J8u.slice(-2), threshold: W8u, tick: q8u });
                        y8u = !0;
                    }
                    C8u = !!"";
                }
            }
            L29.T3k(17);
            var i81 = L29.j3k(14, 0, 19, 265);
            b8u = h8u.left + this.micropixels - i81;
            if (l1u) {
                b8u += l1u;
            }
            if (n8u && e8u && e8u.alignStepToSide) {
                L29.L3k(24);
                var H81 = L29.v3k(6, 14, 6);
                b8u -= this.layout.candleWidth / H81;
            }
            o4u = this.currentQuote();
            O1u = 0;
            i1u = +"0";
            H1u = ![];
            t8u = { reset: !!{} };
            for (var c8u = 0; c8u < M8u.length; c8u++) {
                A8u = W1u.candleWidth;
                I8u = M8u[c8u];
                G8u = M8u[c8u];
                if (!I8u) {
                    I8u = {};
                }
                Y1u = I8u.lineTravel;
                if (y1u && I8u.projection) {
                    Z1u.right = null;
                    break;
                }
                if (I8u.candleWidth) {
                    A8u = I8u.candleWidth;
                }
                if (D1u) {
                    A8u = 0;
                }
                if (e1u && I8u.transform) {
                    I8u = I8u.transform;
                }
                x8u = I8u[O8u];
                if (x8u && typeof x8u == "object") {
                    x8u = x8u[m8u];
                    L29.T3k(56);
                    i8u = L29.v3k(m8u, O8u, (442.66, 230.45) != (4400, +"421") ? "." : (898.73, 4336) >= (386.3, +"5270") ? (+"495", 0x1246) : (3800, "7856" - 0) != 733 ? 4.6e1 : 934.2);
                }
                if (U8u.lineApproximation && W1u.candleWidth < 1 && !D1u) {
                    if (t8u.reset) {
                        t8u = { CollatedHigh: -Number.MAX_VALUE, CollatedLow: Number.MAX_VALUE, CollatedOpen: null, CollatedClose: null };
                        H1u = !!0;
                    }
                    d8u = x8u;
                    if (d8u || d8u === 0) {
                        t8u.CollatedHigh = Math.max(t8u.CollatedHigh, d8u);
                        t8u.CollatedLow = Math.min(t8u.CollatedLow, d8u);
                        t8u.CollatedClose = d8u;
                        if (t8u.CollatedOpen === null) {
                            t8u.CollatedOpen = d8u;
                        } else {
                            H1u = !0;
                        }
                    }
                    O1u += A8u;
                    if (O1u - i1u >= +"1" || c8u == M8u.length - ("1" ^ 0)) {
                        i1u = Math.floor(O1u);
                        t8u.reset = !!{};
                        t8u[O8u] = t8u.CollatedClose;
                        I8u = t8u;
                        I8u.cache = {};
                    } else {
                        b8u += A8u;
                        continue;
                    }
                }
                if (!N8u) {
                    L29.T3k(32);
                    b8u += L29.j3k(2, A8u);
                }
                if (!x8u && x8u !== 0) {
                    q1u = J8u.slice(-2);
                    if (j1u && !y8u && J8u.length) {
                        J8u.push(q1u[0], W8u);
                    }
                    if (!y8u) {
                        v8u.push({ start: q1u, threshold: W8u, tick: Z4u });
                    }
                    y8u = !!1;
                    b8u += N8u ? A8u : A8u / 2;
                    if ((n8u || N8u) && J8u.length) {
                        V1u[c8u] = J8u.slice(-1)[0];
                    }
                    if (Y1u) {
                        b8u += Y1u;
                    }
                    continue;
                }
                U1u = I8u;
                g8u = I8u.cache;
                L29.T3k(6);
                G1u = L29.v3k(r4u, c8u);
                if (G1u < h8u.cacheLeft || G1u > h8u.cacheRight || !g8u[O8u]) {
                    g8u[i8u] = u8u.semiLog ? u8u.height * (1 - (Math.log(Math.max(x8u, 0)) / Math.LN10 - u8u.logLow) / u8u.logShadow) : (u8u.high - x8u) * u8u.multiplier;
                    if (u8u.flipped) {
                        g8u[i8u] = u8u.bottom - g8u[i8u];
                    } else {
                        g8u[i8u] += u8u.top;
                    }
                }
                X8u = V1u[c8u] = g8u[i8u];
                if (G8u.tick == o4u.tick && U8u.lastTickOffset) {
                    b8u += U8u.lastTickOffset;
                }
                T4u = J8u.slice(-2);
                if (!C8u && f8u) {
                    if (G8u[O8u] && G8u[O8u][m8u]) {
                        G8u = G8u[O8u];
                    }
                    Q1u = f8u(this, G8u, y8u);
                    if (!Q1u) {
                        b8u += N8u ? A8u : A8u / 2;
                        continue;
                    }
                    T4u = x1u(Q1u);
                }
                if (C8u) {
                    V8u.moveTo(b8u, X8u);
                    if (R8u) {
                        K1u.push({ coord: [b8u, X8u], color: V8u.strokeStyle, pattern: z8u ? z8u : [], width: V8u.lineWidth });
                    }
                } else {
                    if (n8u || N8u) {
                        N1u = J8u.slice(-+"1")[0];
                        if (H1u) {
                            j4u(b8u, N1u, I8u);
                        } else {
                            V8u.lineTo(b8u, N1u);
                        }
                        J8u.push(b8u, N1u);
                    }
                    if (H1u && !N8u) {
                        j4u(b8u, X8u, I8u);
                    } else {
                        V8u[N8u ? "moveTo" : "lineTo"](b8u, X8u);
                    }
                }
                if (y8u) {
                    v8u.push({ end: [b8u, X8u], threshold: W8u });
                    Z4u = G8u;
                    if (j1u && !n8u && !N8u) {
                        J8u.push(b8u, W8u);
                    }
                }
                J8u.push(b8u, X8u);
                C8u = !{};
                y8u = !!0;
                b8u += N8u ? A8u : A8u / 2;
                if (Y1u) {
                    b8u += Y1u;
                }
            }
            Q8u = Z1u.right;
            I1u = null;
            if (Q8u) {
                I1u = Q8u.transform;
            }
            if (!C8u && Q8u) {
                E8u = e1u ? (I1u ? I1u[O8u] : null) : Q8u[O8u];
                if (E8u && (E8u[m8u] || E8u[m8u] === 0)) {
                    E8u = E8u[m8u];
                }
                B8u = this.pixelFromTick(Q8u.tick, U8u);
                A1u = this.pixelFromTransformedValue(E8u, h8u, u8u);
                if (Q8u.tick - M8u[M8u.length - 1].tick > 1) {
                    if (!y8u) {
                        L29.T3k(64);
                        L1u = J8u.slice(-L29.v3k("2", 1636756000));
                        if (j1u && J8u.length) {
                            J8u.push(L1u[+"0"], W8u);
                        }
                        v8u.push({ start: L1u, threshold: W8u, tick: M8u[M8u.length - 1] });
                    }
                    y8u = !!{};
                }
                if (!C8u && f8u) {
                    C1u = f8u(this, Q8u, y8u);
                    if (C1u) {
                        s4u = x1u(C1u);
                    }
                }
                d1u = J8u.slice(-2);
                if (!z8u || !z8u.length) {
                    if (n8u || N8u) {
                        V8u.lineTo(B8u, d1u[+"1"]);
                        J8u.push(B8u, d1u[1]);
                    }
                    V8u[N8u ? "moveTo" : "lineTo"](B8u, A1u);
                }
                if (y8u) {
                    v8u.push({ end: [B8u, A1u], threshold: W8u });
                    if (j1u && !n8u && !N8u) {
                        J8u.push(B8u, W8u);
                    }
                }
                J8u.push(B8u, A1u);
            }
            for (var a4u in m1u) {
                v1u.push(a4u);
            }
            if (e8u && e8u.extendToEndOfLastBar) {
                g1u = J8u.slice(-2);
                V8u.lineTo(g1u[0] + A8u, g1u[1]);
            } else if (n8u || N8u || this.extendLastTick || k1u) {
                E1u = J8u.slice(-2);
                if (J8u.length) {
                    L8u = E1u[0];
                    X1u = E1u[1];
                    if (k1u || (n8u && k1u !== !!"")) {
                        L8u = this.pixelFromTick(U8u.dataSet.length - +"1", U8u);
                        if (N8u || this.extendLastTick) {
                            L29.T3k(158);
                            L8u += L29.j3k("2", A8u, 0);
                        }
                    } else if (N8u) {
                        L8u += A8u;
                    } else if (this.extendLastTick) {
                        L29.L3k(32);
                        L8u += L29.j3k(2, A8u);
                    }
                    if (L8u > E1u[0]) {
                        z1u = null;
                        if (f8u) {
                            z1u = f8u(this, {}, !![]);
                        }
                        if (z1u) {
                            x1u(z1u);
                        }
                        V8u.lineTo(L8u, X1u);
                        if (!y8u || !j1u) {
                            J8u.push(L8u, X1u);
                        }
                    }
                }
            }
            if (!p1u) {
                if (R8u && J8u.length) {
                    V8u.beginPath();
                    if (e8u && e8u.pattern) {
                        V8u.setLineDash(e8u.pattern);
                    }
                    Y5u.plotSpline(J8u, R8u, V8u, K1u);
                }
                V8u.stroke();
            }
            this.endClip();
            if (!p1u && e8u && e8u.label && U1u) {
                S1u = U1u[O8u];
                if (S1u && typeof S1u == "object") {
                    S1u = S1u[m8u];
                }
                if (u8u.priceFormatter) {
                    B1u = u8u.priceFormatter(this, h8u, S1u, e8u.labelDecimalPlaces);
                } else {
                    B1u = this.formatYAxisPrice(S1u, h8u, e8u.labelDecimalPlaces);
                }
                M1u = this.yaxisLabelStyle;
                if (u8u.yaxisLabelStyle) {
                    M1u = u8u.yaxisLabelStyle;
                }
                k4u = M1u == "noop" ? V8u.strokeStyle : null;
                H4u = M1u == "noop" ? "#FFFFFF" : V8u.strokeStyle;
                this.yAxisLabels.push({ src: "plot", args: [h8u, B1u, U1u.cache[i8u], H4u, k4u, V8u, u8u] });
            }
            Y4u = typeof w8u == "object" ? w8u.color : w8u;
            if (k5u.isTransparent(Y4u)) {
                for (var P1u = 0; P1u < v8u.length; P1u += "2" ^ 0) {
                    s1u = v8u[P1u].start;
                    if (P1u) {
                        t1u = v8u[P1u - ("1" & 2147483647)].end;
                    }
                    if (t1u && s1u[0] == t1u[0] && s1u[+"1"] == t1u[1]) {
                        V8u.beginPath();
                        S4u = V8u.lineWidth;
                        if (f8u) {
                            F6T = "ob";
                            F6T += "je";
                            F6T += "ct";
                            o1u = f8u(this, v8u[P1u].tick || {}, !!"");
                            if (typeof o1u == F6T) {
                                L29.T3k(97);
                                var k81 = L29.j3k(4, 54, 13);
                                L29.T3k(159);
                                var e81 = L29.v3k(6, 0, 14, 15, 121);
                                S4u = o1u.width * (F1u ? k81 : e81);
                                o1u = o1u.color;
                            }
                            V8u.strokeStyle = V8u.fillStyle = o1u;
                        }
                        V8u.lineWidth = S4u;
                        V8u.arc(s1u[0], s1u[1], 1, 0, 2 * Math.PI);
                        V8u.stroke();
                        V8u.fill();
                    }
                }
            }
        }
        function x1u(O4u) {
            var V4u, D4u, l4u, K4u, e4u, J4u, u4u, b4u, U4u, G6T;
            V4u = V8u.getLineDash();
            D4u = 1;
            l4u = O4u;
            if (typeof l4u == "object") {
                L29.T3k(68);
                var f81 = L29.j3k(5, 1, 15, 7);
                L29.T3k(160);
                var h81 = L29.v3k(23, 4, 3, 9, 1);
                D4u = l4u.width * (F1u ? f81 : h81);
                z8u = k5u.borderPatternToArray(D4u, l4u.pattern);
                l4u = l4u.color;
            }
            m1u[l4u] = 1;
            if (p1u) {
                return;
            }
            K4u = J8u.slice(-2);
            e4u = z8u instanceof Array && z8u.join();
            L29.X19();
            J4u = V4u instanceof Array && V4u.join();
            L29.L3k(161);
            u4u = L29.v3k(e4u, J4u);
            b4u = !k5u.colorsEqual(n1u, l4u);
            U4u = V8u.lineWidth != D4u;
            if (b4u || u4u || U4u) {
                if (R8u) {
                    K1u.push({ coord: K4u, color: l4u, pattern: z8u ? z8u : [], width: D4u });
                } else {
                    V8u.stroke();
                    V8u.lineWidth = D4u;
                    if (u4u) {
                        V8u.setLineDash(e4u ? z8u : []);
                    }
                    V8u.beginPath();
                    V8u.moveTo(K4u[0], K4u[1]);
                }
            }
            n1u = l4u;
            if (!R8u) {
                G6T = "a";
                G6T += "u";
                G6T += "to";
                if (!l4u || l4u == G6T) {
                    V8u.strokeStyle = p4u.defaultColor;
                } else {
                    V8u.strokeStyle = l4u;
                }
            }
            return K4u;
        }
        V8u.globalAlpha = F4u;
        return { colors: v1u, points: J8u, cache: V1u, gapAreas: v8u };
    };
    k5u.ChartEngine.prototype.drawMountainChart = function (f4u, w4u, l2u) {
        var Y29 = R1aa;
        var Q6T, E6T, N6T, q6T, m4u, Q4u, r2u, X4u, R4u, L4u, c4u, C4u, B4u, v4u, Z2u, S2u, d4u, o2u, P2u, p2u, T2u, a2u, k2u, H2u, n4u, e2u, g4u, W4u, i4u, Y2u, D2u, F2u, K2u, j2u, x4u, q4u, G4u, V2u, s2u;
        Q6T = "t";
        Q6T += "r";
        Q6T += "a";
        Q6T += "nsparent";
        E6T = "Clos";
        E6T += "e";
        N6T = "stx_mountai";
        N6T += "n_c";
        N6T += "hart";
        q6T = "o";
        q6T += "bj";
        q6T += "ect";
        m4u = this.chart.context;
        Q4u = w4u;
        r2u = !1;
        X4u = !{};
        R4u = null;
        L4u = null;
        c4u = null;
        C4u = null;
        B4u = 0;
        v4u = null;
        Z2u = ![];
        S2u = null;
        d4u = null;
        o2u = !{};
        P2u = null;
        p2u = null;
        Y29.T3k(124);
        T2u = Y29.j3k("1", 1);
        a2u = !{};
        k2u = !{};
        H2u = !!"";
        n4u = f4u.chart;
        e2u = n4u.dataSegment;
        g4u = n4u.lineStyle || {};
        if (!w4u || typeof w4u != q6T) {
            w4u = { style: w4u };
        }
        Q4u = w4u.style || N6T;
        R4u = w4u.field || n4u.defaultPlotField || E6T;
        L4u = w4u.subField || n4u.defaultPlotField || "Close";
        v4u = w4u.gapDisplayStyle;
        if (!v4u && v4u !== !{}) {
            v4u = w4u.gaps;
        }
        if (!v4u && v4u !== ![]) {
            v4u = n4u.gaplines;
        }
        if (!v4u) {
            v4u = Q6T;
        }
        c4u = w4u.yAxis || f4u.yAxis;
        Y29.X19();
        r2u = w4u.reverse || ![];
        C4u = w4u.tension;
        S2u = w4u.fillStyle;
        B4u = w4u.width || g4u.width;
        Z2u = w4u.step;
        d4u = w4u.pattern || g4u.pattern;
        o2u = w4u.highlight;
        p2u = w4u.color || g4u.color;
        P2u = w4u.baseColor || g4u.baseColor;
        X4u = w4u.colored;
        T2u = w4u.opacity;
        a2u = w4u.extendToEndOfDataSet;
        k2u = w4u.isComparison;
        H2u = w4u.returnObject;
        W4u = this.canvasStyle(Q4u);
        i4u = c4u.top;
        if (isNaN(i4u) || isNaN(i4u / i4u)) {
            i4u = 0;
        }
        Y2u = p2u || (Q4u && W4u.backgroundColor ? W4u.backgroundColor : this.defaultColor);
        D2u = P2u || (Q4u && W4u.color ? W4u.color : this.containerColor);
        if (S2u) {
            m4u.fillStyle = S2u;
        } else if (P2u || W4u.color) {
            F2u = m4u.createLinearGradient(0, i4u, 0, c4u.bottom);
            F2u.addColorStop(c4u.flipped ? 1 : "0" - 0, Y2u);
            F2u.addColorStop(c4u.flipped ? "0" << 1411715648 : 1, D2u);
            m4u.fillStyle = F2u;
        } else {
            m4u.fillStyle = Y2u;
        }
        this.startClip(f4u.name);
        K2u = m4u.lineWidth;
        if (!w4u.symbol) {
            L4u = null;
        }
        w4u = { skipProjections: !!{}, reverse: r2u, yAxis: c4u, gapDisplayStyle: v4u, step: Z2u, highlight: o2u, extendToEndOfDataSet: a2u, isComparison: k2u };
        if (n4u.tension) {
            w4u.tension = n4u.tension;
        }
        if (C4u || C4u === "0" * 1) {
            w4u.tension = C4u;
        }
        j2u = parseInt(W4u.paddingTop, 10);
        x4u = p2u || W4u.borderTopColor;
        q4u = null;
        if (X4u || (x4u && !k5u.isTransparent(x4u))) {
            if (j2u) {
                G4u = this.scratchContext;
                if (!G4u) {
                    V2u = m4u.canvas.cloneNode(!0);
                    G4u = this.scratchContext = V2u.getContext("2d");
                }
                G4u.canvas.height = m4u.canvas.height;
                G4u.canvas.width = m4u.canvas.width;
                G4u.drawImage(m4u.canvas, 0, 0);
                k5u.clearCanvas(m4u.canvas, this);
            }
        }
        k5u.extend(w4u, { panelName: f4u.name, direction: w4u.reverse ? -1 : 1, band: R4u, subField: L4u, opacity: T2u });
        if (!w4u.highlight && this.highlightedDraggable) {
            w4u.opacity *= 0.3;
        }
        k5u.preparePeakValleyFill(this, w4u);
        if (X4u || (x4u && !k5u.isTransparent(x4u))) {
            if (j2u) {
                m4u.save();
                Y29.T3k(19);
                m4u.lineWidth += Y29.j3k(2, j2u);
                m4u.globalCompositeOperation = "destination-out";
                m4u.globalAlpha = 1;
                this.plotDataSegmentAsLine(R4u, f4u, w4u);
                m4u.globalCompositeOperation = "destination-over";
                m4u.scale(+"1" / this.adjustedDisplayPixelRatio, +"1" / this.adjustedDisplayPixelRatio);
                m4u.drawImage(this.scratchContext.canvas, 0, 0);
                m4u.restore();
            }
        }
        m4u.strokeStyle = x4u;
        if (B4u) {
            m4u.lineWidth = B4u;
        } else if (W4u.width && parseInt(W4u.width, 10) <= "25" * 1) {
            m4u.lineWidth = Math.max(1, k5u.stripPX(W4u.width));
        } else {
            m4u.lineWidth = 1;
        }
        if (!d4u) {
            d4u = W4u.borderTopStyle;
        }
        w4u.pattern = k5u.borderPatternToArray(m4u.lineWidth, d4u);
        s2u = l2u;
        if (v4u) {
            s2u = this.getGapColorFunction(R4u, L4u, { color: x4u, pattern: w4u.pattern, width: m4u.lineWidth }, v4u, l2u);
        }
        q4u = this.plotDataSegmentAsLine(R4u, f4u, w4u, s2u);
        m4u.lineWidth = K2u;
        this.endClip();
        if (!q4u.colors.length) {
            q4u.colors.push(x4u);
        }
        return H2u ? q4u : q4u.colors;
    };
    k5u.ChartEngine.prototype.drawBaselineChart = function (J2u, u2u) {
        var t2u, m2u, b2u, U6T, t6T, v2u, A2u, W2u, L2u, C2u, d2u, g2u, X2u, B2u, S6u, P6u, c2u, f2u, R2u, M2u, i2u, y2u, n2u, U2u, h2u, p6u, F6u, x2u, T6T;
        R1aa.X19();
        var { chart: z2u } = J2u;
        var { field: w2u, id: q2u, yAxis: O2u } = u2u;
        var { gaplines: N2u, defaultPlotField: G2u, lineStyle: I2u } = z2u;
        var { display: Q2u } = this.baselineHelper.get(this.getRendererFromSeries(q2u));
        t2u = this.getYAxisBaseline(O2u).actualLevel;
        m2u = [];
        if (!w2u) {
            w2u = G2u;
        }
        if (!I2u) {
            I2u = {};
        }
        b2u = u2u.gapDisplayStyle;
        if (!b2u && b2u !== ![]) {
            b2u = u2u.gaps;
        }
        if (t2u !== null && !isNaN(t2u)) {
            U6T = "stx_baseline";
            U6T += "_down";
            t6T = "moun";
            t6T += "tain";
            v2u = u2u.type == t6T;
            if (v2u) {
                m2u = this.drawMountainChart(J2u, { style: u2u.style, field: u2u.field, yAxis: O2u, gapDisplayStyle: b2u, colored: !0, tension: "0" | 0 });
            }
            A2u = this.pixelFromPrice(t2u, J2u, O2u);
            if (isNaN(A2u)) {
                return;
            }
            this.startClip(J2u.name);
            W2u = u2u.pattern || I2u.pattern;
            L2u = u2u.fill_color_up || this.getCanvasColor("stx_baseline_up");
            C2u = u2u.fill_color_down || this.getCanvasColor("stx_baseline_down");
            d2u = u2u.border_color_up || this.getCanvasColor("stx_baseline_up");
            g2u = u2u.border_color_down || this.getCanvasColor(U6T);
            X2u = u2u.width || I2u.width || this.canvasStyle("stx_baseline_up").width;
            B2u = u2u.width || I2u.width || this.canvasStyle("stx_baseline_down").width;
            S6u = u2u.widthBaseline || I2u.width || k5u.stripPX(this.canvasStyle("stx_baseline").width);
            P6u = u2u.baselineOpacity || this.canvasStyle("stx_baseline").opacity;
            c2u = { fill: L2u, edge: d2u, width: X2u };
            f2u = { fill: C2u, edge: g2u, width: B2u };
            R2u = u2u.yAxis.flipped;
            M2u = { over: R2u ? f2u : c2u, under: R2u ? c2u : f2u };
            i2u = !{};
            if (!b2u && b2u !== !!"") {
                b2u = N2u;
            }
            y2u = 1;
            if (!u2u.highlight && this.highlightedDraggable) {
                R1aa.L3k(19);
                y2u *= R1aa.v3k("0.3", 1);
            }
            for (var E2u in M2u) {
                n2u = parseInt(Math.max("1" & 2147483647, k5u.stripPX(M2u[E2u].width)), 10);
                if (u2u.highlight) {
                    n2u *= 2;
                }
                W2u = k5u.borderPatternToArray(n2u, W2u);
                U2u = {
                    panelName: J2u.name,
                    band: w2u,
                    threshold: t2u,
                    color: v2u ? "transparent" : M2u[E2u].fill,
                    direction: E2u == "over" ? 1 : -1,
                    edgeHighlight: M2u[E2u].edge,
                    edgeParameters: { pattern: W2u, lineWidth: n2u + 0.1, opacity: y2u },
                    gapDisplayStyle: b2u,
                    yAxis: u2u.yAxis,
                };
                if (O2u) {
                    U2u.threshold = this.priceFromPixel(this.pixelFromPrice(U2u.threshold, J2u, O2u), J2u, O2u);
                }
                m2u.push(M2u[E2u].edge);
                h2u = U2u.color;
                if (!v2u && h2u && h2u != "transparent") {
                    p6u = J2u.top;
                    F6u = J2u.bottom;
                    x2u = z2u.context.createLinearGradient(0, E2u == "over" ? p6u : F6u, 0, A2u);
                    x2u.addColorStop(0, k5u.hexToRgba(k5u.colorToHex(h2u), +"60"));
                    x2u.addColorStop(1, k5u.hexToRgba(k5u.colorToHex(h2u), 10));
                    U2u.color = x2u;
                    U2u.opacity = y2u;
                }
                k5u.preparePeakValleyFill(this, z2u.dataSegment, U2u);
                if (N2u) {
                    if (!N2u.fillMountain) {
                        this.drawLineChart(J2u, null, null, { color: "transparent", gapDisplayStyle: { color: this.containerColor, pattern: "solid", width: U2u.edgeParameters.lineWidth } });
                    }
                    if (!N2u.color) {
                        i2u = !!1;
                        N2u.color = this.defaultColor;
                    }
                }
                this.drawLineChart(J2u, null, null, { color: "transparent", width: U2u.edgeParameters.lineWidth });
                if (i2u) {
                    N2u.color = null;
                }
            }
            if (Q2u) {
                T6T = "dot";
                T6T += "ted";
                this.plotLine(+"0", 1, A2u, A2u, this.containerColor, "line", z2u.context, J2u, { lineWidth: "1.1" });
                this.plotLine(0, 1, A2u, A2u, this.getCanvasColor("stx_baseline"), "line", z2u.context, J2u, { pattern: T6T, lineWidth: S6u || "2.1", opacity: P6u || 0.5 * y2u });
            }
            this.endClip();
        }
        return { colors: m2u };
    };
    k5u.ChartEngine.prototype.plotLine = function (j6u) {
        var F29 = R1aa;
        var V6T, v6T, D6T, S6T, a6u, H6u, T6u, o6u, k6u, J6u, r6u, Y6u, h6u, b6u, U6u, O6u, N6u, l6u, z6u, Z6u, w6u, v6u, V6u, e6u, I6u, A6u, s6u, u6u, D6u, M6u, m6u, t6u, E6u, W6u;
        V6T = "ve";
        V6T += "rt";
        V6T += "ic";
        V6T += "al";
        v6T = "horizo";
        v6T += "ntal";
        D6T = "un";
        D6T += "de";
        D6T += "fin";
        D6T += "ed";
        S6T = "nu";
        S6T += "mb";
        S6T += "e";
        S6T += "r";
        if (typeof arguments[0] == S6T) {
            j6u = { x0: arguments["0" >> 2036619712], x1: arguments[1], y0: arguments[2], y1: arguments[3], color: arguments[4], type: arguments[5], context: arguments[6], confineToPanel: arguments[7] };
            for (var y6u in arguments["8" | 0]) {
                j6u[y6u] = arguments[8][y6u];
            }
        }
        if (!j6u) {
            j6u = {};
        }
        if (j6u.pattern == "none") {
            return;
        }
        a6u = j6u.x0;
        H6u = j6u.x1;
        T6u = j6u.y0;
        o6u = j6u.y1;
        k6u = j6u.color;
        J6u = j6u.type;
        r6u = j6u.context;
        Y6u = j6u.confineToPanel;
        h6u = j6u.deferStroke;
        if (Y6u === !![]) {
            Y6u = this.chart.panel;
        }
        if (r6u === null || typeof r6u == D6T) {
            r6u = this.chart.context;
        }
        if (isNaN(a6u) || isNaN(H6u) || isNaN(T6u) || isNaN(o6u)) {
            return;
        }
        b6u = 0;
        U6u = this.chart.canvasHeight;
        O6u = 0;
        N6u = this.right;
        if (Y6u) {
            U6u = Y6u.yAxis.bottom;
            b6u = Y6u.yAxis.top;
            O6u = Y6u.left;
            N6u = Y6u.right;
        }
        if (J6u == "ray") {
            l6u = 10000000;
            if (H6u < a6u) {
                l6u = -10000000;
            }
            Z6u = { x0: a6u, x1: H6u, y0: T6u, y1: o6u };
            z6u = k5u.yIntersection(Z6u, l6u);
            H6u = l6u;
            o6u = z6u;
        }
        if (J6u == "line" || J6u == v6T || J6u == V6T) {
            l6u = 10000000;
            w6u = -10000000;
            Z6u = { x0: a6u, x1: H6u, y0: T6u, y1: o6u };
            z6u = k5u.yIntersection(Z6u, l6u);
            v6u = k5u.yIntersection(Z6u, w6u);
            a6u = w6u;
            H6u = l6u;
            T6u = v6u;
            o6u = z6u;
        }
        V6u = 0.0;
        e6u = 1.0;
        F29.T3k(1);
        I6u = F29.j3k(H6u, a6u);
        F29.L3k(1);
        A6u = F29.v3k(o6u, T6u);
        for (var K6u = 0; K6u < 4; K6u++) {
            if (K6u === 0) {
                s6u = -I6u;
                F29.L3k(1);
                u6u = -F29.j3k(O6u, a6u);
            }
            if (K6u == 1) {
                s6u = I6u;
                F29.L3k(1);
                u6u = F29.v3k(N6u, a6u);
            }
            if (K6u == +"2") {
                s6u = -A6u;
                F29.L3k(1);
                u6u = -F29.v3k(b6u, T6u);
            }
            if (K6u == 3) {
                s6u = A6u;
                F29.L3k(1);
                u6u = F29.v3k(U6u, T6u);
            }
            F29.L3k(32);
            D6u = F29.j3k(s6u, u6u);
            if ((o6u || o6u === 0) && s6u === 0 && u6u < 0) {
                return !{};
            }
            if (s6u < 0) {
                if (D6u > e6u) {
                    return !{};
                } else if (D6u > V6u) {
                    V6u = D6u;
                }
            } else if (s6u > 0) {
                if (D6u < V6u) {
                    return ![];
                } else if (D6u < e6u) {
                    e6u = D6u;
                }
            }
        }
        F29.L3k(146);
        M6u = F29.v3k(V6u, I6u, a6u);
        F29.L3k(146);
        m6u = F29.j3k(V6u, A6u, T6u);
        F29.L3k(146);
        t6u = F29.v3k(e6u, I6u, a6u);
        F29.L3k(146);
        E6u = F29.v3k(e6u, A6u, T6u);
        if (!o6u && o6u !== 0 && !T6u && T6u !== +"0") {
            m6u = b6u;
            E6u = U6u;
            M6u = Z6u.x0;
            t6u = Z6u.x0;
            if (Z6u.x0 > N6u) {
                return ![];
            }
            if (Z6u.x0 < O6u) {
                return ![];
            }
        } else if (!o6u && o6u !== 0) {
            if (Z6u.y0 < Z6u.y1) {
                E6u = U6u;
            } else {
                E6u = b6u;
            }
            M6u = Z6u.x0;
            t6u = Z6u.x0;
            if (Z6u.x0 > N6u) {
                return ![];
            }
            if (Z6u.x0 < O6u) {
                return ![];
            }
        }
        if (!h6u) {
            r6u.save();
            r6u.beginPath();
        }
        r6u.lineWidth = +"1.1";
        if (k6u && typeof k6u == "object") {
            r6u.strokeStyle = k6u.color;
            if (k6u.opacity) {
                r6u.globalAlpha = k6u.opacity;
            } else {
                F29.L3k(19);
                r6u.globalAlpha = F29.v3k("1", 1);
            }
            r6u.lineWidth = k5u.stripPX(k6u.width);
        } else {
            if (!k6u || k6u == "auto" || k5u.isTransparent(k6u)) {
                r6u.strokeStyle = this.defaultColor;
            } else {
                r6u.strokeStyle = k6u;
            }
        }
        if (j6u.opacity) {
            r6u.globalAlpha = j6u.opacity;
        }
        if (j6u.lineWidth) {
            r6u.lineWidth = j6u.lineWidth;
        }
        if (j6u.globalCompositeOperation) {
            r6u.globalCompositeOperation = j6u.globalCompositeOperation;
        }
        W6u = k5u.borderPatternToArray(r6u.lineWidth, j6u.pattern);
        r6u.setLineDash(j6u.pattern ? W6u : []);
        r6u.moveTo(M6u, m6u);
        r6u.lineTo(t6u, E6u);
        if (!h6u) {
            r6u.stroke();
            r6u.restore();
        }
    };
    k5u.ChartEngine.prototype.rendererAction = function (f6u, x6u) {
        var r6T, i6u, B7T, w7T, z6T, n6u, c6u, G6u, R6u;
        r6T = "rend";
        r6T += "e";
        r6T += "rerAc";
        r6T += "tion";
        i6u = !!"";
        if (!this.runPrepend(r6T, arguments)) {
            for (var q6u in f6u.seriesRenderers) {
                B7T = "y";
                B7T += "Ax";
                B7T += "i";
                B7T += "s";
                w7T = "u";
                w7T += "nder";
                w7T += "lay";
                z6T = "_ma";
                z6T += "in_s";
                z6T += "eries";
                n6u = f6u.seriesRenderers[q6u];
                c6u = n6u.params;
                G6u = c6u.panel;
                R6u = this.panels[G6u];
                if (c6u.overChart && x6u == "underlay") continue;
                if (c6u.name == z6T && x6u == w7T) continue;
                if (c6u.name != "_main_series" && x6u == "main") continue;
                if (!c6u.overChart && x6u == "overlay") continue;
                if (!R6u) continue;
                if (R6u.chart !== f6u) continue;
                if (R6u.hidden) continue;
                if (x6u == B7T) {
                    n6u.adjustYAxis();
                } else {
                    Q6u.apply(this);
                    n6u.draw();
                    if (n6u.cb) {
                        n6u.cb(n6u.colors);
                    }
                }
            }
            this.runAppend("rendererAction", arguments);
        }
        function Q6u() {
            var L6u;
            if (!i6u && x6u === "underlay") {
                L6u = Symbol.for("CIQ.watermark");
                if (this[L6u]) {
                    this[L6u].draw(f6u);
                    i6u = !!1;
                }
            }
        }
        Q6u.apply(this);
    };
    k5u.ChartEngine.prototype.drawSeries = function (d6u, Z7u, Y7u, r7u) {
        var b7T, l7u, F7u, K7T, C6u, B6u, j7u, D7u, P7u, S7u, o7u, k7u, p7u, g6u, s7u, X6u, H7u, T7u;
        b7T = "drawSe";
        b7T += "rie";
        b7T += "s";
        if (this.runPrepend("drawSeries", arguments)) {
            return;
        }
        l7u = d6u.dataSegment;
        F7u = null;
        if (!Z7u) {
            Z7u = d6u.series;
        }
        for (var a7u in Z7u) {
            K7T = "Cl";
            K7T += "o";
            K7T += "s";
            K7T += "e";
            F7u = Z7u[a7u];
            C6u = F7u.parameters;
            B6u = C6u.panel ? this.panels[C6u.panel] : d6u.panel;
            j7u = C6u.color;
            D7u = C6u.width;
            P7u = C6u.field;
            if (!B6u) continue;
            S7u = C6u.yAxis = Y7u ? Y7u : B6u.yAxis;
            if (!j7u) {
                j7u = S7u.textStyle || this.defaultColor;
            }
            if (j7u == "auto") {
                j7u = this.defaultColor;
            }
            if (!P7u) {
                P7u = d6u.defaultPlotField;
            }
            o7u = C6u.subField || d6u.defaultPlotField || K7T;
            if (!C6u._rawExtendToEndOfDataSet && C6u._rawExtendToEndOfDataSet !== !{}) {
                C6u._rawExtendToEndOfDataSet = C6u.extendToEndOfDataSet;
            }
            if (d6u.animatingHorizontalScroll) {
                C6u.extendToEndOfDataSet = !1;
            } else {
                C6u.extendToEndOfDataSet = C6u._rawExtendToEndOfDataSet;
            }
            k7u = C6u.colorFunction;
            if (F7u.highlight || F7u.parameters.highlight) {
                C6u.highlight = !!1;
            }
            p7u = { colors: [] };
            if (r7u) {
                if (r7u.params.highlight) {
                    C6u.highlight = !"";
                }
                if (C6u.hidden) continue;
                p7u = r7u.drawIndividualSeries(d6u, C6u) || p7u;
            } else if (C6u.type == "mountain") {
                p7u = this.drawMountainChart(B6u, k5u.extend({ returnObject: !!"1" }, C6u), k7u);
            } else {
                p7u = this.drawLineChart(B6u, C6u.style, k7u, k5u.extend({ returnObject: !![] }, C6u));
            }
            F7u.yValueCache = p7u.cache;
            R1aa.T3k(4);
            var s81 = R1aa.j3k(14, 13);
            g6u = d6u.dataSegment[d6u.dataSegment.length - s81];
            if (g6u) {
                s7u = !C6u.skipTransform && d6u.transformFunc && S7u == d6u.panel.yAxis;
                if (!g6u[P7u] && g6u[P7u] !== ("0" & 2147483647)) {
                    g6u = this.getPreviousBar(d6u, P7u, d6u.dataSegment.length - 1);
                }
                if (s7u && g6u && g6u.transform) {
                    g6u = g6u.transform;
                }
            }
            if (C6u.displayFloatingLabel !== !"1" && this.mainSeriesRenderer != r7u && g6u && !S7u.noDraw) {
                X6u = g6u[P7u];
                if (X6u) {
                    if (X6u[o7u] || X6u[o7u] === 0) {
                        X6u = X6u[o7u];
                    } else {
                        X6u = X6u.iqPrevClose;
                    }
                }
                if (S7u.priceFormatter) {
                    H7u = S7u.priceFormatter(this, B6u, X6u);
                } else {
                    H7u = this.formatYAxisPrice(X6u, B6u, null, S7u);
                }
                this.yAxisLabels.push({ src: "series", args: [B6u, H7u, this.pixelFromTransformedValue(X6u, B6u, S7u), k5u.hexToRgba(k5u.colorToHex(j7u), parseFloat(C6u.opacity)), null, null, S7u] });
            }
            if (d6u.legend && C6u.useChartLegend) {
                if (!d6u.legend.colorMap) {
                    d6u.legend.colorMap = {};
                }
                T7u = C6u.display;
                if (!T7u) {
                    T7u = C6u.symbol;
                }
                d6u.legend.colorMap[a7u] = { color: p7u.colors, display: T7u, isBase: r7u == this.mainSeriesRenderer };
            }
        }
        this.runAppend(b7T, arguments);
    };
};
T9L = (V7u) => {
    var D19 = R1aa;
    var s6a, W6a, u6a, K7u;
    s6a = +"533999718";
    W6a = +"2081693506";
    u6a = +"2";
    for (var o6a = 1; D19.G4a(o6a.toString(), o6a.toString().length, 20538) !== s6a; o6a++) {
        K7u = V7u.CIQ;
        D19.T3k(21);
        u6a += D19.j3k(2147483647, "2");
    }
    if (D19.G4a(u6a.toString(), u6a.toString().length, 86126) !== W6a) {
        K7u = V7u.CIQ;
    }
    K7u.ChartEngine.prototype.scrollTo = function (u7u, b7u, U7u) {
        var e7u, J7u;
        e7u = this.swipe;
        e7u.end = !![];
        e7u.amplitude = e7u.target = (b7u - u7u.scroll) * this.layout.candleWidth;
        e7u.timeConstant = +"100";
        e7u.timestamp = Date.now();
        D19.X19();
        e7u.scroll = u7u.scroll;
        e7u.chart = u7u;
        e7u.cb = U7u;
        J7u = this;
        requestAnimationFrame(function () {
            D19.K19();
            J7u.autoscroll();
        });
    };
    K7u.ChartEngine.prototype.autoscroll = function () {
        var I7u, O7u, N7u, A7u;
        D19.X19();
        I7u = this;
        O7u = this.swipe;
        if (O7u.amplitude) {
            O7u.elapsed = Date.now() - O7u.timestamp;
            N7u = -O7u.amplitude * Math.exp(-O7u.elapsed / O7u.timeConstant);
            A7u = (O7u.target + N7u) / this.layout.candleWidth;
            O7u.chart.scroll = O7u.scroll + Math.round(A7u);
            this.draw();
            this.updateChartAccessories();
            if (N7u > +"0.5" || N7u < -0.5) {
                requestAnimationFrame(function () {
                    I7u.autoscroll();
                });
            } else {
                if (this.disableBackingStoreDuringTouch) {
                    this.reconstituteBackingStore();
                }
                if (O7u.cb) {
                    O7u.cb();
                }
            }
        }
    };
};
a9L = (z7u) => {
    var E7u;
    E7u = z7u.CIQ;
    R1aa.K19();
    E7u.ChartEngine.prototype.drawXAxis = function (v7u, t7u) {
        var G29 = R1aa;
        var c7T, l7T, i7u, y7u, B7u, M7u, S9t, q7u, G7u, Q7u, f7u, x7u, L7u, C7u, k7T, H7T, i7T, n7T, h7u, d7u, W7u, g7u, c7u, C7T, m7u, e7T, X7u, p9t;
        c7T = "stx";
        c7T += "_xaxis";
        l7T = "draw";
        l7T += "X";
        l7T += "A";
        l7T += "xis";
        i7u = [v7u, t7u];
        if (this.runPrepend(l7T, i7u)) {
            return;
        }
        if (!t7u) {
            return;
        }
        if (v7u.xAxis.noDraw) {
            return;
        }
        y7u = this.getBackgroundCanvas().context;
        this.canvasFont(c7T, y7u);
        B7u = this.getCanvasFontSize("stx_xaxis");
        y7u.textAlign = "center";
        y7u.textBaseline = "middle";
        S9t = y7u.measureText("   ").width;
        for (var R7u = 0; R7u < t7u.length; R7u++) {
            M7u = t7u[R7u];
            q7u = y7u.measureText(M7u.text).width;
            G29.L3k(6);
            G7u = Math.max(G29.v3k(q7u, S9t), v7u.xAxis.minimumLabelWidth);
            M7u.hz = Math.floor(M7u.hz + this.micropixels) + 0.5;
            G29.L3k(6);
            var W81 = G29.v3k(0, 2);
            M7u.left = M7u.hz - G7u / W81;
            G29.L3k(67);
            var u81 = G29.j3k(10, 6, 6, 5);
            M7u.right = M7u.hz + G7u / u81;
            M7u.unpaddedRight = M7u.hz + q7u / +"2";
        }
        Q7u = this.xAxisAsFooter === !!"1" ? this.chart.canvasHeight : v7u.panel.bottom;
        G29.L3k(1);
        f7u = this.whichPanel(G29.v3k(Q7u, 1));
        if (!f7u) {
            return;
        }
        this.adjustYAxisHeightOffset(f7u, f7u.yAxis);
        x7u = v7u.xAxis.displayBorder || v7u.xAxis.displayBorder === null;
        if (this.axisBorders === !"") {
            x7u = !![];
        }
        if (this.axisBorders === !1) {
            x7u = ![];
        }
        L7u = Q7u - this.xaxisHeight + B7u;
        if (x7u) {
            L7u += 3;
        }
        C7u = !!{};
        for (var P9t in this.panels) {
            k7T = "s";
            k7T += "tx_";
            k7T += "grid_border";
            H7T = "s";
            H7T += "troke";
            i7T = "bound";
            i7T += "ary";
            n7T = "s";
            n7T += "troke";
            h7u = this.panels[P9t];
            if (h7u.hidden || h7u.shareChartXAxis === !1) continue;
            G29.T3k(117);
            d7u = G29.v3k(h7u, f7u);
            W7u = h7u.yAxis;
            if (!W7u) continue;
            g7u = -Number.MAX_VALUE;
            c7u = Number.MAX_VALUE;
            for (var w7u = 0; w7u < t7u.length; w7u++) {
                C7T = "bo";
                C7T += "und";
                C7T += "ar";
                C7T += "y";
                if (t7u[w7u].grid == C7T) {
                    c7u = t7u[w7u].left;
                    break;
                }
            }
            y7u.save();
            y7u.beginPath();
            y7u.rect(h7u.left, h7u.top + (C7u ? 0 : 1), h7u.width, h7u.height - 1);
            y7u.clip();
            C7u = ![];
            m7u = new E7u.Plotter();
            m7u.newSeries("line", n7T, this.canvasStyle("stx_grid"));
            m7u.newSeries(i7T, H7T, this.canvasStyle("stx_grid_dark"));
            m7u.newSeries("border", "stroke", this.canvasStyle(k7T));
            for (var n7u = "0" * 1; n7u < t7u.length; n7u++) {
                M7u = t7u[n7u];
                if (n7u == w7u) {
                    for (w7u++; w7u < t7u.length; w7u++) {
                        if (t7u[w7u].grid == "boundary") {
                            c7u = t7u[w7u].left;
                            break;
                        }
                    }
                    if (w7u >= t7u.length) {
                        w7u = -1;
                        c7u = Number.MAX_VALUE;
                    }
                } else {
                    if (M7u.right > c7u) continue;
                }
                if (M7u.left < g7u) continue;
                if (M7u.left < 0) {
                    if (c7u < M7u.right) continue;
                    if (w7u >= t7u.length) {
                        if (t7u[n7u + 1] && t7u[n7u + ("1" - 0)].left < M7u.right) continue;
                    }
                }
                g7u = M7u.right;
                if (Math.floor(M7u.left) <= h7u.right) {
                    if (Math.floor(M7u.hz) > h7u.left) {
                        if (v7u.xAxis.displayGridLines) {
                            m7u.moveTo(M7u.grid, M7u.hz, W7u.top);
                            m7u.lineTo(M7u.grid, M7u.hz, W7u.bottom);
                        }
                        if (d7u && x7u) {
                            m7u.moveTo("border", M7u.hz, W7u.bottom + 0.5);
                            m7u.lineTo("border", M7u.hz, W7u.bottom + 6);
                        }
                    }
                    if (d7u && M7u.right > h7u.left) {
                        e7T = "stx_xa";
                        e7T += "xi";
                        e7T += "s";
                        this.canvasColor(M7u.grid == "boundary" ? "stx_xaxis_dark" : e7T, y7u);
                        y7u.fillText(M7u.text, M7u.hz, L7u);
                    }
                }
            }
            if (x7u) {
                X7u = Math.round(W7u.bottom) + 0.5;
                p9t = Math.round(h7u.right) + 0.5;
                m7u.moveTo("border", h7u.left, X7u);
                m7u.lineTo("border", p9t, X7u);
            }
            m7u.draw(y7u);
            y7u.restore();
        }
        y7u.textAlign = "left";
        this.runAppend("drawXAxis", i7u);
    };
    E7u.ChartEngine.prototype.createTickXAxisWithDates = function (o9t) {
        var Z29 = R1aa;
        var p7T,
            u7T,
            k9t,
            G9t,
            H9t,
            W7T,
            s7T,
            h7T,
            f7T,
            D9t,
            F0t,
            j0t,
            w9t,
            J9t,
            Y9t,
            T9t,
            K9t,
            r0t,
            Z0t,
            V9t,
            Q9t,
            e9t,
            x9t,
            m9t,
            L9t,
            o0t,
            b9t,
            F9t,
            C9t,
            d9t,
            T0t,
            j9t,
            u9t,
            N9t,
            v9t,
            c9t,
            I9t,
            g9t,
            S5a,
            D5a,
            v5a,
            B9t,
            a9t,
            U9t,
            A9t,
            S0t,
            O9t,
            t9t,
            s9t,
            y9t,
            W9t,
            R9t,
            E9t,
            i9t,
            P0t,
            r9t,
            n9t,
            p0t,
            q9t,
            z9t,
            h9t,
            o7T,
            Y7T,
            Z7T,
            Z9t,
            l9t,
            X7T;
        p7T = "d";
        p7T += "a";
        p7T += "y";
        u7T = "m";
        u7T += "in";
        u7T += "u";
        u7T += "te";
        if (!o9t) {
            o9t = this.chart;
        }
        o9t.xaxis = [];
        G9t = o9t.context;
        H9t = [E7u.MILLISECOND, E7u.SECOND, E7u.MINUTE, E7u.HOUR, E7u.DAY, E7u.MONTH, E7u.YEAR];
        if (!this.timeIntervalMap) {
            W7T = "2";
            W7T += "0";
            W7T += "00";
            s7T = "3";
            s7T += "0";
            h7T = "10";
            h7T += ":0";
            h7T += "0";
            f7T = "10";
            f7T += ":0";
            f7T += "0:";
            f7T += "00";
            D9t = G9t.measureText.bind(G9t);
            k9t = {};
            k9t[E7u.MILLISECOND] = { arr: [1, 2, 5, 10, "20" - 0, +"50", 100, 250, 500], minTimeUnit: 0, maxTimeUnit: 1000, measurement: D9t("10:00:00.000") };
            k9t[E7u.SECOND] = { arr: [1, "2" << 1155113856, +"3", 4, 5, 6, 10, 12, 15, 20, 30], minTimeUnit: 0, maxTimeUnit: 60, measurement: D9t(f7T) };
            k9t[E7u.MINUTE] = { arr: [1, +"2", 3, +"4", 5, 6, 10, "12" - 0, 15, 20, 30], minTimeUnit: 0, maxTimeUnit: 60, measurement: D9t(h7T) };
            k9t[E7u.HOUR] = { arr: [1, 2, 3, 4, 6, 12], minTimeUnit: 0, maxTimeUnit: "24" - 0, measurement: D9t("10:00") };
            k9t[E7u.DAY] = { arr: [1, +"2", 7, 14], minTimeUnit: 1, maxTimeUnit: 32, measurement: D9t(s7T) };
            k9t[E7u.MONTH] = { arr: [1, "2" * 1, 3, "6" ^ 0], minTimeUnit: 1, maxTimeUnit: 13, measurement: D9t("Mar") };
            k9t[E7u.YEAR] = { arr: [1, 2, 3, 5], minTimeUnit: "1" * 1, maxTimeUnit: 20000000, measurement: D9t(W7T) };
            k9t[E7u.DECADE] = { arr: [10], minTimeUnit: 0, maxTimeUnit: 2000000, measurement: D9t("2000") };
            this.timeIntervalMap = k9t;
        }
        k9t = this.timeIntervalMap;
        F0t = [31, 28, 31, 30, 31, 30, +"31", 31, +"30", 31, 30, 31];
        j0t = this.layout.periodicity;
        w9t = this.layout.interval;
        J9t = o9t.maxTicks;
        Y9t = o9t.dataSegment;
        T9t = o9t.xAxis;
        K9t = Y9t.length;
        r0t = T9t.idealTickSizePixels || T9t.autoComputedTickSizePixels;
        Z0t = this.chart.width / r0t;
        for (var M9t = 0; M9t < K9t; M9t++) {
            if (Y9t[M9t]) break;
        }
        if (M9t == K9t) {
            return [];
        }
        V9t = 0;
        Q9t = this.layout.timeUnit || "minute";
        if (isNaN(w9t)) {
            Q9t = w9t;
            w9t = 1;
        }
        e9t = 0;
        switch (Q9t) {
            case "millisecond":
                e9t = 1;
                break;
            case "second":
                e9t = 1000;
                H9t.splice(0, 1);
                break;
            case u7T:
                e9t = +"60000";
                H9t.splice(0, 2);
                break;
            case p7T:
                Z29.T3k(21);
                e9t = Z29.v3k(2147483647, "86400000");
                Z29.T3k(124);
                H9t.splice(Z29.v3k("0", 0), Z29.j3k("4", 0));
                break;
            case "week":
                Z29.T3k(19);
                e9t = Z29.j3k(86400000, 7);
                H9t.splice(0, 4);
                break;
            case "month":
                Z29.L3k(19);
                e9t = Z29.j3k(86400000, 30);
                H9t.splice(+"0", 5);
                break;
        }
        x9t = this.layout.aggregationType;
        if (e9t && (!x9t || x9t == "ohlc" || x9t == "heikinashi")) {
            Z29.L3k(86);
            V9t = Z29.j3k(j0t, e9t, w9t, K9t);
        } else {
            V9t = Y9t[K9t - ("1" >> 1015234528)].DT.getTime() - Y9t[M9t].DT.getTime();
        }
        if (V9t === "0" << 581697120) {
            if (o9t.market) {
                m9t = o9t.market.newIterator({ begin: new Date(), interval: "day", periodicity: 1 });
                m9t.next();
                L9t = m9t.previous();
                m9t = this.standardMarketIterator(L9t, null, o9t);
                o0t = m9t.next();
                V9t = (o0t.getTime() - L9t.getTime()) * J9t;
            } else {
                Z29.T3k(162);
                V9t = Z29.j3k(60, 60, J9t, 1, 1000, "24");
            }
        } else {
            Z29.L3k(163);
            V9t = Z29.v3k(J9t, K9t, V9t);
        }
        Z29.T3k(32);
        b9t = Z29.v3k(Z0t, V9t);
        for (F9t = 0; F9t < H9t.length; F9t++) {
            if (H9t[F9t] > b9t + 0.001) break;
        }
        if (b9t < +"1") {
            console.log("createTickXAxisWithDates: Assertion error. msPerGridLine < 1. Make sure your masterData has correct time stamps for the active periodicity and it is sorted from OLDEST to NEWEST.");
        }
        if (F9t == H9t.length) {
            F9t--;
        } else if (F9t > "0" << 2000156192) {
            Z29.T3k(1);
            C9t = H9t[Z29.v3k(F9t, 1)];
            d9t = k9t[C9t].arr;
            Z29.L3k(164);
            var p81 = Z29.j3k(1, 10, 151, 15);
            T0t = d9t[d9t.length - p81];
            if (b9t - C9t * T0t < H9t[F9t] - b9t) {
                F9t--;
            }
        }
        j9t = T9t.timeUnit || H9t[F9t];
        T9t.activeTimeUnit = j9t;
        u9t = k9t[j9t];
        N9t = u9t.arr;
        for (F9t = 0; F9t < N9t.length; F9t++) {
            if (N9t[F9t] * j9t > b9t) break;
        }
        if (F9t == N9t.length) {
            F9t--;
        } else {
            if (b9t - N9t[F9t - +"1"] * j9t < N9t[F9t] * j9t - b9t) {
                F9t--;
            }
        }
        if (u9t.measurement.width * 2 < this.layout.candleWidth) {
            F9t = 0;
        }
        v9t = T9t.timeUnitMultiplier || N9t[F9t];
        c9t = [];
        I9t = this.layout.candleWidth;
        for (F9t = 0; F9t <= J9t; F9t++) {
            if (Y9t[F9t]) break;
        }
        if (F9t > 0 && F9t < J9t) {
            S5a = -1224009958;
            D5a = 63820369;
            v5a = 2;
            for (var r5a = 1; Z29.G4a(r5a.toString(), r5a.toString().length, 99859) !== S5a; r5a++) {
                if (o9t.market) {
                    g9t = this.standardMarketIterator(Y9t[F9t].DT, T9t.adjustTimeZone ? this.displayZone : 1);
                }
                v5a += 2;
            }
            if (Z29.G4a(v5a.toString(), v5a.toString().length, 67676) !== D5a) {
                if (o9t.market) {
                    g9t = this.standardMarketIterator(Y9t[F9t].DT, T9t.adjustTimeZone ? this.displayZone : +"1");
                }
            }
            if (o9t.market) {
                g9t = this.standardMarketIterator(Y9t[F9t].DT, T9t.adjustTimeZone ? this.displayZone : null);
            }
            for (var X9t = F9t; X9t > 0; X9t--) {
                B9t = {};
                if (g9t && !(o9t.lineApproximation && I9t < 1)) {
                    B9t.DT = g9t.previous();
                }
                o9t.xaxis.unshift(B9t);
            }
        }
        a9t = +"0";
        U9t = u9t.minTimeUnit;
        A9t = -1;
        S0t = !!1;
        O9t = f9t(Y9t[F9t].DT);
        s9t = 0;
        y9t = 0;
        W9t = Y9t[F9t].tick;
        for (s9t; s9t < W9t; s9t++) {
            t9t = f9t(this.chart.dataSet[W9t - s9t].DT);
            if (t9t[1] != O9t[1]) break;
            O9t = t9t;
        }
        for (y9t; y9t < this.chart.dataSet.length - W9t; y9t++) {
            t9t = f9t(this.chart.dataSet[W9t + y9t].DT);
            if (t9t[1] != O9t[1]) break;
            O9t = t9t;
        }
        function f9t(a0t) {
            var k0t, H0t;
            if (j9t == E7u.MILLISECOND) {
                k0t = a0t.getMilliseconds();
                H0t = a0t.getSeconds();
            } else if (j9t == E7u.SECOND) {
                k0t = a0t.getSeconds();
                H0t = a0t.getMinutes();
            } else if (j9t == E7u.MINUTE) {
                k0t = a0t.getMinutes();
                H0t = a0t.getHours();
            } else if (j9t == E7u.HOUR) {
                Z29.T3k(69);
                var o81 = Z29.j3k(47, 7, 3, 10, 7);
                k0t = a0t.getHours() + a0t.getMinutes() / o81;
                H0t = a0t.getDate();
            } else if (j9t == E7u.DAY) {
                k0t = a0t.getDate();
                Z29.T3k(2);
                var Y81 = Z29.j3k(12, 2, 11);
                H0t = a0t.getMonth() + Y81;
            } else if (j9t == E7u.MONTH) {
                Z29.L3k(165);
                var X81 = Z29.j3k(14, 1, 13);
                k0t = a0t.getMonth() + X81;
                H0t = a0t.getFullYear();
            } else if (j9t == E7u.YEAR) {
                k0t = a0t.getFullYear();
                Z29.L3k(166);
                var Z81 = Z29.j3k(53, 13, 973, 3, 15);
                H0t = a0t.getFullYear() + Z81;
            } else {
                k0t = a0t.getFullYear();
                H0t = 0;
            }
            return [k0t, H0t];
        }
        R9t = null;
        for (F9t = 0; F9t < J9t + y9t; F9t++) {
            E9t = Y9t[F9t];
            if (!E9t) {
                E9t = o9t.xaxis[F9t];
            } else if (s9t) {
                E9t = o9t.dataSet[E9t.tick - s9t];
            }
            if (F9t < K9t) {
                i9t = E9t;
                if (i9t.displayDate && T9t.adjustTimeZone) {
                    a9t = i9t.displayDate;
                } else {
                    a9t = i9t.DT;
                }
                if (F9t && !s9t && o9t.segmentImage) {
                    P0t = o9t.segmentImage[F9t];
                    Z29.T3k(6);
                    var a81 = Z29.v3k(0, 2);
                    I9t = (P0t.leftOffset - P0t.candleWidth / a81) / F9t;
                }
            } else if (o9t.market) {
                if (this.layout.interval == "tick" && !T9t.futureTicksInterval) break;
                if (o9t.lineApproximation && I9t < 1) break;
                if (!T9t.futureTicks) break;
                if (!R9t) {
                    R9t = this.standardMarketIterator(Y9t[K9t - +"1"].DT, T9t.adjustTimeZone ? this.displayZone : null);
                }
                a9t = R9t.next();
            }
            if (!a9t) continue;
            r9t = null;
            Z29.T3k(1);
            p0t = Z29.v3k(F9t, s9t);
            q9t = { DT: a9t };
            if (F9t < K9t) {
                q9t.data = E9t;
            } else {
                q9t.data = null;
            }
            if (s9t) {
                s9t--;
                F9t--;
            } else if (!o9t.xaxis[F9t] && F9t < J9t) {
                o9t.xaxis.push(q9t);
            }
            O9t = f9t(a9t);
            z9t = O9t[0];
            h9t = O9t[1];
            if (A9t != h9t) {
                if (z9t <= U9t) {
                    U9t = u9t.minTimeUnit;
                }
                Z29.T3k(167);
                var y81 = Z29.v3k(13, 5, 16, 8, 17);
                n9t = o9t.left + p0t * I9t - y81;
                r9t = null;
                if (j9t == E7u.HOUR || (j9t == E7u.MINUTE && A9t > h9t)) {
                    if (this.internationalizer) {
                        r9t = this.internationalizer.monthDay.format(a9t);
                    } else {
                        Z29.T3k(1);
                        var R81 = Z29.j3k(4, 3);
                        Z29.L3k(168);
                        var x81 = Z29.v3k(1, 8, 13, 1, 13);
                        Z29.L3k(1);
                        var A81 = Z29.j3k(21420, 16065);
                        Z29.L3k(23);
                        var I81 = Z29.v3k(8618, 112060, 56030);
                        Z29.T3k(38);
                        var M81 = Z29.v3k(8190, 18, 8, 139212);
                        Z29.T3k(2);
                        var d81 = Z29.v3k(15, 8546, 569);
                        Z29.T3k(1);
                        var m81 = Z29.v3k(95186, 87864);
                        Z29.L3k(13);
                        var P81 = Z29.j3k(57848, 1, 53716);
                        r9t = a9t.getMonth() + R81 + (x81 >= A81 ? ((I81, M81) < (d81, m81) ? P81 : 0xfae) : "/") + a9t.getDate();
                    }
                    if (T9t.formatter) {
                        r9t = T9t.formatter(a9t, "boundary", E7u.DAY, 1, r9t);
                    }
                } else if (j9t == E7u.DAY) {
                    if (A9t > h9t) {
                        r9t = a9t.getFullYear();
                        if (T9t.formatter) {
                            o7T = "bo";
                            o7T += "u";
                            o7T += "nd";
                            o7T += "ary";
                            r9t = T9t.formatter(a9t, o7T, E7u.YEAR, 1, r9t);
                        }
                    } else {
                        r9t = E7u.monthAsDisplay(a9t.getMonth(), !{}, this);
                        if (T9t.formatter) {
                            r9t = T9t.formatter(a9t, "boundary", E7u.MONTH, 1, r9t);
                        }
                    }
                } else if (j9t == E7u.MONTH) {
                    r9t = a9t.getFullYear();
                    if (T9t.formatter) {
                        Y7T = "bounda";
                        Y7T += "ry";
                        r9t = T9t.formatter(a9t, Y7T, E7u.YEAR, 1, r9t);
                    }
                }
                if (r9t && A9t != -1) {
                    c9t.push(new E7u.ChartEngine.XAxisLabel(n9t, "boundary", r9t));
                }
            }
            if (z9t >= U9t) {
                Z7T = "l";
                Z7T += "i";
                Z7T += "n";
                Z7T += "e";
                if (U9t == u9t.minTimeUnit) {
                    if (h9t == A9t) continue;
                }
                Z9t = new Date(+a9t);
                Z29.L3k(8);
                var L81 = Z29.v3k(0, 19, 20);
                Z29.T3k(1);
                var j81 = Z29.v3k(34, 32);
                Z29.L3k(169);
                var O81 = Z29.j3k(0, 11, 0, 3, 14);
                n9t = o9t.left + ((+"2" * p0t + ("1" | L81)) * I9t) / j81 - O81;
                l9t = Math.floor(z9t / v9t) * v9t;
                if (l9t < z9t) {
                    if (this.layout.interval == "week") {
                        l9t = z9t;
                    } else {
                        Z29.T3k(32);
                        n9t -= Z29.v3k(2, I9t);
                    }
                }
                if (j9t == E7u.MILLISECOND) {
                    Z9t.setMilliseconds(l9t);
                } else if (j9t == E7u.SECOND) {
                    Z9t.setMilliseconds(0);
                    Z9t.setSeconds(l9t);
                } else if (j9t == E7u.MINUTE) {
                    Z9t.setMilliseconds(0);
                    Z9t.setSeconds(0);
                    Z9t.setMinutes(l9t);
                } else if (j9t == E7u.HOUR) {
                    Z9t.setMilliseconds(0);
                    Z9t.setSeconds(0);
                    Z9t.setMinutes(+"0");
                    Z9t.setHours(l9t);
                } else if (j9t == E7u.DAY) {
                    Z9t.setDate(Math.max(1, l9t));
                } else if (j9t == E7u.MONTH) {
                    Z9t.setDate(1);
                    Z29.L3k(1);
                    Z9t.setMonth(Z29.v3k(l9t, 1));
                } else if (j9t == E7u.YEAR) {
                    Z9t.setDate(1);
                    Z9t.setMonth(0);
                } else {
                    Z9t.setDate(1);
                    Z9t.setMonth(0);
                }
                Z29.T3k(6);
                U9t = Z29.v3k(l9t, v9t);
                if (j9t == E7u.DAY) {
                    Z29.T3k(106);
                    var g81 = Z29.v3k(0, 3, 1, 4);
                    u9t.maxTimeUnit = F0t[Z9t.getMonth()] + g81;
                }
                if (U9t >= u9t.maxTimeUnit) {
                    U9t = u9t.minTimeUnit;
                }
                A9t = h9t;
                if (S0t && l9t < z9t) {
                    S0t = ![];
                    continue;
                }
                if (j9t == E7u.DAY) {
                    r9t = Z9t.getDate();
                } else if (j9t == E7u.MONTH) {
                    r9t = E7u.monthAsDisplay(Z9t.getMonth(), ![], this);
                } else if (j9t == E7u.YEAR || j9t == E7u.DECADE) {
                    r9t = Z9t.getFullYear();
                } else {
                    r9t = E7u.timeAsDisplay(Z9t, this, j9t);
                }
                if (T9t.formatter) {
                    X7T = "l";
                    X7T += "ine";
                    r9t = T9t.formatter(Z9t, X7T, j9t, v9t, r9t);
                }
                c9t.push(new E7u.ChartEngine.XAxisLabel(n9t, Z7T, r9t));
            }
        }
        return c9t;
    };
};
k9L = (s0t) => {
    var l6a, c6a, C6a, Y0t;
    l6a = -1586646314;
    c6a = +"1253349411";
    C6a = 2;
    for (var i6a = 1; R1aa.G4a(i6a.toString(), i6a.toString().length, +"77910") !== l6a; i6a++) {
        Y0t = s0t.CIQ;
        C6a += 2;
    }
    if (R1aa.G4a(C6a.toString(), C6a.toString().length, 30252) !== c6a) {
        Y0t = s0t.CIQ;
    }
    Y0t.ChartEngine.prototype.createYAxis = function (D0t, K0t) {
        var x29 = R1aa;
        var y7T, e0t, O0t, l0t, y0t, W0t, h0t, B5a, K5a, b5a, V0t, N0t, I0t, w0t, U0t, u0t, p9a, Y9a, y9a, a7T, A0t, J0t, b0t, O6a, g6a, J6a, z0t, n0t, m0t, v0t, u5a, p5a, o5a;
        y7T = "createY";
        y7T += "Ax";
        y7T += "is";
        if (this.runPrepend("createYAxis", arguments)) {
            return;
        }
        e0t = D0t.chart;
        O0t = D0t.name == e0t.name;
        if (!K0t) {
            K0t = {};
        }
        x29.K19();
        K0t.noChange = ![];
        l0t = K0t.yAxis ? K0t.yAxis : D0t.yAxis;
        if (Y0t.ChartEngine.enableCaching && l0t.high == D0t.cacheHigh && l0t.low == D0t.cacheLow) {
            x29.L3k(62);
            var J81 = x29.j3k(3, 16, 4, 0, 6);
            y0t = e0t.dataSet.length - e0t.scroll - J81;
            x29.L3k(170);
            var G81 = x29.v3k(10, 19, 14, 7);
            W0t = y0t + e0t.maxTicks + G81;
            D0t.cacheLeft = y0t;
            D0t.cacheRight = W0t;
            K0t.noChange = !![];
        } else {
            D0t.cacheLeft = 1000000;
            D0t.cacheRight = -1;
            D0t.cacheHigh = l0t.high;
            D0t.cacheLow = l0t.low;
        }
        h0t = e0t.xAxis.idealTickSizePixels ? e0t.xAxis.idealTickSizePixels : e0t.xAxis.autoComputedTickSizePixels;
        if (l0t.goldenRatioYAxis) {
            B5a = -1098258760;
            K5a = -729459287;
            b5a = 2;
            for (var c5a = 1; x29.J4a(c5a.toString(), c5a.toString().length, 92965) !== B5a; c5a++) {
                if (l0t.idealTickSizePixels != h0t / +"1.618") {
                    K0t.noChange = !{};
                }
                b5a += 2;
            }
            if (x29.J4a(b5a.toString(), b5a.toString().length, 89091) !== K5a) {
                if (l0t.idealTickSizePixels === h0t % 15234) {
                    K0t.noChange = !!{};
                }
            }
        }
        if (!K0t.noChange) {
            this.adjustYAxisHeightOffset(D0t, l0t);
            N0t = l0t.height = l0t.bottom - l0t.top;
            I0t = (l0t.high - l0t.low) / (N0t - l0t.zoom);
            if (!l0t.semiLog) {
                if (K0t.ground) {
                    l0t.high = l0t.high + l0t.zoom * I0t;
                } else {
                    x29.L3k(1);
                    var F81 = x29.v3k(32, 30);
                    l0t.high = l0t.high + (l0t.zoom / F81 + l0t.scroll) * I0t;
                    l0t.low = l0t.low - (l0t.zoom / ("2" | 0) - l0t.scroll) * I0t;
                }
            }
            if (l0t.min || l0t.min === 0) {
                l0t.low = l0t.min;
            }
            if (l0t.max || l0t.max === 0) {
                l0t.high = l0t.max;
            }
            l0t.shadow = l0t.high - l0t.low;
            if (l0t.semiLog && (!this.activeDrawing || this.activeDrawing.name != "projection")) {
                w0t = function () {
                    var x0t;
                    l0t.logHigh = Math.log(l0t.high) / Math.LN10;
                    x0t = Math.max(l0t.low, 0.000000001);
                    l0t.logLow = Math.log(x0t) / Math.LN10;
                    x29.K19();
                    if (l0t.low <= 0) {
                        l0t.logLow = +"0";
                    }
                    l0t.logShadow = l0t.logHigh - l0t.logLow;
                };
                if (l0t.semiLog) {
                    w0t();
                }
                U0t = l0t.height / (l0t.height - l0t.zoom);
                if (l0t.flipped) {
                    l0t.high = this.transformedPriceFromPixel(l0t.bottom + U0t * (l0t.zoom / 2 + l0t.scroll), D0t, l0t);
                    l0t.low = this.transformedPriceFromPixel(l0t.top - U0t * (l0t.zoom / 2 - l0t.scroll), D0t, l0t);
                } else {
                    l0t.high = this.transformedPriceFromPixel(l0t.top - U0t * (l0t.zoom / 2 + l0t.scroll), D0t, l0t);
                    l0t.low = this.transformedPriceFromPixel(l0t.bottom + U0t * (l0t.zoom / 2 - l0t.scroll), D0t, l0t);
                }
                l0t.shadow = l0t.high - l0t.low;
                if (l0t.semiLog) {
                    w0t();
                }
            }
            if (l0t.goldenRatioYAxis && O0t && l0t == D0t.yAxis) {
                p9a = 1272424797;
                Y9a = -1860187256;
                y9a = +"2";
                for (var d9a = 1; x29.G4a(d9a.toString(), d9a.toString().length, 48927) !== p9a; d9a++) {
                    x29.L3k(19);
                    l0t.idealTickSizePixels = x29.v3k(h0t, 16587);
                    y9a += +"2";
                }
                if (x29.G4a(y9a.toString(), y9a.toString().length, 94675) !== Y9a) {
                    x29.L3k(32);
                    l0t.idealTickSizePixels = x29.v3k(1.618, h0t);
                }
                if (l0t.idealTickSizePixels === ("0" ^ 0)) {
                    a7T = "st";
                    a7T += "x_yaxis";
                    u0t = this.getCanvasFontSize(a7T);
                    x29.T3k(19);
                    l0t.idealTickSizePixels = x29.v3k(u0t, 5);
                }
            } else {
                if (!l0t.idealTickSizePixels) {
                    u0t = this.getCanvasFontSize("stx_yaxis");
                    if (O0t) {
                        x29.T3k(19);
                        l0t.idealTickSizePixels = x29.j3k(u0t, 5);
                    } else {
                        x29.L3k(19);
                        l0t.idealTickSizePixels = x29.v3k(u0t, 2);
                    }
                }
            }
            A0t = Math.round(N0t / l0t.idealTickSizePixels);
            V0t = K0t.range ? K0t.range["1" & 2147483647] - K0t.range[0] : l0t.shadow;
            x29.T3k(32);
            l0t.priceTick = Math.floor(x29.j3k(A0t, V0t));
            J0t = 1;
            for (var E0t = 0; E0t < ("10" ^ 0); E0t++) {
                if (l0t.priceTick > 0) break;
                J0t *= 10;
                l0t.priceTick = Math.floor((V0t / A0t) * J0t) / J0t;
            }
            if (E0t == 10) {
                x29.T3k(1);
                l0t.priceTick = x29.v3k("0.00000001", 0);
            }
            l0t.priceTick = Math.round((V0t / A0t) * J0t) / J0t;
            b0t = Math.round(V0t / l0t.priceTick);
            if (K0t.range && b0t < V0t && !l0t.noEvenDivisorTicks) {
                while (b0t >= 1) {
                    if (V0t % b0t === 0) break;
                    b0t--;
                }
                O6a = -641375651;
                g6a = -271915790;
                J6a = 2;
                for (var F6a = 1; x29.G4a(F6a.toString(), F6a.toString().length, +"19896") !== O6a; F6a++) {
                    x29.T3k(32);
                    l0t.priceTick = x29.v3k(b0t, V0t);
                    J6a += 2;
                }
                if (x29.J4a(J6a.toString(), J6a.toString().length, 6160) !== g6a) {
                    x29.T3k(1);
                    l0t.priceTick = x29.v3k(V0t, b0t);
                }
            }
            if (l0t.minimumPriceTick) {
                z0t = l0t.minimumPriceTick;
                u0t = this.getCanvasFontSize("stx_yaxis");
                for (var M0t = 0; M0t < ("100" ^ 0); M0t++) {
                    x29.T3k(32);
                    n0t = x29.j3k(z0t, V0t);
                    if (N0t / n0t < u0t * +"2") {
                        z0t += l0t.minimumPriceTick;
                    } else break;
                }
                if (M0t < 100) {
                    l0t.priceTick = z0t;
                }
            }
        }
        if (l0t.priceTick <= 0 || l0t.priceTick === Infinity) {
            x29.T3k(1);
            l0t.priceTick = x29.v3k("1", 0);
        }
        l0t.multiplier = l0t.height / l0t.shadow;
        if (l0t.multiplier == Infinity) {
            l0t.multiplier = 0;
        }
        if (!l0t.decimalPlaces && l0t.decimalPlaces !== 0) {
            if (O0t) {
                m0t = 0;
                for (var t0t = 0; t0t < D0t.yAxis.shadowBreaks.length; t0t++) {
                    v0t = D0t.yAxis.shadowBreaks[t0t];
                    if (D0t.yAxis.shadow < v0t[+"0"]) {
                        m0t = v0t[1];
                    }
                }
                l0t.printDecimalPlaces = m0t;
            } else {
                l0t.printDecimalPlaces = null;
            }
            x29.T3k(1);
            u5a = x29.j3k("1539257250", 0);
            p5a = 231346586;
            x29.L3k(61);
            o5a = x29.v3k("2", 1178327808);
            for (var X5a = 1; x29.J4a(X5a.toString(), X5a.toString().length, "26844" << 721804640) !== u5a; X5a++) {
                o5a += 2;
            }
            if (x29.G4a(o5a.toString(), o5a.toString().length, 18928) !== p5a) {
            }
        } else {
            l0t.printDecimalPlaces = l0t.decimalPlaces;
        }
        this.runAppend(y7T, arguments);
    };
    Y0t.ChartEngine.prototype.drawYAxis = function (f0t, Q0t) {
        var J29 = R1aa;
        var M7T, c0t, i0t, S3t, Y3t, P3t, K3t, R0t, x7T, R7T, C0t, s3t, l3t, L0t, p3t, V3t, e3t, g0t, D3t, F3t, d0t, j3t, r3t, Z3t, k3t, o3t, X0t, H3t, G0t, u3t, J3t, q0t, A7T, b3t, T3t, a3t, I7T, U3t;
        M7T = "dr";
        M7T += "awYAxis";
        if (!Q0t) {
            Q0t = {};
        }
        c0t = Q0t.yAxis ? Q0t.yAxis : f0t.yAxis;
        if (f0t.hidden || c0t.noDraw || !c0t.width) {
            return;
        }
        if (!Y0t.Comparison || c0t.priceFormatter != Y0t.Comparison.priceFormat) {
            i0t = c0t.fractional;
            if (i0t) {
                if (!c0t.originalPriceFormatter) {
                    c0t.originalPriceFormatter = { func: c0t.priceFormatter };
                }
                if (!i0t.resolution) {
                    i0t.resolution = c0t.minimumPrice;
                }
                if (!i0t.formatter) {
                    i0t.formatter = "'";
                }
                if (!c0t.priceFormatter) {
                    c0t.priceFormatter = function (z3t, M3t, O3t) {
                        var I3t, A3t, E3t, N3t;
                        if (!i0t) {
                            return;
                        }
                        I3t = "";
                        if (O3t < 0) {
                            I3t = 147.65 === ("7670" - 0, 8401) ? (6.43e3, ![]) : "-";
                            O3t = Math.abs(O3t);
                        }
                        A3t = Math.floor(Math.round(O3t / i0t.resolution) * i0t.resolution);
                        E3t = Math.round((O3t - A3t) / i0t.resolution);
                        N3t = Math.floor(E3t);
                        J29.T3k(171);
                        var q81 = J29.j3k(5, 75, 10, 17, 10);
                        J29.L3k(13);
                        var N81 = J29.v3k(4187, 1, 7);
                        J29.L3k(106);
                        var E81 = J29.j3k(108420, 13345, 5, 5);
                        J29.L3k(172);
                        var Q81 = J29.v3k(394, 18, 14, 120, 7);
                        J29.T3k(1);
                        var t81 = J29.j3k(2618, 8);
                        J29.L3k(1);
                        var U81 = J29.v3k(5185, 5);
                        J29.X19();
                        J29.L3k(2);
                        var T81 = J29.v3k(20, 9, 12);
                        return I3t + A3t + i0t.formatter + (N3t < q81 ? "0" : "") + N3t + (E3t - N3t >= 0.5 ? ((816.69, 179.78) == (N81, E81) ? Q81 : (t81, "356" ^ 0) >= U81 ? ("617.89" * T81, "g") : "+") : "");
                    };
                }
            } else {
                if (c0t.originalPriceFormatter) {
                    c0t.priceFormatter = c0t.originalPriceFormatter.func;
                    c0t.originalPriceFormatter = null;
                }
            }
        }
        S3t = this.colorOrStyle(c0t.textStyle || "stx_yaxis");
        Y3t = this.highlightedDraggable;
        P3t = 0;
        if (Y3t && this.yaxisMatches(Y3t, c0t)) {
            P3t = 0.15;
        } else if (c0t.highlight) {
            P3t = 0.1;
        }
        if (P3t) {
            K3t = S3t.constructor == String ? S3t : S3t.color;
            c0t.setBackground(this, { color: K3t, opacity: P3t });
        }
        if (c0t.pretty) {
            return this.drawYAxisPretty(f0t, Q0t);
        }
        if (this.runPrepend("drawYAxis", arguments)) {
            return;
        }
        if (!Q0t.noDraw && !c0t.noDraw) {
            R0t = c0t.yAxisPlotter;
            if (!R0t || !Q0t.noChange) {
                x7T = "stx_grid_bord";
                x7T += "er";
                R7T = "g";
                R7T += "r";
                R7T += "i";
                R7T += "d";
                R0t = c0t.yAxisPlotter = new Y0t.Plotter();
                C0t = f0t.chart;
                s3t = f0t.name == C0t.name && c0t.name === f0t.yAxis.name;
                if (!c0t.priceTick) {
                    return;
                }
                l3t = c0t.shadow;
                L0t = Q0t.range;
                if (L0t) {
                    J29.L3k(4);
                    var S81 = J29.j3k(7, 6);
                    l3t = L0t[S81] - L0t[+"0"];
                }
                p3t = l3t / c0t.priceTick;
                p3t = Math.round(p3t);
                if (c0t.semiLog) {
                    V3t = Math.log(this.valueFromPixel(c0t.flipped ? c0t.top : c0t.bottom, f0t)) / Math.LN10;
                    e3t = (c0t.logHigh - c0t.logLow) / p3t;
                }
                R0t.newSeries(R7T, "stroke", this.canvasStyle("stx_grid"));
                R0t.newSeries("text", "fill", S3t);
                R0t.newSeries("border", "stroke", this.canvasStyle(x7T));
                g0t = +"0";
                D3t = L0t ? L0t[1] : c0t.high;
                F3t = L0t ? L0t[0] : c0t.low;
                d0t = c0t.displayBorder === null ? C0t.panel.yAxis.displayBorder : c0t.displayBorder;
                if (this.axisBorders === !!"") {
                    d0t = ![];
                }
                if (this.axisBorders === !!{}) {
                    d0t = !![];
                }
                r3t = C0t.dynamicYAxis;
                Z3t = r3t ? c0t.width : NaN;
                k3t = this.getYAxisCurrentPosition(c0t, f0t);
                if (k3t == "left") {
                    j3t = c0t.left + c0t.width;
                } else {
                    j3t = c0t.left;
                }
                o3t = Math.round(j3t) + 0.5;
                X0t = d0t ? +"3" : 0;
                if (k3t == "left") {
                    X0t = d0t ? -("3" ^ 0) : 0;
                }
                if (s3t) {
                    if (c0t.shadow < +"1") {
                        J29.T3k(91);
                        var D81 = J29.j3k(11, 60, 15, 1295, 2);
                        J29.T3k(134);
                        var v81 = J29.v3k(4, 2, 2, 0);
                        g0t = (parseInt(F3t / c0t.priceTick, D81) + v81) * c0t.priceTick - F3t;
                    } else {
                        g0t = c0t.priceTick - Math.round((F3t % c0t.priceTick) * f0t.chart.roundit) / f0t.chart.roundit;
                    }
                } else {
                    g0t = D3t % c0t.priceTick;
                }
                H3t = this.getCanvasFontSize("stx_yaxis");
                for (var B0t = 0; B0t < p3t; B0t++) {
                    if (c0t.semiLog) {
                        J29.T3k(146);
                        u3t = J29.v3k(B0t, e3t, V3t);
                        G0t = Math.pow(10, u3t);
                    } else {
                        if (s3t) {
                            G0t = F3t + B0t * c0t.priceTick + g0t;
                        } else {
                            G0t = D3t - B0t * c0t.priceTick - g0t;
                        }
                    }
                    J3t = this.pixelFromTransformedValue(G0t, f0t, c0t);
                    q0t = Math.round(J3t) + +"0.5";
                    if (q0t + H3t / ("2" >> 862955872) > f0t.bottom) continue;
                    if (q0t - H3t / 2 < f0t.top) continue;
                    if (Math.abs(q0t - c0t.bottom) < 1) continue;
                    if (c0t.flipped) {
                        q0t = c0t.top + c0t.bottom - q0t;
                    }
                    if (c0t.displayGridLines) {
                        R0t.moveTo("grid", f0t.left + 1, q0t);
                        R0t.lineTo("grid", f0t.right - 1, q0t);
                    }
                    if (d0t) {
                        A7T = "borde";
                        A7T += "r";
                        J29.T3k(1);
                        R0t.moveTo(A7T, J29.j3k(o3t, 0.5), q0t);
                        J29.T3k(6);
                        R0t.lineTo("border", J29.v3k(o3t, X0t), q0t);
                    }
                    if (c0t.priceFormatter) {
                        G0t = c0t.priceFormatter(this, f0t, G0t);
                    } else {
                        G0t = this.formatYAxisPrice(G0t, f0t, null, c0t);
                    }
                    b3t = c0t.textBackground ? this.containerColor : null;
                    T3t = +"3";
                    J29.T3k(56);
                    a3t = J29.j3k(T3t, j3t, X0t);
                    if (k3t == "left") {
                        a3t = c0t.left + T3t;
                        if (c0t.justifyRight !== !"1") {
                            a3t = c0t.left + c0t.width + X0t - T3t;
                        }
                    } else {
                        if (c0t.justifyRight) {
                            a3t = j3t + c0t.width;
                        }
                    }
                    R0t.addText("text", G0t, a3t, q0t, b3t, null, H3t);
                    if (r3t) {
                        Z3t = Math.max(Z3t, C0t.context.measureText(G0t).width + Math.abs(X0t) + T3t);
                    }
                }
                if (d0t) {
                    I7T = "b";
                    I7T += "o";
                    I7T += "r";
                    I7T += "der";
                    U3t = Math.round(c0t.bottom) + +"0.5";
                    R0t.moveTo("border", o3t, c0t.top);
                    R0t.lineTo("border", o3t, U3t);
                    R0t.draw(this.getBackgroundCanvas(C0t).context, I7T);
                }
                if (r3t && Z3t > c0t.width) {
                    c0t._dynamicWidth = Z3t;
                    this.calculateYAxisPositions();
                    throw new Error("reboot draw");
                } else if (!r3t && c0t._dynamicWidth) {
                    this.resetDynamicYAxis({ chartName: C0t.name });
                    throw new Error("reboot draw");
                }
            }
            if (c0t == f0t.yAxis) {
                this.plotYAxisGrid(f0t);
            }
        }
        this.runAppend(M7T, arguments);
    };
    Y0t.ChartEngine.prototype.drawYAxisPretty = function (h3t, v3t) {
        var W29 = R1aa;
        var d7T,
            t3t,
            y3t,
            L7T,
            P7T,
            m7T,
            n3t,
            k5t,
            i3t,
            V5t,
            Q3t,
            e5t,
            H5t,
            R3t,
            L3t,
            C3t,
            d3t,
            j5t,
            g3t,
            q3t,
            X3t,
            Y5t,
            s5t,
            f3t,
            B3t,
            S5t,
            W3t,
            r5t,
            l5t,
            K5t,
            m3t,
            u5t,
            G3t,
            w3t,
            P5t,
            Z5t,
            o5t,
            J7T,
            g7T,
            x3t,
            T5t,
            c3t,
            j7T,
            O7T,
            J5t,
            a5t,
            F5t,
            b5t,
            G7T,
            F7T,
            U5t,
            q7T;
        d7T = "draw";
        d7T += "Y";
        d7T += "Axi";
        d7T += "s";
        if (this.runPrepend(d7T, arguments)) {
            return;
        }
        if (!v3t) {
            v3t = {};
        }
        t3t = v3t.yAxis ? v3t.yAxis : h3t.yAxis;
        if (h3t.hidden || t3t.noDraw || !t3t.width) {
            return;
        }
        if (!v3t.noDraw) {
            y3t = t3t.yAxisPlotter;
            if (!y3t || !v3t.noChange) {
                L7T = "stx_";
                L7T += "yaxi";
                L7T += "s";
                P7T = "le";
                P7T += "ft";
                m7T = "fi";
                m7T += "l";
                m7T += "l";
                y3t = t3t.yAxisPlotter = new Y0t.Plotter();
                n3t = h3t.chart;
                if (!t3t.priceTick) {
                    return;
                }
                if (isNaN(t3t.high) || isNaN(t3t.low)) {
                    return;
                }
                k5t = t3t.shadow;
                if (v3t.range) {
                    W29.L3k(82);
                    var V81 = W29.v3k(19, 6, 14, 0);
                    k5t = v3t.range[V81] - v3t.range[+"0"];
                }
                i3t = t3t.height / t3t.idealTickSizePixels;
                i3t = Math.round(i3t);
                V5t = t3t.textStyle || "stx_yaxis";
                y3t.newSeries("grid", "stroke", this.canvasStyle("stx_grid"));
                y3t.newSeries("text", m7T, this.colorOrStyle(V5t));
                y3t.newSeries("border", "stroke", this.canvasStyle("stx_grid_border"));
                Q3t = v3t.range;
                e5t = Q3t ? Q3t[1] : t3t.high;
                H5t = Q3t ? Q3t[0] : t3t.low;
                R3t = t3t.displayBorder === null ? n3t.panel.yAxis.displayBorder : t3t.displayBorder;
                if (this.axisBorders === !1) {
                    R3t = ![];
                }
                if (this.axisBorders === !!1) {
                    R3t = !"";
                }
                C3t = n3t.dynamicYAxis;
                d3t = C3t ? t3t.width : NaN;
                j5t = this.getYAxisCurrentPosition(t3t, h3t);
                if (j5t == "left") {
                    L3t = t3t.left + t3t.width;
                } else {
                    L3t = t3t.left;
                }
                g3t = Math.round(L3t) + +"0.5";
                q3t = R3t ? 3 : 0;
                if (j5t == P7T) {
                    q3t = R3t ? -3 : "0" & 2147483647;
                }
                X3t = this.getCanvasFontSize(L7T);
                Y5t = t3t.increments;
                s5t = Y5t.length;
                f3t = +"0";
                B3t = +"1";
                S5t = 0;
                W3t = 0;
                r5t = 0;
                l5t = Number.MAX_VALUE;
                for (var D5t = 0; D5t < 100; D5t++) {
                    W29.T3k(173);
                    var r81 = W29.v3k(14, 16, 21, 9);
                    S5t = Y5t[f3t] * Math.pow(r81, r5t);
                    W29.T3k(32);
                    B3t = Math.floor(W29.v3k(S5t, k5t));
                    W29.T3k(1);
                    K5t = Math.abs(W29.j3k(i3t, B3t));
                    if (K5t > l5t) {
                        break;
                    } else {
                        l5t = K5t;
                    }
                    if (B3t == i3t) {
                        W3t = S5t;
                        break;
                    } else if (B3t > i3t) {
                        f3t++;
                        if (f3t >= s5t) {
                            f3t = 0;
                            r5t++;
                        }
                    } else {
                        f3t--;
                        if (f3t < 0) {
                            W29.L3k(1);
                            f3t = W29.j3k(s5t, 1);
                            r5t--;
                        }
                    }
                    W3t = S5t;
                }
                m3t = Math.ceil(H5t / W3t) * W3t;
                u5t = t3t.bottom - this.pixelFromTransformedValue(m3t, h3t, t3t);
                G3t = 0;
                if (u5t > t3t.idealTickSizePixels && t3t.semiLog && t3t.prettySemiLog) {
                    w3t = Math.ceil(H5t);
                    P5t = 0;
                    while (m3t - w3t >= +"10000" && P5t <= "15" - 0) {
                        m3t /= 10;
                        w3t /= 10;
                        P5t++;
                    }
                    m3t = Math.ceil(m3t);
                    w3t = Math.ceil(w3t);
                    for (w3t; w3t < m3t && m3t % w3t !== 0; ++w3t) {}
                    m3t *= Math.pow(10, P5t);
                    w3t *= Math.pow(10, P5t);
                    if (w3t < m3t) {
                        if (m3t === W3t) {
                            W3t = w3t;
                            G3t = w3t;
                        }
                        m3t = w3t;
                    }
                }
                if (t3t.height > t3t.zoom) {
                    W29.L3k(19);
                    Z5t = W29.v3k("0", 1);
                    o5t = Number.MAX_VALUE;
                    n3t.context.save();
                    this.canvasFont("stx_yaxis", n3t.context);
                    for (var p5t = 0; p5t < 100; p5t++) {
                        J7T = "te";
                        J7T += "xt";
                        g7T = "l";
                        g7T += "e";
                        g7T += "f";
                        g7T += "t";
                        W29.T3k(146);
                        x3t = W29.v3k(Z5t, W3t, m3t);
                        if (x3t > e5t) break;
                        W3t += G3t;
                        Z5t++;
                        T5t = this.pixelFromTransformedValue(x3t, h3t, t3t);
                        if (o5t - T5t < X3t + 1 && G3t > 0) {
                            p5t = Z5t = +"0";
                            o5t = Number.MAX_VALUE;
                            W3t = G3t;
                            G3t *= 2;
                            y3t.reset();
                            continue;
                        }
                        o5t = T5t;
                        c3t = Math.round(T5t) + 0.5;
                        if (c3t + X3t / 2 > h3t.bottom) continue;
                        if (c3t - X3t / +"2" < h3t.top) continue;
                        if (Math.abs(c3t - t3t.bottom) < 1) continue;
                        if (t3t.displayGridLines) {
                            j7T = "gr";
                            j7T += "id";
                            y3t.moveTo(j7T, h3t.left + 1, c3t);
                            y3t.lineTo("grid", h3t.right - 1, c3t);
                        }
                        if (R3t) {
                            O7T = "bo";
                            O7T += "r";
                            O7T += "de";
                            O7T += "r";
                            W29.L3k(1);
                            y3t.moveTo(O7T, W29.v3k(g3t, 0.5), c3t);
                            W29.L3k(6);
                            y3t.lineTo("border", W29.v3k(g3t, q3t), c3t);
                        }
                        if (t3t.priceFormatter) {
                            x3t = t3t.priceFormatter(this, h3t, x3t);
                        } else {
                            x3t = this.formatYAxisPrice(x3t, h3t, null, t3t);
                        }
                        J5t = t3t.textBackground ? this.containerColor : null;
                        a5t = 3;
                        W29.L3k(56);
                        F5t = W29.v3k(a5t, L3t, q3t);
                        if (j5t == g7T) {
                            W29.T3k(8);
                            var z81 = W29.v3k(42, 56, 17);
                            F5t = t3t.left + z81;
                            if (t3t.justifyRight !== ![]) {
                                F5t = t3t.left + t3t.width + q3t - a5t;
                            }
                        } else {
                            if (t3t.justifyRight) {
                                F5t = L3t + t3t.width;
                            }
                        }
                        y3t.addText(J7T, x3t, F5t, c3t, J5t, null, X3t);
                        if (C3t) {
                            W29.L3k(6);
                            b5t = W29.v3k(x3t, ("537" | 16) <= (6320, "2863" & 2147483647) ? "\xA0" : 0x1108);
                            d3t = Math.max(d3t, n3t.context.measureText(b5t).width + Math.abs(q3t) + a5t);
                        }
                    }
                    n3t.context.restore();
                    if (p5t >= 100) {
                        G7T = "drawYAxisPret";
                        G7T += "ty: assertion error. zz reached 100";
                        console.log(G7T);
                    }
                }
                if (R3t) {
                    F7T = "b";
                    F7T += "o";
                    F7T += "rder";
                    U5t = Math.round(t3t.bottom) + 0.5;
                    y3t.moveTo("border", g3t, t3t.top);
                    y3t.lineTo(F7T, g3t, U5t);
                    y3t.draw(this.getBackgroundCanvas(n3t).context, "border");
                }
                if (C3t && d3t > t3t.width) {
                    q7T = "r";
                    q7T += "eb";
                    q7T += "oot ";
                    q7T += "draw";
                    t3t._dynamicWidth = d3t;
                    this.calculateYAxisPositions();
                    throw new Error(q7T);
                } else if (!C3t && t3t._dynamicWidth) {
                    this.resetDynamicYAxis({ chartName: n3t.name });
                    throw new Error("reboot draw");
                }
            }
            if (t3t == h3t.yAxis) {
                this.plotYAxisGrid(h3t);
            }
        }
        this.runAppend("drawYAxis", arguments);
    };
};
I7w = {};
A7w(I7w);
E7w(I7w);
z7w(I7w);
M7w(I7w);
t7w(I7w);
y7w(I7w);
R1aa.K19();
h7w(I7w);
w7w(I7w);
m7w(I7w);
v7w(I7w);
W7w(I7w);
n7w(I7w);
x7w(I7w);
c7w(I7w);
f7w(I7w);
R7w(I7w);
i7w(I7w);
q7w(I7w);
G7w(I7w);
Q7w(I7w);
L7w(I7w);
C7w(I7w);
d7w(I7w);
g7w(I7w);
X7w(I7w);
B7w(I7w);
S9L(I7w);
P9L(I7w);
p9L(I7w);
F9L(I7w);
j9L(I7w);
r9L(I7w);
Z9L(I7w);
o9L(I7w);
T9L(I7w);
a9L(I7w);
k9L(I7w);
var { CIQ: H9L, SplinePlotter: Y9L, timezoneJS: s9L, $$: l9L, $$$: D9L } = I7w;
export { H9L as CIQ, Y9L as SplinePlotter, s9L as timezoneJS, l9L as $$, D9L as $$$ }; /* eslint-enable */ /*
																											 * jshint
																											 * ignore:end
																											 */ /*
																																		 * ignore
																																		 * jslint
																																		 * end
																																		 */
