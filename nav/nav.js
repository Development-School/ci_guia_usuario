function create_menu(basepath)
{
	var base = (basepath == 'null') ? '' : basepath;

	document.write(
		'<table cellpadding="0" cellspaceing="0" border="0" style="width:98%"><tr>' +
		'<td class="td" valign="top">' +

		'<ul>' +
		'<li><a href="'+base+'index.html">Home do Guia do Usuário</a></li>' +
		'<li><a href="'+base+'toc.html">Índice de Páginas</a></li>' +
		'</ul>' +

		'<h3>Informações Básicas</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general/requirements.html">Requisitos do Servidor</a></li>' +
			'<li><a href="'+base+'license.html">Contrato de Licença</a></li>' +
			'<li><a href="'+base+'changelog.html">Histórico de Mudanças</a></li>' +
			'<li><a href="'+base+'general/credits.html">Créditos</a></li>' +
		'</ul>' +

		'<h3>Instalação</h3>' +
		'<ul>' +
			'<li><a href="'+base+'installation/downloads.html">Baixando o CodeIgniter</a></li>' +
			'<li><a href="'+base+'installation/index.html">Instruções de Instalação</a></li>' +
			'<li><a href="'+base+'installation/upgrading.html">Atualizando de uma Versão Anterior</a></li>' +
			'<li><a href="'+base+'installation/troubleshooting.html">Resolvendo Problemas</a></li>' +
		'</ul>' +

		'<a href="'+base+'overview/index.html"><h3>Introdução</h3></a>' +
		'<ul>' +
			'<li><a href="'+base+'overview/getting_started.html">Primeiros Passos</a></li>' +
			'<li><a href="'+base+'overview/at_a_glance.html">Visão Geral do CodeIgniter</a></li>' +
			'<li><a href="'+base+'overview/cheatsheets.html">Referências Rápidas</a></li>' +
			'<li><a href="'+base+'overview/features.html">Recursos Suportados</a></li>' +
			'<li><a href="'+base+'overview/appflow.html">Fluxograma da Aplicação</a></li>' +
			'<li><a href="'+base+'overview/mvc.html">Model-View-Controller</a></li>' +
			'<li><a href="'+base+'overview/goals.html">Objetivos da Arquitetura</a></li>' +
		'</ul>' +
		
		'<h3>Tutorial</h3>' +
		'<ul>' +
			'<li><a href="'+base+'tutorial/index.html">Introdução</a></li>' +
			'<li><a href="'+base+'tutorial/static_pages.html">Páginas Estáticas</a></li>' +
			'<li><a href="'+base+'tutorial/news_section.html">Seção de Notícias</a></li>' +
			'<li><a href="'+base+'tutorial/create_news_items.html">Criando Seção de Notícias</a></li>' +
			'<li><a href="'+base+'tutorial/conclusion.html">Conclusão</a></li>' +
		'</ul>' +
		
		'</td><td class="td_sep" valign="top">' +

		'<h3>Tópicos Gerais</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general/urls.html">URLs do CodeIgniter</a></li>' +
			'<li><a href="'+base+'general/controllers.html">Controllers</a></li>' +
			'<li><a href="'+base+'general/reserved_names.html">Nomes Reservados</a></li>' +
			'<li><a href="'+base+'general/views.html">Views</a></li>' +
			'<li><a href="'+base+'general/models.html">Models</a></li>' +
			'<li><a href="'+base+'general/helpers.html">Helpers</a></li>' +
			'<li><a href="'+base+'general/libraries.html">Bibliotecas do CodeIgniter</a></li>' +
			'<li><a href="'+base+'general/creating_libraries.html">Criando Bibliotecas</a></li>' +
			'<li><a href="'+base+'general/drivers.html">Drivers do CodeIgniter</a></li>' +
			'<li><a href="'+base+'general/creating_drivers.html">Criando Drivers</a></li>' +
			'<li><a href="'+base+'general/core_classes.html">Criando Classes do Núcleo</a></li>' +
			'<li><a href="'+base+'general/hooks.html">Ganchos - Estendendo o Núcleo</a></li>' +
			'<li><a href="'+base+'general/autoloader.html">Recursos de Auto-Carregamento</a></li>' +
			'<li><a href="'+base+'general/common_functions.html">Funções Comuns</a></li>' +
			'<li><a href="'+base+'general/routing.html">Rotas para URLs</a></li>' +
			'<li><a href="'+base+'general/errors.html">Tratamento de Erros</a></li>' +
			'<li><a href="'+base+'general/caching.html">Cache de Página</a></li>' +
			'<li><a href="'+base+'general/profiling.html">Aperfeiçoando seu Aplicativo</a></li>' +
			'<li><a href="'+base+'general/cli.html">Trabalhando com CLI</a></li>' +
			'<li><a href="'+base+'general/managing_apps.html">Gerenciando Aplicações</a></li>' +
			'<li><a href="'+base+'general/environments.html">Ambientes de Desenvolvimento</a></li>' +
			'<li><a href="'+base+'general/alternative_php.html">Sintaxe PHP Alternativa</a></li>' +
			'<li><a href="'+base+'general/security.html">Segurança</a></li>' +
			'<li><a href="'+base+'general/styleguide.html">Guia de Escrita PHP</a></li>' +
			'<li><a href="'+base+'doc_style/index.html">Escrevendo Documentação</a></li>' +
		'</ul>' +

		'<h3>Recursos Adicionais</h3>' +
		'<ul>' +
		'<li><a href="http://forum.codeigniter.com/" target="_blank">Fórum da Comunidade</a></li>' +
		'<li><a href="https://github.com/bcit-ci/CodeIgniter/wiki" target="_blank">Wiki da Comunidade</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Referência das Classes</h3>' +
		'<ul>' +
		'<li><a href="'+base+'libraries/benchmark.html">Classe de Benchmark</a></li>' +
		'<li><a href="'+base+'libraries/calendar.html">Classe de Calendários</a></li>' +
		'<li><a href="'+base+'libraries/cart.html">Classe Carinho de Compras</a></li>' +
		'<li><a href="'+base+'libraries/config.html">Classe de Cofigurações</a></li>' +
		'<li><a href="'+base+'libraries/email.html">Classe de Email</a></li>' +
		'<li><a href="'+base+'libraries/encryption.html">Classe de Criptografia</a></li>' +
		'<li><a href="'+base+'libraries/file_uploading.html">Classe Upload de Arquivos</a></li>' +
		'<li><a href="'+base+'libraries/form_validation.html">Classe Validação de Formulário</a></li>' +
		'<li><a href="'+base+'libraries/ftp.html">Classe FTP</a></li>' +
		'<li><a href="'+base+'libraries/table.html">Classe de Tabela HTML</a></li>' +
		'<li><a href="'+base+'libraries/image_lib.html">Classe de Manipulação de Imagens</a></li>' +
		'<li><a href="'+base+'libraries/input.html">Classe para Entradas</a></li>' +
		'<li><a href="'+base+'libraries/javascript.html">Classe de Javascript</a></li>' +
		'<li><a href="'+base+'libraries/loader.html">Classe de Carregamento</a></li>' +
		'<li><a href="'+base+'libraries/language.html">Classe de Idiomas</a></li>' +
		'<li><a href="'+base+'libraries/migration.html">Classe de Migração</a></li>' +
		'<li><a href="'+base+'libraries/output.html">Classe para Saidas</a></li>' +
		'<li><a href="'+base+'libraries/pagination.html">Classe de Paginação</a></li>' +
		'<li><a href="'+base+'libraries/security.html">Classe de Segurança</a></li>' +
		'<li><a href="'+base+'libraries/sessions.html">Classe de Sessões</a></li>' +
		'<li><a href="'+base+'libraries/trackback.html">Classe Trackback</a></li>' +
		'<li><a href="'+base+'libraries/parser.html">Classe Interpletadora de Template</a></li>' +
		'<li><a href="'+base+'libraries/typography.html">Classe de Tipografia</a></li>' +
		'<li><a href="'+base+'libraries/unit_testing.html">Classe de Teste Unitário</a></li>' +
		'<li><a href="'+base+'libraries/uri.html">Classe de URL</a></li>' +
		'<li><a href="'+base+'libraries/user_agent.html">Classe Agente de Usuário</a></li>' +
		'<li><a href="'+base+'libraries/xmlrpc.html">Classe XML-RPC</a></li>' +
		'<li><a href="'+base+'libraries/zip.html">Classe de Codificação Zip</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Referência dos Driver</h3>' +
		'<ul>' +
		'<li><a href="'+base+'libraries/caching.html">Classe de Cache</a></li>' +
		'<li><a href="'+base+'database/index.html">Classe de Banco de Dados</a></li>' +
		'<li><a href="'+base+'libraries/javascript.html">Classe de Javascript</a></li>' +
		'</ul>' +

		'<h3>Referência dos Helpers</h3>' +
		'<ul>' +
		'<li><a href="'+base+'helpers/array_helper.html">Helper para Array</a></li>' +
		'<li><a href="'+base+'helpers/captcha_helper.html">Helper para CAPTCHA</a></li>' +
		'<li><a href="'+base+'helpers/cookie_helper.html">Helper para Cookie</a></li>' +
		'<li><a href="'+base+'helpers/date_helper.html">Helper para Datas</a></li>' +
		'<li><a href="'+base+'helpers/directory_helper.html">Helper para Diretório</a></li>' +
		'<li><a href="'+base+'helpers/download_helper.html">Helper para Download</a></li>' +
		'<li><a href="'+base+'helpers/email_helper.html">Helper para Email</a></li>' +
		'<li><a href="'+base+'helpers/file_helper.html">Helper para Arquivos</a></li>' +
		'<li><a href="'+base+'helpers/form_helper.html">Helper para Formulários</a></li>' +
		'<li><a href="'+base+'helpers/html_helper.html">Helper para HTML</a></li>' +
		'<li><a href="'+base+'helpers/inflector_helper.html">Helper para Flexão Gramatical</a></li>' +
		'<li><a href="'+base+'helpers/language_helper.html">Helper para Idiomas</a></li>' +
		'<li><a href="'+base+'helpers/number_helper.html">Helper para Números</a></li>' +
		'<li><a href="'+base+'helpers/path_helper.html">Helper para Path</a></li>' +
		'<li><a href="'+base+'helpers/security_helper.html">Helper para Segurança</a></li>' +
		'<li><a href="'+base+'helpers/smiley_helper.html">Helper para Emoticon</a></li>' +
		'<li><a href="'+base+'helpers/string_helper.html">Helper para String</a></li>' +
		'<li><a href="'+base+'helpers/text_helper.html">Helper para Texto</a></li>' +
		'<li><a href="'+base+'helpers/typography_helper.html">Helper para Tipografia</a></li>' +
		'<li><a href="'+base+'helpers/url_helper.html">Helper para URL</a></li>' +
		'<li><a href="'+base+'helpers/xml_helper.html">Helper para XML</a></li>' +
		'</ul>' +

		'</td></tr></table>');
}