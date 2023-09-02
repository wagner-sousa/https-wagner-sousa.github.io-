const mix = require('laravel-mix');

mix.webpackConfig({
    stats: {
        children: true,
    },
})
.combine([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/jquery-easing/jquery.easing.1.3.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
], 'src/js/vendor.js')
.combine([
    'js/resume.js'
], 'src/js/app.js')
.styles([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'css/resume.css'
], 'src/css/app.css')
//.sass('scss/app.scss', 'src/css/app.css')
.copy([
    'node_modules/font-awesome/fonts',
], 'src/fonts') 
.autoload({ jquery: ['$','window.jQuery','jQuery','window.$','jquery','window.jquery'] });

/*

let mix = require('laravel-mix'); 
/*
    |-------------------------------------------------------------------------- |
        Mix Asset Management 
    |-------------------------------------------------------------------------- | 
    | Mix provides a clean, fluent API for defining some Webpack build steps 
    | for your Laravel application. By default, we are compiling the Sass 
    | file for the application as well as bundling up all the JS files. |
*//*
         mix.options({ 
            processCssUrls: false, 
            autoprefixer: false, // Remove para adicionar em seguida 
            postCss: [ 
                require('autoprefixer')
                ({ 
                    cascade: false 
                }) 
            ] }) 
            .sourceMaps(false) 
            .scripts('resources/assets/js/pre.js', 'public/js/pre.js') 
            .js(['resources/assets/js/app.js'], 'public/js') 
            .sass('resources/assets/sass/app.scss', 'public/css') 
            .sass('resources/assets/sass/report.scss', 'public/css') 
            .sass('resources/assets/sass/pipeline.scss', 'public/css')
            .sass('resources/assets/sass/quill.scss', 'public/css/editor.css') 
            .styles([ 
                'public/css/app.css', 
                'node_modules/admin-lte/dist/css/AdminLTE.css', 
                'node_modules/datatables.net-bs/css/dataTables.bootstrap.css', 
                'node_modules/datatables.net-select-bs/css/select.bootstrap.css', 
                'node_modules/datatables.net-responsive-bs/css/responsive.bootstrap.css', 
                'node_modules/pnotify/dist/pnotify.css', 
                'node_modules/fullcalendar/dist/fullcalendar.css'
            ], 'public/css/all.css') 
            .copy('node_modules/admin-lte/dist/css/skins/*.*','public/css/skins') 
            .copy('node_modules/admin-lte/plugins','public/plugins') 
            // Imagens 
            .copy('resources/assets/images','public/img') 
            .copy('node_modules/js-marker-clusterer/images','public/img') 
            // Fontes 
            .copy('node_modules/font-awesome/fonts', 'public/fonts') 
            .copy('node_modules/bootstrap-sass/assets/fonts/bootstrap', 'public/fonts') 
            // Localização 
            .copy('node_modules/moment/locale', 'public/js/i18n/moment') 
            .copy('node_modules/select2/dist/js/i18n', 'public/js/i18n/select2') // Localização on demand (só carregada na tela que precisa) 
            .copy('node_modules/fullcalendar/dist/locale', 'public/js/i18n/ondemand/calendar') 
            .extract([
                'lodash','jquery','bootstrap-sass','vue','admin-lte', 'datatables.net','datatables.net-bs',
                'datatables.net-responsive','datatables.net-responsive-bs','datatables.net-select', 
                'pnotify/dist/umd/PNotify','select2','moment', 'jquery-ui/ui/widgets/draggable',
                'jquery-ui/ui/widgets/droppable','jquery-ui/ui/widgets/sortable', 'jquery-ui-touch-punch', 
                'eonasdan-bootstrap-datetimepicker', 'inputmask', 'dropzone', 'laravel-echo','pusher-js' 
            ], 'public/js/vendor.js') 
            .scripts('node_modules/fullcalendar/dist/fullcalendar.js', 'public/js/calendar.js') 
            .scripts('node_modules/quill/dist/quill.js', 'public/js/editor.js') 
            .js(['resources/assets/js/chart.js'], 'public/js/chart.js') 
            .scripts('node_modules/js-marker-clusterer/src/markerclusterer.js', 'public/js/markerclusterer.js') 
            .scripts('node_modules/bootstrap-slider/dist/bootstrap-slider.min.js', 'public/js/bootstrap-slider.js') 
            .scripts('node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css', 'public/css/bootstrap-slider.css') 
            .copy(['resources/assets/js/jquery-barcode.min.js'], 'public/plugins/barcode/jquery-barcode.min.js') 
            .scripts(['resources/assets/js/icon-list.json'], 'public/js/icon-list.json') 
            .autoload({ 
                jquery: ['$','window.jQuery','jQuery','window.$','jquery','window.jquery'] 
            }); 
   //.disableNotifications(); 
   // Notificações falhando... 
   if (mix.inProduction()) { mix.version(); };

 */