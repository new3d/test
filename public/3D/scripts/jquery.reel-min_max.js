jQuery.reel || function (e, t, n, r) {

function showObj(obj){
  for (prop in obj) {
    alert(prop + ' = ' + obj[prop]);
  }
}
                                            
    function i(e) {
        return E.instances.push(e[0]) && e
    }

    function s(e) {
        return (E.instances = E.instances.not(g(e.attr(un)))) && e
    }

    function o(e) {
        return E.instances.first().data(e)
    }

    function u(e) {
        return "data:image/gif;base64,R0lGODlh" + e
    }

    function a(e) {
        return "<" + e + "/>"
    }

    function f(e) {
        return "." + (e || "")
    }

    function l(e) {
        return e.replace(tn, E.cdn)
    }

    function c(e) {
        return "url('" + b(e) + "')"
    }

    function h(e, t) {
        return typeof t == cn ? t[e] : t
    }

    function p(e, t, n) {
        return U(e, R(t, n))
    }

    function d(e, t) {
        return z(e) * (t ? -1 : 1)
    }

    function v(e) {
        return bn ? e.touch || e.originalEvent.touches[0] : e
    }

    function m(e) {
        return e === r ? 0 : typeof e == pn ? e : e + "px"
    }

    function g(e) {
        return "#" + e
    }

    function y(e, t, n) {
        for (; e.length < t;) e = n + e;
        return e
    }

    function b(e) {
        return encodeURI(decodeURI(e))
    }

    function w(e) {
        try {
            console.warn("Deprecation - Please consult https://github.com/pisi/Reel/wiki/Deprecations")
        } catch (t) {}
        return e
    }
    if (!(!e || +e().jquery.replace(".", Qt).substr(0, 2) < 15)) {
        var E = e.reel = {
            version: "1.2-devel",
            def: {
                frame: 1,
                frames: 36,
                loops: true,
                clickfree: false,
                draggable: true,
                scrollable: true,
                steppable: true,
                throwable: true,
                wheelable: true,
                cw: false,
                revolution: r,
                stitched: 0,
                directional: false,
                row: 1,
                rows: 0,
                orbital: 0,
                vertical: false,
                inversed: false,
                footage: 6,
                spacing: 0,
                horizontal: true,
                suffix: "-reel",
                image: r,
                images: "",
                path: "",
                preload: "fidelity",
                speed: 0,
                delay: 0,
                timeout: 2,
                rebound: .5,
                entry: r,
                opening: 0,
                brake: .23,
                velocity: 0,
                tempo: 36,
                laziness: 6,
                cursor: r,
                hint: "",
                indicator: 0,
                klass: "",
                preloader: 4,
                area: r,
                attr: {},
                annotations: r,
                graph: r,
                monitor: r,
                step: r,
                steps: r,
                modelsCnt:1,
                existModelsCnt:1,
                suff:""
            },
            fn: {
                reel: function () {
                    var n = arguments,
                        u = e(this),
                        p = u.data(),
                        y = n[0] || {}, x = n[1];
                    if (typeof y == "object") {
                        var T = e.extend({}, E.def, y);
                        n = u.filter(an).unreel().filter(function () {
                            var t = e(this),
                                n = T.attr,
                                r = n.src || t.attr("src"),
                                i = n.width || t.width();
                            t = n.height || t.height();
                            if (r && i && t) return true
                        });
                        var N = [];
                        T.step && (T.frame = T.step);
                        T.steps && (T.frames = T.steps);
                        n.each(function () {
                            var n = e(this),
                                u = function (e, t) {
                                    return n.reel(e, t) && t
                                }, p = function (e) {
                                    return n.reel(e)
                                }, y = {
                                    setup: function () {
                                        if (!n.hasClass(k)) {
                                            u(gt, T);
                                            var t = n.attr(T.attr).attr("src"),
                                                r = u(un, n.attr(un) || n.attr(un, k + "-" + +(new Date)).attr(un)),
                                                s = n.attr(_t),
                                                o = e.extend({}, n.data()),
                                                l = T.images,
                                                c = T.stitched,
                                                v = T.loops,
                                                m = T.orbital,
                                                b = T.revolution,
                                                w = T.rows,
                                                x = T.footage,
                                                C = E.re.sequence.exec(l);
                                            l = u(pt, C ? E.sequence(C, T, p) : l || []);
                                            C = {
                                                x: n.width(),
                                                y: n.height()
                                            };
                                            var A = u(ft, m && x || w <= 1 && l.length || T.frames),
                                                O = w > 1 || m;
                                            u(St, h("x", b) || c / 2 || C.x * 2);
                                            u(xt, !O ? 0 : h("y", b) || (w > 3 ? C.y : C.y / (5 - w)));
                                            w = c ? 1 : q(A / x);
                                            r = g(r + T.suffix);
                                            b = n[0].className || Qt;
                                            x = e(a(nn), {
                                                id: r.substr(1),
                                                "class": b + Gt + L + T.suff + Gt + B + "0" + T.suff 
                                            });
                                            x = n.wrap(x.addClass(T.klass)).attr({
                                                "class": k + T.suff
                                            });
                                            N.push(i(x)[0]);
                                            x = x.parent().bind(y.instance);
                                            u(ht, l.length ? Qt : T.image || t.replace(E.re.image, "$1" + T.suffix + ".$2"));
                                            u(Z, []);
                                            u(Ct, T.spacing);
                                            u(Nt, w);
                                            u(ot, C);
                                            u(G, 1 / (A - (v && !c ? 0 : 1)));
                                            u(Ot, c - (v ? 0 : C.x));
                                            u(At, 0);
                                            u(Lt, r);
                                            u(Q, u(kt, T.speed) < 0);
                                            u(Ht, 0);
                                            u(Bt, T.vertical);
                                            u(bt, 0);
                                            u(st, d(1, !T.cw && !c));
                                            u(nt, {});
                                            u(tt, false);
                                            u(rt, u(it, 0));
                                            u(mt, u(lt, 0));
                                            u(wt, false);
                                            u(Et, false);
                                            u(dt, false);
                                            u(Y, T.brake);
                                            u(et, !! m);
                                            u(Dt, T.tempo / (E.lazy ? T.laziness : 1));
                                            u(vt, -1);
                                            u(V, T.annotations || x.unbind(f(V)) && {});
                                            u(K, {
                                                src: t,
                                                classes: b,
                                                style: s || Qt,
                                                data: o
                                            });
                                            T.steppable || x.unbind("up.steppable");
                                            T.indicator || x.unbind(".indicator");
                                            kn(Qt, {
                                                width: C.x,
                                                height: C.y,
                                                overflow: ct,
                                                position: "relative"
                                            });
                                            kn(Yt + Gt + f(k), {
                                                display: en
                                            });
                                            S.bind(y.pool);
                                            n.trigger("setup")
                                        }
                                    },
                                    instance: {
                                        teardown: function () {
                                            var e = n.data(K);
                                            n.parent().unbind(y.instance);
                                            p(_t).remove();
                                            p($).unbind(jt);
                                            s(n.unbind(jt).removeData().siblings().unbind(jt).remove().end().attr({
                                                "class": e.classes,
                                                src: e.src,
                                                style: e.style
                                            }).data(e.data).unwrap());
                                            Mn();
                                            S.unbind(y.pool);
                                            Bn.unbind(Ft)
                                        },
                                        setup: function () {
                                            function t(e) {
                                                return n.trigger("down", [v(e).clientX, v(e).clientY, e]) && e.give
                                            }

                                            function i(e, t) {
                                                return !t || n.trigger("wheel", [t, e]) && e.give
                                            }
                                            var s = p(ot);
                                            p(ft);
                                            n.attr(un);
                                            var o = T.rows,
                                                c = T.stitched,
                                                h = n.parent(),
                                                d = u($, e(T.area || h));
                                            o = T.rows || 1;
                                            kn(Gt + f(k), {
                                                MozUserSelect: ln,
                                                WebkitUserSelect: ln
                                            });
                                            if (bn) {
                                                kn(Gt + f(k), {
                                                    WebkitBackgroundSize: p(pt).length ? !c ? r : m(c) + Gt + m(s.y) : c && m(c) + Gt + m((s.y + T.spacing) * o - T.spacing) || m(s.x * T.footage) + Gt + m(s.y * p(Nt) * o * (T.directional ? 2 : 1))
                                                });
                                                d.bind(Jt, t)
                                            } else {
                                                c = T.cursor;
                                                s = c == rn ? gn : c || mn;
                                                c = c == rn ? yn + Gt + "!important" : r;
                                                kn(Qt, {
                                                    cursor: l(s)
                                                });
                                                kn(f(H), {
                                                    cursor: "wait"
                                                });
                                                kn(f(P) + Yt + f(P) + " *", {
                                                    cursor: l(c || s)
                                                }, true);
                                                d.bind(T.wheelable ? Wt : null, i).bind(T.clickfree ? qt : It, t).bind("dragstart", function () {
                                                    return false
                                                })
                                            }
                                            T.hint && d.attr("title", T.hint);
                                            T.indicator && h.append(Cn("x"));
                                            o > 1 && T.indicator && h.append(Cn("y"));
                                            T.monitor && h.append(Tn = e(a(nn), {
                                                "class": _
                                            })) && kn(Gt + f(_), {
                                                position: Zt,
                                                left: 0,
                                                top: 0
                                            });
                                            kn(Gt + f(M), {
                                                display: ln
                                            })
                                        },
                                        preload: function () {
                                            function t(e, t) {
                                                setTimeout(function () {
                                                    t.parent().length && t.attr({
                                                        src: b(e)
                                                    })
                                                }, (d - h.length) * 2)
                                            }
                                            var r = p(ot),
                                                i = n.parent(),
                                                s = p(pt),
                                                o = !s.length,
                                                f = p(ft),
                                                l = T.footage,
                                                c = E.preload[T.preload] || E.preload[E.def.preload],
                                                h = o ? [p(ht)] : c(s.slice(0), T, p),
                                                d = h.length;
                                            u(bt, o ? .5 : 0);
                                            s = [];
                                            i.addClass(H).append(Nn());
                                            u(_t, e("<" + _t + ' type="text/css">' + kn.rules.join("\n") + "</" + _t + ">").prependTo(sn));
                                            for (n.trigger("stop"); h.length;) {
                                                c = T.path + h.shift();
                                                var v = r.x * (!o ? 1 : l),
                                                    m = r.y * (!o ? 1 : f / l) * (!T.directional ? 1 : 2);
                                                v = e(a(an)).attr({
                                                    "class": M + T.suff,
                                                    width: v,
                                                    height: m
                                                }).appendTo(i);
                                                v.bind("load error abort", function () {
                                                    return !!e(this).parent().length && n.trigger("preloaded") && false
                                                });
                                                t(c, v);
                                                s.push(c)
                                            }
                                            u(Z, s)
                                        },
                                        preloaded: function () {
                                            var e = p(pt).length || 1,
                                                t = u(bt, R(p(bt) + 1, e));
                                            if (t === e) {
                                                n.parent().removeClass(H).unbind(bt, y.instance.preloaded);
                                                n.trigger("loaded")
                                            }
                                            t === 1 && n.trigger("frameChange", [r, p(at)])
                                        },
                                        loaded: function () {
                                            p(pt).length > 1 || n.css({
                                                backgroundImage: c(T.path + p(ht))
                                            }).attr({
                                                src: l(vn)
                                            });
                                            T.stitched && n.attr({
                                                src: l(vn)
                                            });
                                            p(Et) || u(Ht, T.velocity || 0)
                                        },
                                        opening: function () {
                                            if (!T.opening) return n.trigger("openingDone");
                                            u(dt, true);
                                            u(Mt, !p(kt));
                                            var e = T.entry || T.speed,
                                                t = p(ut),
                                                r = T.opening;
                                            u(ut, t - e * r);
                                            u(vt, q(r * o(Dt)))
                                        },
                                        openingDone: function () {
                                            u(yt, false);
                                            u(dt, false);
                                            var e = Xt + f(dt);
                                            S.unbind(e, y.pool[e]);
                                            if (T.delay > 0) xn = setTimeout(function () {
                                                n.trigger("play")
                                            }, T.delay * 1e3);
                                            else n.trigger("play")
                                        },
                                        play: function (e, t) {
                                            t = u(kt, t || p(kt));
                                            u(Q, t < 0);
                                            e = u(yt, !! t);
                                            u(Mt, !e);
                                            tn()
                                        },
                                        pause: function () {
                                            fn()
                                        },
                                        stop: function () {
                                            var e = u(Mt, true);
                                            u(yt, !e)
                                        },
                                        down: function (t, r, i, s) {
                                            function o(e) {
                                                return n.trigger("pan", [v(e).clientX, v(e).clientY, e]) && e.give
                                            }

                                            function a(e) {
                                                return n.trigger("up", [e]) && e.give
                                            }
                                            
                                            if (!(s && s.button != wn && !T.clickfree))
                                                if (T.draggable) {
                                                    u(tt, p(at));
                                                    t = T.clickfree;
                                                    u(Ht, 0);
                                                    An = Pn(p(St), r, i);
                                                    bn || s && s.preventDefault();
                                                    fn();
                                                    Mn();
                                                    En = false;
                                                    e(on, Bn).addClass(P + T.suff);
                                                    bn ? Bn.bind(Kt, o).bind($t + Gt + Vt, a) : (t ? p($) : Bn).bind(Ut, o).bind(t ? Rt : zt, a)
                                                }
                                            for(jjj=1; jjj<=T.existModelsCnt; jjj++)
                                            {
                                              jQuery('#myImage-'+jjj).trigger('play');
                                              jQuery('#myImage-'+jjj).trigger('stop');
                                            }
                                        },
                                        up: function () {
                                            u(tt, false);
                                            u(wt, false);
                                            var t = T.throwable,
                                                n = z(_n[0] + _n[1]) / 60;
                                            U = u(Ht, !t ? 0 : t === true ? n : R(t, n)) ? 1 : 0;
                                            fn();
                                            Mn();
                                            e(on, Bn).removeClass(P + T.suff);
                                            (T.clickfree ? p($) : Bn).unbind(Ft)
                                        },
                                        pan: function (e, t, n, r) {
                                            if (T.draggable && Hn) {
                                                Hn = false;
                                                fn();
                                                var i = T.rows,
                                                    s = T.orbital;
                                                e = bn && !p(wt) && i <= 1 && !s && T.scrollable;
                                                var o = {
                                                    x: t - An.x,
                                                    y: n - An.y
                                                };
                                                if (r && e && z(o.x) < z(o.y)) return r.give = true;
                                                if (z(o.x) > 0 || z(o.y) > 0) {
                                                    r && (r.give = false);
                                                    En = true;
                                                    An = {
                                                        x: t,
                                                        y: n
                                                    };
                                                    r = p(St);
                                                    e = p(nt);
                                                    var a = p(Bt),
                                                        f = u(ut, Dn(a ? n - e.y : t - e.x, p(rt), r, p(mt), p(lt), p(st), a ? n - e.y : t - e.x));
                                                    u(wt, p(wt) || p(at) != p(tt));
                                                    (o = On(a ? o.y : o.x || 0)) && u(Q, o < 0);
                                                    if (s && p(et)) {
                                                        u(Bt, z(n - e.y) > z(t - e.x));
                                                        e = Pn(r, t, n)
                                                    }
                                                    if (i > 1) {
                                                        p(ot);
                                                        i = p(xt);
                                                        s = p(it);
                                                        o = -s * i;
                                                        u(Pt, E.math.envelope(n - e.y, s, i, o, o + i, -1))
                                                    }!(f % 1) && !T.loops && Pn(r, t, n)
                                                }
                                            }
                                        },
                                        wheel: function (e, t, r) {
                                            if (t) {
                                                Sn = true;
                                                e = q(j.sqrt(z(t)) / 2);
                                                e = d(e, t > 0);
                                                t = .0833 * p(St);
                                                Pn(t);
                                                e && u(Q, e < 0);
                                                u(Ht, 0);
                                                u(ut, Dn(e, p(rt), t, p(mt), p(lt), p(st)));
                                                r && r.preventDefault();
                                                r && (r.give = false);
                                                fn();
                                                n.trigger("up", [r])
                                            }
                                        },
                                        fractionChange: function (e, t, n) {
                                            if (t !== r) return w(u(ut, t));
                                            e = 1 + I(n / p(G));
                                            t = T.rows > 1;
                                            n = T.orbital;
                                            u(et, !! n && (e <= n || e >= T.footage - n + 2));
                                            if (t) e += (p(Tt) - 1) * p(ft);
                                            u(at, e)
                                        },
                                        tierChange: function (e, t, n) {
                                            if (t === r) {
                                                e = u(Tt, F(X(n, 1, T.rows)));
                                                t = p(ft);
                                                n = p(at) % t || t;
                                                u(at, n + e * t - t)
                                            }
                                        },
                                        rowChange: function (e, t, n) {
                                            if (t !== r) return u(Tt, t);
                                            u(Pt, 1 / (T.rows - 1) * (n - 1))
                                        },
                                        frameChange: function (e, t, i) {
                                            if (t !== r) return w(u(at, t));
                                            this.className = this.className.replace(E.re.frame_klass, B + i);
                                            var s = p(ft);
                                            t = T.rows;
                                            e = T.path;
                                            var o = i % s || s,
                                                a = !! p(bt),
                                                f = ((i - o) / s + 1 - 1) / (t - 1),
                                                l = F(X(f, 1, t)),
                                                h = p(Tt);
                                            a && l === h ? p(Pt) : u(Pt, f);
                                            o = R((o - 1) / (s - 1), .9999);
                                            f = h * s - s;
                                            s = F(X(o, f + 1, f + s));
                                            f = z((p(ut) || 0) - o) < 1 / (p(ft) - 1);
                                            a && s === i && f ? p(ut) : u(ut, o);
                                            var d = T.footage;
                                            if (T.orbital && p(Bt)) {
                                                i = T.inversed ? d + 1 - i : i;
                                                i += d
                                            }
                                            f = T.horizontal;
                                            var v = T.stitched;
                                            s = p(pt);
                                            var g = !s.length || T.stitched;
                                            l = p(Ct);
                                            var y = p(ot);
                                            if (g) {
                                                if (v) {
                                                    i = u(At, F(X(o, 0, p(Ot))) % v);
                                                    t = t <= 1 ? 0 : (y.y + l) * (t - h);
                                                    i = [m(-i), m(-t)];
                                                    (t = s.length > 1 && s[h - 1]) && n.css("backgroundImage").search(e + t) < 0 && n.css({
                                                        backgroundImage: c(e + t)
                                                    })
                                                } else {
                                                    e = i % d - 1;
                                                    e = e < 0 ? d - 1 : e;
                                                    i = I((i - .1) / d);
                                                    i += t > 1 ? 0 : p(Q) ? 0 : p(Nt);
                                                    i = i * ((f ? y.y : y.x) + l);
                                                    e = e * ((f ? y.x : y.y) + l);
                                                    i = s.length ? [0, 0] : f ? [m(-e), m(-i)] : [m(-i), m(-e)]
                                                }
                                                n.css({
                                                    backgroundPosition: i.join(Gt)
                                                })
                                            } else {
                                                i = s[i - 1];
                                                a && n.attr({
                                                    src: b(e + i)
                                                })
                                            }
                                        },
                                        "fractionChange.indicator": function (e, t, n) {
                                            if (t === r && T.indicator) {
                                                t = p(ot);
                                                e = T.indicator;
                                                var i = T.orbital;
                                                t = i && p(Bt) ? t.y : t.x;
                                                i = i ? T.footage : T.images.length || p(ft);
                                                i = q(t / i);
                                                t -= i;
                                                n = F(X(n, 0, t));
                                                n = !T.cw || T.stitched ? n : t - n;
                                                Cn.$x.css(p(Bt) ? {
                                                    left: 0,
                                                    top: m(n),
                                                    bottom: J,
                                                    width: e,
                                                    height: i
                                                } : {
                                                    bottom: 0,
                                                    left: m(n),
                                                    top: J,
                                                    width: i,
                                                    height: e
                                                })
                                            }
                                        },
                                        "tierChange.indicator": function (e, t, n) {
                                            if (t === r && T.rows > 1 && T.indicator) {
                                                var i = p(ot).y;
                                                e = T.indicator;
                                                t = q(i / T.rows);
                                                i -= t;
                                                n = F(n * i);
                                                Cn.$y.css({
                                                    left: 0,
                                                    top: n,
                                                    width: e,
                                                    height: t
                                                })
                                            }
                                        },
                                        "setup.annotations": function () {
                                            p(ot);
                                            var t = n.parent();
                                            e.each(p(V), function (n, r) {
                                                var i = typeof r.node == pn ? e(r.node) : r.node || {};
                                                i = i.jquery ? i : e(a(nn), i);
                                                i = i.attr({
                                                    id: n
                                                }).addClass(D);
                                                var s = r.image ? e(a(an), r.image) : e(),
                                                    o = r.link ? e(a("a"), r.link).click(function () {
                                                        return false
                                                    }) : e();
                                                kn(g(n), {
                                                    display: ln,
                                                    position: Zt
                                                }, true);
                                                r.image || r.link && i.append(o);
                                                r.link || r.image && i.append(s);
                                                r.link && r.image && i.append(o.append(s));
                                                i.appendTo(t)
                                            })
                                        },
                                        "frameChange.annotations": function (t, n, i) {
                                            var s = p(ot),
                                                o = T.stitched,
                                                u = p(At);
                                            p(bt) && n === r && e.each(p(V), function (t, n) {
                                                t = e(g(t));
                                                var a = n.start || 1,
                                                    f = n.end,
                                                    l = i - 1,
                                                    c = n.at ? n.at[l] == "+" : false;
                                                l = n.at ? l : l - a + 1;
                                                var h = typeof n.x != cn ? n.x : n.x[l],
                                                    p = typeof n.y != cn ? n.y : n.y[l];
                                                n = h !== r && p !== r && (n.at ? c : l >= 0 && (!f || l <= f - a));
                                                if (o) {
                                                    a = h > o - s.x && u >= 0 && u < s.x;
                                                    h = !(h < s.x && u > o - s.x) ? h : h + o;
                                                    h = !a ? h : h - o;
                                                    h -= u
                                                }
                                                h = {
                                                    display: n ? en : ln,
                                                    left: m(h),
                                                    top: m(p)
                                                };
                                                t.css(h)
                                            })
                                        },
                                        "up.annotations": function (n, r) {
                                            if (!(En || Sn)) {
                                                n = e(r.target);
                                                if(typeof n != 'undefined')
                                                {
                                                  r = n.is("a") ? n : n.parents("a");
                                                  n = r.attr("href");
                                                  if(typeof n != 'undefined')
                                                  {
                                                    r = r.attr("target") || "self";
                                                    if (n.match(/([^\s]+(?=\.(html|htm|xml|xhtml|\?iframe))\.\2)/gm)) {
                                                      jQuery("#myImage"+T.suff).trigger("stop");
                                                      jQuery.fancybox({
                                                        type: "iframe",
                                                        href: n,
                                                        showCloseButton: "true",
                                                        width: parseInt(jQuery("#firstWH"+T.suff).attr("width")),
                                                        height: parseInt(jQuery("#firstWH"+T.suff).attr("height"))
                                                      })
                                                    } else if (n.match(/([^\s]+(?=\.(jpg|gif|png|bmp|jpeg|jpe))\.\2)/gm)) {
                                                      jQuery("#myImage"+T.suff).trigger("stop");
                                                      jQuery.fancybox({
                                                        type: "image",
                                                        href: n,
                                                        showCloseButton: "true",
                                                        width: parseInt(jQuery("#myImage"+T.suff).attr("width")),
                                                        height: parseInt(jQuery("#myImage"+T.suff).attr("height"))
                                                      })
                                                    } else {
                                                      if (n) En = r == "_blank" ? !! t.open(n) : !! (t[r].location.href = n)
                                                    }
                                                  }
                                                }
                                            }
                                        },
                                        "up.steppable": function () {
                                            En || Sn || n.trigger(p(nt).x - n.offset().left > .5 * p(ot).x ? "stepLeft" : "stepRight")
                                        },
                                        "stepLeft stepRight": function () {
                                            fn()
                                        },
                                        stepLeft: function () {
                                            u(Q, false);
                                            u(ut, p(ut) - p(G) * p(st))
                                        },
                                        stepRight: function () {
                                            u(Q, true);
                                            u(ut, p(ut) + p(G) * p(st))
                                        },
                                        "setup.fu": function () {
                                            u(at, T.frame + (T.row - 1) * p(ft));
                                            n.trigger("preload")
                                        },
                                        "wheel.fu": function () {
                                            Sn = false
                                        },
                                        "clean.fu": function () {
                                            n.trigger("teardown")
                                        },
                                        "loaded.fu": function () {
                                            n.trigger("opening")
                                        }
                                    },
                                    pool: {
                                        "tick.reel.preload": function () {
                                            var e = p(ot),
                                                t = W(Nn.$.css(dn)),
                                                n = p(pt).length || 1,
                                                r = F(1 / n * p(bt) * e.x);
                                            Nn.$.css({
                                                width: t + (r - t) / 3 + 1
                                            });
                                            if (p(bt) === n && t > e.x - 1) {
                                                Nn.$.fadeOut(300, function () {
                                                    Nn.$.remove()
                                                });
                                                S.unbind(Xt + f(hn), y.pool[Xt + f(hn)])
                                            }
                                        },
                                        "tick.reel": function (e) {
                                            var t = p(Ht),
                                                n = o(Dt),
                                                r = T.monitor;
                                            if (U) {
                                                t = t - p(Y) / n * U;
                                                t = u(Ht, t > .1 ? t : U = C = 0)
                                            }
                                            r && Tn.text(p(r));
                                            t && U++;
                                            C && C++;
                                            On(0);
                                            Hn = true;
                                            if (C && !t) return x(e);
                                            if (p(tt)) return x(e, fn());
                                            if (!(p(vt) > 0)) {
                                                if (!T.loops && T.rebound) {
                                                    !C && !(p(ut) % 1) ? Ln++ : Ln = 0;
                                                    Ln >= T.rebound * 1e3 / n && u(Q, !p(Q))
                                                }
                                                e = p(st) * d(1, p(Q));
                                                t = (!p(yt) ? t : z(p(kt)) + t) / o(Dt);
                                                u(ut, p(ut) - t * e)
                                            }
                                        },
                                        "tick.reel.opening": function () {
                                            if (p(dt)) {
                                                var e = (T.entry || T.speed) / o(Dt) * (T.cw ? -1 : 1),
                                                    t = u(vt, p(vt) - 1);
                                                u(ut, p(ut) + e);
                                                t || n.trigger("openingDone")
                                            }
                                        }
                                    }
                                }, x = function (e, t) {
                                    return e.stopImmediatePropagation() || t
                                }, C, U = 0,
                                tn = function () {
                                    return C = 0
                                }, fn = function () {
                                    clearTimeout(xn);
                                    S.unbind(Xt + f(dt), y.pool[Xt + f(dt)]);
                                    u(vt, 0);
                                    u(Et, true);
                                    return C = -T.timeout * o(Dt)
                                }, En = false,
                                Sn = false,
                                xn, Tn = e(),
                                Nn = function () {
                                    var t = T.preloader;
                                    kn(Gt + f(O), {
                                        position: Zt,
                                        left: 0,
                                        top: p(ot).y - t,
                                        height: t,
                                        overflow: ct,
                                        backgroundColor: "#000"
                                    });
                                    return Nn.$ = e(a(nn), {
                                        "class": O
                                    })
                                }, Cn = function (t) {
                                    kn(Gt + f(A) + f(t), {
                                        position: Zt,
                                        width: 0,
                                        height: 0,
                                        overflow: ct,
                                        backgroundColor: "#000"
                                    });
                                    return Cn["$" + t] = e(a(nn), {
                                        "class": A + Gt + t
                                    })
                                }, kn = function (t, n, r) {
                                    function i(t) {
                                        var n = [];
                                        e.each(t, function (e, t) {
                                            n.push(e.replace(/([A-Z])/g, "-$1").toLowerCase() + ":" + m(t) + ";")
                                        });
                                        return "{" + n.join(Qt) + "}"
                                    }
                                    r = r ? Qt : p(Lt);
                                    t = t.replace(/^/, r).replace(Yt, Yt + r);
                                    return kn.rules.push(t + i(n)) && n
                                }, Ln = 0,
                                An = {
                                    x: 0,
                                    y: 0
                                }, On = function (e) {
                                    return _n.push(e) && _n.shift() && e
                                }, Mn = function () {
                                    return _n = [0, 0]
                                }, _n = Mn(),
                                Dn = T.graph || E.math[T.loops ? "hatch" : "envelope"],
                                Pn = function (e, t, n) {
                                    var i = u(rt, p(ut));
                                    u(it, p(Pt));
                                    var s = T.loops;
                                    u(mt, s ? 0 : -i * e);
                                    u(lt, s ? e : e - i * e);
                                    return t && u(nt, {
                                        x: t,
                                        y: n
                                    }) || r
                                }, Hn = true,
                                Bn = S;
                            try {
                                if (S[0] != top.document) Bn = S.add(top.document)
                            } catch (jn) {}
                            top === self ? e() : function (t) {
                                e("iframe", Bn.last()).each(function () {
                                    try {
                                        if (e(this).contents().find(sn).html() == e(sn).html()) return (t = e(this)) && false
                                    } catch (n) {}
                                });
                                return t
                            }();
                            kn.rules = [];
                            y.setup()
                        });
                        C = C || function tn() {
                            var e = +(new Date),
                                t = o(Dt);
                            if (!t) return C = null;
                            S.trigger(Xt);
                            E.cost = (+(new Date) + E.cost - e) / 2;
                            return C = setTimeout(tn, U(4, 1e3 / t - E.cost))
                        }();
                        return e(N)
                    } else if (typeof y == "string")
                        if (n.length == 1) {
                            x = p[y];
                            u.trigger("recall", [y, x]);
                            return x
                        } else {
                            if (x !== r) {
                                E.normal[y] && (x = E.normal[y](x, p));
                                if (p[y] !== x) u.trigger(y + "Change", [r, p[y] = x])
                            }
                            return u.trigger("store", [y, x])
                        }
                },
                unreel: function () {
                    return this.trigger("teardown")
                }
            },
            re: {
                image: /^(.*)\.(jpg|jpeg|png|gif)\??.*$/i,
                ua: [/(msie|opera|firefox|chrome|safari)[ \/:]([\d.]+)/i, /(webkit)\/([\d.]+)/i, /(mozilla)\/([\d.]+)/i],
                touchy_agent: /iphone|ipod|ipad|android|fennec|rim tablet/i,
                lazy_agent: /\(iphone|ipod|android|fennec|blackberry/i,
                frame_klass: /frame-\d+/,
                sequence: /(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/
            },
            cdn: "http://code.vostrel.cz/",
            math: {
                envelope: function (e, t, n, r, i, s) {
                    return t + p(r, i, -e * s) / n
                },
                hatch: function (e, t, n, r, i, s) {
                    e = (e < r ? i : 0) + e % i;
                    e = t + -e * s / n;
                    return e - I(e)
                },
                interpolate: function (e, t, n) {
                    return t + e * (n - t)
                }
            },
            preload: {
                fidelity: function (e, t, n) {
                    function r(e, n, r) {
                        function i(e) {
                            for (; !(e >= 1 && e <= f);) e += e < 1 ? +f : -f;
                            return u[r + e] || (u[r + e] = !! s.push(e))
                        }
                        if (!e.length) return [];
                        var s = [],
                            o = 4 * n,
                            a = t.frame,
                            f = e.length;
                        n = true;
                        for (var l = f / o, c = 0; c < o; c++) i(a + F(c * l));
                        for (; l > 1;) {
                            c = 0;
                            o = s.length;
                            l /= 2;
                            for (n = !n; c < o; c++) i(s[c] + (n ? 1 : -1) * F(l))
                        }
                        for (c = 0; c <= f; c++) i(c);
                        for (c = 0; c < s.length; c++) s[c] = e[s[c] - 1];
                        return s
                    }
                    var i = t.orbital,
                        s = i ? 2 : t.rows || 1,
                        o = i ? t.footage : n(ft);
                    n = (t.row - 1) * o;
                    i = [].concat(e);
                    var u = new Array(e.length + 1);
                    e = s < 2 ? [] : i.slice(n, n + o);
                    return r(e, 1, n).concat(r(i, s, 0))
                },
                linear: function (e) {
                    return e
                }
            },
            normal: {
                fraction: function (e, t) {
                    return t[gt].loops ? e - I(e) : p(0, 1, e)
                },
                tier: function (e) {
                    return p(0, 1, e)
                },
                row: function (e, t) {
                    return F(p(1, t[gt].rows, e))
                },
                frame: function (e, t) {
                    var n = t[gt];
                    t = t[ft] * (n.orbital ? 2 : n.rows || 1);
                    e = F(n.loops ? e % t || t : p(1, t, e));
                    return e < 0 ? e + t : e
                }
            },
            sequence: function (e, t) {
                if (e.length <= 1) return t.images;
                var n = [],
                    r = t.orbital,
                    i = e[1],
                    s = e[2],
                    o = +e[4] || 1,
                    u = r ? 2 : t.rows || 1;
                t = r ? t.footage : t.stitched ? 1 : t.frames;
                u = +(e[5] || u * t) - o;
                e = +e[7] || 1;
                for (t = 0; t <= u;) {
                    n.push(i.replace(s, y(o + t + Qt, s.length, "0")));
                    t += e
                }
                return n
            },
            instances: e(),
            leader: o,
            cost: 0
        }, S = e(n);
        n = navigator.userAgent;
        var x = E.re.ua[0].exec(n) || E.re.ua[1].exec(n) || E.re.ua[2].exec(n),
            T = +x[2].split(".").slice(0, 2).join(".");
        x = x[1] == "MSIE";
        var N = !(x && T < 8),
            C, k = "reel",
            L = k + "-overlay",
            A = k + "-indicator",
            O = k + "-preloader",
            M = k + "-cached",
            _ = k + "-monitor",
            D = k + "-annotation",
            P = k + "-panning",
            H = k + "-loading",
            B = "frame-",
            j = Math,
            F = j.round,
            I = j.floor,
            q = j.ceil,
            R = j.min,
            U = j.max,
            z = j.abs,
            W = parseInt,
            X = E.math.interpolate,
            V = "annotations",
            $ = "area",
            J = "auto",
            K = "backup",
            Q = "backwards",
            G = "bit",
            Y = "brake",
            Z = "cached",
            et = "center",
            tt = "clicked",
            nt = "clicked_location",
            rt = "clicked_on",
            it = "clicked_tier",
            st = "cwish",
            ot = "dimensions",
            ut = "fraction",
            at = "frame",
            ft = "frames",
            lt = "hi",
            ct = "hidden",
            ht = "image",
            pt = "images",
            dt = "opening",
            vt = dt + "_ticks",
            mt = "lo",
            gt = "options",
            yt = "playing",
            bt = "preloaded",
            wt = "reeling",
            Et = "reeled",
            St = "revolution",
            xt = "revolution_y",
            Tt = "row",
            Nt = "rows",
            Ct = "spacing",
            kt = "speed",
            Lt = "stage",
            At = "stitched_shift",
            Ot = "stitched_travel",
            Mt = "stopped",
            _t = "style",
            Dt = "tempo",
            Pt = "tier",
            Ht = "velocity",
            Bt = "vertical",
            jt = f(k),
            Ft = f("pan") + jt,
            It = "mousedown" + jt,
            qt = "mouseenter" + jt,
            Rt = "mouseleave" + Ft,
            Ut = "mousemove" + Ft,
            zt = "mouseup" + Ft,
            Wt = "mousewheel" + jt,
            Xt = "tick" + jt,
            Vt = "touchcancel" + Ft,
            $t = "touchend" + Ft,
            Jt = "touchstart" + jt,
            Kt = "touchmove" + Ft,
            Qt = "",
            Gt = " ",
            Yt = ",",
            Zt = "absolute",
            en = "block",
            tn = "@CDN@",
            nn = "div",
            rn = "hand",
            sn = "head",
            on = "html",
            un = "id",
            an = "img",
            fn = "jquery." + k,
            ln = "none",
            cn = "object",
            hn = "preload",
            pn = "string",
            dn = "width",
            vn = N ? u("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7") : tn + "blank.gif",
            mn = c(tn + fn + ".cur") + Yt + "move",
            gn = c(tn + fn + "-drag.cur") + Yt + "move",
            yn = c(tn + fn + "-drag-down.cur") + Yt + "move",
            bn = E.touchy = E.re.touchy_agent.test(n);
        E.lazy = E.re.lazy_agent.test(n);
        var wn = bn ? r : x && T < 9 ? 1 : 0,
            En = e.cleanData;
        e.cleanData = function (t) {
            En(e(t).each(function () {
                e(this).triggerHandler("clean")
            }))
        };
        e.extend(e.fn, E.fn)
    }
}(jQuery, window, document)
