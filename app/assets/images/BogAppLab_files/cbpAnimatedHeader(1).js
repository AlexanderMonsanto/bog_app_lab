<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Action Controller: Exception caught</title>
  <style>
    body {
      background-color: #FAFAFA;
      color: #333;
      margin: 0px;
    }

    body, p, ol, ul, td {
      font-family: helvetica, verdana, arial, sans-serif;
      font-size:   13px;
      line-height: 18px;
    }

    pre {
      font-size: 11px;
      white-space: pre-wrap;
    }

    pre.box {
      border: 1px solid #EEE;
      padding: 10px;
      margin: 0px;
      width: 958px;
    }

    header {
      color: #F0F0F0;
      background: #C52F24;
      padding: 0.5em 1.5em;
    }

    h1 {
      margin: 0.2em 0;
      line-height: 1.1em;
      font-size: 2em;
    }

    h2 {
      color: #C52F24;
      line-height: 25px;
    }

    .details {
      border: 1px solid #D0D0D0;
      border-radius: 4px;
      margin: 1em 0px;
      display: block;
      width: 978px;
    }

    .summary {
      padding: 8px 15px;
      border-bottom: 1px solid #D0D0D0;
      display: block;
    }

    .details pre {
      margin: 5px;
      border: none;
    }

    #container {
      box-sizing: border-box;
      width: 100%;
      padding: 0 1.5em;
    }

    .source * {
      margin: 0px;
      padding: 0px;
    }

    .source {
      border: 1px solid #D9D9D9;
      background: #ECECEC;
      width: 978px;
    }

    .source pre {
      padding: 10px 0px;
      border: none;
    }

    .source .data {
      font-size: 80%;
      overflow: auto;
      background-color: #FFF;
    }

    .info {
      padding: 0.5em;
    }

    .source .data .line_numbers {
      background-color: #ECECEC;
      color: #AAA;
      padding: 1em .5em;
      border-right: 1px solid #DDD;
      text-align: right;
    }

    .line {
      padding-left: 10px;
    }

    .line:hover {
      background-color: #F6F6F6;
    }

    .line.active {
      background-color: #FFCCCC;
    }

    a { color: #980905; }
    a:visited { color: #666; }
    a:hover { color: #C52F24; }

      #route_table {
    margin: 0 auto 0;
    border-collapse: collapse;
  }

  #route_table td {
    padding: 0 30px;
  }

  #route_table tr.bottom th {
    padding-bottom: 10px;
    line-height: 15px;
  }

  #route_table .matched_paths {
    background-color: LightGoldenRodYellow;
  }

  #route_table .matched_paths {
    border-bottom: solid 3px SlateGrey;
  }

  #path_search {
    width: 80%;
    font-size: inherit;
  }

  </style>

  <script>
    var toggle = function(id) {
      var s = document.getElementById(id).style;
      s.display = s.display == 'none' ? 'block' : 'none';
      return false;
    }
    var show = function(id) {
      document.getElementById(id).style.display = 'block';
    }
    var hide = function(id) {
      document.getElementById(id).style.display = 'none';
    }
    var toggleTrace = function() {
      return toggle('blame_trace');
    }
    var toggleSessionDump = function() {
      return toggle('session_dump');
    }
    var toggleEnvDump = function() {
      return toggle('env_dump');
    }
  </script>
</head>
<body>

<header>
  <h1>Routing Error</h1>
</header>
<div id="container">
  <h2>Not Found</h2>

  
<p><code>Rails.root: /Users/jam1960us/Desktop/GAwork/RubyWork/bog_app_lab</code></p>

<div id="traces">
    <a href="#" onclick="hide(&#39;Framework-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Application-Trace&#39;);; return false;">Application Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Framework-Trace&#39;);; return false;">Framework Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Framework-Trace&#39;);show(&#39;Full-Trace&#39;);; return false;">Full Trace</a> 

    <div id="Application-Trace" style="display: block;">
      <pre><code>app/controllers/application_controller.rb:7:in `not_found&#39;</code></pre>
    </div>
    <div id="Framework-Trace" style="display: none;">
      <pre><code>actionpack (4.1.8) lib/action_controller/metal/implicit_render.rb:4:in `send_action&#39;
