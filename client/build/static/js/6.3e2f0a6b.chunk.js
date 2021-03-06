(this['webpackJsonpfuse-react-app'] = this['webpackJsonpfuse-react-app'] || []).push([
	[6],
	{
		1135: function (e, a, t) {
			'use strict';
			t.d(a, 'd', function () {
				return l;
			}),
				t.d(a, 'h', function () {
					return c;
				}),
				t.d(a, 'l', function () {
					return o;
				}),
				t.d(a, 'o', function () {
					return i;
				}),
				t.d(a, 'c', function () {
					return s;
				}),
				t.d(a, 'f', function () {
					return d;
				}),
				t.d(a, 'k', function () {
					return u;
				}),
				t.d(a, 'm', function () {
					return p;
				}),
				t.d(a, 'b', function () {
					return E;
				}),
				t.d(a, 'g', function () {
					return h;
				}),
				t.d(a, 'j', function () {
					return f;
				}),
				t.d(a, 'n', function () {
					return b;
				}),
				t.d(a, 'a', function () {
					return g;
				}),
				t.d(a, 'e', function () {
					return v;
				}),
				t.d(a, 'i', function () {
					return x;
				});
			var r = t(94),
				n = t.n(r),
				l = '[E-COMMERCE APP] GET PRODUCTS',
				c = '[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT';
			function o() {
				var e = n.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/products');
				return function (a) {
					return e.then(function (e) {
						return a({ type: l, payload: e.data });
					});
				};
			}
			function i(e) {
				return { type: c, searchText: e.target.value };
			}
			var m = t(20),
				s = (t(32), '[E-COMMERCE APP] GET PRODUCT'),
				d = '[E-COMMERCE APP] SAVE PRODUCT';
			function u(e) {
				var a = n.a.get(
					'https://art-shop-server.herokuapp.com/api/e-commerce-app/product/'.concat(e.productId)
				);
				return function (e) {
					return a.then(function (a) {
						return e({ type: s, payload: a.data });
					});
				};
			}
			function p() {
				var e = {
					id: m.a.generateGUID(),
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
				h = '[E-COMMERCE APP] SET ORDERS SEARCH TEXT';
			function f() {
				var e = n.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/orders');
				return function (a) {
					return e.then(function (e) {
						return a({ type: E, payload: e.data });
					});
				};
			}
			function b(e) {
				return { type: h, searchText: e.target.value };
			}
			var g = '[E-COMMERCE APP] GET ORDER',
				v = '[E-COMMERCE APP] SAVE ORDER';
			function x(e) {
				var a = n.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/order/'.concat(e.orderId));
				return function (e) {
					return a.then(function (a) {
						return e({ type: g, payload: a.data });
					});
				};
			}
		},
		1137: function (e, a, t) {
			'use strict';
			var r = t(212),
				n = t(0),
				l = t.n(n);
			a.a = function (e, a) {
				return function (t) {
					return (
						Object(r.b)(e, a),
						function (e) {
							return l.a.createElement(t, e);
						}
					);
				};
			};
		},
		1138: function (e, a, t) {
			'use strict';
			var r = t(57),
				n = t(9),
				l = t(1135),
				c = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						a = arguments.length > 1 ? arguments[1] : void 0;
					switch (a.type) {
						case l.a:
						case l.e:
							return Object(n.a)({}, a.payload);
						default:
							return e;
					}
				},
				o = { data: [], searchText: '' },
				i = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						a = arguments.length > 1 ? arguments[1] : void 0;
					switch (a.type) {
						case l.b:
							return Object(n.a)({}, e, { data: a.payload });
						case l.g:
							return Object(n.a)({}, e, { searchText: a.searchText });
						default:
							return e;
					}
				},
				m = { data: null },
				s = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
						a = arguments.length > 1 ? arguments[1] : void 0;
					switch (a.type) {
						case l.c:
						case l.f:
							return Object(n.a)({}, e, { data: a.payload });
						default:
							return e;
					}
				},
				d = { data: [], searchText: '' },
				u = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						a = arguments.length > 1 ? arguments[1] : void 0;
					switch (a.type) {
						case l.d:
							return Object(n.a)({}, e, { data: a.payload });
						case l.h:
							return Object(n.a)({}, e, { searchText: a.searchText });
						default:
							return e;
					}
				},
				p = Object(r.d)({ products: u, product: s, orders: i, order: c });
			a.a = p;
		},
		1145: function (e, a, t) {
			'use strict';
			var r = t(6),
				n = t(2),
				l = t(0),
				c = t.n(l),
				o = [
					{ id: 1, name: 'Awaiting check payment', color: 'bg-blue text-white' },
					{ id: 2, name: 'Payment accepted', color: 'bg-green text-white' },
					{ id: 3, name: 'Preparing the order', color: 'bg-orange text-black' },
					{ id: 4, name: 'Shipped', color: 'bg-purple text-white' },
					{ id: 5, name: 'Delivered', color: 'bg-green-700 text-white' },
					{ id: 6, name: 'Canceled', color: 'bg-pink text-white' },
					{ id: 7, name: 'Refunded', color: 'bg-red text-white' },
					{ id: 8, name: 'Payment error', color: 'bg-red-700 text-white' },
					{ id: 9, name: 'On pre-order (paid)', color: 'bg-purple-300 text-white' },
					{ id: 10, name: 'Awaiting bank wire payment', color: 'bg-blue text-white' },
					{ id: 11, name: 'Awaiting PayPal payment', color: 'bg-blue-700 text-white' },
					{ id: 12, name: 'Remote payment accepted', color: 'bg-green-800 text-white' },
					{ id: 13, name: 'On pre-order (not paid)', color: 'bg-purple-700 text-white' },
					{ id: 14, name: 'Awaiting Cash-on-delivery payment', color: 'bg-blue-800 text-white' }
				];
			a.a = function (e) {
				return c.a.createElement(
					'div',
					{
						className: Object(n.a)(
							'inline text-12 p-4 rounded truncate',
							r.a.find(o, { name: e.name }).color
						)
					},
					e.name
				);
			};
		},
		1146: function (e, a, t) {
			'use strict';
			t.d(a, 'a', function () {
				return v;
			});
			var r = t(50),
				n = t(105),
				l = t(1100),
				c = t(2),
				o = t(0),
				i = t.n(o),
				m = t(1103),
				s = t(8);
			var d = function (e) {
					var a = Object(s.c)(function (e) {
						return e.fuse.settings.mainThemeDark;
					});
					return i.a.createElement(
						'div',
						{ className: e.classes.header },
						e.header && i.a.createElement(m.a, { theme: a }, e.header)
					);
				},
				u = t(26),
				p = t(1133),
				E = t(1129);
			var h = function (e) {
				var a = Object(s.c)(function (e) {
						return e.fuse.settings.mainThemeDark;
					}),
					t = e.classes;
				return i.a.createElement(
					i.a.Fragment,
					null,
					e.header &&
						i.a.createElement(
							m.a,
							{ theme: a },
							i.a.createElement('div', { className: Object(c.a)(t.sidebarHeader, e.variant) }, e.header)
						),
					e.content &&
						i.a.createElement(n.a, { className: t.sidebarContent, enable: e.innerScroll }, e.content)
				);
			};
			var f = i.a.forwardRef(function (e, a) {
					var t = Object(o.useState)(!1),
						r = Object(u.a)(t, 2),
						n = r[0],
						l = r[1],
						m = e.classes;
					Object(o.useImperativeHandle)(a, function () {
						return { toggleSidebar: s };
					});
					var s = function () {
						l(!n);
					};
					return i.a.createElement(
						i.a.Fragment,
						null,
						i.a.createElement(
							E.a,
							{ lgUp: 'permanent' === e.variant },
							i.a.createElement(
								p.a,
								{
									variant: 'temporary',
									anchor: e.position,
									open: n,
									onClose: function (e) {
										return s();
									},
									classes: {
										root: Object(c.a)(m.sidebarWrapper, e.variant),
										paper: Object(c.a)(
											m.sidebar,
											e.variant,
											'left' === e.position ? m.leftSidebar : m.rightSidebar
										)
									},
									ModalProps: { keepMounted: !0 },
									container: e.rootRef.current,
									BackdropProps: { classes: { root: m.backdrop } },
									style: { position: 'absolute' }
								},
								i.a.createElement(h, e)
							)
						),
						'permanent' === e.variant &&
							i.a.createElement(
								E.a,
								{ mdDown: !0 },
								i.a.createElement(
									p.a,
									{
										variant: 'permanent',
										className: Object(c.a)(m.sidebarWrapper, e.variant),
										open: n,
										classes: {
											paper: Object(c.a)(
												m.sidebar,
												e.variant,
												'left' === e.position ? m.leftSidebar : m.rightSidebar
											)
										}
									},
									i.a.createElement(h, e)
								)
							)
					);
				}),
				b = Object(l.a)(function (e) {
					return {
						root: {
							display: 'flex',
							flexDirection: 'row',
							minHeight: '100%',
							position: 'relative',
							flex: '1 0 auto',
							height: 'auto',
							backgroundColor: e.palette.background.default
						},
						innerScroll: { flex: '1 1 auto', height: '100%' },
						topBg: {
							position: 'absolute',
							left: 0,
							right: 0,
							top: 0,
							height: 200,
							background: 'linear-gradient(to right, '
								.concat(e.palette.primary.dark, ' 0%, ')
								.concat(e.palette.primary.main, ' 100%)'),
							backgroundSize: 'cover',
							pointerEvents: 'none'
						},
						contentWrapper: Object(r.a)(
							{
								display: 'flex',
								flexDirection: 'column',
								padding: '0 3.2rem',
								flex: '1 1 100%',
								zIndex: 2,
								maxWidth: '100%',
								minWidth: 0,
								minHeight: 0
							},
							e.breakpoints.down('xs'),
							{ padding: '0 1.6rem' }
						),
						header: {
							height: 136,
							minHeight: 136,
							maxHeight: 136,
							display: 'flex',
							color: e.palette.primary.contrastText
						},
						headerSidebarToggleButton: { color: e.palette.primary.contrastText },
						contentCard: {
							display: 'flex',
							flex: '1 1 100%',
							flexDirection: 'column',
							backgroundColor: e.palette.background.paper,
							boxShadow: e.shadows[1],
							minHeight: 0,
							borderRadius: '8px 8px 0 0'
						},
						toolbar: {
							height: 64,
							minHeight: 64,
							display: 'flex',
							alignItems: 'center',
							borderBottom: '1px solid '.concat(e.palette.divider)
						},
						content: {
							flex: '1 1 auto',
							height: '100%',
							overflow: 'auto',
							'-webkit-overflow-scrolling': 'touch'
						},
						sidebarWrapper: {
							position: 'absolute',
							backgroundColor: 'transparent',
							zIndex: 5,
							overflow: 'hidden',
							'&.permanent': Object(r.a)({}, e.breakpoints.up('lg'), { zIndex: 1, position: 'relative' })
						},
						sidebar: {
							position: 'absolute',
							'&.permanent': Object(r.a)({}, e.breakpoints.up('lg'), {
								backgroundColor: 'transparent',
								position: 'relative',
								border: 'none',
								overflow: 'hidden'
							}),
							width: 240,
							height: '100%'
						},
						leftSidebar: {},
						rightSidebar: {},
						sidebarHeader: {
							height: 200,
							minHeight: 200,
							color: e.palette.primary.contrastText,
							backgroundColor: e.palette.primary.dark,
							'&.permanent': Object(r.a)({}, e.breakpoints.up('lg'), { backgroundColor: 'transparent' })
						},
						sidebarContent: Object(r.a)(
							{
								display: 'flex',
								flex: '1 1 auto',
								flexDirection: 'column',
								backgroundColor: e.palette.background.default,
								color: e.palette.text.primary
							},
							e.breakpoints.up('lg'),
							{ overflow: 'auto', '-webkit-overflow-scrolling': 'touch' }
						),
						backdrop: { position: 'absolute' }
					};
				}),
				g = i.a.forwardRef(function (e, a) {
					var t = Object(o.useRef)(null),
						r = Object(o.useRef)(null),
						l = Object(o.useRef)(null),
						m = b(e),
						s = e.rightSidebarHeader || e.rightSidebarContent,
						u = e.leftSidebarHeader || e.leftSidebarContent;
					return (
						i.a.useImperativeHandle(a, function () {
							return {
								rootRef: l,
								toggleLeftSidebar: function () {
									t.current.toggleSidebar();
								},
								toggleRightSidebar: function () {
									r.current.toggleSidebar();
								}
							};
						}),
						i.a.createElement(
							'div',
							{ className: Object(c.a)(m.root, e.innerScroll && m.innerScroll), ref: l },
							i.a.createElement('div', { className: m.topBg }),
							i.a.createElement(
								'div',
								{ className: 'flex container w-full' },
								u &&
									i.a.createElement(f, {
										position: 'left',
										header: e.leftSidebarHeader,
										content: e.leftSidebarContent,
										variant: e.leftSidebarVariant || 'permanent',
										innerScroll: e.innerScroll,
										classes: m,
										ref: t,
										rootRef: l
									}),
								i.a.createElement(
									'div',
									{
										className: Object(c.a)(
											m.contentWrapper,
											u &&
												(void 0 === e.leftSidebarVariant ||
													'permanent' === e.leftSidebarVariant) &&
												'lg:ltr:pl-0 lg:rtl:pr-0',
											s &&
												(void 0 === e.rightSidebarVariant ||
													'permanent' === e.rightSidebarVariant) &&
												'lg:pr-0'
										)
									},
									i.a.createElement(d, { header: e.header, classes: m }),
									i.a.createElement(
										'div',
										{ className: Object(c.a)(m.contentCard, e.innerScroll && 'inner-scroll') },
										e.contentToolbar &&
											i.a.createElement('div', { className: m.toolbar }, e.contentToolbar),
										e.content &&
											i.a.createElement(
												n.a,
												{
													className: m.content,
													enable: e.innerScroll,
													scrollToTopOnRouteChange: e.innerScroll
												},
												e.content
											)
									)
								),
								s &&
									i.a.createElement(f, {
										position: 'right',
										header: e.rightSidebarHeader,
										content: e.rightSidebarContent,
										variant: e.rightSidebarVariant || 'permanent',
										innerScroll: e.innerScroll,
										classes: m,
										ref: r,
										rootRef: l
									})
							)
						)
					);
				});
			g.defaultProps = {};
			var v = i.a.memo(g);
		},
		1168: function (e, a, t) {
			'use strict';
			t.r(a);
			var r = t(26),
				n = t(125),
				l = t(1146),
				c = t(1131),
				o = t(1169),
				i = t(1163),
				m = t(1162),
				s = t(1107),
				d = t(36),
				u = t(1125),
				p = t(1127),
				E = t(180),
				h = t(1156),
				f = t.n(h),
				b = t(1137),
				g = t(0),
				v = t.n(g),
				x = t(8),
				N = t(35),
				y = t(31),
				S = t(124),
				w = t(1135),
				O = t(1138),
				C = t(1123),
				k = t(1124),
				T = t(1100),
				j = t(1147),
				R = t(1151),
				P = t(1150),
				A = t(1148),
				D = t(1149),
				I = t(2),
				M = Object(T.a)(function (e) {
					return {
						root: {
							'& table ': {
								'& th:first-child, & td:first-child': { paddingLeft: ''.concat(0, '!important') },
								'& th:last-child, & td:last-child': { paddingRight: ''.concat(0, '!important') }
							}
						},
						divider: { width: 1, backgroundColor: e.palette.divider, height: 144 },
						seller: {
							backgroundColor: e.palette.primary.dark,
							color: e.palette.getContrastText(e.palette.primary.dark),
							marginRight: -88,
							paddingRight: 66,
							width: 480,
							'& .divider': {
								backgroundColor: e.palette.getContrastText(e.palette.primary.dark),
								opacity: 0.5
							}
						}
					};
				}),
				H = v.a.memo(function (e) {
					var a = M(e),
						t = new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'USD',
							minimumFractionDigits: 2
						});
					return v.a.createElement(
						'div',
						{ className: Object(I.a)(a.root, 'flex-grow flex-shrink-0 p-0') },
						e.order &&
							v.a.createElement(
								C.a,
								{ className: 'w-xl mx-auto', elevation: 0 },
								v.a.createElement(
									k.a,
									{ className: 'p-88 print:p-0' },
									v.a.createElement(
										E.a,
										{ color: 'textSecondary', className: 'mb-32' },
										e.order.date
									),
									v.a.createElement(
										'div',
										{ className: 'flex justify-between' },
										v.a.createElement(
											'div',
											null,
											v.a.createElement(
												'table',
												{ className: 'mb-16' },
												v.a.createElement(
													'tbody',
													null,
													v.a.createElement(
														'tr',
														null,
														v.a.createElement(
															'td',
															{ className: 'pb-4' },
															v.a.createElement(
																E.a,
																{
																	className: 'font-light',
																	variant: 'h6',
																	color: 'textSecondary'
																},
																'INVOICE'
															)
														),
														v.a.createElement(
															'td',
															{ className: 'pb-4 px-8' },
															v.a.createElement(
																E.a,
																{
																	className: 'font-light',
																	variant: 'h6',
																	color: 'inherit'
																},
																e.order.reference
															)
														)
													)
												)
											),
											v.a.createElement(
												E.a,
												{ color: 'textSecondary' },
												''
													.concat(e.order.customer.firstName, ' ')
													.concat(e.order.customer.lastName)
											),
											e.order.customer.invoiceAddress.address &&
												v.a.createElement(
													E.a,
													{ color: 'textSecondary' },
													e.order.customer.invoiceAddress.address
												),
											e.order.customer.phone &&
												v.a.createElement(
													E.a,
													{ color: 'textSecondary' },
													e.order.customer.phone
												),
											e.order.customer.email &&
												v.a.createElement(
													E.a,
													{ color: 'textSecondary' },
													e.order.customer.email
												)
										),
										v.a.createElement(
											'div',
											{ className: Object(I.a)(a.seller, 'flex items-center p-16') },
											v.a.createElement('img', {
												className: 'w-80',
												src: 'assets/images/logos/fuse.svg',
												alt: 'logo'
											}),
											v.a.createElement('div', {
												className: Object(I.a)(a.divider, 'divider mx-8 h-96')
											}),
											v.a.createElement(
												'div',
												{ className: 'px-8' },
												v.a.createElement(E.a, { color: 'inherit' }, 'FUSE INC.'),
												v.a.createElement(
													E.a,
													{ color: 'inherit' },
													'2810 Country Club Road Cranford, NJ 07016'
												),
												v.a.createElement(E.a, { color: 'inherit' }, '+66 123 455 87'),
												v.a.createElement(E.a, { color: 'inherit' }, 'hello@fuseinc.com'),
												v.a.createElement(E.a, { color: 'inherit' }, 'www.fuseinc.com')
											)
										)
									),
									v.a.createElement(
										'div',
										{ className: 'mt-64' },
										v.a.createElement(
											j.a,
											{ className: 'simple' },
											v.a.createElement(
												A.a,
												null,
												v.a.createElement(
													D.a,
													null,
													v.a.createElement(P.a, null, 'PRODUCT'),
													v.a.createElement(P.a, null, 'PRICE'),
													v.a.createElement(P.a, { align: 'right' }, 'QUANTITY'),
													v.a.createElement(P.a, { align: 'right' }, 'TOTAL')
												)
											),
											v.a.createElement(
												R.a,
												null,
												e.order.products.map(function (e) {
													return v.a.createElement(
														D.a,
														{ key: e.id },
														v.a.createElement(
															P.a,
															null,
															v.a.createElement(E.a, { variant: 'subtitle1' }, e.name)
														),
														v.a.createElement(P.a, { align: 'right' }, t.format(e.price)),
														v.a.createElement(P.a, { align: 'right' }, e.quantity),
														v.a.createElement(
															P.a,
															{ align: 'right' },
															t.format(e.price * e.quantity)
														)
													);
												})
											)
										),
										v.a.createElement(
											j.a,
											{ className: 'simple mt-32' },
											v.a.createElement(
												R.a,
												null,
												v.a.createElement(
													D.a,
													null,
													v.a.createElement(
														P.a,
														null,
														v.a.createElement(
															E.a,
															{
																className: 'font-medium',
																variant: 'subtitle1',
																color: 'textSecondary'
															},
															'SUBTOTAL'
														)
													),
													v.a.createElement(
														P.a,
														{ align: 'right' },
														v.a.createElement(
															E.a,
															{
																className: 'font-medium',
																variant: 'subtitle1',
																color: 'textSecondary'
															},
															t.format(e.order.subtotal)
														)
													)
												),
												v.a.createElement(
													D.a,
													null,
													v.a.createElement(
														P.a,
														null,
														v.a.createElement(
															E.a,
															{
																className: 'font-medium',
																variant: 'subtitle1',
																color: 'textSecondary'
															},
															'TAX'
														)
													),
													v.a.createElement(
														P.a,
														{ align: 'right' },
														v.a.createElement(
															E.a,
															{
																className: 'font-medium',
																variant: 'subtitle1',
																color: 'textSecondary'
															},
															t.format(e.order.tax)
														)
													)
												),
												v.a.createElement(
													D.a,
													null,
													v.a.createElement(
														P.a,
														null,
														v.a.createElement(
															E.a,
															{
																className: 'font-medium',
																variant: 'subtitle1',
																color: 'textSecondary'
															},
															'DISCOUNT'
														)
													),
													v.a.createElement(
														P.a,
														{ align: 'right' },
														v.a.createElement(
															E.a,
															{
																className: 'font-medium',
																variant: 'subtitle1',
																color: 'textSecondary'
															},
															t.format(e.order.discount)
														)
													)
												),
												v.a.createElement(
													D.a,
													null,
													v.a.createElement(
														P.a,
														null,
														v.a.createElement(
															E.a,
															{
																className: 'font-light',
																variant: 'h4',
																color: 'textSecondary'
															},
															'TOTAL'
														)
													),
													v.a.createElement(
														P.a,
														{ align: 'right' },
														v.a.createElement(
															E.a,
															{
																className: 'font-light',
																variant: 'h4',
																color: 'textSecondary'
															},
															t.format(e.order.total)
														)
													)
												)
											)
										)
									),
									v.a.createElement(
										'div',
										{ className: 'mt-96' },
										v.a.createElement(
											E.a,
											{ className: 'mb-24 print:mb-12', variant: 'body1' },
											'Please pay within 15 days. Thank you for your business.'
										),
										v.a.createElement(
											'div',
											{ className: 'flex' },
											v.a.createElement(
												'div',
												{ className: 'flex-shrink-0' },
												v.a.createElement('img', {
													className: 'w-32',
													src: 'assets/images/logos/fuse.svg',
													alt: 'logo'
												})
											),
											v.a.createElement(
												E.a,
												{
													className: 'font-medium mb-64 px-24',
													variant: 'caption',
													color: 'textSecondary'
												},
												'In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros.'
											)
										)
									)
								)
							)
					);
				}),
				U = t(1145);
			a.default = Object(b.a)('eCommerceApp', O.a)(function (e) {
				var a = Object(x.b)(),
					t = Object(x.c)(function (e) {
						return e.eCommerceApp.order;
					}),
					h = Object(d.a)(),
					b = Object(N.h)(),
					O = Object(g.useState)(0),
					C = Object(r.a)(O, 2),
					k = C[0],
					T = C[1];
				return (
					Object(S.b)(
						function () {
							a(w.i(b));
						},
						[a, b]
					),
					v.a.createElement(l.a, {
						classes: { content: 'flex', header: 'min-h-72 h-72 sm:h-136 sm:min-h-136' },
						header:
							t &&
							v.a.createElement(
								'div',
								{ className: 'flex flex-1 w-full items-center justify-between' },
								v.a.createElement(
									'div',
									{ className: 'flex flex-1 flex-col items-center sm:items-start' },
									v.a.createElement(
										n.a,
										{ animation: 'transition.slideRightIn', delay: 300 },
										v.a.createElement(
											E.a,
											{
												className: 'normal-case flex items-center sm:mb-12',
												component: y.a,
												role: 'button',
												to: '/apps/e-commerce/orders',
												color: 'inherit'
											},
											v.a.createElement(
												s.a,
												{ className: 'text-20' },
												'ltr' === h.direction ? 'arrow_back' : 'arrow_forward'
											),
											v.a.createElement('span', { className: 'mx-4' }, 'Orders')
										)
									),
									v.a.createElement(
										'div',
										{ className: 'flex flex-col min-w-0 items-center sm:items-start' },
										v.a.createElement(
											n.a,
											{ animation: 'transition.slideLeftIn', delay: 300 },
											v.a.createElement(
												E.a,
												{ className: 'text-16 sm:text-20 truncate' },
												'Order '.concat(t.reference)
											)
										),
										v.a.createElement(
											n.a,
											{ animation: 'transition.slideLeftIn', delay: 300 },
											v.a.createElement(
												E.a,
												{ variant: 'caption' },
												'From '.concat(t.customer.firstName, ' ').concat(t.customer.lastName)
											)
										)
									)
								)
							),
						contentToolbar: v.a.createElement(
							p.a,
							{
								value: k,
								onChange: function (e, a) {
									T(a);
								},
								indicatorColor: 'primary',
								textColor: 'primary',
								variant: 'scrollable',
								scrollButtons: 'auto',
								classes: { root: 'w-full h-64' }
							},
							v.a.createElement(u.a, { className: 'h-64 normal-case', label: 'Order Details' }),
							v.a.createElement(u.a, { className: 'h-64 normal-case', label: 'Products' }),
							v.a.createElement(u.a, { className: 'h-64 normal-case', label: 'Invoice' })
						),
						content:
							t &&
							v.a.createElement(
								'div',
								{ className: 'p-16 sm:p-24 max-w-2xl w-full' },
								0 === k &&
									v.a.createElement(
										'div',
										null,
										v.a.createElement(
											'div',
											{ className: 'pb-48' },
											v.a.createElement(
												'div',
												{ className: 'pb-16 flex items-center' },
												v.a.createElement(s.a, { color: 'action' }, 'account_circle'),
												v.a.createElement(
													E.a,
													{ className: 'h2 mx-16', color: 'textSecondary' },
													'Customer'
												)
											),
											v.a.createElement(
												'div',
												{ className: 'mb-24' },
												v.a.createElement(
													'div',
													{ className: 'table-responsive mb-16' },
													v.a.createElement(
														'table',
														{ className: 'simple' },
														v.a.createElement(
															'thead',
															null,
															v.a.createElement(
																'tr',
																null,
																v.a.createElement('th', null, 'Name'),
																v.a.createElement('th', null, 'Email'),
																v.a.createElement('th', null, 'Phone'),
																v.a.createElement('th', null, 'Company')
															)
														),
														v.a.createElement(
															'tbody',
															null,
															v.a.createElement(
																'tr',
																null,
																v.a.createElement(
																	'td',
																	null,
																	v.a.createElement(
																		'div',
																		{ className: 'flex items-center' },
																		v.a.createElement(c.a, {
																			src: t.customer.avatar
																		}),
																		v.a.createElement(
																			E.a,
																			{ className: 'truncate mx-8' },
																			''
																				.concat(t.customer.firstName, ' ')
																				.concat(t.customer.lastName)
																		)
																	)
																),
																v.a.createElement(
																	'td',
																	null,
																	v.a.createElement(
																		E.a,
																		{ className: 'truncate' },
																		t.customer.email
																	)
																),
																v.a.createElement(
																	'td',
																	null,
																	v.a.createElement(
																		E.a,
																		{ className: 'truncate' },
																		t.customer.phone
																	)
																),
																v.a.createElement(
																	'td',
																	null,
																	v.a.createElement(
																		'span',
																		{ className: 'truncate' },
																		t.customer.company
																	)
																)
															)
														)
													)
												),
												v.a.createElement(
													o.a,
													{ elevation: 1 },
													v.a.createElement(
														m.a,
														{ expandIcon: v.a.createElement(f.a, null) },
														v.a.createElement(
															E.a,
															{ className: 'font-600' },
															'Shipping Address'
														)
													),
													v.a.createElement(
														i.a,
														{ className: 'flex flex-col md:flex-row' },
														v.a.createElement(
															E.a,
															{ className: 'w-full md:max-w-256 mb-16 md:mb-0' },
															t.customer.shippingAddress.address
														)
													),
													v.a.createElement(
														m.a,
														null,
														v.a.createElement(
															E.a,
															{ className: 'font-600' },
															'Invoice Address'
														)
													),
													v.a.createElement(
														i.a,
														{ className: 'flex flex-col md:flex-row' },
														v.a.createElement(
															E.a,
															{ className: 'w-full md:max-w-256 mb-16 md:mb-0' },
															t.customer.invoiceAddress.address
														)
													)
												)
											)
										),
										v.a.createElement(
											'div',
											{ className: 'pb-48' },
											v.a.createElement(
												'div',
												{ className: 'pb-16 flex items-center' },
												v.a.createElement(s.a, { color: 'action' }, 'access_time'),
												v.a.createElement(
													E.a,
													{ className: 'h2 mx-16', color: 'textSecondary' },
													'Order Status'
												)
											),
											v.a.createElement(
												'div',
												{ className: 'table-responsive' },
												v.a.createElement(
													'table',
													{ className: 'simple' },
													v.a.createElement(
														'thead',
														null,
														v.a.createElement(
															'tr',
															null,
															v.a.createElement('th', null, 'Status'),
															v.a.createElement('th', null, 'Updated On')
														)
													),
													v.a.createElement(
														'tbody',
														null,
														t.status.map(function (e) {
															return v.a.createElement(
																'tr',
																{ key: e.id },
																v.a.createElement(
																	'td',
																	null,
																	v.a.createElement(U.a, { name: e.name })
																),
																v.a.createElement('td', null, e.date)
															);
														})
													)
												)
											)
										),
										v.a.createElement(
											'div',
											{ className: 'pb-48' },
											v.a.createElement(
												'div',
												{ className: 'pb-16 flex items-center' },
												v.a.createElement(s.a, { color: 'action' }, 'attach_money'),
												v.a.createElement(
													E.a,
													{ className: 'h2 mx-16', color: 'textSecondary' },
													'Payment'
												)
											),
											v.a.createElement(
												'div',
												{ className: 'table-responsive' },
												v.a.createElement(
													'table',
													{ className: 'simple' },
													v.a.createElement(
														'thead',
														null,
														v.a.createElement(
															'tr',
															null,
															v.a.createElement('th', null, 'TransactionID'),
															v.a.createElement('th', null, 'Payment Method'),
															v.a.createElement('th', null, 'Amount'),
															v.a.createElement('th', null, 'Date')
														)
													),
													v.a.createElement(
														'tbody',
														null,
														v.a.createElement(
															'tr',
															null,
															v.a.createElement(
																'td',
																null,
																v.a.createElement(
																	'span',
																	{ className: 'truncate' },
																	t.payment.transactionId
																)
															),
															v.a.createElement(
																'td',
																null,
																v.a.createElement(
																	'span',
																	{ className: 'truncate' },
																	t.payment.method
																)
															),
															v.a.createElement(
																'td',
																null,
																v.a.createElement(
																	'span',
																	{ className: 'truncate' },
																	t.payment.amount
																)
															),
															v.a.createElement(
																'td',
																null,
																v.a.createElement(
																	'span',
																	{ className: 'truncate' },
																	t.payment.date
																)
															)
														)
													)
												)
											)
										),
										v.a.createElement(
											'div',
											{ className: 'pb-48' },
											v.a.createElement(
												'div',
												{ className: 'pb-16 flex items-center' },
												v.a.createElement(s.a, { color: 'action' }, 'local_shipping'),
												v.a.createElement(
													E.a,
													{ className: 'h2 mx-12', color: 'textSecondary' },
													'Shipping'
												)
											),
											v.a.createElement(
												'div',
												{ className: 'table-responsive' },
												v.a.createElement(
													'table',
													{ className: 'simple' },
													v.a.createElement(
														'thead',
														null,
														v.a.createElement(
															'tr',
															null,
															v.a.createElement('th', null, 'Tracking Code'),
															v.a.createElement('th', null, 'Carrier'),
															v.a.createElement('th', null, 'Weight'),
															v.a.createElement('th', null, 'Fee'),
															v.a.createElement('th', null, 'Date')
														)
													),
													v.a.createElement(
														'tbody',
														null,
														t.shippingDetails.map(function (e) {
															return v.a.createElement(
																'tr',
																{ key: e.date },
																v.a.createElement(
																	'td',
																	null,
																	v.a.createElement(
																		'span',
																		{ className: 'truncate' },
																		e.tracking
																	)
																),
																v.a.createElement(
																	'td',
																	null,
																	v.a.createElement(
																		'span',
																		{ className: 'truncate' },
																		e.carrier
																	)
																),
																v.a.createElement(
																	'td',
																	null,
																	v.a.createElement(
																		'span',
																		{ className: 'truncate' },
																		e.weight
																	)
																),
																v.a.createElement(
																	'td',
																	null,
																	v.a.createElement(
																		'span',
																		{ className: 'truncate' },
																		e.fee
																	)
																),
																v.a.createElement(
																	'td',
																	null,
																	v.a.createElement(
																		'span',
																		{ className: 'truncate' },
																		e.date
																	)
																)
															);
														})
													)
												)
											)
										)
									),
								1 === k &&
									v.a.createElement(
										'div',
										{ className: 'table-responsive' },
										v.a.createElement(
											'table',
											{ className: 'simple' },
											v.a.createElement(
												'thead',
												null,
												v.a.createElement(
													'tr',
													null,
													v.a.createElement('th', null, 'ID'),
													v.a.createElement('th', null, 'Image'),
													v.a.createElement('th', null, 'Name'),
													v.a.createElement('th', null, 'Price'),
													v.a.createElement('th', null, 'Quantity')
												)
											),
											v.a.createElement(
												'tbody',
												null,
												t.products.map(function (e) {
													return v.a.createElement(
														'tr',
														{ key: e.id },
														v.a.createElement('td', { className: 'w-64' }, e.id),
														v.a.createElement(
															'td',
															{ className: 'w-80' },
															v.a.createElement('img', {
																className: 'product-image',
																src: e.image,
																alt: 'product'
															})
														),
														v.a.createElement(
															'td',
															null,
															v.a.createElement(
																E.a,
																{
																	component: y.a,
																	to: '/apps/e-commerce/products/'.concat(e.id),
																	className: 'truncate',
																	style: {
																		color: 'inherit',
																		textDecoration: 'underline'
																	}
																},
																e.name
															)
														),
														v.a.createElement(
															'td',
															{ className: 'w-64 text-right' },
															v.a.createElement(
																'span',
																{ className: 'truncate' },
																'$',
																e.price
															)
														),
														v.a.createElement(
															'td',
															{ className: 'w-64 text-right' },
															v.a.createElement(
																'span',
																{ className: 'truncate' },
																e.quantity
															)
														)
													);
												})
											)
										)
									),
								2 === k && v.a.createElement(H, { order: t })
							),
						innerScroll: !0
					})
				);
			});
		}
	}
]);
