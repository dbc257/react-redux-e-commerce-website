(this['webpackJsonpfuse-react-app'] = this['webpackJsonpfuse-react-app'] || []).push([
	[10],
	{
		1135: function (e, t, a) {
			'use strict';
			a.d(t, 'd', function () {
				return c;
			}),
				a.d(t, 'h', function () {
					return i;
				}),
				a.d(t, 'l', function () {
					return o;
				}),
				a.d(t, 'o', function () {
					return l;
				}),
				a.d(t, 'c', function () {
					return s;
				}),
				a.d(t, 'f', function () {
					return d;
				}),
				a.d(t, 'k', function () {
					return m;
				}),
				a.d(t, 'm', function () {
					return p;
				}),
				a.d(t, 'b', function () {
					return f;
				}),
				a.d(t, 'g', function () {
					return h;
				}),
				a.d(t, 'j', function () {
					return g;
				}),
				a.d(t, 'n', function () {
					return E;
				}),
				a.d(t, 'a', function () {
					return b;
				}),
				a.d(t, 'e', function () {
					return v;
				}),
				a.d(t, 'i', function () {
					return x;
				});
			var n = a(94),
				r = a.n(n),
				c = '[E-COMMERCE APP] GET PRODUCTS',
				i = '[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT';
			function o() {
				var e = r.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/products');
				return function (t) {
					return e.then(function (e) {
						return t({ type: c, payload: e.data });
					});
				};
			}
			function l(e) {
				return { type: i, searchText: e.target.value };
			}
			var u = a(20),
				s = (a(32), '[E-COMMERCE APP] GET PRODUCT'),
				d = '[E-COMMERCE APP] SAVE PRODUCT';
			function m(e) {
				var t = r.a.get(
					'https://art-shop-server.herokuapp.com/api/e-commerce-app/product/'.concat(e.productId)
				);
				return function (e) {
					return t.then(function (t) {
						return e({ type: s, payload: t.data });
					});
				};
			}
			function p() {
				var e = {
					id: u.a.generateGUID(),
					name: '',
					handle: '',
					description: '',
					categories: [],
					tags: [],
					images: [],
					priceTaxExcl: 0,
					priceTaxIncl: 0,
					taxRate: 0,
					comparedPrice: 0,
					quantity: 0,
					sku: '',
					width: '',
					height: '',
					depth: '',
					weight: '',
					extraShippingFee: 0,
					active: !0
				};
				return { type: s, payload: e };
			}
			var f = '[E-COMMERCE APP] GET ORDERS',
				h = '[E-COMMERCE APP] SET ORDERS SEARCH TEXT';
			function g() {
				var e = r.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/orders');
				return function (t) {
					return e.then(function (e) {
						return t({ type: f, payload: e.data });
					});
				};
			}
			function E(e) {
				return { type: h, searchText: e.target.value };
			}
			var b = '[E-COMMERCE APP] GET ORDER',
				v = '[E-COMMERCE APP] SAVE ORDER';
			function x(e) {
				var t = r.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/order/'.concat(e.orderId));
				return function (e) {
					return t.then(function (t) {
						return e({ type: b, payload: t.data });
					});
				};
			}
		},
		1137: function (e, t, a) {
			'use strict';
			var n = a(212),
				r = a(0),
				c = a.n(r);
			t.a = function (e, t) {
				return function (a) {
					return (
						Object(n.b)(e, t),
						function (e) {
							return c.a.createElement(a, e);
						}
					);
				};
			};
		},
		1138: function (e, t, a) {
			'use strict';
			var n = a(57),
				r = a(9),
				c = a(1135),
				i = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.a:
						case c.e:
							return Object(r.a)({}, t.payload);
						default:
							return e;
					}
				},
				o = { data: [], searchText: '' },
				l = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.b:
							return Object(r.a)({}, e, { data: t.payload });
						case c.g:
							return Object(r.a)({}, e, { searchText: t.searchText });
						default:
							return e;
					}
				},
				u = { data: null },
				s = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.c:
						case c.f:
							return Object(r.a)({}, e, { data: t.payload });
						default:
							return e;
					}
				},
				d = { data: [], searchText: '' },
				m = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.d:
							return Object(r.a)({}, e, { data: t.payload });
						case c.h:
							return Object(r.a)({}, e, { searchText: t.searchText });
						default:
							return e;
					}
				},
				p = Object(n.d)({ products: m, product: s, orders: l, order: i });
			t.a = p;
		},
		1164: function (e, t, a) {
			'use strict';
			a.r(t);
			var n = a(152),
				r = a(1137),
				c = a(0),
				i = a.n(c),
				o = a(1138),
				l = a(125),
				u = a(1107),
				s = a(1055),
				d = a(269),
				m = a(1103),
				p = a(180),
				f = a(8),
				h = a(1135);
			var g = function (e) {
					var t = Object(f.b)(),
						a = Object(f.c)(function (e) {
							return e.eCommerceApp.products.searchText;
						}),
						n = Object(f.c)(function (e) {
							return e.fuse.settings.mainTheme;
						});
					return i.a.createElement(
						'div',
						{ className: 'flex flex-1 w-full items-center justify-between' },
						i.a.createElement(
							'div',
							{ className: 'flex items-center' },
							i.a.createElement(
								l.a,
								{ animation: 'transition.expandIn', delay: 300 },
								i.a.createElement(u.a, { className: 'text-32' }, 'shopping_basket')
							),
							i.a.createElement(
								l.a,
								{ animation: 'transition.slideLeftIn', delay: 300 },
								i.a.createElement(
									p.a,
									{ className: 'hidden sm:flex mx-0 sm:mx-12', variant: 'h6' },
									'Products'
								)
							)
						),
						i.a.createElement(
							'div',
							{ className: 'flex flex-1 items-center justify-center px-12' },
							i.a.createElement(
								m.a,
								{ theme: n },
								i.a.createElement(
									l.a,
									{ animation: 'transition.slideDownIn', delay: 300 },
									i.a.createElement(
										d.a,
										{
											className: 'flex items-center w-full max-w-512 px-8 py-4 rounded-8',
											elevation: 1
										},
										i.a.createElement(u.a, { color: 'action' }, 'search'),
										i.a.createElement(s.a, {
											placeholder: 'Search',
											className: 'flex flex-1 mx-8',
											disableUnderline: !0,
											fullWidth: !0,
											value: a,
											inputProps: { 'aria-label': 'Search' },
											onChange: function (e) {
												return t(h.o(e));
											}
										})
									)
								)
							)
						)
					);
				},
				E = a(26),
				b = a(105),
				v = a(6),
				x = a(1147),
				O = a(1151),
				y = a(1150),
				P = a(1170),
				C = a(1149),
				w = a(2),
				j = a(35),
				T = a(1148),
				R = a(1171),
				S = a(1132),
				N = [
					{ id: 'image', align: 'left', disablePadding: !0, label: '', sort: !1 },
					{ id: 'name', align: 'left', disablePadding: !1, label: 'Name', sort: !0 },
					{ id: 'categories', align: 'left', disablePadding: !1, label: 'Category', sort: !0 },
					{ id: 'priceTaxIncl', align: 'right', disablePadding: !1, label: 'Price', sort: !0 },
					{ id: 'quantity', align: 'right', disablePadding: !1, label: 'Quantity', sort: !0 }
				];
			var k = function (e) {
				return i.a.createElement(
					T.a,
					null,
					i.a.createElement(
						C.a,
						{ className: 'h-64' },
						N.map(function (t) {
							return i.a.createElement(
								y.a,
								{
									key: t.id,
									align: t.align,
									padding: t.disablePadding ? 'none' : 'default',
									sortDirection: e.order.id === t.id && e.order.direction
								},
								t.sort &&
									i.a.createElement(
										S.a,
										{
											title: 'Sort',
											placement: 'right' === t.align ? 'bottom-end' : 'bottom-start',
											enterDelay: 300
										},
										i.a.createElement(
											R.a,
											{
												active: e.order.id === t.id,
												direction: e.order.direction,
												onClick:
													((a = t.id),
													function (t) {
														e.onRequestSort(t, a);
													})
											},
											t.label
										)
									)
							);
							var a;
						}, this)
					)
				);
			};
			var A = Object(j.i)(function (e) {
				var t = Object(f.b)(),
					a = Object(f.c)(function (e) {
						return e.eCommerceApp.products.data;
					}),
					n = Object(f.c)(function (e) {
						return e.eCommerceApp.products.searchText;
					}),
					r = Object(c.useState)(a),
					o = Object(E.a)(r, 2),
					l = o[0],
					u = o[1],
					s = Object(c.useState)(0),
					d = Object(E.a)(s, 2),
					m = d[0],
					p = d[1],
					g = Object(c.useState)(10),
					j = Object(E.a)(g, 2),
					T = j[0],
					R = j[1],
					S = Object(c.useState)({ direction: 'asc', id: null }),
					N = Object(E.a)(S, 2),
					A = N[0],
					M = N[1];
				return (
					Object(c.useEffect)(
						function () {
							t(h.l());
						},
						[t]
					),
					Object(c.useEffect)(
						function () {
							0 !== n.length
								? (u(
										v.a.filter(a, function (e) {
											return e.name.toLowerCase().includes(n.toLowerCase());
										})
								  ),
								  p(0))
								: u(a);
						},
						[a, n]
					),
					i.a.createElement(
						'div',
						{ className: 'w-full flex flex-col' },
						i.a.createElement(
							b.a,
							{ className: 'flex-grow overflow-x-auto' },
							i.a.createElement(
								x.a,
								{ className: 'min-w-xl', 'aria-labelledby': 'tableTitle' },
								i.a.createElement(k, {
									order: A,
									onRequestSort: function (e, t) {
										var a = t,
											n = 'desc';
										A.id === t && 'desc' === A.direction && (n = 'asc'), M({ direction: n, id: a });
									},
									rowCount: l.length
								}),
								i.a.createElement(
									O.a,
									null,
									v.a
										.orderBy(
											l,
											[
												function (e) {
													switch (A.id) {
														case 'categories':
															return e.categories[0];
														default:
															return e[A.id];
													}
												}
											],
											[A.direction]
										)
										.slice(m * T, m * T + T)
										.map(function (t) {
											return i.a.createElement(
												C.a,
												{
													className: 'h-64 cursor-pointer',
													hover: !0,
													key: t.id,
													onClick: function (a) {
														return (
															(n = t),
															void e.history.push(
																'/apps/e-commerce/products/'
																	.concat(n.id, '/')
																	.concat(n.handle)
															)
														);
														var n;
													}
												},
												i.a.createElement(
													y.a,
													{
														className: 'w-52',
														component: 'th',
														scope: 'row',
														padding: 'none'
													},
													t.images.length > 0 && t.featuredImageId
														? i.a.createElement('img', {
																className: 'w-full block rounded',
																src: v.a.find(t.images, { id: t.featuredImageId }).url,
																alt: t.name
														  })
														: i.a.createElement('img', {
																className: 'w-full block rounded',
																src:
																	'assets/images/ecommerce/product-image-placeholder.png',
																alt: t.name
														  })
												),
												i.a.createElement(y.a, { component: 'th', scope: 'row' }, t.name),
												i.a.createElement(
													y.a,
													{ className: 'truncate', component: 'th', scope: 'row' },
													t.categories.join(', ')
												),
												i.a.createElement(
													y.a,
													{ component: 'th', scope: 'row', align: 'right' },
													i.a.createElement('span', null, '$'),
													t.priceTaxIncl
												),
												i.a.createElement(
													y.a,
													{ component: 'th', scope: 'row', align: 'right' },
													t.quantity,
													i.a.createElement('i', {
														className: Object(w.a)(
															'inline-block w-8 h-8 rounded mx-8',
															t.quantity <= 5 && 'bg-red',
															t.quantity > 5 && t.quantity <= 25 && 'bg-orange',
															t.quantity > 25 && 'bg-green'
														)
													})
												)
											);
										})
								)
							)
						),
						i.a.createElement(P.a, {
							className: 'overflow-hidden',
							component: 'div',
							count: l.length,
							rowsPerPage: T,
							page: m,
							backIconButtonProps: { 'aria-label': 'Previous Page' },
							nextIconButtonProps: { 'aria-label': 'Next Page' },
							onChangePage: function (e, t) {
								p(t);
							},
							onChangeRowsPerPage: function (e) {
								R(e.target.value);
							}
						})
					)
				);
			});
			t.default = Object(r.a)('eCommerceApp', o.a)(function () {
				return i.a.createElement(n.a, {
					classes: { content: 'flex', header: 'min-h-72 h-72 sm:h-136 sm:min-h-136' },
					header: i.a.createElement(g, null),
					content: i.a.createElement(A, null),
					innerScroll: !0
				});
			});
		}
	}
]);