actionpack (4.1.8) lib/abstract_controller/base.rb:189:in `process_action&#39;
actionpack (4.1.8) lib/action_controller/metal/rendering.rb:10:in `process_action&#39;
actionpack (4.1.8) lib/abstract_controller/callbacks.rb:20:in `block in process_action&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:113:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:113:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:229:in `block in halting&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:229:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:229:in `block in halting&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:166:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:166:in `block in halting&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:166:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:166:in `block in halting&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:166:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:166:in `block in halting&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:86:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:86:in `run_callbacks&#39;
actionpack (4.1.8) lib/abstract_controller/callbacks.rb:19:in `process_action&#39;
actionpack (4.1.8) lib/action_controller/metal/rescue.rb:29:in `process_action&#39;
actionpack (4.1.8) lib/action_controller/metal/instrumentation.rb:31:in `block in process_action&#39;
activesupport (4.1.8) lib/active_support/notifications.rb:159:in `block in instrument&#39;
activesupport (4.1.8) lib/active_support/notifications/instrumenter.rb:20:in `instrument&#39;
activesupport (4.1.8) lib/active_support/notifications.rb:159:in `instrument&#39;
actionpack (4.1.8) lib/action_controller/metal/instrumentation.rb:30:in `process_action&#39;
actionpack (4.1.8) lib/action_controller/metal/params_wrapper.rb:250:in `process_action&#39;
activerecord (4.1.8) lib/active_record/railties/controller_runtime.rb:18:in `process_action&#39;
actionpack (4.1.8) lib/abstract_controller/base.rb:136:in `process&#39;
actionview (4.1.8) lib/action_view/rendering.rb:30:in `process&#39;
actionpack (4.1.8) lib/action_controller/metal.rb:196:in `dispatch&#39;
actionpack (4.1.8) lib/action_controller/metal/rack_delegation.rb:13:in `dispatch&#39;
actionpack (4.1.8) lib/action_controller/metal.rb:232:in `block in action&#39;
actionpack (4.1.8) lib/action_dispatch/routing/route_set.rb:82:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/routing/route_set.rb:82:in `dispatch&#39;
actionpack (4.1.8) lib/action_dispatch/routing/route_set.rb:50:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/journey/router.rb:73:in `block in call&#39;
actionpack (4.1.8) lib/action_dispatch/journey/router.rb:59:in `each&#39;
actionpack (4.1.8) lib/action_dispatch/journey/router.rb:59:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/routing/route_set.rb:678:in `call&#39;
rack (1.5.2) lib/rack/etag.rb:23:in `call&#39;
rack (1.5.2) lib/rack/conditionalget.rb:25:in `call&#39;
rack (1.5.2) lib/rack/head.rb:11:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/params_parser.rb:27:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/flash.rb:254:in `call&#39;
rack (1.5.2) lib/rack/session/abstract/id.rb:225:in `context&#39;
rack (1.5.2) lib/rack/session/abstract/id.rb:220:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/cookies.rb:560:in `call&#39;
activerecord (4.1.8) lib/active_record/query_cache.rb:36:in `call&#39;
activerecord (4.1.8) lib/active_record/connection_adapters/abstract/connection_pool.rb:621:in `call&#39;
activerecord (4.1.8) lib/active_record/migration.rb:380:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/callbacks.rb:29:in `block in call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:82:in `run_callbacks&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/callbacks.rb:27:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/reloader.rb:73:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/remote_ip.rb:76:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/debug_exceptions.rb:17:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;
railties (4.1.8) lib/rails/rack/logger.rb:38:in `call_app&#39;
railties (4.1.8) lib/rails/rack/logger.rb:20:in `block in call&#39;
activesupport (4.1.8) lib/active_support/tagged_logging.rb:68:in `block in tagged&#39;
activesupport (4.1.8) lib/active_support/tagged_logging.rb:26:in `tagged&#39;
activesupport (4.1.8) lib/active_support/tagged_logging.rb:68:in `tagged&#39;
railties (4.1.8) lib/rails/rack/logger.rb:20:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;
rack (1.5.2) lib/rack/methodoverride.rb:21:in `call&#39;
rack (1.5.2) lib/rack/runtime.rb:17:in `call&#39;
activesupport (4.1.8) lib/active_support/cache/strategy/local_cache_middleware.rb:26:in `call&#39;
rack (1.5.2) lib/rack/lock.rb:17:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/static.rb:84:in `call&#39;
rack (1.5.2) lib/rack/sendfile.rb:112:in `call&#39;
railties (4.1.8) lib/rails/engine.rb:514:in `call&#39;
railties (4.1.8) lib/rails/application.rb:144:in `call&#39;
rack (1.5.2) lib/rack/lock.rb:17:in `call&#39;
rack (1.5.2) lib/rack/content_length.rb:14:in `call&#39;
rack (1.5.2) lib/rack/handler/webrick.rb:60:in `service&#39;
/Users/jam1960us/.rbenv/versions/2.1.5/lib/ruby/2.1.0/webrick/httpserver.rb:138:in `service&#39;
/Users/jam1960us/.rbenv/versions/2.1.5/lib/ruby/2.1.0/webrick/httpserver.rb:94:in `run&#39;
/Users/jam1960us/.rbenv/versions/2.1.5/lib/ruby/2.1.0/webrick/server.rb:295:in `block in start_thread&#39;</code></pre>
    </div>
    <div id="Full-Trace" style="display: none;">
      <pre><code>app/controllers/application_controller.rb:7:in `not_found&#39;
actionpack (4.1.8) lib/action_controller/metal/implicit_render.rb:4:in `send_action&#39;
actionpack (4.1.8) lib/abstract_controller/base.rb:189:in `process_action&#39;
actionpack (4.1.8) lib/action_controller/metal/rendering.rb:10:in `process_action&#39;
actionpack (4.1.8) lib/abstract_controller/callbacks.rb:20:in `block in process_action&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:113:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:113:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:229:in `block in halting&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:229:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:229:in `block in halting&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:166:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:166:in `block in halting&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:166:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:166:in `block in halting&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:166:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:166:in `block in halting&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:86:in `call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:86:in `run_callbacks&#39;
actionpack (4.1.8) lib/abstract_controller/callbacks.rb:19:in `process_action&#39;
actionpack (4.1.8) lib/action_controller/metal/rescue.rb:29:in `process_action&#39;
actionpack (4.1.8) lib/action_controller/metal/instrumentation.rb:31:in `block in process_action&#39;
activesupport (4.1.8) lib/active_support/notifications.rb:159:in `block in instrument&#39;
activesupport (4.1.8) lib/active_support/notifications/instrumenter.rb:20:in `instrument&#39;
activesupport (4.1.8) lib/active_support/notifications.rb:159:in `instrument&#39;
actionpack (4.1.8) lib/action_controller/metal/instrumentation.rb:30:in `process_action&#39;
actionpack (4.1.8) lib/action_controller/metal/params_wrapper.rb:250:in `process_action&#39;
activerecord (4.1.8) lib/active_record/railties/controller_runtime.rb:18:in `process_action&#39;
actionpack (4.1.8) lib/abstract_controller/base.rb:136:in `process&#39;
actionview (4.1.8) lib/action_view/rendering.rb:30:in `process&#39;
actionpack (4.1.8) lib/action_controller/metal.rb:196:in `dispatch&#39;
actionpack (4.1.8) lib/action_controller/metal/rack_delegation.rb:13:in `dispatch&#39;
actionpack (4.1.8) lib/action_controller/metal.rb:232:in `block in action&#39;
actionpack (4.1.8) lib/action_dispatch/routing/route_set.rb:82:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/routing/route_set.rb:82:in `dispatch&#39;
actionpack (4.1.8) lib/action_dispatch/routing/route_set.rb:50:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/journey/router.rb:73:in `block in call&#39;
actionpack (4.1.8) lib/action_dispatch/journey/router.rb:59:in `each&#39;
actionpack (4.1.8) lib/action_dispatch/journey/router.rb:59:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/routing/route_set.rb:678:in `call&#39;
rack (1.5.2) lib/rack/etag.rb:23:in `call&#39;
rack (1.5.2) lib/rack/conditionalget.rb:25:in `call&#39;
rack (1.5.2) lib/rack/head.rb:11:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/params_parser.rb:27:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/flash.rb:254:in `call&#39;
rack (1.5.2) lib/rack/session/abstract/id.rb:225:in `context&#39;
rack (1.5.2) lib/rack/session/abstract/id.rb:220:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/cookies.rb:560:in `call&#39;
activerecord (4.1.8) lib/active_record/query_cache.rb:36:in `call&#39;
activerecord (4.1.8) lib/active_record/connection_adapters/abstract/connection_pool.rb:621:in `call&#39;
activerecord (4.1.8) lib/active_record/migration.rb:380:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/callbacks.rb:29:in `block in call&#39;
activesupport (4.1.8) lib/active_support/callbacks.rb:82:in `run_callbacks&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/callbacks.rb:27:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/reloader.rb:73:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/remote_ip.rb:76:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/debug_exceptions.rb:17:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;
railties (4.1.8) lib/rails/rack/logger.rb:38:in `call_app&#39;
railties (4.1.8) lib/rails/rack/logger.rb:20:in `block in call&#39;
activesupport (4.1.8) lib/active_support/tagged_logging.rb:68:in `block in tagged&#39;
activesupport (4.1.8) lib/active_support/tagged_logging.rb:26:in `tagged&#39;
activesupport (4.1.8) lib/active_support/tagged_logging.rb:68:in `tagged&#39;
railties (4.1.8) lib/rails/rack/logger.rb:20:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;
rack (1.5.2) lib/rack/methodoverride.rb:21:in `call&#39;
rack (1.5.2) lib/rack/runtime.rb:17:in `call&#39;
activesupport (4.1.8) lib/active_support/cache/strategy/local_cache_middleware.rb:26:in `call&#39;
rack (1.5.2) lib/rack/lock.rb:17:in `call&#39;
actionpack (4.1.8) lib/action_dispatch/middleware/static.rb:84:in `call&#39;
rack (1.5.2) lib/rack/sendfile.rb:112:in `call&#39;
railties (4.1.8) lib/rails/engine.rb:514:in `call&#39;
railties (4.1.8) lib/rails/application.rb:144:in `call&#39;
rack (1.5.2) lib/rack/lock.rb:17:in `call&#39;
rack (1.5.2) lib/rack/content_length.rb:14:in `call&#39;
rack (1.5.2) lib/rack/handler/webrick.rb:60:in `service&#39;
/Users/jam1960us/.rbenv/versions/2.1.5/lib/ruby/2.1.0/webrick/httpserver.rb:138:in `service&#39;
/Users/jam1960us/.rbenv/versions/2.1.5/lib/ruby/2.1.0/webrick/httpserver.rb:94:in `run&#39;
/Users/jam1960us/.rbenv/versions/2.1.5/lib/ruby/2.1.0/webrick/server.rb:295:in `block in start_thread&#39;</code></pre>
    </div>
