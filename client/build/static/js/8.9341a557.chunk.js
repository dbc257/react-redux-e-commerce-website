(this['webpackJsonpfuse-react-app'] = this['webpackJsonpfuse-react-app'] || []).push([
	[8],
	{
		1135: function (e, t, a) {
			'use strict';
			a.d(t, 'd', function () {
				return c;
			}),
				a.d(t, 'h', function () {
					return o;
				}),
				a.d(t, 'l', function () {
					return l;
				}),
				a.d(t, 'o', function () {
					return u;
				}),
				a.d(t, 'c', function () {
					return s;
				}),
				a.d(t, 'f', function () {
					return m;
				}),
				a.d(t, 'k', function () {
					return d;
				}),
				a.d(t, 'm', function () {
					return p;
				}),
				a.d(t, 'b', function () {
					return E;
				}),
				a.d(t, 'g', function () {
					return f;
				}),
				a.d(t, 'j', function () {
					return h;
				}),
				a.d(t, 'n', function () {
					return v;
				}),
				a.d(t, 'a', function () {
					return g;
				}),
				a.d(t, 'e', function () {
					return y;
				}),
				a.d(t, 'i', function () {
					return O;
				});
			var n = a(94),
				r = a.n(n),
				c = '[E-COMMERCE APP] GET PRODUCTS',
				o = '[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT';
			function l() {
				var e = r.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/products');
				return function (t) {
					return e.then(function (e) {
						return t({ type: c, payload: e.data });
					});
				};
			}
			function u(e) {
				return { type: o, searchText: e.target.value };
			}
			var i = a(20),
				s = (a(32), '[E-COMMERCE APP] GET PRODUCT'),
				m = '[E-COMMERCE APP] SAVE PRODUCT';
			function d(e) {
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
					id: i.a.generateGUID(),
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
			var E = '[E-COMMERCE APP] GET ORDERS',
				f = '[E-COMMERCE APP] SET ORDERS SEARCH TEXT';
			function h() {
				var e = r.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/orders');
				return function (t) {
					return e.then(function (e) {
						return t({ type: E, payload: e.data });
					});
				};
			}
			function v(e) {
				return { type: f, searchText: e.target.value };
			}
			var g = '[E-COMMERCE APP] GET ORDER',
				y = '[E-COMMERCE APP] SAVE ORDER';
			function O(e) {
				var t = r.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/order/'.concat(e.orderId));
				return function (e) {
					return t.then(function (t) {
						return e({ type: g, payload: t.data });
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
				o = function () {
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
				l = { data: [], searchText: '' },
				u = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
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
				i = { data: null },
				s = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.c:
						case c.f:
							return Object(r.a)({}, e, { data: t.payload });
						default:
							return e;
					}
				},
				m = { data: [], searchText: '' },
				d = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
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
				p = Object(n.d)({ products: d, product: s, orders: u, order: o });
			t.a = p;
		},
		1167: function (e, t, a) {
			'use strict';
			a.r(t);
			var n = a(152),
				r = a(1137),
				c = a(0),
				o = a.n(c),
				l = a(1138),
				u = a(125),
				i = a(1119),
				s = a(1107),
				m = a(180),
				d = a(8),
				p = a(36),
				E = a(31);
			var f = function (e) {
					var t = Object(d.c)(function (e) {
							return e.eCommerceApp.order;
						}),
						a = Object(p.a)();
					return o.a.createElement(
						'div',
						{ className: 'flex flex-1 w-full items-center justify-between' },
						o.a.createElement(
							'div',
							{ className: 'flex flex-col items-start max-w-full' },
							o.a.createElement(
								u.a,
								{ animation: 'transition.slideRightIn', delay: 300 },
								o.a.createElement(
									m.a,
									{
										className: 'normal-case flex items-center sm:mb-12',
										component: E.a,
										role: 'button',
										to: '/apps/e-commerce/products',
										color: 'inherit'
									},
									o.a.createElement(
										s.a,
										{ className: 'text-20' },
										'ltr' === a.direction ? 'arrow_back' : 'arrow_forward'
									),
									o.a.createElement('span', { className: 'mx-4' }, 'Products')
								)
							),
							o.a.createElement(
								'div',
								{ className: 'flex flex-col min-w-0 items-center sm:items-start' },
								null != t
									? o.a.createElement(
											u.a,
											{ animation: 'transition.slideLeftIn', delay: 300 },
											o.a.createElement(
												m.a,
												{ variant: 'caption' },
												''
													.concat(t.customer.firstName, ' ')
													.concat(t.customer.lastName, "'s Shopping Cart")
											)
									  )
									: null
							)
						),
						o.a.createElement(
							'div',
							null,
							o.a.createElement(
								u.a,
								{ animation: 'transition.slideRightIn', delay: 300 },
								o.a.createElement(
									i.a,
									{
										className: 'whitespace-no-wrap normal-case',
										variant: 'contained',
										color: 'secondary',
										component: E.a,
										to: '/apps/e-commerce/checkout/1'
									},
									o.a.createElement(s.a, null, 'add_shopping_cart'),
									'Checkout'
								)
							)
						)
					);
				},
				h = a(1135),
				v = a(124),
				g = a(35);
			t.default = Object(r.a)('eCommerceApp', l.a)(function (e) {
				var t = Object(g.h)(),
					a = Object(d.b)(),
					r = Object(d.c)(function (e) {
						return e.eCommerceApp.order;
					});
				return (
					Object(v.b)(
						function () {
							a(h.i(t));
						},
						[a, t]
					),
					o.a.createElement(n.a, {
						classes: { content: 'flex', header: 'min-h-72 h-72 sm:h-136 sm:min-h-136' },
						header: o.a.createElement(f, null),
						content: o.a.createElement(
							'div',
							{ className: 'flex-grow flex-shrink-0 p-0' },
							r &&
								o.a.createElement(
									'div',
									{ className: 'table-responsive' },
									o.a.createElement(
										'table',
										{ className: 'simple' },
										o.a.createElement(
											'thead',
											null,
											o.a.createElement(
												'tr',
												null,
												o.a.createElement('th', null, 'ID'),
												o.a.createElement('th', null, 'Image'),
												o.a.createElement('th', null, 'Name'),
												o.a.createElement('th', null, 'Price'),
												o.a.createElement('th', null, 'Quantity')
											)
										),
										o.a.createElement(
											'tbody',
											null,
											r.products.map(function (e) {
												return o.a.createElement(
													'tr',
													{ key: e.id },
													o.a.createElement('td', { className: 'w-64' }, e.id),
													o.a.createElement(
														'td',
														{ className: 'w-80' },
														o.a.createElement('img', {
															className: 'product-image',
															src: e.image,
															alt: 'product'
														})
													),
													o.a.createElement(
														'td',
														null,
														o.a.createElement(
															m.a,
															{
																component: E.a,
																to: '/apps/e-commerce/products/'.concat(e.id),
																className: 'truncate',
																style: { color: 'inherit', textDecoration: 'underline' }
															},
															e.name
														)
													),
													o.a.createElement(
														'td',
														{ className: 'w-64 text-right' },
														o.a.createElement(
															'span',
															{ className: 'truncate' },
															'$',
															e.price
														)
													),
													o.a.createElement(
														'td',
														{ className: 'w-64 text-right' },
														o.a.createElement('span', { className: 'truncate' }, e.quantity)
													)
												);
											})
										)
									)
								)
						),
						innerScroll: !0
					})
				);
			});
		}
	}
]);
