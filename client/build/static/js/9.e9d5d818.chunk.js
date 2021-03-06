(this['webpackJsonpfuse-react-app'] = this['webpackJsonpfuse-react-app'] || []).push([
	[9],
	{
		1135: function (e, t, a) {
			'use strict';
			a.d(t, 'd', function () {
				return c;
			}),
				a.d(t, 'h', function () {
					return l;
				}),
				a.d(t, 'l', function () {
					return i;
				}),
				a.d(t, 'o', function () {
					return o;
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
					return f;
				}),
				a.d(t, 'g', function () {
					return E;
				}),
				a.d(t, 'j', function () {
					return h;
				}),
				a.d(t, 'n', function () {
					return b;
				}),
				a.d(t, 'a', function () {
					return g;
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
				l = '[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT';
			function i() {
				var e = r.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/products');
				return function (t) {
					return e.then(function (e) {
						return t({ type: c, payload: e.data });
					});
				};
			}
			function o(e) {
				return { type: l, searchText: e.target.value };
			}
			var u = a(20),
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
				E = '[E-COMMERCE APP] SET ORDERS SEARCH TEXT';
			function h() {
				var e = r.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/orders');
				return function (t) {
					return e.then(function (e) {
						return t({ type: f, payload: e.data });
					});
				};
			}
			function b(e) {
				return { type: E, searchText: e.target.value };
			}
			var g = '[E-COMMERCE APP] GET ORDER',
				v = '[E-COMMERCE APP] SAVE ORDER';
			function x(e) {
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
				l = function () {
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
				i = { data: [], searchText: '' },
				o = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
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
				p = Object(n.d)({ products: d, product: s, orders: o, order: l });
			t.a = p;
		},
		1161: function (e, t, a) {
			'use strict';
			a.r(t);
			var n = a(152),
				r = a(1137),
				c = a(1138),
				l = a(1107),
				i = a(2),
				o = a(0),
				u = a.n(o),
				s = a(8),
				m = a(35),
				d = a(31),
				p = a(1135),
				f = a(180),
				E = a(251),
				h = a(1123),
				b = a(1124),
				g = a(125),
				v = a(1119),
				x = a(36),
				y = a(124);
			t.default = Object(r.a)('eCommerceApp', c.a)(function (e) {
				var t = Object(s.b)(),
					a = Object(s.c)(function (e) {
						return e.eCommerceApp.product;
					}),
					r = Object(m.h)(),
					c = Object(x.a)();
				return (
					Object(y.b)(
						function () {
							!(function () {
								var e = r.productId;
								t('new' === e ? p.m() : p.k(r));
							})();
						},
						[t, r]
					),
					Object(o.useEffect)(
						function () {
							t(p.k(r));
						},
						[t, r]
					),
					u.a.createElement(n.a, {
						classes: { content: 'flex', header: 'min-h-72 h-72 sm:h-136 sm:min-h-136' },
						header: u.a.createElement(
							'div',
							{ className: 'flex flex-1 w-full items-center justify-between' },
							u.a.createElement(
								'div',
								{ className: 'flex flex-col items-start max-w-full' },
								u.a.createElement(
									g.a,
									{ animation: 'transition.slideRightIn', delay: 300 },
									u.a.createElement(
										f.a,
										{
											className: 'normal-case flex items-center sm:mb-12',
											component: d.a,
											role: 'button',
											to: '/apps/e-commerce/products',
											color: 'inherit'
										},
										u.a.createElement(
											l.a,
											{ className: 'text-20' },
											'ltr' === c.direction ? 'arrow_back' : 'arrow_forward'
										),
										u.a.createElement('span', { className: 'mx-4' }, 'Products')
									)
								),
								u.a.createElement(
									'div',
									{ className: 'flex items-center max-w-full' },
									u.a.createElement(
										g.a,
										{ animation: 'transition.expandIn', delay: 300 },
										null != a.data
											? u.a.createElement('img', {
													className: 'w-32 sm:w-48 rounded',
													src: a.data.image,
													alt: a.data.name
											  })
											: u.a.createElement('img', {
													className: 'w-32 sm:w-48 rounded',
													src: 'assets/images/ecommerce/product-image-placeholder.png',
													alt: 'product'
											  })
									),
									u.a.createElement(
										'div',
										{ className: 'flex flex-col min-w-0 mx-8 sm:mc-16' },
										null != a.data
											? u.a.createElement(
													g.a,
													{ animation: 'transition.slideLeftIn', delay: 300 },
													u.a.createElement(
														f.a,
														{ className: 'text-16 sm:text-20 truncate' },
														a.data.name
													)
											  )
											: null,
										u.a.createElement(
											g.a,
											{ animation: 'transition.slideLeftIn', delay: 300 },
											u.a.createElement(f.a, { variant: 'caption' }, 'Product Details')
										)
									)
								)
							),
							u.a.createElement(
								'div',
								null,
								u.a.createElement(
									g.a,
									{ animation: 'transition.slideRightIn', delay: 300 },
									u.a.createElement(
										v.a,
										{
											className: 'whitespace-no-wrap normal-case',
											variant: 'contained',
											color: 'secondary',
											component: d.a,
											to: '/apps/e-commerce/cart/1'
										},
										u.a.createElement(l.a, null, 'shopping_cart'),
										'Go To Cart'
									)
								)
							)
						),
						content: u.a.createElement(
							'div',
							{ className: 'w-full flex flex-col' },
							null != a.data
								? u.a.createElement(
										E.a,
										{ enter: { animation: 'transition.slideUpBigIn' } },
										u.a.createElement(
											h.a,
											{ className: 'w-full mb-16' },
											u.a.createElement(
												b.a,
												null,
												u.a.createElement(
													'div',
													{ className: 'mb-24' },
													u.a.createElement(
														f.a,
														{ className: 'font-bold mb-4 text-15' },
														'Product Name'
													),
													u.a.createElement(f.a, null, a.data.name)
												),
												u.a.createElement(
													'div',
													{ className: 'mb-24' },
													u.a.createElement(
														f.a,
														{ className: 'font-bold mb-4 text-15' },
														'Description'
													),
													u.a.createElement(f.a, null, a.data.description)
												),
												u.a.createElement(
													'div',
													{ className: 'mb-24' },
													u.a.createElement(
														f.a,
														{ className: 'font-bold mb-4 text-15' },
														'Categories'
													),
													u.a.createElement(
														'div',
														{ className: 'flex items-center', key: a.data.categories },
														u.a.createElement(
															l.a,
															{ className: 'text-16 mx-4', color: 'action' },
															'location_on'
														),
														u.a.createElement(f.a, null, a.data.categories)
													)
												),
												u.a.createElement(
													'div',
													{ className: 'mb-24' },
													u.a.createElement(
														f.a,
														{ className: 'font-bold mb-4 text-15' },
														'Price'
													),
													u.a.createElement(
														f.a,
														null,
														u.a.createElement('span', null, '$'),
														a.data.priceTaxIncl
													)
												),
												u.a.createElement(
													'div',
													{ className: 'mb-24' },
													u.a.createElement(
														f.a,
														{ className: 'font-bold mb-4 text-15' },
														'Quantity'
													),
													u.a.createElement(
														f.a,
														null,
														a.data.quantity,
														u.a.createElement('i', {
															className: Object(i.a)(
																'inline-block w-8 h-8 rounded mx-8',
																a.data.quantity <= 5 && 'bg-red',
																a.data.quantity > 5 &&
																	a.data.quantity <= 25 &&
																	'bg-orange',
																a.data.quantity > 25 && 'bg-green'
															)
														})
													)
												)
											)
										)
								  )
								: null
						),
						innerScroll: !0
					})
				);
			});
		}
	}
]);