</div>


    <h2>
      Routes
    </h2>

    <p>
      Routes match in priority from top to bottom
    </p>

    
<table id='route_table' class='route_table'>
  <thead>
    <tr>
      <th>Helper</th>
      <th>HTTP Verb</th>
      <th>Path</th>
      <th>Controller#Action</th>
    </tr>
    <tr class='bottom'>
      <th>
        <a data-route-helper="_path" href="#" title="Returns a relative path (without the http or domain)">Path</a> /
        <a data-route-helper="_url" href="#" title="Returns an absolute url (with the http and domain)">Url</a>
      </th>
      <th>
      </th>
      <th>
        <input id="path_search" name="path[]" placeholder="Path Match" type="search" />
      </th>
      <th>
      </th>
    </tr>
  </thead>
  <tbody class='matched_paths' id='matched_paths'>
  </tbody>
  <tbody>
    <tr class='route_row' data-helper='path'>
  <td data-route-name='root'>
      root<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/' data-regexp='^\/$'>
    /
  </td>
  <td data-route-reqs='home#home'>
    home#home
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='creatures'>
      creatures<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/creatures(.:format)' data-regexp='^\/creatures(?:\.([^\/.?]+))?$'>
    /creatures(.:format)
  </td>
  <td data-route-reqs='creatures#index'>
    creatures#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/creatures(.:format)' data-regexp='^\/creatures(?:\.([^\/.?]+))?$'>
    /creatures(.:format)
  </td>
  <td data-route-reqs='creatures#create'>
    creatures#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_creature'>
      new_creature<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/creatures/new(.:format)' data-regexp='^\/creatures\/new(?:\.([^\/.?]+))?$'>
    /creatures/new(.:format)
  </td>
  <td data-route-reqs='creatures#new'>
    creatures#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_creature'>
      edit_creature<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/creatures/:id/edit(.:format)' data-regexp='^\/creatures\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /creatures/:id/edit(.:format)
  </td>
  <td data-route-reqs='creatures#edit'>
    creatures#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='creature'>
      creature<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/creatures/:id(.:format)' data-regexp='^\/creatures\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /creatures/:id(.:format)
  </td>
  <td data-route-reqs='creatures#show'>
    creatures#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/creatures/:id(.:format)' data-regexp='^\/creatures\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /creatures/:id(.:format)
  </td>
  <td data-route-reqs='creatures#update'>
    creatures#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/creatures/:id(.:format)' data-regexp='^\/creatures\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /creatures/:id(.:format)
  </td>
  <td data-route-reqs='creatures#update'>
    creatures#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/creatures/:id(.:format)' data-regexp='^\/creatures\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /creatures/:id(.:format)
  </td>
  <td data-route-reqs='creatures#destroy'>
    creatures#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='tags'>
      tags<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/tags(.:format)' data-regexp='^\/tags(?:\.([^\/.?]+))?$'>
    /tags(.:format)
  </td>
  <td data-route-reqs='tags#index'>
    tags#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/tags(.:format)' data-regexp='^\/tags(?:\.([^\/.?]+))?$'>
    /tags(.:format)
  </td>
  <td data-route-reqs='tags#create'>
    tags#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_tag'>
      new_tag<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/tags/new(.:format)' data-regexp='^\/tags\/new(?:\.([^\/.?]+))?$'>
    /tags/new(.:format)
  </td>
  <td data-route-reqs='tags#new'>
    tags#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_tag'>
      edit_tag<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/tags/:id/edit(.:format)' data-regexp='^\/tags\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /tags/:id/edit(.:format)
  </td>
  <td data-route-reqs='tags#edit'>
    tags#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='tag'>
      tag<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/tags/:id(.:format)' data-regexp='^\/tags\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /tags/:id(.:format)
  </td>
  <td data-route-reqs='tags#show'>
    tags#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/tags/:id(.:format)' data-regexp='^\/tags\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /tags/:id(.:format)
  </td>
  <td data-route-reqs='tags#update'>
    tags#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/tags/:id(.:format)' data-regexp='^\/tags\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /tags/:id(.:format)
  </td>
  <td data-route-reqs='tags#update'>
    tags#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/tags/:id(.:format)' data-regexp='^\/tags\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /tags/:id(.:format)
  </td>
  <td data-route-reqs='tags#destroy'>
    tags#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='creature_tag'>
      creature_tag<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/creatures/tag/:tag(.:format)' data-regexp='^\/creatures\/tag\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /creatures/tag/:tag(.:format)
  </td>
  <td data-route-reqs='creatures#tag'>
    creatures#tag
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/*path(.:format)' data-regexp='^\/((.+?))(?:\.([^\/.?]+))?$'>
    /*path(.:format)
  </td>
  <td data-route-reqs='application#not_found'>
    application#not_found
  </td>
</tr>

  </tbody>
</table>

<script type='text/javascript'>
  function each(elems, func) {
    if (!elems instanceof Array) { elems = [elems]; }
    for (var i = 0, len = elems.length; i < len; i++) {
      func(elems[i]);
    }
  }

  function setValOn(elems, val) {
    each(elems, function(elem) {
      elem.innerHTML = val;
    });
  }

  function onClick(elems, func) {
    each(elems, function(elem) {
      elem.onclick = func;
    });
  }

  // Enables functionality to toggle between `_path` and `_url` helper suffixes
  function setupRouteToggleHelperLinks() {
    var toggleLinks = document.querySelectorAll('#route_table [data-route-helper]');
    onClick(toggleLinks, function(){
      var helperTxt   = this.getAttribute("data-route-helper"),
          helperElems = document.querySelectorAll('[data-route-name] span.helper');
      setValOn(helperElems, helperTxt);
    });
  }

  // takes an array of elements with a data-regexp attribute and
  // passes their parent <tr> into the callback function
  // if the regexp matches a given path
  function eachElemsForPath(elems, path, func) {
    each(elems, function(e){
      var reg = e.getAttribute("data-regexp");
      if (path.match(RegExp(reg))) {
        func(e.parentNode.cloneNode(true));
      }
    })
  }

  // Ensure path always starts with a slash "/" and remove params or fragments
  function sanitizePath(path) {
    var path = path.charAt(0) == '/' ? path : "/" + path;
    return path.replace(/\#.*|\?.*/, '');
  }

  // Enables path search functionality
  function setupMatchPaths() {
    var regexpElems     = document.querySelectorAll('#route_table [data-regexp]'),
        pathElem        = document.querySelector('#path_search'),
        selectedSection = document.querySelector('#matched_paths'),
        noMatchText     = '<tr><th colspan="4">None</th></tr>';


    // Remove matches if no path is present
    pathElem.onblur = function(e) {
      if (pathElem.value === "") selectedSection.innerHTML = "";
    }

    // On key press perform a search for matching paths
    pathElem.onkeyup = function(e){
      var path        = sanitizePath(pathElem.value),
          defaultText = '<tr><th colspan="4">Paths Matching (' + escape(path) + '):</th></tr>';

      // Clear out results section
      selectedSection.innerHTML= defaultText;

      // Display matches if they exist
      eachElemsForPath(regexpElems, path, function(e){
        selectedSection.appendChild(e);
      });

      // If no match present, tell the user
      if (selectedSection.innerHTML === defaultText) {
        selectedSection.innerHTML = selectedSection.innerHTML + noMatchText;
      }
    }
  }

  setupMatchPaths();
  setupRouteToggleHelperLinks();
</script>

</div>


</body>
</html>
